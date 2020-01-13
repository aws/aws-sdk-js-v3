import {
  CreateLifecyclePolicyCommandInput,
  CreateLifecyclePolicyCommandOutput
} from "../commands/CreateLifecyclePolicyCommand";
import {
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput
} from "../commands/DeleteLifecyclePolicyCommand";
import {
  GetLifecyclePoliciesCommandInput,
  GetLifecyclePoliciesCommandOutput
} from "../commands/GetLifecyclePoliciesCommand";
import {
  GetLifecyclePolicyCommandInput,
  GetLifecyclePolicyCommandOutput
} from "../commands/GetLifecyclePolicyCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateLifecyclePolicyCommandInput,
  UpdateLifecyclePolicyCommandOutput
} from "../commands/UpdateLifecyclePolicyCommand";
import {
  CreateRule,
  FastRestoreRule,
  InternalServerException,
  InvalidRequestException,
  LifecyclePolicy,
  LifecyclePolicySummary,
  LimitExceededException,
  PolicyDetails,
  ResourceNotFoundException,
  ResourceTypeValues,
  RetainRule,
  Schedule,
  Tag,
  _Parameters
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

export async function serializeAws_restJson1_1CreateLifecyclePolicyCommand(
  input: CreateLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/policies";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.ExecutionRoleArn !== undefined) {
    bodyParams["ExecutionRoleArn"] = input.ExecutionRoleArn;
  }
  if (input.PolicyDetails !== undefined) {
    bodyParams["PolicyDetails"] = serializeAws_restJson1_1PolicyDetails(
      input.PolicyDetails,
      context
    );
  }
  if (input.State !== undefined) {
    bodyParams["State"] = input.State;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagMap(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteLifecyclePolicyCommand(
  input: DeleteLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/policies/{PolicyId}";
  if (input.PolicyId !== undefined) {
    const labelValue: any = input.PolicyId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PolicyId.");
    }
    resolvedPath = resolvedPath.replace("{PolicyId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: PolicyId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetLifecyclePoliciesCommand(
  input: GetLifecyclePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/policies";
  const query: any = {};
  if (input.PolicyIds !== undefined) {
    query["policyIds"] = input.PolicyIds;
  }
  if (input.ResourceTypes !== undefined) {
    query["resourceTypes"] = input.ResourceTypes;
  }
  if (input.State !== undefined) {
    query["state"] = input.State.toString();
  }
  if (input.TagsToAdd !== undefined) {
    query["tagsToAdd"] = input.TagsToAdd;
  }
  if (input.TargetTags !== undefined) {
    query["targetTags"] = input.TargetTags;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetLifecyclePolicyCommand(
  input: GetLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/policies/{PolicyId}";
  if (input.PolicyId !== undefined) {
    const labelValue: any = input.PolicyId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PolicyId.");
    }
    resolvedPath = resolvedPath.replace("{PolicyId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: PolicyId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagMap(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {};
  if (input.TagKeys !== undefined) {
    query["tagKeys"] = input.TagKeys;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1UpdateLifecyclePolicyCommand(
  input: UpdateLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/policies/{PolicyId}";
  if (input.PolicyId !== undefined) {
    const labelValue: any = input.PolicyId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PolicyId.");
    }
    resolvedPath = resolvedPath.replace("{PolicyId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: PolicyId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.ExecutionRoleArn !== undefined) {
    bodyParams["ExecutionRoleArn"] = input.ExecutionRoleArn;
  }
  if (input.PolicyDetails !== undefined) {
    bodyParams["PolicyDetails"] = serializeAws_restJson1_1PolicyDetails(
      input.PolicyDetails,
      context
    );
  }
  if (input.State !== undefined) {
    bodyParams["State"] = input.State;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CreateLifecyclePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLifecyclePolicyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateLifecyclePolicyCommandError(
      output,
      context
    );
  }
  const contents: CreateLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLifecyclePolicyResponse",
    PolicyId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.PolicyId !== undefined) {
    contents.PolicyId = data.PolicyId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateLifecyclePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLifecyclePolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.abslifecyclefrontendlambda#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.abslifecyclefrontendlambda#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.abslifecyclefrontendlambda#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.abslifecyclefrontendlambda#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteLifecyclePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteLifecyclePolicyCommandError(
      output,
      context
    );
  }
  const contents: DeleteLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLifecyclePolicyResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteLifecyclePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.abslifecyclefrontendlambda#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.abslifecyclefrontendlambda#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.abslifecyclefrontendlambda#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.abslifecyclefrontendlambda#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetLifecyclePoliciesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePoliciesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetLifecyclePoliciesCommandError(
      output,
      context
    );
  }
  const contents: GetLifecyclePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLifecyclePoliciesResponse",
    Policies: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Policies !== undefined) {
    contents.Policies = deserializeAws_restJson1_1LifecyclePolicySummaryList(
      data.Policies,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetLifecyclePoliciesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePoliciesCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.abslifecyclefrontendlambda#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.abslifecyclefrontendlambda#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.abslifecyclefrontendlambda#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.abslifecyclefrontendlambda#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.abslifecyclefrontendlambda#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetLifecyclePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetLifecyclePolicyCommandError(
      output,
      context
    );
  }
  const contents: GetLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLifecyclePolicyResponse",
    Policy: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Policy !== undefined) {
    contents.Policy = deserializeAws_restJson1_1LifecyclePolicy(
      data.Policy,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetLifecyclePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.abslifecyclefrontendlambda#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.abslifecyclefrontendlambda#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.abslifecyclefrontendlambda#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.abslifecyclefrontendlambda#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.abslifecyclefrontendlambda#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.abslifecyclefrontendlambda#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.abslifecyclefrontendlambda#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.abslifecyclefrontendlambda#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.abslifecyclefrontendlambda#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.abslifecyclefrontendlambda#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.abslifecyclefrontendlambda#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.abslifecyclefrontendlambda#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.abslifecyclefrontendlambda#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.abslifecyclefrontendlambda#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.abslifecyclefrontendlambda#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.abslifecyclefrontendlambda#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateLifecyclePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLifecyclePolicyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateLifecyclePolicyCommandError(
      output,
      context
    );
  }
  const contents: UpdateLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateLifecyclePolicyResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateLifecyclePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLifecyclePolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.abslifecyclefrontendlambda#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.abslifecyclefrontendlambda#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.abslifecyclefrontendlambda#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.abslifecyclefrontendlambda#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.abslifecyclefrontendlambda#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    __type: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    __type: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined,
    MutuallyExclusiveParameters: undefined,
    RequiredParameters: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  if (data.MutuallyExclusiveParameters !== undefined) {
    contents.MutuallyExclusiveParameters = deserializeAws_restJson1_1ParameterList(
      data.MutuallyExclusiveParameters,
      context
    );
  }
  if (data.RequiredParameters !== undefined) {
    contents.RequiredParameters = deserializeAws_restJson1_1ParameterList(
      data.RequiredParameters,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined,
    ResourceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  if (data.ResourceType !== undefined) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined,
    ResourceIds: undefined,
    ResourceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  if (data.ResourceIds !== undefined) {
    contents.ResourceIds = deserializeAws_restJson1_1PolicyIdList(
      data.ResourceIds,
      context
    );
  }
  if (data.ResourceType !== undefined) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const serializeAws_restJson1_1AvailabilityZoneList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1CreateRule = (
  input: CreateRule,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Interval !== undefined) {
    bodyParams["Interval"] = input.Interval;
  }
  if (input.IntervalUnit !== undefined) {
    bodyParams["IntervalUnit"] = input.IntervalUnit;
  }
  if (input.Times !== undefined) {
    bodyParams["Times"] = serializeAws_restJson1_1TimesList(
      input.Times,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1FastRestoreRule = (
  input: FastRestoreRule,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AvailabilityZones !== undefined) {
    bodyParams[
      "AvailabilityZones"
    ] = serializeAws_restJson1_1AvailabilityZoneList(
      input.AvailabilityZones,
      context
    );
  }
  if (input.Count !== undefined) {
    bodyParams["Count"] = input.Count;
  }
  if (input.Interval !== undefined) {
    bodyParams["Interval"] = input.Interval;
  }
  if (input.IntervalUnit !== undefined) {
    bodyParams["IntervalUnit"] = input.IntervalUnit;
  }
  return bodyParams;
};

const serializeAws_restJson1_1_Parameters = (
  input: _Parameters,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ExcludeBootVolume !== undefined) {
    bodyParams["ExcludeBootVolume"] = input.ExcludeBootVolume;
  }
  return bodyParams;
};

const serializeAws_restJson1_1PolicyDetails = (
  input: PolicyDetails,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Parameters !== undefined) {
    bodyParams["Parameters"] = serializeAws_restJson1_1_Parameters(
      input.Parameters,
      context
    );
  }
  if (input.PolicyType !== undefined) {
    bodyParams["PolicyType"] = input.PolicyType;
  }
  if (input.ResourceTypes !== undefined) {
    bodyParams[
      "ResourceTypes"
    ] = serializeAws_restJson1_1ResourceTypeValuesList(
      input.ResourceTypes,
      context
    );
  }
  if (input.Schedules !== undefined) {
    bodyParams["Schedules"] = serializeAws_restJson1_1ScheduleList(
      input.Schedules,
      context
    );
  }
  if (input.TargetTags !== undefined) {
    bodyParams["TargetTags"] = serializeAws_restJson1_1TargetTagList(
      input.TargetTags,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ResourceTypeValuesList = (
  input: Array<ResourceTypeValues | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1RetainRule = (
  input: RetainRule,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Count !== undefined) {
    bodyParams["Count"] = input.Count;
  }
  if (input.Interval !== undefined) {
    bodyParams["Interval"] = input.Interval;
  }
  if (input.IntervalUnit !== undefined) {
    bodyParams["IntervalUnit"] = input.IntervalUnit;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Schedule = (
  input: Schedule,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CopyTags !== undefined) {
    bodyParams["CopyTags"] = input.CopyTags;
  }
  if (input.CreateRule !== undefined) {
    bodyParams["CreateRule"] = serializeAws_restJson1_1CreateRule(
      input.CreateRule,
      context
    );
  }
  if (input.FastRestoreRule !== undefined) {
    bodyParams["FastRestoreRule"] = serializeAws_restJson1_1FastRestoreRule(
      input.FastRestoreRule,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.RetainRule !== undefined) {
    bodyParams["RetainRule"] = serializeAws_restJson1_1RetainRule(
      input.RetainRule,
      context
    );
  }
  if (input.TagsToAdd !== undefined) {
    bodyParams["TagsToAdd"] = serializeAws_restJson1_1TagsToAddList(
      input.TagsToAdd,
      context
    );
  }
  if (input.VariableTags !== undefined) {
    bodyParams["VariableTags"] = serializeAws_restJson1_1VariableTagsList(
      input.VariableTags,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ScheduleList = (
  input: Array<Schedule>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1Schedule(entry, context)
  );
};

const serializeAws_restJson1_1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1TagsToAddList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1Tag(entry, context)
  );
};

const serializeAws_restJson1_1TargetTagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1Tag(entry, context)
  );
};

const serializeAws_restJson1_1TimesList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1VariableTagsList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1Tag(entry, context)
  );
};

const deserializeAws_restJson1_1AvailabilityZoneList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1CreateRule = (
  output: any,
  context: __SerdeContext
): CreateRule => {
  let contents: any = {
    __type: "CreateRule",
    Interval: undefined,
    IntervalUnit: undefined,
    Times: undefined
  };
  if (output.Interval !== undefined) {
    contents.Interval = output.Interval;
  }
  if (output.IntervalUnit !== undefined) {
    contents.IntervalUnit = output.IntervalUnit;
  }
  if (output.Times !== undefined) {
    contents.Times = deserializeAws_restJson1_1TimesList(output.Times, context);
  }
  return contents;
};

const deserializeAws_restJson1_1FastRestoreRule = (
  output: any,
  context: __SerdeContext
): FastRestoreRule => {
  let contents: any = {
    __type: "FastRestoreRule",
    AvailabilityZones: undefined,
    Count: undefined,
    Interval: undefined,
    IntervalUnit: undefined
  };
  if (output.AvailabilityZones !== undefined) {
    contents.AvailabilityZones = deserializeAws_restJson1_1AvailabilityZoneList(
      output.AvailabilityZones,
      context
    );
  }
  if (output.Count !== undefined) {
    contents.Count = output.Count;
  }
  if (output.Interval !== undefined) {
    contents.Interval = output.Interval;
  }
  if (output.IntervalUnit !== undefined) {
    contents.IntervalUnit = output.IntervalUnit;
  }
  return contents;
};

const deserializeAws_restJson1_1LifecyclePolicy = (
  output: any,
  context: __SerdeContext
): LifecyclePolicy => {
  let contents: any = {
    __type: "LifecyclePolicy",
    DateCreated: undefined,
    DateModified: undefined,
    Description: undefined,
    ExecutionRoleArn: undefined,
    PolicyArn: undefined,
    PolicyDetails: undefined,
    PolicyId: undefined,
    State: undefined,
    StatusMessage: undefined,
    Tags: undefined
  };
  if (output.DateCreated !== undefined) {
    contents.DateCreated = new Date(
      output.DateCreated % 1 != 0
        ? Math.round(output.DateCreated * 1000)
        : output.DateCreated
    );
  }
  if (output.DateModified !== undefined) {
    contents.DateModified = new Date(
      output.DateModified % 1 != 0
        ? Math.round(output.DateModified * 1000)
        : output.DateModified
    );
  }
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.ExecutionRoleArn !== undefined) {
    contents.ExecutionRoleArn = output.ExecutionRoleArn;
  }
  if (output.PolicyArn !== undefined) {
    contents.PolicyArn = output.PolicyArn;
  }
  if (output.PolicyDetails !== undefined) {
    contents.PolicyDetails = deserializeAws_restJson1_1PolicyDetails(
      output.PolicyDetails,
      context
    );
  }
  if (output.PolicyId !== undefined) {
    contents.PolicyId = output.PolicyId;
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  if (output.StatusMessage !== undefined) {
    contents.StatusMessage = output.StatusMessage;
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1TagMap(output.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1LifecyclePolicySummary = (
  output: any,
  context: __SerdeContext
): LifecyclePolicySummary => {
  let contents: any = {
    __type: "LifecyclePolicySummary",
    Description: undefined,
    PolicyId: undefined,
    State: undefined,
    Tags: undefined
  };
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.PolicyId !== undefined) {
    contents.PolicyId = output.PolicyId;
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1TagMap(output.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1LifecyclePolicySummaryList = (
  output: any,
  context: __SerdeContext
): Array<LifecyclePolicySummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1LifecyclePolicySummary(entry, context)
  );
};

const deserializeAws_restJson1_1ParameterList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1_Parameters = (
  output: any,
  context: __SerdeContext
): _Parameters => {
  let contents: any = {
    __type: "Parameters",
    ExcludeBootVolume: undefined
  };
  if (output.ExcludeBootVolume !== undefined) {
    contents.ExcludeBootVolume = output.ExcludeBootVolume;
  }
  return contents;
};

const deserializeAws_restJson1_1PolicyDetails = (
  output: any,
  context: __SerdeContext
): PolicyDetails => {
  let contents: any = {
    __type: "PolicyDetails",
    Parameters: undefined,
    PolicyType: undefined,
    ResourceTypes: undefined,
    Schedules: undefined,
    TargetTags: undefined
  };
  if (output.Parameters !== undefined) {
    contents.Parameters = deserializeAws_restJson1_1_Parameters(
      output.Parameters,
      context
    );
  }
  if (output.PolicyType !== undefined) {
    contents.PolicyType = output.PolicyType;
  }
  if (output.ResourceTypes !== undefined) {
    contents.ResourceTypes = deserializeAws_restJson1_1ResourceTypeValuesList(
      output.ResourceTypes,
      context
    );
  }
  if (output.Schedules !== undefined) {
    contents.Schedules = deserializeAws_restJson1_1ScheduleList(
      output.Schedules,
      context
    );
  }
  if (output.TargetTags !== undefined) {
    contents.TargetTags = deserializeAws_restJson1_1TargetTagList(
      output.TargetTags,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1PolicyIdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1ResourceTypeValuesList = (
  output: any,
  context: __SerdeContext
): Array<ResourceTypeValues | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1RetainRule = (
  output: any,
  context: __SerdeContext
): RetainRule => {
  let contents: any = {
    __type: "RetainRule",
    Count: undefined,
    Interval: undefined,
    IntervalUnit: undefined
  };
  if (output.Count !== undefined) {
    contents.Count = output.Count;
  }
  if (output.Interval !== undefined) {
    contents.Interval = output.Interval;
  }
  if (output.IntervalUnit !== undefined) {
    contents.IntervalUnit = output.IntervalUnit;
  }
  return contents;
};

const deserializeAws_restJson1_1Schedule = (
  output: any,
  context: __SerdeContext
): Schedule => {
  let contents: any = {
    __type: "Schedule",
    CopyTags: undefined,
    CreateRule: undefined,
    FastRestoreRule: undefined,
    Name: undefined,
    RetainRule: undefined,
    TagsToAdd: undefined,
    VariableTags: undefined
  };
  if (output.CopyTags !== undefined) {
    contents.CopyTags = output.CopyTags;
  }
  if (output.CreateRule !== undefined) {
    contents.CreateRule = deserializeAws_restJson1_1CreateRule(
      output.CreateRule,
      context
    );
  }
  if (output.FastRestoreRule !== undefined) {
    contents.FastRestoreRule = deserializeAws_restJson1_1FastRestoreRule(
      output.FastRestoreRule,
      context
    );
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.RetainRule !== undefined) {
    contents.RetainRule = deserializeAws_restJson1_1RetainRule(
      output.RetainRule,
      context
    );
  }
  if (output.TagsToAdd !== undefined) {
    contents.TagsToAdd = deserializeAws_restJson1_1TagsToAddList(
      output.TagsToAdd,
      context
    );
  }
  if (output.VariableTags !== undefined) {
    contents.VariableTags = deserializeAws_restJson1_1VariableTagsList(
      output.VariableTags,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ScheduleList = (
  output: any,
  context: __SerdeContext
): Array<Schedule> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Schedule(entry, context)
  );
};

const deserializeAws_restJson1_1Tag = (
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

const deserializeAws_restJson1_1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1TagsToAddList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Tag(entry, context)
  );
};

const deserializeAws_restJson1_1TargetTagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Tag(entry, context)
  );
};

const deserializeAws_restJson1_1TimesList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1VariableTagsList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Tag(entry, context)
  );
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
