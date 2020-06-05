import {
  AddPermissionCommandInput,
  AddPermissionCommandOutput
} from "../commands/AddPermissionCommand";
import {
  CheckIfPhoneNumberIsOptedOutCommandInput,
  CheckIfPhoneNumberIsOptedOutCommandOutput
} from "../commands/CheckIfPhoneNumberIsOptedOutCommand";
import {
  ConfirmSubscriptionCommandInput,
  ConfirmSubscriptionCommandOutput
} from "../commands/ConfirmSubscriptionCommand";
import {
  CreatePlatformApplicationCommandInput,
  CreatePlatformApplicationCommandOutput
} from "../commands/CreatePlatformApplicationCommand";
import {
  CreatePlatformEndpointCommandInput,
  CreatePlatformEndpointCommandOutput
} from "../commands/CreatePlatformEndpointCommand";
import {
  CreateTopicCommandInput,
  CreateTopicCommandOutput
} from "../commands/CreateTopicCommand";
import {
  DeleteEndpointCommandInput,
  DeleteEndpointCommandOutput
} from "../commands/DeleteEndpointCommand";
import {
  DeletePlatformApplicationCommandInput,
  DeletePlatformApplicationCommandOutput
} from "../commands/DeletePlatformApplicationCommand";
import {
  DeleteTopicCommandInput,
  DeleteTopicCommandOutput
} from "../commands/DeleteTopicCommand";
import {
  GetEndpointAttributesCommandInput,
  GetEndpointAttributesCommandOutput
} from "../commands/GetEndpointAttributesCommand";
import {
  GetPlatformApplicationAttributesCommandInput,
  GetPlatformApplicationAttributesCommandOutput
} from "../commands/GetPlatformApplicationAttributesCommand";
import {
  GetSMSAttributesCommandInput,
  GetSMSAttributesCommandOutput
} from "../commands/GetSMSAttributesCommand";
import {
  GetSubscriptionAttributesCommandInput,
  GetSubscriptionAttributesCommandOutput
} from "../commands/GetSubscriptionAttributesCommand";
import {
  GetTopicAttributesCommandInput,
  GetTopicAttributesCommandOutput
} from "../commands/GetTopicAttributesCommand";
import {
  ListEndpointsByPlatformApplicationCommandInput,
  ListEndpointsByPlatformApplicationCommandOutput
} from "../commands/ListEndpointsByPlatformApplicationCommand";
import {
  ListPhoneNumbersOptedOutCommandInput,
  ListPhoneNumbersOptedOutCommandOutput
} from "../commands/ListPhoneNumbersOptedOutCommand";
import {
  ListPlatformApplicationsCommandInput,
  ListPlatformApplicationsCommandOutput
} from "../commands/ListPlatformApplicationsCommand";
import {
  ListSubscriptionsByTopicCommandInput,
  ListSubscriptionsByTopicCommandOutput
} from "../commands/ListSubscriptionsByTopicCommand";
import {
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput
} from "../commands/ListSubscriptionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListTopicsCommandInput,
  ListTopicsCommandOutput
} from "../commands/ListTopicsCommand";
import {
  OptInPhoneNumberCommandInput,
  OptInPhoneNumberCommandOutput
} from "../commands/OptInPhoneNumberCommand";
import {
  PublishCommandInput,
  PublishCommandOutput
} from "../commands/PublishCommand";
import {
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput
} from "../commands/RemovePermissionCommand";
import {
  SetEndpointAttributesCommandInput,
  SetEndpointAttributesCommandOutput
} from "../commands/SetEndpointAttributesCommand";
import {
  SetPlatformApplicationAttributesCommandInput,
  SetPlatformApplicationAttributesCommandOutput
} from "../commands/SetPlatformApplicationAttributesCommand";
import {
  SetSMSAttributesCommandInput,
  SetSMSAttributesCommandOutput
} from "../commands/SetSMSAttributesCommand";
import {
  SetSubscriptionAttributesCommandInput,
  SetSubscriptionAttributesCommandOutput
} from "../commands/SetSubscriptionAttributesCommand";
import {
  SetTopicAttributesCommandInput,
  SetTopicAttributesCommandOutput
} from "../commands/SetTopicAttributesCommand";
import {
  SubscribeCommandInput,
  SubscribeCommandOutput
} from "../commands/SubscribeCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UnsubscribeCommandInput,
  UnsubscribeCommandOutput
} from "../commands/UnsubscribeCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  AddPermissionInput,
  AuthorizationErrorException,
  CheckIfPhoneNumberIsOptedOutInput,
  CheckIfPhoneNumberIsOptedOutResponse,
  ConcurrentAccessException,
  ConfirmSubscriptionInput,
  ConfirmSubscriptionResponse,
  CreateEndpointResponse,
  CreatePlatformApplicationInput,
  CreatePlatformApplicationResponse,
  CreatePlatformEndpointInput,
  CreateTopicInput,
  CreateTopicResponse,
  DeleteEndpointInput,
  DeletePlatformApplicationInput,
  DeleteTopicInput,
  Endpoint,
  EndpointDisabledException,
  FilterPolicyLimitExceededException,
  GetEndpointAttributesInput,
  GetEndpointAttributesResponse,
  GetPlatformApplicationAttributesInput,
  GetPlatformApplicationAttributesResponse,
  GetSMSAttributesInput,
  GetSMSAttributesResponse,
  GetSubscriptionAttributesInput,
  GetSubscriptionAttributesResponse,
  GetTopicAttributesInput,
  GetTopicAttributesResponse,
  InternalErrorException,
  InvalidParameterException,
  InvalidParameterValueException,
  InvalidSecurityException,
  KMSAccessDeniedException,
  KMSDisabledException,
  KMSInvalidStateException,
  KMSNotFoundException,
  KMSOptInRequired,
  KMSThrottlingException,
  ListEndpointsByPlatformApplicationInput,
  ListEndpointsByPlatformApplicationResponse,
  ListPhoneNumbersOptedOutInput,
  ListPhoneNumbersOptedOutResponse,
  ListPlatformApplicationsInput,
  ListPlatformApplicationsResponse,
  ListSubscriptionsByTopicInput,
  ListSubscriptionsByTopicResponse,
  ListSubscriptionsInput,
  ListSubscriptionsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTopicsInput,
  ListTopicsResponse,
  MessageAttributeValue,
  NotFoundException,
  OptInPhoneNumberInput,
  OptInPhoneNumberResponse,
  PlatformApplication,
  PlatformApplicationDisabledException,
  PublishInput,
  PublishResponse,
  RemovePermissionInput,
  ResourceNotFoundException,
  SetEndpointAttributesInput,
  SetPlatformApplicationAttributesInput,
  SetSMSAttributesInput,
  SetSMSAttributesResponse,
  SetSubscriptionAttributesInput,
  SetTopicAttributesInput,
  StaleTagException,
  SubscribeInput,
  SubscribeResponse,
  Subscription,
  SubscriptionLimitExceededException,
  Tag,
  TagLimitExceededException,
  TagPolicyException,
  TagResourceRequest,
  TagResourceResponse,
  ThrottledException,
  Topic,
  TopicLimitExceededException,
  UnsubscribeInput,
  UntagResourceRequest,
  UntagResourceResponse
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { parse as xmlParse } from "fast-xml-parser";

