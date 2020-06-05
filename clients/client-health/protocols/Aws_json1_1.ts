import {
  DescribeAffectedAccountsForOrganizationCommandInput,
  DescribeAffectedAccountsForOrganizationCommandOutput
} from "../commands/DescribeAffectedAccountsForOrganizationCommand";
import {
  DescribeAffectedEntitiesCommandInput,
  DescribeAffectedEntitiesCommandOutput
} from "../commands/DescribeAffectedEntitiesCommand";
import {
  DescribeAffectedEntitiesForOrganizationCommandInput,
  DescribeAffectedEntitiesForOrganizationCommandOutput
} from "../commands/DescribeAffectedEntitiesForOrganizationCommand";
import {
  DescribeEntityAggregatesCommandInput,
  DescribeEntityAggregatesCommandOutput
} from "../commands/DescribeEntityAggregatesCommand";
import {
  DescribeEventAggregatesCommandInput,
  DescribeEventAggregatesCommandOutput
} from "../commands/DescribeEventAggregatesCommand";
import {
  DescribeEventDetailsCommandInput,
  DescribeEventDetailsCommandOutput
} from "../commands/DescribeEventDetailsCommand";
import {
  DescribeEventDetailsForOrganizationCommandInput,
  DescribeEventDetailsForOrganizationCommandOutput
} from "../commands/DescribeEventDetailsForOrganizationCommand";
import {
  DescribeEventTypesCommandInput,
  DescribeEventTypesCommandOutput
} from "../commands/DescribeEventTypesCommand";
import {
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput
} from "../commands/DescribeEventsCommand";
import {
  DescribeEventsForOrganizationCommandInput,
  DescribeEventsForOrganizationCommandOutput
} from "../commands/DescribeEventsForOrganizationCommand";
import {
  DescribeHealthServiceStatusForOrganizationCommandInput,
  DescribeHealthServiceStatusForOrganizationCommandOutput
} from "../commands/DescribeHealthServiceStatusForOrganizationCommand";
import {
  DisableHealthServiceAccessForOrganizationCommandInput,
  DisableHealthServiceAccessForOrganizationCommandOutput
} from "../commands/DisableHealthServiceAccessForOrganizationCommand";
import {
  EnableHealthServiceAccessForOrganizationCommandInput,
  EnableHealthServiceAccessForOrganizationCommandOutput
} from "../commands/EnableHealthServiceAccessForOrganizationCommand";
import {
  AffectedEntity,
  ConcurrentModificationException,
  DateTimeRange,
  DescribeAffectedAccountsForOrganizationRequest,
  DescribeAffectedAccountsForOrganizationResponse,
  DescribeAffectedEntitiesForOrganizationRequest,
  DescribeAffectedEntitiesForOrganizationResponse,
  DescribeAffectedEntitiesRequest,
  DescribeAffectedEntitiesResponse,
  DescribeEntityAggregatesRequest,
  DescribeEntityAggregatesResponse,
  DescribeEventAggregatesRequest,
  DescribeEventAggregatesResponse,
  DescribeEventDetailsForOrganizationRequest,
  DescribeEventDetailsForOrganizationResponse,
  DescribeEventDetailsRequest,
  DescribeEventDetailsResponse,
  DescribeEventTypesRequest,
  DescribeEventTypesResponse,
  DescribeEventsForOrganizationRequest,
  DescribeEventsForOrganizationResponse,
  DescribeEventsRequest,
  DescribeEventsResponse,
  DescribeHealthServiceStatusForOrganizationResponse,
  EntityAggregate,
  EntityFilter,
  EntityStatusCode,
  Event,
  EventAccountFilter,
  EventAggregate,
  EventDescription,
  EventDetails,
  EventDetailsErrorItem,
  EventFilter,
  EventStatusCode,
  EventType,
  EventTypeFilter,
  EventTypeStringCategory,
  InvalidPaginationToken,
  OrganizationAffectedEntitiesErrorItem,
  OrganizationEvent,
  OrganizationEventDetails,
  OrganizationEventDetailsErrorItem,
  OrganizationEventFilter,
  UnsupportedLocale
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand = async (
  input: DescribeAffectedAccountsForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHealth_20160804.DescribeAffectedAccountsForOrganization"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAffectedAccountsForOrganizationRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAffectedEntitiesCommand = async (
  input: DescribeAffectedEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHealth_20160804.DescribeAffectedEntities"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAffectedEntitiesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand = async (
  input: DescribeAffectedEntitiesForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHealth_20160804.DescribeAffectedEntitiesForOrganization"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAffectedEntitiesForOrganizationRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEntityAggregatesCommand = async (
  input: DescribeEntityAggregatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHealth_20160804.DescribeEntityAggregates"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEntityAggregatesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventAggregatesCommand = async (
  input: DescribeEventAggregatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHealth_20160804.DescribeEventAggregates"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEventAggregatesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventDetailsCommand = async (
  input: DescribeEventDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHealth_20160804.DescribeEventDetails"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEventDetailsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventDetailsForOrganizationCommand = async (
  input: DescribeEventDetailsForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHealth_20160804.DescribeEventDetailsForOrganization"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEventDetailsForOrganizationRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventsCommand = async (
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHealth_20160804.DescribeEvents"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEventsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventsForOrganizationCommand = async (
  input: DescribeEventsForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHealth_20160804.DescribeEventsForOrganization"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEventsForOrganizationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventTypesCommand = async (
  input: DescribeEventTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHealth_20160804.DescribeEventTypes"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEventTypesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand = async (
  input: DescribeHealthServiceStatusForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AWSHealth_20160804.DescribeHealthServiceStatusForOrganization"
  };
  return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
};

