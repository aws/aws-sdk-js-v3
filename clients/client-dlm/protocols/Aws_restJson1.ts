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

export const serializeAws_restJson1CreateLifecyclePolicyCommand = async (
  input: CreateLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/policies";
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.ExecutionRoleArn !== undefined && {
      ExecutionRoleArn: input.ExecutionRoleArn
    }),
    ...(input.PolicyDetails !== undefined && {
      PolicyDetails: serializeAws_restJson1PolicyDetails(
        input.PolicyDetails,
        context
      )
    }),
    ...(input.State !== undefined && { State: input.State }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1TagMap(input.Tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteLifecyclePolicyCommand = async (
  input: DeleteLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetLifecyclePoliciesCommand = async (
  input: GetLifecyclePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/policies";
  const query: any = {
    ...(input.PolicyIds !== undefined && {
      policyIds: (input.PolicyIds || []).map(_entry => _entry)
    }),
    ...(input.ResourceTypes !== undefined && {
      resourceTypes: (input.ResourceTypes || []).map(_entry => _entry)
    }),
    ...(input.State !== undefined && { state: input.State }),
    ...(input.TagsToAdd !== undefined && {
      tagsToAdd: (input.TagsToAdd || []).map(_entry => _entry)
    }),
    ...(input.TargetTags !== undefined && {
      targetTags: (input.TargetTags || []).map(_entry => _entry)
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1GetLifecyclePolicyCommand = async (
  input: GetLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1TagMap(input.Tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.TagKeys !== undefined && {
      tagKeys: (input.TagKeys || []).map(_entry => _entry)
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1UpdateLifecyclePolicyCommand = async (
  input: UpdateLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.ExecutionRoleArn !== undefined && {
      ExecutionRoleArn: input.ExecutionRoleArn
    }),
    ...(input.PolicyDetails !== undefined && {
      PolicyDetails: serializeAws_restJson1PolicyDetails(
        input.PolicyDetails,
        context
      )
    }),
    ...(input.State !== undefined && { State: input.State })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1CreateLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateLifecyclePolicyCommandError(
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
};

const deserializeAws_restJson1CreateLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
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

export const deserializeAws_restJson1DeleteLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteLifecyclePolicyCommandError(
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
};

const deserializeAws_restJson1DeleteLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1GetLifecyclePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetLifecyclePoliciesCommandError(
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
    contents.Policies = deserializeAws_restJson1LifecyclePolicySummaryList(
      data.Policies,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLifecyclePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1GetLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetLifecyclePolicyCommandError(
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
    contents.Policy = deserializeAws_restJson1LifecyclePolicy(
      data.Policy,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(
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
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1UpdateLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateLifecyclePolicyCommandError(
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
};

const deserializeAws_restJson1UpdateLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dlm#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.dlm#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dlm#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dlm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
    MutuallyExclusiveParameters: undefined,
    RequiredParameters: undefined
  };
  const data: any = parsedOutput.body;
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
    contents.MutuallyExclusiveParameters = deserializeAws_restJson1ParameterList(
      data.MutuallyExclusiveParameters,
      context
    );
  }
  if (
    data.RequiredParameters !== undefined &&
    data.RequiredParameters !== null
  ) {
    contents.RequiredParameters = deserializeAws_restJson1ParameterList(
      data.RequiredParameters,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
    ResourceType: undefined
  };
  const data: any = parsedOutput.body;
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
    ResourceIds: undefined,
    ResourceType: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceIds !== undefined && data.ResourceIds !== null) {
    contents.ResourceIds = deserializeAws_restJson1PolicyIdList(
      data.ResourceIds,
      context
    );
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const serializeAws_restJson1AvailabilityZoneList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1CreateRule = (
  input: CreateRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Interval !== undefined && { Interval: input.Interval }),
    ...(input.IntervalUnit !== undefined && {
      IntervalUnit: input.IntervalUnit
    }),
    ...(input.Times !== undefined && {
      Times: serializeAws_restJson1TimesList(input.Times, context)
    })
  };
};

const serializeAws_restJson1CrossRegionCopyRetainRule = (
  input: CrossRegionCopyRetainRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Interval !== undefined && { Interval: input.Interval }),
    ...(input.IntervalUnit !== undefined && {
      IntervalUnit: input.IntervalUnit
    })
  };
};

const serializeAws_restJson1CrossRegionCopyRule = (
  input: CrossRegionCopyRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.CmkArn !== undefined && { CmkArn: input.CmkArn }),
    ...(input.CopyTags !== undefined && { CopyTags: input.CopyTags }),
    ...(input.Encrypted !== undefined && { Encrypted: input.Encrypted }),
    ...(input.RetainRule !== undefined && {
      RetainRule: serializeAws_restJson1CrossRegionCopyRetainRule(
        input.RetainRule,
        context
      )
    }),
    ...(input.TargetRegion !== undefined && {
      TargetRegion: input.TargetRegion
    })
  };
};

const serializeAws_restJson1CrossRegionCopyRules = (
  input: CrossRegionCopyRule[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1CrossRegionCopyRule(entry, context)
  );
};

const serializeAws_restJson1FastRestoreRule = (
  input: FastRestoreRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZones !== undefined && {
      AvailabilityZones: serializeAws_restJson1AvailabilityZoneList(
        input.AvailabilityZones,
        context
      )
    }),
    ...(input.Count !== undefined && { Count: input.Count }),
    ...(input.Interval !== undefined && { Interval: input.Interval }),
    ...(input.IntervalUnit !== undefined && {
      IntervalUnit: input.IntervalUnit
    })
  };
};

const serializeAws_restJson1_Parameters = (
  input: _Parameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExcludeBootVolume !== undefined && {
      ExcludeBootVolume: input.ExcludeBootVolume
    })
  };
};

const serializeAws_restJson1PolicyDetails = (
  input: PolicyDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Parameters !== undefined && {
      Parameters: serializeAws_restJson1_Parameters(input.Parameters, context)
    }),
    ...(input.PolicyType !== undefined && { PolicyType: input.PolicyType }),
    ...(input.ResourceTypes !== undefined && {
      ResourceTypes: serializeAws_restJson1ResourceTypeValuesList(
        input.ResourceTypes,
        context
      )
    }),
    ...(input.Schedules !== undefined && {
      Schedules: serializeAws_restJson1ScheduleList(input.Schedules, context)
    }),
    ...(input.TargetTags !== undefined && {
      TargetTags: serializeAws_restJson1TargetTagList(input.TargetTags, context)
    })
  };
};

const serializeAws_restJson1ResourceTypeValuesList = (
  input: (ResourceTypeValues | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1RetainRule = (
  input: RetainRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Count !== undefined && { Count: input.Count }),
    ...(input.Interval !== undefined && { Interval: input.Interval }),
    ...(input.IntervalUnit !== undefined && {
      IntervalUnit: input.IntervalUnit
    })
  };
};

const serializeAws_restJson1Schedule = (
  input: Schedule,
  context: __SerdeContext
): any => {
  return {
    ...(input.CopyTags !== undefined && { CopyTags: input.CopyTags }),
    ...(input.CreateRule !== undefined && {
      CreateRule: serializeAws_restJson1CreateRule(input.CreateRule, context)
    }),
    ...(input.CrossRegionCopyRules !== undefined && {
      CrossRegionCopyRules: serializeAws_restJson1CrossRegionCopyRules(
        input.CrossRegionCopyRules,
        context
      )
    }),
    ...(input.FastRestoreRule !== undefined && {
      FastRestoreRule: serializeAws_restJson1FastRestoreRule(
        input.FastRestoreRule,
        context
      )
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.RetainRule !== undefined && {
      RetainRule: serializeAws_restJson1RetainRule(input.RetainRule, context)
    }),
    ...(input.TagsToAdd !== undefined && {
      TagsToAdd: serializeAws_restJson1TagsToAddList(input.TagsToAdd, context)
    }),
    ...(input.VariableTags !== undefined && {
      VariableTags: serializeAws_restJson1VariableTagsList(
        input.VariableTags,
        context
      )
    })
  };
};

const serializeAws_restJson1ScheduleList = (
  input: Schedule[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Schedule(entry, context));
};

const serializeAws_restJson1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_restJson1TagMap = (
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

const serializeAws_restJson1TagsToAddList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Tag(entry, context));
};

const serializeAws_restJson1TargetTagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Tag(entry, context));
};

