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
  CrossRegionCopyRetainRule,
  CrossRegionCopyRule,
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
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
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
  let body: any;
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
    const labelValue: string = input.PolicyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PolicyId.");
    }
    resolvedPath = resolvedPath.replace(
      "{PolicyId}",
      __extendedEncodeURIComponent(labelValue)
    );
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
    query["state"] = input.State;
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
    const labelValue: string = input.PolicyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PolicyId.");
    }
    resolvedPath = resolvedPath.replace(
      "{PolicyId}",
      __extendedEncodeURIComponent(labelValue)
    );
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
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
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
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
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
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
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
    const labelValue: string = input.PolicyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PolicyId.");
    }
    resolvedPath = resolvedPath.replace(
      "{PolicyId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: PolicyId.");
  }
  let body: any;
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
  if (data.PolicyId !== undefined && data.PolicyId !== null) {
    contents.PolicyId = data.PolicyId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateLifecyclePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLifecyclePolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteLifecyclePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
  if (data.Policies !== undefined && data.Policies !== null) {
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
  if (data.Policy !== undefined && data.Policy !== null) {
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateLifecyclePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLifecyclePolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
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
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined,
    MutuallyExclusiveParameters: undefined,
    RequiredParameters: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (
    data.MutuallyExclusiveParameters !== undefined &&
    data.MutuallyExclusiveParameters !== null
  ) {
    contents.MutuallyExclusiveParameters = deserializeAws_restJson1_1ParameterList(
      data.MutuallyExclusiveParameters,
      context
    );
  }
  if (
    data.RequiredParameters !== undefined &&
    data.RequiredParameters !== null
  ) {
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
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined,
    ResourceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
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
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined,
    ResourceIds: undefined,
    ResourceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceIds !== undefined && data.ResourceIds !== null) {
    contents.ResourceIds = deserializeAws_restJson1_1PolicyIdList(
      data.ResourceIds,
      context
    );
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const serializeAws_restJson1_1AvailabilityZoneList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1CreateRule = (
  input: CreateRule,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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

const serializeAws_restJson1_1CrossRegionCopyRetainRule = (
  input: CrossRegionCopyRetainRule,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Interval !== undefined) {
    bodyParams["Interval"] = input.Interval;
  }
  if (input.IntervalUnit !== undefined) {
    bodyParams["IntervalUnit"] = input.IntervalUnit;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CrossRegionCopyRule = (
  input: CrossRegionCopyRule,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CmkArn !== undefined) {
    bodyParams["CmkArn"] = input.CmkArn;
  }
  if (input.CopyTags !== undefined) {
    bodyParams["CopyTags"] = input.CopyTags;
  }
  if (input.Encrypted !== undefined) {
    bodyParams["Encrypted"] = input.Encrypted;
  }
  if (input.RetainRule !== undefined) {
    bodyParams[
      "RetainRule"
    ] = serializeAws_restJson1_1CrossRegionCopyRetainRule(
      input.RetainRule,
      context
    );
  }
  if (input.TargetRegion !== undefined) {
    bodyParams["TargetRegion"] = input.TargetRegion;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CrossRegionCopyRules = (
  input: Array<CrossRegionCopyRule>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1CrossRegionCopyRule(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1FastRestoreRule = (
  input: FastRestoreRule,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
  if (input.ExcludeBootVolume !== undefined) {
    bodyParams["ExcludeBootVolume"] = input.ExcludeBootVolume;
  }
  return bodyParams;
};

const serializeAws_restJson1_1PolicyDetails = (
  input: PolicyDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1RetainRule = (
  input: RetainRule,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
  if (input.CopyTags !== undefined) {
    bodyParams["CopyTags"] = input.CopyTags;
  }
  if (input.CreateRule !== undefined) {
    bodyParams["CreateRule"] = serializeAws_restJson1_1CreateRule(
      input.CreateRule,
      context
    );
  }
  if (input.CrossRegionCopyRules !== undefined) {
    bodyParams[
      "CrossRegionCopyRules"
    ] = serializeAws_restJson1_1CrossRegionCopyRules(
      input.CrossRegionCopyRules,
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
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Schedule(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1TagsToAddList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1TargetTagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1TimesList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1VariableTagsList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Tag(entry, context));
  }
  return contents;
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
  if (output.Interval !== undefined && output.Interval !== null) {
    contents.Interval = output.Interval;
  }
  if (output.IntervalUnit !== undefined && output.IntervalUnit !== null) {
    contents.IntervalUnit = output.IntervalUnit;
  }
  if (output.Times !== undefined && output.Times !== null) {
    contents.Times = deserializeAws_restJson1_1TimesList(output.Times, context);
  }
  return contents;
};

const deserializeAws_restJson1_1CrossRegionCopyRetainRule = (
  output: any,
  context: __SerdeContext
): CrossRegionCopyRetainRule => {
  let contents: any = {
    __type: "CrossRegionCopyRetainRule",
    Interval: undefined,
    IntervalUnit: undefined
  };
  if (output.Interval !== undefined && output.Interval !== null) {
    contents.Interval = output.Interval;
  }
  if (output.IntervalUnit !== undefined && output.IntervalUnit !== null) {
    contents.IntervalUnit = output.IntervalUnit;
  }
  return contents;
};

const deserializeAws_restJson1_1CrossRegionCopyRule = (
  output: any,
  context: __SerdeContext
): CrossRegionCopyRule => {
  let contents: any = {
    __type: "CrossRegionCopyRule",
    CmkArn: undefined,
    CopyTags: undefined,
    Encrypted: undefined,
    RetainRule: undefined,
    TargetRegion: undefined
  };
  if (output.CmkArn !== undefined && output.CmkArn !== null) {
    contents.CmkArn = output.CmkArn;
  }
  if (output.CopyTags !== undefined && output.CopyTags !== null) {
    contents.CopyTags = output.CopyTags;
  }
  if (output.Encrypted !== undefined && output.Encrypted !== null) {
    contents.Encrypted = output.Encrypted;
  }
  if (output.RetainRule !== undefined && output.RetainRule !== null) {
    contents.RetainRule = deserializeAws_restJson1_1CrossRegionCopyRetainRule(
      output.RetainRule,
      context
    );
  }
  if (output.TargetRegion !== undefined && output.TargetRegion !== null) {
    contents.TargetRegion = output.TargetRegion;
  }
  return contents;
};

const deserializeAws_restJson1_1CrossRegionCopyRules = (
  output: any,
  context: __SerdeContext
): Array<CrossRegionCopyRule> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CrossRegionCopyRule(entry, context)
  );
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
  if (
    output.AvailabilityZones !== undefined &&
    output.AvailabilityZones !== null
  ) {
    contents.AvailabilityZones = deserializeAws_restJson1_1AvailabilityZoneList(
      output.AvailabilityZones,
      context
    );
  }
  if (output.Count !== undefined && output.Count !== null) {
    contents.Count = output.Count;
  }
  if (output.Interval !== undefined && output.Interval !== null) {
    contents.Interval = output.Interval;
  }
  if (output.IntervalUnit !== undefined && output.IntervalUnit !== null) {
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
  if (output.DateCreated !== undefined && output.DateCreated !== null) {
    contents.DateCreated = new Date(output.DateCreated);
  }
  if (output.DateModified !== undefined && output.DateModified !== null) {
    contents.DateModified = new Date(output.DateModified);
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (
    output.ExecutionRoleArn !== undefined &&
    output.ExecutionRoleArn !== null
  ) {
    contents.ExecutionRoleArn = output.ExecutionRoleArn;
  }
  if (output.PolicyArn !== undefined && output.PolicyArn !== null) {
    contents.PolicyArn = output.PolicyArn;
  }
  if (output.PolicyDetails !== undefined && output.PolicyDetails !== null) {
    contents.PolicyDetails = deserializeAws_restJson1_1PolicyDetails(
      output.PolicyDetails,
      context
    );
  }
  if (output.PolicyId !== undefined && output.PolicyId !== null) {
    contents.PolicyId = output.PolicyId;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
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
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.PolicyId !== undefined && output.PolicyId !== null) {
    contents.PolicyId = output.PolicyId;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
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
  if (
    output.ExcludeBootVolume !== undefined &&
    output.ExcludeBootVolume !== null
  ) {
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
  if (output.Parameters !== undefined && output.Parameters !== null) {
    contents.Parameters = deserializeAws_restJson1_1_Parameters(
      output.Parameters,
      context
    );
  }
  if (output.PolicyType !== undefined && output.PolicyType !== null) {
    contents.PolicyType = output.PolicyType;
  }
  if (output.ResourceTypes !== undefined && output.ResourceTypes !== null) {
    contents.ResourceTypes = deserializeAws_restJson1_1ResourceTypeValuesList(
      output.ResourceTypes,
      context
    );
  }
  if (output.Schedules !== undefined && output.Schedules !== null) {
    contents.Schedules = deserializeAws_restJson1_1ScheduleList(
      output.Schedules,
      context
    );
  }
  if (output.TargetTags !== undefined && output.TargetTags !== null) {
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
  if (output.Count !== undefined && output.Count !== null) {
    contents.Count = output.Count;
  }
  if (output.Interval !== undefined && output.Interval !== null) {
    contents.Interval = output.Interval;
  }
  if (output.IntervalUnit !== undefined && output.IntervalUnit !== null) {
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
    CrossRegionCopyRules: undefined,
    FastRestoreRule: undefined,
    Name: undefined,
    RetainRule: undefined,
    TagsToAdd: undefined,
    VariableTags: undefined
  };
  if (output.CopyTags !== undefined && output.CopyTags !== null) {
    contents.CopyTags = output.CopyTags;
  }
  if (output.CreateRule !== undefined && output.CreateRule !== null) {
    contents.CreateRule = deserializeAws_restJson1_1CreateRule(
      output.CreateRule,
      context
    );
  }
  if (
    output.CrossRegionCopyRules !== undefined &&
    output.CrossRegionCopyRules !== null
  ) {
    contents.CrossRegionCopyRules = deserializeAws_restJson1_1CrossRegionCopyRules(
      output.CrossRegionCopyRules,
      context
    );
  }
  if (output.FastRestoreRule !== undefined && output.FastRestoreRule !== null) {
    contents.FastRestoreRule = deserializeAws_restJson1_1FastRestoreRule(
      output.FastRestoreRule,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.RetainRule !== undefined && output.RetainRule !== null) {
    contents.RetainRule = deserializeAws_restJson1_1RetainRule(
      output.RetainRule,
      context
    );
  }
  if (output.TagsToAdd !== undefined && output.TagsToAdd !== null) {
    contents.TagsToAdd = deserializeAws_restJson1_1TagsToAddList(
      output.TagsToAdd,
      context
    );
  }
  if (output.VariableTags !== undefined && output.VariableTags !== null) {
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
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_restJson1_1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
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