export const serializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand = async (
  input: DisableHealthServiceAccessForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AWSHealth_20160804.DisableHealthServiceAccessForOrganization"
  };
  return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
};

export const serializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand = async (
  input: EnableHealthServiceAccessForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AWSHealth_20160804.EnableHealthServiceAccessForOrganization"
  };
  return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
};

export const deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedAccountsForOrganizationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAffectedAccountsForOrganizationResponse(
    data,
    context
  );
  const response: DescribeAffectedAccountsForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAffectedAccountsForOrganizationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedAccountsForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeAffectedEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedEntitiesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAffectedEntitiesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAffectedEntitiesResponse(
    data,
    context
  );
  const response: DescribeAffectedEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAffectedEntitiesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAffectedEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLocaleResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationResponse(
    data,
    context
  );
  const response: DescribeAffectedEntitiesForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAffectedEntitiesForOrganizationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLocaleResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeEntityAggregatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityAggregatesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEntityAggregatesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEntityAggregatesResponse(
    data,
    context
  );
  const response: DescribeEntityAggregatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEntityAggregatesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEntityAggregatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityAggregatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeEventAggregatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventAggregatesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEventAggregatesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventAggregatesResponse(
    data,
    context
  );
  const response: DescribeEventAggregatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEventAggregatesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventAggregatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventAggregatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeEventDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventDetailsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEventDetailsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventDetailsResponse(data, context);
  const response: DescribeEventDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEventDetailsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLocaleResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeEventDetailsForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventDetailsForOrganizationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEventDetailsForOrganizationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventDetailsForOrganizationResponse(
    data,
    context
  );
  const response: DescribeEventDetailsForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEventDetailsForOrganizationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventDetailsForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventDetailsForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLocaleResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventsResponse(data, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEventsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLocaleResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeEventsForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsForOrganizationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEventsForOrganizationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventsForOrganizationResponse(
    data,
    context
  );
  const response: DescribeEventsForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEventsForOrganizationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventsForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLocaleResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeEventTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventTypesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEventTypesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventTypesResponse(data, context);
  const response: DescribeEventTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEventTypesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLocaleResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHealthServiceStatusForOrganizationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationResponse(
    data,
    context
  );
  const response: DescribeHealthServiceStatusForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeHealthServiceStatusForOrganizationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHealthServiceStatusForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableHealthServiceAccessForOrganizationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DisableHealthServiceAccessForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableHealthServiceAccessForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.health#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableHealthServiceAccessForOrganizationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: EnableHealthServiceAccessForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableHealthServiceAccessForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.health#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

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
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidPaginationTokenResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationToken> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPaginationToken(
    body,
    context
  );
  const contents: InvalidPaginationToken = {
    name: "InvalidPaginationToken",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedLocaleResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedLocale> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedLocale(
    body,
    context
  );
  const contents: UnsupportedLocale = {
    name: "UnsupportedLocale",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1availabilityZones = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1awsAccountIdsList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1DateTimeRange = (
  input: DateTimeRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.from !== undefined && {
      from: Math.round(input.from.getTime() / 1000)
    }),
    ...(input.to !== undefined && { to: Math.round(input.to.getTime() / 1000) })
  };
};

const serializeAws_json1_1dateTimeRangeList = (
  input: DateTimeRange[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1DateTimeRange(entry, context));
};

const serializeAws_json1_1DescribeAffectedAccountsForOrganizationRequest = (
  input: DescribeAffectedAccountsForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.eventArn !== undefined && { eventArn: input.eventArn }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1DescribeAffectedEntitiesForOrganizationRequest = (
  input: DescribeAffectedEntitiesForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.locale !== undefined && { locale: input.locale }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.organizationEntityFilters !== undefined && {
      organizationEntityFilters: serializeAws_json1_1OrganizationEntityFiltersList(
        input.organizationEntityFilters,
        context
      )
    })
  };
};

