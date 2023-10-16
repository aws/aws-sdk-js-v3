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
import { XMLParser } from "fast-xml-parser";

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
    Action: "CloneReceiptRuleSet",
    Version: "2010-12-01",
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
    Action: "CreateConfigurationSet",
    Version: "2010-12-01",
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
    Action: "CreateConfigurationSetEventDestination",
    Version: "2010-12-01",
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
    Action: "CreateConfigurationSetTrackingOptions",
    Version: "2010-12-01",
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
    Action: "CreateCustomVerificationEmailTemplate",
    Version: "2010-12-01",
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
    Action: "CreateReceiptFilter",
    Version: "2010-12-01",
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
    Action: "CreateReceiptRule",
    Version: "2010-12-01",
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
    Action: "CreateReceiptRuleSet",
    Version: "2010-12-01",
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
    Action: "CreateTemplate",
    Version: "2010-12-01",
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
    Action: "DeleteConfigurationSet",
    Version: "2010-12-01",
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
    Action: "DeleteConfigurationSetEventDestination",
    Version: "2010-12-01",
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
    Action: "DeleteConfigurationSetTrackingOptions",
    Version: "2010-12-01",
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
    Action: "DeleteCustomVerificationEmailTemplate",
    Version: "2010-12-01",
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
    Action: "DeleteIdentity",
    Version: "2010-12-01",
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
    Action: "DeleteIdentityPolicy",
    Version: "2010-12-01",
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
    Action: "DeleteReceiptFilter",
    Version: "2010-12-01",
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
    Action: "DeleteReceiptRule",
    Version: "2010-12-01",
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
    Action: "DeleteReceiptRuleSet",
    Version: "2010-12-01",
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
    Action: "DeleteTemplate",
    Version: "2010-12-01",
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
    Action: "DeleteVerifiedEmailAddress",
    Version: "2010-12-01",
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
    Action: "DescribeActiveReceiptRuleSet",
    Version: "2010-12-01",
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
    Action: "DescribeConfigurationSet",
    Version: "2010-12-01",
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
    Action: "DescribeReceiptRule",
    Version: "2010-12-01",
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
    Action: "DescribeReceiptRuleSet",
    Version: "2010-12-01",
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
    Action: "GetAccountSendingEnabled",
    Version: "2010-12-01",
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
    Action: "GetCustomVerificationEmailTemplate",
    Version: "2010-12-01",
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
    Action: "GetIdentityDkimAttributes",
    Version: "2010-12-01",
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
    Action: "GetIdentityMailFromDomainAttributes",
    Version: "2010-12-01",
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
    Action: "GetIdentityNotificationAttributes",
    Version: "2010-12-01",
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
    Action: "GetIdentityPolicies",
    Version: "2010-12-01",
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
    Action: "GetIdentityVerificationAttributes",
    Version: "2010-12-01",
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
    Action: "GetSendQuota",
    Version: "2010-12-01",
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
    Action: "GetSendStatistics",
    Version: "2010-12-01",
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
    Action: "GetTemplate",
    Version: "2010-12-01",
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
    Action: "ListConfigurationSets",
    Version: "2010-12-01",
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
    Action: "ListCustomVerificationEmailTemplates",
    Version: "2010-12-01",
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
    Action: "ListIdentities",
    Version: "2010-12-01",
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
    Action: "ListIdentityPolicies",
    Version: "2010-12-01",
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
    Action: "ListReceiptFilters",
    Version: "2010-12-01",
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
    Action: "ListReceiptRuleSets",
    Version: "2010-12-01",
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
    Action: "ListTemplates",
    Version: "2010-12-01",
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
    Action: "ListVerifiedEmailAddresses",
    Version: "2010-12-01",
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
    Action: "PutConfigurationSetDeliveryOptions",
    Version: "2010-12-01",
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
    Action: "PutIdentityPolicy",
    Version: "2010-12-01",
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
    Action: "ReorderReceiptRuleSet",
    Version: "2010-12-01",
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
    Action: "SendBounce",
    Version: "2010-12-01",
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
    Action: "SendBulkTemplatedEmail",
    Version: "2010-12-01",
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
    Action: "SendCustomVerificationEmail",
    Version: "2010-12-01",
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
    Action: "SendEmail",
    Version: "2010-12-01",
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
    Action: "SendRawEmail",
    Version: "2010-12-01",
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
    Action: "SendTemplatedEmail",
    Version: "2010-12-01",
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
    Action: "SetActiveReceiptRuleSet",
    Version: "2010-12-01",
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
    Action: "SetIdentityDkimEnabled",
    Version: "2010-12-01",
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
    Action: "SetIdentityFeedbackForwardingEnabled",
    Version: "2010-12-01",
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
    Action: "SetIdentityHeadersInNotificationsEnabled",
    Version: "2010-12-01",
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
    Action: "SetIdentityMailFromDomain",
    Version: "2010-12-01",
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
    Action: "SetIdentityNotificationTopic",
    Version: "2010-12-01",
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
    Action: "SetReceiptRulePosition",
    Version: "2010-12-01",
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
    Action: "TestRenderTemplate",
    Version: "2010-12-01",
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
    Action: "UpdateAccountSendingEnabled",
    Version: "2010-12-01",
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
    Action: "UpdateConfigurationSetEventDestination",
    Version: "2010-12-01",
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
    Action: "UpdateConfigurationSetReputationMetricsEnabled",
    Version: "2010-12-01",
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
    Action: "UpdateConfigurationSetSendingEnabled",
    Version: "2010-12-01",
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
    Action: "UpdateConfigurationSetTrackingOptions",
    Version: "2010-12-01",
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
    Action: "UpdateCustomVerificationEmailTemplate",
    Version: "2010-12-01",
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
    Action: "UpdateReceiptRule",
    Version: "2010-12-01",
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
    Action: "UpdateTemplate",
    Version: "2010-12-01",
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
    Action: "VerifyDomainDkim",
    Version: "2010-12-01",
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
    Action: "VerifyDomainIdentity",
    Version: "2010-12-01",
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
    Action: "VerifyEmailAddress",
    Version: "2010-12-01",
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
    Action: "VerifyEmailIdentity",
    Version: "2010-12-01",
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
    return de_CloneReceiptRuleSetCommandError(output, context);
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
 * deserializeAws_queryCloneReceiptRuleSetCommandError
 */
