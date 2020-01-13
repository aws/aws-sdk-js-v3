import {
  ActivateEventSourceCommandInput,
  ActivateEventSourceCommandOutput
} from "../commands/ActivateEventSourceCommand";
import {
  CreateEventBusCommandInput,
  CreateEventBusCommandOutput
} from "../commands/CreateEventBusCommand";
import {
  CreatePartnerEventSourceCommandInput,
  CreatePartnerEventSourceCommandOutput
} from "../commands/CreatePartnerEventSourceCommand";
import {
  DeactivateEventSourceCommandInput,
  DeactivateEventSourceCommandOutput
} from "../commands/DeactivateEventSourceCommand";
import {
  DeleteEventBusCommandInput,
  DeleteEventBusCommandOutput
} from "../commands/DeleteEventBusCommand";
import {
  DeletePartnerEventSourceCommandInput,
  DeletePartnerEventSourceCommandOutput
} from "../commands/DeletePartnerEventSourceCommand";
import {
  DeleteRuleCommandInput,
  DeleteRuleCommandOutput
} from "../commands/DeleteRuleCommand";
import {
  DescribeEventBusCommandInput,
  DescribeEventBusCommandOutput
} from "../commands/DescribeEventBusCommand";
import {
  DescribeEventSourceCommandInput,
  DescribeEventSourceCommandOutput
} from "../commands/DescribeEventSourceCommand";
import {
  DescribePartnerEventSourceCommandInput,
  DescribePartnerEventSourceCommandOutput
} from "../commands/DescribePartnerEventSourceCommand";
import {
  DescribeRuleCommandInput,
  DescribeRuleCommandOutput
} from "../commands/DescribeRuleCommand";
import {
  DisableRuleCommandInput,
  DisableRuleCommandOutput
} from "../commands/DisableRuleCommand";
import {
  EnableRuleCommandInput,
  EnableRuleCommandOutput
} from "../commands/EnableRuleCommand";
import {
  ListEventBusesCommandInput,
  ListEventBusesCommandOutput
} from "../commands/ListEventBusesCommand";
import {
  ListEventSourcesCommandInput,
  ListEventSourcesCommandOutput
} from "../commands/ListEventSourcesCommand";
import {
  ListPartnerEventSourceAccountsCommandInput,
  ListPartnerEventSourceAccountsCommandOutput
} from "../commands/ListPartnerEventSourceAccountsCommand";
import {
  ListPartnerEventSourcesCommandInput,
  ListPartnerEventSourcesCommandOutput
} from "../commands/ListPartnerEventSourcesCommand";
import {
  ListRuleNamesByTargetCommandInput,
  ListRuleNamesByTargetCommandOutput
} from "../commands/ListRuleNamesByTargetCommand";
import {
  ListRulesCommandInput,
  ListRulesCommandOutput
} from "../commands/ListRulesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListTargetsByRuleCommandInput,
  ListTargetsByRuleCommandOutput
} from "../commands/ListTargetsByRuleCommand";
import {
  PutEventsCommandInput,
  PutEventsCommandOutput
} from "../commands/PutEventsCommand";
import {
  PutPartnerEventsCommandInput,
  PutPartnerEventsCommandOutput
} from "../commands/PutPartnerEventsCommand";
import {
  PutPermissionCommandInput,
  PutPermissionCommandOutput
} from "../commands/PutPermissionCommand";
import {
  PutRuleCommandInput,
  PutRuleCommandOutput
} from "../commands/PutRuleCommand";
import {
  PutTargetsCommandInput,
  PutTargetsCommandOutput
} from "../commands/PutTargetsCommand";
import {
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput
} from "../commands/RemovePermissionCommand";
import {
  RemoveTargetsCommandInput,
  RemoveTargetsCommandOutput
} from "../commands/RemoveTargetsCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  TestEventPatternCommandInput,
  TestEventPatternCommandOutput
} from "../commands/TestEventPatternCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  ActivateEventSourceRequest,
  AwsVpcConfiguration,
  BatchArrayProperties,
  BatchParameters,
  BatchRetryStrategy,
  ConcurrentModificationException,
  Condition,
  CreateEventBusRequest,
  CreateEventBusResponse,
  CreatePartnerEventSourceRequest,
  CreatePartnerEventSourceResponse,
  DeactivateEventSourceRequest,
  DeleteEventBusRequest,
  DeletePartnerEventSourceRequest,
  DeleteRuleRequest,
  DescribeEventBusRequest,
  DescribeEventBusResponse,
  DescribeEventSourceRequest,
  DescribeEventSourceResponse,
  DescribePartnerEventSourceRequest,
  DescribePartnerEventSourceResponse,
  DescribeRuleRequest,
  DescribeRuleResponse,
  DisableRuleRequest,
  EcsParameters,
  EnableRuleRequest,
  EventBus,
  EventSource,
  InputTransformer,
  InternalException,
  InvalidEventPatternException,
  InvalidStateException,
  KinesisParameters,
  LimitExceededException,
  ListEventBusesRequest,
  ListEventBusesResponse,
  ListEventSourcesRequest,
  ListEventSourcesResponse,
  ListPartnerEventSourceAccountsRequest,
  ListPartnerEventSourceAccountsResponse,
  ListPartnerEventSourcesRequest,
  ListPartnerEventSourcesResponse,
  ListRuleNamesByTargetRequest,
  ListRuleNamesByTargetResponse,
  ListRulesRequest,
  ListRulesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTargetsByRuleRequest,
  ListTargetsByRuleResponse,
  ManagedRuleException,
  NetworkConfiguration,
  PartnerEventSource,
  PartnerEventSourceAccount,
  PolicyLengthExceededException,
  PutEventsRequest,
  PutEventsRequestEntry,
  PutEventsResponse,
  PutEventsResultEntry,
  PutPartnerEventsRequest,
  PutPartnerEventsRequestEntry,
  PutPartnerEventsResponse,
  PutPartnerEventsResultEntry,
  PutPermissionRequest,
  PutRuleRequest,
  PutRuleResponse,
  PutTargetsRequest,
  PutTargetsResponse,
  PutTargetsResultEntry,
  RemovePermissionRequest,
  RemoveTargetsRequest,
  RemoveTargetsResponse,
  RemoveTargetsResultEntry,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  Rule,
  RunCommandParameters,
  RunCommandTarget,
  SqsParameters,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  Target,
  TestEventPatternRequest,
  TestEventPatternResponse,
  UntagResourceRequest,
  UntagResourceResponse
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1ActivateEventSourceCommand(
  input: ActivateEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.ActivateEventSource";
  let body: any = {};
  const wrappedBody: any = {
    ActivateEventSourceRequest: serializeAws_json1_1ActivateEventSourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ActivateEventSource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateEventBusCommand(
  input: CreateEventBusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.CreateEventBus";
  let body: any = {};
  const wrappedBody: any = {
    CreateEventBusRequest: serializeAws_json1_1CreateEventBusRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateEventBus",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreatePartnerEventSourceCommand(
  input: CreatePartnerEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.CreatePartnerEventSource";
  let body: any = {};
  const wrappedBody: any = {
    CreatePartnerEventSourceRequest: serializeAws_json1_1CreatePartnerEventSourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreatePartnerEventSource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeactivateEventSourceCommand(
  input: DeactivateEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.DeactivateEventSource";
  let body: any = {};
  const wrappedBody: any = {
    DeactivateEventSourceRequest: serializeAws_json1_1DeactivateEventSourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeactivateEventSource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteEventBusCommand(
  input: DeleteEventBusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.DeleteEventBus";
  let body: any = {};
  const wrappedBody: any = {
    DeleteEventBusRequest: serializeAws_json1_1DeleteEventBusRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteEventBus",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeletePartnerEventSourceCommand(
  input: DeletePartnerEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.DeletePartnerEventSource";
  let body: any = {};
  const wrappedBody: any = {
    DeletePartnerEventSourceRequest: serializeAws_json1_1DeletePartnerEventSourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeletePartnerEventSource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteRuleCommand(
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.DeleteRule";
  let body: any = {};
  const wrappedBody: any = {
    DeleteRuleRequest: serializeAws_json1_1DeleteRuleRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteRule",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeEventBusCommand(
  input: DescribeEventBusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.DescribeEventBus";
  let body: any = {};
  const wrappedBody: any = {
    DescribeEventBusRequest: serializeAws_json1_1DescribeEventBusRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeEventBus",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeEventSourceCommand(
  input: DescribeEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.DescribeEventSource";
  let body: any = {};
  const wrappedBody: any = {
    DescribeEventSourceRequest: serializeAws_json1_1DescribeEventSourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeEventSource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribePartnerEventSourceCommand(
  input: DescribePartnerEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.DescribePartnerEventSource";
  let body: any = {};
  const wrappedBody: any = {
    DescribePartnerEventSourceRequest: serializeAws_json1_1DescribePartnerEventSourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribePartnerEventSource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeRuleCommand(
  input: DescribeRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.DescribeRule";
  let body: any = {};
  const wrappedBody: any = {
    DescribeRuleRequest: serializeAws_json1_1DescribeRuleRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeRule",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DisableRuleCommand(
  input: DisableRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.DisableRule";
  let body: any = {};
  const wrappedBody: any = {
    DisableRuleRequest: serializeAws_json1_1DisableRuleRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DisableRule",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1EnableRuleCommand(
  input: EnableRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.EnableRule";
  let body: any = {};
  const wrappedBody: any = {
    EnableRuleRequest: serializeAws_json1_1EnableRuleRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/EnableRule",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListEventBusesCommand(
  input: ListEventBusesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.ListEventBuses";
  let body: any = {};
  const wrappedBody: any = {
    ListEventBusesRequest: serializeAws_json1_1ListEventBusesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListEventBuses",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListEventSourcesCommand(
  input: ListEventSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.ListEventSources";
  let body: any = {};
  const wrappedBody: any = {
    ListEventSourcesRequest: serializeAws_json1_1ListEventSourcesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListEventSources",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListPartnerEventSourceAccountsCommand(
  input: ListPartnerEventSourceAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.ListPartnerEventSourceAccounts";
  let body: any = {};
  const wrappedBody: any = {
    ListPartnerEventSourceAccountsRequest: serializeAws_json1_1ListPartnerEventSourceAccountsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListPartnerEventSourceAccounts",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListPartnerEventSourcesCommand(
  input: ListPartnerEventSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.ListPartnerEventSources";
  let body: any = {};
  const wrappedBody: any = {
    ListPartnerEventSourcesRequest: serializeAws_json1_1ListPartnerEventSourcesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListPartnerEventSources",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListRuleNamesByTargetCommand(
  input: ListRuleNamesByTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.ListRuleNamesByTarget";
  let body: any = {};
  const wrappedBody: any = {
    ListRuleNamesByTargetRequest: serializeAws_json1_1ListRuleNamesByTargetRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListRuleNamesByTarget",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListRulesCommand(
  input: ListRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.ListRules";
  let body: any = {};
  const wrappedBody: any = {
    ListRulesRequest: serializeAws_json1_1ListRulesRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListRules",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.ListTagsForResource";
  let body: any = {};
  const wrappedBody: any = {
    ListTagsForResourceRequest: serializeAws_json1_1ListTagsForResourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTagsForResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTargetsByRuleCommand(
  input: ListTargetsByRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.ListTargetsByRule";
  let body: any = {};
  const wrappedBody: any = {
    ListTargetsByRuleRequest: serializeAws_json1_1ListTargetsByRuleRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTargetsByRule",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutEventsCommand(
  input: PutEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.PutEvents";
  let body: any = {};
  const wrappedBody: any = {
    PutEventsRequest: serializeAws_json1_1PutEventsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutEvents",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutPartnerEventsCommand(
  input: PutPartnerEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.PutPartnerEvents";
  let body: any = {};
  const wrappedBody: any = {
    PutPartnerEventsRequest: serializeAws_json1_1PutPartnerEventsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutPartnerEvents",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutPermissionCommand(
  input: PutPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.PutPermission";
  let body: any = {};
  const wrappedBody: any = {
    PutPermissionRequest: serializeAws_json1_1PutPermissionRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutPermission",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutRuleCommand(
  input: PutRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.PutRule";
  let body: any = {};
  const wrappedBody: any = {
    PutRuleRequest: serializeAws_json1_1PutRuleRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutRule",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutTargetsCommand(
  input: PutTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.PutTargets";
  let body: any = {};
  const wrappedBody: any = {
    PutTargetsRequest: serializeAws_json1_1PutTargetsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutTargets",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RemovePermissionCommand(
  input: RemovePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.RemovePermission";
  let body: any = {};
  const wrappedBody: any = {
    RemovePermissionRequest: serializeAws_json1_1RemovePermissionRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RemovePermission",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RemoveTargetsCommand(
  input: RemoveTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.RemoveTargets";
  let body: any = {};
  const wrappedBody: any = {
    RemoveTargetsRequest: serializeAws_json1_1RemoveTargetsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RemoveTargets",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.TagResource";
  let body: any = {};
  const wrappedBody: any = {
    TagResourceRequest: serializeAws_json1_1TagResourceRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1TestEventPatternCommand(
  input: TestEventPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.TestEventPattern";
  let body: any = {};
  const wrappedBody: any = {
    TestEventPatternRequest: serializeAws_json1_1TestEventPatternRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TestEventPattern",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEvents.UntagResource";
  let body: any = {};
  const wrappedBody: any = {
    UntagResourceRequest: serializeAws_json1_1UntagResourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UntagResource",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1ActivateEventSourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateEventSourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ActivateEventSourceCommandError(
      output,
      context
    );
  }
  const response: ActivateEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ActivateEventSourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateEventSourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazon.jetstream.v20151007.exceptions#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1CreateEventBusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventBusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateEventBusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEventBusResponse(data, context);
  const response: CreateEventBusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateEventBusResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateEventBusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventBusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazon.jetstream.v20151007.exceptions#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.jetstream.v20151007.exceptions#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceAlreadyExistsException":
      response = await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1CreatePartnerEventSourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartnerEventSourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreatePartnerEventSourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePartnerEventSourceResponse(
    data,
    context
  );
  const response: CreatePartnerEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePartnerEventSourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreatePartnerEventSourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartnerEventSourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.jetstream.v20151007.exceptions#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceAlreadyExistsException":
      response = await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeactivateEventSourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateEventSourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeactivateEventSourceCommandError(
      output,
      context
    );
  }
  const response: DeactivateEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeactivateEventSourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateEventSourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazon.jetstream.v20151007.exceptions#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeleteEventBusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventBusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteEventBusCommandError(output, context);
  }
  const response: DeleteEventBusCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteEventBusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventBusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeletePartnerEventSourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartnerEventSourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeletePartnerEventSourceCommandError(
      output,
      context
    );
  }
  const response: DeletePartnerEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeletePartnerEventSourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartnerEventSourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeleteRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteRuleCommandError(output, context);
  }
  const response: DeleteRuleCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ManagedRuleException":
    case "com.amazon.jetstream.v20151007.exceptions#ManagedRuleException":
      response = await deserializeAws_json1_1ManagedRuleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeEventBusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventBusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEventBusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventBusResponse(data, context);
  const response: DescribeEventBusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEventBusResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeEventBusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventBusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeEventSourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEventSourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventSourceResponse(data, context);
  const response: DescribeEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEventSourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeEventSourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribePartnerEventSourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePartnerEventSourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribePartnerEventSourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePartnerEventSourceResponse(
    data,
    context
  );
  const response: DescribePartnerEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribePartnerEventSourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribePartnerEventSourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePartnerEventSourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRuleResponse(data, context);
  const response: DescribeRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeRuleResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DisableRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableRuleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableRuleCommandError(output, context);
  }
  const response: DisableRuleCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisableRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableRuleCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ManagedRuleException":
    case "com.amazon.jetstream.v20151007.exceptions#ManagedRuleException":
      response = await deserializeAws_json1_1ManagedRuleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1EnableRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableRuleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableRuleCommandError(output, context);
  }
  const response: EnableRuleCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1EnableRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableRuleCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ManagedRuleException":
    case "com.amazon.jetstream.v20151007.exceptions#ManagedRuleException":
      response = await deserializeAws_json1_1ManagedRuleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListEventBusesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventBusesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListEventBusesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEventBusesResponse(data, context);
  const response: ListEventBusesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEventBusesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListEventBusesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventBusesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListEventSourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListEventSourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEventSourcesResponse(data, context);
  const response: ListEventSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEventSourcesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListEventSourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSourcesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListPartnerEventSourceAccountsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourceAccountsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListPartnerEventSourceAccountsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPartnerEventSourceAccountsResponse(
    data,
    context
  );
  const response: ListPartnerEventSourceAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPartnerEventSourceAccountsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListPartnerEventSourceAccountsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourceAccountsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListPartnerEventSourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListPartnerEventSourcesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPartnerEventSourcesResponse(
    data,
    context
  );
  const response: ListPartnerEventSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPartnerEventSourcesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListPartnerEventSourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourcesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListRuleNamesByTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleNamesByTargetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListRuleNamesByTargetCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRuleNamesByTargetResponse(data, context);
  const response: ListRuleNamesByTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRuleNamesByTargetResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListRuleNamesByTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleNamesByTargetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListRulesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRulesResponse(data, context);
  const response: ListRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRulesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListRulesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListTargetsByRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsByRuleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTargetsByRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTargetsByRuleResponse(data, context);
  const response: ListTargetsByRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTargetsByRuleResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTargetsByRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsByRuleCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1PutEventsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutEventsResponse(data, context);
  const response: PutEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutEventsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutEventsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1PutPartnerEventsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPartnerEventsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutPartnerEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutPartnerEventsResponse(data, context);
  const response: PutPartnerEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutPartnerEventsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutPartnerEventsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPartnerEventsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1PutPermissionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutPermissionCommandError(output, context);
  }
  const response: PutPermissionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutPermissionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyLengthExceededException":
    case "com.amazon.jetstream.v20151007.exceptions#PolicyLengthExceededException":
      response = await deserializeAws_json1_1PolicyLengthExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1PutRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRuleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRuleResponse(data, context);
  const response: PutRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutRuleResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRuleCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidEventPatternException":
    case "com.amazon.jetstream.v20151007.exceptions#InvalidEventPatternException":
      response = await deserializeAws_json1_1InvalidEventPatternExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.jetstream.v20151007.exceptions#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ManagedRuleException":
    case "com.amazon.jetstream.v20151007.exceptions#ManagedRuleException":
      response = await deserializeAws_json1_1ManagedRuleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1PutTargetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTargetsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutTargetsResponse(data, context);
  const response: PutTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutTargetsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutTargetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTargetsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.jetstream.v20151007.exceptions#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ManagedRuleException":
    case "com.amazon.jetstream.v20151007.exceptions#ManagedRuleException":
      response = await deserializeAws_json1_1ManagedRuleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1RemovePermissionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RemovePermissionCommandError(output, context);
  }
  const response: RemovePermissionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RemovePermissionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1RemoveTargetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTargetsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RemoveTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveTargetsResponse(data, context);
  const response: RemoveTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RemoveTargetsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RemoveTargetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTargetsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ManagedRuleException":
    case "com.amazon.jetstream.v20151007.exceptions#ManagedRuleException":
      response = await deserializeAws_json1_1ManagedRuleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ManagedRuleException":
    case "com.amazon.jetstream.v20151007.exceptions#ManagedRuleException":
      response = await deserializeAws_json1_1ManagedRuleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1TestEventPatternCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestEventPatternCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TestEventPatternCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TestEventPatternResponse(data, context);
  const response: TestEventPatternCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TestEventPatternResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TestEventPatternCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestEventPatternCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidEventPatternException":
    case "com.amazon.jetstream.v20151007.exceptions#InvalidEventPatternException":
      response = await deserializeAws_json1_1InvalidEventPatternExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazon.jetstream.v20151007.exceptions#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalException":
    case "com.amazon.jetstream.v20151007.exceptions#InternalException":
      response = await deserializeAws_json1_1InternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ManagedRuleException":
    case "com.amazon.jetstream.v20151007.exceptions#ManagedRuleException":
      response = await deserializeAws_json1_1ManagedRuleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.jetstream.v20151007.exceptions#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.jetstream.v20151007#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(
    body,
    context
  );
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    __type: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalException(
    body,
    context
  );
  const contents: InternalException = {
    name: "InternalException",
    __type: "InternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidEventPatternExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEventPatternException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidEventPatternException(
    body,
    context
  );
  const contents: InvalidEventPatternException = {
    name: "InvalidEventPatternException",
    __type: "InvalidEventPatternException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidStateException(
    body,
    context
  );
  const contents: InvalidStateException = {
    name: "InvalidStateException",
    __type: "InvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ManagedRuleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ManagedRuleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ManagedRuleException(
    body,
    context
  );
  const contents: ManagedRuleException = {
    name: "ManagedRuleException",
    __type: "ManagedRuleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PolicyLengthExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyLengthExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyLengthExceededException(
    body,
    context
  );
  const contents: PolicyLengthExceededException = {
    name: "PolicyLengthExceededException",
    __type: "PolicyLengthExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(
    body,
    context
  );
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    __type: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1ActivateEventSourceRequest = (
  input: ActivateEventSourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1AwsVpcConfiguration = (
  input: AwsVpcConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AssignPublicIp !== undefined) {
    bodyParams["AssignPublicIp"] = input.AssignPublicIp;
  }
  if (input.SecurityGroups !== undefined) {
    bodyParams["SecurityGroups"] = serializeAws_json1_1StringList(
      input.SecurityGroups,
      context
    );
  }
  if (input.Subnets !== undefined) {
    bodyParams["Subnets"] = serializeAws_json1_1StringList(
      input.Subnets,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BatchArrayProperties = (
  input: BatchArrayProperties,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Size !== undefined) {
    bodyParams["Size"] = input.Size;
  }
  return bodyParams;
};

const serializeAws_json1_1BatchParameters = (
  input: BatchParameters,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ArrayProperties !== undefined) {
    bodyParams["ArrayProperties"] = serializeAws_json1_1BatchArrayProperties(
      input.ArrayProperties,
      context
    );
  }
  if (input.JobDefinition !== undefined) {
    bodyParams["JobDefinition"] = input.JobDefinition;
  }
  if (input.JobName !== undefined) {
    bodyParams["JobName"] = input.JobName;
  }
  if (input.RetryStrategy !== undefined) {
    bodyParams["RetryStrategy"] = serializeAws_json1_1BatchRetryStrategy(
      input.RetryStrategy,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BatchRetryStrategy = (
  input: BatchRetryStrategy,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Attempts !== undefined) {
    bodyParams["Attempts"] = input.Attempts;
  }
  return bodyParams;
};

const serializeAws_json1_1Condition = (
  input: Condition,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateEventBusRequest = (
  input: CreateEventBusRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EventSourceName !== undefined) {
    bodyParams["EventSourceName"] = input.EventSourceName;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1CreatePartnerEventSourceRequest = (
  input: CreatePartnerEventSourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Account !== undefined) {
    bodyParams["Account"] = input.Account;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DeactivateEventSourceRequest = (
  input: DeactivateEventSourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteEventBusRequest = (
  input: DeleteEventBusRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DeletePartnerEventSourceRequest = (
  input: DeletePartnerEventSourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Account !== undefined) {
    bodyParams["Account"] = input.Account;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteRuleRequest = (
  input: DeleteRuleRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EventBusName !== undefined) {
    bodyParams["EventBusName"] = input.EventBusName;
  }
  if (input.Force !== undefined) {
    bodyParams["Force"] = input.Force;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeEventBusRequest = (
  input: DescribeEventBusRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeEventSourceRequest = (
  input: DescribeEventSourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribePartnerEventSourceRequest = (
  input: DescribePartnerEventSourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeRuleRequest = (
  input: DescribeRuleRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EventBusName !== undefined) {
    bodyParams["EventBusName"] = input.EventBusName;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DisableRuleRequest = (
  input: DisableRuleRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EventBusName !== undefined) {
    bodyParams["EventBusName"] = input.EventBusName;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1EcsParameters = (
  input: EcsParameters,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Group !== undefined) {
    bodyParams["Group"] = input.Group;
  }
  if (input.LaunchType !== undefined) {
    bodyParams["LaunchType"] = input.LaunchType;
  }
  if (input.NetworkConfiguration !== undefined) {
    bodyParams[
      "NetworkConfiguration"
    ] = serializeAws_json1_1NetworkConfiguration(
      input.NetworkConfiguration,
      context
    );
  }
  if (input.PlatformVersion !== undefined) {
    bodyParams["PlatformVersion"] = input.PlatformVersion;
  }
  if (input.TaskCount !== undefined) {
    bodyParams["TaskCount"] = input.TaskCount;
  }
  if (input.TaskDefinitionArn !== undefined) {
    bodyParams["TaskDefinitionArn"] = input.TaskDefinitionArn;
  }
  return bodyParams;
};

const serializeAws_json1_1EnableRuleRequest = (
  input: EnableRuleRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EventBusName !== undefined) {
    bodyParams["EventBusName"] = input.EventBusName;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1EventResourceList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1InputTransformer = (
  input: InputTransformer,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.InputPathsMap !== undefined) {
    bodyParams["InputPathsMap"] = serializeAws_json1_1TransformerPaths(
      input.InputPathsMap,
      context
    );
  }
  if (input.InputTemplate !== undefined) {
    bodyParams["InputTemplate"] = input.InputTemplate;
  }
  return bodyParams;
};

const serializeAws_json1_1KinesisParameters = (
  input: KinesisParameters,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.PartitionKeyPath !== undefined) {
    bodyParams["PartitionKeyPath"] = input.PartitionKeyPath;
  }
  return bodyParams;
};

const serializeAws_json1_1ListEventBusesRequest = (
  input: ListEventBusesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NamePrefix !== undefined) {
    bodyParams["NamePrefix"] = input.NamePrefix;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListEventSourcesRequest = (
  input: ListEventSourcesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NamePrefix !== undefined) {
    bodyParams["NamePrefix"] = input.NamePrefix;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListPartnerEventSourceAccountsRequest = (
  input: ListPartnerEventSourceAccountsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EventSourceName !== undefined) {
    bodyParams["EventSourceName"] = input.EventSourceName;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListPartnerEventSourcesRequest = (
  input: ListPartnerEventSourcesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NamePrefix !== undefined) {
    bodyParams["NamePrefix"] = input.NamePrefix;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListRuleNamesByTargetRequest = (
  input: ListRuleNamesByTargetRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EventBusName !== undefined) {
    bodyParams["EventBusName"] = input.EventBusName;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.TargetArn !== undefined) {
    bodyParams["TargetArn"] = input.TargetArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ListRulesRequest = (
  input: ListRulesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EventBusName !== undefined) {
    bodyParams["EventBusName"] = input.EventBusName;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NamePrefix !== undefined) {
    bodyParams["NamePrefix"] = input.NamePrefix;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTargetsByRuleRequest = (
  input: ListTargetsByRuleRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EventBusName !== undefined) {
    bodyParams["EventBusName"] = input.EventBusName;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.Rule !== undefined) {
    bodyParams["Rule"] = input.Rule;
  }
  return bodyParams;
};

const serializeAws_json1_1NetworkConfiguration = (
  input: NetworkConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.awsvpcConfiguration !== undefined) {
    bodyParams["awsvpcConfiguration"] = serializeAws_json1_1AwsVpcConfiguration(
      input.awsvpcConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1PutEventsRequest = (
  input: PutEventsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Entries !== undefined) {
    bodyParams["Entries"] = serializeAws_json1_1PutEventsRequestEntryList(
      input.Entries,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1PutEventsRequestEntry = (
  input: PutEventsRequestEntry,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Detail !== undefined) {
    bodyParams["Detail"] = input.Detail;
  }
  if (input.DetailType !== undefined) {
    bodyParams["DetailType"] = input.DetailType;
  }
  if (input.EventBusName !== undefined) {
    bodyParams["EventBusName"] = input.EventBusName;
  }
  if (input.Resources !== undefined) {
    bodyParams["Resources"] = serializeAws_json1_1EventResourceList(
      input.Resources,
      context
    );
  }
  if (input.Source !== undefined) {
    bodyParams["Source"] = input.Source;
  }
  if (input.Time !== undefined) {
    bodyParams["Time"] = Math.round(input.Time.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1PutEventsRequestEntryList = (
  input: Array<PutEventsRequestEntry>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1PutEventsRequestEntry(entry, context)
  );
};

const serializeAws_json1_1PutPartnerEventsRequest = (
  input: PutPartnerEventsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Entries !== undefined) {
    bodyParams[
      "Entries"
    ] = serializeAws_json1_1PutPartnerEventsRequestEntryList(
      input.Entries,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1PutPartnerEventsRequestEntry = (
  input: PutPartnerEventsRequestEntry,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Detail !== undefined) {
    bodyParams["Detail"] = input.Detail;
  }
  if (input.DetailType !== undefined) {
    bodyParams["DetailType"] = input.DetailType;
  }
  if (input.Resources !== undefined) {
    bodyParams["Resources"] = serializeAws_json1_1EventResourceList(
      input.Resources,
      context
    );
  }
  if (input.Source !== undefined) {
    bodyParams["Source"] = input.Source;
  }
  if (input.Time !== undefined) {
    bodyParams["Time"] = Math.round(input.Time.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1PutPartnerEventsRequestEntryList = (
  input: Array<PutPartnerEventsRequestEntry>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1PutPartnerEventsRequestEntry(entry, context)
  );
};

const serializeAws_json1_1PutPermissionRequest = (
  input: PutPermissionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Action !== undefined) {
    bodyParams["Action"] = input.Action;
  }
  if (input.Condition !== undefined) {
    bodyParams["Condition"] = serializeAws_json1_1Condition(
      input.Condition,
      context
    );
  }
  if (input.EventBusName !== undefined) {
    bodyParams["EventBusName"] = input.EventBusName;
  }
  if (input.Principal !== undefined) {
    bodyParams["Principal"] = input.Principal;
  }
  if (input.StatementId !== undefined) {
    bodyParams["StatementId"] = input.StatementId;
  }
  return bodyParams;
};

const serializeAws_json1_1PutRuleRequest = (
  input: PutRuleRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.EventBusName !== undefined) {
    bodyParams["EventBusName"] = input.EventBusName;
  }
  if (input.EventPattern !== undefined) {
    bodyParams["EventPattern"] = input.EventPattern;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  if (input.ScheduleExpression !== undefined) {
    bodyParams["ScheduleExpression"] = input.ScheduleExpression;
  }
  if (input.State !== undefined) {
    bodyParams["State"] = input.State;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1PutTargetsRequest = (
  input: PutTargetsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EventBusName !== undefined) {
    bodyParams["EventBusName"] = input.EventBusName;
  }
  if (input.Rule !== undefined) {
    bodyParams["Rule"] = input.Rule;
  }
  if (input.Targets !== undefined) {
    bodyParams["Targets"] = serializeAws_json1_1TargetList(
      input.Targets,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RemovePermissionRequest = (
  input: RemovePermissionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EventBusName !== undefined) {
    bodyParams["EventBusName"] = input.EventBusName;
  }
  if (input.StatementId !== undefined) {
    bodyParams["StatementId"] = input.StatementId;
  }
  return bodyParams;
};

const serializeAws_json1_1RemoveTargetsRequest = (
  input: RemoveTargetsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EventBusName !== undefined) {
    bodyParams["EventBusName"] = input.EventBusName;
  }
  if (input.Force !== undefined) {
    bodyParams["Force"] = input.Force;
  }
  if (input.Ids !== undefined) {
    bodyParams["Ids"] = serializeAws_json1_1TargetIdList(input.Ids, context);
  }
  if (input.Rule !== undefined) {
    bodyParams["Rule"] = input.Rule;
  }
  return bodyParams;
};

const serializeAws_json1_1RunCommandParameters = (
  input: RunCommandParameters,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.RunCommandTargets !== undefined) {
    bodyParams["RunCommandTargets"] = serializeAws_json1_1RunCommandTargets(
      input.RunCommandTargets,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RunCommandTarget = (
  input: RunCommandTarget,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Values !== undefined) {
    bodyParams["Values"] = serializeAws_json1_1RunCommandTargetValues(
      input.Values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RunCommandTargetValues = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1RunCommandTargets = (
  input: Array<RunCommandTarget>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1RunCommandTarget(entry, context)
  );
};

const serializeAws_json1_1SqsParameters = (
  input: SqsParameters,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MessageGroupId !== undefined) {
    bodyParams["MessageGroupId"] = input.MessageGroupId;
  }
  return bodyParams;
};

const serializeAws_json1_1StringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1Target = (
  input: Target,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams["Arn"] = input.Arn;
  }
  if (input.BatchParameters !== undefined) {
    bodyParams["BatchParameters"] = serializeAws_json1_1BatchParameters(
      input.BatchParameters,
      context
    );
  }
  if (input.EcsParameters !== undefined) {
    bodyParams["EcsParameters"] = serializeAws_json1_1EcsParameters(
      input.EcsParameters,
      context
    );
  }
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.Input !== undefined) {
    bodyParams["Input"] = input.Input;
  }
  if (input.InputPath !== undefined) {
    bodyParams["InputPath"] = input.InputPath;
  }
  if (input.InputTransformer !== undefined) {
    bodyParams["InputTransformer"] = serializeAws_json1_1InputTransformer(
      input.InputTransformer,
      context
    );
  }
  if (input.KinesisParameters !== undefined) {
    bodyParams["KinesisParameters"] = serializeAws_json1_1KinesisParameters(
      input.KinesisParameters,
      context
    );
  }
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  if (input.RunCommandParameters !== undefined) {
    bodyParams[
      "RunCommandParameters"
    ] = serializeAws_json1_1RunCommandParameters(
      input.RunCommandParameters,
      context
    );
  }
  if (input.SqsParameters !== undefined) {
    bodyParams["SqsParameters"] = serializeAws_json1_1SqsParameters(
      input.SqsParameters,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1TargetIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1TargetList = (
  input: Array<Target>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Target(entry, context));
};

const serializeAws_json1_1TestEventPatternRequest = (
  input: TestEventPatternRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Event !== undefined) {
    bodyParams["Event"] = input.Event;
  }
  if (input.EventPattern !== undefined) {
    bodyParams["EventPattern"] = input.EventPattern;
  }
  return bodyParams;
};

const serializeAws_json1_1TransformerPaths = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_json1_1AwsVpcConfiguration = (
  output: any,
  context: __SerdeContext
): AwsVpcConfiguration => {
  let contents: any = {
    __type: "AwsVpcConfiguration",
    AssignPublicIp: undefined,
    SecurityGroups: undefined,
    Subnets: undefined
  };
  if (output.AssignPublicIp !== undefined) {
    contents.AssignPublicIp = output.AssignPublicIp;
  }
  if (output.SecurityGroups !== undefined) {
    contents.SecurityGroups = deserializeAws_json1_1StringList(
      output.SecurityGroups,
      context
    );
  }
  if (output.Subnets !== undefined) {
    contents.Subnets = deserializeAws_json1_1StringList(
      output.Subnets,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchArrayProperties = (
  output: any,
  context: __SerdeContext
): BatchArrayProperties => {
  let contents: any = {
    __type: "BatchArrayProperties",
    Size: undefined
  };
  if (output.Size !== undefined) {
    contents.Size = output.Size;
  }
  return contents;
};

const deserializeAws_json1_1BatchParameters = (
  output: any,
  context: __SerdeContext
): BatchParameters => {
  let contents: any = {
    __type: "BatchParameters",
    ArrayProperties: undefined,
    JobDefinition: undefined,
    JobName: undefined,
    RetryStrategy: undefined
  };
  if (output.ArrayProperties !== undefined) {
    contents.ArrayProperties = deserializeAws_json1_1BatchArrayProperties(
      output.ArrayProperties,
      context
    );
  }
  if (output.JobDefinition !== undefined) {
    contents.JobDefinition = output.JobDefinition;
  }
  if (output.JobName !== undefined) {
    contents.JobName = output.JobName;
  }
  if (output.RetryStrategy !== undefined) {
    contents.RetryStrategy = deserializeAws_json1_1BatchRetryStrategy(
      output.RetryStrategy,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchRetryStrategy = (
  output: any,
  context: __SerdeContext
): BatchRetryStrategy => {
  let contents: any = {
    __type: "BatchRetryStrategy",
    Attempts: undefined
  };
  if (output.Attempts !== undefined) {
    contents.Attempts = output.Attempts;
  }
  return contents;
};

const deserializeAws_json1_1CreateEventBusResponse = (
  output: any,
  context: __SerdeContext
): CreateEventBusResponse => {
  let contents: any = {
    __type: "CreateEventBusResponse",
    EventBusArn: undefined
  };
  if (output.EventBusArn !== undefined) {
    contents.EventBusArn = output.EventBusArn;
  }
  return contents;
};

const deserializeAws_json1_1CreatePartnerEventSourceResponse = (
  output: any,
  context: __SerdeContext
): CreatePartnerEventSourceResponse => {
  let contents: any = {
    __type: "CreatePartnerEventSourceResponse",
    EventSourceArn: undefined
  };
  if (output.EventSourceArn !== undefined) {
    contents.EventSourceArn = output.EventSourceArn;
  }
  return contents;
};

const deserializeAws_json1_1DescribeEventBusResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventBusResponse => {
  let contents: any = {
    __type: "DescribeEventBusResponse",
    Arn: undefined,
    Name: undefined,
    Policy: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Policy !== undefined) {
    contents.Policy = output.Policy;
  }
  return contents;
};

const deserializeAws_json1_1DescribeEventSourceResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventSourceResponse => {
  let contents: any = {
    __type: "DescribeEventSourceResponse",
    Arn: undefined,
    CreatedBy: undefined,
    CreationTime: undefined,
    ExpirationTime: undefined,
    Name: undefined,
    State: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.CreatedBy !== undefined) {
    contents.CreatedBy = output.CreatedBy;
  }
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.ExpirationTime !== undefined) {
    contents.ExpirationTime = new Date(
      output.ExpirationTime % 1 != 0
        ? Math.round(output.ExpirationTime * 1000)
        : output.ExpirationTime
    );
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_json1_1DescribePartnerEventSourceResponse = (
  output: any,
  context: __SerdeContext
): DescribePartnerEventSourceResponse => {
  let contents: any = {
    __type: "DescribePartnerEventSourceResponse",
    Arn: undefined,
    Name: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1DescribeRuleResponse = (
  output: any,
  context: __SerdeContext
): DescribeRuleResponse => {
  let contents: any = {
    __type: "DescribeRuleResponse",
    Arn: undefined,
    Description: undefined,
    EventBusName: undefined,
    EventPattern: undefined,
    ManagedBy: undefined,
    Name: undefined,
    RoleArn: undefined,
    ScheduleExpression: undefined,
    State: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.EventBusName !== undefined) {
    contents.EventBusName = output.EventBusName;
  }
  if (output.EventPattern !== undefined) {
    contents.EventPattern = output.EventPattern;
  }
  if (output.ManagedBy !== undefined) {
    contents.ManagedBy = output.ManagedBy;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.RoleArn !== undefined) {
    contents.RoleArn = output.RoleArn;
  }
  if (output.ScheduleExpression !== undefined) {
    contents.ScheduleExpression = output.ScheduleExpression;
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_json1_1EcsParameters = (
  output: any,
  context: __SerdeContext
): EcsParameters => {
  let contents: any = {
    __type: "EcsParameters",
    Group: undefined,
    LaunchType: undefined,
    NetworkConfiguration: undefined,
    PlatformVersion: undefined,
    TaskCount: undefined,
    TaskDefinitionArn: undefined
  };
  if (output.Group !== undefined) {
    contents.Group = output.Group;
  }
  if (output.LaunchType !== undefined) {
    contents.LaunchType = output.LaunchType;
  }
  if (output.NetworkConfiguration !== undefined) {
    contents.NetworkConfiguration = deserializeAws_json1_1NetworkConfiguration(
      output.NetworkConfiguration,
      context
    );
  }
  if (output.PlatformVersion !== undefined) {
    contents.PlatformVersion = output.PlatformVersion;
  }
  if (output.TaskCount !== undefined) {
    contents.TaskCount = output.TaskCount;
  }
  if (output.TaskDefinitionArn !== undefined) {
    contents.TaskDefinitionArn = output.TaskDefinitionArn;
  }
  return contents;
};

const deserializeAws_json1_1EventBus = (
  output: any,
  context: __SerdeContext
): EventBus => {
  let contents: any = {
    __type: "EventBus",
    Arn: undefined,
    Name: undefined,
    Policy: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Policy !== undefined) {
    contents.Policy = output.Policy;
  }
  return contents;
};

const deserializeAws_json1_1EventBusList = (
  output: any,
  context: __SerdeContext
): Array<EventBus> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EventBus(entry, context)
  );
};

const deserializeAws_json1_1EventSource = (
  output: any,
  context: __SerdeContext
): EventSource => {
  let contents: any = {
    __type: "EventSource",
    Arn: undefined,
    CreatedBy: undefined,
    CreationTime: undefined,
    ExpirationTime: undefined,
    Name: undefined,
    State: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.CreatedBy !== undefined) {
    contents.CreatedBy = output.CreatedBy;
  }
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.ExpirationTime !== undefined) {
    contents.ExpirationTime = new Date(
      output.ExpirationTime % 1 != 0
        ? Math.round(output.ExpirationTime * 1000)
        : output.ExpirationTime
    );
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_json1_1EventSourceList = (
  output: any,
  context: __SerdeContext
): Array<EventSource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EventSource(entry, context)
  );
};

const deserializeAws_json1_1InputTransformer = (
  output: any,
  context: __SerdeContext
): InputTransformer => {
  let contents: any = {
    __type: "InputTransformer",
    InputPathsMap: undefined,
    InputTemplate: undefined
  };
  if (output.InputPathsMap !== undefined) {
    contents.InputPathsMap = deserializeAws_json1_1TransformerPaths(
      output.InputPathsMap,
      context
    );
  }
  if (output.InputTemplate !== undefined) {
    contents.InputTemplate = output.InputTemplate;
  }
  return contents;
};

const deserializeAws_json1_1KinesisParameters = (
  output: any,
  context: __SerdeContext
): KinesisParameters => {
  let contents: any = {
    __type: "KinesisParameters",
    PartitionKeyPath: undefined
  };
  if (output.PartitionKeyPath !== undefined) {
    contents.PartitionKeyPath = output.PartitionKeyPath;
  }
  return contents;
};

const deserializeAws_json1_1ListEventBusesResponse = (
  output: any,
  context: __SerdeContext
): ListEventBusesResponse => {
  let contents: any = {
    __type: "ListEventBusesResponse",
    EventBuses: undefined,
    NextToken: undefined
  };
  if (output.EventBuses !== undefined) {
    contents.EventBuses = deserializeAws_json1_1EventBusList(
      output.EventBuses,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListEventSourcesResponse = (
  output: any,
  context: __SerdeContext
): ListEventSourcesResponse => {
  let contents: any = {
    __type: "ListEventSourcesResponse",
    EventSources: undefined,
    NextToken: undefined
  };
  if (output.EventSources !== undefined) {
    contents.EventSources = deserializeAws_json1_1EventSourceList(
      output.EventSources,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListPartnerEventSourceAccountsResponse = (
  output: any,
  context: __SerdeContext
): ListPartnerEventSourceAccountsResponse => {
  let contents: any = {
    __type: "ListPartnerEventSourceAccountsResponse",
    NextToken: undefined,
    PartnerEventSourceAccounts: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.PartnerEventSourceAccounts !== undefined) {
    contents.PartnerEventSourceAccounts = deserializeAws_json1_1PartnerEventSourceAccountList(
      output.PartnerEventSourceAccounts,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListPartnerEventSourcesResponse = (
  output: any,
  context: __SerdeContext
): ListPartnerEventSourcesResponse => {
  let contents: any = {
    __type: "ListPartnerEventSourcesResponse",
    NextToken: undefined,
    PartnerEventSources: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.PartnerEventSources !== undefined) {
    contents.PartnerEventSources = deserializeAws_json1_1PartnerEventSourceList(
      output.PartnerEventSources,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListRuleNamesByTargetResponse = (
  output: any,
  context: __SerdeContext
): ListRuleNamesByTargetResponse => {
  let contents: any = {
    __type: "ListRuleNamesByTargetResponse",
    NextToken: undefined,
    RuleNames: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.RuleNames !== undefined) {
    contents.RuleNames = deserializeAws_json1_1RuleNameList(
      output.RuleNames,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListRulesResponse = (
  output: any,
  context: __SerdeContext
): ListRulesResponse => {
  let contents: any = {
    __type: "ListRulesResponse",
    NextToken: undefined,
    Rules: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Rules !== undefined) {
    contents.Rules = deserializeAws_json1_1RuleResponseList(
      output.Rules,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  let contents: any = {
    __type: "ListTagsForResourceResponse",
    Tags: undefined
  };
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1ListTargetsByRuleResponse = (
  output: any,
  context: __SerdeContext
): ListTargetsByRuleResponse => {
  let contents: any = {
    __type: "ListTargetsByRuleResponse",
    NextToken: undefined,
    Targets: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Targets !== undefined) {
    contents.Targets = deserializeAws_json1_1TargetList(
      output.Targets,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1NetworkConfiguration = (
  output: any,
  context: __SerdeContext
): NetworkConfiguration => {
  let contents: any = {
    __type: "NetworkConfiguration",
    awsvpcConfiguration: undefined
  };
  if (output.awsvpcConfiguration !== undefined) {
    contents.awsvpcConfiguration = deserializeAws_json1_1AwsVpcConfiguration(
      output.awsvpcConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PartnerEventSource = (
  output: any,
  context: __SerdeContext
): PartnerEventSource => {
  let contents: any = {
    __type: "PartnerEventSource",
    Arn: undefined,
    Name: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1PartnerEventSourceAccount = (
  output: any,
  context: __SerdeContext
): PartnerEventSourceAccount => {
  let contents: any = {
    __type: "PartnerEventSourceAccount",
    Account: undefined,
    CreationTime: undefined,
    ExpirationTime: undefined,
    State: undefined
  };
  if (output.Account !== undefined) {
    contents.Account = output.Account;
  }
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.ExpirationTime !== undefined) {
    contents.ExpirationTime = new Date(
      output.ExpirationTime % 1 != 0
        ? Math.round(output.ExpirationTime * 1000)
        : output.ExpirationTime
    );
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_json1_1PartnerEventSourceAccountList = (
  output: any,
  context: __SerdeContext
): Array<PartnerEventSourceAccount> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PartnerEventSourceAccount(entry, context)
  );
};

const deserializeAws_json1_1PartnerEventSourceList = (
  output: any,
  context: __SerdeContext
): Array<PartnerEventSource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PartnerEventSource(entry, context)
  );
};

const deserializeAws_json1_1PutEventsResponse = (
  output: any,
  context: __SerdeContext
): PutEventsResponse => {
  let contents: any = {
    __type: "PutEventsResponse",
    Entries: undefined,
    FailedEntryCount: undefined
  };
  if (output.Entries !== undefined) {
    contents.Entries = deserializeAws_json1_1PutEventsResultEntryList(
      output.Entries,
      context
    );
  }
  if (output.FailedEntryCount !== undefined) {
    contents.FailedEntryCount = output.FailedEntryCount;
  }
  return contents;
};

const deserializeAws_json1_1PutEventsResultEntry = (
  output: any,
  context: __SerdeContext
): PutEventsResultEntry => {
  let contents: any = {
    __type: "PutEventsResultEntry",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    EventId: undefined
  };
  if (output.ErrorCode !== undefined) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.EventId !== undefined) {
    contents.EventId = output.EventId;
  }
  return contents;
};

const deserializeAws_json1_1PutEventsResultEntryList = (
  output: any,
  context: __SerdeContext
): Array<PutEventsResultEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PutEventsResultEntry(entry, context)
  );
};

const deserializeAws_json1_1PutPartnerEventsResponse = (
  output: any,
  context: __SerdeContext
): PutPartnerEventsResponse => {
  let contents: any = {
    __type: "PutPartnerEventsResponse",
    Entries: undefined,
    FailedEntryCount: undefined
  };
  if (output.Entries !== undefined) {
    contents.Entries = deserializeAws_json1_1PutPartnerEventsResultEntryList(
      output.Entries,
      context
    );
  }
  if (output.FailedEntryCount !== undefined) {
    contents.FailedEntryCount = output.FailedEntryCount;
  }
  return contents;
};

const deserializeAws_json1_1PutPartnerEventsResultEntry = (
  output: any,
  context: __SerdeContext
): PutPartnerEventsResultEntry => {
  let contents: any = {
    __type: "PutPartnerEventsResultEntry",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    EventId: undefined
  };
  if (output.ErrorCode !== undefined) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.EventId !== undefined) {
    contents.EventId = output.EventId;
  }
  return contents;
};

const deserializeAws_json1_1PutPartnerEventsResultEntryList = (
  output: any,
  context: __SerdeContext
): Array<PutPartnerEventsResultEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PutPartnerEventsResultEntry(entry, context)
  );
};

const deserializeAws_json1_1PutRuleResponse = (
  output: any,
  context: __SerdeContext
): PutRuleResponse => {
  let contents: any = {
    __type: "PutRuleResponse",
    RuleArn: undefined
  };
  if (output.RuleArn !== undefined) {
    contents.RuleArn = output.RuleArn;
  }
  return contents;
};

const deserializeAws_json1_1PutTargetsResponse = (
  output: any,
  context: __SerdeContext
): PutTargetsResponse => {
  let contents: any = {
    __type: "PutTargetsResponse",
    FailedEntries: undefined,
    FailedEntryCount: undefined
  };
  if (output.FailedEntries !== undefined) {
    contents.FailedEntries = deserializeAws_json1_1PutTargetsResultEntryList(
      output.FailedEntries,
      context
    );
  }
  if (output.FailedEntryCount !== undefined) {
    contents.FailedEntryCount = output.FailedEntryCount;
  }
  return contents;
};

const deserializeAws_json1_1PutTargetsResultEntry = (
  output: any,
  context: __SerdeContext
): PutTargetsResultEntry => {
  let contents: any = {
    __type: "PutTargetsResultEntry",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    TargetId: undefined
  };
  if (output.ErrorCode !== undefined) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.TargetId !== undefined) {
    contents.TargetId = output.TargetId;
  }
  return contents;
};

const deserializeAws_json1_1PutTargetsResultEntryList = (
  output: any,
  context: __SerdeContext
): Array<PutTargetsResultEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PutTargetsResultEntry(entry, context)
  );
};

const deserializeAws_json1_1RemoveTargetsResponse = (
  output: any,
  context: __SerdeContext
): RemoveTargetsResponse => {
  let contents: any = {
    __type: "RemoveTargetsResponse",
    FailedEntries: undefined,
    FailedEntryCount: undefined
  };
  if (output.FailedEntries !== undefined) {
    contents.FailedEntries = deserializeAws_json1_1RemoveTargetsResultEntryList(
      output.FailedEntries,
      context
    );
  }
  if (output.FailedEntryCount !== undefined) {
    contents.FailedEntryCount = output.FailedEntryCount;
  }
  return contents;
};

const deserializeAws_json1_1RemoveTargetsResultEntry = (
  output: any,
  context: __SerdeContext
): RemoveTargetsResultEntry => {
  let contents: any = {
    __type: "RemoveTargetsResultEntry",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    TargetId: undefined
  };
  if (output.ErrorCode !== undefined) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.TargetId !== undefined) {
    contents.TargetId = output.TargetId;
  }
  return contents;
};

const deserializeAws_json1_1RemoveTargetsResultEntryList = (
  output: any,
  context: __SerdeContext
): Array<RemoveTargetsResultEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RemoveTargetsResultEntry(entry, context)
  );
};

const deserializeAws_json1_1Rule = (
  output: any,
  context: __SerdeContext
): Rule => {
  let contents: any = {
    __type: "Rule",
    Arn: undefined,
    Description: undefined,
    EventBusName: undefined,
    EventPattern: undefined,
    ManagedBy: undefined,
    Name: undefined,
    RoleArn: undefined,
    ScheduleExpression: undefined,
    State: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.EventBusName !== undefined) {
    contents.EventBusName = output.EventBusName;
  }
  if (output.EventPattern !== undefined) {
    contents.EventPattern = output.EventPattern;
  }
  if (output.ManagedBy !== undefined) {
    contents.ManagedBy = output.ManagedBy;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.RoleArn !== undefined) {
    contents.RoleArn = output.RoleArn;
  }
  if (output.ScheduleExpression !== undefined) {
    contents.ScheduleExpression = output.ScheduleExpression;
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_json1_1RuleNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1RuleResponseList = (
  output: any,
  context: __SerdeContext
): Array<Rule> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Rule(entry, context)
  );
};

const deserializeAws_json1_1RunCommandParameters = (
  output: any,
  context: __SerdeContext
): RunCommandParameters => {
  let contents: any = {
    __type: "RunCommandParameters",
    RunCommandTargets: undefined
  };
  if (output.RunCommandTargets !== undefined) {
    contents.RunCommandTargets = deserializeAws_json1_1RunCommandTargets(
      output.RunCommandTargets,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RunCommandTarget = (
  output: any,
  context: __SerdeContext
): RunCommandTarget => {
  let contents: any = {
    __type: "RunCommandTarget",
    Key: undefined,
    Values: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Values !== undefined) {
    contents.Values = deserializeAws_json1_1RunCommandTargetValues(
      output.Values,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RunCommandTargetValues = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1RunCommandTargets = (
  output: any,
  context: __SerdeContext
): Array<RunCommandTarget> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RunCommandTarget(entry, context)
  );
};

const deserializeAws_json1_1SqsParameters = (
  output: any,
  context: __SerdeContext
): SqsParameters => {
  let contents: any = {
    __type: "SqsParameters",
    MessageGroupId: undefined
  };
  if (output.MessageGroupId !== undefined) {
    contents.MessageGroupId = output.MessageGroupId;
  }
  return contents;
};

const deserializeAws_json1_1StringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  let contents: any = {
    __type: "TagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1Target = (
  output: any,
  context: __SerdeContext
): Target => {
  let contents: any = {
    __type: "Target",
    Arn: undefined,
    BatchParameters: undefined,
    EcsParameters: undefined,
    Id: undefined,
    Input: undefined,
    InputPath: undefined,
    InputTransformer: undefined,
    KinesisParameters: undefined,
    RoleArn: undefined,
    RunCommandParameters: undefined,
    SqsParameters: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.BatchParameters !== undefined) {
    contents.BatchParameters = deserializeAws_json1_1BatchParameters(
      output.BatchParameters,
      context
    );
  }
  if (output.EcsParameters !== undefined) {
    contents.EcsParameters = deserializeAws_json1_1EcsParameters(
      output.EcsParameters,
      context
    );
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Input !== undefined) {
    contents.Input = output.Input;
  }
  if (output.InputPath !== undefined) {
    contents.InputPath = output.InputPath;
  }
  if (output.InputTransformer !== undefined) {
    contents.InputTransformer = deserializeAws_json1_1InputTransformer(
      output.InputTransformer,
      context
    );
  }
  if (output.KinesisParameters !== undefined) {
    contents.KinesisParameters = deserializeAws_json1_1KinesisParameters(
      output.KinesisParameters,
      context
    );
  }
  if (output.RoleArn !== undefined) {
    contents.RoleArn = output.RoleArn;
  }
  if (output.RunCommandParameters !== undefined) {
    contents.RunCommandParameters = deserializeAws_json1_1RunCommandParameters(
      output.RunCommandParameters,
      context
    );
  }
  if (output.SqsParameters !== undefined) {
    contents.SqsParameters = deserializeAws_json1_1SqsParameters(
      output.SqsParameters,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1TargetList = (
  output: any,
  context: __SerdeContext
): Array<Target> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Target(entry, context)
  );
};

const deserializeAws_json1_1TestEventPatternResponse = (
  output: any,
  context: __SerdeContext
): TestEventPatternResponse => {
  let contents: any = {
    __type: "TestEventPatternResponse",
    Result: undefined
  };
  if (output.Result !== undefined) {
    contents.Result = output.Result;
  }
  return contents;
};

const deserializeAws_json1_1TransformerPaths = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  let contents: any = {
    __type: "UntagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  let contents: any = {
    __type: "ConcurrentModificationException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InternalException = (
  output: any,
  context: __SerdeContext
): InternalException => {
  let contents: any = {
    __type: "InternalException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidEventPatternException = (
  output: any,
  context: __SerdeContext
): InvalidEventPatternException => {
  let contents: any = {
    __type: "InvalidEventPatternException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidStateException = (
  output: any,
  context: __SerdeContext
): InvalidStateException => {
  let contents: any = {
    __type: "InvalidStateException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ManagedRuleException = (
  output: any,
  context: __SerdeContext
): ManagedRuleException => {
  let contents: any = {
    __type: "ManagedRuleException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PolicyLengthExceededException = (
  output: any,
  context: __SerdeContext
): PolicyLengthExceededException => {
  let contents: any = {
    __type: "PolicyLengthExceededException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  let contents: any = {
    __type: "ResourceAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  return context.streamCollector(streamBody) || new Uint8Array();
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