const serializeAws_json1_1DescribeAffectedEntitiesRequest = (
  input: DescribeAffectedEntitiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filter !== undefined && {
      filter: serializeAws_json1_1EntityFilter(input.filter, context)
    }),
    ...(input.locale !== undefined && { locale: input.locale }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1DescribeEntityAggregatesRequest = (
  input: DescribeEntityAggregatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.eventArns !== undefined && {
      eventArns: serializeAws_json1_1EventArnsList(input.eventArns, context)
    })
  };
};

const serializeAws_json1_1DescribeEventAggregatesRequest = (
  input: DescribeEventAggregatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.aggregateField !== undefined && {
      aggregateField: input.aggregateField
    }),
    ...(input.filter !== undefined && {
      filter: serializeAws_json1_1EventFilter(input.filter, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1DescribeEventDetailsForOrganizationRequest = (
  input: DescribeEventDetailsForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.locale !== undefined && { locale: input.locale }),
    ...(input.organizationEventDetailFilters !== undefined && {
      organizationEventDetailFilters: serializeAws_json1_1OrganizationEventDetailFiltersList(
        input.organizationEventDetailFilters,
        context
      )
    })
  };
};

const serializeAws_json1_1DescribeEventDetailsRequest = (
  input: DescribeEventDetailsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.eventArns !== undefined && {
      eventArns: serializeAws_json1_1eventArnList(input.eventArns, context)
    }),
    ...(input.locale !== undefined && { locale: input.locale })
  };
};

