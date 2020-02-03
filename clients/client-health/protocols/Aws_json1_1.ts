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
  EventTypeCategory,
  EventTypeFilter,
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
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand(
  input: DescribeAffectedAccountsForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSHealth_20160804.DescribeAffectedAccountsForOrganization";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeAffectedAccountsForOrganizationRequest(
      input,
      context
    )
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeAffectedEntitiesCommand(
  input: DescribeAffectedEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHealth_20160804.DescribeAffectedEntities";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeAffectedEntitiesRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand(
  input: DescribeAffectedEntitiesForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSHealth_20160804.DescribeAffectedEntitiesForOrganization";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeAffectedEntitiesForOrganizationRequest(
      input,
      context
    )
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeEntityAggregatesCommand(
  input: DescribeEntityAggregatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHealth_20160804.DescribeEntityAggregates";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeEntityAggregatesRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeEventAggregatesCommand(
  input: DescribeEventAggregatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHealth_20160804.DescribeEventAggregates";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeEventAggregatesRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeEventDetailsCommand(
  input: DescribeEventDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHealth_20160804.DescribeEventDetails";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeEventDetailsRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeEventDetailsForOrganizationCommand(
  input: DescribeEventDetailsForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSHealth_20160804.DescribeEventDetailsForOrganization";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeEventDetailsForOrganizationRequest(
      input,
      context
    )
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeEventTypesCommand(
  input: DescribeEventTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHealth_20160804.DescribeEventTypes";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeEventTypesRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeEventsCommand(
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHealth_20160804.DescribeEvents";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeEventsRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeEventsForOrganizationCommand(
  input: DescribeEventsForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHealth_20160804.DescribeEventsForOrganization";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeEventsForOrganizationRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand(
  input: DescribeHealthServiceStatusForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSHealth_20160804.DescribeHealthServiceStatusForOrganization";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers
  });
}

export async function serializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand(
  input: DisableHealthServiceAccessForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSHealth_20160804.DisableHealthServiceAccessForOrganization";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers
  });
}

export async function serializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand(
  input: EnableHealthServiceAccessForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSHealth_20160804.EnableHealthServiceAccessForOrganization";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers
  });
}