export const serializeAws_queryAddPermissionCommand = async (
  input: AddPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAddPermissionInput(input, context),
    Action: "AddPermission",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCheckIfPhoneNumberIsOptedOutCommand = async (
  input: CheckIfPhoneNumberIsOptedOutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCheckIfPhoneNumberIsOptedOutInput(input, context),
    Action: "CheckIfPhoneNumberIsOptedOut",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryConfirmSubscriptionCommand = async (
  input: ConfirmSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryConfirmSubscriptionInput(input, context),
    Action: "ConfirmSubscription",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreatePlatformApplicationCommand = async (
  input: CreatePlatformApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreatePlatformApplicationInput(input, context),
    Action: "CreatePlatformApplication",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreatePlatformEndpointCommand = async (
  input: CreatePlatformEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreatePlatformEndpointInput(input, context),
    Action: "CreatePlatformEndpoint",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateTopicCommand = async (
  input: CreateTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateTopicInput(input, context),
    Action: "CreateTopic",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteEndpointCommand = async (
  input: DeleteEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteEndpointInput(input, context),
    Action: "DeleteEndpoint",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeletePlatformApplicationCommand = async (
  input: DeletePlatformApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeletePlatformApplicationInput(input, context),
    Action: "DeletePlatformApplication",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteTopicCommand = async (
  input: DeleteTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteTopicInput(input, context),
    Action: "DeleteTopic",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetEndpointAttributesCommand = async (
  input: GetEndpointAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetEndpointAttributesInput(input, context),
    Action: "GetEndpointAttributes",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetPlatformApplicationAttributesCommand = async (
  input: GetPlatformApplicationAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetPlatformApplicationAttributesInput(input, context),
    Action: "GetPlatformApplicationAttributes",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetSMSAttributesCommand = async (
  input: GetSMSAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetSMSAttributesInput(input, context),
    Action: "GetSMSAttributes",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetSubscriptionAttributesCommand = async (
  input: GetSubscriptionAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetSubscriptionAttributesInput(input, context),
    Action: "GetSubscriptionAttributes",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetTopicAttributesCommand = async (
  input: GetTopicAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetTopicAttributesInput(input, context),
    Action: "GetTopicAttributes",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListEndpointsByPlatformApplicationCommand = async (
  input: ListEndpointsByPlatformApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListEndpointsByPlatformApplicationInput(
      input,
      context
    ),
    Action: "ListEndpointsByPlatformApplication",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListPhoneNumbersOptedOutCommand = async (
  input: ListPhoneNumbersOptedOutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListPhoneNumbersOptedOutInput(input, context),
    Action: "ListPhoneNumbersOptedOut",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListPlatformApplicationsCommand = async (
  input: ListPlatformApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListPlatformApplicationsInput(input, context),
    Action: "ListPlatformApplications",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListSubscriptionsCommand = async (
  input: ListSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListSubscriptionsInput(input, context),
    Action: "ListSubscriptions",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListSubscriptionsByTopicCommand = async (
  input: ListSubscriptionsByTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListSubscriptionsByTopicInput(input, context),
    Action: "ListSubscriptionsByTopic",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListTagsForResourceRequest(input, context),
    Action: "ListTagsForResource",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListTopicsCommand = async (
  input: ListTopicsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListTopicsInput(input, context),
    Action: "ListTopics",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryOptInPhoneNumberCommand = async (
  input: OptInPhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryOptInPhoneNumberInput(input, context),
    Action: "OptInPhoneNumber",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPublishCommand = async (
  input: PublishCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPublishInput(input, context),
    Action: "Publish",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRemovePermissionCommand = async (
  input: RemovePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRemovePermissionInput(input, context),
    Action: "RemovePermission",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetEndpointAttributesCommand = async (
  input: SetEndpointAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetEndpointAttributesInput(input, context),
    Action: "SetEndpointAttributes",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetPlatformApplicationAttributesCommand = async (
  input: SetPlatformApplicationAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetPlatformApplicationAttributesInput(input, context),
    Action: "SetPlatformApplicationAttributes",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetSMSAttributesCommand = async (
  input: SetSMSAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetSMSAttributesInput(input, context),
    Action: "SetSMSAttributes",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetSubscriptionAttributesCommand = async (
  input: SetSubscriptionAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetSubscriptionAttributesInput(input, context),
    Action: "SetSubscriptionAttributes",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetTopicAttributesCommand = async (
  input: SetTopicAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetTopicAttributesInput(input, context),
    Action: "SetTopicAttributes",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySubscribeCommand = async (
  input: SubscribeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySubscribeInput(input, context),
    Action: "Subscribe",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryTagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryTagResourceRequest(input, context),
    Action: "TagResource",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUnsubscribeCommand = async (
  input: UnsubscribeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUnsubscribeInput(input, context),
    Action: "Unsubscribe",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUntagResourceRequest(input, context),
    Action: "UntagResource",
    Version: "2010-03-31"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryAddPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddPermissionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAddPermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddPermissionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAddPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.sns#NotFoundException":
      response = {
        ...(await deserializeAws_queryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckIfPhoneNumberIsOptedOutCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCheckIfPhoneNumberIsOptedOutResponse(
    data.CheckIfPhoneNumberIsOptedOutResult,
    context
  );
  const response: CheckIfPhoneNumberIsOptedOutCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CheckIfPhoneNumberIsOptedOutResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckIfPhoneNumberIsOptedOutCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.sns#ThrottledException":
      response = {
        ...(await deserializeAws_queryThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryConfirmSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmSubscriptionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryConfirmSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryConfirmSubscriptionResponse(
    data.ConfirmSubscriptionResult,
    context
  );
  const response: ConfirmSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfirmSubscriptionResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryConfirmSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FilterPolicyLimitExceededException":
    case "com.amazonaws.sns#FilterPolicyLimitExceededException":
      response = {
        ...(await deserializeAws_queryFilterPolicyLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.sns#NotFoundException":
      response = {
        ...(await deserializeAws_queryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubscriptionLimitExceededException":
    case "com.amazonaws.sns#SubscriptionLimitExceededException":
      response = {
        ...(await deserializeAws_querySubscriptionLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreatePlatformApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlatformApplicationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreatePlatformApplicationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreatePlatformApplicationResponse(
    data.CreatePlatformApplicationResult,
    context
  );
  const response: CreatePlatformApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePlatformApplicationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreatePlatformApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlatformApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreatePlatformEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlatformEndpointCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreatePlatformEndpointCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateEndpointResponse(
    data.CreatePlatformEndpointResult,
    context
  );
  const response: CreatePlatformEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateEndpointResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreatePlatformEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlatformEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.sns#NotFoundException":
      response = {
        ...(await deserializeAws_queryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTopicCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateTopicCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateTopicResponse(
    data.CreateTopicResult,
    context
  );
  const response: CreateTopicCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateTopicResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateTopicCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTopicCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentAccessException":
    case "com.amazonaws.sns#ConcurrentAccessException":
      response = {
        ...(await deserializeAws_queryConcurrentAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSecurityException":
    case "com.amazonaws.sns#InvalidSecurityException":
      response = {
        ...(await deserializeAws_queryInvalidSecurityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StaleTagException":
    case "com.amazonaws.sns#StaleTagException":
      response = {
        ...(await deserializeAws_queryStaleTagExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagLimitExceededException":
    case "com.amazonaws.sns#TagLimitExceededException":
      response = {
        ...(await deserializeAws_queryTagLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagPolicyException":
    case "com.amazonaws.sns#TagPolicyException":
      response = {
        ...(await deserializeAws_queryTagPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TopicLimitExceededException":
    case "com.amazonaws.sns#TopicLimitExceededException":
      response = {
        ...(await deserializeAws_queryTopicLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteEndpointCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEndpointCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeletePlatformApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlatformApplicationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeletePlatformApplicationCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeletePlatformApplicationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeletePlatformApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlatformApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTopicCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteTopicCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTopicCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteTopicCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTopicCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentAccessException":
    case "com.amazonaws.sns#ConcurrentAccessException":
      response = {
        ...(await deserializeAws_queryConcurrentAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.sns#NotFoundException":
      response = {
        ...(await deserializeAws_queryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StaleTagException":
    case "com.amazonaws.sns#StaleTagException":
      response = {
        ...(await deserializeAws_queryStaleTagExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagPolicyException":
    case "com.amazonaws.sns#TagPolicyException":
      response = {
        ...(await deserializeAws_queryTagPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetEndpointAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointAttributesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetEndpointAttributesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetEndpointAttributesResponse(
    data.GetEndpointAttributesResult,
    context
  );
  const response: GetEndpointAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEndpointAttributesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetEndpointAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.sns#NotFoundException":
      response = {
        ...(await deserializeAws_queryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetPlatformApplicationAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlatformApplicationAttributesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetPlatformApplicationAttributesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetPlatformApplicationAttributesResponse(
    data.GetPlatformApplicationAttributesResult,
    context
  );
  const response: GetPlatformApplicationAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPlatformApplicationAttributesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetPlatformApplicationAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlatformApplicationAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.sns#NotFoundException":
      response = {
        ...(await deserializeAws_queryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetSMSAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSMSAttributesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetSMSAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetSMSAttributesResponse(
    data.GetSMSAttributesResult,
    context
  );
  const response: GetSMSAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSMSAttributesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetSMSAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSMSAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.sns#ThrottledException":
      response = {
        ...(await deserializeAws_queryThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetSubscriptionAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionAttributesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetSubscriptionAttributesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetSubscriptionAttributesResponse(
    data.GetSubscriptionAttributesResult,
    context
  );
  const response: GetSubscriptionAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSubscriptionAttributesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetSubscriptionAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.sns#NotFoundException":
      response = {
        ...(await deserializeAws_queryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetTopicAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTopicAttributesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetTopicAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetTopicAttributesResponse(
    data.GetTopicAttributesResult,
    context
  );
  const response: GetTopicAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTopicAttributesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetTopicAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTopicAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSecurityException":
    case "com.amazonaws.sns#InvalidSecurityException":
      response = {
        ...(await deserializeAws_queryInvalidSecurityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.sns#NotFoundException":
      response = {
        ...(await deserializeAws_queryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListEndpointsByPlatformApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointsByPlatformApplicationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListEndpointsByPlatformApplicationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListEndpointsByPlatformApplicationResponse(
    data.ListEndpointsByPlatformApplicationResult,
    context
  );
  const response: ListEndpointsByPlatformApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEndpointsByPlatformApplicationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListEndpointsByPlatformApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointsByPlatformApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.sns#NotFoundException":
      response = {
        ...(await deserializeAws_queryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListPhoneNumbersOptedOutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersOptedOutCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListPhoneNumbersOptedOutCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListPhoneNumbersOptedOutResponse(
    data.ListPhoneNumbersOptedOutResult,
    context
  );
  const response: ListPhoneNumbersOptedOutCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPhoneNumbersOptedOutResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListPhoneNumbersOptedOutCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersOptedOutCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.sns#ThrottledException":
      response = {
        ...(await deserializeAws_queryThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListPlatformApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlatformApplicationsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListPlatformApplicationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListPlatformApplicationsResponse(
    data.ListPlatformApplicationsResult,
    context
  );
  const response: ListPlatformApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPlatformApplicationsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListPlatformApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlatformApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListSubscriptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListSubscriptionsResponse(
    data.ListSubscriptionsResult,
    context
  );
  const response: ListSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSubscriptionsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListSubscriptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListSubscriptionsByTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionsByTopicCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListSubscriptionsByTopicCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListSubscriptionsByTopicResponse(
    data.ListSubscriptionsByTopicResult,
    context
  );
  const response: ListSubscriptionsByTopicCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSubscriptionsByTopicResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListSubscriptionsByTopicCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionsByTopicCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.sns#NotFoundException":
      response = {
        ...(await deserializeAws_queryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListTagsForResourceResponse(
    data.ListTagsForResourceResult,
    context
  );
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentAccessException":
    case "com.amazonaws.sns#ConcurrentAccessException":
      response = {
        ...(await deserializeAws_queryConcurrentAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.sns#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagPolicyException":
    case "com.amazonaws.sns#TagPolicyException":
      response = {
        ...(await deserializeAws_queryTagPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListTopicsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTopicsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListTopicsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListTopicsResponse(
    data.ListTopicsResult,
    context
  );
  const response: ListTopicsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTopicsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListTopicsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTopicsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryOptInPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OptInPhoneNumberCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryOptInPhoneNumberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryOptInPhoneNumberResponse(
    data.OptInPhoneNumberResult,
    context
  );
  const response: OptInPhoneNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "OptInPhoneNumberResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryOptInPhoneNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OptInPhoneNumberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.sns#ThrottledException":
      response = {
        ...(await deserializeAws_queryThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPublishCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryPublishCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPublishResponse(data.PublishResult, context);
  const response: PublishCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PublishResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPublishCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EndpointDisabledException":
    case "com.amazonaws.sns#EndpointDisabledException":
      response = {
        ...(await deserializeAws_queryEndpointDisabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.sns#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSecurityException":
    case "com.amazonaws.sns#InvalidSecurityException":
      response = {
        ...(await deserializeAws_queryInvalidSecurityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSAccessDeniedException":
    case "com.amazonaws.sns#KMSAccessDeniedException":
      response = {
        ...(await deserializeAws_queryKMSAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSDisabledException":
    case "com.amazonaws.sns#KMSDisabledException":
      response = {
        ...(await deserializeAws_queryKMSDisabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.sns#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_queryKMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSNotFoundException":
    case "com.amazonaws.sns#KMSNotFoundException":
      response = {
        ...(await deserializeAws_queryKMSNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSOptInRequired":
    case "com.amazonaws.sns#KMSOptInRequired":
      response = {
        ...(await deserializeAws_queryKMSOptInRequiredResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSThrottlingException":
    case "com.amazonaws.sns#KMSThrottlingException":
      response = {
        ...(await deserializeAws_queryKMSThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.sns#NotFoundException":
      response = {
        ...(await deserializeAws_queryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PlatformApplicationDisabledException":
    case "com.amazonaws.sns#PlatformApplicationDisabledException":
      response = {
        ...(await deserializeAws_queryPlatformApplicationDisabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryRemovePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRemovePermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemovePermissionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRemovePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.sns#NotFoundException":
      response = {
        ...(await deserializeAws_queryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetEndpointAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetEndpointAttributesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_querySetEndpointAttributesCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: SetEndpointAttributesCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetEndpointAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetEndpointAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.sns#NotFoundException":
      response = {
        ...(await deserializeAws_queryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetPlatformApplicationAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetPlatformApplicationAttributesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_querySetPlatformApplicationAttributesCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: SetPlatformApplicationAttributesCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetPlatformApplicationAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetPlatformApplicationAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.sns#NotFoundException":
      response = {
        ...(await deserializeAws_queryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetSMSAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSMSAttributesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_querySetSMSAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetSMSAttributesResponse(
    data.SetSMSAttributesResult,
    context
  );
  const response: SetSMSAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SetSMSAttributesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetSMSAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSMSAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.sns#ThrottledException":
      response = {
        ...(await deserializeAws_queryThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetSubscriptionAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSubscriptionAttributesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_querySetSubscriptionAttributesCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: SetSubscriptionAttributesCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetSubscriptionAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSubscriptionAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FilterPolicyLimitExceededException":
    case "com.amazonaws.sns#FilterPolicyLimitExceededException":
      response = {
        ...(await deserializeAws_queryFilterPolicyLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.sns#NotFoundException":
      response = {
        ...(await deserializeAws_queryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetTopicAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTopicAttributesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_querySetTopicAttributesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetTopicAttributesCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetTopicAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTopicAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSecurityException":
    case "com.amazonaws.sns#InvalidSecurityException":
      response = {
        ...(await deserializeAws_queryInvalidSecurityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.sns#NotFoundException":
      response = {
        ...(await deserializeAws_queryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySubscribeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_querySubscribeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySubscribeResponse(
    data.SubscribeResult,
    context
  );
  const response: SubscribeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SubscribeResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_querySubscribeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FilterPolicyLimitExceededException":
    case "com.amazonaws.sns#FilterPolicyLimitExceededException":
      response = {
        ...(await deserializeAws_queryFilterPolicyLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSecurityException":
    case "com.amazonaws.sns#InvalidSecurityException":
      response = {
        ...(await deserializeAws_queryInvalidSecurityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.sns#NotFoundException":
      response = {
        ...(await deserializeAws_queryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubscriptionLimitExceededException":
    case "com.amazonaws.sns#SubscriptionLimitExceededException":
      response = {
        ...(await deserializeAws_querySubscriptionLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryTagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryTagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryTagResourceResponse(
    data.TagResourceResult,
    context
  );
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryTagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentAccessException":
    case "com.amazonaws.sns#ConcurrentAccessException":
      response = {
        ...(await deserializeAws_queryConcurrentAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.sns#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StaleTagException":
    case "com.amazonaws.sns#StaleTagException":
      response = {
        ...(await deserializeAws_queryStaleTagExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagLimitExceededException":
    case "com.amazonaws.sns#TagLimitExceededException":
      response = {
        ...(await deserializeAws_queryTagLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagPolicyException":
    case "com.amazonaws.sns#TagPolicyException":
      response = {
        ...(await deserializeAws_queryTagPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUnsubscribeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUnsubscribeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UnsubscribeCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUnsubscribeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.sns#InternalErrorException":
      response = {
        ...(await deserializeAws_queryInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSecurityException":
    case "com.amazonaws.sns#InvalidSecurityException":
      response = {
        ...(await deserializeAws_queryInvalidSecurityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.sns#NotFoundException":
      response = {
        ...(await deserializeAws_queryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUntagResourceResponse(
    data.UntagResourceResult,
    context
  );
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.sns#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentAccessException":
    case "com.amazonaws.sns#ConcurrentAccessException":
      response = {
        ...(await deserializeAws_queryConcurrentAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.sns#InvalidParameterException":
      response = {
        ...(await deserializeAws_queryInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.sns#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StaleTagException":
    case "com.amazonaws.sns#StaleTagException":
      response = {
        ...(await deserializeAws_queryStaleTagExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagLimitExceededException":
    case "com.amazonaws.sns#TagLimitExceededException":
      response = {
        ...(await deserializeAws_queryTagLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagPolicyException":
    case "com.amazonaws.sns#TagPolicyException":
      response = {
        ...(await deserializeAws_queryTagPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_queryAuthorizationErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAuthorizationErrorException(
    body.Error,
    context
  );
  const contents: AuthorizationErrorException = {
    name: "AuthorizationErrorException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryConcurrentAccessExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentAccessException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryConcurrentAccessException(
    body.Error,
    context
  );
  const contents: ConcurrentAccessException = {
    name: "ConcurrentAccessException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryEndpointDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryEndpointDisabledException(
    body.Error,
    context
  );
  const contents: EndpointDisabledException = {
    name: "EndpointDisabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryFilterPolicyLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FilterPolicyLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryFilterPolicyLimitExceededException(
    body.Error,
    context
  );
  const contents: FilterPolicyLimitExceededException = {
    name: "FilterPolicyLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInternalErrorException(
    body.Error,
    context
  );
  const contents: InternalErrorException = {
    name: "InternalErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidParameterException(
    body.Error,
    context
  );
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidParameterValueException(
    body.Error,
    context
  );
  const contents: InvalidParameterValueException = {
    name: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidSecurityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSecurityException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSecurityException(
    body.Error,
    context
  );
  const contents: InvalidSecurityException = {
    name: "InvalidSecurityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryKMSAccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSAccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryKMSAccessDeniedException(
    body.Error,
    context
  );
  const contents: KMSAccessDeniedException = {
    name: "KMSAccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryKMSDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryKMSDisabledException(
    body.Error,
    context
  );
  const contents: KMSDisabledException = {
    name: "KMSDisabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryKMSInvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryKMSInvalidStateException(
    body.Error,
    context
  );
  const contents: KMSInvalidStateException = {
    name: "KMSInvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryKMSNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryKMSNotFoundException(
    body.Error,
    context
  );
  const contents: KMSNotFoundException = {
    name: "KMSNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryKMSOptInRequiredResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSOptInRequired> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryKMSOptInRequired(
    body.Error,
    context
  );
  const contents: KMSOptInRequired = {
    name: "KMSOptInRequired",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryKMSThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryKMSThrottlingException(
    body.Error,
    context
  );
  const contents: KMSThrottlingException = {
    name: "KMSThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryNotFoundException(
    body.Error,
    context
  );
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryPlatformApplicationDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PlatformApplicationDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPlatformApplicationDisabledException(
    body.Error,
    context
  );
  const contents: PlatformApplicationDisabledException = {
    name: "PlatformApplicationDisabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceNotFoundException(
    body.Error,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryStaleTagExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StaleTagException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryStaleTagException(
    body.Error,
    context
  );
  const contents: StaleTagException = {
    name: "StaleTagException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_querySubscriptionLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubscriptionLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubscriptionLimitExceededException(
    body.Error,
    context
  );
  const contents: SubscriptionLimitExceededException = {
    name: "SubscriptionLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTagLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTagLimitExceededException(
    body.Error,
    context
  );
  const contents: TagLimitExceededException = {
    name: "TagLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTagPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTagPolicyException(
    body.Error,
    context
  );
  const contents: TagPolicyException = {
    name: "TagPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryThrottledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryThrottledException(
    body.Error,
    context
  );
  const contents: ThrottledException = {
    name: "ThrottledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTopicLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TopicLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTopicLimitExceededException(
    body.Error,
    context
  );
  const contents: TopicLimitExceededException = {
    name: "TopicLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_queryActionsList = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryAddPermissionInput = (
  input: AddPermissionInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AWSAccountId !== undefined) {
    const memberEntries = serializeAws_queryDelegatesList(
      input.AWSAccountId,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AWSAccountId.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ActionName !== undefined) {
    const memberEntries = serializeAws_queryActionsList(
      input.ActionName,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ActionName.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Label !== undefined) {
    entries["Label"] = input.Label;
  }
  if (input.TopicArn !== undefined) {
    entries["TopicArn"] = input.TopicArn;
  }
  return entries;
};

const serializeAws_queryCheckIfPhoneNumberIsOptedOutInput = (
  input: CheckIfPhoneNumberIsOptedOutInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.phoneNumber !== undefined) {
    entries["phoneNumber"] = input.phoneNumber;
  }
  return entries;
};

const serializeAws_queryConfirmSubscriptionInput = (
  input: ConfirmSubscriptionInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AuthenticateOnUnsubscribe !== undefined) {
    entries["AuthenticateOnUnsubscribe"] = input.AuthenticateOnUnsubscribe;
  }
  if (input.Token !== undefined) {
    entries["Token"] = input.Token;
  }
  if (input.TopicArn !== undefined) {
    entries["TopicArn"] = input.TopicArn;
  }
  return entries;
};

const serializeAws_queryCreatePlatformApplicationInput = (
  input: CreatePlatformApplicationInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Attributes !== undefined) {
    const memberEntries = serializeAws_queryMapStringToString(
      input.Attributes,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Name !== undefined) {
    entries["Name"] = input.Name;
  }
  if (input.Platform !== undefined) {
    entries["Platform"] = input.Platform;
  }
  return entries;
};

const serializeAws_queryCreatePlatformEndpointInput = (
  input: CreatePlatformEndpointInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Attributes !== undefined) {
    const memberEntries = serializeAws_queryMapStringToString(
      input.Attributes,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CustomUserData !== undefined) {
    entries["CustomUserData"] = input.CustomUserData;
  }
  if (input.PlatformApplicationArn !== undefined) {
    entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
  }
  if (input.Token !== undefined) {
    entries["Token"] = input.Token;
  }
  return entries;
};

const serializeAws_queryCreateTopicInput = (
  input: CreateTopicInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Attributes !== undefined) {
    const memberEntries = serializeAws_queryTopicAttributesMap(
      input.Attributes,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Name !== undefined) {
    entries["Name"] = input.Name;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDelegatesList = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryDeleteEndpointInput = (
  input: DeleteEndpointInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EndpointArn !== undefined) {
    entries["EndpointArn"] = input.EndpointArn;
  }
  return entries;
};

const serializeAws_queryDeletePlatformApplicationInput = (
  input: DeletePlatformApplicationInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PlatformApplicationArn !== undefined) {
    entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
  }
  return entries;
};

const serializeAws_queryDeleteTopicInput = (
  input: DeleteTopicInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TopicArn !== undefined) {
    entries["TopicArn"] = input.TopicArn;
  }
  return entries;
};

const serializeAws_queryGetEndpointAttributesInput = (
  input: GetEndpointAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EndpointArn !== undefined) {
    entries["EndpointArn"] = input.EndpointArn;
  }
  return entries;
};

const serializeAws_queryGetPlatformApplicationAttributesInput = (
  input: GetPlatformApplicationAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PlatformApplicationArn !== undefined) {
    entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
  }
  return entries;
};

const serializeAws_queryGetSMSAttributesInput = (
  input: GetSMSAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.attributes !== undefined) {
    const memberEntries = serializeAws_queryListString(
      input.attributes,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryGetSubscriptionAttributesInput = (
  input: GetSubscriptionAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SubscriptionArn !== undefined) {
    entries["SubscriptionArn"] = input.SubscriptionArn;
  }
  return entries;
};

const serializeAws_queryGetTopicAttributesInput = (
  input: GetTopicAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TopicArn !== undefined) {
    entries["TopicArn"] = input.TopicArn;
  }
  return entries;
};

const serializeAws_queryListEndpointsByPlatformApplicationInput = (
  input: ListEndpointsByPlatformApplicationInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.PlatformApplicationArn !== undefined) {
    entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
  }
  return entries;
};

const serializeAws_queryListPhoneNumbersOptedOutInput = (
  input: ListPhoneNumbersOptedOutInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.nextToken !== undefined) {
    entries["nextToken"] = input.nextToken;
  }
  return entries;
};

const serializeAws_queryListPlatformApplicationsInput = (
  input: ListPlatformApplicationsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryListString = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryListSubscriptionsByTopicInput = (
  input: ListSubscriptionsByTopicInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.TopicArn !== undefined) {
    entries["TopicArn"] = input.TopicArn;
  }
  return entries;
};

const serializeAws_queryListSubscriptionsInput = (
  input: ListSubscriptionsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceArn !== undefined) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  return entries;
};

const serializeAws_queryListTopicsInput = (
  input: ListTopicsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryMapStringToString = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input).forEach(key => {
    entries[`entry.${counter}.key`] = key;
    entries[`entry.${counter}.value`] = input[key];
    counter++;
  });
  return entries;
};

const serializeAws_queryMessageAttributeMap = (
  input: { [key: string]: MessageAttributeValue },
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input).forEach(key => {
    entries[`entry.${counter}.Name`] = key;
    const memberEntries = serializeAws_queryMessageAttributeValue(
      input[key],
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`entry.${counter}.Value.${key}`] = value;
    });
    counter++;
  });
  return entries;
};

const serializeAws_queryMessageAttributeValue = (
  input: MessageAttributeValue,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.BinaryValue !== undefined) {
    entries["BinaryValue"] = context.base64Encoder(input.BinaryValue);
  }
  if (input.DataType !== undefined) {
    entries["DataType"] = input.DataType;
  }
  if (input.StringValue !== undefined) {
    entries["StringValue"] = input.StringValue;
  }
  return entries;
};

const serializeAws_queryOptInPhoneNumberInput = (
  input: OptInPhoneNumberInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.phoneNumber !== undefined) {
    entries["phoneNumber"] = input.phoneNumber;
  }
  return entries;
};

const serializeAws_queryPublishInput = (
  input: PublishInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Message !== undefined) {
    entries["Message"] = input.Message;
  }
  if (input.MessageAttributes !== undefined) {
    const memberEntries = serializeAws_queryMessageAttributeMap(
      input.MessageAttributes,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageAttributes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MessageStructure !== undefined) {
    entries["MessageStructure"] = input.MessageStructure;
  }
  if (input.PhoneNumber !== undefined) {
    entries["PhoneNumber"] = input.PhoneNumber;
  }
  if (input.Subject !== undefined) {
    entries["Subject"] = input.Subject;
  }
  if (input.TargetArn !== undefined) {
    entries["TargetArn"] = input.TargetArn;
  }
  if (input.TopicArn !== undefined) {
    entries["TopicArn"] = input.TopicArn;
  }
  return entries;
};

const serializeAws_queryRemovePermissionInput = (
  input: RemovePermissionInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Label !== undefined) {
    entries["Label"] = input.Label;
  }
  if (input.TopicArn !== undefined) {
    entries["TopicArn"] = input.TopicArn;
  }
  return entries;
};

const serializeAws_querySetEndpointAttributesInput = (
  input: SetEndpointAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Attributes !== undefined) {
    const memberEntries = serializeAws_queryMapStringToString(
      input.Attributes,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.EndpointArn !== undefined) {
    entries["EndpointArn"] = input.EndpointArn;
  }
  return entries;
};

const serializeAws_querySetPlatformApplicationAttributesInput = (
  input: SetPlatformApplicationAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Attributes !== undefined) {
    const memberEntries = serializeAws_queryMapStringToString(
      input.Attributes,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PlatformApplicationArn !== undefined) {
    entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
  }
  return entries;
};

const serializeAws_querySetSMSAttributesInput = (
  input: SetSMSAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.attributes !== undefined) {
    const memberEntries = serializeAws_queryMapStringToString(
      input.attributes,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_querySetSubscriptionAttributesInput = (
  input: SetSubscriptionAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AttributeName !== undefined) {
    entries["AttributeName"] = input.AttributeName;
  }
  if (input.AttributeValue !== undefined) {
    entries["AttributeValue"] = input.AttributeValue;
  }
  if (input.SubscriptionArn !== undefined) {
    entries["SubscriptionArn"] = input.SubscriptionArn;
  }
  return entries;
};

const serializeAws_querySetTopicAttributesInput = (
  input: SetTopicAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AttributeName !== undefined) {
    entries["AttributeName"] = input.AttributeName;
  }
  if (input.AttributeValue !== undefined) {
    entries["AttributeValue"] = input.AttributeValue;
  }
  if (input.TopicArn !== undefined) {
    entries["TopicArn"] = input.TopicArn;
  }
  return entries;
};

const serializeAws_querySubscribeInput = (
  input: SubscribeInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Attributes !== undefined) {
    const memberEntries = serializeAws_querySubscriptionAttributesMap(
      input.Attributes,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Endpoint !== undefined) {
    entries["Endpoint"] = input.Endpoint;
  }
  if (input.Protocol !== undefined) {
    entries["Protocol"] = input.Protocol;
  }
  if (input.ReturnSubscriptionArn !== undefined) {
    entries["ReturnSubscriptionArn"] = input.ReturnSubscriptionArn;
  }
  if (input.TopicArn !== undefined) {
    entries["TopicArn"] = input.TopicArn;
  }
  return entries;
};

const serializeAws_querySubscriptionAttributesMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input).forEach(key => {
    entries[`entry.${counter}.key`] = key;
    entries[`entry.${counter}.value`] = input[key];
    counter++;
  });
  return entries;
};

const serializeAws_queryTag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key !== undefined) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryTagKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryTagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceArn !== undefined) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryTopicAttributesMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input).forEach(key => {
    entries[`entry.${counter}.key`] = key;
    entries[`entry.${counter}.value`] = input[key];
    counter++;
  });
  return entries;
};

const serializeAws_queryUnsubscribeInput = (
  input: UnsubscribeInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SubscriptionArn !== undefined) {
    entries["SubscriptionArn"] = input.SubscriptionArn;
  }
  return entries;
};

const serializeAws_queryUntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceArn !== undefined) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  if (input.TagKeys !== undefined) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const deserializeAws_queryAuthorizationErrorException = (
  output: any,
  context: __SerdeContext
): AuthorizationErrorException => {
  let contents: any = {
    __type: "AuthorizationErrorException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryCheckIfPhoneNumberIsOptedOutResponse = (
  output: any,
  context: __SerdeContext
): CheckIfPhoneNumberIsOptedOutResponse => {
  let contents: any = {
    __type: "CheckIfPhoneNumberIsOptedOutResponse",
    isOptedOut: undefined
  };
  if (output["isOptedOut"] !== undefined) {
    contents.isOptedOut = output["isOptedOut"] == "true";
  }
  return contents;
};

const deserializeAws_queryConcurrentAccessException = (
  output: any,
  context: __SerdeContext
): ConcurrentAccessException => {
  let contents: any = {
    __type: "ConcurrentAccessException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryConfirmSubscriptionResponse = (
  output: any,
  context: __SerdeContext
): ConfirmSubscriptionResponse => {
  let contents: any = {
    __type: "ConfirmSubscriptionResponse",
    SubscriptionArn: undefined
  };
  if (output["SubscriptionArn"] !== undefined) {
    contents.SubscriptionArn = output["SubscriptionArn"];
  }
  return contents;
};

const deserializeAws_queryCreateEndpointResponse = (
  output: any,
  context: __SerdeContext
): CreateEndpointResponse => {
  let contents: any = {
    __type: "CreateEndpointResponse",
    EndpointArn: undefined
  };
  if (output["EndpointArn"] !== undefined) {
    contents.EndpointArn = output["EndpointArn"];
  }
  return contents;
};

const deserializeAws_queryCreatePlatformApplicationResponse = (
  output: any,
  context: __SerdeContext
): CreatePlatformApplicationResponse => {
  let contents: any = {
    __type: "CreatePlatformApplicationResponse",
    PlatformApplicationArn: undefined
  };
  if (output["PlatformApplicationArn"] !== undefined) {
    contents.PlatformApplicationArn = output["PlatformApplicationArn"];
  }
  return contents;
};

const deserializeAws_queryCreateTopicResponse = (
  output: any,
  context: __SerdeContext
): CreateTopicResponse => {
  let contents: any = {
    __type: "CreateTopicResponse",
    TopicArn: undefined
  };
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = output["TopicArn"];
  }
  return contents;
};

const deserializeAws_queryEndpoint = (
  output: any,
  context: __SerdeContext
): Endpoint => {
  let contents: any = {
    __type: "Endpoint",
    Attributes: undefined,
    EndpointArn: undefined
  };
  if (output.Attributes === "") {
    contents.Attributes = {};
  }
  if (
    output["Attributes"] !== undefined &&
    output["Attributes"]["entry"] !== undefined
  ) {
    contents.Attributes = deserializeAws_queryMapStringToString(
      __getArrayIfSingleItem(output["Attributes"]["entry"]),
      context
    );
  }
  if (output["EndpointArn"] !== undefined) {
    contents.EndpointArn = output["EndpointArn"];
  }
  return contents;
};

const deserializeAws_queryEndpointDisabledException = (
  output: any,
  context: __SerdeContext
): EndpointDisabledException => {
  let contents: any = {
    __type: "EndpointDisabledException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryFilterPolicyLimitExceededException = (
  output: any,
  context: __SerdeContext
): FilterPolicyLimitExceededException => {
  let contents: any = {
    __type: "FilterPolicyLimitExceededException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryGetEndpointAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetEndpointAttributesResponse => {
  let contents: any = {
    __type: "GetEndpointAttributesResponse",
    Attributes: undefined
  };
  if (output.Attributes === "") {
    contents.Attributes = {};
  }
  if (
    output["Attributes"] !== undefined &&
    output["Attributes"]["entry"] !== undefined
  ) {
    contents.Attributes = deserializeAws_queryMapStringToString(
      __getArrayIfSingleItem(output["Attributes"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetPlatformApplicationAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetPlatformApplicationAttributesResponse => {
  let contents: any = {
    __type: "GetPlatformApplicationAttributesResponse",
    Attributes: undefined
  };
  if (output.Attributes === "") {
    contents.Attributes = {};
  }
  if (
    output["Attributes"] !== undefined &&
    output["Attributes"]["entry"] !== undefined
  ) {
    contents.Attributes = deserializeAws_queryMapStringToString(
      __getArrayIfSingleItem(output["Attributes"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetSMSAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetSMSAttributesResponse => {
  let contents: any = {
    __type: "GetSMSAttributesResponse",
    attributes: undefined
  };
  if (output.attributes === "") {
    contents.attributes = {};
  }
  if (
    output["attributes"] !== undefined &&
    output["attributes"]["entry"] !== undefined
  ) {
    contents.attributes = deserializeAws_queryMapStringToString(
      __getArrayIfSingleItem(output["attributes"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetSubscriptionAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetSubscriptionAttributesResponse => {
  let contents: any = {
    __type: "GetSubscriptionAttributesResponse",
    Attributes: undefined
  };
  if (output.Attributes === "") {
    contents.Attributes = {};
  }
  if (
    output["Attributes"] !== undefined &&
    output["Attributes"]["entry"] !== undefined
  ) {
    contents.Attributes = deserializeAws_querySubscriptionAttributesMap(
      __getArrayIfSingleItem(output["Attributes"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetTopicAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetTopicAttributesResponse => {
  let contents: any = {
    __type: "GetTopicAttributesResponse",
    Attributes: undefined
  };
  if (output.Attributes === "") {
    contents.Attributes = {};
  }
  if (
    output["Attributes"] !== undefined &&
    output["Attributes"]["entry"] !== undefined
  ) {
    contents.Attributes = deserializeAws_queryTopicAttributesMap(
      __getArrayIfSingleItem(output["Attributes"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryInternalErrorException = (
  output: any,
  context: __SerdeContext
): InternalErrorException => {
  let contents: any = {
    __type: "InternalErrorException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  let contents: any = {
    __type: "InvalidParameterValueException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidSecurityException = (
  output: any,
  context: __SerdeContext
): InvalidSecurityException => {
  let contents: any = {
    __type: "InvalidSecurityException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryKMSAccessDeniedException = (
  output: any,
  context: __SerdeContext
): KMSAccessDeniedException => {
  let contents: any = {
    __type: "KMSAccessDeniedException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryKMSDisabledException = (
  output: any,
  context: __SerdeContext
): KMSDisabledException => {
  let contents: any = {
    __type: "KMSDisabledException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryKMSInvalidStateException = (
  output: any,
  context: __SerdeContext
): KMSInvalidStateException => {
  let contents: any = {
    __type: "KMSInvalidStateException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryKMSNotFoundException = (
  output: any,
  context: __SerdeContext
): KMSNotFoundException => {
  let contents: any = {
    __type: "KMSNotFoundException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryKMSOptInRequired = (
  output: any,
  context: __SerdeContext
): KMSOptInRequired => {
  let contents: any = {
    __type: "KMSOptInRequired",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryKMSThrottlingException = (
  output: any,
  context: __SerdeContext
): KMSThrottlingException => {
  let contents: any = {
    __type: "KMSThrottlingException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryListEndpointsByPlatformApplicationResponse = (
  output: any,
  context: __SerdeContext
): ListEndpointsByPlatformApplicationResponse => {
  let contents: any = {
    __type: "ListEndpointsByPlatformApplicationResponse",
    Endpoints: undefined,
    NextToken: undefined
  };
  if (output.Endpoints === "") {
    contents.Endpoints = [];
  }
  if (
    output["Endpoints"] !== undefined &&
    output["Endpoints"]["member"] !== undefined
  ) {
    contents.Endpoints = deserializeAws_queryListOfEndpoints(
      __getArrayIfSingleItem(output["Endpoints"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryListOfEndpoints = (
  output: any,
  context: __SerdeContext
): Endpoint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryEndpoint(entry, context)
  );
};

const deserializeAws_queryListOfPlatformApplications = (
  output: any,
  context: __SerdeContext
): PlatformApplication[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryPlatformApplication(entry, context)
  );
};

const deserializeAws_queryListPhoneNumbersOptedOutResponse = (
  output: any,
  context: __SerdeContext
): ListPhoneNumbersOptedOutResponse => {
  let contents: any = {
    __type: "ListPhoneNumbersOptedOutResponse",
    nextToken: undefined,
    phoneNumbers: undefined
  };
  if (output["nextToken"] !== undefined) {
    contents.nextToken = output["nextToken"];
  }
  if (output.phoneNumbers === "") {
    contents.phoneNumbers = [];
  }
  if (
    output["phoneNumbers"] !== undefined &&
    output["phoneNumbers"]["member"] !== undefined
  ) {
    contents.phoneNumbers = deserializeAws_queryPhoneNumberList(
      __getArrayIfSingleItem(output["phoneNumbers"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListPlatformApplicationsResponse = (
  output: any,
  context: __SerdeContext
): ListPlatformApplicationsResponse => {
  let contents: any = {
    __type: "ListPlatformApplicationsResponse",
    NextToken: undefined,
    PlatformApplications: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  if (output.PlatformApplications === "") {
    contents.PlatformApplications = [];
  }
  if (
    output["PlatformApplications"] !== undefined &&
    output["PlatformApplications"]["member"] !== undefined
  ) {
    contents.PlatformApplications = deserializeAws_queryListOfPlatformApplications(
      __getArrayIfSingleItem(output["PlatformApplications"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListSubscriptionsByTopicResponse = (
  output: any,
  context: __SerdeContext
): ListSubscriptionsByTopicResponse => {
  let contents: any = {
    __type: "ListSubscriptionsByTopicResponse",
    NextToken: undefined,
    Subscriptions: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  if (output.Subscriptions === "") {
    contents.Subscriptions = [];
  }
  if (
    output["Subscriptions"] !== undefined &&
    output["Subscriptions"]["member"] !== undefined
  ) {
    contents.Subscriptions = deserializeAws_querySubscriptionsList(
      __getArrayIfSingleItem(output["Subscriptions"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListSubscriptionsResponse = (
  output: any,
  context: __SerdeContext
): ListSubscriptionsResponse => {
  let contents: any = {
    __type: "ListSubscriptionsResponse",
    NextToken: undefined,
    Subscriptions: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  if (output.Subscriptions === "") {
    contents.Subscriptions = [];
  }
  if (
    output["Subscriptions"] !== undefined &&
    output["Subscriptions"]["member"] !== undefined
  ) {
    contents.Subscriptions = deserializeAws_querySubscriptionsList(
      __getArrayIfSingleItem(output["Subscriptions"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  let contents: any = {
    __type: "ListTagsForResourceResponse",
    Tags: undefined
  };
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(
      __getArrayIfSingleItem(output["Tags"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListTopicsResponse = (
  output: any,
  context: __SerdeContext
): ListTopicsResponse => {
  let contents: any = {
    __type: "ListTopicsResponse",
    NextToken: undefined,
    Topics: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  if (output.Topics === "") {
    contents.Topics = [];
  }
  if (
    output["Topics"] !== undefined &&
    output["Topics"]["member"] !== undefined
  ) {
    contents.Topics = deserializeAws_queryTopicsList(
      __getArrayIfSingleItem(output["Topics"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryMapStringToString = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return output.reduce(
    (acc: any, pair: any) => ({
      ...acc,
      [pair["key"]]: pair["value"]
    }),
    {}
  );
};

const deserializeAws_queryNotFoundException = (
  output: any,
  context: __SerdeContext
): NotFoundException => {
  let contents: any = {
    __type: "NotFoundException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryOptInPhoneNumberResponse = (
  output: any,
  context: __SerdeContext
): OptInPhoneNumberResponse => {
  let contents: any = {
    __type: "OptInPhoneNumberResponse"
  };
  return contents;
};

const deserializeAws_queryPhoneNumberList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryPlatformApplication = (
  output: any,
  context: __SerdeContext
): PlatformApplication => {
  let contents: any = {
    __type: "PlatformApplication",
    Attributes: undefined,
    PlatformApplicationArn: undefined
  };
  if (output.Attributes === "") {
    contents.Attributes = {};
  }
  if (
    output["Attributes"] !== undefined &&
    output["Attributes"]["entry"] !== undefined
  ) {
    contents.Attributes = deserializeAws_queryMapStringToString(
      __getArrayIfSingleItem(output["Attributes"]["entry"]),
      context
    );
  }
  if (output["PlatformApplicationArn"] !== undefined) {
    contents.PlatformApplicationArn = output["PlatformApplicationArn"];
  }
  return contents;
};

const deserializeAws_queryPlatformApplicationDisabledException = (
  output: any,
  context: __SerdeContext
): PlatformApplicationDisabledException => {
  let contents: any = {
    __type: "PlatformApplicationDisabledException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryPublishResponse = (
  output: any,
  context: __SerdeContext
): PublishResponse => {
  let contents: any = {
    __type: "PublishResponse",
    MessageId: undefined
  };
  if (output["MessageId"] !== undefined) {
    contents.MessageId = output["MessageId"];
  }
  return contents;
};

const deserializeAws_queryResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_querySetSMSAttributesResponse = (
  output: any,
  context: __SerdeContext
): SetSMSAttributesResponse => {
  let contents: any = {
    __type: "SetSMSAttributesResponse"
  };
  return contents;
};

const deserializeAws_queryStaleTagException = (
  output: any,
  context: __SerdeContext
): StaleTagException => {
  let contents: any = {
    __type: "StaleTagException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_querySubscribeResponse = (
  output: any,
  context: __SerdeContext
): SubscribeResponse => {
  let contents: any = {
    __type: "SubscribeResponse",
    SubscriptionArn: undefined
  };
  if (output["SubscriptionArn"] !== undefined) {
    contents.SubscriptionArn = output["SubscriptionArn"];
  }
  return contents;
};

const deserializeAws_querySubscription = (
  output: any,
  context: __SerdeContext
): Subscription => {
  let contents: any = {
    __type: "Subscription",
    Endpoint: undefined,
    Owner: undefined,
    Protocol: undefined,
    SubscriptionArn: undefined,
    TopicArn: undefined
  };
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = output["Endpoint"];
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = output["Owner"];
  }
  if (output["Protocol"] !== undefined) {
    contents.Protocol = output["Protocol"];
  }
  if (output["SubscriptionArn"] !== undefined) {
    contents.SubscriptionArn = output["SubscriptionArn"];
  }
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = output["TopicArn"];
  }
  return contents;
};

const deserializeAws_querySubscriptionAttributesMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return output.reduce(
    (acc: any, pair: any) => ({
      ...acc,
      [pair["key"]]: pair["value"]
    }),
    {}
  );
};

const deserializeAws_querySubscriptionLimitExceededException = (
  output: any,
  context: __SerdeContext
): SubscriptionLimitExceededException => {
  let contents: any = {
    __type: "SubscriptionLimitExceededException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_querySubscriptionsList = (
  output: any,
  context: __SerdeContext
): Subscription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_querySubscription(entry, context)
  );
};

const deserializeAws_queryTag = (output: any, context: __SerdeContext): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_queryTagLimitExceededException = (
  output: any,
  context: __SerdeContext
): TagLimitExceededException => {
  let contents: any = {
    __type: "TagLimitExceededException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryTagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryTag(entry, context)
  );
};

const deserializeAws_queryTagPolicyException = (
  output: any,
  context: __SerdeContext
): TagPolicyException => {
  let contents: any = {
    __type: "TagPolicyException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryTagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  let contents: any = {
    __type: "TagResourceResponse"
  };
  return contents;
};

const deserializeAws_queryThrottledException = (
  output: any,
  context: __SerdeContext
): ThrottledException => {
  let contents: any = {
    __type: "ThrottledException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryTopic = (
  output: any,
  context: __SerdeContext
): Topic => {
  let contents: any = {
    __type: "Topic",
    TopicArn: undefined
  };
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = output["TopicArn"];
  }
  return contents;
};

const deserializeAws_queryTopicAttributesMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return output.reduce(
    (acc: any, pair: any) => ({
      ...acc,
      [pair["key"]]: pair["value"]
    }),
    {}
  );
};

const deserializeAws_queryTopicLimitExceededException = (
  output: any,
  context: __SerdeContext
): TopicLimitExceededException => {
  let contents: any = {
    __type: "TopicLimitExceededException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryTopicsList = (
  output: any,
  context: __SerdeContext
): Topic[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryTopic(entry, context)
  );
};

const deserializeAws_queryUntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  let contents: any = {
    __type: "UntagResourceResponse"
  };
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const decodeEscapedXML = (str: string) =>
  str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        tagValueProcessor: (val, tagName) => decodeEscapedXML(val)
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

const buildFormUrlencodedString = (formEntries: {
  [key: string]: string;
}): string =>
  Object.entries(formEntries)
    .map(
      ([key, value]) =>
        __extendedEncodeURIComponent(key) +
        "=" +
        __extendedEncodeURIComponent(value)
    )
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