const serializeAws_json1_1DescribeEventsForOrganizationRequest = (
  input: DescribeEventsForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filter !== undefined && {
      filter: serializeAws_json1_1OrganizationEventFilter(input.filter, context)
    }),
    ...(input.locale !== undefined && { locale: input.locale }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1DescribeEventsRequest = (
  input: DescribeEventsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filter !== undefined && {
      filter: serializeAws_json1_1EventFilter(input.filter, context)
    }),
    ...(input.locale !== undefined && { locale: input.locale }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1DescribeEventTypesRequest = (
  input: DescribeEventTypesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filter !== undefined && {
      filter: serializeAws_json1_1EventTypeFilter(input.filter, context)
    }),
    ...(input.locale !== undefined && { locale: input.locale }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1entityArnList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1EntityFilter = (
  input: EntityFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.entityArns !== undefined && {
      entityArns: serializeAws_json1_1entityArnList(input.entityArns, context)
    }),
    ...(input.entityValues !== undefined && {
      entityValues: serializeAws_json1_1entityValueList(
        input.entityValues,
        context
      )
    }),
    ...(input.eventArns !== undefined && {
      eventArns: serializeAws_json1_1eventArnList(input.eventArns, context)
    }),
    ...(input.lastUpdatedTimes !== undefined && {
      lastUpdatedTimes: serializeAws_json1_1dateTimeRangeList(
        input.lastUpdatedTimes,
        context
      )
    }),
    ...(input.statusCodes !== undefined && {
      statusCodes: serializeAws_json1_1entityStatusCodeList(
        input.statusCodes,
        context
      )
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1tagFilter(input.tags, context)
    })
  };
};

const serializeAws_json1_1entityStatusCodeList = (
  input: (EntityStatusCode | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1entityValueList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1EventAccountFilter = (
  input: EventAccountFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.awsAccountId !== undefined && {
      awsAccountId: input.awsAccountId
    }),
    ...(input.eventArn !== undefined && { eventArn: input.eventArn })
  };
};

const serializeAws_json1_1eventArnList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1EventArnsList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1EventFilter = (
  input: EventFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.availabilityZones !== undefined && {
      availabilityZones: serializeAws_json1_1availabilityZones(
        input.availabilityZones,
        context
      )
    }),
    ...(input.endTimes !== undefined && {
      endTimes: serializeAws_json1_1dateTimeRangeList(input.endTimes, context)
    }),
    ...(input.entityArns !== undefined && {
      entityArns: serializeAws_json1_1entityArnList(input.entityArns, context)
    }),
    ...(input.entityValues !== undefined && {
      entityValues: serializeAws_json1_1entityValueList(
        input.entityValues,
        context
      )
    }),
    ...(input.eventArns !== undefined && {
      eventArns: serializeAws_json1_1eventArnList(input.eventArns, context)
    }),
    ...(input.eventStatusCodes !== undefined && {
      eventStatusCodes: serializeAws_json1_1eventStatusCodeList(
        input.eventStatusCodes,
        context
      )
    }),
    ...(input.eventTypeCategories !== undefined && {
      eventTypeCategories: serializeAws_json1_1eventTypeStringCategoryList(
        input.eventTypeCategories,
        context
      )
    }),
    ...(input.eventTypeCodes !== undefined && {
      eventTypeCodes: serializeAws_json1_1eventTypeStringList(
        input.eventTypeCodes,
        context
      )
    }),
    ...(input.lastUpdatedTimes !== undefined && {
      lastUpdatedTimes: serializeAws_json1_1dateTimeRangeList(
        input.lastUpdatedTimes,
        context
      )
    }),
    ...(input.regions !== undefined && {
      regions: serializeAws_json1_1regionList(input.regions, context)
    }),
    ...(input.services !== undefined && {
      services: serializeAws_json1_1serviceList(input.services, context)
    }),
    ...(input.startTimes !== undefined && {
      startTimes: serializeAws_json1_1dateTimeRangeList(
        input.startTimes,
        context
      )
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1tagFilter(input.tags, context)
    })
  };
};