export async function deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedAccountsForOrganizationCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedAccountsForOrganizationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.silvermineunifiedapi.v20160804.error#InvalidPaginationToken":
      response = await deserializeAws_json1_1InvalidPaginationTokenResponse(
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
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeAffectedEntitiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedEntitiesCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeAffectedEntitiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedEntitiesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.silvermineunifiedapi.v20160804.error#InvalidPaginationToken":
      response = await deserializeAws_json1_1InvalidPaginationTokenResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedLocale":
    case "com.amazonaws.silvermineunifiedapi.v20160804.error#UnsupportedLocale":
      response = await deserializeAws_json1_1UnsupportedLocaleResponse(
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
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.silvermineunifiedapi.v20160804.error#InvalidPaginationToken":
      response = await deserializeAws_json1_1InvalidPaginationTokenResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedLocale":
    case "com.amazonaws.silvermineunifiedapi.v20160804.error#UnsupportedLocale":
      response = await deserializeAws_json1_1UnsupportedLocaleResponse(
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
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeEntityAggregatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityAggregatesCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeEntityAggregatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityAggregatesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
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
}

export async function deserializeAws_json1_1DescribeEventAggregatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventAggregatesCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeEventAggregatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventAggregatesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.silvermineunifiedapi.v20160804.error#InvalidPaginationToken":
      response = await deserializeAws_json1_1InvalidPaginationTokenResponse(
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
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeEventDetailsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventDetailsCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeEventDetailsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventDetailsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "UnsupportedLocale":
    case "com.amazonaws.silvermineunifiedapi.v20160804.error#UnsupportedLocale":
      response = await deserializeAws_json1_1UnsupportedLocaleResponse(
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
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeEventDetailsForOrganizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventDetailsForOrganizationCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeEventDetailsForOrganizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventDetailsForOrganizationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "UnsupportedLocale":
    case "com.amazonaws.silvermineunifiedapi.v20160804.error#UnsupportedLocale":
      response = await deserializeAws_json1_1UnsupportedLocaleResponse(
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
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeEventTypesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventTypesCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeEventTypesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventTypesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.silvermineunifiedapi.v20160804.error#InvalidPaginationToken":
      response = await deserializeAws_json1_1InvalidPaginationTokenResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedLocale":
    case "com.amazonaws.silvermineunifiedapi.v20160804.error#UnsupportedLocale":
      response = await deserializeAws_json1_1UnsupportedLocaleResponse(
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
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeEventsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeEventsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.silvermineunifiedapi.v20160804.error#InvalidPaginationToken":
      response = await deserializeAws_json1_1InvalidPaginationTokenResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedLocale":
    case "com.amazonaws.silvermineunifiedapi.v20160804.error#UnsupportedLocale":
      response = await deserializeAws_json1_1UnsupportedLocaleResponse(
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
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeEventsForOrganizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsForOrganizationCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeEventsForOrganizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsForOrganizationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.silvermineunifiedapi.v20160804.error#InvalidPaginationToken":
      response = await deserializeAws_json1_1InvalidPaginationTokenResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedLocale":
    case "com.amazonaws.silvermineunifiedapi.v20160804.error#UnsupportedLocale":
      response = await deserializeAws_json1_1UnsupportedLocaleResponse(
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
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHealthServiceStatusForOrganizationCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHealthServiceStatusForOrganizationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
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
}

export async function deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableHealthServiceAccessForOrganizationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommandError(
      output,
      context
    );
  }
  const response: DisableHealthServiceAccessForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableHealthServiceAccessForOrganizationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.silvermineunifiedapi.v20160804.error#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
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
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableHealthServiceAccessForOrganizationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommandError(
      output,
      context
    );
  }
  const response: EnableHealthServiceAccessForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableHealthServiceAccessForOrganizationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.silvermineunifiedapi.v20160804.error#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
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
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1awsAccountIdsList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1entityArnList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1entityStatusCodeList = (
  input: Array<EntityStatusCode | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1entityValueList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1eventArnList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1eventStatusCodeList = (
  input: Array<EventStatusCode | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1eventTypeCategoryList = (
  input: Array<EventTypeCategory | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1eventTypeList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1regionList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1serviceList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1tagFilter = (
  input: Array<{ [key: string]: string }>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1tagSet(entry, context));
};

const serializeAws_json1_1tagSet = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1DescribeAffectedAccountsForOrganizationRequest = (
  input: DescribeAffectedAccountsForOrganizationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.eventArn !== undefined) {
    bodyParams["eventArn"] = input.eventArn;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeAffectedEntitiesForOrganizationRequest = (
  input: DescribeAffectedEntitiesForOrganizationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.locale !== undefined) {
    bodyParams["locale"] = input.locale;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.organizationEntityFilters !== undefined) {
    bodyParams[
      "organizationEntityFilters"
    ] = serializeAws_json1_1OrganizationEntityFiltersList(
      input.organizationEntityFilters,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeAffectedEntitiesRequest = (
  input: DescribeAffectedEntitiesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_json1_1EntityFilter(
      input.filter,
      context
    );
  }
  if (input.locale !== undefined) {
    bodyParams["locale"] = input.locale;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeEntityAggregatesRequest = (
  input: DescribeEntityAggregatesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.eventArns !== undefined) {
    bodyParams["eventArns"] = serializeAws_json1_1EventArnsList(
      input.eventArns,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeEventAggregatesRequest = (
  input: DescribeEventAggregatesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.aggregateField !== undefined) {
    bodyParams["aggregateField"] = input.aggregateField;
  }
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_json1_1EventFilter(
      input.filter,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeEventDetailsForOrganizationRequest = (
  input: DescribeEventDetailsForOrganizationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.locale !== undefined) {
    bodyParams["locale"] = input.locale;
  }
  if (input.organizationEventDetailFilters !== undefined) {
    bodyParams[
      "organizationEventDetailFilters"
    ] = serializeAws_json1_1OrganizationEventDetailFiltersList(
      input.organizationEventDetailFilters,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeEventDetailsRequest = (
  input: DescribeEventDetailsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.eventArns !== undefined) {
    bodyParams["eventArns"] = serializeAws_json1_1eventArnList(
      input.eventArns,
      context
    );
  }
  if (input.locale !== undefined) {
    bodyParams["locale"] = input.locale;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeEventTypesRequest = (
  input: DescribeEventTypesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_json1_1EventTypeFilter(
      input.filter,
      context
    );
  }
  if (input.locale !== undefined) {
    bodyParams["locale"] = input.locale;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeEventsForOrganizationRequest = (
  input: DescribeEventsForOrganizationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_json1_1OrganizationEventFilter(
      input.filter,
      context
    );
  }
  if (input.locale !== undefined) {
    bodyParams["locale"] = input.locale;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeEventsRequest = (
  input: DescribeEventsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_json1_1EventFilter(
      input.filter,
      context
    );
  }
  if (input.locale !== undefined) {
    bodyParams["locale"] = input.locale;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1EventArnsList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1OrganizationEntityFiltersList = (
  input: Array<EventAccountFilter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1EventAccountFilter(entry, context)
  );
};

const serializeAws_json1_1OrganizationEventDetailFiltersList = (
  input: Array<EventAccountFilter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1EventAccountFilter(entry, context)
  );
};

const serializeAws_json1_1DateTimeRange = (
  input: DateTimeRange,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.from !== undefined) {
    bodyParams["from"] = Math.round(input.from.getTime() / 1000);
  }
  if (input.to !== undefined) {
    bodyParams["to"] = Math.round(input.to.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1EntityFilter = (
  input: EntityFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.entityArns !== undefined) {
    bodyParams["entityArns"] = serializeAws_json1_1entityArnList(
      input.entityArns,
      context
    );
  }
  if (input.entityValues !== undefined) {
    bodyParams["entityValues"] = serializeAws_json1_1entityValueList(
      input.entityValues,
      context
    );
  }
  if (input.eventArns !== undefined) {
    bodyParams["eventArns"] = serializeAws_json1_1eventArnList(
      input.eventArns,
      context
    );
  }
  if (input.lastUpdatedTimes !== undefined) {
    bodyParams["lastUpdatedTimes"] = serializeAws_json1_1dateTimeRangeList(
      input.lastUpdatedTimes,
      context
    );
  }
  if (input.statusCodes !== undefined) {
    bodyParams["statusCodes"] = serializeAws_json1_1entityStatusCodeList(
      input.statusCodes,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1tagFilter(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1EventAccountFilter = (
  input: EventAccountFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.awsAccountId !== undefined) {
    bodyParams["awsAccountId"] = input.awsAccountId;
  }
  if (input.eventArn !== undefined) {
    bodyParams["eventArn"] = input.eventArn;
  }
  return bodyParams;
};

const serializeAws_json1_1EventFilter = (
  input: EventFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.availabilityZones !== undefined) {
    bodyParams["availabilityZones"] = serializeAws_json1_1availabilityZones(
      input.availabilityZones,
      context
    );
  }
  if (input.endTimes !== undefined) {
    bodyParams["endTimes"] = serializeAws_json1_1dateTimeRangeList(
      input.endTimes,
      context
    );
  }
  if (input.entityArns !== undefined) {
    bodyParams["entityArns"] = serializeAws_json1_1entityArnList(
      input.entityArns,
      context
    );
  }
  if (input.entityValues !== undefined) {
    bodyParams["entityValues"] = serializeAws_json1_1entityValueList(
      input.entityValues,
      context
    );
  }
  if (input.eventArns !== undefined) {
    bodyParams["eventArns"] = serializeAws_json1_1eventArnList(
      input.eventArns,
      context
    );
  }
  if (input.eventStatusCodes !== undefined) {
    bodyParams["eventStatusCodes"] = serializeAws_json1_1eventStatusCodeList(
      input.eventStatusCodes,
      context
    );
  }
  if (input.eventTypeCategories !== undefined) {
    bodyParams[
      "eventTypeCategories"
    ] = serializeAws_json1_1eventTypeCategoryList(
      input.eventTypeCategories,
      context
    );
  }
  if (input.eventTypeCodes !== undefined) {
    bodyParams["eventTypeCodes"] = serializeAws_json1_1eventTypeList(
      input.eventTypeCodes,
      context
    );
  }
  if (input.lastUpdatedTimes !== undefined) {
    bodyParams["lastUpdatedTimes"] = serializeAws_json1_1dateTimeRangeList(
      input.lastUpdatedTimes,
      context
    );
  }
  if (input.regions !== undefined) {
    bodyParams["regions"] = serializeAws_json1_1regionList(
      input.regions,
      context
    );
  }
  if (input.services !== undefined) {
    bodyParams["services"] = serializeAws_json1_1serviceList(
      input.services,
      context
    );
  }
  if (input.startTimes !== undefined) {
    bodyParams["startTimes"] = serializeAws_json1_1dateTimeRangeList(
      input.startTimes,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1tagFilter(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1EventTypeCategoryList = (
  input: Array<EventTypeCategory | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1EventTypeCodeList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1EventTypeFilter = (
  input: EventTypeFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.eventTypeCategories !== undefined) {
    bodyParams[
      "eventTypeCategories"
    ] = serializeAws_json1_1EventTypeCategoryList(
      input.eventTypeCategories,
      context
    );
  }
  if (input.eventTypeCodes !== undefined) {
    bodyParams["eventTypeCodes"] = serializeAws_json1_1EventTypeCodeList(
      input.eventTypeCodes,
      context
    );
  }
  if (input.services !== undefined) {
    bodyParams["services"] = serializeAws_json1_1serviceList(
      input.services,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1OrganizationEventFilter = (
  input: OrganizationEventFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.awsAccountIds !== undefined) {
    bodyParams["awsAccountIds"] = serializeAws_json1_1awsAccountIdsList(
      input.awsAccountIds,
      context
    );
  }
  if (input.endTime !== undefined) {
    bodyParams["endTime"] = serializeAws_json1_1DateTimeRange(
      input.endTime,
      context
    );
  }
  if (input.entityArns !== undefined) {
    bodyParams["entityArns"] = serializeAws_json1_1entityArnList(
      input.entityArns,
      context
    );
  }
  if (input.entityValues !== undefined) {
    bodyParams["entityValues"] = serializeAws_json1_1entityValueList(
      input.entityValues,
      context
    );
  }
  if (input.eventStatusCodes !== undefined) {
    bodyParams["eventStatusCodes"] = serializeAws_json1_1eventStatusCodeList(
      input.eventStatusCodes,
      context
    );
  }
  if (input.eventTypeCategories !== undefined) {
    bodyParams[
      "eventTypeCategories"
    ] = serializeAws_json1_1eventTypeCategoryList(
      input.eventTypeCategories,
      context
    );
  }
  if (input.eventTypeCodes !== undefined) {
    bodyParams["eventTypeCodes"] = serializeAws_json1_1eventTypeList(
      input.eventTypeCodes,
      context
    );
  }
  if (input.lastUpdatedTime !== undefined) {
    bodyParams["lastUpdatedTime"] = serializeAws_json1_1DateTimeRange(
      input.lastUpdatedTime,
      context
    );
  }
  if (input.regions !== undefined) {
    bodyParams["regions"] = serializeAws_json1_1regionList(
      input.regions,
      context
    );
  }
  if (input.services !== undefined) {
    bodyParams["services"] = serializeAws_json1_1serviceList(
      input.services,
      context
    );
  }
  if (input.startTime !== undefined) {
    bodyParams["startTime"] = serializeAws_json1_1DateTimeRange(
      input.startTime,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1dateTimeRangeList = (
  input: Array<DateTimeRange>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1DateTimeRange(entry, context)
  );
};

const deserializeAws_json1_1eventMetadata = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1tagSet = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
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

const deserializeAws_json1_1InvalidPaginationToken = (
  output: any,
  context: __SerdeContext
): InvalidPaginationToken => {
  let contents: any = {
    __type: "InvalidPaginationToken",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UnsupportedLocale = (
  output: any,
  context: __SerdeContext
): UnsupportedLocale => {
  let contents: any = {
    __type: "UnsupportedLocale",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DescribeAffectedAccountsForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeAffectedAccountsForOrganizationResponse => {
  let contents: any = {
    __type: "DescribeAffectedAccountsForOrganizationResponse",
    affectedAccounts: undefined,
    nextToken: undefined
  };
  if (output.affectedAccounts !== undefined) {
    contents.affectedAccounts = deserializeAws_json1_1affectedAccountsList(
      output.affectedAccounts,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationFailedSet = (
  output: any,
  context: __SerdeContext
): Array<OrganizationAffectedEntitiesErrorItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OrganizationAffectedEntitiesErrorItem(entry, context)
  );
};

const deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeAffectedEntitiesForOrganizationResponse => {
  let contents: any = {
    __type: "DescribeAffectedEntitiesForOrganizationResponse",
    entities: undefined,
    failedSet: undefined,
    nextToken: undefined
  };
  if (output.entities !== undefined) {
    contents.entities = deserializeAws_json1_1EntityList(
      output.entities,
      context
    );
  }
  if (output.failedSet !== undefined) {
    contents.failedSet = deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationFailedSet(
      output.failedSet,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeAffectedEntitiesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAffectedEntitiesResponse => {
  let contents: any = {
    __type: "DescribeAffectedEntitiesResponse",
    entities: undefined,
    nextToken: undefined
  };
  if (output.entities !== undefined) {
    contents.entities = deserializeAws_json1_1EntityList(
      output.entities,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeEntityAggregatesResponse = (
  output: any,
  context: __SerdeContext
): DescribeEntityAggregatesResponse => {
  let contents: any = {
    __type: "DescribeEntityAggregatesResponse",
    entityAggregates: undefined
  };
  if (output.entityAggregates !== undefined) {
    contents.entityAggregates = deserializeAws_json1_1EntityAggregateList(
      output.entityAggregates,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeEventAggregatesResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventAggregatesResponse => {
  let contents: any = {
    __type: "DescribeEventAggregatesResponse",
    eventAggregates: undefined,
    nextToken: undefined
  };
  if (output.eventAggregates !== undefined) {
    contents.eventAggregates = deserializeAws_json1_1EventAggregateList(
      output.eventAggregates,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeEventDetailsFailedSet = (
  output: any,
  context: __SerdeContext
): Array<EventDetailsErrorItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EventDetailsErrorItem(entry, context)
  );
};

const deserializeAws_json1_1DescribeEventDetailsForOrganizationFailedSet = (
  output: any,
  context: __SerdeContext
): Array<OrganizationEventDetailsErrorItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OrganizationEventDetailsErrorItem(entry, context)
  );
};

const deserializeAws_json1_1DescribeEventDetailsForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventDetailsForOrganizationResponse => {
  let contents: any = {
    __type: "DescribeEventDetailsForOrganizationResponse",
    failedSet: undefined,
    successfulSet: undefined
  };
  if (output.failedSet !== undefined) {
    contents.failedSet = deserializeAws_json1_1DescribeEventDetailsForOrganizationFailedSet(
      output.failedSet,
      context
    );
  }
  if (output.successfulSet !== undefined) {
    contents.successfulSet = deserializeAws_json1_1DescribeEventDetailsForOrganizationSuccessfulSet(
      output.successfulSet,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeEventDetailsForOrganizationSuccessfulSet = (
  output: any,
  context: __SerdeContext
): Array<OrganizationEventDetails> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OrganizationEventDetails(entry, context)
  );
};

const deserializeAws_json1_1DescribeEventDetailsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventDetailsResponse => {
  let contents: any = {
    __type: "DescribeEventDetailsResponse",
    failedSet: undefined,
    successfulSet: undefined
  };
  if (output.failedSet !== undefined) {
    contents.failedSet = deserializeAws_json1_1DescribeEventDetailsFailedSet(
      output.failedSet,
      context
    );
  }
  if (output.successfulSet !== undefined) {
    contents.successfulSet = deserializeAws_json1_1DescribeEventDetailsSuccessfulSet(
      output.successfulSet,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeEventDetailsSuccessfulSet = (
  output: any,
  context: __SerdeContext
): Array<EventDetails> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EventDetails(entry, context)
  );
};

const deserializeAws_json1_1DescribeEventTypesResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventTypesResponse => {
  let contents: any = {
    __type: "DescribeEventTypesResponse",
    eventTypes: undefined,
    nextToken: undefined
  };
  if (output.eventTypes !== undefined) {
    contents.eventTypes = deserializeAws_json1_1EventTypeList(
      output.eventTypes,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeEventsForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventsForOrganizationResponse => {
  let contents: any = {
    __type: "DescribeEventsForOrganizationResponse",
    events: undefined,
    nextToken: undefined
  };
  if (output.events !== undefined) {
    contents.events = deserializeAws_json1_1OrganizationEventList(
      output.events,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeEventsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventsResponse => {
  let contents: any = {
    __type: "DescribeEventsResponse",
    events: undefined,
    nextToken: undefined
  };
  if (output.events !== undefined) {
    contents.events = deserializeAws_json1_1EventList(output.events, context);
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeHealthServiceStatusForOrganizationResponse => {
  let contents: any = {
    __type: "DescribeHealthServiceStatusForOrganizationResponse",
    healthServiceAccessStatusForOrganization: undefined
  };
  if (output.healthServiceAccessStatusForOrganization !== undefined) {
    contents.healthServiceAccessStatusForOrganization =
      output.healthServiceAccessStatusForOrganization;
  }
  return contents;
};

const deserializeAws_json1_1EntityAggregateList = (
  output: any,
  context: __SerdeContext
): Array<EntityAggregate> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EntityAggregate(entry, context)
  );
};

const deserializeAws_json1_1EntityList = (
  output: any,
  context: __SerdeContext
): Array<AffectedEntity> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AffectedEntity(entry, context)
  );
};

const deserializeAws_json1_1EventAggregateList = (
  output: any,
  context: __SerdeContext
): Array<EventAggregate> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EventAggregate(entry, context)
  );
};

const deserializeAws_json1_1EventList = (
  output: any,
  context: __SerdeContext
): Array<Event> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Event(entry, context)
  );
};

const deserializeAws_json1_1EventTypeList = (
  output: any,
  context: __SerdeContext
): Array<EventType> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EventType(entry, context)
  );
};

const deserializeAws_json1_1OrganizationEventList = (
  output: any,
  context: __SerdeContext
): Array<OrganizationEvent> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OrganizationEvent(entry, context)
  );
};

const deserializeAws_json1_1affectedAccountsList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1AffectedEntity = (
  output: any,
  context: __SerdeContext
): AffectedEntity => {
  let contents: any = {
    __type: "AffectedEntity",
    awsAccountId: undefined,
    entityArn: undefined,
    entityUrl: undefined,
    entityValue: undefined,
    eventArn: undefined,
    lastUpdatedTime: undefined,
    statusCode: undefined,
    tags: undefined
  };
  if (output.awsAccountId !== undefined) {
    contents.awsAccountId = output.awsAccountId;
  }
  if (output.entityArn !== undefined) {
    contents.entityArn = output.entityArn;
  }
  if (output.entityUrl !== undefined) {
    contents.entityUrl = output.entityUrl;
  }
  if (output.entityValue !== undefined) {
    contents.entityValue = output.entityValue;
  }
  if (output.eventArn !== undefined) {
    contents.eventArn = output.eventArn;
  }
  if (output.lastUpdatedTime !== undefined) {
    contents.lastUpdatedTime = new Date(
      Math.round(output.lastUpdatedTime * 1000)
    );
  }
  if (output.statusCode !== undefined) {
    contents.statusCode = output.statusCode;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1tagSet(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1EntityAggregate = (
  output: any,
  context: __SerdeContext
): EntityAggregate => {
  let contents: any = {
    __type: "EntityAggregate",
    count: undefined,
    eventArn: undefined
  };
  if (output.count !== undefined) {
    contents.count = output.count;
  }
  if (output.eventArn !== undefined) {
    contents.eventArn = output.eventArn;
  }
  return contents;
};

const deserializeAws_json1_1Event = (
  output: any,
  context: __SerdeContext
): Event => {
  let contents: any = {
    __type: "Event",
    arn: undefined,
    availabilityZone: undefined,
    endTime: undefined,
    eventTypeCategory: undefined,
    eventTypeCode: undefined,
    lastUpdatedTime: undefined,
    region: undefined,
    service: undefined,
    startTime: undefined,
    statusCode: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.availabilityZone !== undefined) {
    contents.availabilityZone = output.availabilityZone;
  }
  if (output.endTime !== undefined) {
    contents.endTime = new Date(Math.round(output.endTime * 1000));
  }
  if (output.eventTypeCategory !== undefined) {
    contents.eventTypeCategory = output.eventTypeCategory;
  }
  if (output.eventTypeCode !== undefined) {
    contents.eventTypeCode = output.eventTypeCode;
  }
  if (output.lastUpdatedTime !== undefined) {
    contents.lastUpdatedTime = new Date(
      Math.round(output.lastUpdatedTime * 1000)
    );
  }
  if (output.region !== undefined) {
    contents.region = output.region;
  }
  if (output.service !== undefined) {
    contents.service = output.service;
  }
  if (output.startTime !== undefined) {
    contents.startTime = new Date(Math.round(output.startTime * 1000));
  }
  if (output.statusCode !== undefined) {
    contents.statusCode = output.statusCode;
  }
  return contents;
};

const deserializeAws_json1_1EventAggregate = (
  output: any,
  context: __SerdeContext
): EventAggregate => {
  let contents: any = {
    __type: "EventAggregate",
    aggregateValue: undefined,
    count: undefined
  };
  if (output.aggregateValue !== undefined) {
    contents.aggregateValue = output.aggregateValue;
  }
  if (output.count !== undefined) {
    contents.count = output.count;
  }
  return contents;
};

const deserializeAws_json1_1EventDescription = (
  output: any,
  context: __SerdeContext
): EventDescription => {
  let contents: any = {
    __type: "EventDescription",
    latestDescription: undefined
  };
  if (output.latestDescription !== undefined) {
    contents.latestDescription = output.latestDescription;
  }
  return contents;
};

const deserializeAws_json1_1EventDetails = (
  output: any,
  context: __SerdeContext
): EventDetails => {
  let contents: any = {
    __type: "EventDetails",
    event: undefined,
    eventDescription: undefined,
    eventMetadata: undefined
  };
  if (output.event !== undefined) {
    contents.event = deserializeAws_json1_1Event(output.event, context);
  }
  if (output.eventDescription !== undefined) {
    contents.eventDescription = deserializeAws_json1_1EventDescription(
      output.eventDescription,
      context
    );
  }
  if (output.eventMetadata !== undefined) {
    contents.eventMetadata = deserializeAws_json1_1eventMetadata(
      output.eventMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1EventDetailsErrorItem = (
  output: any,
  context: __SerdeContext
): EventDetailsErrorItem => {
  let contents: any = {
    __type: "EventDetailsErrorItem",
    errorMessage: undefined,
    errorName: undefined,
    eventArn: undefined
  };
  if (output.errorMessage !== undefined) {
    contents.errorMessage = output.errorMessage;
  }
  if (output.errorName !== undefined) {
    contents.errorName = output.errorName;
  }
  if (output.eventArn !== undefined) {
    contents.eventArn = output.eventArn;
  }
  return contents;
};

const deserializeAws_json1_1EventType = (
  output: any,
  context: __SerdeContext
): EventType => {
  let contents: any = {
    __type: "EventType",
    category: undefined,
    code: undefined,
    service: undefined
  };
  if (output.category !== undefined) {
    contents.category = output.category;
  }
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.service !== undefined) {
    contents.service = output.service;
  }
  return contents;
};

const deserializeAws_json1_1OrganizationAffectedEntitiesErrorItem = (
  output: any,
  context: __SerdeContext
): OrganizationAffectedEntitiesErrorItem => {
  let contents: any = {
    __type: "OrganizationAffectedEntitiesErrorItem",
    awsAccountId: undefined,
    errorMessage: undefined,
    errorName: undefined,
    eventArn: undefined
  };
  if (output.awsAccountId !== undefined) {
    contents.awsAccountId = output.awsAccountId;
  }
  if (output.errorMessage !== undefined) {
    contents.errorMessage = output.errorMessage;
  }
  if (output.errorName !== undefined) {
    contents.errorName = output.errorName;
  }
  if (output.eventArn !== undefined) {
    contents.eventArn = output.eventArn;
  }
  return contents;
};

const deserializeAws_json1_1OrganizationEvent = (
  output: any,
  context: __SerdeContext
): OrganizationEvent => {
  let contents: any = {
    __type: "OrganizationEvent",
    arn: undefined,
    endTime: undefined,
    eventTypeCategory: undefined,
    eventTypeCode: undefined,
    lastUpdatedTime: undefined,
    region: undefined,
    service: undefined,
    startTime: undefined,
    statusCode: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.endTime !== undefined) {
    contents.endTime = new Date(Math.round(output.endTime * 1000));
  }
  if (output.eventTypeCategory !== undefined) {
    contents.eventTypeCategory = output.eventTypeCategory;
  }
  if (output.eventTypeCode !== undefined) {
    contents.eventTypeCode = output.eventTypeCode;
  }
  if (output.lastUpdatedTime !== undefined) {
    contents.lastUpdatedTime = new Date(
      Math.round(output.lastUpdatedTime * 1000)
    );
  }
  if (output.region !== undefined) {
    contents.region = output.region;
  }
  if (output.service !== undefined) {
    contents.service = output.service;
  }
  if (output.startTime !== undefined) {
    contents.startTime = new Date(Math.round(output.startTime * 1000));
  }
  if (output.statusCode !== undefined) {
    contents.statusCode = output.statusCode;
  }
  return contents;
};

const deserializeAws_json1_1OrganizationEventDetails = (
  output: any,
  context: __SerdeContext
): OrganizationEventDetails => {
  let contents: any = {
    __type: "OrganizationEventDetails",
    awsAccountId: undefined,
    event: undefined,
    eventDescription: undefined,
    eventMetadata: undefined
  };
  if (output.awsAccountId !== undefined) {
    contents.awsAccountId = output.awsAccountId;
  }
  if (output.event !== undefined) {
    contents.event = deserializeAws_json1_1Event(output.event, context);
  }
  if (output.eventDescription !== undefined) {
    contents.eventDescription = deserializeAws_json1_1EventDescription(
      output.eventDescription,
      context
    );
  }
  if (output.eventMetadata !== undefined) {
    contents.eventMetadata = deserializeAws_json1_1eventMetadata(
      output.eventMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1OrganizationEventDetailsErrorItem = (
  output: any,
  context: __SerdeContext
): OrganizationEventDetailsErrorItem => {
  let contents: any = {
    __type: "OrganizationEventDetailsErrorItem",
    awsAccountId: undefined,
    errorMessage: undefined,
    errorName: undefined,
    eventArn: undefined
  };
  if (output.awsAccountId !== undefined) {
    contents.awsAccountId = output.awsAccountId;
  }
  if (output.errorMessage !== undefined) {
    contents.errorMessage = output.errorMessage;
  }
  if (output.errorName !== undefined) {
    contents.errorName = output.errorName;
  }
  if (output.eventArn !== undefined) {
    contents.eventArn = output.eventArn;
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
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
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