const serializeAws_restJson1TimesList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1VariableTagsList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Tag(entry, context));
};

const deserializeAws_restJson1AvailabilityZoneList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1CreateRule = (
  output: any,
  context: __SerdeContext
): CreateRule => {
  return {
    __type: "CreateRule",
    Interval:
      output.Interval !== undefined && output.Interval !== null
        ? output.Interval
        : undefined,
    IntervalUnit:
      output.IntervalUnit !== undefined && output.IntervalUnit !== null
        ? output.IntervalUnit
        : undefined,
    Times:
      output.Times !== undefined && output.Times !== null
        ? deserializeAws_restJson1TimesList(output.Times, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1CrossRegionCopyRetainRule = (
  output: any,
  context: __SerdeContext
): CrossRegionCopyRetainRule => {
  return {
    __type: "CrossRegionCopyRetainRule",
    Interval:
      output.Interval !== undefined && output.Interval !== null
        ? output.Interval
        : undefined,
    IntervalUnit:
      output.IntervalUnit !== undefined && output.IntervalUnit !== null
        ? output.IntervalUnit
        : undefined
  } as any;
};

const deserializeAws_restJson1CrossRegionCopyRule = (
  output: any,
  context: __SerdeContext
): CrossRegionCopyRule => {
  return {
    __type: "CrossRegionCopyRule",
    CmkArn:
      output.CmkArn !== undefined && output.CmkArn !== null
        ? output.CmkArn
        : undefined,
    CopyTags:
      output.CopyTags !== undefined && output.CopyTags !== null
        ? output.CopyTags
        : undefined,
    Encrypted:
      output.Encrypted !== undefined && output.Encrypted !== null
        ? output.Encrypted
        : undefined,
    RetainRule:
      output.RetainRule !== undefined && output.RetainRule !== null
        ? deserializeAws_restJson1CrossRegionCopyRetainRule(
            output.RetainRule,
            context
          )
        : undefined,
    TargetRegion:
      output.TargetRegion !== undefined && output.TargetRegion !== null
        ? output.TargetRegion
        : undefined
  } as any;
};

const deserializeAws_restJson1CrossRegionCopyRules = (
  output: any,
  context: __SerdeContext
): CrossRegionCopyRule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1CrossRegionCopyRule(entry, context)
  );
};

const deserializeAws_restJson1FastRestoreRule = (
  output: any,
  context: __SerdeContext
): FastRestoreRule => {
  return {
    __type: "FastRestoreRule",
    AvailabilityZones:
      output.AvailabilityZones !== undefined &&
      output.AvailabilityZones !== null
        ? deserializeAws_restJson1AvailabilityZoneList(
            output.AvailabilityZones,
            context
          )
        : undefined,
    Count:
      output.Count !== undefined && output.Count !== null
        ? output.Count
        : undefined,
    Interval:
      output.Interval !== undefined && output.Interval !== null
        ? output.Interval
        : undefined,
    IntervalUnit:
      output.IntervalUnit !== undefined && output.IntervalUnit !== null
        ? output.IntervalUnit
        : undefined
  } as any;
};

const deserializeAws_restJson1LifecyclePolicy = (
  output: any,
  context: __SerdeContext
): LifecyclePolicy => {
  return {
    __type: "LifecyclePolicy",
    DateCreated:
      output.DateCreated !== undefined && output.DateCreated !== null
        ? new Date(output.DateCreated)
        : undefined,
    DateModified:
      output.DateModified !== undefined && output.DateModified !== null
        ? new Date(output.DateModified)
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    ExecutionRoleArn:
      output.ExecutionRoleArn !== undefined && output.ExecutionRoleArn !== null
        ? output.ExecutionRoleArn
        : undefined,
    PolicyArn:
      output.PolicyArn !== undefined && output.PolicyArn !== null
        ? output.PolicyArn
        : undefined,
    PolicyDetails:
      output.PolicyDetails !== undefined && output.PolicyDetails !== null
        ? deserializeAws_restJson1PolicyDetails(output.PolicyDetails, context)
        : undefined,
    PolicyId:
      output.PolicyId !== undefined && output.PolicyId !== null
        ? output.PolicyId
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null
        ? output.StatusMessage
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1LifecyclePolicySummary = (
  output: any,
  context: __SerdeContext
): LifecyclePolicySummary => {
  return {
    __type: "LifecyclePolicySummary",
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    PolicyId:
      output.PolicyId !== undefined && output.PolicyId !== null
        ? output.PolicyId
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1LifecyclePolicySummaryList = (
  output: any,
  context: __SerdeContext
): LifecyclePolicySummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1LifecyclePolicySummary(entry, context)
  );
};

const deserializeAws_restJson1ParameterList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_Parameters = (
  output: any,
  context: __SerdeContext
): _Parameters => {
  return {
    __type: "Parameters",
    ExcludeBootVolume:
      output.ExcludeBootVolume !== undefined &&
      output.ExcludeBootVolume !== null
        ? output.ExcludeBootVolume
        : undefined
  } as any;
};

const deserializeAws_restJson1PolicyDetails = (
  output: any,
  context: __SerdeContext
): PolicyDetails => {
  return {
    __type: "PolicyDetails",
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_restJson1_Parameters(output.Parameters, context)
        : undefined,
    PolicyType:
      output.PolicyType !== undefined && output.PolicyType !== null
        ? output.PolicyType
        : undefined,
    ResourceTypes:
      output.ResourceTypes !== undefined && output.ResourceTypes !== null
        ? deserializeAws_restJson1ResourceTypeValuesList(
            output.ResourceTypes,
            context
          )
        : undefined,
    Schedules:
      output.Schedules !== undefined && output.Schedules !== null
        ? deserializeAws_restJson1ScheduleList(output.Schedules, context)
        : undefined,
    TargetTags:
      output.TargetTags !== undefined && output.TargetTags !== null
        ? deserializeAws_restJson1TargetTagList(output.TargetTags, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1PolicyIdList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1ResourceTypeValuesList = (
  output: any,
  context: __SerdeContext
): (ResourceTypeValues | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1RetainRule = (
  output: any,
  context: __SerdeContext
): RetainRule => {
  return {
    __type: "RetainRule",
    Count:
      output.Count !== undefined && output.Count !== null
        ? output.Count
        : undefined,
    Interval:
      output.Interval !== undefined && output.Interval !== null
        ? output.Interval
        : undefined,
    IntervalUnit:
      output.IntervalUnit !== undefined && output.IntervalUnit !== null
        ? output.IntervalUnit
        : undefined
  } as any;
};

const deserializeAws_restJson1Schedule = (
  output: any,
  context: __SerdeContext
): Schedule => {
  return {
    __type: "Schedule",
    CopyTags:
      output.CopyTags !== undefined && output.CopyTags !== null
        ? output.CopyTags
        : undefined,
    CreateRule:
      output.CreateRule !== undefined && output.CreateRule !== null
        ? deserializeAws_restJson1CreateRule(output.CreateRule, context)
        : undefined,
    CrossRegionCopyRules:
      output.CrossRegionCopyRules !== undefined &&
      output.CrossRegionCopyRules !== null
        ? deserializeAws_restJson1CrossRegionCopyRules(
            output.CrossRegionCopyRules,
            context
          )
        : undefined,
    FastRestoreRule:
      output.FastRestoreRule !== undefined && output.FastRestoreRule !== null
        ? deserializeAws_restJson1FastRestoreRule(
            output.FastRestoreRule,
            context
          )
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    RetainRule:
      output.RetainRule !== undefined && output.RetainRule !== null
        ? deserializeAws_restJson1RetainRule(output.RetainRule, context)
        : undefined,
    TagsToAdd:
      output.TagsToAdd !== undefined && output.TagsToAdd !== null
        ? deserializeAws_restJson1TagsToAddList(output.TagsToAdd, context)
        : undefined,
    VariableTags:
      output.VariableTags !== undefined && output.VariableTags !== null
        ? deserializeAws_restJson1VariableTagsList(output.VariableTags, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1ScheduleList = (
  output: any,
  context: __SerdeContext
): Schedule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Schedule(entry, context)
  );
};

const deserializeAws_restJson1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_restJson1TagMap = (
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

const deserializeAws_restJson1TagsToAddList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Tag(entry, context)
  );
};

const deserializeAws_restJson1TargetTagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Tag(entry, context)
  );
};

const deserializeAws_restJson1TimesList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1VariableTagsList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Tag(entry, context)
  );
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