const serializeAws_json1_1eventStatusCodeList = (
  input: (EventStatusCode | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1EventTypeCategoryList = (
  input: (EventTypeStringCategory | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1EventTypeCodeList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1EventTypeFilter = (
  input: EventTypeFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.eventTypeCategories !== undefined && {
      eventTypeCategories: serializeAws_json1_1EventTypeCategoryList(
        input.eventTypeCategories,
        context
      )
    }),
    ...(input.eventTypeCodes !== undefined && {
      eventTypeCodes: serializeAws_json1_1EventTypeCodeList(
        input.eventTypeCodes,
        context
      )
    }),
    ...(input.services !== undefined && {
      services: serializeAws_json1_1serviceList(input.services, context)
    })
  };
};

const serializeAws_json1_1eventTypeStringCategoryList = (
  input: (EventTypeStringCategory | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1eventTypeStringList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1OrganizationEntityFiltersList = (
  input: EventAccountFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1EventAccountFilter(entry, context)
  );
};

const serializeAws_json1_1OrganizationEventDetailFiltersList = (
  input: EventAccountFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1EventAccountFilter(entry, context)
  );
};

const serializeAws_json1_1OrganizationEventFilter = (
  input: OrganizationEventFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.awsAccountIds !== undefined && {
      awsAccountIds: serializeAws_json1_1awsAccountIdsList(
        input.awsAccountIds,
        context
      )
    }),
    ...(input.endTime !== undefined && {
      endTime: serializeAws_json1_1DateTimeRange(input.endTime, context)
    }),
    ...(input.entityArns !== undefined && {
      entityArns: serializeAws_json1_1entityArnList(input.entityArns, context)
    }),
    ...(input.entityValues !== undefined && {
      entityValues: serializeAws_json1_1entityValueList(
        input.entityValues,
        context
      )
    }),
    ...(input.eventStatusCodes !== undefined && {
      eventStatusCodes: serializeAws_json1_1eventStatusCodeList(
        input.eventStatusCodes,
        context
      )
    }),
    ...(input.eventTypeCategories !== undefined && {
      eventTypeCategories: serializeAws_json1_1eventTypeStringCategoryList(
        input.eventTypeCategories,
        context
      )
    }),
    ...(input.eventTypeCodes !== undefined && {
      eventTypeCodes: serializeAws_json1_1eventTypeStringList(
        input.eventTypeCodes,
        context
      )
    }),
    ...(input.lastUpdatedTime !== undefined && {
      lastUpdatedTime: serializeAws_json1_1DateTimeRange(
        input.lastUpdatedTime,
        context
      )
    }),
    ...(input.regions !== undefined && {
      regions: serializeAws_json1_1regionList(input.regions, context)
    }),
    ...(input.services !== undefined && {
      services: serializeAws_json1_1serviceList(input.services, context)
    }),
    ...(input.startTime !== undefined && {
      startTime: serializeAws_json1_1DateTimeRange(input.startTime, context)
    })
  };
};

const serializeAws_json1_1regionList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1serviceList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1tagFilter = (
  input: { [key: string]: string }[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1tagSet(entry, context));
};

