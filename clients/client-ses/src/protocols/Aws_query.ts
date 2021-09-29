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
  SNSAction,
  SNSDestination,
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  strictParseFloat as __strictParseFloat,
  strictParseLong as __strictParseLong,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";

export const serializeAws_queryCloneReceiptRuleSetCommand = async (
  input: CloneReceiptRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCloneReceiptRuleSetRequest(input, context),
    Action: "CloneReceiptRuleSet",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateConfigurationSetCommand = async (
  input: CreateConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateConfigurationSetRequest(input, context),
    Action: "CreateConfigurationSet",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateConfigurationSetEventDestinationCommand = async (
  input: CreateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateConfigurationSetEventDestinationRequest(input, context),
    Action: "CreateConfigurationSetEventDestination",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateConfigurationSetTrackingOptionsCommand = async (
  input: CreateConfigurationSetTrackingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateConfigurationSetTrackingOptionsRequest(input, context),
    Action: "CreateConfigurationSetTrackingOptions",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateCustomVerificationEmailTemplateCommand = async (
  input: CreateCustomVerificationEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateCustomVerificationEmailTemplateRequest(input, context),
    Action: "CreateCustomVerificationEmailTemplate",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateReceiptFilterCommand = async (
  input: CreateReceiptFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateReceiptFilterRequest(input, context),
    Action: "CreateReceiptFilter",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateReceiptRuleCommand = async (
  input: CreateReceiptRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateReceiptRuleRequest(input, context),
    Action: "CreateReceiptRule",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateReceiptRuleSetCommand = async (
  input: CreateReceiptRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateReceiptRuleSetRequest(input, context),
    Action: "CreateReceiptRuleSet",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateTemplateCommand = async (
  input: CreateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateTemplateRequest(input, context),
    Action: "CreateTemplate",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteConfigurationSetCommand = async (
  input: DeleteConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteConfigurationSetRequest(input, context),
    Action: "DeleteConfigurationSet",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteConfigurationSetEventDestinationCommand = async (
  input: DeleteConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteConfigurationSetEventDestinationRequest(input, context),
    Action: "DeleteConfigurationSetEventDestination",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteConfigurationSetTrackingOptionsCommand = async (
  input: DeleteConfigurationSetTrackingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteConfigurationSetTrackingOptionsRequest(input, context),
    Action: "DeleteConfigurationSetTrackingOptions",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteCustomVerificationEmailTemplateCommand = async (
  input: DeleteCustomVerificationEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteCustomVerificationEmailTemplateRequest(input, context),
    Action: "DeleteCustomVerificationEmailTemplate",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteIdentityCommand = async (
  input: DeleteIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteIdentityRequest(input, context),
    Action: "DeleteIdentity",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteIdentityPolicyCommand = async (
  input: DeleteIdentityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteIdentityPolicyRequest(input, context),
    Action: "DeleteIdentityPolicy",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteReceiptFilterCommand = async (
  input: DeleteReceiptFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteReceiptFilterRequest(input, context),
    Action: "DeleteReceiptFilter",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteReceiptRuleCommand = async (
  input: DeleteReceiptRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteReceiptRuleRequest(input, context),
    Action: "DeleteReceiptRule",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteReceiptRuleSetCommand = async (
  input: DeleteReceiptRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteReceiptRuleSetRequest(input, context),
    Action: "DeleteReceiptRuleSet",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteTemplateCommand = async (
  input: DeleteTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteTemplateRequest(input, context),
    Action: "DeleteTemplate",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteVerifiedEmailAddressCommand = async (
  input: DeleteVerifiedEmailAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteVerifiedEmailAddressRequest(input, context),
    Action: "DeleteVerifiedEmailAddress",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeActiveReceiptRuleSetCommand = async (
  input: DescribeActiveReceiptRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeActiveReceiptRuleSetRequest(input, context),
    Action: "DescribeActiveReceiptRuleSet",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeConfigurationSetCommand = async (
  input: DescribeConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeConfigurationSetRequest(input, context),
    Action: "DescribeConfigurationSet",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeReceiptRuleCommand = async (
  input: DescribeReceiptRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeReceiptRuleRequest(input, context),
    Action: "DescribeReceiptRule",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeReceiptRuleSetCommand = async (
  input: DescribeReceiptRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeReceiptRuleSetRequest(input, context),
    Action: "DescribeReceiptRuleSet",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetAccountSendingEnabledCommand = async (
  input: GetAccountSendingEnabledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "GetAccountSendingEnabled",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetCustomVerificationEmailTemplateCommand = async (
  input: GetCustomVerificationEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetCustomVerificationEmailTemplateRequest(input, context),
    Action: "GetCustomVerificationEmailTemplate",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetIdentityDkimAttributesCommand = async (
  input: GetIdentityDkimAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetIdentityDkimAttributesRequest(input, context),
    Action: "GetIdentityDkimAttributes",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetIdentityMailFromDomainAttributesCommand = async (
  input: GetIdentityMailFromDomainAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetIdentityMailFromDomainAttributesRequest(input, context),
    Action: "GetIdentityMailFromDomainAttributes",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetIdentityNotificationAttributesCommand = async (
  input: GetIdentityNotificationAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetIdentityNotificationAttributesRequest(input, context),
    Action: "GetIdentityNotificationAttributes",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetIdentityPoliciesCommand = async (
  input: GetIdentityPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetIdentityPoliciesRequest(input, context),
    Action: "GetIdentityPolicies",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetIdentityVerificationAttributesCommand = async (
  input: GetIdentityVerificationAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetIdentityVerificationAttributesRequest(input, context),
    Action: "GetIdentityVerificationAttributes",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetSendQuotaCommand = async (
  input: GetSendQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "GetSendQuota",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetSendStatisticsCommand = async (
  input: GetSendStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "GetSendStatistics",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetTemplateCommand = async (
  input: GetTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetTemplateRequest(input, context),
    Action: "GetTemplate",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListConfigurationSetsCommand = async (
  input: ListConfigurationSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListConfigurationSetsRequest(input, context),
    Action: "ListConfigurationSets",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListCustomVerificationEmailTemplatesCommand = async (
  input: ListCustomVerificationEmailTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListCustomVerificationEmailTemplatesRequest(input, context),
    Action: "ListCustomVerificationEmailTemplates",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListIdentitiesCommand = async (
  input: ListIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListIdentitiesRequest(input, context),
    Action: "ListIdentities",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListIdentityPoliciesCommand = async (
  input: ListIdentityPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListIdentityPoliciesRequest(input, context),
    Action: "ListIdentityPolicies",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListReceiptFiltersCommand = async (
  input: ListReceiptFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListReceiptFiltersRequest(input, context),
    Action: "ListReceiptFilters",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListReceiptRuleSetsCommand = async (
  input: ListReceiptRuleSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListReceiptRuleSetsRequest(input, context),
    Action: "ListReceiptRuleSets",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListTemplatesCommand = async (
  input: ListTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListTemplatesRequest(input, context),
    Action: "ListTemplates",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListVerifiedEmailAddressesCommand = async (
  input: ListVerifiedEmailAddressesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "ListVerifiedEmailAddresses",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutConfigurationSetDeliveryOptionsCommand = async (
  input: PutConfigurationSetDeliveryOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutConfigurationSetDeliveryOptionsRequest(input, context),
    Action: "PutConfigurationSetDeliveryOptions",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutIdentityPolicyCommand = async (
  input: PutIdentityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutIdentityPolicyRequest(input, context),
    Action: "PutIdentityPolicy",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryReorderReceiptRuleSetCommand = async (
  input: ReorderReceiptRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryReorderReceiptRuleSetRequest(input, context),
    Action: "ReorderReceiptRuleSet",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySendBounceCommand = async (
  input: SendBounceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySendBounceRequest(input, context),
    Action: "SendBounce",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySendBulkTemplatedEmailCommand = async (
  input: SendBulkTemplatedEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySendBulkTemplatedEmailRequest(input, context),
    Action: "SendBulkTemplatedEmail",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySendCustomVerificationEmailCommand = async (
  input: SendCustomVerificationEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySendCustomVerificationEmailRequest(input, context),
    Action: "SendCustomVerificationEmail",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySendEmailCommand = async (
  input: SendEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySendEmailRequest(input, context),
    Action: "SendEmail",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySendRawEmailCommand = async (
  input: SendRawEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySendRawEmailRequest(input, context),
    Action: "SendRawEmail",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySendTemplatedEmailCommand = async (
  input: SendTemplatedEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySendTemplatedEmailRequest(input, context),
    Action: "SendTemplatedEmail",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetActiveReceiptRuleSetCommand = async (
  input: SetActiveReceiptRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetActiveReceiptRuleSetRequest(input, context),
    Action: "SetActiveReceiptRuleSet",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetIdentityDkimEnabledCommand = async (
  input: SetIdentityDkimEnabledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetIdentityDkimEnabledRequest(input, context),
    Action: "SetIdentityDkimEnabled",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetIdentityFeedbackForwardingEnabledCommand = async (
  input: SetIdentityFeedbackForwardingEnabledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetIdentityFeedbackForwardingEnabledRequest(input, context),
    Action: "SetIdentityFeedbackForwardingEnabled",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetIdentityHeadersInNotificationsEnabledCommand = async (
  input: SetIdentityHeadersInNotificationsEnabledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetIdentityHeadersInNotificationsEnabledRequest(input, context),
    Action: "SetIdentityHeadersInNotificationsEnabled",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetIdentityMailFromDomainCommand = async (
  input: SetIdentityMailFromDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetIdentityMailFromDomainRequest(input, context),
    Action: "SetIdentityMailFromDomain",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetIdentityNotificationTopicCommand = async (
  input: SetIdentityNotificationTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetIdentityNotificationTopicRequest(input, context),
    Action: "SetIdentityNotificationTopic",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetReceiptRulePositionCommand = async (
  input: SetReceiptRulePositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetReceiptRulePositionRequest(input, context),
    Action: "SetReceiptRulePosition",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryTestRenderTemplateCommand = async (
  input: TestRenderTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryTestRenderTemplateRequest(input, context),
    Action: "TestRenderTemplate",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateAccountSendingEnabledCommand = async (
  input: UpdateAccountSendingEnabledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateAccountSendingEnabledRequest(input, context),
    Action: "UpdateAccountSendingEnabled",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateConfigurationSetEventDestinationCommand = async (
  input: UpdateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateConfigurationSetEventDestinationRequest(input, context),
    Action: "UpdateConfigurationSetEventDestination",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand = async (
  input: UpdateConfigurationSetReputationMetricsEnabledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledRequest(input, context),
    Action: "UpdateConfigurationSetReputationMetricsEnabled",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateConfigurationSetSendingEnabledCommand = async (
  input: UpdateConfigurationSetSendingEnabledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateConfigurationSetSendingEnabledRequest(input, context),
    Action: "UpdateConfigurationSetSendingEnabled",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateConfigurationSetTrackingOptionsCommand = async (
  input: UpdateConfigurationSetTrackingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateConfigurationSetTrackingOptionsRequest(input, context),
    Action: "UpdateConfigurationSetTrackingOptions",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateCustomVerificationEmailTemplateCommand = async (
  input: UpdateCustomVerificationEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateCustomVerificationEmailTemplateRequest(input, context),
    Action: "UpdateCustomVerificationEmailTemplate",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateReceiptRuleCommand = async (
  input: UpdateReceiptRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateReceiptRuleRequest(input, context),
    Action: "UpdateReceiptRule",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateTemplateCommand = async (
  input: UpdateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateTemplateRequest(input, context),
    Action: "UpdateTemplate",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryVerifyDomainDkimCommand = async (
  input: VerifyDomainDkimCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryVerifyDomainDkimRequest(input, context),
    Action: "VerifyDomainDkim",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryVerifyDomainIdentityCommand = async (
  input: VerifyDomainIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryVerifyDomainIdentityRequest(input, context),
    Action: "VerifyDomainIdentity",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryVerifyEmailAddressCommand = async (
  input: VerifyEmailAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryVerifyEmailAddressRequest(input, context),
    Action: "VerifyEmailAddress",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryVerifyEmailIdentityCommand = async (
  input: VerifyEmailIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryVerifyEmailIdentityRequest(input, context),
    Action: "VerifyEmailIdentity",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryCloneReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloneReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCloneReceiptRuleSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCloneReceiptRuleSetResponse(data.CloneReceiptRuleSetResult, context);
  const response: CloneReceiptRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCloneReceiptRuleSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloneReceiptRuleSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.ses#AlreadyExistsException":
      response = {
        ...(await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.ses#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RuleSetDoesNotExistException":
    case "com.amazonaws.ses#RuleSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateConfigurationSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateConfigurationSetResponse(data.CreateConfigurationSetResult, context);
  const response: CreateConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetAlreadyExistsException":
    case "com.amazonaws.ses#ConfigurationSetAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryConfigurationSetAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConfigurationSetException":
    case "com.amazonaws.ses#InvalidConfigurationSetException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.ses#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateConfigurationSetEventDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateConfigurationSetEventDestinationResponse(
    data.CreateConfigurationSetEventDestinationResult,
    context
  );
  const response: CreateConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExistException":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EventDestinationAlreadyExistsException":
    case "com.amazonaws.ses#EventDestinationAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryEventDestinationAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCloudWatchDestinationException":
    case "com.amazonaws.ses#InvalidCloudWatchDestinationException":
      response = {
        ...(await deserializeAws_queryInvalidCloudWatchDestinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFirehoseDestinationException":
    case "com.amazonaws.ses#InvalidFirehoseDestinationException":
      response = {
        ...(await deserializeAws_queryInvalidFirehoseDestinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSNSDestinationException":
    case "com.amazonaws.ses#InvalidSNSDestinationException":
      response = {
        ...(await deserializeAws_queryInvalidSNSDestinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.ses#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateConfigurationSetTrackingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetTrackingOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateConfigurationSetTrackingOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateConfigurationSetTrackingOptionsResponse(
    data.CreateConfigurationSetTrackingOptionsResult,
    context
  );
  const response: CreateConfigurationSetTrackingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateConfigurationSetTrackingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetTrackingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExistException":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTrackingOptionsException":
    case "com.amazonaws.ses#InvalidTrackingOptionsException":
      response = {
        ...(await deserializeAws_queryInvalidTrackingOptionsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TrackingOptionsAlreadyExistsException":
    case "com.amazonaws.ses#TrackingOptionsAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryTrackingOptionsAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateCustomVerificationEmailTemplateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateCustomVerificationEmailTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateCustomVerificationEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomVerificationEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomVerificationEmailInvalidContentException":
    case "com.amazonaws.ses#CustomVerificationEmailInvalidContentException":
      response = {
        ...(await deserializeAws_queryCustomVerificationEmailInvalidContentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CustomVerificationEmailTemplateAlreadyExistsException":
    case "com.amazonaws.ses#CustomVerificationEmailTemplateAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryCustomVerificationEmailTemplateAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FromEmailAddressNotVerifiedException":
    case "com.amazonaws.ses#FromEmailAddressNotVerifiedException":
      response = {
        ...(await deserializeAws_queryFromEmailAddressNotVerifiedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.ses#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateReceiptFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReceiptFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateReceiptFilterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateReceiptFilterResponse(data.CreateReceiptFilterResult, context);
  const response: CreateReceiptFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateReceiptFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReceiptFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.ses#AlreadyExistsException":
      response = {
        ...(await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.ses#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateReceiptRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReceiptRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateReceiptRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateReceiptRuleResponse(data.CreateReceiptRuleResult, context);
  const response: CreateReceiptRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateReceiptRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReceiptRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.ses#AlreadyExistsException":
      response = {
        ...(await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLambdaFunctionException":
    case "com.amazonaws.ses#InvalidLambdaFunctionException":
      response = {
        ...(await deserializeAws_queryInvalidLambdaFunctionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ConfigurationException":
    case "com.amazonaws.ses#InvalidS3ConfigurationException":
      response = {
        ...(await deserializeAws_queryInvalidS3ConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSnsTopicException":
    case "com.amazonaws.ses#InvalidSnsTopicException":
      response = {
        ...(await deserializeAws_queryInvalidSnsTopicExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.ses#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RuleDoesNotExistException":
    case "com.amazonaws.ses#RuleDoesNotExistException":
      response = {
        ...(await deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RuleSetDoesNotExistException":
    case "com.amazonaws.ses#RuleSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateReceiptRuleSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateReceiptRuleSetResponse(data.CreateReceiptRuleSetResult, context);
  const response: CreateReceiptRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateReceiptRuleSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReceiptRuleSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.ses#AlreadyExistsException":
      response = {
        ...(await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.ses#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateTemplateResponse(data.CreateTemplateResult, context);
  const response: CreateTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.ses#AlreadyExistsException":
      response = {
        ...(await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTemplateException":
    case "com.amazonaws.ses#InvalidTemplateException":
      response = {
        ...(await deserializeAws_queryInvalidTemplateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.ses#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteConfigurationSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteConfigurationSetResponse(data.DeleteConfigurationSetResult, context);
  const response: DeleteConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExistException":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteConfigurationSetEventDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteConfigurationSetEventDestinationResponse(
    data.DeleteConfigurationSetEventDestinationResult,
    context
  );
  const response: DeleteConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExistException":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EventDestinationDoesNotExistException":
    case "com.amazonaws.ses#EventDestinationDoesNotExistException":
      response = {
        ...(await deserializeAws_queryEventDestinationDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetTrackingOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteConfigurationSetTrackingOptionsResponse(
    data.DeleteConfigurationSetTrackingOptionsResult,
    context
  );
  const response: DeleteConfigurationSetTrackingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetTrackingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExistException":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TrackingOptionsDoesNotExistException":
    case "com.amazonaws.ses#TrackingOptionsDoesNotExistException":
      response = {
        ...(await deserializeAws_queryTrackingOptionsDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteCustomVerificationEmailTemplateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCustomVerificationEmailTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteCustomVerificationEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomVerificationEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteIdentityResponse(data.DeleteIdentityResult, context);
  const response: DeleteIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteIdentityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteIdentityPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteIdentityPolicyResponse(data.DeleteIdentityPolicyResult, context);
  const response: DeleteIdentityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteIdentityPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteReceiptFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReceiptFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteReceiptFilterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteReceiptFilterResponse(data.DeleteReceiptFilterResult, context);
  const response: DeleteReceiptFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteReceiptFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReceiptFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteReceiptRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReceiptRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteReceiptRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteReceiptRuleResponse(data.DeleteReceiptRuleResult, context);
  const response: DeleteReceiptRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteReceiptRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReceiptRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RuleSetDoesNotExistException":
    case "com.amazonaws.ses#RuleSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteReceiptRuleSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteReceiptRuleSetResponse(data.DeleteReceiptRuleSetResult, context);
  const response: DeleteReceiptRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteReceiptRuleSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReceiptRuleSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CannotDeleteException":
    case "com.amazonaws.ses#CannotDeleteException":
      response = {
        ...(await deserializeAws_queryCannotDeleteExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteTemplateResponse(data.DeleteTemplateResult, context);
  const response: DeleteTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteVerifiedEmailAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVerifiedEmailAddressCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteVerifiedEmailAddressCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteVerifiedEmailAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteVerifiedEmailAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVerifiedEmailAddressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeActiveReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActiveReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeActiveReceiptRuleSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeActiveReceiptRuleSetResponse(data.DescribeActiveReceiptRuleSetResult, context);
  const response: DescribeActiveReceiptRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeActiveReceiptRuleSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActiveReceiptRuleSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeConfigurationSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeConfigurationSetResponse(data.DescribeConfigurationSetResult, context);
  const response: DescribeConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExistException":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeReceiptRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReceiptRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeReceiptRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeReceiptRuleResponse(data.DescribeReceiptRuleResult, context);
  const response: DescribeReceiptRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeReceiptRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReceiptRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RuleDoesNotExistException":
    case "com.amazonaws.ses#RuleDoesNotExistException":
      response = {
        ...(await deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RuleSetDoesNotExistException":
    case "com.amazonaws.ses#RuleSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeReceiptRuleSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeReceiptRuleSetResponse(data.DescribeReceiptRuleSetResult, context);
  const response: DescribeReceiptRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeReceiptRuleSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReceiptRuleSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RuleSetDoesNotExistException":
    case "com.amazonaws.ses#RuleSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetAccountSendingEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSendingEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetAccountSendingEnabledCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetAccountSendingEnabledResponse(data.GetAccountSendingEnabledResult, context);
  const response: GetAccountSendingEnabledCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetAccountSendingEnabledCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSendingEnabledCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetCustomVerificationEmailTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetCustomVerificationEmailTemplateResponse(
    data.GetCustomVerificationEmailTemplateResult,
    context
  );
  const response: GetCustomVerificationEmailTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetCustomVerificationEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomVerificationEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomVerificationEmailTemplateDoesNotExistException":
    case "com.amazonaws.ses#CustomVerificationEmailTemplateDoesNotExistException":
      response = {
        ...(await deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetIdentityDkimAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityDkimAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetIdentityDkimAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetIdentityDkimAttributesResponse(data.GetIdentityDkimAttributesResult, context);
  const response: GetIdentityDkimAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetIdentityDkimAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityDkimAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetIdentityMailFromDomainAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityMailFromDomainAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetIdentityMailFromDomainAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetIdentityMailFromDomainAttributesResponse(
    data.GetIdentityMailFromDomainAttributesResult,
    context
  );
  const response: GetIdentityMailFromDomainAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetIdentityMailFromDomainAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityMailFromDomainAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetIdentityNotificationAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityNotificationAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetIdentityNotificationAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetIdentityNotificationAttributesResponse(
    data.GetIdentityNotificationAttributesResult,
    context
  );
  const response: GetIdentityNotificationAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetIdentityNotificationAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityNotificationAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetIdentityPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetIdentityPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetIdentityPoliciesResponse(data.GetIdentityPoliciesResult, context);
  const response: GetIdentityPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetIdentityPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetIdentityVerificationAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityVerificationAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetIdentityVerificationAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetIdentityVerificationAttributesResponse(
    data.GetIdentityVerificationAttributesResult,
    context
  );
  const response: GetIdentityVerificationAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetIdentityVerificationAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityVerificationAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetSendQuotaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSendQuotaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetSendQuotaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetSendQuotaResponse(data.GetSendQuotaResult, context);
  const response: GetSendQuotaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetSendQuotaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSendQuotaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetSendStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSendStatisticsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetSendStatisticsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetSendStatisticsResponse(data.GetSendStatisticsResult, context);
  const response: GetSendStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetSendStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSendStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetTemplateResponse(data.GetTemplateResult, context);
  const response: GetTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TemplateDoesNotExistException":
    case "com.amazonaws.ses#TemplateDoesNotExistException":
      response = {
        ...(await deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListConfigurationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListConfigurationSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListConfigurationSetsResponse(data.ListConfigurationSetsResult, context);
  const response: ListConfigurationSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListConfigurationSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListCustomVerificationEmailTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomVerificationEmailTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListCustomVerificationEmailTemplatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListCustomVerificationEmailTemplatesResponse(
    data.ListCustomVerificationEmailTemplatesResult,
    context
  );
  const response: ListCustomVerificationEmailTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListCustomVerificationEmailTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomVerificationEmailTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListIdentitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListIdentitiesResponse(data.ListIdentitiesResult, context);
  const response: ListIdentitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListIdentitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListIdentityPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListIdentityPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListIdentityPoliciesResponse(data.ListIdentityPoliciesResult, context);
  const response: ListIdentityPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListIdentityPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListReceiptFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceiptFiltersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListReceiptFiltersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListReceiptFiltersResponse(data.ListReceiptFiltersResult, context);
  const response: ListReceiptFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListReceiptFiltersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceiptFiltersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListReceiptRuleSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceiptRuleSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListReceiptRuleSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListReceiptRuleSetsResponse(data.ListReceiptRuleSetsResult, context);
  const response: ListReceiptRuleSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListReceiptRuleSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceiptRuleSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListTemplatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListTemplatesResponse(data.ListTemplatesResult, context);
  const response: ListTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListVerifiedEmailAddressesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVerifiedEmailAddressesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListVerifiedEmailAddressesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListVerifiedEmailAddressesResponse(data.ListVerifiedEmailAddressesResult, context);
  const response: ListVerifiedEmailAddressesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListVerifiedEmailAddressesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVerifiedEmailAddressesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPutConfigurationSetDeliveryOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutConfigurationSetDeliveryOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPutConfigurationSetDeliveryOptionsResponse(
    data.PutConfigurationSetDeliveryOptionsResult,
    context
  );
  const response: PutConfigurationSetDeliveryOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutConfigurationSetDeliveryOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExistException":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeliveryOptionsException":
    case "com.amazonaws.ses#InvalidDeliveryOptionsException":
      response = {
        ...(await deserializeAws_queryInvalidDeliveryOptionsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPutIdentityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIdentityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutIdentityPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPutIdentityPolicyResponse(data.PutIdentityPolicyResult, context);
  const response: PutIdentityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutIdentityPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIdentityPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPolicyException":
    case "com.amazonaws.ses#InvalidPolicyException":
      response = {
        ...(await deserializeAws_queryInvalidPolicyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryReorderReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReorderReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryReorderReceiptRuleSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryReorderReceiptRuleSetResponse(data.ReorderReceiptRuleSetResult, context);
  const response: ReorderReceiptRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryReorderReceiptRuleSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReorderReceiptRuleSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RuleDoesNotExistException":
    case "com.amazonaws.ses#RuleDoesNotExistException":
      response = {
        ...(await deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RuleSetDoesNotExistException":
    case "com.amazonaws.ses#RuleSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySendBounceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBounceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySendBounceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySendBounceResponse(data.SendBounceResult, context);
  const response: SendBounceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySendBounceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBounceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "MessageRejected":
    case "com.amazonaws.ses#MessageRejected":
      response = {
        ...(await deserializeAws_queryMessageRejectedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySendBulkTemplatedEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBulkTemplatedEmailCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySendBulkTemplatedEmailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySendBulkTemplatedEmailResponse(data.SendBulkTemplatedEmailResult, context);
  const response: SendBulkTemplatedEmailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySendBulkTemplatedEmailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBulkTemplatedEmailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountSendingPausedException":
    case "com.amazonaws.ses#AccountSendingPausedException":
      response = {
        ...(await deserializeAws_queryAccountSendingPausedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConfigurationSetDoesNotExistException":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConfigurationSetSendingPausedException":
    case "com.amazonaws.ses#ConfigurationSetSendingPausedException":
      response = {
        ...(await deserializeAws_queryConfigurationSetSendingPausedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.ses#MailFromDomainNotVerifiedException":
      response = {
        ...(await deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MessageRejected":
    case "com.amazonaws.ses#MessageRejected":
      response = {
        ...(await deserializeAws_queryMessageRejectedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TemplateDoesNotExistException":
    case "com.amazonaws.ses#TemplateDoesNotExistException":
      response = {
        ...(await deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySendCustomVerificationEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCustomVerificationEmailCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySendCustomVerificationEmailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySendCustomVerificationEmailResponse(data.SendCustomVerificationEmailResult, context);
  const response: SendCustomVerificationEmailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySendCustomVerificationEmailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCustomVerificationEmailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExistException":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CustomVerificationEmailTemplateDoesNotExistException":
    case "com.amazonaws.ses#CustomVerificationEmailTemplateDoesNotExistException":
      response = {
        ...(await deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FromEmailAddressNotVerifiedException":
    case "com.amazonaws.ses#FromEmailAddressNotVerifiedException":
      response = {
        ...(await deserializeAws_queryFromEmailAddressNotVerifiedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MessageRejected":
    case "com.amazonaws.ses#MessageRejected":
      response = {
        ...(await deserializeAws_queryMessageRejectedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProductionAccessNotGrantedException":
    case "com.amazonaws.ses#ProductionAccessNotGrantedException":
      response = {
        ...(await deserializeAws_queryProductionAccessNotGrantedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySendEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEmailCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySendEmailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySendEmailResponse(data.SendEmailResult, context);
  const response: SendEmailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySendEmailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEmailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountSendingPausedException":
    case "com.amazonaws.ses#AccountSendingPausedException":
      response = {
        ...(await deserializeAws_queryAccountSendingPausedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConfigurationSetDoesNotExistException":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConfigurationSetSendingPausedException":
    case "com.amazonaws.ses#ConfigurationSetSendingPausedException":
      response = {
        ...(await deserializeAws_queryConfigurationSetSendingPausedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.ses#MailFromDomainNotVerifiedException":
      response = {
        ...(await deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MessageRejected":
    case "com.amazonaws.ses#MessageRejected":
      response = {
        ...(await deserializeAws_queryMessageRejectedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySendRawEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendRawEmailCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySendRawEmailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySendRawEmailResponse(data.SendRawEmailResult, context);
  const response: SendRawEmailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySendRawEmailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendRawEmailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountSendingPausedException":
    case "com.amazonaws.ses#AccountSendingPausedException":
      response = {
        ...(await deserializeAws_queryAccountSendingPausedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConfigurationSetDoesNotExistException":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConfigurationSetSendingPausedException":
    case "com.amazonaws.ses#ConfigurationSetSendingPausedException":
      response = {
        ...(await deserializeAws_queryConfigurationSetSendingPausedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.ses#MailFromDomainNotVerifiedException":
      response = {
        ...(await deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MessageRejected":
    case "com.amazonaws.ses#MessageRejected":
      response = {
        ...(await deserializeAws_queryMessageRejectedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySendTemplatedEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTemplatedEmailCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySendTemplatedEmailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySendTemplatedEmailResponse(data.SendTemplatedEmailResult, context);
  const response: SendTemplatedEmailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySendTemplatedEmailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTemplatedEmailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountSendingPausedException":
    case "com.amazonaws.ses#AccountSendingPausedException":
      response = {
        ...(await deserializeAws_queryAccountSendingPausedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConfigurationSetDoesNotExistException":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConfigurationSetSendingPausedException":
    case "com.amazonaws.ses#ConfigurationSetSendingPausedException":
      response = {
        ...(await deserializeAws_queryConfigurationSetSendingPausedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.ses#MailFromDomainNotVerifiedException":
      response = {
        ...(await deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MessageRejected":
    case "com.amazonaws.ses#MessageRejected":
      response = {
        ...(await deserializeAws_queryMessageRejectedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TemplateDoesNotExistException":
    case "com.amazonaws.ses#TemplateDoesNotExistException":
      response = {
        ...(await deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetActiveReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetActiveReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetActiveReceiptRuleSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetActiveReceiptRuleSetResponse(data.SetActiveReceiptRuleSetResult, context);
  const response: SetActiveReceiptRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetActiveReceiptRuleSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetActiveReceiptRuleSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RuleSetDoesNotExistException":
    case "com.amazonaws.ses#RuleSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetIdentityDkimEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityDkimEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetIdentityDkimEnabledCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetIdentityDkimEnabledResponse(data.SetIdentityDkimEnabledResult, context);
  const response: SetIdentityDkimEnabledCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetIdentityDkimEnabledCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityDkimEnabledCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetIdentityFeedbackForwardingEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityFeedbackForwardingEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetIdentityFeedbackForwardingEnabledCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetIdentityFeedbackForwardingEnabledResponse(
    data.SetIdentityFeedbackForwardingEnabledResult,
    context
  );
  const response: SetIdentityFeedbackForwardingEnabledCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetIdentityFeedbackForwardingEnabledCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityFeedbackForwardingEnabledCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityHeadersInNotificationsEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetIdentityHeadersInNotificationsEnabledResponse(
    data.SetIdentityHeadersInNotificationsEnabledResult,
    context
  );
  const response: SetIdentityHeadersInNotificationsEnabledCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityHeadersInNotificationsEnabledCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetIdentityMailFromDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityMailFromDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetIdentityMailFromDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetIdentityMailFromDomainResponse(data.SetIdentityMailFromDomainResult, context);
  const response: SetIdentityMailFromDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetIdentityMailFromDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityMailFromDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetIdentityNotificationTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityNotificationTopicCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetIdentityNotificationTopicCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetIdentityNotificationTopicResponse(data.SetIdentityNotificationTopicResult, context);
  const response: SetIdentityNotificationTopicCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetIdentityNotificationTopicCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityNotificationTopicCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetReceiptRulePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetReceiptRulePositionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetReceiptRulePositionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetReceiptRulePositionResponse(data.SetReceiptRulePositionResult, context);
  const response: SetReceiptRulePositionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetReceiptRulePositionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetReceiptRulePositionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RuleDoesNotExistException":
    case "com.amazonaws.ses#RuleDoesNotExistException":
      response = {
        ...(await deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RuleSetDoesNotExistException":
    case "com.amazonaws.ses#RuleSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryTestRenderTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRenderTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryTestRenderTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryTestRenderTemplateResponse(data.TestRenderTemplateResult, context);
  const response: TestRenderTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryTestRenderTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRenderTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRenderingParameterException":
    case "com.amazonaws.ses#InvalidRenderingParameterException":
      response = {
        ...(await deserializeAws_queryInvalidRenderingParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingRenderingAttributeException":
    case "com.amazonaws.ses#MissingRenderingAttributeException":
      response = {
        ...(await deserializeAws_queryMissingRenderingAttributeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TemplateDoesNotExistException":
    case "com.amazonaws.ses#TemplateDoesNotExistException":
      response = {
        ...(await deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateAccountSendingEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSendingEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateAccountSendingEnabledCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAccountSendingEnabledCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateAccountSendingEnabledCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSendingEnabledCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateConfigurationSetEventDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateConfigurationSetEventDestinationResponse(
    data.UpdateConfigurationSetEventDestinationResult,
    context
  );
  const response: UpdateConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExistException":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EventDestinationDoesNotExistException":
    case "com.amazonaws.ses#EventDestinationDoesNotExistException":
      response = {
        ...(await deserializeAws_queryEventDestinationDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCloudWatchDestinationException":
    case "com.amazonaws.ses#InvalidCloudWatchDestinationException":
      response = {
        ...(await deserializeAws_queryInvalidCloudWatchDestinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFirehoseDestinationException":
    case "com.amazonaws.ses#InvalidFirehoseDestinationException":
      response = {
        ...(await deserializeAws_queryInvalidFirehoseDestinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSNSDestinationException":
    case "com.amazonaws.ses#InvalidSNSDestinationException":
      response = {
        ...(await deserializeAws_queryInvalidSNSDestinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetReputationMetricsEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateConfigurationSetReputationMetricsEnabledCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetReputationMetricsEnabledCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExistException":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateConfigurationSetSendingEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetSendingEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateConfigurationSetSendingEnabledCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateConfigurationSetSendingEnabledCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateConfigurationSetSendingEnabledCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetSendingEnabledCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExistException":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetTrackingOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateConfigurationSetTrackingOptionsResponse(
    data.UpdateConfigurationSetTrackingOptionsResult,
    context
  );
  const response: UpdateConfigurationSetTrackingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetTrackingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationSetDoesNotExistException":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTrackingOptionsException":
    case "com.amazonaws.ses#InvalidTrackingOptionsException":
      response = {
        ...(await deserializeAws_queryInvalidTrackingOptionsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TrackingOptionsDoesNotExistException":
    case "com.amazonaws.ses#TrackingOptionsDoesNotExistException":
      response = {
        ...(await deserializeAws_queryTrackingOptionsDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateCustomVerificationEmailTemplateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateCustomVerificationEmailTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateCustomVerificationEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomVerificationEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomVerificationEmailInvalidContentException":
    case "com.amazonaws.ses#CustomVerificationEmailInvalidContentException":
      response = {
        ...(await deserializeAws_queryCustomVerificationEmailInvalidContentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CustomVerificationEmailTemplateDoesNotExistException":
    case "com.amazonaws.ses#CustomVerificationEmailTemplateDoesNotExistException":
      response = {
        ...(await deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FromEmailAddressNotVerifiedException":
    case "com.amazonaws.ses#FromEmailAddressNotVerifiedException":
      response = {
        ...(await deserializeAws_queryFromEmailAddressNotVerifiedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateReceiptRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReceiptRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateReceiptRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateReceiptRuleResponse(data.UpdateReceiptRuleResult, context);
  const response: UpdateReceiptRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateReceiptRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReceiptRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLambdaFunctionException":
    case "com.amazonaws.ses#InvalidLambdaFunctionException":
      response = {
        ...(await deserializeAws_queryInvalidLambdaFunctionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ConfigurationException":
    case "com.amazonaws.ses#InvalidS3ConfigurationException":
      response = {
        ...(await deserializeAws_queryInvalidS3ConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSnsTopicException":
    case "com.amazonaws.ses#InvalidSnsTopicException":
      response = {
        ...(await deserializeAws_queryInvalidSnsTopicExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.ses#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RuleDoesNotExistException":
    case "com.amazonaws.ses#RuleDoesNotExistException":
      response = {
        ...(await deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RuleSetDoesNotExistException":
    case "com.amazonaws.ses#RuleSetDoesNotExistException":
      response = {
        ...(await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateTemplateResponse(data.UpdateTemplateResult, context);
  const response: UpdateTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTemplateException":
    case "com.amazonaws.ses#InvalidTemplateException":
      response = {
        ...(await deserializeAws_queryInvalidTemplateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TemplateDoesNotExistException":
    case "com.amazonaws.ses#TemplateDoesNotExistException":
      response = {
        ...(await deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryVerifyDomainDkimCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyDomainDkimCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryVerifyDomainDkimCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryVerifyDomainDkimResponse(data.VerifyDomainDkimResult, context);
  const response: VerifyDomainDkimCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryVerifyDomainDkimCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyDomainDkimCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryVerifyDomainIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyDomainIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryVerifyDomainIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryVerifyDomainIdentityResponse(data.VerifyDomainIdentityResult, context);
  const response: VerifyDomainIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryVerifyDomainIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyDomainIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryVerifyEmailAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyEmailAddressCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryVerifyEmailAddressCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: VerifyEmailAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryVerifyEmailAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyEmailAddressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryVerifyEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyEmailIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryVerifyEmailIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryVerifyEmailIdentityResponse(data.VerifyEmailIdentityResult, context);
  const response: VerifyEmailIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryVerifyEmailIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyEmailIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_queryAccountSendingPausedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountSendingPausedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAccountSendingPausedException(body.Error, context);
  const contents: AccountSendingPausedException = {
    name: "AccountSendingPausedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAlreadyExistsException(body.Error, context);
  const contents: AlreadyExistsException = {
    name: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryCannotDeleteExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CannotDeleteException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCannotDeleteException(body.Error, context);
  const contents: CannotDeleteException = {
    name: "CannotDeleteException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryConfigurationSetAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConfigurationSetAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryConfigurationSetAlreadyExistsException(body.Error, context);
  const contents: ConfigurationSetAlreadyExistsException = {
    name: "ConfigurationSetAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConfigurationSetDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryConfigurationSetDoesNotExistException(body.Error, context);
  const contents: ConfigurationSetDoesNotExistException = {
    name: "ConfigurationSetDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryConfigurationSetSendingPausedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConfigurationSetSendingPausedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryConfigurationSetSendingPausedException(body.Error, context);
  const contents: ConfigurationSetSendingPausedException = {
    name: "ConfigurationSetSendingPausedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryCustomVerificationEmailInvalidContentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomVerificationEmailInvalidContentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCustomVerificationEmailInvalidContentException(body.Error, context);
  const contents: CustomVerificationEmailInvalidContentException = {
    name: "CustomVerificationEmailInvalidContentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryCustomVerificationEmailTemplateAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomVerificationEmailTemplateAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCustomVerificationEmailTemplateAlreadyExistsException(
    body.Error,
    context
  );
  const contents: CustomVerificationEmailTemplateAlreadyExistsException = {
    name: "CustomVerificationEmailTemplateAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomVerificationEmailTemplateDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistException(
    body.Error,
    context
  );
  const contents: CustomVerificationEmailTemplateDoesNotExistException = {
    name: "CustomVerificationEmailTemplateDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryEventDestinationAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventDestinationAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryEventDestinationAlreadyExistsException(body.Error, context);
  const contents: EventDestinationAlreadyExistsException = {
    name: "EventDestinationAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryEventDestinationDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventDestinationDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryEventDestinationDoesNotExistException(body.Error, context);
  const contents: EventDestinationDoesNotExistException = {
    name: "EventDestinationDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryFromEmailAddressNotVerifiedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FromEmailAddressNotVerifiedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryFromEmailAddressNotVerifiedException(body.Error, context);
  const contents: FromEmailAddressNotVerifiedException = {
    name: "FromEmailAddressNotVerifiedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidCloudWatchDestinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCloudWatchDestinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidCloudWatchDestinationException(body.Error, context);
  const contents: InvalidCloudWatchDestinationException = {
    name: "InvalidCloudWatchDestinationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidConfigurationSetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConfigurationSetException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidConfigurationSetException(body.Error, context);
  const contents: InvalidConfigurationSetException = {
    name: "InvalidConfigurationSetException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidDeliveryOptionsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeliveryOptionsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDeliveryOptionsException(body.Error, context);
  const contents: InvalidDeliveryOptionsException = {
    name: "InvalidDeliveryOptionsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidFirehoseDestinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFirehoseDestinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidFirehoseDestinationException(body.Error, context);
  const contents: InvalidFirehoseDestinationException = {
    name: "InvalidFirehoseDestinationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidLambdaFunctionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLambdaFunctionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidLambdaFunctionException(body.Error, context);
  const contents: InvalidLambdaFunctionException = {
    name: "InvalidLambdaFunctionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidPolicyException(body.Error, context);
  const contents: InvalidPolicyException = {
    name: "InvalidPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidRenderingParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRenderingParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidRenderingParameterException(body.Error, context);
  const contents: InvalidRenderingParameterException = {
    name: "InvalidRenderingParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidS3ConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3ConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidS3ConfigurationException(body.Error, context);
  const contents: InvalidS3ConfigurationException = {
    name: "InvalidS3ConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidSNSDestinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSNSDestinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSNSDestinationException(body.Error, context);
  const contents: InvalidSNSDestinationException = {
    name: "InvalidSNSDestinationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidSnsTopicExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSnsTopicException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSnsTopicException(body.Error, context);
  const contents: InvalidSnsTopicException = {
    name: "InvalidSnsTopicException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidTemplateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTemplateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidTemplateException(body.Error, context);
  const contents: InvalidTemplateException = {
    name: "InvalidTemplateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidTrackingOptionsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTrackingOptionsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidTrackingOptionsException(body.Error, context);
  const contents: InvalidTrackingOptionsException = {
    name: "InvalidTrackingOptionsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryLimitExceededException(body.Error, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MailFromDomainNotVerifiedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryMailFromDomainNotVerifiedException(body.Error, context);
  const contents: MailFromDomainNotVerifiedException = {
    name: "MailFromDomainNotVerifiedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryMessageRejectedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MessageRejected> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryMessageRejected(body.Error, context);
  const contents: MessageRejected = {
    name: "MessageRejected",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryMissingRenderingAttributeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingRenderingAttributeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryMissingRenderingAttributeException(body.Error, context);
  const contents: MissingRenderingAttributeException = {
    name: "MissingRenderingAttributeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryProductionAccessNotGrantedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProductionAccessNotGrantedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryProductionAccessNotGrantedException(body.Error, context);
  const contents: ProductionAccessNotGrantedException = {
    name: "ProductionAccessNotGrantedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryRuleDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RuleDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryRuleDoesNotExistException(body.Error, context);
  const contents: RuleDoesNotExistException = {
    name: "RuleDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryRuleSetDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RuleSetDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryRuleSetDoesNotExistException(body.Error, context);
  const contents: RuleSetDoesNotExistException = {
    name: "RuleSetDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryTemplateDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TemplateDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTemplateDoesNotExistException(body.Error, context);
  const contents: TemplateDoesNotExistException = {
    name: "TemplateDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryTrackingOptionsAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrackingOptionsAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTrackingOptionsAlreadyExistsException(body.Error, context);
  const contents: TrackingOptionsAlreadyExistsException = {
    name: "TrackingOptionsAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryTrackingOptionsDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrackingOptionsDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTrackingOptionsDoesNotExistException(body.Error, context);
  const contents: TrackingOptionsDoesNotExistException = {
    name: "TrackingOptionsDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_queryAddHeaderAction = (input: AddHeaderAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.HeaderName !== undefined && input.HeaderName !== null) {
    entries["HeaderName"] = input.HeaderName;
  }
  if (input.HeaderValue !== undefined && input.HeaderValue !== null) {
    entries["HeaderValue"] = input.HeaderValue;
  }
  return entries;
};

const serializeAws_queryAddressList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryBody = (input: Body, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Text !== undefined && input.Text !== null) {
    const memberEntries = serializeAws_queryContent(input.Text, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Text.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Html !== undefined && input.Html !== null) {
    const memberEntries = serializeAws_queryContent(input.Html, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Html.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryBounceAction = (input: BounceAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn !== undefined && input.TopicArn !== null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.SmtpReplyCode !== undefined && input.SmtpReplyCode !== null) {
    entries["SmtpReplyCode"] = input.SmtpReplyCode;
  }
  if (input.StatusCode !== undefined && input.StatusCode !== null) {
    entries["StatusCode"] = input.StatusCode;
  }
  if (input.Message !== undefined && input.Message !== null) {
    entries["Message"] = input.Message;
  }
  if (input.Sender !== undefined && input.Sender !== null) {
    entries["Sender"] = input.Sender;
  }
  return entries;
};

const serializeAws_queryBouncedRecipientInfo = (input: BouncedRecipientInfo, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Recipient !== undefined && input.Recipient !== null) {
    entries["Recipient"] = input.Recipient;
  }
  if (input.RecipientArn !== undefined && input.RecipientArn !== null) {
    entries["RecipientArn"] = input.RecipientArn;
  }
  if (input.BounceType !== undefined && input.BounceType !== null) {
    entries["BounceType"] = input.BounceType;
  }
  if (input.RecipientDsnFields !== undefined && input.RecipientDsnFields !== null) {
    const memberEntries = serializeAws_queryRecipientDsnFields(input.RecipientDsnFields, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RecipientDsnFields.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryBouncedRecipientInfoList = (input: BouncedRecipientInfo[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryBouncedRecipientInfo(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryBulkEmailDestination = (input: BulkEmailDestination, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Destination !== undefined && input.Destination !== null) {
    const memberEntries = serializeAws_queryDestination(input.Destination, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Destination.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ReplacementTags !== undefined && input.ReplacementTags !== null) {
    const memberEntries = serializeAws_queryMessageTagList(input.ReplacementTags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplacementTags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ReplacementTemplateData !== undefined && input.ReplacementTemplateData !== null) {
    entries["ReplacementTemplateData"] = input.ReplacementTemplateData;
  }
  return entries;
};

const serializeAws_queryBulkEmailDestinationList = (input: BulkEmailDestination[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryBulkEmailDestination(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryCloneReceiptRuleSetRequest = (
  input: CloneReceiptRuleSetRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  if (input.OriginalRuleSetName !== undefined && input.OriginalRuleSetName !== null) {
    entries["OriginalRuleSetName"] = input.OriginalRuleSetName;
  }
  return entries;
};

const serializeAws_queryCloudWatchDestination = (input: CloudWatchDestination, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DimensionConfigurations !== undefined && input.DimensionConfigurations !== null) {
    const memberEntries = serializeAws_queryCloudWatchDimensionConfigurations(input.DimensionConfigurations, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DimensionConfigurations.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCloudWatchDimensionConfiguration = (
  input: CloudWatchDimensionConfiguration,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DimensionName !== undefined && input.DimensionName !== null) {
    entries["DimensionName"] = input.DimensionName;
  }
  if (input.DimensionValueSource !== undefined && input.DimensionValueSource !== null) {
    entries["DimensionValueSource"] = input.DimensionValueSource;
  }
  if (input.DefaultDimensionValue !== undefined && input.DefaultDimensionValue !== null) {
    entries["DefaultDimensionValue"] = input.DefaultDimensionValue;
  }
  return entries;
};

const serializeAws_queryCloudWatchDimensionConfigurations = (
  input: CloudWatchDimensionConfiguration[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryCloudWatchDimensionConfiguration(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryConfigurationSet = (input: ConfigurationSet, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  return entries;
};

const serializeAws_queryConfigurationSetAttributeList = (
  input: (ConfigurationSetAttribute | string)[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryContent = (input: Content, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Data !== undefined && input.Data !== null) {
    entries["Data"] = input.Data;
  }
  if (input.Charset !== undefined && input.Charset !== null) {
    entries["Charset"] = input.Charset;
  }
  return entries;
};

const serializeAws_queryCreateConfigurationSetEventDestinationRequest = (
  input: CreateConfigurationSetEventDestinationRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.EventDestination !== undefined && input.EventDestination !== null) {
    const memberEntries = serializeAws_queryEventDestination(input.EventDestination, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EventDestination.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateConfigurationSetRequest = (
  input: CreateConfigurationSetRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ConfigurationSet !== undefined && input.ConfigurationSet !== null) {
    const memberEntries = serializeAws_queryConfigurationSet(input.ConfigurationSet, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ConfigurationSet.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateConfigurationSetTrackingOptionsRequest = (
  input: CreateConfigurationSetTrackingOptionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.TrackingOptions !== undefined && input.TrackingOptions !== null) {
    const memberEntries = serializeAws_queryTrackingOptions(input.TrackingOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TrackingOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateCustomVerificationEmailTemplateRequest = (
  input: CreateCustomVerificationEmailTemplateRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TemplateName !== undefined && input.TemplateName !== null) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.FromEmailAddress !== undefined && input.FromEmailAddress !== null) {
    entries["FromEmailAddress"] = input.FromEmailAddress;
  }
  if (input.TemplateSubject !== undefined && input.TemplateSubject !== null) {
    entries["TemplateSubject"] = input.TemplateSubject;
  }
  if (input.TemplateContent !== undefined && input.TemplateContent !== null) {
    entries["TemplateContent"] = input.TemplateContent;
  }
  if (input.SuccessRedirectionURL !== undefined && input.SuccessRedirectionURL !== null) {
    entries["SuccessRedirectionURL"] = input.SuccessRedirectionURL;
  }
  if (input.FailureRedirectionURL !== undefined && input.FailureRedirectionURL !== null) {
    entries["FailureRedirectionURL"] = input.FailureRedirectionURL;
  }
  return entries;
};

const serializeAws_queryCreateReceiptFilterRequest = (
  input: CreateReceiptFilterRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Filter !== undefined && input.Filter !== null) {
    const memberEntries = serializeAws_queryReceiptFilter(input.Filter, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filter.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateReceiptRuleRequest = (input: CreateReceiptRuleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  if (input.After !== undefined && input.After !== null) {
    entries["After"] = input.After;
  }
  if (input.Rule !== undefined && input.Rule !== null) {
    const memberEntries = serializeAws_queryReceiptRule(input.Rule, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Rule.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateReceiptRuleSetRequest = (
  input: CreateReceiptRuleSetRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  return entries;
};

const serializeAws_queryCreateTemplateRequest = (input: CreateTemplateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Template !== undefined && input.Template !== null) {
    const memberEntries = serializeAws_queryTemplate(input.Template, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Template.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDeleteConfigurationSetEventDestinationRequest = (
  input: DeleteConfigurationSetEventDestinationRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.EventDestinationName !== undefined && input.EventDestinationName !== null) {
    entries["EventDestinationName"] = input.EventDestinationName;
  }
  return entries;
};

const serializeAws_queryDeleteConfigurationSetRequest = (
  input: DeleteConfigurationSetRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  return entries;
};

const serializeAws_queryDeleteConfigurationSetTrackingOptionsRequest = (
  input: DeleteConfigurationSetTrackingOptionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  return entries;
};

const serializeAws_queryDeleteCustomVerificationEmailTemplateRequest = (
  input: DeleteCustomVerificationEmailTemplateRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TemplateName !== undefined && input.TemplateName !== null) {
    entries["TemplateName"] = input.TemplateName;
  }
  return entries;
};

const serializeAws_queryDeleteIdentityPolicyRequest = (
  input: DeleteIdentityPolicyRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Identity !== undefined && input.Identity !== null) {
    entries["Identity"] = input.Identity;
  }
  if (input.PolicyName !== undefined && input.PolicyName !== null) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

const serializeAws_queryDeleteIdentityRequest = (input: DeleteIdentityRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Identity !== undefined && input.Identity !== null) {
    entries["Identity"] = input.Identity;
  }
  return entries;
};

const serializeAws_queryDeleteReceiptFilterRequest = (
  input: DeleteReceiptFilterRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.FilterName !== undefined && input.FilterName !== null) {
    entries["FilterName"] = input.FilterName;
  }
  return entries;
};

const serializeAws_queryDeleteReceiptRuleRequest = (input: DeleteReceiptRuleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  if (input.RuleName !== undefined && input.RuleName !== null) {
    entries["RuleName"] = input.RuleName;
  }
  return entries;
};

const serializeAws_queryDeleteReceiptRuleSetRequest = (
  input: DeleteReceiptRuleSetRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  return entries;
};

const serializeAws_queryDeleteTemplateRequest = (input: DeleteTemplateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TemplateName !== undefined && input.TemplateName !== null) {
    entries["TemplateName"] = input.TemplateName;
  }
  return entries;
};

const serializeAws_queryDeleteVerifiedEmailAddressRequest = (
  input: DeleteVerifiedEmailAddressRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EmailAddress !== undefined && input.EmailAddress !== null) {
    entries["EmailAddress"] = input.EmailAddress;
  }
  return entries;
};

const serializeAws_queryDeliveryOptions = (input: DeliveryOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TlsPolicy !== undefined && input.TlsPolicy !== null) {
    entries["TlsPolicy"] = input.TlsPolicy;
  }
  return entries;
};

const serializeAws_queryDescribeActiveReceiptRuleSetRequest = (
  input: DescribeActiveReceiptRuleSetRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  return entries;
};

const serializeAws_queryDescribeConfigurationSetRequest = (
  input: DescribeConfigurationSetRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.ConfigurationSetAttributeNames !== undefined && input.ConfigurationSetAttributeNames !== null) {
    const memberEntries = serializeAws_queryConfigurationSetAttributeList(
      input.ConfigurationSetAttributeNames,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ConfigurationSetAttributeNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDescribeReceiptRuleRequest = (
  input: DescribeReceiptRuleRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  if (input.RuleName !== undefined && input.RuleName !== null) {
    entries["RuleName"] = input.RuleName;
  }
  return entries;
};

const serializeAws_queryDescribeReceiptRuleSetRequest = (
  input: DescribeReceiptRuleSetRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  return entries;
};

const serializeAws_queryDestination = (input: Destination, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ToAddresses !== undefined && input.ToAddresses !== null) {
    const memberEntries = serializeAws_queryAddressList(input.ToAddresses, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ToAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CcAddresses !== undefined && input.CcAddresses !== null) {
    const memberEntries = serializeAws_queryAddressList(input.CcAddresses, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CcAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input.BccAddresses !== undefined && input.BccAddresses !== null) {
    const memberEntries = serializeAws_queryAddressList(input.BccAddresses, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BccAddresses.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryEventDestination = (input: EventDestination, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  if (input.Enabled !== undefined && input.Enabled !== null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.MatchingEventTypes !== undefined && input.MatchingEventTypes !== null) {
    const memberEntries = serializeAws_queryEventTypes(input.MatchingEventTypes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MatchingEventTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.KinesisFirehoseDestination !== undefined && input.KinesisFirehoseDestination !== null) {
    const memberEntries = serializeAws_queryKinesisFirehoseDestination(input.KinesisFirehoseDestination, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `KinesisFirehoseDestination.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CloudWatchDestination !== undefined && input.CloudWatchDestination !== null) {
    const memberEntries = serializeAws_queryCloudWatchDestination(input.CloudWatchDestination, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CloudWatchDestination.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SNSDestination !== undefined && input.SNSDestination !== null) {
    const memberEntries = serializeAws_querySNSDestination(input.SNSDestination, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SNSDestination.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryEventTypes = (input: (EventType | string)[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryExtensionField = (input: ExtensionField, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  if (input.Value !== undefined && input.Value !== null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryExtensionFieldList = (input: ExtensionField[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryExtensionField(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryGetCustomVerificationEmailTemplateRequest = (
  input: GetCustomVerificationEmailTemplateRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TemplateName !== undefined && input.TemplateName !== null) {
    entries["TemplateName"] = input.TemplateName;
  }
  return entries;
};

const serializeAws_queryGetIdentityDkimAttributesRequest = (
  input: GetIdentityDkimAttributesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Identities !== undefined && input.Identities !== null) {
    const memberEntries = serializeAws_queryIdentityList(input.Identities, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Identities.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryGetIdentityMailFromDomainAttributesRequest = (
  input: GetIdentityMailFromDomainAttributesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Identities !== undefined && input.Identities !== null) {
    const memberEntries = serializeAws_queryIdentityList(input.Identities, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Identities.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryGetIdentityNotificationAttributesRequest = (
  input: GetIdentityNotificationAttributesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Identities !== undefined && input.Identities !== null) {
    const memberEntries = serializeAws_queryIdentityList(input.Identities, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Identities.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryGetIdentityPoliciesRequest = (
  input: GetIdentityPoliciesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Identity !== undefined && input.Identity !== null) {
    entries["Identity"] = input.Identity;
  }
  if (input.PolicyNames !== undefined && input.PolicyNames !== null) {
    const memberEntries = serializeAws_queryPolicyNameList(input.PolicyNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryGetIdentityVerificationAttributesRequest = (
  input: GetIdentityVerificationAttributesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Identities !== undefined && input.Identities !== null) {
    const memberEntries = serializeAws_queryIdentityList(input.Identities, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Identities.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryGetTemplateRequest = (input: GetTemplateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TemplateName !== undefined && input.TemplateName !== null) {
    entries["TemplateName"] = input.TemplateName;
  }
  return entries;
};

const serializeAws_queryIdentityList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryKinesisFirehoseDestination = (
  input: KinesisFirehoseDestination,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.IAMRoleARN !== undefined && input.IAMRoleARN !== null) {
    entries["IAMRoleARN"] = input.IAMRoleARN;
  }
  if (input.DeliveryStreamARN !== undefined && input.DeliveryStreamARN !== null) {
    entries["DeliveryStreamARN"] = input.DeliveryStreamARN;
  }
  return entries;
};

const serializeAws_queryLambdaAction = (input: LambdaAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn !== undefined && input.TopicArn !== null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.FunctionArn !== undefined && input.FunctionArn !== null) {
    entries["FunctionArn"] = input.FunctionArn;
  }
  if (input.InvocationType !== undefined && input.InvocationType !== null) {
    entries["InvocationType"] = input.InvocationType;
  }
  return entries;
};

const serializeAws_queryListConfigurationSetsRequest = (
  input: ListConfigurationSetsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxItems !== undefined && input.MaxItems !== null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

const serializeAws_queryListCustomVerificationEmailTemplatesRequest = (
  input: ListCustomVerificationEmailTemplatesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  return entries;
};

const serializeAws_queryListIdentitiesRequest = (input: ListIdentitiesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.IdentityType !== undefined && input.IdentityType !== null) {
    entries["IdentityType"] = input.IdentityType;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxItems !== undefined && input.MaxItems !== null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

const serializeAws_queryListIdentityPoliciesRequest = (
  input: ListIdentityPoliciesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Identity !== undefined && input.Identity !== null) {
    entries["Identity"] = input.Identity;
  }
  return entries;
};

const serializeAws_queryListReceiptFiltersRequest = (
  input: ListReceiptFiltersRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  return entries;
};

const serializeAws_queryListReceiptRuleSetsRequest = (
  input: ListReceiptRuleSetsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryListTemplatesRequest = (input: ListTemplatesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxItems !== undefined && input.MaxItems !== null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

const serializeAws_queryMessage = (input: Message, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Subject !== undefined && input.Subject !== null) {
    const memberEntries = serializeAws_queryContent(input.Subject, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Subject.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Body !== undefined && input.Body !== null) {
    const memberEntries = serializeAws_queryBody(input.Body, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Body.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryMessageDsn = (input: MessageDsn, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ReportingMta !== undefined && input.ReportingMta !== null) {
    entries["ReportingMta"] = input.ReportingMta;
  }
  if (input.ArrivalDate !== undefined && input.ArrivalDate !== null) {
    entries["ArrivalDate"] = input.ArrivalDate.toISOString().split(".")[0] + "Z";
  }
  if (input.ExtensionFields !== undefined && input.ExtensionFields !== null) {
    const memberEntries = serializeAws_queryExtensionFieldList(input.ExtensionFields, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExtensionFields.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryMessageTag = (input: MessageTag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  if (input.Value !== undefined && input.Value !== null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryMessageTagList = (input: MessageTag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryMessageTag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryPolicyNameList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryPutConfigurationSetDeliveryOptionsRequest = (
  input: PutConfigurationSetDeliveryOptionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.DeliveryOptions !== undefined && input.DeliveryOptions !== null) {
    const memberEntries = serializeAws_queryDeliveryOptions(input.DeliveryOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeliveryOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryPutIdentityPolicyRequest = (input: PutIdentityPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Identity !== undefined && input.Identity !== null) {
    entries["Identity"] = input.Identity;
  }
  if (input.PolicyName !== undefined && input.PolicyName !== null) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.Policy !== undefined && input.Policy !== null) {
    entries["Policy"] = input.Policy;
  }
  return entries;
};

const serializeAws_queryRawMessage = (input: RawMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Data !== undefined && input.Data !== null) {
    entries["Data"] = context.base64Encoder(input.Data);
  }
  return entries;
};

const serializeAws_queryReceiptAction = (input: ReceiptAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.S3Action !== undefined && input.S3Action !== null) {
    const memberEntries = serializeAws_queryS3Action(input.S3Action, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `S3Action.${key}`;
      entries[loc] = value;
    });
  }
  if (input.BounceAction !== undefined && input.BounceAction !== null) {
    const memberEntries = serializeAws_queryBounceAction(input.BounceAction, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BounceAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input.WorkmailAction !== undefined && input.WorkmailAction !== null) {
    const memberEntries = serializeAws_queryWorkmailAction(input.WorkmailAction, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `WorkmailAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LambdaAction !== undefined && input.LambdaAction !== null) {
    const memberEntries = serializeAws_queryLambdaAction(input.LambdaAction, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LambdaAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input.StopAction !== undefined && input.StopAction !== null) {
    const memberEntries = serializeAws_queryStopAction(input.StopAction, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StopAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AddHeaderAction !== undefined && input.AddHeaderAction !== null) {
    const memberEntries = serializeAws_queryAddHeaderAction(input.AddHeaderAction, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AddHeaderAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SNSAction !== undefined && input.SNSAction !== null) {
    const memberEntries = serializeAws_querySNSAction(input.SNSAction, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SNSAction.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryReceiptActionsList = (input: ReceiptAction[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryReceiptAction(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryReceiptFilter = (input: ReceiptFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  if (input.IpFilter !== undefined && input.IpFilter !== null) {
    const memberEntries = serializeAws_queryReceiptIpFilter(input.IpFilter, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IpFilter.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryReceiptIpFilter = (input: ReceiptIpFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Policy !== undefined && input.Policy !== null) {
    entries["Policy"] = input.Policy;
  }
  if (input.Cidr !== undefined && input.Cidr !== null) {
    entries["Cidr"] = input.Cidr;
  }
  return entries;
};

const serializeAws_queryReceiptRule = (input: ReceiptRule, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  if (input.Enabled !== undefined && input.Enabled !== null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.TlsPolicy !== undefined && input.TlsPolicy !== null) {
    entries["TlsPolicy"] = input.TlsPolicy;
  }
  if (input.Recipients !== undefined && input.Recipients !== null) {
    const memberEntries = serializeAws_queryRecipientsList(input.Recipients, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Recipients.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Actions !== undefined && input.Actions !== null) {
    const memberEntries = serializeAws_queryReceiptActionsList(input.Actions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Actions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ScanEnabled !== undefined && input.ScanEnabled !== null) {
    entries["ScanEnabled"] = input.ScanEnabled;
  }
  return entries;
};

const serializeAws_queryReceiptRuleNamesList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryRecipientDsnFields = (input: RecipientDsnFields, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.FinalRecipient !== undefined && input.FinalRecipient !== null) {
    entries["FinalRecipient"] = input.FinalRecipient;
  }
  if (input.Action !== undefined && input.Action !== null) {
    entries["Action"] = input.Action;
  }
  if (input.RemoteMta !== undefined && input.RemoteMta !== null) {
    entries["RemoteMta"] = input.RemoteMta;
  }
  if (input.Status !== undefined && input.Status !== null) {
    entries["Status"] = input.Status;
  }
  if (input.DiagnosticCode !== undefined && input.DiagnosticCode !== null) {
    entries["DiagnosticCode"] = input.DiagnosticCode;
  }
  if (input.LastAttemptDate !== undefined && input.LastAttemptDate !== null) {
    entries["LastAttemptDate"] = input.LastAttemptDate.toISOString().split(".")[0] + "Z";
  }
  if (input.ExtensionFields !== undefined && input.ExtensionFields !== null) {
    const memberEntries = serializeAws_queryExtensionFieldList(input.ExtensionFields, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExtensionFields.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryRecipientsList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryReorderReceiptRuleSetRequest = (
  input: ReorderReceiptRuleSetRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  if (input.RuleNames !== undefined && input.RuleNames !== null) {
    const memberEntries = serializeAws_queryReceiptRuleNamesList(input.RuleNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RuleNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryS3Action = (input: S3Action, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn !== undefined && input.TopicArn !== null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.BucketName !== undefined && input.BucketName !== null) {
    entries["BucketName"] = input.BucketName;
  }
  if (input.ObjectKeyPrefix !== undefined && input.ObjectKeyPrefix !== null) {
    entries["ObjectKeyPrefix"] = input.ObjectKeyPrefix;
  }
  if (input.KmsKeyArn !== undefined && input.KmsKeyArn !== null) {
    entries["KmsKeyArn"] = input.KmsKeyArn;
  }
  return entries;
};

const serializeAws_querySendBounceRequest = (input: SendBounceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.OriginalMessageId !== undefined && input.OriginalMessageId !== null) {
    entries["OriginalMessageId"] = input.OriginalMessageId;
  }
  if (input.BounceSender !== undefined && input.BounceSender !== null) {
    entries["BounceSender"] = input.BounceSender;
  }
  if (input.Explanation !== undefined && input.Explanation !== null) {
    entries["Explanation"] = input.Explanation;
  }
  if (input.MessageDsn !== undefined && input.MessageDsn !== null) {
    const memberEntries = serializeAws_queryMessageDsn(input.MessageDsn, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageDsn.${key}`;
      entries[loc] = value;
    });
  }
  if (input.BouncedRecipientInfoList !== undefined && input.BouncedRecipientInfoList !== null) {
    const memberEntries = serializeAws_queryBouncedRecipientInfoList(input.BouncedRecipientInfoList, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BouncedRecipientInfoList.${key}`;
      entries[loc] = value;
    });
  }
  if (input.BounceSenderArn !== undefined && input.BounceSenderArn !== null) {
    entries["BounceSenderArn"] = input.BounceSenderArn;
  }
  return entries;
};

const serializeAws_querySendBulkTemplatedEmailRequest = (
  input: SendBulkTemplatedEmailRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Source !== undefined && input.Source !== null) {
    entries["Source"] = input.Source;
  }
  if (input.SourceArn !== undefined && input.SourceArn !== null) {
    entries["SourceArn"] = input.SourceArn;
  }
  if (input.ReplyToAddresses !== undefined && input.ReplyToAddresses !== null) {
    const memberEntries = serializeAws_queryAddressList(input.ReplyToAddresses, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplyToAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ReturnPath !== undefined && input.ReturnPath !== null) {
    entries["ReturnPath"] = input.ReturnPath;
  }
  if (input.ReturnPathArn !== undefined && input.ReturnPathArn !== null) {
    entries["ReturnPathArn"] = input.ReturnPathArn;
  }
  if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.DefaultTags !== undefined && input.DefaultTags !== null) {
    const memberEntries = serializeAws_queryMessageTagList(input.DefaultTags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DefaultTags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Template !== undefined && input.Template !== null) {
    entries["Template"] = input.Template;
  }
  if (input.TemplateArn !== undefined && input.TemplateArn !== null) {
    entries["TemplateArn"] = input.TemplateArn;
  }
  if (input.DefaultTemplateData !== undefined && input.DefaultTemplateData !== null) {
    entries["DefaultTemplateData"] = input.DefaultTemplateData;
  }
  if (input.Destinations !== undefined && input.Destinations !== null) {
    const memberEntries = serializeAws_queryBulkEmailDestinationList(input.Destinations, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Destinations.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_querySendCustomVerificationEmailRequest = (
  input: SendCustomVerificationEmailRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EmailAddress !== undefined && input.EmailAddress !== null) {
    entries["EmailAddress"] = input.EmailAddress;
  }
  if (input.TemplateName !== undefined && input.TemplateName !== null) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  return entries;
};

const serializeAws_querySendEmailRequest = (input: SendEmailRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Source !== undefined && input.Source !== null) {
    entries["Source"] = input.Source;
  }
  if (input.Destination !== undefined && input.Destination !== null) {
    const memberEntries = serializeAws_queryDestination(input.Destination, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Destination.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Message !== undefined && input.Message !== null) {
    const memberEntries = serializeAws_queryMessage(input.Message, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Message.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ReplyToAddresses !== undefined && input.ReplyToAddresses !== null) {
    const memberEntries = serializeAws_queryAddressList(input.ReplyToAddresses, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplyToAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ReturnPath !== undefined && input.ReturnPath !== null) {
    entries["ReturnPath"] = input.ReturnPath;
  }
  if (input.SourceArn !== undefined && input.SourceArn !== null) {
    entries["SourceArn"] = input.SourceArn;
  }
  if (input.ReturnPathArn !== undefined && input.ReturnPathArn !== null) {
    entries["ReturnPathArn"] = input.ReturnPathArn;
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryMessageTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  return entries;
};

const serializeAws_querySendRawEmailRequest = (input: SendRawEmailRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Source !== undefined && input.Source !== null) {
    entries["Source"] = input.Source;
  }
  if (input.Destinations !== undefined && input.Destinations !== null) {
    const memberEntries = serializeAws_queryAddressList(input.Destinations, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Destinations.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RawMessage !== undefined && input.RawMessage !== null) {
    const memberEntries = serializeAws_queryRawMessage(input.RawMessage, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RawMessage.${key}`;
      entries[loc] = value;
    });
  }
  if (input.FromArn !== undefined && input.FromArn !== null) {
    entries["FromArn"] = input.FromArn;
  }
  if (input.SourceArn !== undefined && input.SourceArn !== null) {
    entries["SourceArn"] = input.SourceArn;
  }
  if (input.ReturnPathArn !== undefined && input.ReturnPathArn !== null) {
    entries["ReturnPathArn"] = input.ReturnPathArn;
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryMessageTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  return entries;
};

const serializeAws_querySendTemplatedEmailRequest = (
  input: SendTemplatedEmailRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Source !== undefined && input.Source !== null) {
    entries["Source"] = input.Source;
  }
  if (input.Destination !== undefined && input.Destination !== null) {
    const memberEntries = serializeAws_queryDestination(input.Destination, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Destination.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ReplyToAddresses !== undefined && input.ReplyToAddresses !== null) {
    const memberEntries = serializeAws_queryAddressList(input.ReplyToAddresses, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplyToAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ReturnPath !== undefined && input.ReturnPath !== null) {
    entries["ReturnPath"] = input.ReturnPath;
  }
  if (input.SourceArn !== undefined && input.SourceArn !== null) {
    entries["SourceArn"] = input.SourceArn;
  }
  if (input.ReturnPathArn !== undefined && input.ReturnPathArn !== null) {
    entries["ReturnPathArn"] = input.ReturnPathArn;
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryMessageTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.Template !== undefined && input.Template !== null) {
    entries["Template"] = input.Template;
  }
  if (input.TemplateArn !== undefined && input.TemplateArn !== null) {
    entries["TemplateArn"] = input.TemplateArn;
  }
  if (input.TemplateData !== undefined && input.TemplateData !== null) {
    entries["TemplateData"] = input.TemplateData;
  }
  return entries;
};

const serializeAws_querySetActiveReceiptRuleSetRequest = (
  input: SetActiveReceiptRuleSetRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  return entries;
};

const serializeAws_querySetIdentityDkimEnabledRequest = (
  input: SetIdentityDkimEnabledRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Identity !== undefined && input.Identity !== null) {
    entries["Identity"] = input.Identity;
  }
  if (input.DkimEnabled !== undefined && input.DkimEnabled !== null) {
    entries["DkimEnabled"] = input.DkimEnabled;
  }
  return entries;
};

const serializeAws_querySetIdentityFeedbackForwardingEnabledRequest = (
  input: SetIdentityFeedbackForwardingEnabledRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Identity !== undefined && input.Identity !== null) {
    entries["Identity"] = input.Identity;
  }
  if (input.ForwardingEnabled !== undefined && input.ForwardingEnabled !== null) {
    entries["ForwardingEnabled"] = input.ForwardingEnabled;
  }
  return entries;
};

const serializeAws_querySetIdentityHeadersInNotificationsEnabledRequest = (
  input: SetIdentityHeadersInNotificationsEnabledRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Identity !== undefined && input.Identity !== null) {
    entries["Identity"] = input.Identity;
  }
  if (input.NotificationType !== undefined && input.NotificationType !== null) {
    entries["NotificationType"] = input.NotificationType;
  }
  if (input.Enabled !== undefined && input.Enabled !== null) {
    entries["Enabled"] = input.Enabled;
  }
  return entries;
};

const serializeAws_querySetIdentityMailFromDomainRequest = (
  input: SetIdentityMailFromDomainRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Identity !== undefined && input.Identity !== null) {
    entries["Identity"] = input.Identity;
  }
  if (input.MailFromDomain !== undefined && input.MailFromDomain !== null) {
    entries["MailFromDomain"] = input.MailFromDomain;
  }
  if (input.BehaviorOnMXFailure !== undefined && input.BehaviorOnMXFailure !== null) {
    entries["BehaviorOnMXFailure"] = input.BehaviorOnMXFailure;
  }
  return entries;
};

const serializeAws_querySetIdentityNotificationTopicRequest = (
  input: SetIdentityNotificationTopicRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Identity !== undefined && input.Identity !== null) {
    entries["Identity"] = input.Identity;
  }
  if (input.NotificationType !== undefined && input.NotificationType !== null) {
    entries["NotificationType"] = input.NotificationType;
  }
  if (input.SnsTopic !== undefined && input.SnsTopic !== null) {
    entries["SnsTopic"] = input.SnsTopic;
  }
  return entries;
};

const serializeAws_querySetReceiptRulePositionRequest = (
  input: SetReceiptRulePositionRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  if (input.RuleName !== undefined && input.RuleName !== null) {
    entries["RuleName"] = input.RuleName;
  }
  if (input.After !== undefined && input.After !== null) {
    entries["After"] = input.After;
  }
  return entries;
};

const serializeAws_querySNSAction = (input: SNSAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn !== undefined && input.TopicArn !== null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.Encoding !== undefined && input.Encoding !== null) {
    entries["Encoding"] = input.Encoding;
  }
  return entries;
};

const serializeAws_querySNSDestination = (input: SNSDestination, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicARN !== undefined && input.TopicARN !== null) {
    entries["TopicARN"] = input.TopicARN;
  }
  return entries;
};

const serializeAws_queryStopAction = (input: StopAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Scope !== undefined && input.Scope !== null) {
    entries["Scope"] = input.Scope;
  }
  if (input.TopicArn !== undefined && input.TopicArn !== null) {
    entries["TopicArn"] = input.TopicArn;
  }
  return entries;
};

const serializeAws_queryTemplate = (input: Template, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TemplateName !== undefined && input.TemplateName !== null) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.SubjectPart !== undefined && input.SubjectPart !== null) {
    entries["SubjectPart"] = input.SubjectPart;
  }
  if (input.TextPart !== undefined && input.TextPart !== null) {
    entries["TextPart"] = input.TextPart;
  }
  if (input.HtmlPart !== undefined && input.HtmlPart !== null) {
    entries["HtmlPart"] = input.HtmlPart;
  }
  return entries;
};

const serializeAws_queryTestRenderTemplateRequest = (
  input: TestRenderTemplateRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TemplateName !== undefined && input.TemplateName !== null) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.TemplateData !== undefined && input.TemplateData !== null) {
    entries["TemplateData"] = input.TemplateData;
  }
  return entries;
};

const serializeAws_queryTrackingOptions = (input: TrackingOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CustomRedirectDomain !== undefined && input.CustomRedirectDomain !== null) {
    entries["CustomRedirectDomain"] = input.CustomRedirectDomain;
  }
  return entries;
};

const serializeAws_queryUpdateAccountSendingEnabledRequest = (
  input: UpdateAccountSendingEnabledRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Enabled !== undefined && input.Enabled !== null) {
    entries["Enabled"] = input.Enabled;
  }
  return entries;
};

const serializeAws_queryUpdateConfigurationSetEventDestinationRequest = (
  input: UpdateConfigurationSetEventDestinationRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.EventDestination !== undefined && input.EventDestination !== null) {
    const memberEntries = serializeAws_queryEventDestination(input.EventDestination, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EventDestination.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledRequest = (
  input: UpdateConfigurationSetReputationMetricsEnabledRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.Enabled !== undefined && input.Enabled !== null) {
    entries["Enabled"] = input.Enabled;
  }
  return entries;
};

const serializeAws_queryUpdateConfigurationSetSendingEnabledRequest = (
  input: UpdateConfigurationSetSendingEnabledRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.Enabled !== undefined && input.Enabled !== null) {
    entries["Enabled"] = input.Enabled;
  }
  return entries;
};

const serializeAws_queryUpdateConfigurationSetTrackingOptionsRequest = (
  input: UpdateConfigurationSetTrackingOptionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
    entries["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.TrackingOptions !== undefined && input.TrackingOptions !== null) {
    const memberEntries = serializeAws_queryTrackingOptions(input.TrackingOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TrackingOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryUpdateCustomVerificationEmailTemplateRequest = (
  input: UpdateCustomVerificationEmailTemplateRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TemplateName !== undefined && input.TemplateName !== null) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.FromEmailAddress !== undefined && input.FromEmailAddress !== null) {
    entries["FromEmailAddress"] = input.FromEmailAddress;
  }
  if (input.TemplateSubject !== undefined && input.TemplateSubject !== null) {
    entries["TemplateSubject"] = input.TemplateSubject;
  }
  if (input.TemplateContent !== undefined && input.TemplateContent !== null) {
    entries["TemplateContent"] = input.TemplateContent;
  }
  if (input.SuccessRedirectionURL !== undefined && input.SuccessRedirectionURL !== null) {
    entries["SuccessRedirectionURL"] = input.SuccessRedirectionURL;
  }
  if (input.FailureRedirectionURL !== undefined && input.FailureRedirectionURL !== null) {
    entries["FailureRedirectionURL"] = input.FailureRedirectionURL;
  }
  return entries;
};

const serializeAws_queryUpdateReceiptRuleRequest = (input: UpdateReceiptRuleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
    entries["RuleSetName"] = input.RuleSetName;
  }
  if (input.Rule !== undefined && input.Rule !== null) {
    const memberEntries = serializeAws_queryReceiptRule(input.Rule, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Rule.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryUpdateTemplateRequest = (input: UpdateTemplateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Template !== undefined && input.Template !== null) {
    const memberEntries = serializeAws_queryTemplate(input.Template, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Template.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryVerifyDomainDkimRequest = (input: VerifyDomainDkimRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Domain !== undefined && input.Domain !== null) {
    entries["Domain"] = input.Domain;
  }
  return entries;
};

const serializeAws_queryVerifyDomainIdentityRequest = (
  input: VerifyDomainIdentityRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Domain !== undefined && input.Domain !== null) {
    entries["Domain"] = input.Domain;
  }
  return entries;
};

const serializeAws_queryVerifyEmailAddressRequest = (
  input: VerifyEmailAddressRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EmailAddress !== undefined && input.EmailAddress !== null) {
    entries["EmailAddress"] = input.EmailAddress;
  }
  return entries;
};

const serializeAws_queryVerifyEmailIdentityRequest = (
  input: VerifyEmailIdentityRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EmailAddress !== undefined && input.EmailAddress !== null) {
    entries["EmailAddress"] = input.EmailAddress;
  }
  return entries;
};

const serializeAws_queryWorkmailAction = (input: WorkmailAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn !== undefined && input.TopicArn !== null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.OrganizationArn !== undefined && input.OrganizationArn !== null) {
    entries["OrganizationArn"] = input.OrganizationArn;
  }
  return entries;
};

const deserializeAws_queryAccountSendingPausedException = (
  output: any,
  context: __SerdeContext
): AccountSendingPausedException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryAddHeaderAction = (output: any, context: __SerdeContext): AddHeaderAction => {
  let contents: any = {
    HeaderName: undefined,
    HeaderValue: undefined,
  };
  if (output["HeaderName"] !== undefined) {
    contents.HeaderName = __expectString(output["HeaderName"]);
  }
  if (output["HeaderValue"] !== undefined) {
    contents.HeaderValue = __expectString(output["HeaderValue"]);
  }
  return contents;
};

const deserializeAws_queryAddressList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryAlreadyExistsException = (output: any, context: __SerdeContext): AlreadyExistsException => {
  let contents: any = {
    Name: undefined,
    message: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryBounceAction = (output: any, context: __SerdeContext): BounceAction => {
  let contents: any = {
    TopicArn: undefined,
    SmtpReplyCode: undefined,
    StatusCode: undefined,
    Message: undefined,
    Sender: undefined,
  };
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

const deserializeAws_queryBulkEmailDestinationStatus = (
  output: any,
  context: __SerdeContext
): BulkEmailDestinationStatus => {
  let contents: any = {
    Status: undefined,
    Error: undefined,
    MessageId: undefined,
  };
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

const deserializeAws_queryBulkEmailDestinationStatusList = (
  output: any,
  context: __SerdeContext
): BulkEmailDestinationStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryBulkEmailDestinationStatus(entry, context);
    });
};

const deserializeAws_queryCannotDeleteException = (output: any, context: __SerdeContext): CannotDeleteException => {
  let contents: any = {
    Name: undefined,
    message: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCloneReceiptRuleSetResponse = (
  output: any,
  context: __SerdeContext
): CloneReceiptRuleSetResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryCloudWatchDestination = (output: any, context: __SerdeContext): CloudWatchDestination => {
  let contents: any = {
    DimensionConfigurations: undefined,
  };
  if (output.DimensionConfigurations === "") {
    contents.DimensionConfigurations = [];
  }
  if (output["DimensionConfigurations"] !== undefined && output["DimensionConfigurations"]["member"] !== undefined) {
    contents.DimensionConfigurations = deserializeAws_queryCloudWatchDimensionConfigurations(
      __getArrayIfSingleItem(output["DimensionConfigurations"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryCloudWatchDimensionConfiguration = (
  output: any,
  context: __SerdeContext
): CloudWatchDimensionConfiguration => {
  let contents: any = {
    DimensionName: undefined,
    DimensionValueSource: undefined,
    DefaultDimensionValue: undefined,
  };
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

const deserializeAws_queryCloudWatchDimensionConfigurations = (
  output: any,
  context: __SerdeContext
): CloudWatchDimensionConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryCloudWatchDimensionConfiguration(entry, context);
    });
};

const deserializeAws_queryConfigurationSet = (output: any, context: __SerdeContext): ConfigurationSet => {
  let contents: any = {
    Name: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  return contents;
};

const deserializeAws_queryConfigurationSetAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ConfigurationSetAlreadyExistsException => {
  let contents: any = {
    ConfigurationSetName: undefined,
    message: undefined,
  };
  if (output["ConfigurationSetName"] !== undefined) {
    contents.ConfigurationSetName = __expectString(output["ConfigurationSetName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryConfigurationSetDoesNotExistException = (
  output: any,
  context: __SerdeContext
): ConfigurationSetDoesNotExistException => {
  let contents: any = {
    ConfigurationSetName: undefined,
    message: undefined,
  };
  if (output["ConfigurationSetName"] !== undefined) {
    contents.ConfigurationSetName = __expectString(output["ConfigurationSetName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryConfigurationSets = (output: any, context: __SerdeContext): ConfigurationSet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryConfigurationSet(entry, context);
    });
};

const deserializeAws_queryConfigurationSetSendingPausedException = (
  output: any,
  context: __SerdeContext
): ConfigurationSetSendingPausedException => {
  let contents: any = {
    ConfigurationSetName: undefined,
    message: undefined,
  };
  if (output["ConfigurationSetName"] !== undefined) {
    contents.ConfigurationSetName = __expectString(output["ConfigurationSetName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCreateConfigurationSetEventDestinationResponse = (
  output: any,
  context: __SerdeContext
): CreateConfigurationSetEventDestinationResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryCreateConfigurationSetResponse = (
  output: any,
  context: __SerdeContext
): CreateConfigurationSetResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryCreateConfigurationSetTrackingOptionsResponse = (
  output: any,
  context: __SerdeContext
): CreateConfigurationSetTrackingOptionsResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryCreateReceiptFilterResponse = (
  output: any,
  context: __SerdeContext
): CreateReceiptFilterResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryCreateReceiptRuleResponse = (
  output: any,
  context: __SerdeContext
): CreateReceiptRuleResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryCreateReceiptRuleSetResponse = (
  output: any,
  context: __SerdeContext
): CreateReceiptRuleSetResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryCreateTemplateResponse = (output: any, context: __SerdeContext): CreateTemplateResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryCustomVerificationEmailInvalidContentException = (
  output: any,
  context: __SerdeContext
): CustomVerificationEmailInvalidContentException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCustomVerificationEmailTemplate = (
  output: any,
  context: __SerdeContext
): CustomVerificationEmailTemplate => {
  let contents: any = {
    TemplateName: undefined,
    FromEmailAddress: undefined,
    TemplateSubject: undefined,
    SuccessRedirectionURL: undefined,
    FailureRedirectionURL: undefined,
  };
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

const deserializeAws_queryCustomVerificationEmailTemplateAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): CustomVerificationEmailTemplateAlreadyExistsException => {
  let contents: any = {
    CustomVerificationEmailTemplateName: undefined,
    message: undefined,
  };
  if (output["CustomVerificationEmailTemplateName"] !== undefined) {
    contents.CustomVerificationEmailTemplateName = __expectString(output["CustomVerificationEmailTemplateName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistException = (
  output: any,
  context: __SerdeContext
): CustomVerificationEmailTemplateDoesNotExistException => {
  let contents: any = {
    CustomVerificationEmailTemplateName: undefined,
    message: undefined,
  };
  if (output["CustomVerificationEmailTemplateName"] !== undefined) {
    contents.CustomVerificationEmailTemplateName = __expectString(output["CustomVerificationEmailTemplateName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCustomVerificationEmailTemplates = (
  output: any,
  context: __SerdeContext
): CustomVerificationEmailTemplate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryCustomVerificationEmailTemplate(entry, context);
    });
};

const deserializeAws_queryDeleteConfigurationSetEventDestinationResponse = (
  output: any,
  context: __SerdeContext
): DeleteConfigurationSetEventDestinationResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteConfigurationSetResponse = (
  output: any,
  context: __SerdeContext
): DeleteConfigurationSetResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteConfigurationSetTrackingOptionsResponse = (
  output: any,
  context: __SerdeContext
): DeleteConfigurationSetTrackingOptionsResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteIdentityPolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteIdentityPolicyResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteIdentityResponse = (output: any, context: __SerdeContext): DeleteIdentityResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteReceiptFilterResponse = (
  output: any,
  context: __SerdeContext
): DeleteReceiptFilterResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteReceiptRuleResponse = (
  output: any,
  context: __SerdeContext
): DeleteReceiptRuleResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteReceiptRuleSetResponse = (
  output: any,
  context: __SerdeContext
): DeleteReceiptRuleSetResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteTemplateResponse = (output: any, context: __SerdeContext): DeleteTemplateResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDeliveryOptions = (output: any, context: __SerdeContext): DeliveryOptions => {
  let contents: any = {
    TlsPolicy: undefined,
  };
  if (output["TlsPolicy"] !== undefined) {
    contents.TlsPolicy = __expectString(output["TlsPolicy"]);
  }
  return contents;
};

const deserializeAws_queryDescribeActiveReceiptRuleSetResponse = (
  output: any,
  context: __SerdeContext
): DescribeActiveReceiptRuleSetResponse => {
  let contents: any = {
    Metadata: undefined,
    Rules: undefined,
  };
  if (output["Metadata"] !== undefined) {
    contents.Metadata = deserializeAws_queryReceiptRuleSetMetadata(output["Metadata"], context);
  }
  if (output.Rules === "") {
    contents.Rules = [];
  }
  if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
    contents.Rules = deserializeAws_queryReceiptRulesList(__getArrayIfSingleItem(output["Rules"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryDescribeConfigurationSetResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigurationSetResponse => {
  let contents: any = {
    ConfigurationSet: undefined,
    EventDestinations: undefined,
    TrackingOptions: undefined,
    DeliveryOptions: undefined,
    ReputationOptions: undefined,
  };
  if (output["ConfigurationSet"] !== undefined) {
    contents.ConfigurationSet = deserializeAws_queryConfigurationSet(output["ConfigurationSet"], context);
  }
  if (output.EventDestinations === "") {
    contents.EventDestinations = [];
  }
  if (output["EventDestinations"] !== undefined && output["EventDestinations"]["member"] !== undefined) {
    contents.EventDestinations = deserializeAws_queryEventDestinations(
      __getArrayIfSingleItem(output["EventDestinations"]["member"]),
      context
    );
  }
  if (output["TrackingOptions"] !== undefined) {
    contents.TrackingOptions = deserializeAws_queryTrackingOptions(output["TrackingOptions"], context);
  }
  if (output["DeliveryOptions"] !== undefined) {
    contents.DeliveryOptions = deserializeAws_queryDeliveryOptions(output["DeliveryOptions"], context);
  }
  if (output["ReputationOptions"] !== undefined) {
    contents.ReputationOptions = deserializeAws_queryReputationOptions(output["ReputationOptions"], context);
  }
  return contents;
};

const deserializeAws_queryDescribeReceiptRuleResponse = (
  output: any,
  context: __SerdeContext
): DescribeReceiptRuleResponse => {
  let contents: any = {
    Rule: undefined,
  };
  if (output["Rule"] !== undefined) {
    contents.Rule = deserializeAws_queryReceiptRule(output["Rule"], context);
  }
  return contents;
};

const deserializeAws_queryDescribeReceiptRuleSetResponse = (
  output: any,
  context: __SerdeContext
): DescribeReceiptRuleSetResponse => {
  let contents: any = {
    Metadata: undefined,
    Rules: undefined,
  };
  if (output["Metadata"] !== undefined) {
    contents.Metadata = deserializeAws_queryReceiptRuleSetMetadata(output["Metadata"], context);
  }
  if (output.Rules === "") {
    contents.Rules = [];
  }
  if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
    contents.Rules = deserializeAws_queryReceiptRulesList(__getArrayIfSingleItem(output["Rules"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryDkimAttributes = (
  output: any,
  context: __SerdeContext
): { [key: string]: IdentityDkimAttributes } => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    return {
      ...acc,
      [pair["key"]]: deserializeAws_queryIdentityDkimAttributes(pair["value"], context),
    };
  }, {});
};

const deserializeAws_queryEventDestination = (output: any, context: __SerdeContext): EventDestination => {
  let contents: any = {
    Name: undefined,
    Enabled: undefined,
    MatchingEventTypes: undefined,
    KinesisFirehoseDestination: undefined,
    CloudWatchDestination: undefined,
    SNSDestination: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output.MatchingEventTypes === "") {
    contents.MatchingEventTypes = [];
  }
  if (output["MatchingEventTypes"] !== undefined && output["MatchingEventTypes"]["member"] !== undefined) {
    contents.MatchingEventTypes = deserializeAws_queryEventTypes(
      __getArrayIfSingleItem(output["MatchingEventTypes"]["member"]),
      context
    );
  }
  if (output["KinesisFirehoseDestination"] !== undefined) {
    contents.KinesisFirehoseDestination = deserializeAws_queryKinesisFirehoseDestination(
      output["KinesisFirehoseDestination"],
      context
    );
  }
  if (output["CloudWatchDestination"] !== undefined) {
    contents.CloudWatchDestination = deserializeAws_queryCloudWatchDestination(
      output["CloudWatchDestination"],
      context
    );
  }
  if (output["SNSDestination"] !== undefined) {
    contents.SNSDestination = deserializeAws_querySNSDestination(output["SNSDestination"], context);
  }
  return contents;
};

const deserializeAws_queryEventDestinationAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): EventDestinationAlreadyExistsException => {
  let contents: any = {
    ConfigurationSetName: undefined,
    EventDestinationName: undefined,
    message: undefined,
  };
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

const deserializeAws_queryEventDestinationDoesNotExistException = (
  output: any,
  context: __SerdeContext
): EventDestinationDoesNotExistException => {
  let contents: any = {
    ConfigurationSetName: undefined,
    EventDestinationName: undefined,
    message: undefined,
  };
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

const deserializeAws_queryEventDestinations = (output: any, context: __SerdeContext): EventDestination[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryEventDestination(entry, context);
    });
};

const deserializeAws_queryEventTypes = (output: any, context: __SerdeContext): (EventType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryFromEmailAddressNotVerifiedException = (
  output: any,
  context: __SerdeContext
): FromEmailAddressNotVerifiedException => {
  let contents: any = {
    FromEmailAddress: undefined,
    message: undefined,
  };
  if (output["FromEmailAddress"] !== undefined) {
    contents.FromEmailAddress = __expectString(output["FromEmailAddress"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryGetAccountSendingEnabledResponse = (
  output: any,
  context: __SerdeContext
): GetAccountSendingEnabledResponse => {
  let contents: any = {
    Enabled: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  return contents;
};

const deserializeAws_queryGetCustomVerificationEmailTemplateResponse = (
  output: any,
  context: __SerdeContext
): GetCustomVerificationEmailTemplateResponse => {
  let contents: any = {
    TemplateName: undefined,
    FromEmailAddress: undefined,
    TemplateSubject: undefined,
    TemplateContent: undefined,
    SuccessRedirectionURL: undefined,
    FailureRedirectionURL: undefined,
  };
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

const deserializeAws_queryGetIdentityDkimAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetIdentityDkimAttributesResponse => {
  let contents: any = {
    DkimAttributes: undefined,
  };
  if (output.DkimAttributes === "") {
    contents.DkimAttributes = {};
  }
  if (output["DkimAttributes"] !== undefined && output["DkimAttributes"]["entry"] !== undefined) {
    contents.DkimAttributes = deserializeAws_queryDkimAttributes(
      __getArrayIfSingleItem(output["DkimAttributes"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetIdentityMailFromDomainAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetIdentityMailFromDomainAttributesResponse => {
  let contents: any = {
    MailFromDomainAttributes: undefined,
  };
  if (output.MailFromDomainAttributes === "") {
    contents.MailFromDomainAttributes = {};
  }
  if (output["MailFromDomainAttributes"] !== undefined && output["MailFromDomainAttributes"]["entry"] !== undefined) {
    contents.MailFromDomainAttributes = deserializeAws_queryMailFromDomainAttributes(
      __getArrayIfSingleItem(output["MailFromDomainAttributes"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetIdentityNotificationAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetIdentityNotificationAttributesResponse => {
  let contents: any = {
    NotificationAttributes: undefined,
  };
  if (output.NotificationAttributes === "") {
    contents.NotificationAttributes = {};
  }
  if (output["NotificationAttributes"] !== undefined && output["NotificationAttributes"]["entry"] !== undefined) {
    contents.NotificationAttributes = deserializeAws_queryNotificationAttributes(
      __getArrayIfSingleItem(output["NotificationAttributes"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetIdentityPoliciesResponse = (
  output: any,
  context: __SerdeContext
): GetIdentityPoliciesResponse => {
  let contents: any = {
    Policies: undefined,
  };
  if (output.Policies === "") {
    contents.Policies = {};
  }
  if (output["Policies"] !== undefined && output["Policies"]["entry"] !== undefined) {
    contents.Policies = deserializeAws_queryPolicyMap(__getArrayIfSingleItem(output["Policies"]["entry"]), context);
  }
  return contents;
};

const deserializeAws_queryGetIdentityVerificationAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetIdentityVerificationAttributesResponse => {
  let contents: any = {
    VerificationAttributes: undefined,
  };
  if (output.VerificationAttributes === "") {
    contents.VerificationAttributes = {};
  }
  if (output["VerificationAttributes"] !== undefined && output["VerificationAttributes"]["entry"] !== undefined) {
    contents.VerificationAttributes = deserializeAws_queryVerificationAttributes(
      __getArrayIfSingleItem(output["VerificationAttributes"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetSendQuotaResponse = (output: any, context: __SerdeContext): GetSendQuotaResponse => {
  let contents: any = {
    Max24HourSend: undefined,
    MaxSendRate: undefined,
    SentLast24Hours: undefined,
  };
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

const deserializeAws_queryGetSendStatisticsResponse = (
  output: any,
  context: __SerdeContext
): GetSendStatisticsResponse => {
  let contents: any = {
    SendDataPoints: undefined,
  };
  if (output.SendDataPoints === "") {
    contents.SendDataPoints = [];
  }
  if (output["SendDataPoints"] !== undefined && output["SendDataPoints"]["member"] !== undefined) {
    contents.SendDataPoints = deserializeAws_querySendDataPointList(
      __getArrayIfSingleItem(output["SendDataPoints"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetTemplateResponse = (output: any, context: __SerdeContext): GetTemplateResponse => {
  let contents: any = {
    Template: undefined,
  };
  if (output["Template"] !== undefined) {
    contents.Template = deserializeAws_queryTemplate(output["Template"], context);
  }
  return contents;
};

const deserializeAws_queryIdentityDkimAttributes = (output: any, context: __SerdeContext): IdentityDkimAttributes => {
  let contents: any = {
    DkimEnabled: undefined,
    DkimVerificationStatus: undefined,
    DkimTokens: undefined,
  };
  if (output["DkimEnabled"] !== undefined) {
    contents.DkimEnabled = __parseBoolean(output["DkimEnabled"]);
  }
  if (output["DkimVerificationStatus"] !== undefined) {
    contents.DkimVerificationStatus = __expectString(output["DkimVerificationStatus"]);
  }
  if (output.DkimTokens === "") {
    contents.DkimTokens = [];
  }
  if (output["DkimTokens"] !== undefined && output["DkimTokens"]["member"] !== undefined) {
    contents.DkimTokens = deserializeAws_queryVerificationTokenList(
      __getArrayIfSingleItem(output["DkimTokens"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryIdentityList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryIdentityMailFromDomainAttributes = (
  output: any,
  context: __SerdeContext
): IdentityMailFromDomainAttributes => {
  let contents: any = {
    MailFromDomain: undefined,
    MailFromDomainStatus: undefined,
    BehaviorOnMXFailure: undefined,
  };
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

const deserializeAws_queryIdentityNotificationAttributes = (
  output: any,
  context: __SerdeContext
): IdentityNotificationAttributes => {
  let contents: any = {
    BounceTopic: undefined,
    ComplaintTopic: undefined,
    DeliveryTopic: undefined,
    ForwardingEnabled: undefined,
    HeadersInBounceNotificationsEnabled: undefined,
    HeadersInComplaintNotificationsEnabled: undefined,
    HeadersInDeliveryNotificationsEnabled: undefined,
  };
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

const deserializeAws_queryIdentityVerificationAttributes = (
  output: any,
  context: __SerdeContext
): IdentityVerificationAttributes => {
  let contents: any = {
    VerificationStatus: undefined,
    VerificationToken: undefined,
  };
  if (output["VerificationStatus"] !== undefined) {
    contents.VerificationStatus = __expectString(output["VerificationStatus"]);
  }
  if (output["VerificationToken"] !== undefined) {
    contents.VerificationToken = __expectString(output["VerificationToken"]);
  }
  return contents;
};

const deserializeAws_queryInvalidCloudWatchDestinationException = (
  output: any,
  context: __SerdeContext
): InvalidCloudWatchDestinationException => {
  let contents: any = {
    ConfigurationSetName: undefined,
    EventDestinationName: undefined,
    message: undefined,
  };
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

const deserializeAws_queryInvalidConfigurationSetException = (
  output: any,
  context: __SerdeContext
): InvalidConfigurationSetException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidDeliveryOptionsException = (
  output: any,
  context: __SerdeContext
): InvalidDeliveryOptionsException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidFirehoseDestinationException = (
  output: any,
  context: __SerdeContext
): InvalidFirehoseDestinationException => {
  let contents: any = {
    ConfigurationSetName: undefined,
    EventDestinationName: undefined,
    message: undefined,
  };
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

const deserializeAws_queryInvalidLambdaFunctionException = (
  output: any,
  context: __SerdeContext
): InvalidLambdaFunctionException => {
  let contents: any = {
    FunctionArn: undefined,
    message: undefined,
  };
  if (output["FunctionArn"] !== undefined) {
    contents.FunctionArn = __expectString(output["FunctionArn"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidPolicyException = (output: any, context: __SerdeContext): InvalidPolicyException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidRenderingParameterException = (
  output: any,
  context: __SerdeContext
): InvalidRenderingParameterException => {
  let contents: any = {
    TemplateName: undefined,
    message: undefined,
  };
  if (output["TemplateName"] !== undefined) {
    contents.TemplateName = __expectString(output["TemplateName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidS3ConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidS3ConfigurationException => {
  let contents: any = {
    Bucket: undefined,
    message: undefined,
  };
  if (output["Bucket"] !== undefined) {
    contents.Bucket = __expectString(output["Bucket"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidSNSDestinationException = (
  output: any,
  context: __SerdeContext
): InvalidSNSDestinationException => {
  let contents: any = {
    ConfigurationSetName: undefined,
    EventDestinationName: undefined,
    message: undefined,
  };
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

const deserializeAws_queryInvalidSnsTopicException = (
  output: any,
  context: __SerdeContext
): InvalidSnsTopicException => {
  let contents: any = {
    Topic: undefined,
    message: undefined,
  };
  if (output["Topic"] !== undefined) {
    contents.Topic = __expectString(output["Topic"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidTemplateException = (
  output: any,
  context: __SerdeContext
): InvalidTemplateException => {
  let contents: any = {
    TemplateName: undefined,
    message: undefined,
  };
  if (output["TemplateName"] !== undefined) {
    contents.TemplateName = __expectString(output["TemplateName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidTrackingOptionsException = (
  output: any,
  context: __SerdeContext
): InvalidTrackingOptionsException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryKinesisFirehoseDestination = (
  output: any,
  context: __SerdeContext
): KinesisFirehoseDestination => {
  let contents: any = {
    IAMRoleARN: undefined,
    DeliveryStreamARN: undefined,
  };
  if (output["IAMRoleARN"] !== undefined) {
    contents.IAMRoleARN = __expectString(output["IAMRoleARN"]);
  }
  if (output["DeliveryStreamARN"] !== undefined) {
    contents.DeliveryStreamARN = __expectString(output["DeliveryStreamARN"]);
  }
  return contents;
};

const deserializeAws_queryLambdaAction = (output: any, context: __SerdeContext): LambdaAction => {
  let contents: any = {
    TopicArn: undefined,
    FunctionArn: undefined,
    InvocationType: undefined,
  };
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

const deserializeAws_queryLimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryListConfigurationSetsResponse = (
  output: any,
  context: __SerdeContext
): ListConfigurationSetsResponse => {
  let contents: any = {
    ConfigurationSets: undefined,
    NextToken: undefined,
  };
  if (output.ConfigurationSets === "") {
    contents.ConfigurationSets = [];
  }
  if (output["ConfigurationSets"] !== undefined && output["ConfigurationSets"]["member"] !== undefined) {
    contents.ConfigurationSets = deserializeAws_queryConfigurationSets(
      __getArrayIfSingleItem(output["ConfigurationSets"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListCustomVerificationEmailTemplatesResponse = (
  output: any,
  context: __SerdeContext
): ListCustomVerificationEmailTemplatesResponse => {
  let contents: any = {
    CustomVerificationEmailTemplates: undefined,
    NextToken: undefined,
  };
  if (output.CustomVerificationEmailTemplates === "") {
    contents.CustomVerificationEmailTemplates = [];
  }
  if (
    output["CustomVerificationEmailTemplates"] !== undefined &&
    output["CustomVerificationEmailTemplates"]["member"] !== undefined
  ) {
    contents.CustomVerificationEmailTemplates = deserializeAws_queryCustomVerificationEmailTemplates(
      __getArrayIfSingleItem(output["CustomVerificationEmailTemplates"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListIdentitiesResponse = (output: any, context: __SerdeContext): ListIdentitiesResponse => {
  let contents: any = {
    Identities: undefined,
    NextToken: undefined,
  };
  if (output.Identities === "") {
    contents.Identities = [];
  }
  if (output["Identities"] !== undefined && output["Identities"]["member"] !== undefined) {
    contents.Identities = deserializeAws_queryIdentityList(
      __getArrayIfSingleItem(output["Identities"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListIdentityPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListIdentityPoliciesResponse => {
  let contents: any = {
    PolicyNames: undefined,
  };
  if (output.PolicyNames === "") {
    contents.PolicyNames = [];
  }
  if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
    contents.PolicyNames = deserializeAws_queryPolicyNameList(
      __getArrayIfSingleItem(output["PolicyNames"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListReceiptFiltersResponse = (
  output: any,
  context: __SerdeContext
): ListReceiptFiltersResponse => {
  let contents: any = {
    Filters: undefined,
  };
  if (output.Filters === "") {
    contents.Filters = [];
  }
  if (output["Filters"] !== undefined && output["Filters"]["member"] !== undefined) {
    contents.Filters = deserializeAws_queryReceiptFilterList(
      __getArrayIfSingleItem(output["Filters"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListReceiptRuleSetsResponse = (
  output: any,
  context: __SerdeContext
): ListReceiptRuleSetsResponse => {
  let contents: any = {
    RuleSets: undefined,
    NextToken: undefined,
  };
  if (output.RuleSets === "") {
    contents.RuleSets = [];
  }
  if (output["RuleSets"] !== undefined && output["RuleSets"]["member"] !== undefined) {
    contents.RuleSets = deserializeAws_queryReceiptRuleSetsLists(
      __getArrayIfSingleItem(output["RuleSets"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListTemplatesResponse = (output: any, context: __SerdeContext): ListTemplatesResponse => {
  let contents: any = {
    TemplatesMetadata: undefined,
    NextToken: undefined,
  };
  if (output.TemplatesMetadata === "") {
    contents.TemplatesMetadata = [];
  }
  if (output["TemplatesMetadata"] !== undefined && output["TemplatesMetadata"]["member"] !== undefined) {
    contents.TemplatesMetadata = deserializeAws_queryTemplateMetadataList(
      __getArrayIfSingleItem(output["TemplatesMetadata"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListVerifiedEmailAddressesResponse = (
  output: any,
  context: __SerdeContext
): ListVerifiedEmailAddressesResponse => {
  let contents: any = {
    VerifiedEmailAddresses: undefined,
  };
  if (output.VerifiedEmailAddresses === "") {
    contents.VerifiedEmailAddresses = [];
  }
  if (output["VerifiedEmailAddresses"] !== undefined && output["VerifiedEmailAddresses"]["member"] !== undefined) {
    contents.VerifiedEmailAddresses = deserializeAws_queryAddressList(
      __getArrayIfSingleItem(output["VerifiedEmailAddresses"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryMailFromDomainAttributes = (
  output: any,
  context: __SerdeContext
): { [key: string]: IdentityMailFromDomainAttributes } => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    return {
      ...acc,
      [pair["key"]]: deserializeAws_queryIdentityMailFromDomainAttributes(pair["value"], context),
    };
  }, {});
};

const deserializeAws_queryMailFromDomainNotVerifiedException = (
  output: any,
  context: __SerdeContext
): MailFromDomainNotVerifiedException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryMessageRejected = (output: any, context: __SerdeContext): MessageRejected => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryMissingRenderingAttributeException = (
  output: any,
  context: __SerdeContext
): MissingRenderingAttributeException => {
  let contents: any = {
    TemplateName: undefined,
    message: undefined,
  };
  if (output["TemplateName"] !== undefined) {
    contents.TemplateName = __expectString(output["TemplateName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryNotificationAttributes = (
  output: any,
  context: __SerdeContext
): { [key: string]: IdentityNotificationAttributes } => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    return {
      ...acc,
      [pair["key"]]: deserializeAws_queryIdentityNotificationAttributes(pair["value"], context),
    };
  }, {});
};

const deserializeAws_queryPolicyMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    return {
      ...acc,
      [pair["key"]]: __expectString(pair["value"]) as any,
    };
  }, {});
};

const deserializeAws_queryPolicyNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryProductionAccessNotGrantedException = (
  output: any,
  context: __SerdeContext
): ProductionAccessNotGrantedException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryPutConfigurationSetDeliveryOptionsResponse = (
  output: any,
  context: __SerdeContext
): PutConfigurationSetDeliveryOptionsResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryPutIdentityPolicyResponse = (
  output: any,
  context: __SerdeContext
): PutIdentityPolicyResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryReceiptAction = (output: any, context: __SerdeContext): ReceiptAction => {
  let contents: any = {
    S3Action: undefined,
    BounceAction: undefined,
    WorkmailAction: undefined,
    LambdaAction: undefined,
    StopAction: undefined,
    AddHeaderAction: undefined,
    SNSAction: undefined,
  };
  if (output["S3Action"] !== undefined) {
    contents.S3Action = deserializeAws_queryS3Action(output["S3Action"], context);
  }
  if (output["BounceAction"] !== undefined) {
    contents.BounceAction = deserializeAws_queryBounceAction(output["BounceAction"], context);
  }
  if (output["WorkmailAction"] !== undefined) {
    contents.WorkmailAction = deserializeAws_queryWorkmailAction(output["WorkmailAction"], context);
  }
  if (output["LambdaAction"] !== undefined) {
    contents.LambdaAction = deserializeAws_queryLambdaAction(output["LambdaAction"], context);
  }
  if (output["StopAction"] !== undefined) {
    contents.StopAction = deserializeAws_queryStopAction(output["StopAction"], context);
  }
  if (output["AddHeaderAction"] !== undefined) {
    contents.AddHeaderAction = deserializeAws_queryAddHeaderAction(output["AddHeaderAction"], context);
  }
  if (output["SNSAction"] !== undefined) {
    contents.SNSAction = deserializeAws_querySNSAction(output["SNSAction"], context);
  }
  return contents;
};

const deserializeAws_queryReceiptActionsList = (output: any, context: __SerdeContext): ReceiptAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryReceiptAction(entry, context);
    });
};

const deserializeAws_queryReceiptFilter = (output: any, context: __SerdeContext): ReceiptFilter => {
  let contents: any = {
    Name: undefined,
    IpFilter: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["IpFilter"] !== undefined) {
    contents.IpFilter = deserializeAws_queryReceiptIpFilter(output["IpFilter"], context);
  }
  return contents;
};

const deserializeAws_queryReceiptFilterList = (output: any, context: __SerdeContext): ReceiptFilter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryReceiptFilter(entry, context);
    });
};

const deserializeAws_queryReceiptIpFilter = (output: any, context: __SerdeContext): ReceiptIpFilter => {
  let contents: any = {
    Policy: undefined,
    Cidr: undefined,
  };
  if (output["Policy"] !== undefined) {
    contents.Policy = __expectString(output["Policy"]);
  }
  if (output["Cidr"] !== undefined) {
    contents.Cidr = __expectString(output["Cidr"]);
  }
  return contents;
};

const deserializeAws_queryReceiptRule = (output: any, context: __SerdeContext): ReceiptRule => {
  let contents: any = {
    Name: undefined,
    Enabled: undefined,
    TlsPolicy: undefined,
    Recipients: undefined,
    Actions: undefined,
    ScanEnabled: undefined,
  };
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
  }
  if (output["Recipients"] !== undefined && output["Recipients"]["member"] !== undefined) {
    contents.Recipients = deserializeAws_queryRecipientsList(
      __getArrayIfSingleItem(output["Recipients"]["member"]),
      context
    );
  }
  if (output.Actions === "") {
    contents.Actions = [];
  }
  if (output["Actions"] !== undefined && output["Actions"]["member"] !== undefined) {
    contents.Actions = deserializeAws_queryReceiptActionsList(
      __getArrayIfSingleItem(output["Actions"]["member"]),
      context
    );
  }
  if (output["ScanEnabled"] !== undefined) {
    contents.ScanEnabled = __parseBoolean(output["ScanEnabled"]);
  }
  return contents;
};

const deserializeAws_queryReceiptRuleSetMetadata = (output: any, context: __SerdeContext): ReceiptRuleSetMetadata => {
  let contents: any = {
    Name: undefined,
    CreatedTimestamp: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["CreatedTimestamp"] !== undefined) {
    contents.CreatedTimestamp = __expectNonNull(__parseRfc3339DateTime(output["CreatedTimestamp"]));
  }
  return contents;
};

const deserializeAws_queryReceiptRuleSetsLists = (output: any, context: __SerdeContext): ReceiptRuleSetMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryReceiptRuleSetMetadata(entry, context);
    });
};

const deserializeAws_queryReceiptRulesList = (output: any, context: __SerdeContext): ReceiptRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryReceiptRule(entry, context);
    });
};

const deserializeAws_queryRecipientsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryReorderReceiptRuleSetResponse = (
  output: any,
  context: __SerdeContext
): ReorderReceiptRuleSetResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryReputationOptions = (output: any, context: __SerdeContext): ReputationOptions => {
  let contents: any = {
    SendingEnabled: undefined,
    ReputationMetricsEnabled: undefined,
    LastFreshStart: undefined,
  };
  if (output["SendingEnabled"] !== undefined) {
    contents.SendingEnabled = __parseBoolean(output["SendingEnabled"]);
  }
  if (output["ReputationMetricsEnabled"] !== undefined) {
    contents.ReputationMetricsEnabled = __parseBoolean(output["ReputationMetricsEnabled"]);
  }
  if (output["LastFreshStart"] !== undefined) {
    contents.LastFreshStart = __expectNonNull(__parseRfc3339DateTime(output["LastFreshStart"]));
  }
  return contents;
};

const deserializeAws_queryRuleDoesNotExistException = (
  output: any,
  context: __SerdeContext
): RuleDoesNotExistException => {
  let contents: any = {
    Name: undefined,
    message: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryRuleSetDoesNotExistException = (
  output: any,
  context: __SerdeContext
): RuleSetDoesNotExistException => {
  let contents: any = {
    Name: undefined,
    message: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryS3Action = (output: any, context: __SerdeContext): S3Action => {
  let contents: any = {
    TopicArn: undefined,
    BucketName: undefined,
    ObjectKeyPrefix: undefined,
    KmsKeyArn: undefined,
  };
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

const deserializeAws_querySendBounceResponse = (output: any, context: __SerdeContext): SendBounceResponse => {
  let contents: any = {
    MessageId: undefined,
  };
  if (output["MessageId"] !== undefined) {
    contents.MessageId = __expectString(output["MessageId"]);
  }
  return contents;
};

const deserializeAws_querySendBulkTemplatedEmailResponse = (
  output: any,
  context: __SerdeContext
): SendBulkTemplatedEmailResponse => {
  let contents: any = {
    Status: undefined,
  };
  if (output.Status === "") {
    contents.Status = [];
  }
  if (output["Status"] !== undefined && output["Status"]["member"] !== undefined) {
    contents.Status = deserializeAws_queryBulkEmailDestinationStatusList(
      __getArrayIfSingleItem(output["Status"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_querySendCustomVerificationEmailResponse = (
  output: any,
  context: __SerdeContext
): SendCustomVerificationEmailResponse => {
  let contents: any = {
    MessageId: undefined,
  };
  if (output["MessageId"] !== undefined) {
    contents.MessageId = __expectString(output["MessageId"]);
  }
  return contents;
};

const deserializeAws_querySendDataPoint = (output: any, context: __SerdeContext): SendDataPoint => {
  let contents: any = {
    Timestamp: undefined,
    DeliveryAttempts: undefined,
    Bounces: undefined,
    Complaints: undefined,
    Rejects: undefined,
  };
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = __expectNonNull(__parseRfc3339DateTime(output["Timestamp"]));
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

const deserializeAws_querySendDataPointList = (output: any, context: __SerdeContext): SendDataPoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_querySendDataPoint(entry, context);
    });
};

const deserializeAws_querySendEmailResponse = (output: any, context: __SerdeContext): SendEmailResponse => {
  let contents: any = {
    MessageId: undefined,
  };
  if (output["MessageId"] !== undefined) {
    contents.MessageId = __expectString(output["MessageId"]);
  }
  return contents;
};

const deserializeAws_querySendRawEmailResponse = (output: any, context: __SerdeContext): SendRawEmailResponse => {
  let contents: any = {
    MessageId: undefined,
  };
  if (output["MessageId"] !== undefined) {
    contents.MessageId = __expectString(output["MessageId"]);
  }
  return contents;
};

const deserializeAws_querySendTemplatedEmailResponse = (
  output: any,
  context: __SerdeContext
): SendTemplatedEmailResponse => {
  let contents: any = {
    MessageId: undefined,
  };
  if (output["MessageId"] !== undefined) {
    contents.MessageId = __expectString(output["MessageId"]);
  }
  return contents;
};

const deserializeAws_querySetActiveReceiptRuleSetResponse = (
  output: any,
  context: __SerdeContext
): SetActiveReceiptRuleSetResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_querySetIdentityDkimEnabledResponse = (
  output: any,
  context: __SerdeContext
): SetIdentityDkimEnabledResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_querySetIdentityFeedbackForwardingEnabledResponse = (
  output: any,
  context: __SerdeContext
): SetIdentityFeedbackForwardingEnabledResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_querySetIdentityHeadersInNotificationsEnabledResponse = (
  output: any,
  context: __SerdeContext
): SetIdentityHeadersInNotificationsEnabledResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_querySetIdentityMailFromDomainResponse = (
  output: any,
  context: __SerdeContext
): SetIdentityMailFromDomainResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_querySetIdentityNotificationTopicResponse = (
  output: any,
  context: __SerdeContext
): SetIdentityNotificationTopicResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_querySetReceiptRulePositionResponse = (
  output: any,
  context: __SerdeContext
): SetReceiptRulePositionResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_querySNSAction = (output: any, context: __SerdeContext): SNSAction => {
  let contents: any = {
    TopicArn: undefined,
    Encoding: undefined,
  };
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = __expectString(output["TopicArn"]);
  }
  if (output["Encoding"] !== undefined) {
    contents.Encoding = __expectString(output["Encoding"]);
  }
  return contents;
};

const deserializeAws_querySNSDestination = (output: any, context: __SerdeContext): SNSDestination => {
  let contents: any = {
    TopicARN: undefined,
  };
  if (output["TopicARN"] !== undefined) {
    contents.TopicARN = __expectString(output["TopicARN"]);
  }
  return contents;
};

const deserializeAws_queryStopAction = (output: any, context: __SerdeContext): StopAction => {
  let contents: any = {
    Scope: undefined,
    TopicArn: undefined,
  };
  if (output["Scope"] !== undefined) {
    contents.Scope = __expectString(output["Scope"]);
  }
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = __expectString(output["TopicArn"]);
  }
  return contents;
};

const deserializeAws_queryTemplate = (output: any, context: __SerdeContext): Template => {
  let contents: any = {
    TemplateName: undefined,
    SubjectPart: undefined,
    TextPart: undefined,
    HtmlPart: undefined,
  };
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

const deserializeAws_queryTemplateDoesNotExistException = (
  output: any,
  context: __SerdeContext
): TemplateDoesNotExistException => {
  let contents: any = {
    TemplateName: undefined,
    message: undefined,
  };
  if (output["TemplateName"] !== undefined) {
    contents.TemplateName = __expectString(output["TemplateName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTemplateMetadata = (output: any, context: __SerdeContext): TemplateMetadata => {
  let contents: any = {
    Name: undefined,
    CreatedTimestamp: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["CreatedTimestamp"] !== undefined) {
    contents.CreatedTimestamp = __expectNonNull(__parseRfc3339DateTime(output["CreatedTimestamp"]));
  }
  return contents;
};

const deserializeAws_queryTemplateMetadataList = (output: any, context: __SerdeContext): TemplateMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryTemplateMetadata(entry, context);
    });
};

const deserializeAws_queryTestRenderTemplateResponse = (
  output: any,
  context: __SerdeContext
): TestRenderTemplateResponse => {
  let contents: any = {
    RenderedTemplate: undefined,
  };
  if (output["RenderedTemplate"] !== undefined) {
    contents.RenderedTemplate = __expectString(output["RenderedTemplate"]);
  }
  return contents;
};

const deserializeAws_queryTrackingOptions = (output: any, context: __SerdeContext): TrackingOptions => {
  let contents: any = {
    CustomRedirectDomain: undefined,
  };
  if (output["CustomRedirectDomain"] !== undefined) {
    contents.CustomRedirectDomain = __expectString(output["CustomRedirectDomain"]);
  }
  return contents;
};

const deserializeAws_queryTrackingOptionsAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): TrackingOptionsAlreadyExistsException => {
  let contents: any = {
    ConfigurationSetName: undefined,
    message: undefined,
  };
  if (output["ConfigurationSetName"] !== undefined) {
    contents.ConfigurationSetName = __expectString(output["ConfigurationSetName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTrackingOptionsDoesNotExistException = (
  output: any,
  context: __SerdeContext
): TrackingOptionsDoesNotExistException => {
  let contents: any = {
    ConfigurationSetName: undefined,
    message: undefined,
  };
  if (output["ConfigurationSetName"] !== undefined) {
    contents.ConfigurationSetName = __expectString(output["ConfigurationSetName"]);
  }
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryUpdateConfigurationSetEventDestinationResponse = (
  output: any,
  context: __SerdeContext
): UpdateConfigurationSetEventDestinationResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryUpdateConfigurationSetTrackingOptionsResponse = (
  output: any,
  context: __SerdeContext
): UpdateConfigurationSetTrackingOptionsResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryUpdateReceiptRuleResponse = (
  output: any,
  context: __SerdeContext
): UpdateReceiptRuleResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryUpdateTemplateResponse = (output: any, context: __SerdeContext): UpdateTemplateResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryVerificationAttributes = (
  output: any,
  context: __SerdeContext
): { [key: string]: IdentityVerificationAttributes } => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    return {
      ...acc,
      [pair["key"]]: deserializeAws_queryIdentityVerificationAttributes(pair["value"], context),
    };
  }, {});
};

const deserializeAws_queryVerificationTokenList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryVerifyDomainDkimResponse = (
  output: any,
  context: __SerdeContext
): VerifyDomainDkimResponse => {
  let contents: any = {
    DkimTokens: undefined,
  };
  if (output.DkimTokens === "") {
    contents.DkimTokens = [];
  }
  if (output["DkimTokens"] !== undefined && output["DkimTokens"]["member"] !== undefined) {
    contents.DkimTokens = deserializeAws_queryVerificationTokenList(
      __getArrayIfSingleItem(output["DkimTokens"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryVerifyDomainIdentityResponse = (
  output: any,
  context: __SerdeContext
): VerifyDomainIdentityResponse => {
  let contents: any = {
    VerificationToken: undefined,
  };
  if (output["VerificationToken"] !== undefined) {
    contents.VerificationToken = __expectString(output["VerificationToken"]);
  }
  return contents;
};

const deserializeAws_queryVerifyEmailIdentityResponse = (
  output: any,
  context: __SerdeContext
): VerifyEmailIdentityResponse => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryWorkmailAction = (output: any, context: __SerdeContext): WorkmailAction => {
  let contents: any = {
    TopicArn: undefined,
    OrganizationArn: undefined,
  };
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
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        trimValues: false,
        tagValueProcessor: (val) => (val.trim() === "" && val.includes("\n") ? "" : decodeHTML(val)),
      });
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

const buildFormUrlencodedString = (formEntries: { [key: string]: string }): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