const de_CloneReceiptRuleSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloneReceiptRuleSetCommandOutput> => {
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
 * deserializeAws_queryCreateConfigurationSetCommand
 */
export const de_CreateConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateConfigurationSetCommandError(output, context);
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
 * deserializeAws_queryCreateConfigurationSetCommandError
 */
const de_CreateConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetAlreadyExists":
    case "com.amazonaws.ses#ConfigurationSetAlreadyExistsException":
      throw await de_ConfigurationSetAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidConfigurationSet":
    case "com.amazonaws.ses#InvalidConfigurationSetException":
      throw await de_InvalidConfigurationSetExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.ses#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryCreateConfigurationSetEventDestinationCommand
 */
export const de_CreateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateConfigurationSetEventDestinationCommandError(output, context);
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
 * deserializeAws_queryCreateConfigurationSetEventDestinationCommandError
 */
const de_CreateConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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
    case "LimitExceeded":
    case "com.amazonaws.ses#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryCreateConfigurationSetTrackingOptionsCommand
 */
export const de_CreateConfigurationSetTrackingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetTrackingOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateConfigurationSetTrackingOptionsCommandError(output, context);
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
 * deserializeAws_queryCreateConfigurationSetTrackingOptionsCommandError
 */
const de_CreateConfigurationSetTrackingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetTrackingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExist":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidTrackingOptions":
    case "com.amazonaws.ses#InvalidTrackingOptionsException":
      throw await de_InvalidTrackingOptionsExceptionRes(parsedOutput, context);
    case "TrackingOptionsAlreadyExistsException":
    case "com.amazonaws.ses#TrackingOptionsAlreadyExistsException":
      throw await de_TrackingOptionsAlreadyExistsExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryCreateCustomVerificationEmailTemplateCommand
 */
export const de_CreateCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCustomVerificationEmailTemplateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateCustomVerificationEmailTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryCreateCustomVerificationEmailTemplateCommandError
 */
const de_CreateCustomVerificationEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomVerificationEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomVerificationEmailInvalidContent":
    case "com.amazonaws.ses#CustomVerificationEmailInvalidContentException":
      throw await de_CustomVerificationEmailInvalidContentExceptionRes(parsedOutput, context);
    case "CustomVerificationEmailTemplateAlreadyExists":
    case "com.amazonaws.ses#CustomVerificationEmailTemplateAlreadyExistsException":
      throw await de_CustomVerificationEmailTemplateAlreadyExistsExceptionRes(parsedOutput, context);
    case "FromEmailAddressNotVerified":
    case "com.amazonaws.ses#FromEmailAddressNotVerifiedException":
      throw await de_FromEmailAddressNotVerifiedExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.ses#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryCreateReceiptFilterCommand
 */
export const de_CreateReceiptFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReceiptFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateReceiptFilterCommandError(output, context);
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
 * deserializeAws_queryCreateReceiptFilterCommandError
 */
const de_CreateReceiptFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReceiptFilterCommandOutput> => {
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
 * deserializeAws_queryCreateReceiptRuleCommand
 */
export const de_CreateReceiptRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReceiptRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateReceiptRuleCommandError(output, context);
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
 * deserializeAws_queryCreateReceiptRuleCommandError
 */
const de_CreateReceiptRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReceiptRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExists":
    case "com.amazonaws.ses#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidLambdaFunction":
    case "com.amazonaws.ses#InvalidLambdaFunctionException":
      throw await de_InvalidLambdaFunctionExceptionRes(parsedOutput, context);
    case "InvalidS3Configuration":
    case "com.amazonaws.ses#InvalidS3ConfigurationException":
      throw await de_InvalidS3ConfigurationExceptionRes(parsedOutput, context);
    case "InvalidSnsTopic":
    case "com.amazonaws.ses#InvalidSnsTopicException":
      throw await de_InvalidSnsTopicExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.ses#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RuleDoesNotExist":
    case "com.amazonaws.ses#RuleDoesNotExistException":
      throw await de_RuleDoesNotExistExceptionRes(parsedOutput, context);
    case "RuleSetDoesNotExist":
    case "com.amazonaws.ses#RuleSetDoesNotExistException":
      throw await de_RuleSetDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryCreateReceiptRuleSetCommand
 */
export const de_CreateReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateReceiptRuleSetCommandError(output, context);
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
 * deserializeAws_queryCreateReceiptRuleSetCommandError
 */
const de_CreateReceiptRuleSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReceiptRuleSetCommandOutput> => {
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
 * deserializeAws_queryCreateTemplateCommand
 */
export const de_CreateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTemplateCommandError(output, context);
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
 * deserializeAws_queryCreateTemplateCommandError
 */
const de_CreateTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExists":
    case "com.amazonaws.ses#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidTemplate":
    case "com.amazonaws.ses#InvalidTemplateException":
      throw await de_InvalidTemplateExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.ses#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteConfigurationSetCommand
 */
export const de_DeleteConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConfigurationSetCommandError(output, context);
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
 * deserializeAws_queryDeleteConfigurationSetCommandError
 */
const de_DeleteConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExist":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteConfigurationSetEventDestinationCommand
 */
export const de_DeleteConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConfigurationSetEventDestinationCommandError(output, context);
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
 * deserializeAws_queryDeleteConfigurationSetEventDestinationCommandError
 */
const de_DeleteConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExist":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
    case "EventDestinationDoesNotExist":
    case "com.amazonaws.ses#EventDestinationDoesNotExistException":
      throw await de_EventDestinationDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommand
 */
export const de_DeleteConfigurationSetTrackingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetTrackingOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConfigurationSetTrackingOptionsCommandError(output, context);
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
 * deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommandError
 */
const de_DeleteConfigurationSetTrackingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetTrackingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExist":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
    case "TrackingOptionsDoesNotExistException":
    case "com.amazonaws.ses#TrackingOptionsDoesNotExistException":
      throw await de_TrackingOptionsDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteCustomVerificationEmailTemplateCommand
 */
export const de_DeleteCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCustomVerificationEmailTemplateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCustomVerificationEmailTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteCustomVerificationEmailTemplateCommandError
 */
const de_DeleteCustomVerificationEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomVerificationEmailTemplateCommandOutput> => {
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
 * deserializeAws_queryDeleteIdentityCommand
 */
export const de_DeleteIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteIdentityCommandError(output, context);
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
 * deserializeAws_queryDeleteIdentityCommandError
 */
const de_DeleteIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityCommandOutput> => {
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
 * deserializeAws_queryDeleteIdentityPolicyCommand
 */
export const de_DeleteIdentityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteIdentityPolicyCommandError(output, context);
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
 * deserializeAws_queryDeleteIdentityPolicyCommandError
 */
const de_DeleteIdentityPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityPolicyCommandOutput> => {
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
 * deserializeAws_queryDeleteReceiptFilterCommand
 */
export const de_DeleteReceiptFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReceiptFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteReceiptFilterCommandError(output, context);
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
 * deserializeAws_queryDeleteReceiptFilterCommandError
 */
const de_DeleteReceiptFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReceiptFilterCommandOutput> => {
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
 * deserializeAws_queryDeleteReceiptRuleCommand
 */
export const de_DeleteReceiptRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReceiptRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteReceiptRuleCommandError(output, context);
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
 * deserializeAws_queryDeleteReceiptRuleCommandError
 */
const de_DeleteReceiptRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReceiptRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RuleSetDoesNotExist":
    case "com.amazonaws.ses#RuleSetDoesNotExistException":
      throw await de_RuleSetDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteReceiptRuleSetCommand
 */
export const de_DeleteReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteReceiptRuleSetCommandError(output, context);
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
 * deserializeAws_queryDeleteReceiptRuleSetCommandError
 */
const de_DeleteReceiptRuleSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReceiptRuleSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CannotDelete":
    case "com.amazonaws.ses#CannotDeleteException":
      throw await de_CannotDeleteExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteTemplateCommand
 */
export const de_DeleteTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTemplateCommandError(output, context);
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
 * deserializeAws_queryDeleteTemplateCommandError
 */
const de_DeleteTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateCommandOutput> => {
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
 * deserializeAws_queryDeleteVerifiedEmailAddressCommand
 */
export const de_DeleteVerifiedEmailAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVerifiedEmailAddressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteVerifiedEmailAddressCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteVerifiedEmailAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteVerifiedEmailAddressCommandError
 */
const de_DeleteVerifiedEmailAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVerifiedEmailAddressCommandOutput> => {
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
 * deserializeAws_queryDescribeActiveReceiptRuleSetCommand
 */
export const de_DescribeActiveReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActiveReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeActiveReceiptRuleSetCommandError(output, context);
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
 * deserializeAws_queryDescribeActiveReceiptRuleSetCommandError
 */
const de_DescribeActiveReceiptRuleSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActiveReceiptRuleSetCommandOutput> => {
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
 * deserializeAws_queryDescribeConfigurationSetCommand
 */
export const de_DescribeConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConfigurationSetCommandError(output, context);
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
 * deserializeAws_queryDescribeConfigurationSetCommandError
 */
const de_DescribeConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExist":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeReceiptRuleCommand
 */
export const de_DescribeReceiptRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReceiptRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReceiptRuleCommandError(output, context);
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
 * deserializeAws_queryDescribeReceiptRuleCommandError
 */
const de_DescribeReceiptRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReceiptRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RuleDoesNotExist":
    case "com.amazonaws.ses#RuleDoesNotExistException":
      throw await de_RuleDoesNotExistExceptionRes(parsedOutput, context);
    case "RuleSetDoesNotExist":
    case "com.amazonaws.ses#RuleSetDoesNotExistException":
      throw await de_RuleSetDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeReceiptRuleSetCommand
 */
export const de_DescribeReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReceiptRuleSetCommandError(output, context);
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
 * deserializeAws_queryDescribeReceiptRuleSetCommandError
 */
const de_DescribeReceiptRuleSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReceiptRuleSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RuleSetDoesNotExist":
    case "com.amazonaws.ses#RuleSetDoesNotExistException":
      throw await de_RuleSetDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryGetAccountSendingEnabledCommand
 */
export const de_GetAccountSendingEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSendingEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAccountSendingEnabledCommandError(output, context);
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
 * deserializeAws_queryGetAccountSendingEnabledCommandError
 */
const de_GetAccountSendingEnabledCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSendingEnabledCommandOutput> => {
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
 * deserializeAws_queryGetCustomVerificationEmailTemplateCommand
 */
export const de_GetCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCustomVerificationEmailTemplateCommandError(output, context);
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
 * deserializeAws_queryGetCustomVerificationEmailTemplateCommandError
 */
const de_GetCustomVerificationEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomVerificationEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomVerificationEmailTemplateDoesNotExist":
    case "com.amazonaws.ses#CustomVerificationEmailTemplateDoesNotExistException":
      throw await de_CustomVerificationEmailTemplateDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryGetIdentityDkimAttributesCommand
 */
export const de_GetIdentityDkimAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityDkimAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetIdentityDkimAttributesCommandError(output, context);
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
 * deserializeAws_queryGetIdentityDkimAttributesCommandError
 */
const de_GetIdentityDkimAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityDkimAttributesCommandOutput> => {
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
 * deserializeAws_queryGetIdentityMailFromDomainAttributesCommand
 */
export const de_GetIdentityMailFromDomainAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityMailFromDomainAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetIdentityMailFromDomainAttributesCommandError(output, context);
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
 * deserializeAws_queryGetIdentityMailFromDomainAttributesCommandError
 */
const de_GetIdentityMailFromDomainAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityMailFromDomainAttributesCommandOutput> => {
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
 * deserializeAws_queryGetIdentityNotificationAttributesCommand
 */
export const de_GetIdentityNotificationAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityNotificationAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetIdentityNotificationAttributesCommandError(output, context);
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
 * deserializeAws_queryGetIdentityNotificationAttributesCommandError
 */
const de_GetIdentityNotificationAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityNotificationAttributesCommandOutput> => {
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
 * deserializeAws_queryGetIdentityPoliciesCommand
 */
export const de_GetIdentityPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetIdentityPoliciesCommandError(output, context);
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
 * deserializeAws_queryGetIdentityPoliciesCommandError
 */
const de_GetIdentityPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityPoliciesCommandOutput> => {
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
 * deserializeAws_queryGetIdentityVerificationAttributesCommand
 */
export const de_GetIdentityVerificationAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityVerificationAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetIdentityVerificationAttributesCommandError(output, context);
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
 * deserializeAws_queryGetIdentityVerificationAttributesCommandError
 */
const de_GetIdentityVerificationAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityVerificationAttributesCommandOutput> => {
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
 * deserializeAws_queryGetSendQuotaCommand
 */
export const de_GetSendQuotaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSendQuotaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSendQuotaCommandError(output, context);
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
 * deserializeAws_queryGetSendQuotaCommandError
 */
const de_GetSendQuotaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSendQuotaCommandOutput> => {
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
 * deserializeAws_queryGetSendStatisticsCommand
 */
export const de_GetSendStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSendStatisticsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSendStatisticsCommandError(output, context);
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
 * deserializeAws_queryGetSendStatisticsCommandError
 */
const de_GetSendStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSendStatisticsCommandOutput> => {
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
 * deserializeAws_queryGetTemplateCommand
 */
export const de_GetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTemplateCommandError(output, context);
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
 * deserializeAws_queryGetTemplateCommandError
 */
const de_GetTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TemplateDoesNotExist":
    case "com.amazonaws.ses#TemplateDoesNotExistException":
      throw await de_TemplateDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryListConfigurationSetsCommand
 */
export const de_ListConfigurationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListConfigurationSetsCommandError(output, context);
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
 * deserializeAws_queryListConfigurationSetsCommandError
 */
const de_ListConfigurationSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> => {
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
 * deserializeAws_queryListCustomVerificationEmailTemplatesCommand
 */
export const de_ListCustomVerificationEmailTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomVerificationEmailTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCustomVerificationEmailTemplatesCommandError(output, context);
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
 * deserializeAws_queryListCustomVerificationEmailTemplatesCommandError
 */
const de_ListCustomVerificationEmailTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomVerificationEmailTemplatesCommandOutput> => {
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
 * deserializeAws_queryListIdentitiesCommand
 */
export const de_ListIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListIdentitiesCommandError(output, context);
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
 * deserializeAws_queryListIdentitiesCommandError
 */
const de_ListIdentitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentitiesCommandOutput> => {
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
 * deserializeAws_queryListIdentityPoliciesCommand
 */
export const de_ListIdentityPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListIdentityPoliciesCommandError(output, context);
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
 * deserializeAws_queryListIdentityPoliciesCommandError
 */
const de_ListIdentityPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityPoliciesCommandOutput> => {
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
 * deserializeAws_queryListReceiptFiltersCommand
 */
export const de_ListReceiptFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceiptFiltersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListReceiptFiltersCommandError(output, context);
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
 * deserializeAws_queryListReceiptFiltersCommandError
 */
const de_ListReceiptFiltersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceiptFiltersCommandOutput> => {
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
 * deserializeAws_queryListReceiptRuleSetsCommand
 */
export const de_ListReceiptRuleSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceiptRuleSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListReceiptRuleSetsCommandError(output, context);
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
 * deserializeAws_queryListReceiptRuleSetsCommandError
 */
const de_ListReceiptRuleSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceiptRuleSetsCommandOutput> => {
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
 * deserializeAws_queryListTemplatesCommand
 */
export const de_ListTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTemplatesCommandError(output, context);
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
 * deserializeAws_queryListTemplatesCommandError
 */
const de_ListTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
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
 * deserializeAws_queryListVerifiedEmailAddressesCommand
 */
export const de_ListVerifiedEmailAddressesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVerifiedEmailAddressesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListVerifiedEmailAddressesCommandError(output, context);
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
 * deserializeAws_queryListVerifiedEmailAddressesCommandError
 */
const de_ListVerifiedEmailAddressesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVerifiedEmailAddressesCommandOutput> => {
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
 * deserializeAws_queryPutConfigurationSetDeliveryOptionsCommand
 */
export const de_PutConfigurationSetDeliveryOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutConfigurationSetDeliveryOptionsCommandError(output, context);
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
 * deserializeAws_queryPutConfigurationSetDeliveryOptionsCommandError
 */
const de_PutConfigurationSetDeliveryOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExist":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidDeliveryOptions":
    case "com.amazonaws.ses#InvalidDeliveryOptionsException":
      throw await de_InvalidDeliveryOptionsExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryPutIdentityPolicyCommand
 */
export const de_PutIdentityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIdentityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutIdentityPolicyCommandError(output, context);
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
 * deserializeAws_queryPutIdentityPolicyCommandError
 */
const de_PutIdentityPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIdentityPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPolicy":
    case "com.amazonaws.ses#InvalidPolicyException":
      throw await de_InvalidPolicyExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryReorderReceiptRuleSetCommand
 */
export const de_ReorderReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReorderReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ReorderReceiptRuleSetCommandError(output, context);
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
 * deserializeAws_queryReorderReceiptRuleSetCommandError
 */
const de_ReorderReceiptRuleSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReorderReceiptRuleSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RuleDoesNotExist":
    case "com.amazonaws.ses#RuleDoesNotExistException":
      throw await de_RuleDoesNotExistExceptionRes(parsedOutput, context);
    case "RuleSetDoesNotExist":
    case "com.amazonaws.ses#RuleSetDoesNotExistException":
      throw await de_RuleSetDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_querySendBounceCommand
 */
export const de_SendBounceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBounceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendBounceCommandError(output, context);
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
 * deserializeAws_querySendBounceCommandError
 */
const de_SendBounceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBounceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "MessageRejected":
    case "com.amazonaws.ses#MessageRejected":
      throw await de_MessageRejectedRes(parsedOutput, context);
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
 * deserializeAws_querySendBulkTemplatedEmailCommand
 */
export const de_SendBulkTemplatedEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBulkTemplatedEmailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendBulkTemplatedEmailCommandError(output, context);
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
 * deserializeAws_querySendBulkTemplatedEmailCommandError
 */
const de_SendBulkTemplatedEmailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBulkTemplatedEmailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountSendingPausedException":
    case "com.amazonaws.ses#AccountSendingPausedException":
      throw await de_AccountSendingPausedExceptionRes(parsedOutput, context);
    case "ConfigurationSetDoesNotExist":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
    case "ConfigurationSetSendingPausedException":
    case "com.amazonaws.ses#ConfigurationSetSendingPausedException":
      throw await de_ConfigurationSetSendingPausedExceptionRes(parsedOutput, context);
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.ses#MailFromDomainNotVerifiedException":
      throw await de_MailFromDomainNotVerifiedExceptionRes(parsedOutput, context);
    case "MessageRejected":
    case "com.amazonaws.ses#MessageRejected":
      throw await de_MessageRejectedRes(parsedOutput, context);
    case "TemplateDoesNotExist":
    case "com.amazonaws.ses#TemplateDoesNotExistException":
      throw await de_TemplateDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_querySendCustomVerificationEmailCommand
 */
export const de_SendCustomVerificationEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCustomVerificationEmailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendCustomVerificationEmailCommandError(output, context);
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
 * deserializeAws_querySendCustomVerificationEmailCommandError
 */
const de_SendCustomVerificationEmailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCustomVerificationEmailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExist":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
    case "CustomVerificationEmailTemplateDoesNotExist":
    case "com.amazonaws.ses#CustomVerificationEmailTemplateDoesNotExistException":
      throw await de_CustomVerificationEmailTemplateDoesNotExistExceptionRes(parsedOutput, context);
    case "FromEmailAddressNotVerified":
    case "com.amazonaws.ses#FromEmailAddressNotVerifiedException":
      throw await de_FromEmailAddressNotVerifiedExceptionRes(parsedOutput, context);
    case "MessageRejected":
    case "com.amazonaws.ses#MessageRejected":
      throw await de_MessageRejectedRes(parsedOutput, context);
    case "ProductionAccessNotGranted":
    case "com.amazonaws.ses#ProductionAccessNotGrantedException":
      throw await de_ProductionAccessNotGrantedExceptionRes(parsedOutput, context);
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
 * deserializeAws_querySendEmailCommand
 */
export const de_SendEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEmailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendEmailCommandError(output, context);
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
 * deserializeAws_querySendEmailCommandError
 */
const de_SendEmailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEmailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountSendingPausedException":
    case "com.amazonaws.ses#AccountSendingPausedException":
      throw await de_AccountSendingPausedExceptionRes(parsedOutput, context);
    case "ConfigurationSetDoesNotExist":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
    case "ConfigurationSetSendingPausedException":
    case "com.amazonaws.ses#ConfigurationSetSendingPausedException":
      throw await de_ConfigurationSetSendingPausedExceptionRes(parsedOutput, context);
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.ses#MailFromDomainNotVerifiedException":
      throw await de_MailFromDomainNotVerifiedExceptionRes(parsedOutput, context);
    case "MessageRejected":
    case "com.amazonaws.ses#MessageRejected":
      throw await de_MessageRejectedRes(parsedOutput, context);
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
 * deserializeAws_querySendRawEmailCommand
 */
export const de_SendRawEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendRawEmailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendRawEmailCommandError(output, context);
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
 * deserializeAws_querySendRawEmailCommandError
 */
const de_SendRawEmailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendRawEmailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountSendingPausedException":
    case "com.amazonaws.ses#AccountSendingPausedException":
      throw await de_AccountSendingPausedExceptionRes(parsedOutput, context);
    case "ConfigurationSetDoesNotExist":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
    case "ConfigurationSetSendingPausedException":
    case "com.amazonaws.ses#ConfigurationSetSendingPausedException":
      throw await de_ConfigurationSetSendingPausedExceptionRes(parsedOutput, context);
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.ses#MailFromDomainNotVerifiedException":
      throw await de_MailFromDomainNotVerifiedExceptionRes(parsedOutput, context);
    case "MessageRejected":
    case "com.amazonaws.ses#MessageRejected":
      throw await de_MessageRejectedRes(parsedOutput, context);
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
 * deserializeAws_querySendTemplatedEmailCommand
 */
export const de_SendTemplatedEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTemplatedEmailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendTemplatedEmailCommandError(output, context);
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
 * deserializeAws_querySendTemplatedEmailCommandError
 */
const de_SendTemplatedEmailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTemplatedEmailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountSendingPausedException":
    case "com.amazonaws.ses#AccountSendingPausedException":
      throw await de_AccountSendingPausedExceptionRes(parsedOutput, context);
    case "ConfigurationSetDoesNotExist":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
    case "ConfigurationSetSendingPausedException":
    case "com.amazonaws.ses#ConfigurationSetSendingPausedException":
      throw await de_ConfigurationSetSendingPausedExceptionRes(parsedOutput, context);
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.ses#MailFromDomainNotVerifiedException":
      throw await de_MailFromDomainNotVerifiedExceptionRes(parsedOutput, context);
    case "MessageRejected":
    case "com.amazonaws.ses#MessageRejected":
      throw await de_MessageRejectedRes(parsedOutput, context);
    case "TemplateDoesNotExist":
    case "com.amazonaws.ses#TemplateDoesNotExistException":
      throw await de_TemplateDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_querySetActiveReceiptRuleSetCommand
 */
export const de_SetActiveReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetActiveReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetActiveReceiptRuleSetCommandError(output, context);
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
 * deserializeAws_querySetActiveReceiptRuleSetCommandError
 */
const de_SetActiveReceiptRuleSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetActiveReceiptRuleSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RuleSetDoesNotExist":
    case "com.amazonaws.ses#RuleSetDoesNotExistException":
      throw await de_RuleSetDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_querySetIdentityDkimEnabledCommand
 */
export const de_SetIdentityDkimEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityDkimEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetIdentityDkimEnabledCommandError(output, context);
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
 * deserializeAws_querySetIdentityDkimEnabledCommandError
 */
const de_SetIdentityDkimEnabledCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityDkimEnabledCommandOutput> => {
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
 * deserializeAws_querySetIdentityFeedbackForwardingEnabledCommand
 */
export const de_SetIdentityFeedbackForwardingEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityFeedbackForwardingEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetIdentityFeedbackForwardingEnabledCommandError(output, context);
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
 * deserializeAws_querySetIdentityFeedbackForwardingEnabledCommandError
 */
const de_SetIdentityFeedbackForwardingEnabledCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityFeedbackForwardingEnabledCommandOutput> => {
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
 * deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommand
 */
export const de_SetIdentityHeadersInNotificationsEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityHeadersInNotificationsEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetIdentityHeadersInNotificationsEnabledCommandError(output, context);
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
 * deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommandError
 */
const de_SetIdentityHeadersInNotificationsEnabledCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityHeadersInNotificationsEnabledCommandOutput> => {
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
 * deserializeAws_querySetIdentityMailFromDomainCommand
 */
export const de_SetIdentityMailFromDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityMailFromDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetIdentityMailFromDomainCommandError(output, context);
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
 * deserializeAws_querySetIdentityMailFromDomainCommandError
 */
const de_SetIdentityMailFromDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityMailFromDomainCommandOutput> => {
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
 * deserializeAws_querySetIdentityNotificationTopicCommand
 */
export const de_SetIdentityNotificationTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityNotificationTopicCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetIdentityNotificationTopicCommandError(output, context);
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
 * deserializeAws_querySetIdentityNotificationTopicCommandError
 */
const de_SetIdentityNotificationTopicCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityNotificationTopicCommandOutput> => {
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
 * deserializeAws_querySetReceiptRulePositionCommand
 */
export const de_SetReceiptRulePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetReceiptRulePositionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetReceiptRulePositionCommandError(output, context);
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
 * deserializeAws_querySetReceiptRulePositionCommandError
 */
const de_SetReceiptRulePositionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetReceiptRulePositionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RuleDoesNotExist":
    case "com.amazonaws.ses#RuleDoesNotExistException":
      throw await de_RuleDoesNotExistExceptionRes(parsedOutput, context);
    case "RuleSetDoesNotExist":
    case "com.amazonaws.ses#RuleSetDoesNotExistException":
      throw await de_RuleSetDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryTestRenderTemplateCommand
 */
export const de_TestRenderTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRenderTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TestRenderTemplateCommandError(output, context);
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
 * deserializeAws_queryTestRenderTemplateCommandError
 */
const de_TestRenderTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRenderTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRenderingParameter":
    case "com.amazonaws.ses#InvalidRenderingParameterException":
      throw await de_InvalidRenderingParameterExceptionRes(parsedOutput, context);
    case "MissingRenderingAttribute":
    case "com.amazonaws.ses#MissingRenderingAttributeException":
      throw await de_MissingRenderingAttributeExceptionRes(parsedOutput, context);
    case "TemplateDoesNotExist":
    case "com.amazonaws.ses#TemplateDoesNotExistException":
      throw await de_TemplateDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryUpdateAccountSendingEnabledCommand
 */
export const de_UpdateAccountSendingEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSendingEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAccountSendingEnabledCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAccountSendingEnabledCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateAccountSendingEnabledCommandError
 */
const de_UpdateAccountSendingEnabledCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSendingEnabledCommandOutput> => {
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
 * deserializeAws_queryUpdateConfigurationSetEventDestinationCommand
 */
export const de_UpdateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateConfigurationSetEventDestinationCommandError(output, context);
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
 * deserializeAws_queryUpdateConfigurationSetEventDestinationCommandError
 */
const de_UpdateConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExist":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
    case "EventDestinationDoesNotExist":
    case "com.amazonaws.ses#EventDestinationDoesNotExistException":
      throw await de_EventDestinationDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidCloudWatchDestination":
    case "com.amazonaws.ses#InvalidCloudWatchDestinationException":
      throw await de_InvalidCloudWatchDestinationExceptionRes(parsedOutput, context);
    case "InvalidFirehoseDestination":
    case "com.amazonaws.ses#InvalidFirehoseDestinationException":
      throw await de_InvalidFirehoseDestinationExceptionRes(parsedOutput, context);
    case "InvalidSNSDestination":
    case "com.amazonaws.ses#InvalidSNSDestinationException":
      throw await de_InvalidSNSDestinationExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand
 */
export const de_UpdateConfigurationSetReputationMetricsEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetReputationMetricsEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateConfigurationSetReputationMetricsEnabledCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateConfigurationSetReputationMetricsEnabledCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommandError
 */
const de_UpdateConfigurationSetReputationMetricsEnabledCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetReputationMetricsEnabledCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExist":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryUpdateConfigurationSetSendingEnabledCommand
 */
export const de_UpdateConfigurationSetSendingEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetSendingEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateConfigurationSetSendingEnabledCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateConfigurationSetSendingEnabledCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateConfigurationSetSendingEnabledCommandError
 */
const de_UpdateConfigurationSetSendingEnabledCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetSendingEnabledCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExist":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommand
 */
export const de_UpdateConfigurationSetTrackingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetTrackingOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateConfigurationSetTrackingOptionsCommandError(output, context);
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
 * deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommandError
 */
const de_UpdateConfigurationSetTrackingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetTrackingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExist":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidTrackingOptions":
    case "com.amazonaws.ses#InvalidTrackingOptionsException":
      throw await de_InvalidTrackingOptionsExceptionRes(parsedOutput, context);
    case "TrackingOptionsDoesNotExistException":
    case "com.amazonaws.ses#TrackingOptionsDoesNotExistException":
      throw await de_TrackingOptionsDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryUpdateCustomVerificationEmailTemplateCommand
 */
export const de_UpdateCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCustomVerificationEmailTemplateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateCustomVerificationEmailTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateCustomVerificationEmailTemplateCommandError
 */
const de_UpdateCustomVerificationEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomVerificationEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomVerificationEmailInvalidContent":
    case "com.amazonaws.ses#CustomVerificationEmailInvalidContentException":
      throw await de_CustomVerificationEmailInvalidContentExceptionRes(parsedOutput, context);
    case "CustomVerificationEmailTemplateDoesNotExist":
    case "com.amazonaws.ses#CustomVerificationEmailTemplateDoesNotExistException":
      throw await de_CustomVerificationEmailTemplateDoesNotExistExceptionRes(parsedOutput, context);
    case "FromEmailAddressNotVerified":
    case "com.amazonaws.ses#FromEmailAddressNotVerifiedException":
      throw await de_FromEmailAddressNotVerifiedExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryUpdateReceiptRuleCommand
 */
export const de_UpdateReceiptRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReceiptRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateReceiptRuleCommandError(output, context);
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
 * deserializeAws_queryUpdateReceiptRuleCommandError
 */
const de_UpdateReceiptRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReceiptRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLambdaFunction":
    case "com.amazonaws.ses#InvalidLambdaFunctionException":
      throw await de_InvalidLambdaFunctionExceptionRes(parsedOutput, context);
    case "InvalidS3Configuration":
    case "com.amazonaws.ses#InvalidS3ConfigurationException":
      throw await de_InvalidS3ConfigurationExceptionRes(parsedOutput, context);
    case "InvalidSnsTopic":
    case "com.amazonaws.ses#InvalidSnsTopicException":
      throw await de_InvalidSnsTopicExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.ses#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RuleDoesNotExist":
    case "com.amazonaws.ses#RuleDoesNotExistException":
      throw await de_RuleDoesNotExistExceptionRes(parsedOutput, context);
    case "RuleSetDoesNotExist":
    case "com.amazonaws.ses#RuleSetDoesNotExistException":
      throw await de_RuleSetDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryUpdateTemplateCommand
 */
export const de_UpdateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTemplateCommandError(output, context);
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
 * deserializeAws_queryUpdateTemplateCommandError
 */
const de_UpdateTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTemplate":
    case "com.amazonaws.ses#InvalidTemplateException":
      throw await de_InvalidTemplateExceptionRes(parsedOutput, context);
    case "TemplateDoesNotExist":
    case "com.amazonaws.ses#TemplateDoesNotExistException":
      throw await de_TemplateDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryVerifyDomainDkimCommand
 */
export const de_VerifyDomainDkimCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyDomainDkimCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_VerifyDomainDkimCommandError(output, context);
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
 * deserializeAws_queryVerifyDomainDkimCommandError
 */
const de_VerifyDomainDkimCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyDomainDkimCommandOutput> => {
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
 * deserializeAws_queryVerifyDomainIdentityCommand
 */
export const de_VerifyDomainIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyDomainIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_VerifyDomainIdentityCommandError(output, context);
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
 * deserializeAws_queryVerifyDomainIdentityCommandError
 */
const de_VerifyDomainIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyDomainIdentityCommandOutput> => {
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
 * deserializeAws_queryVerifyEmailAddressCommand
 */
export const de_VerifyEmailAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyEmailAddressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_VerifyEmailAddressCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: VerifyEmailAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryVerifyEmailAddressCommandError
 */
const de_VerifyEmailAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyEmailAddressCommandOutput> => {
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
 * deserializeAws_queryVerifyEmailIdentityCommand
 */
export const de_VerifyEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyEmailIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_VerifyEmailIdentityCommandError(output, context);
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
 * deserializeAws_queryVerifyEmailIdentityCommandError
 */
const de_VerifyEmailIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyEmailIdentityCommandOutput> => {
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
  if (input.HeaderName != null) {
    entries["HeaderName"] = input.HeaderName;
  }
  if (input.HeaderValue != null) {
    entries["HeaderValue"] = input.HeaderValue;
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
  if (input.Text != null) {
    const memberEntries = se_Content(input.Text, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Text.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Html != null) {
    const memberEntries = se_Content(input.Html, context);
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
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.SmtpReplyCode != null) {
    entries["SmtpReplyCode"] = input.SmtpReplyCode;
  }
  if (input.StatusCode != null) {
    entries["StatusCode"] = input.StatusCode;
  }
  if (input.Message != null) {
    entries["Message"] = input.Message;
  }
  if (input.Sender != null) {
    entries["Sender"] = input.Sender;
  }
  return entries;
};

/**
 * serializeAws_queryBouncedRecipientInfo
 */
const se_BouncedRecipientInfo = (input: BouncedRecipientInfo, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Recipient != null) {
    entries["Recipient"] = input.Recipient;
  }
  if (input.RecipientArn != null) {
    entries["RecipientArn"] = input.RecipientArn;
  }
  if (input.BounceType != null) {
    entries["BounceType"] = input.BounceType;
  }
  if (input.RecipientDsnFields != null) {
    const memberEntries = se_RecipientDsnFields(input.RecipientDsnFields, context);
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
  if (input.Destination != null) {
    const memberEntries = se_Destination(input.Destination, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Destination.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ReplacementTags != null) {
    const memberEntries = se_MessageTagList(input.ReplacementTags, context);
    if (input.ReplacementTags?.length === 0) {
      entries.ReplacementTags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplacementTags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ReplacementTemplateData != null) {
    entries["ReplacementTemplateData"] = input.ReplacementTemplateData;
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
  if (input.RuleSetName != null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  if (input.OriginalRuleSetName != null) {
    entries["OriginalRuleSetName"] = input.OriginalRuleSetName;
  }
  return entries;
};

/**
 * serializeAws_queryCloudWatchDestination
 */
const se_CloudWatchDestination = (input: CloudWatchDestination, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DimensionConfigurations != null) {
    const memberEntries = se_CloudWatchDimensionConfigurations(input.DimensionConfigurations, context);
    if (input.DimensionConfigurations?.length === 0) {
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
  if (input.DimensionName != null) {
    entries["DimensionName"] = input.DimensionName;
  }
  if (input.DimensionValueSource != null) {
    entries["DimensionValueSource"] = input.DimensionValueSource;
  }
  if (input.DefaultDimensionValue != null) {
    entries["DefaultDimensionValue"] = input.DefaultDimensionValue;
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
  if (input.Name != null) {
    entries["Name"] = input.Name;
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
 * serializeAws_queryContent
 */
const se_Content = (input: Content, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Data != null) {
    entries["Data"] = input.Data;
  }
  if (input.Charset != null) {
    entries["Charset"] = input.Charset;
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
  if (input.ConfigurationSetName != null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.EventDestination != null) {
    const memberEntries = se_EventDestination(input.EventDestination, context);
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
  if (input.ConfigurationSet != null) {
    const memberEntries = se_ConfigurationSet(input.ConfigurationSet, context);
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
  if (input.ConfigurationSetName != null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.TrackingOptions != null) {
    const memberEntries = se_TrackingOptions(input.TrackingOptions, context);
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
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.FromEmailAddress != null) {
    entries["FromEmailAddress"] = input.FromEmailAddress;
  }
  if (input.TemplateSubject != null) {
    entries["TemplateSubject"] = input.TemplateSubject;
  }
  if (input.TemplateContent != null) {
    entries["TemplateContent"] = input.TemplateContent;
  }
  if (input.SuccessRedirectionURL != null) {
    entries["SuccessRedirectionURL"] = input.SuccessRedirectionURL;
  }
  if (input.FailureRedirectionURL != null) {
    entries["FailureRedirectionURL"] = input.FailureRedirectionURL;
  }
  return entries;
};

/**
 * serializeAws_queryCreateReceiptFilterRequest
 */
const se_CreateReceiptFilterRequest = (input: CreateReceiptFilterRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Filter != null) {
    const memberEntries = se_ReceiptFilter(input.Filter, context);
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
  if (input.RuleSetName != null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  if (input.After != null) {
    entries["After"] = input.After;
  }
  if (input.Rule != null) {
    const memberEntries = se_ReceiptRule(input.Rule, context);
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
  if (input.RuleSetName != null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  return entries;
};

/**
 * serializeAws_queryCreateTemplateRequest
 */
const se_CreateTemplateRequest = (input: CreateTemplateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Template != null) {
    const memberEntries = se_Template(input.Template, context);
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
  if (input.ConfigurationSetName != null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.EventDestinationName != null) {
    entries["EventDestinationName"] = input.EventDestinationName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteConfigurationSetRequest
 */
const se_DeleteConfigurationSetRequest = (input: DeleteConfigurationSetRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ConfigurationSetName != null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
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
  if (input.ConfigurationSetName != null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
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
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteIdentityPolicyRequest
 */
const se_DeleteIdentityPolicyRequest = (input: DeleteIdentityPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Identity != null) {
    entries["Identity"] = input.Identity;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteIdentityRequest
 */
const se_DeleteIdentityRequest = (input: DeleteIdentityRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Identity != null) {
    entries["Identity"] = input.Identity;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteReceiptFilterRequest
 */
const se_DeleteReceiptFilterRequest = (input: DeleteReceiptFilterRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.FilterName != null) {
    entries["FilterName"] = input.FilterName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteReceiptRuleRequest
 */
const se_DeleteReceiptRuleRequest = (input: DeleteReceiptRuleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleSetName != null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  if (input.RuleName != null) {
    entries["RuleName"] = input.RuleName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteReceiptRuleSetRequest
 */
const se_DeleteReceiptRuleSetRequest = (input: DeleteReceiptRuleSetRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleSetName != null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteTemplateRequest
 */
const se_DeleteTemplateRequest = (input: DeleteTemplateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
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
  if (input.EmailAddress != null) {
    entries["EmailAddress"] = input.EmailAddress;
  }
  return entries;
};

/**
 * serializeAws_queryDeliveryOptions
 */
const se_DeliveryOptions = (input: DeliveryOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TlsPolicy != null) {
    entries["TlsPolicy"] = input.TlsPolicy;
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
  if (input.ConfigurationSetName != null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.ConfigurationSetAttributeNames != null) {
    const memberEntries = se_ConfigurationSetAttributeList(input.ConfigurationSetAttributeNames, context);
    if (input.ConfigurationSetAttributeNames?.length === 0) {
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
  if (input.RuleSetName != null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  if (input.RuleName != null) {
    entries["RuleName"] = input.RuleName;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeReceiptRuleSetRequest
 */
const se_DescribeReceiptRuleSetRequest = (input: DescribeReceiptRuleSetRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleSetName != null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  return entries;
};

/**
 * serializeAws_queryDestination
 */
const se_Destination = (input: Destination, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ToAddresses != null) {
    const memberEntries = se_AddressList(input.ToAddresses, context);
    if (input.ToAddresses?.length === 0) {
      entries.ToAddresses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ToAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CcAddresses != null) {
    const memberEntries = se_AddressList(input.CcAddresses, context);
    if (input.CcAddresses?.length === 0) {
      entries.CcAddresses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CcAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input.BccAddresses != null) {
    const memberEntries = se_AddressList(input.BccAddresses, context);
    if (input.BccAddresses?.length === 0) {
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
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.MatchingEventTypes != null) {
    const memberEntries = se_EventTypes(input.MatchingEventTypes, context);
    if (input.MatchingEventTypes?.length === 0) {
      entries.MatchingEventTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MatchingEventTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.KinesisFirehoseDestination != null) {
    const memberEntries = se_KinesisFirehoseDestination(input.KinesisFirehoseDestination, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `KinesisFirehoseDestination.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CloudWatchDestination != null) {
    const memberEntries = se_CloudWatchDestination(input.CloudWatchDestination, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CloudWatchDestination.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SNSDestination != null) {
    const memberEntries = se_SNSDestination(input.SNSDestination, context);
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
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
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
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
  }
  return entries;
};

/**
 * serializeAws_queryGetIdentityDkimAttributesRequest
 */
const se_GetIdentityDkimAttributesRequest = (input: GetIdentityDkimAttributesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Identities != null) {
    const memberEntries = se_IdentityList(input.Identities, context);
    if (input.Identities?.length === 0) {
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
  if (input.Identities != null) {
    const memberEntries = se_IdentityList(input.Identities, context);
    if (input.Identities?.length === 0) {
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
  if (input.Identities != null) {
    const memberEntries = se_IdentityList(input.Identities, context);
    if (input.Identities?.length === 0) {
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
  if (input.Identity != null) {
    entries["Identity"] = input.Identity;
  }
  if (input.PolicyNames != null) {
    const memberEntries = se_PolicyNameList(input.PolicyNames, context);
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
 * serializeAws_queryGetIdentityVerificationAttributesRequest
 */
const se_GetIdentityVerificationAttributesRequest = (
  input: GetIdentityVerificationAttributesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Identities != null) {
    const memberEntries = se_IdentityList(input.Identities, context);
    if (input.Identities?.length === 0) {
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
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
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
  if (input.IAMRoleARN != null) {
    entries["IAMRoleARN"] = input.IAMRoleARN;
  }
  if (input.DeliveryStreamARN != null) {
    entries["DeliveryStreamARN"] = input.DeliveryStreamARN;
  }
  return entries;
};

/**
 * serializeAws_queryLambdaAction
 */
const se_LambdaAction = (input: LambdaAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.FunctionArn != null) {
    entries["FunctionArn"] = input.FunctionArn;
  }
  if (input.InvocationType != null) {
    entries["InvocationType"] = input.InvocationType;
  }
  return entries;
};

/**
 * serializeAws_queryListConfigurationSetsRequest
 */
const se_ListConfigurationSetsRequest = (input: ListConfigurationSetsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
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
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  return entries;
};

/**
 * serializeAws_queryListIdentitiesRequest
 */
const se_ListIdentitiesRequest = (input: ListIdentitiesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.IdentityType != null) {
    entries["IdentityType"] = input.IdentityType;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListIdentityPoliciesRequest
 */
const se_ListIdentityPoliciesRequest = (input: ListIdentityPoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Identity != null) {
    entries["Identity"] = input.Identity;
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
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryListTemplatesRequest
 */
const se_ListTemplatesRequest = (input: ListTemplatesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryMessage
 */
const se_Message = (input: Message, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Subject != null) {
    const memberEntries = se_Content(input.Subject, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Subject.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Body != null) {
    const memberEntries = se_Body(input.Body, context);
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
  if (input.ReportingMta != null) {
    entries["ReportingMta"] = input.ReportingMta;
  }
  if (input.ArrivalDate != null) {
    entries["ArrivalDate"] = input.ArrivalDate.toISOString().split(".")[0] + "Z";
  }
  if (input.ExtensionFields != null) {
    const memberEntries = se_ExtensionFieldList(input.ExtensionFields, context);
    if (input.ExtensionFields?.length === 0) {
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
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
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
  if (input.ConfigurationSetName != null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.DeliveryOptions != null) {
    const memberEntries = se_DeliveryOptions(input.DeliveryOptions, context);
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
  if (input.Identity != null) {
    entries["Identity"] = input.Identity;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.Policy != null) {
    entries["Policy"] = input.Policy;
  }
  return entries;
};

/**
 * serializeAws_queryRawMessage
 */
const se_RawMessage = (input: RawMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Data != null) {
    entries["Data"] = context.base64Encoder(input.Data);
  }
  return entries;
};

/**
 * serializeAws_queryReceiptAction
 */
const se_ReceiptAction = (input: ReceiptAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.S3Action != null) {
    const memberEntries = se_S3Action(input.S3Action, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `S3Action.${key}`;
      entries[loc] = value;
    });
  }
  if (input.BounceAction != null) {
    const memberEntries = se_BounceAction(input.BounceAction, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BounceAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input.WorkmailAction != null) {
    const memberEntries = se_WorkmailAction(input.WorkmailAction, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `WorkmailAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LambdaAction != null) {
    const memberEntries = se_LambdaAction(input.LambdaAction, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LambdaAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input.StopAction != null) {
    const memberEntries = se_StopAction(input.StopAction, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StopAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AddHeaderAction != null) {
    const memberEntries = se_AddHeaderAction(input.AddHeaderAction, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AddHeaderAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SNSAction != null) {
    const memberEntries = se_SNSAction(input.SNSAction, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SNSAction.${key}`;
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
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.IpFilter != null) {
    const memberEntries = se_ReceiptIpFilter(input.IpFilter, context);
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
  if (input.Policy != null) {
    entries["Policy"] = input.Policy;
  }
  if (input.Cidr != null) {
    entries["Cidr"] = input.Cidr;
  }
  return entries;
};

/**
 * serializeAws_queryReceiptRule
 */
const se_ReceiptRule = (input: ReceiptRule, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.TlsPolicy != null) {
    entries["TlsPolicy"] = input.TlsPolicy;
  }
  if (input.Recipients != null) {
    const memberEntries = se_RecipientsList(input.Recipients, context);
    if (input.Recipients?.length === 0) {
      entries.Recipients = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Recipients.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Actions != null) {
    const memberEntries = se_ReceiptActionsList(input.Actions, context);
    if (input.Actions?.length === 0) {
      entries.Actions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Actions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ScanEnabled != null) {
    entries["ScanEnabled"] = input.ScanEnabled;
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
  if (input.FinalRecipient != null) {
    entries["FinalRecipient"] = input.FinalRecipient;
  }
  if (input.Action != null) {
    entries["Action"] = input.Action;
  }
  if (input.RemoteMta != null) {
    entries["RemoteMta"] = input.RemoteMta;
  }
  if (input.Status != null) {
    entries["Status"] = input.Status;
  }
  if (input.DiagnosticCode != null) {
    entries["DiagnosticCode"] = input.DiagnosticCode;
  }
  if (input.LastAttemptDate != null) {
    entries["LastAttemptDate"] = input.LastAttemptDate.toISOString().split(".")[0] + "Z";
  }
  if (input.ExtensionFields != null) {
    const memberEntries = se_ExtensionFieldList(input.ExtensionFields, context);
    if (input.ExtensionFields?.length === 0) {
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
  if (input.RuleSetName != null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  if (input.RuleNames != null) {
    const memberEntries = se_ReceiptRuleNamesList(input.RuleNames, context);
    if (input.RuleNames?.length === 0) {
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
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.BucketName != null) {
    entries["BucketName"] = input.BucketName;
  }
  if (input.ObjectKeyPrefix != null) {
    entries["ObjectKeyPrefix"] = input.ObjectKeyPrefix;
  }
  if (input.KmsKeyArn != null) {
    entries["KmsKeyArn"] = input.KmsKeyArn;
  }
  return entries;
};

/**
 * serializeAws_querySendBounceRequest
 */
const se_SendBounceRequest = (input: SendBounceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.OriginalMessageId != null) {
    entries["OriginalMessageId"] = input.OriginalMessageId;
  }
  if (input.BounceSender != null) {
    entries["BounceSender"] = input.BounceSender;
  }
  if (input.Explanation != null) {
    entries["Explanation"] = input.Explanation;
  }
  if (input.MessageDsn != null) {
    const memberEntries = se_MessageDsn(input.MessageDsn, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageDsn.${key}`;
      entries[loc] = value;
    });
  }
  if (input.BouncedRecipientInfoList != null) {
    const memberEntries = se_BouncedRecipientInfoList(input.BouncedRecipientInfoList, context);
    if (input.BouncedRecipientInfoList?.length === 0) {
      entries.BouncedRecipientInfoList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BouncedRecipientInfoList.${key}`;
      entries[loc] = value;
    });
  }
  if (input.BounceSenderArn != null) {
    entries["BounceSenderArn"] = input.BounceSenderArn;
  }
  return entries;
};

/**
 * serializeAws_querySendBulkTemplatedEmailRequest
 */
const se_SendBulkTemplatedEmailRequest = (input: SendBulkTemplatedEmailRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Source != null) {
    entries["Source"] = input.Source;
  }
  if (input.SourceArn != null) {
    entries["SourceArn"] = input.SourceArn;
  }
  if (input.ReplyToAddresses != null) {
    const memberEntries = se_AddressList(input.ReplyToAddresses, context);
    if (input.ReplyToAddresses?.length === 0) {
      entries.ReplyToAddresses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplyToAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ReturnPath != null) {
    entries["ReturnPath"] = input.ReturnPath;
  }
  if (input.ReturnPathArn != null) {
    entries["ReturnPathArn"] = input.ReturnPathArn;
  }
  if (input.ConfigurationSetName != null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.DefaultTags != null) {
    const memberEntries = se_MessageTagList(input.DefaultTags, context);
    if (input.DefaultTags?.length === 0) {
      entries.DefaultTags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DefaultTags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Template != null) {
    entries["Template"] = input.Template;
  }
  if (input.TemplateArn != null) {
    entries["TemplateArn"] = input.TemplateArn;
  }
  if (input.DefaultTemplateData != null) {
    entries["DefaultTemplateData"] = input.DefaultTemplateData;
  }
  if (input.Destinations != null) {
    const memberEntries = se_BulkEmailDestinationList(input.Destinations, context);
    if (input.Destinations?.length === 0) {
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
  if (input.EmailAddress != null) {
    entries["EmailAddress"] = input.EmailAddress;
  }
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.ConfigurationSetName != null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  return entries;
};

/**
 * serializeAws_querySendEmailRequest
 */
const se_SendEmailRequest = (input: SendEmailRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Source != null) {
    entries["Source"] = input.Source;
  }
  if (input.Destination != null) {
    const memberEntries = se_Destination(input.Destination, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Destination.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Message != null) {
    const memberEntries = se_Message(input.Message, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Message.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ReplyToAddresses != null) {
    const memberEntries = se_AddressList(input.ReplyToAddresses, context);
    if (input.ReplyToAddresses?.length === 0) {
      entries.ReplyToAddresses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplyToAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ReturnPath != null) {
    entries["ReturnPath"] = input.ReturnPath;
  }
  if (input.SourceArn != null) {
    entries["SourceArn"] = input.SourceArn;
  }
  if (input.ReturnPathArn != null) {
    entries["ReturnPathArn"] = input.ReturnPathArn;
  }
  if (input.Tags != null) {
    const memberEntries = se_MessageTagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ConfigurationSetName != null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  return entries;
};

/**
 * serializeAws_querySendRawEmailRequest
 */
const se_SendRawEmailRequest = (input: SendRawEmailRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Source != null) {
    entries["Source"] = input.Source;
  }
  if (input.Destinations != null) {
    const memberEntries = se_AddressList(input.Destinations, context);
    if (input.Destinations?.length === 0) {
      entries.Destinations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Destinations.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RawMessage != null) {
    const memberEntries = se_RawMessage(input.RawMessage, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RawMessage.${key}`;
      entries[loc] = value;
    });
  }
  if (input.FromArn != null) {
    entries["FromArn"] = input.FromArn;
  }
  if (input.SourceArn != null) {
    entries["SourceArn"] = input.SourceArn;
  }
  if (input.ReturnPathArn != null) {
    entries["ReturnPathArn"] = input.ReturnPathArn;
  }
  if (input.Tags != null) {
    const memberEntries = se_MessageTagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ConfigurationSetName != null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  return entries;
};

/**
 * serializeAws_querySendTemplatedEmailRequest
 */
const se_SendTemplatedEmailRequest = (input: SendTemplatedEmailRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Source != null) {
    entries["Source"] = input.Source;
  }
  if (input.Destination != null) {
    const memberEntries = se_Destination(input.Destination, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Destination.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ReplyToAddresses != null) {
    const memberEntries = se_AddressList(input.ReplyToAddresses, context);
    if (input.ReplyToAddresses?.length === 0) {
      entries.ReplyToAddresses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplyToAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ReturnPath != null) {
    entries["ReturnPath"] = input.ReturnPath;
  }
  if (input.SourceArn != null) {
    entries["SourceArn"] = input.SourceArn;
  }
  if (input.ReturnPathArn != null) {
    entries["ReturnPathArn"] = input.ReturnPathArn;
  }
  if (input.Tags != null) {
    const memberEntries = se_MessageTagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ConfigurationSetName != null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.Template != null) {
    entries["Template"] = input.Template;
  }
  if (input.TemplateArn != null) {
    entries["TemplateArn"] = input.TemplateArn;
  }
  if (input.TemplateData != null) {
    entries["TemplateData"] = input.TemplateData;
  }
  return entries;
};

/**
 * serializeAws_querySetActiveReceiptRuleSetRequest
 */
const se_SetActiveReceiptRuleSetRequest = (input: SetActiveReceiptRuleSetRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleSetName != null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  return entries;
};

/**
 * serializeAws_querySetIdentityDkimEnabledRequest
 */
const se_SetIdentityDkimEnabledRequest = (input: SetIdentityDkimEnabledRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Identity != null) {
    entries["Identity"] = input.Identity;
  }
  if (input.DkimEnabled != null) {
    entries["DkimEnabled"] = input.DkimEnabled;
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
  if (input.Identity != null) {
    entries["Identity"] = input.Identity;
  }
  if (input.ForwardingEnabled != null) {
    entries["ForwardingEnabled"] = input.ForwardingEnabled;
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
  if (input.Identity != null) {
    entries["Identity"] = input.Identity;
  }
  if (input.NotificationType != null) {
    entries["NotificationType"] = input.NotificationType;
  }
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  return entries;
};

/**
 * serializeAws_querySetIdentityMailFromDomainRequest
 */
const se_SetIdentityMailFromDomainRequest = (input: SetIdentityMailFromDomainRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Identity != null) {
    entries["Identity"] = input.Identity;
  }
  if (input.MailFromDomain != null) {
    entries["MailFromDomain"] = input.MailFromDomain;
  }
  if (input.BehaviorOnMXFailure != null) {
    entries["BehaviorOnMXFailure"] = input.BehaviorOnMXFailure;
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
  if (input.Identity != null) {
    entries["Identity"] = input.Identity;
  }
  if (input.NotificationType != null) {
    entries["NotificationType"] = input.NotificationType;
  }
  if (input.SnsTopic != null) {
    entries["SnsTopic"] = input.SnsTopic;
  }
  return entries;
};

/**
 * serializeAws_querySetReceiptRulePositionRequest
 */
const se_SetReceiptRulePositionRequest = (input: SetReceiptRulePositionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleSetName != null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  if (input.RuleName != null) {
    entries["RuleName"] = input.RuleName;
  }
  if (input.After != null) {
    entries["After"] = input.After;
  }
  return entries;
};

/**
 * serializeAws_querySNSAction
 */
const se_SNSAction = (input: SNSAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.Encoding != null) {
    entries["Encoding"] = input.Encoding;
  }
  return entries;
};

/**
 * serializeAws_querySNSDestination
 */
const se_SNSDestination = (input: SNSDestination, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicARN != null) {
    entries["TopicARN"] = input.TopicARN;
  }
  return entries;
};

/**
 * serializeAws_queryStopAction
 */
const se_StopAction = (input: StopAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Scope != null) {
    entries["Scope"] = input.Scope;
  }
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  return entries;
};

/**
 * serializeAws_queryTemplate
 */
const se_Template = (input: Template, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.SubjectPart != null) {
    entries["SubjectPart"] = input.SubjectPart;
  }
  if (input.TextPart != null) {
    entries["TextPart"] = input.TextPart;
  }
  if (input.HtmlPart != null) {
    entries["HtmlPart"] = input.HtmlPart;
  }
  return entries;
};

/**
 * serializeAws_queryTestRenderTemplateRequest
 */
const se_TestRenderTemplateRequest = (input: TestRenderTemplateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.TemplateData != null) {
    entries["TemplateData"] = input.TemplateData;
  }
  return entries;
};

/**
 * serializeAws_queryTrackingOptions
 */
const se_TrackingOptions = (input: TrackingOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CustomRedirectDomain != null) {
    entries["CustomRedirectDomain"] = input.CustomRedirectDomain;
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
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
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
  if (input.ConfigurationSetName != null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.EventDestination != null) {
    const memberEntries = se_EventDestination(input.EventDestination, context);
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
  if (input.ConfigurationSetName != null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
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
  if (input.ConfigurationSetName != null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
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
  if (input.ConfigurationSetName != null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.TrackingOptions != null) {
    const memberEntries = se_TrackingOptions(input.TrackingOptions, context);
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
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.FromEmailAddress != null) {
    entries["FromEmailAddress"] = input.FromEmailAddress;
  }
  if (input.TemplateSubject != null) {
    entries["TemplateSubject"] = input.TemplateSubject;
  }
  if (input.TemplateContent != null) {
    entries["TemplateContent"] = input.TemplateContent;
  }
  if (input.SuccessRedirectionURL != null) {
    entries["SuccessRedirectionURL"] = input.SuccessRedirectionURL;
  }
  if (input.FailureRedirectionURL != null) {
    entries["FailureRedirectionURL"] = input.FailureRedirectionURL;
  }
  return entries;
};

/**
 * serializeAws_queryUpdateReceiptRuleRequest
 */
const se_UpdateReceiptRuleRequest = (input: UpdateReceiptRuleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleSetName != null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  if (input.Rule != null) {
    const memberEntries = se_ReceiptRule(input.Rule, context);
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
  if (input.Template != null) {
    const memberEntries = se_Template(input.Template, context);
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
  if (input.Domain != null) {
    entries["Domain"] = input.Domain;
  }
  return entries;
};

/**
 * serializeAws_queryVerifyDomainIdentityRequest
 */
const se_VerifyDomainIdentityRequest = (input: VerifyDomainIdentityRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Domain != null) {
    entries["Domain"] = input.Domain;
  }
  return entries;
};

/**
 * serializeAws_queryVerifyEmailAddressRequest
 */
const se_VerifyEmailAddressRequest = (input: VerifyEmailAddressRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.EmailAddress != null) {
    entries["EmailAddress"] = input.EmailAddress;
  }
  return entries;
};

/**
 * serializeAws_queryVerifyEmailIdentityRequest
 */
const se_VerifyEmailIdentityRequest = (input: VerifyEmailIdentityRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.EmailAddress != null) {
    entries["EmailAddress"] = input.EmailAddress;
  }
  return entries;
};

/**
 * serializeAws_queryWorkmailAction
 */
const se_WorkmailAction = (input: WorkmailAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.OrganizationArn != null) {
    entries["OrganizationArn"] = input.OrganizationArn;
  }
  return entries;
};

/**
 * deserializeAws_queryAccountSendingPausedException
 */
const de_AccountSendingPausedException = (output: any, context: __SerdeContext): AccountSendingPausedException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAddHeaderAction
 */
const de_AddHeaderAction = (output: any, context: __SerdeContext): AddHeaderAction => {
  const contents: any = {};
  if (output["HeaderName"] !== undefined) {
    contents.HeaderName = __expectString(output["HeaderName"]);
  }
  if (output["HeaderValue"] !== undefined) {
    contents.HeaderValue = __expectString(output["HeaderValue"]);
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
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryBounceAction
 */
const de_BounceAction = (output: any, context: __SerdeContext): BounceAction => {
  const contents: any = {};
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = __expectString(output["TopicArn"]);
  }
  if (output["SmtpReplyCode"] !== undefined) {
    contents.SmtpReplyCode = __expectString(output["SmtpReplyCode"]);
  }
  if (output["StatusCode"] !== undefined) {
    contents.StatusCode = __expectString(output["StatusCode"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  if (output["Sender"] !== undefined) {
    contents.Sender = __expectString(output["Sender"]);
  }
  return contents;
};

/**
 * deserializeAws_queryBulkEmailDestinationStatus
 */
const de_BulkEmailDestinationStatus = (output: any, context: __SerdeContext): BulkEmailDestinationStatus => {
  const contents: any = {};
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["Error"] !== undefined) {
    contents.Error = __expectString(output["Error"]);
  }
  if (output["MessageId"] !== undefined) {
    contents.MessageId = __expectString(output["MessageId"]);
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
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
    contents.DimensionConfigurations = [];
  } else if (
    output["DimensionConfigurations"] !== undefined &&
    output["DimensionConfigurations"]["member"] !== undefined
  ) {
    contents.DimensionConfigurations = de_CloudWatchDimensionConfigurations(
      __getArrayIfSingleItem(output["DimensionConfigurations"]["member"]),
      context
    );
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
  if (output["DimensionName"] !== undefined) {
    contents.DimensionName = __expectString(output["DimensionName"]);
  }
  if (output["DimensionValueSource"] !== undefined) {
    contents.DimensionValueSource = __expectString(output["DimensionValueSource"]);
  }
  if (output["DefaultDimensionValue"] !== undefined) {
    contents.DefaultDimensionValue = __expectString(output["DefaultDimensionValue"]);
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
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
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
  if (output["ConfigurationSetName"] !== undefined) {
    contents.ConfigurationSetName = __expectString(output["ConfigurationSetName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["ConfigurationSetName"] !== undefined) {
    contents.ConfigurationSetName = __expectString(output["ConfigurationSetName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["ConfigurationSetName"] !== undefined) {
    contents.ConfigurationSetName = __expectString(output["ConfigurationSetName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomVerificationEmailTemplate
 */
const de_CustomVerificationEmailTemplate = (output: any, context: __SerdeContext): CustomVerificationEmailTemplate => {
  const contents: any = {};
  if (output["TemplateName"] !== undefined) {
    contents.TemplateName = __expectString(output["TemplateName"]);
  }
  if (output["FromEmailAddress"] !== undefined) {
    contents.FromEmailAddress = __expectString(output["FromEmailAddress"]);
  }
  if (output["TemplateSubject"] !== undefined) {
    contents.TemplateSubject = __expectString(output["TemplateSubject"]);
  }
  if (output["SuccessRedirectionURL"] !== undefined) {
    contents.SuccessRedirectionURL = __expectString(output["SuccessRedirectionURL"]);
  }
  if (output["FailureRedirectionURL"] !== undefined) {
    contents.FailureRedirectionURL = __expectString(output["FailureRedirectionURL"]);
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
  if (output["CustomVerificationEmailTemplateName"] !== undefined) {
    contents.CustomVerificationEmailTemplateName = __expectString(output["CustomVerificationEmailTemplateName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["CustomVerificationEmailTemplateName"] !== undefined) {
    contents.CustomVerificationEmailTemplateName = __expectString(output["CustomVerificationEmailTemplateName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["TlsPolicy"] !== undefined) {
    contents.TlsPolicy = __expectString(output["TlsPolicy"]);
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
  if (output["Metadata"] !== undefined) {
    contents.Metadata = de_ReceiptRuleSetMetadata(output["Metadata"], context);
  }
  if (output.Rules === "") {
    contents.Rules = [];
  } else if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
    contents.Rules = de_ReceiptRulesList(__getArrayIfSingleItem(output["Rules"]["member"]), context);
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
  if (output["ConfigurationSet"] !== undefined) {
    contents.ConfigurationSet = de_ConfigurationSet(output["ConfigurationSet"], context);
  }
  if (output.EventDestinations === "") {
    contents.EventDestinations = [];
  } else if (output["EventDestinations"] !== undefined && output["EventDestinations"]["member"] !== undefined) {
    contents.EventDestinations = de_EventDestinations(
      __getArrayIfSingleItem(output["EventDestinations"]["member"]),
      context
    );
  }
  if (output["TrackingOptions"] !== undefined) {
    contents.TrackingOptions = de_TrackingOptions(output["TrackingOptions"], context);
  }
  if (output["DeliveryOptions"] !== undefined) {
    contents.DeliveryOptions = de_DeliveryOptions(output["DeliveryOptions"], context);
  }
  if (output["ReputationOptions"] !== undefined) {
    contents.ReputationOptions = de_ReputationOptions(output["ReputationOptions"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeReceiptRuleResponse
 */
const de_DescribeReceiptRuleResponse = (output: any, context: __SerdeContext): DescribeReceiptRuleResponse => {
  const contents: any = {};
  if (output["Rule"] !== undefined) {
    contents.Rule = de_ReceiptRule(output["Rule"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeReceiptRuleSetResponse
 */
const de_DescribeReceiptRuleSetResponse = (output: any, context: __SerdeContext): DescribeReceiptRuleSetResponse => {
  const contents: any = {};
  if (output["Metadata"] !== undefined) {
    contents.Metadata = de_ReceiptRuleSetMetadata(output["Metadata"], context);
  }
  if (output.Rules === "") {
    contents.Rules = [];
  } else if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
    contents.Rules = de_ReceiptRulesList(__getArrayIfSingleItem(output["Rules"]["member"]), context);
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
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output.MatchingEventTypes === "") {
    contents.MatchingEventTypes = [];
  } else if (output["MatchingEventTypes"] !== undefined && output["MatchingEventTypes"]["member"] !== undefined) {
    contents.MatchingEventTypes = de_EventTypes(
      __getArrayIfSingleItem(output["MatchingEventTypes"]["member"]),
      context
    );
  }
  if (output["KinesisFirehoseDestination"] !== undefined) {
    contents.KinesisFirehoseDestination = de_KinesisFirehoseDestination(output["KinesisFirehoseDestination"], context);
  }
  if (output["CloudWatchDestination"] !== undefined) {
    contents.CloudWatchDestination = de_CloudWatchDestination(output["CloudWatchDestination"], context);
  }
  if (output["SNSDestination"] !== undefined) {
    contents.SNSDestination = de_SNSDestination(output["SNSDestination"], context);
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
  if (output["ConfigurationSetName"] !== undefined) {
    contents.ConfigurationSetName = __expectString(output["ConfigurationSetName"]);
  }
  if (output["EventDestinationName"] !== undefined) {
    contents.EventDestinationName = __expectString(output["EventDestinationName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["ConfigurationSetName"] !== undefined) {
    contents.ConfigurationSetName = __expectString(output["ConfigurationSetName"]);
  }
  if (output["EventDestinationName"] !== undefined) {
    contents.EventDestinationName = __expectString(output["EventDestinationName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["FromEmailAddress"] !== undefined) {
    contents.FromEmailAddress = __expectString(output["FromEmailAddress"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
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
  if (output["TemplateName"] !== undefined) {
    contents.TemplateName = __expectString(output["TemplateName"]);
  }
  if (output["FromEmailAddress"] !== undefined) {
    contents.FromEmailAddress = __expectString(output["FromEmailAddress"]);
  }
  if (output["TemplateSubject"] !== undefined) {
    contents.TemplateSubject = __expectString(output["TemplateSubject"]);
  }
  if (output["TemplateContent"] !== undefined) {
    contents.TemplateContent = __expectString(output["TemplateContent"]);
  }
  if (output["SuccessRedirectionURL"] !== undefined) {
    contents.SuccessRedirectionURL = __expectString(output["SuccessRedirectionURL"]);
  }
  if (output["FailureRedirectionURL"] !== undefined) {
    contents.FailureRedirectionURL = __expectString(output["FailureRedirectionURL"]);
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
    contents.DkimAttributes = {};
  } else if (output["DkimAttributes"] !== undefined && output["DkimAttributes"]["entry"] !== undefined) {
    contents.DkimAttributes = de_DkimAttributes(__getArrayIfSingleItem(output["DkimAttributes"]["entry"]), context);
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
    contents.MailFromDomainAttributes = {};
  } else if (
    output["MailFromDomainAttributes"] !== undefined &&
    output["MailFromDomainAttributes"]["entry"] !== undefined
  ) {
    contents.MailFromDomainAttributes = de_MailFromDomainAttributes(
      __getArrayIfSingleItem(output["MailFromDomainAttributes"]["entry"]),
      context
    );
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
    contents.NotificationAttributes = {};
  } else if (
    output["NotificationAttributes"] !== undefined &&
    output["NotificationAttributes"]["entry"] !== undefined
  ) {
    contents.NotificationAttributes = de_NotificationAttributes(
      __getArrayIfSingleItem(output["NotificationAttributes"]["entry"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryGetIdentityPoliciesResponse
 */
const de_GetIdentityPoliciesResponse = (output: any, context: __SerdeContext): GetIdentityPoliciesResponse => {
  const contents: any = {};
  if (output.Policies === "") {
    contents.Policies = {};
  } else if (output["Policies"] !== undefined && output["Policies"]["entry"] !== undefined) {
    contents.Policies = de_PolicyMap(__getArrayIfSingleItem(output["Policies"]["entry"]), context);
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
    contents.VerificationAttributes = {};
  } else if (
    output["VerificationAttributes"] !== undefined &&
    output["VerificationAttributes"]["entry"] !== undefined
  ) {
    contents.VerificationAttributes = de_VerificationAttributes(
      __getArrayIfSingleItem(output["VerificationAttributes"]["entry"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryGetSendQuotaResponse
 */
const de_GetSendQuotaResponse = (output: any, context: __SerdeContext): GetSendQuotaResponse => {
  const contents: any = {};
  if (output["Max24HourSend"] !== undefined) {
    contents.Max24HourSend = __strictParseFloat(output["Max24HourSend"]) as number;
  }
  if (output["MaxSendRate"] !== undefined) {
    contents.MaxSendRate = __strictParseFloat(output["MaxSendRate"]) as number;
  }
  if (output["SentLast24Hours"] !== undefined) {
    contents.SentLast24Hours = __strictParseFloat(output["SentLast24Hours"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryGetSendStatisticsResponse
 */
const de_GetSendStatisticsResponse = (output: any, context: __SerdeContext): GetSendStatisticsResponse => {
  const contents: any = {};
  if (output.SendDataPoints === "") {
    contents.SendDataPoints = [];
  } else if (output["SendDataPoints"] !== undefined && output["SendDataPoints"]["member"] !== undefined) {
    contents.SendDataPoints = de_SendDataPointList(__getArrayIfSingleItem(output["SendDataPoints"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetTemplateResponse
 */
const de_GetTemplateResponse = (output: any, context: __SerdeContext): GetTemplateResponse => {
  const contents: any = {};
  if (output["Template"] !== undefined) {
    contents.Template = de_Template(output["Template"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryIdentityDkimAttributes
 */
const de_IdentityDkimAttributes = (output: any, context: __SerdeContext): IdentityDkimAttributes => {
  const contents: any = {};
  if (output["DkimEnabled"] !== undefined) {
    contents.DkimEnabled = __parseBoolean(output["DkimEnabled"]);
  }
  if (output["DkimVerificationStatus"] !== undefined) {
    contents.DkimVerificationStatus = __expectString(output["DkimVerificationStatus"]);
  }
  if (output.DkimTokens === "") {
    contents.DkimTokens = [];
  } else if (output["DkimTokens"] !== undefined && output["DkimTokens"]["member"] !== undefined) {
    contents.DkimTokens = de_VerificationTokenList(__getArrayIfSingleItem(output["DkimTokens"]["member"]), context);
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
  if (output["MailFromDomain"] !== undefined) {
    contents.MailFromDomain = __expectString(output["MailFromDomain"]);
  }
  if (output["MailFromDomainStatus"] !== undefined) {
    contents.MailFromDomainStatus = __expectString(output["MailFromDomainStatus"]);
  }
  if (output["BehaviorOnMXFailure"] !== undefined) {
    contents.BehaviorOnMXFailure = __expectString(output["BehaviorOnMXFailure"]);
  }
  return contents;
};

/**
 * deserializeAws_queryIdentityNotificationAttributes
 */
const de_IdentityNotificationAttributes = (output: any, context: __SerdeContext): IdentityNotificationAttributes => {
  const contents: any = {};
  if (output["BounceTopic"] !== undefined) {
    contents.BounceTopic = __expectString(output["BounceTopic"]);
  }
  if (output["ComplaintTopic"] !== undefined) {
    contents.ComplaintTopic = __expectString(output["ComplaintTopic"]);
  }
  if (output["DeliveryTopic"] !== undefined) {
    contents.DeliveryTopic = __expectString(output["DeliveryTopic"]);
  }
  if (output["ForwardingEnabled"] !== undefined) {
    contents.ForwardingEnabled = __parseBoolean(output["ForwardingEnabled"]);
  }
  if (output["HeadersInBounceNotificationsEnabled"] !== undefined) {
    contents.HeadersInBounceNotificationsEnabled = __parseBoolean(output["HeadersInBounceNotificationsEnabled"]);
  }
  if (output["HeadersInComplaintNotificationsEnabled"] !== undefined) {
    contents.HeadersInComplaintNotificationsEnabled = __parseBoolean(output["HeadersInComplaintNotificationsEnabled"]);
  }
  if (output["HeadersInDeliveryNotificationsEnabled"] !== undefined) {
    contents.HeadersInDeliveryNotificationsEnabled = __parseBoolean(output["HeadersInDeliveryNotificationsEnabled"]);
  }
  return contents;
};

/**
 * deserializeAws_queryIdentityVerificationAttributes
 */
const de_IdentityVerificationAttributes = (output: any, context: __SerdeContext): IdentityVerificationAttributes => {
  const contents: any = {};
  if (output["VerificationStatus"] !== undefined) {
    contents.VerificationStatus = __expectString(output["VerificationStatus"]);
  }
  if (output["VerificationToken"] !== undefined) {
    contents.VerificationToken = __expectString(output["VerificationToken"]);
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
  if (output["ConfigurationSetName"] !== undefined) {
    contents.ConfigurationSetName = __expectString(output["ConfigurationSetName"]);
  }
  if (output["EventDestinationName"] !== undefined) {
    contents.EventDestinationName = __expectString(output["EventDestinationName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDeliveryOptionsException
 */
const de_InvalidDeliveryOptionsException = (output: any, context: __SerdeContext): InvalidDeliveryOptionsException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["ConfigurationSetName"] !== undefined) {
    contents.ConfigurationSetName = __expectString(output["ConfigurationSetName"]);
  }
  if (output["EventDestinationName"] !== undefined) {
    contents.EventDestinationName = __expectString(output["EventDestinationName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidLambdaFunctionException
 */
const de_InvalidLambdaFunctionException = (output: any, context: __SerdeContext): InvalidLambdaFunctionException => {
  const contents: any = {};
  if (output["FunctionArn"] !== undefined) {
    contents.FunctionArn = __expectString(output["FunctionArn"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidPolicyException
 */
const de_InvalidPolicyException = (output: any, context: __SerdeContext): InvalidPolicyException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["TemplateName"] !== undefined) {
    contents.TemplateName = __expectString(output["TemplateName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidS3ConfigurationException
 */
const de_InvalidS3ConfigurationException = (output: any, context: __SerdeContext): InvalidS3ConfigurationException => {
  const contents: any = {};
  if (output["Bucket"] !== undefined) {
    contents.Bucket = __expectString(output["Bucket"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSNSDestinationException
 */
const de_InvalidSNSDestinationException = (output: any, context: __SerdeContext): InvalidSNSDestinationException => {
  const contents: any = {};
  if (output["ConfigurationSetName"] !== undefined) {
    contents.ConfigurationSetName = __expectString(output["ConfigurationSetName"]);
  }
  if (output["EventDestinationName"] !== undefined) {
    contents.EventDestinationName = __expectString(output["EventDestinationName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSnsTopicException
 */
const de_InvalidSnsTopicException = (output: any, context: __SerdeContext): InvalidSnsTopicException => {
  const contents: any = {};
  if (output["Topic"] !== undefined) {
    contents.Topic = __expectString(output["Topic"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidTemplateException
 */
const de_InvalidTemplateException = (output: any, context: __SerdeContext): InvalidTemplateException => {
  const contents: any = {};
  if (output["TemplateName"] !== undefined) {
    contents.TemplateName = __expectString(output["TemplateName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidTrackingOptionsException
 */
const de_InvalidTrackingOptionsException = (output: any, context: __SerdeContext): InvalidTrackingOptionsException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryKinesisFirehoseDestination
 */
const de_KinesisFirehoseDestination = (output: any, context: __SerdeContext): KinesisFirehoseDestination => {
  const contents: any = {};
  if (output["IAMRoleARN"] !== undefined) {
    contents.IAMRoleARN = __expectString(output["IAMRoleARN"]);
  }
  if (output["DeliveryStreamARN"] !== undefined) {
    contents.DeliveryStreamARN = __expectString(output["DeliveryStreamARN"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLambdaAction
 */
const de_LambdaAction = (output: any, context: __SerdeContext): LambdaAction => {
  const contents: any = {};
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = __expectString(output["TopicArn"]);
  }
  if (output["FunctionArn"] !== undefined) {
    contents.FunctionArn = __expectString(output["FunctionArn"]);
  }
  if (output["InvocationType"] !== undefined) {
    contents.InvocationType = __expectString(output["InvocationType"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListConfigurationSetsResponse
 */
const de_ListConfigurationSetsResponse = (output: any, context: __SerdeContext): ListConfigurationSetsResponse => {
  const contents: any = {};
  if (output.ConfigurationSets === "") {
    contents.ConfigurationSets = [];
  } else if (output["ConfigurationSets"] !== undefined && output["ConfigurationSets"]["member"] !== undefined) {
    contents.ConfigurationSets = de_ConfigurationSets(
      __getArrayIfSingleItem(output["ConfigurationSets"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
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
    contents.CustomVerificationEmailTemplates = [];
  } else if (
    output["CustomVerificationEmailTemplates"] !== undefined &&
    output["CustomVerificationEmailTemplates"]["member"] !== undefined
  ) {
    contents.CustomVerificationEmailTemplates = de_CustomVerificationEmailTemplates(
      __getArrayIfSingleItem(output["CustomVerificationEmailTemplates"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListIdentitiesResponse
 */
const de_ListIdentitiesResponse = (output: any, context: __SerdeContext): ListIdentitiesResponse => {
  const contents: any = {};
  if (output.Identities === "") {
    contents.Identities = [];
  } else if (output["Identities"] !== undefined && output["Identities"]["member"] !== undefined) {
    contents.Identities = de_IdentityList(__getArrayIfSingleItem(output["Identities"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListIdentityPoliciesResponse
 */
const de_ListIdentityPoliciesResponse = (output: any, context: __SerdeContext): ListIdentityPoliciesResponse => {
  const contents: any = {};
  if (output.PolicyNames === "") {
    contents.PolicyNames = [];
  } else if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
    contents.PolicyNames = de_PolicyNameList(__getArrayIfSingleItem(output["PolicyNames"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryListReceiptFiltersResponse
 */
const de_ListReceiptFiltersResponse = (output: any, context: __SerdeContext): ListReceiptFiltersResponse => {
  const contents: any = {};
  if (output.Filters === "") {
    contents.Filters = [];
  } else if (output["Filters"] !== undefined && output["Filters"]["member"] !== undefined) {
    contents.Filters = de_ReceiptFilterList(__getArrayIfSingleItem(output["Filters"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryListReceiptRuleSetsResponse
 */
const de_ListReceiptRuleSetsResponse = (output: any, context: __SerdeContext): ListReceiptRuleSetsResponse => {
  const contents: any = {};
  if (output.RuleSets === "") {
    contents.RuleSets = [];
  } else if (output["RuleSets"] !== undefined && output["RuleSets"]["member"] !== undefined) {
    contents.RuleSets = de_ReceiptRuleSetsLists(__getArrayIfSingleItem(output["RuleSets"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListTemplatesResponse
 */
const de_ListTemplatesResponse = (output: any, context: __SerdeContext): ListTemplatesResponse => {
  const contents: any = {};
  if (output.TemplatesMetadata === "") {
    contents.TemplatesMetadata = [];
  } else if (output["TemplatesMetadata"] !== undefined && output["TemplatesMetadata"]["member"] !== undefined) {
    contents.TemplatesMetadata = de_TemplateMetadataList(
      __getArrayIfSingleItem(output["TemplatesMetadata"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
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
    contents.VerifiedEmailAddresses = [];
  } else if (
    output["VerifiedEmailAddresses"] !== undefined &&
    output["VerifiedEmailAddresses"]["member"] !== undefined
  ) {
    contents.VerifiedEmailAddresses = de_AddressList(
      __getArrayIfSingleItem(output["VerifiedEmailAddresses"]["member"]),
      context
    );
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryMessageRejected
 */
const de_MessageRejected = (output: any, context: __SerdeContext): MessageRejected => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["TemplateName"] !== undefined) {
    contents.TemplateName = __expectString(output["TemplateName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["S3Action"] !== undefined) {
    contents.S3Action = de_S3Action(output["S3Action"], context);
  }
  if (output["BounceAction"] !== undefined) {
    contents.BounceAction = de_BounceAction(output["BounceAction"], context);
  }
  if (output["WorkmailAction"] !== undefined) {
    contents.WorkmailAction = de_WorkmailAction(output["WorkmailAction"], context);
  }
  if (output["LambdaAction"] !== undefined) {
    contents.LambdaAction = de_LambdaAction(output["LambdaAction"], context);
  }
  if (output["StopAction"] !== undefined) {
    contents.StopAction = de_StopAction(output["StopAction"], context);
  }
  if (output["AddHeaderAction"] !== undefined) {
    contents.AddHeaderAction = de_AddHeaderAction(output["AddHeaderAction"], context);
  }
  if (output["SNSAction"] !== undefined) {
    contents.SNSAction = de_SNSAction(output["SNSAction"], context);
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
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["IpFilter"] !== undefined) {
    contents.IpFilter = de_ReceiptIpFilter(output["IpFilter"], context);
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
  if (output["Policy"] !== undefined) {
    contents.Policy = __expectString(output["Policy"]);
  }
  if (output["Cidr"] !== undefined) {
    contents.Cidr = __expectString(output["Cidr"]);
  }
  return contents;
};

/**
 * deserializeAws_queryReceiptRule
 */
const de_ReceiptRule = (output: any, context: __SerdeContext): ReceiptRule => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["TlsPolicy"] !== undefined) {
    contents.TlsPolicy = __expectString(output["TlsPolicy"]);
  }
  if (output.Recipients === "") {
    contents.Recipients = [];
  } else if (output["Recipients"] !== undefined && output["Recipients"]["member"] !== undefined) {
    contents.Recipients = de_RecipientsList(__getArrayIfSingleItem(output["Recipients"]["member"]), context);
  }
  if (output.Actions === "") {
    contents.Actions = [];
  } else if (output["Actions"] !== undefined && output["Actions"]["member"] !== undefined) {
    contents.Actions = de_ReceiptActionsList(__getArrayIfSingleItem(output["Actions"]["member"]), context);
  }
  if (output["ScanEnabled"] !== undefined) {
    contents.ScanEnabled = __parseBoolean(output["ScanEnabled"]);
  }
  return contents;
};

/**
 * deserializeAws_queryReceiptRuleSetMetadata
 */
const de_ReceiptRuleSetMetadata = (output: any, context: __SerdeContext): ReceiptRuleSetMetadata => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["CreatedTimestamp"] !== undefined) {
    contents.CreatedTimestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedTimestamp"]));
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
  if (output["SendingEnabled"] !== undefined) {
    contents.SendingEnabled = __parseBoolean(output["SendingEnabled"]);
  }
  if (output["ReputationMetricsEnabled"] !== undefined) {
    contents.ReputationMetricsEnabled = __parseBoolean(output["ReputationMetricsEnabled"]);
  }
  if (output["LastFreshStart"] !== undefined) {
    contents.LastFreshStart = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastFreshStart"]));
  }
  return contents;
};

/**
 * deserializeAws_queryRuleDoesNotExistException
 */
const de_RuleDoesNotExistException = (output: any, context: __SerdeContext): RuleDoesNotExistException => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryRuleSetDoesNotExistException
 */
const de_RuleSetDoesNotExistException = (output: any, context: __SerdeContext): RuleSetDoesNotExistException => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryS3Action
 */
const de_S3Action = (output: any, context: __SerdeContext): S3Action => {
  const contents: any = {};
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = __expectString(output["TopicArn"]);
  }
  if (output["BucketName"] !== undefined) {
    contents.BucketName = __expectString(output["BucketName"]);
  }
  if (output["ObjectKeyPrefix"] !== undefined) {
    contents.ObjectKeyPrefix = __expectString(output["ObjectKeyPrefix"]);
  }
  if (output["KmsKeyArn"] !== undefined) {
    contents.KmsKeyArn = __expectString(output["KmsKeyArn"]);
  }
  return contents;
};

/**
 * deserializeAws_querySendBounceResponse
 */
const de_SendBounceResponse = (output: any, context: __SerdeContext): SendBounceResponse => {
  const contents: any = {};
  if (output["MessageId"] !== undefined) {
    contents.MessageId = __expectString(output["MessageId"]);
  }
  return contents;
};

/**
 * deserializeAws_querySendBulkTemplatedEmailResponse
 */
const de_SendBulkTemplatedEmailResponse = (output: any, context: __SerdeContext): SendBulkTemplatedEmailResponse => {
  const contents: any = {};
  if (output.Status === "") {
    contents.Status = [];
  } else if (output["Status"] !== undefined && output["Status"]["member"] !== undefined) {
    contents.Status = de_BulkEmailDestinationStatusList(__getArrayIfSingleItem(output["Status"]["member"]), context);
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
  if (output["MessageId"] !== undefined) {
    contents.MessageId = __expectString(output["MessageId"]);
  }
  return contents;
};

/**
 * deserializeAws_querySendDataPoint
 */
const de_SendDataPoint = (output: any, context: __SerdeContext): SendDataPoint => {
  const contents: any = {};
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Timestamp"]));
  }
  if (output["DeliveryAttempts"] !== undefined) {
    contents.DeliveryAttempts = __strictParseLong(output["DeliveryAttempts"]) as number;
  }
  if (output["Bounces"] !== undefined) {
    contents.Bounces = __strictParseLong(output["Bounces"]) as number;
  }
  if (output["Complaints"] !== undefined) {
    contents.Complaints = __strictParseLong(output["Complaints"]) as number;
  }
  if (output["Rejects"] !== undefined) {
    contents.Rejects = __strictParseLong(output["Rejects"]) as number;
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
  if (output["MessageId"] !== undefined) {
    contents.MessageId = __expectString(output["MessageId"]);
  }
  return contents;
};

/**
 * deserializeAws_querySendRawEmailResponse
 */
const de_SendRawEmailResponse = (output: any, context: __SerdeContext): SendRawEmailResponse => {
  const contents: any = {};
  if (output["MessageId"] !== undefined) {
    contents.MessageId = __expectString(output["MessageId"]);
  }
  return contents;
};

/**
 * deserializeAws_querySendTemplatedEmailResponse
 */
const de_SendTemplatedEmailResponse = (output: any, context: __SerdeContext): SendTemplatedEmailResponse => {
  const contents: any = {};
  if (output["MessageId"] !== undefined) {
    contents.MessageId = __expectString(output["MessageId"]);
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
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = __expectString(output["TopicArn"]);
  }
  if (output["Encoding"] !== undefined) {
    contents.Encoding = __expectString(output["Encoding"]);
  }
  return contents;
};

/**
 * deserializeAws_querySNSDestination
 */
const de_SNSDestination = (output: any, context: __SerdeContext): SNSDestination => {
  const contents: any = {};
  if (output["TopicARN"] !== undefined) {
    contents.TopicARN = __expectString(output["TopicARN"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStopAction
 */
const de_StopAction = (output: any, context: __SerdeContext): StopAction => {
  const contents: any = {};
  if (output["Scope"] !== undefined) {
    contents.Scope = __expectString(output["Scope"]);
  }
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = __expectString(output["TopicArn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTemplate
 */
const de_Template = (output: any, context: __SerdeContext): Template => {
  const contents: any = {};
  if (output["TemplateName"] !== undefined) {
    contents.TemplateName = __expectString(output["TemplateName"]);
  }
  if (output["SubjectPart"] !== undefined) {
    contents.SubjectPart = __expectString(output["SubjectPart"]);
  }
  if (output["TextPart"] !== undefined) {
    contents.TextPart = __expectString(output["TextPart"]);
  }
  if (output["HtmlPart"] !== undefined) {
    contents.HtmlPart = __expectString(output["HtmlPart"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTemplateDoesNotExistException
 */
const de_TemplateDoesNotExistException = (output: any, context: __SerdeContext): TemplateDoesNotExistException => {
  const contents: any = {};
  if (output["TemplateName"] !== undefined) {
    contents.TemplateName = __expectString(output["TemplateName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTemplateMetadata
 */
const de_TemplateMetadata = (output: any, context: __SerdeContext): TemplateMetadata => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["CreatedTimestamp"] !== undefined) {
    contents.CreatedTimestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedTimestamp"]));
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
  if (output["RenderedTemplate"] !== undefined) {
    contents.RenderedTemplate = __expectString(output["RenderedTemplate"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTrackingOptions
 */
const de_TrackingOptions = (output: any, context: __SerdeContext): TrackingOptions => {
  const contents: any = {};
  if (output["CustomRedirectDomain"] !== undefined) {
    contents.CustomRedirectDomain = __expectString(output["CustomRedirectDomain"]);
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
  if (output["ConfigurationSetName"] !== undefined) {
    contents.ConfigurationSetName = __expectString(output["ConfigurationSetName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["ConfigurationSetName"] !== undefined) {
    contents.ConfigurationSetName = __expectString(output["ConfigurationSetName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
    contents.DkimTokens = [];
  } else if (output["DkimTokens"] !== undefined && output["DkimTokens"]["member"] !== undefined) {
    contents.DkimTokens = de_VerificationTokenList(__getArrayIfSingleItem(output["DkimTokens"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryVerifyDomainIdentityResponse
 */
const de_VerifyDomainIdentityResponse = (output: any, context: __SerdeContext): VerifyDomainIdentityResponse => {
  const contents: any = {};
  if (output["VerificationToken"] !== undefined) {
    contents.VerificationToken = __expectString(output["VerificationToken"]);
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
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = __expectString(output["TopicArn"]);
  }
  if (output["OrganizationArn"] !== undefined) {
    contents.OrganizationArn = __expectString(output["OrganizationArn"]);
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