const serializeAws_json1_1tagSet = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1affectedAccountsList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1AffectedEntity = (
  output: any,
  context: __SerdeContext
): AffectedEntity => {
  return {
    __type: "AffectedEntity",
    awsAccountId:
      output.awsAccountId !== undefined && output.awsAccountId !== null
        ? output.awsAccountId
        : undefined,
    entityArn:
      output.entityArn !== undefined && output.entityArn !== null
        ? output.entityArn
        : undefined,
    entityUrl:
      output.entityUrl !== undefined && output.entityUrl !== null
        ? output.entityUrl
        : undefined,
    entityValue:
      output.entityValue !== undefined && output.entityValue !== null
        ? output.entityValue
        : undefined,
    eventArn:
      output.eventArn !== undefined && output.eventArn !== null
        ? output.eventArn
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? new Date(Math.round(output.lastUpdatedTime * 1000))
        : undefined,
    statusCode:
      output.statusCode !== undefined && output.statusCode !== null
        ? output.statusCode
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1tagSet(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    __type: "ConcurrentModificationException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeAffectedAccountsForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeAffectedAccountsForOrganizationResponse => {
  return {
    __type: "DescribeAffectedAccountsForOrganizationResponse",
    affectedAccounts:
      output.affectedAccounts !== undefined && output.affectedAccounts !== null
        ? deserializeAws_json1_1affectedAccountsList(
            output.affectedAccounts,
            context
          )
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationFailedSet = (
  output: any,
  context: __SerdeContext
): OrganizationAffectedEntitiesErrorItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OrganizationAffectedEntitiesErrorItem(entry, context)
  );
};

const deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeAffectedEntitiesForOrganizationResponse => {
  return {
    __type: "DescribeAffectedEntitiesForOrganizationResponse",
    entities:
      output.entities !== undefined && output.entities !== null
        ? deserializeAws_json1_1EntityList(output.entities, context)
        : undefined,
    failedSet:
      output.failedSet !== undefined && output.failedSet !== null
        ? deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationFailedSet(
            output.failedSet,
            context
          )
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeAffectedEntitiesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAffectedEntitiesResponse => {
  return {
    __type: "DescribeAffectedEntitiesResponse",
    entities:
      output.entities !== undefined && output.entities !== null
        ? deserializeAws_json1_1EntityList(output.entities, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeEntityAggregatesResponse = (
  output: any,
  context: __SerdeContext
): DescribeEntityAggregatesResponse => {
  return {
    __type: "DescribeEntityAggregatesResponse",
    entityAggregates:
      output.entityAggregates !== undefined && output.entityAggregates !== null
        ? deserializeAws_json1_1EntityAggregateList(
            output.entityAggregates,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeEventAggregatesResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventAggregatesResponse => {
  return {
    __type: "DescribeEventAggregatesResponse",
    eventAggregates:
      output.eventAggregates !== undefined && output.eventAggregates !== null
        ? deserializeAws_json1_1EventAggregateList(
            output.eventAggregates,
            context
          )
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeEventDetailsFailedSet = (
  output: any,
  context: __SerdeContext
): EventDetailsErrorItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EventDetailsErrorItem(entry, context)
  );
};

const deserializeAws_json1_1DescribeEventDetailsForOrganizationFailedSet = (
  output: any,
  context: __SerdeContext
): OrganizationEventDetailsErrorItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OrganizationEventDetailsErrorItem(entry, context)
  );
};

const deserializeAws_json1_1DescribeEventDetailsForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventDetailsForOrganizationResponse => {
  return {
    __type: "DescribeEventDetailsForOrganizationResponse",
    failedSet:
      output.failedSet !== undefined && output.failedSet !== null
        ? deserializeAws_json1_1DescribeEventDetailsForOrganizationFailedSet(
            output.failedSet,
            context
          )
        : undefined,
    successfulSet:
      output.successfulSet !== undefined && output.successfulSet !== null
        ? deserializeAws_json1_1DescribeEventDetailsForOrganizationSuccessfulSet(
            output.successfulSet,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeEventDetailsForOrganizationSuccessfulSet = (
  output: any,
  context: __SerdeContext
): OrganizationEventDetails[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OrganizationEventDetails(entry, context)
  );
};

const deserializeAws_json1_1DescribeEventDetailsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventDetailsResponse => {
  return {
    __type: "DescribeEventDetailsResponse",
    failedSet:
      output.failedSet !== undefined && output.failedSet !== null
        ? deserializeAws_json1_1DescribeEventDetailsFailedSet(
            output.failedSet,
            context
          )
        : undefined,
    successfulSet:
      output.successfulSet !== undefined && output.successfulSet !== null
        ? deserializeAws_json1_1DescribeEventDetailsSuccessfulSet(
            output.successfulSet,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeEventDetailsSuccessfulSet = (
  output: any,
  context: __SerdeContext
): EventDetails[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EventDetails(entry, context)
  );
};

const deserializeAws_json1_1DescribeEventsForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventsForOrganizationResponse => {
  return {
    __type: "DescribeEventsForOrganizationResponse",
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_json1_1OrganizationEventList(output.events, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeEventsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventsResponse => {
  return {
    __type: "DescribeEventsResponse",
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_json1_1EventList(output.events, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeEventTypesResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventTypesResponse => {
  return {
    __type: "DescribeEventTypesResponse",
    eventTypes:
      output.eventTypes !== undefined && output.eventTypes !== null
        ? deserializeAws_json1_1EventTypeList(output.eventTypes, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeHealthServiceStatusForOrganizationResponse => {
  return {
    __type: "DescribeHealthServiceStatusForOrganizationResponse",
    healthServiceAccessStatusForOrganization:
      output.healthServiceAccessStatusForOrganization !== undefined &&
      output.healthServiceAccessStatusForOrganization !== null
        ? output.healthServiceAccessStatusForOrganization
        : undefined
  } as any;
};

const deserializeAws_json1_1EntityAggregate = (
  output: any,
  context: __SerdeContext
): EntityAggregate => {
  return {
    __type: "EntityAggregate",
    count:
      output.count !== undefined && output.count !== null
        ? output.count
        : undefined,
    eventArn:
      output.eventArn !== undefined && output.eventArn !== null
        ? output.eventArn
        : undefined
  } as any;
};

const deserializeAws_json1_1EntityAggregateList = (
  output: any,
  context: __SerdeContext
): EntityAggregate[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EntityAggregate(entry, context)
  );
};

const deserializeAws_json1_1EntityList = (
  output: any,
  context: __SerdeContext
): AffectedEntity[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AffectedEntity(entry, context)
  );
};

const deserializeAws_json1_1Event = (
  output: any,
  context: __SerdeContext
): Event => {
  return {
    __type: "Event",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    availabilityZone:
      output.availabilityZone !== undefined && output.availabilityZone !== null
        ? output.availabilityZone
        : undefined,
    endTime:
      output.endTime !== undefined && output.endTime !== null
        ? new Date(Math.round(output.endTime * 1000))
        : undefined,
    eventTypeCategory:
      output.eventTypeCategory !== undefined &&
      output.eventTypeCategory !== null
        ? output.eventTypeCategory
        : undefined,
    eventTypeCode:
      output.eventTypeCode !== undefined && output.eventTypeCode !== null
        ? output.eventTypeCode
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? new Date(Math.round(output.lastUpdatedTime * 1000))
        : undefined,
    region:
      output.region !== undefined && output.region !== null
        ? output.region
        : undefined,
    service:
      output.service !== undefined && output.service !== null
        ? output.service
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    statusCode:
      output.statusCode !== undefined && output.statusCode !== null
        ? output.statusCode
        : undefined
  } as any;
};

const deserializeAws_json1_1EventAggregate = (
  output: any,
  context: __SerdeContext
): EventAggregate => {
  return {
    __type: "EventAggregate",
    aggregateValue:
      output.aggregateValue !== undefined && output.aggregateValue !== null
        ? output.aggregateValue
        : undefined,
    count:
      output.count !== undefined && output.count !== null
        ? output.count
        : undefined
  } as any;
};

const deserializeAws_json1_1EventAggregateList = (
  output: any,
  context: __SerdeContext
): EventAggregate[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EventAggregate(entry, context)
  );
};

const deserializeAws_json1_1EventDescription = (
  output: any,
  context: __SerdeContext
): EventDescription => {
  return {
    __type: "EventDescription",
    latestDescription:
      output.latestDescription !== undefined &&
      output.latestDescription !== null
        ? output.latestDescription
        : undefined
  } as any;
};

const deserializeAws_json1_1EventDetails = (
  output: any,
  context: __SerdeContext
): EventDetails => {
  return {
    __type: "EventDetails",
    event:
      output.event !== undefined && output.event !== null
        ? deserializeAws_json1_1Event(output.event, context)
        : undefined,
    eventDescription:
      output.eventDescription !== undefined && output.eventDescription !== null
        ? deserializeAws_json1_1EventDescription(
            output.eventDescription,
            context
          )
        : undefined,
    eventMetadata:
      output.eventMetadata !== undefined && output.eventMetadata !== null
        ? deserializeAws_json1_1eventMetadata(output.eventMetadata, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1EventDetailsErrorItem = (
  output: any,
  context: __SerdeContext
): EventDetailsErrorItem => {
  return {
    __type: "EventDetailsErrorItem",
    errorMessage:
      output.errorMessage !== undefined && output.errorMessage !== null
        ? output.errorMessage
        : undefined,
    errorName:
      output.errorName !== undefined && output.errorName !== null
        ? output.errorName
        : undefined,
    eventArn:
      output.eventArn !== undefined && output.eventArn !== null
        ? output.eventArn
        : undefined
  } as any;
};

const deserializeAws_json1_1EventList = (
  output: any,
  context: __SerdeContext
): Event[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Event(entry, context)
  );
};

const deserializeAws_json1_1eventMetadata = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1EventType = (
  output: any,
  context: __SerdeContext
): EventType => {
  return {
    __type: "EventType",
    category:
      output.category !== undefined && output.category !== null
        ? output.category
        : undefined,
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    service:
      output.service !== undefined && output.service !== null
        ? output.service
        : undefined
  } as any;
};

const deserializeAws_json1_1EventTypeList = (
  output: any,
  context: __SerdeContext
): EventType[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EventType(entry, context)
  );
};

const deserializeAws_json1_1InvalidPaginationToken = (
  output: any,
  context: __SerdeContext
): InvalidPaginationToken => {
  return {
    __type: "InvalidPaginationToken",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1OrganizationAffectedEntitiesErrorItem = (
  output: any,
  context: __SerdeContext
): OrganizationAffectedEntitiesErrorItem => {
  return {
    __type: "OrganizationAffectedEntitiesErrorItem",
    awsAccountId:
      output.awsAccountId !== undefined && output.awsAccountId !== null
        ? output.awsAccountId
        : undefined,
    errorMessage:
      output.errorMessage !== undefined && output.errorMessage !== null
        ? output.errorMessage
        : undefined,
    errorName:
      output.errorName !== undefined && output.errorName !== null
        ? output.errorName
        : undefined,
    eventArn:
      output.eventArn !== undefined && output.eventArn !== null
        ? output.eventArn
        : undefined
  } as any;
};

const deserializeAws_json1_1OrganizationEvent = (
  output: any,
  context: __SerdeContext
): OrganizationEvent => {
  return {
    __type: "OrganizationEvent",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    endTime:
      output.endTime !== undefined && output.endTime !== null
        ? new Date(Math.round(output.endTime * 1000))
        : undefined,
    eventTypeCategory:
      output.eventTypeCategory !== undefined &&
      output.eventTypeCategory !== null
        ? output.eventTypeCategory
        : undefined,
    eventTypeCode:
      output.eventTypeCode !== undefined && output.eventTypeCode !== null
        ? output.eventTypeCode
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? new Date(Math.round(output.lastUpdatedTime * 1000))
        : undefined,
    region:
      output.region !== undefined && output.region !== null
        ? output.region
        : undefined,
    service:
      output.service !== undefined && output.service !== null
        ? output.service
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    statusCode:
      output.statusCode !== undefined && output.statusCode !== null
        ? output.statusCode
        : undefined
  } as any;
};

const deserializeAws_json1_1OrganizationEventDetails = (
  output: any,
  context: __SerdeContext
): OrganizationEventDetails => {
  return {
    __type: "OrganizationEventDetails",
    awsAccountId:
      output.awsAccountId !== undefined && output.awsAccountId !== null
        ? output.awsAccountId
        : undefined,
    event:
      output.event !== undefined && output.event !== null
        ? deserializeAws_json1_1Event(output.event, context)
        : undefined,
    eventDescription:
      output.eventDescription !== undefined && output.eventDescription !== null
        ? deserializeAws_json1_1EventDescription(
            output.eventDescription,
            context
          )
        : undefined,
    eventMetadata:
      output.eventMetadata !== undefined && output.eventMetadata !== null
        ? deserializeAws_json1_1eventMetadata(output.eventMetadata, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1OrganizationEventDetailsErrorItem = (
  output: any,
  context: __SerdeContext
): OrganizationEventDetailsErrorItem => {
  return {
    __type: "OrganizationEventDetailsErrorItem",
    awsAccountId:
      output.awsAccountId !== undefined && output.awsAccountId !== null
        ? output.awsAccountId
        : undefined,
    errorMessage:
      output.errorMessage !== undefined && output.errorMessage !== null
        ? output.errorMessage
        : undefined,
    errorName:
      output.errorName !== undefined && output.errorName !== null
        ? output.errorName
        : undefined,
    eventArn:
      output.eventArn !== undefined && output.eventArn !== null
        ? output.eventArn
        : undefined
  } as any;
};

const deserializeAws_json1_1OrganizationEventList = (
  output: any,
  context: __SerdeContext
): OrganizationEvent[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OrganizationEvent(entry, context)
  );
};

const deserializeAws_json1_1tagSet = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1UnsupportedLocale = (
  output: any,
  context: __SerdeContext
): UnsupportedLocale => {
  return {
    __type: "UnsupportedLocale",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
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

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
