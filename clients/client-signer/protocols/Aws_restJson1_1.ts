import {
  CancelSigningProfileCommandInput,
  CancelSigningProfileCommandOutput
} from "../commands/CancelSigningProfileCommand";
import {
  DescribeSigningJobCommandInput,
  DescribeSigningJobCommandOutput
} from "../commands/DescribeSigningJobCommand";
import {
  GetSigningPlatformCommandInput,
  GetSigningPlatformCommandOutput
} from "../commands/GetSigningPlatformCommand";
import {
  GetSigningProfileCommandInput,
  GetSigningProfileCommandOutput
} from "../commands/GetSigningProfileCommand";
import {
  ListSigningJobsCommandInput,
  ListSigningJobsCommandOutput
} from "../commands/ListSigningJobsCommand";
import {
  ListSigningPlatformsCommandInput,
  ListSigningPlatformsCommandOutput
} from "../commands/ListSigningPlatformsCommand";
import {
  ListSigningProfilesCommandInput,
  ListSigningProfilesCommandOutput
} from "../commands/ListSigningProfilesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  PutSigningProfileCommandInput,
  PutSigningProfileCommandOutput
} from "../commands/PutSigningProfileCommand";
import {
  StartSigningJobCommandInput,
  StartSigningJobCommandOutput
} from "../commands/StartSigningJobCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  AccessDeniedException,
  BadRequestException,
  Destination,
  EncryptionAlgorithm,
  EncryptionAlgorithmOptions,
  HashAlgorithm,
  HashAlgorithmOptions,
  ImageFormat,
  InternalServiceErrorException,
  NotFoundException,
  ResourceNotFoundException,
  S3Destination,
  S3SignedObject,
  S3Source,
  SignedObject,
  SigningConfiguration,
  SigningConfigurationOverrides,
  SigningImageFormat,
  SigningJob,
  SigningMaterial,
  SigningPlatform,
  SigningPlatformOverrides,
  SigningProfile,
  Source,
  ThrottlingException,
  ValidationException
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
import { v4 as generateIdempotencyToken } from "uuid";

export async function serializeAws_restJson1_1CancelSigningProfileCommand(
  input: CancelSigningProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/signing-profiles/{profileName}";
  if (input.profileName !== undefined) {
    const labelValue: string = input.profileName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: profileName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{profileName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: profileName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeSigningJobCommand(
  input: DescribeSigningJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/signing-jobs/{jobId}";
  if (input.jobId !== undefined) {
    const labelValue: string = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace(
      "{jobId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetSigningPlatformCommand(
  input: GetSigningPlatformCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/signing-platforms/{platformId}";
  if (input.platformId !== undefined) {
    const labelValue: string = input.platformId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: platformId.");
    }
    resolvedPath = resolvedPath.replace(
      "{platformId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: platformId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetSigningProfileCommand(
  input: GetSigningProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/signing-profiles/{profileName}";
  if (input.profileName !== undefined) {
    const labelValue: string = input.profileName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: profileName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{profileName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: profileName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListSigningJobsCommand(
  input: ListSigningJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/signing-jobs";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  if (input.platformId !== undefined) {
    query["platformId"] = input.platformId;
  }
  if (input.requestedBy !== undefined) {
    query["requestedBy"] = input.requestedBy;
  }
  if (input.status !== undefined) {
    query["status"] = input.status;
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

export async function serializeAws_restJson1_1ListSigningPlatformsCommand(
  input: ListSigningPlatformsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/signing-platforms";
  const query: any = {};
  if (input.category !== undefined) {
    query["category"] = input.category;
  }
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  if (input.partner !== undefined) {
    query["partner"] = input.partner;
  }
  if (input.target !== undefined) {
    query["target"] = input.target;
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

export async function serializeAws_restJson1_1ListSigningProfilesCommand(
  input: ListSigningProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/signing-profiles";
  const query: any = {};
  if (input.includeCanceled !== undefined) {
    query["includeCanceled"] = input.includeCanceled.toString();
  }
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
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

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1PutSigningProfileCommand(
  input: PutSigningProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/signing-profiles/{profileName}";
  if (input.profileName !== undefined) {
    const labelValue: string = input.profileName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: profileName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{profileName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: profileName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.overrides !== undefined) {
    bodyParams["overrides"] = serializeAws_restJson1_1SigningPlatformOverrides(
      input.overrides,
      context
    );
  }
  if (input.platformId !== undefined) {
    bodyParams["platformId"] = input.platformId;
  }
  if (input.signingMaterial !== undefined) {
    bodyParams["signingMaterial"] = serializeAws_restJson1_1SigningMaterial(
      input.signingMaterial,
      context
    );
  }
  if (input.signingParameters !== undefined) {
    bodyParams["signingParameters"] = serializeAws_restJson1_1SigningParameters(
      input.signingParameters,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1StartSigningJobCommand(
  input: StartSigningJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/signing-jobs";
  let body: any;
  const bodyParams: any = {};
  if (input.clientRequestToken === undefined) {
    input.clientRequestToken = generateIdempotencyToken();
  }
  if (input.clientRequestToken !== undefined) {
    bodyParams["clientRequestToken"] = input.clientRequestToken;
  }
  if (input.destination !== undefined) {
    bodyParams["destination"] = serializeAws_restJson1_1Destination(
      input.destination,
      context
    );
  }
  if (input.profileName !== undefined) {
    bodyParams["profileName"] = input.profileName;
  }
  if (input.source !== undefined) {
    bodyParams["source"] = serializeAws_restJson1_1Source(
      input.source,
      context
    );
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

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
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
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {};
  if (input.tagKeys !== undefined) {
    query["tagKeys"] = input.tagKeys;
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

export async function deserializeAws_restJson1_1CancelSigningProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSigningProfileCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CancelSigningProfileCommandError(
      output,
      context
    );
  }
  const contents: CancelSigningProfileCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CancelSigningProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSigningProfileCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wallaby#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.wallaby#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wallaby#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.wallaby#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeSigningJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSigningJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeSigningJobCommandError(
      output,
      context
    );
  }
  const contents: DescribeSigningJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSigningJobResponse",
    completedAt: undefined,
    createdAt: undefined,
    jobId: undefined,
    overrides: undefined,
    platformId: undefined,
    profileName: undefined,
    requestedBy: undefined,
    signedObject: undefined,
    signingMaterial: undefined,
    signingParameters: undefined,
    source: undefined,
    status: undefined,
    statusReason: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.completedAt !== undefined && data.completedAt !== null) {
    contents.completedAt = new Date(Math.round(data.completedAt * 1000));
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.jobId = data.jobId;
  }
  if (data.overrides !== undefined && data.overrides !== null) {
    contents.overrides = deserializeAws_restJson1_1SigningPlatformOverrides(
      data.overrides,
      context
    );
  }
  if (data.platformId !== undefined && data.platformId !== null) {
    contents.platformId = data.platformId;
  }
  if (data.profileName !== undefined && data.profileName !== null) {
    contents.profileName = data.profileName;
  }
  if (data.requestedBy !== undefined && data.requestedBy !== null) {
    contents.requestedBy = data.requestedBy;
  }
  if (data.signedObject !== undefined && data.signedObject !== null) {
    contents.signedObject = deserializeAws_restJson1_1SignedObject(
      data.signedObject,
      context
    );
  }
  if (data.signingMaterial !== undefined && data.signingMaterial !== null) {
    contents.signingMaterial = deserializeAws_restJson1_1SigningMaterial(
      data.signingMaterial,
      context
    );
  }
  if (data.signingParameters !== undefined && data.signingParameters !== null) {
    contents.signingParameters = deserializeAws_restJson1_1SigningParameters(
      data.signingParameters,
      context
    );
  }
  if (data.source !== undefined && data.source !== null) {
    contents.source = deserializeAws_restJson1_1Source(data.source, context);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.statusReason !== undefined && data.statusReason !== null) {
    contents.statusReason = data.statusReason;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeSigningJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSigningJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wallaby#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.wallaby#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wallaby#ResourceNotFoundException":
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

export async function deserializeAws_restJson1_1GetSigningPlatformCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSigningPlatformCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetSigningPlatformCommandError(
      output,
      context
    );
  }
  const contents: GetSigningPlatformCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSigningPlatformResponse",
    category: undefined,
    displayName: undefined,
    maxSizeInMB: undefined,
    partner: undefined,
    platformId: undefined,
    signingConfiguration: undefined,
    signingImageFormat: undefined,
    target: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.category !== undefined && data.category !== null) {
    contents.category = data.category;
  }
  if (data.displayName !== undefined && data.displayName !== null) {
    contents.displayName = data.displayName;
  }
  if (data.maxSizeInMB !== undefined && data.maxSizeInMB !== null) {
    contents.maxSizeInMB = data.maxSizeInMB;
  }
  if (data.partner !== undefined && data.partner !== null) {
    contents.partner = data.partner;
  }
  if (data.platformId !== undefined && data.platformId !== null) {
    contents.platformId = data.platformId;
  }
  if (
    data.signingConfiguration !== undefined &&
    data.signingConfiguration !== null
  ) {
    contents.signingConfiguration = deserializeAws_restJson1_1SigningConfiguration(
      data.signingConfiguration,
      context
    );
  }
  if (
    data.signingImageFormat !== undefined &&
    data.signingImageFormat !== null
  ) {
    contents.signingImageFormat = deserializeAws_restJson1_1SigningImageFormat(
      data.signingImageFormat,
      context
    );
  }
  if (data.target !== undefined && data.target !== null) {
    contents.target = data.target;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetSigningPlatformCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSigningPlatformCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wallaby#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.wallaby#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wallaby#ResourceNotFoundException":
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

export async function deserializeAws_restJson1_1GetSigningProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSigningProfileCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetSigningProfileCommandError(
      output,
      context
    );
  }
  const contents: GetSigningProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSigningProfileResponse",
    arn: undefined,
    overrides: undefined,
    platformId: undefined,
    profileName: undefined,
    signingMaterial: undefined,
    signingParameters: undefined,
    status: undefined,
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.overrides !== undefined && data.overrides !== null) {
    contents.overrides = deserializeAws_restJson1_1SigningPlatformOverrides(
      data.overrides,
      context
    );
  }
  if (data.platformId !== undefined && data.platformId !== null) {
    contents.platformId = data.platformId;
  }
  if (data.profileName !== undefined && data.profileName !== null) {
    contents.profileName = data.profileName;
  }
  if (data.signingMaterial !== undefined && data.signingMaterial !== null) {
    contents.signingMaterial = deserializeAws_restJson1_1SigningMaterial(
      data.signingMaterial,
      context
    );
  }
  if (data.signingParameters !== undefined && data.signingParameters !== null) {
    contents.signingParameters = deserializeAws_restJson1_1SigningParameters(
      data.signingParameters,
      context
    );
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetSigningProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSigningProfileCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wallaby#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.wallaby#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wallaby#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.wallaby#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1ListSigningJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningJobsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListSigningJobsCommandError(
      output,
      context
    );
  }
  const contents: ListSigningJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSigningJobsResponse",
    jobs: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobs !== undefined && data.jobs !== null) {
    contents.jobs = deserializeAws_restJson1_1SigningJobs(data.jobs, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListSigningJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningJobsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wallaby#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.wallaby#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.wallaby#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.wallaby#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1ListSigningPlatformsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningPlatformsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListSigningPlatformsCommandError(
      output,
      context
    );
  }
  const contents: ListSigningPlatformsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSigningPlatformsResponse",
    nextToken: undefined,
    platforms: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.platforms !== undefined && data.platforms !== null) {
    contents.platforms = deserializeAws_restJson1_1SigningPlatforms(
      data.platforms,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListSigningPlatformsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningPlatformsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wallaby#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.wallaby#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.wallaby#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.wallaby#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1ListSigningProfilesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningProfilesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListSigningProfilesCommandError(
      output,
      context
    );
  }
  const contents: ListSigningProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSigningProfilesResponse",
    nextToken: undefined,
    profiles: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.profiles !== undefined && data.profiles !== null) {
    contents.profiles = deserializeAws_restJson1_1SigningProfiles(
      data.profiles,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListSigningProfilesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningProfilesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wallaby#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.wallaby#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.wallaby#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
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
    case "BadRequestException":
    case "com.amazonaws.wallaby#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.wallaby#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.wallaby#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
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

export async function deserializeAws_restJson1_1PutSigningProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSigningProfileCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutSigningProfileCommandError(
      output,
      context
    );
  }
  const contents: PutSigningProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutSigningProfileResponse",
    arn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutSigningProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSigningProfileCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wallaby#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.wallaby#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wallaby#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.wallaby#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.wallaby#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1StartSigningJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSigningJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartSigningJobCommandError(
      output,
      context
    );
  }
  const contents: StartSigningJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartSigningJobResponse",
    jobId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.jobId = data.jobId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartSigningJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSigningJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wallaby#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.wallaby#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wallaby#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.wallaby#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.wallaby#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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
    case "BadRequestException":
    case "com.amazonaws.wallaby#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.wallaby#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.wallaby#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
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
    case "BadRequestException":
    case "com.amazonaws.wallaby#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.wallaby#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.wallaby#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
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

const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServiceErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const contents: InternalServiceErrorException = {
    name: "InternalServiceErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
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
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1Destination = (
  input: Destination,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.s3 !== undefined) {
    bodyParams["s3"] = serializeAws_restJson1_1S3Destination(input.s3, context);
  }
  return bodyParams;
};

const serializeAws_restJson1_1S3Destination = (
  input: S3Destination,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.bucketName !== undefined) {
    bodyParams["bucketName"] = input.bucketName;
  }
  if (input.prefix !== undefined) {
    bodyParams["prefix"] = input.prefix;
  }
  return bodyParams;
};

const serializeAws_restJson1_1S3Source = (
  input: S3Source,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.bucketName !== undefined) {
    bodyParams["bucketName"] = input.bucketName;
  }
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SigningConfigurationOverrides = (
  input: SigningConfigurationOverrides,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.encryptionAlgorithm !== undefined) {
    bodyParams["encryptionAlgorithm"] = input.encryptionAlgorithm;
  }
  if (input.hashAlgorithm !== undefined) {
    bodyParams["hashAlgorithm"] = input.hashAlgorithm;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SigningMaterial = (
  input: SigningMaterial,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.certificateArn !== undefined) {
    bodyParams["certificateArn"] = input.certificateArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SigningParameters = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1SigningPlatformOverrides = (
  input: SigningPlatformOverrides,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.signingConfiguration !== undefined) {
    bodyParams[
      "signingConfiguration"
    ] = serializeAws_restJson1_1SigningConfigurationOverrides(
      input.signingConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1Source = (
  input: Source,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.s3 !== undefined) {
    bodyParams["s3"] = serializeAws_restJson1_1S3Source(input.s3, context);
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

const deserializeAws_restJson1_1EncryptionAlgorithmOptions = (
  output: any,
  context: __SerdeContext
): EncryptionAlgorithmOptions => {
  let contents: any = {
    __type: "EncryptionAlgorithmOptions",
    allowedValues: undefined,
    defaultValue: undefined
  };
  if (output.allowedValues !== undefined && output.allowedValues !== null) {
    contents.allowedValues = deserializeAws_restJson1_1EncryptionAlgorithms(
      output.allowedValues,
      context
    );
  }
  if (output.defaultValue !== undefined && output.defaultValue !== null) {
    contents.defaultValue = output.defaultValue;
  }
  return contents;
};

const deserializeAws_restJson1_1EncryptionAlgorithms = (
  output: any,
  context: __SerdeContext
): Array<EncryptionAlgorithm | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1HashAlgorithmOptions = (
  output: any,
  context: __SerdeContext
): HashAlgorithmOptions => {
  let contents: any = {
    __type: "HashAlgorithmOptions",
    allowedValues: undefined,
    defaultValue: undefined
  };
  if (output.allowedValues !== undefined && output.allowedValues !== null) {
    contents.allowedValues = deserializeAws_restJson1_1HashAlgorithms(
      output.allowedValues,
      context
    );
  }
  if (output.defaultValue !== undefined && output.defaultValue !== null) {
    contents.defaultValue = output.defaultValue;
  }
  return contents;
};

const deserializeAws_restJson1_1HashAlgorithms = (
  output: any,
  context: __SerdeContext
): Array<HashAlgorithm | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1ImageFormats = (
  output: any,
  context: __SerdeContext
): Array<ImageFormat | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1S3SignedObject = (
  output: any,
  context: __SerdeContext
): S3SignedObject => {
  let contents: any = {
    __type: "S3SignedObject",
    bucketName: undefined,
    key: undefined
  };
  if (output.bucketName !== undefined && output.bucketName !== null) {
    contents.bucketName = output.bucketName;
  }
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  return contents;
};

const deserializeAws_restJson1_1S3Source = (
  output: any,
  context: __SerdeContext
): S3Source => {
  let contents: any = {
    __type: "S3Source",
    bucketName: undefined,
    key: undefined,
    version: undefined
  };
  if (output.bucketName !== undefined && output.bucketName !== null) {
    contents.bucketName = output.bucketName;
  }
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1SignedObject = (
  output: any,
  context: __SerdeContext
): SignedObject => {
  let contents: any = {
    __type: "SignedObject",
    s3: undefined
  };
  if (output.s3 !== undefined && output.s3 !== null) {
    contents.s3 = deserializeAws_restJson1_1S3SignedObject(output.s3, context);
  }
  return contents;
};

const deserializeAws_restJson1_1SigningConfiguration = (
  output: any,
  context: __SerdeContext
): SigningConfiguration => {
  let contents: any = {
    __type: "SigningConfiguration",
    encryptionAlgorithmOptions: undefined,
    hashAlgorithmOptions: undefined
  };
  if (
    output.encryptionAlgorithmOptions !== undefined &&
    output.encryptionAlgorithmOptions !== null
  ) {
    contents.encryptionAlgorithmOptions = deserializeAws_restJson1_1EncryptionAlgorithmOptions(
      output.encryptionAlgorithmOptions,
      context
    );
  }
  if (
    output.hashAlgorithmOptions !== undefined &&
    output.hashAlgorithmOptions !== null
  ) {
    contents.hashAlgorithmOptions = deserializeAws_restJson1_1HashAlgorithmOptions(
      output.hashAlgorithmOptions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1SigningConfigurationOverrides = (
  output: any,
  context: __SerdeContext
): SigningConfigurationOverrides => {
  let contents: any = {
    __type: "SigningConfigurationOverrides",
    encryptionAlgorithm: undefined,
    hashAlgorithm: undefined
  };
  if (
    output.encryptionAlgorithm !== undefined &&
    output.encryptionAlgorithm !== null
  ) {
    contents.encryptionAlgorithm = output.encryptionAlgorithm;
  }
  if (output.hashAlgorithm !== undefined && output.hashAlgorithm !== null) {
    contents.hashAlgorithm = output.hashAlgorithm;
  }
  return contents;
};

const deserializeAws_restJson1_1SigningImageFormat = (
  output: any,
  context: __SerdeContext
): SigningImageFormat => {
  let contents: any = {
    __type: "SigningImageFormat",
    defaultFormat: undefined,
    supportedFormats: undefined
  };
  if (output.defaultFormat !== undefined && output.defaultFormat !== null) {
    contents.defaultFormat = output.defaultFormat;
  }
  if (
    output.supportedFormats !== undefined &&
    output.supportedFormats !== null
  ) {
    contents.supportedFormats = deserializeAws_restJson1_1ImageFormats(
      output.supportedFormats,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1SigningJob = (
  output: any,
  context: __SerdeContext
): SigningJob => {
  let contents: any = {
    __type: "SigningJob",
    createdAt: undefined,
    jobId: undefined,
    signedObject: undefined,
    signingMaterial: undefined,
    source: undefined,
    status: undefined
  };
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (output.jobId !== undefined && output.jobId !== null) {
    contents.jobId = output.jobId;
  }
  if (output.signedObject !== undefined && output.signedObject !== null) {
    contents.signedObject = deserializeAws_restJson1_1SignedObject(
      output.signedObject,
      context
    );
  }
  if (output.signingMaterial !== undefined && output.signingMaterial !== null) {
    contents.signingMaterial = deserializeAws_restJson1_1SigningMaterial(
      output.signingMaterial,
      context
    );
  }
  if (output.source !== undefined && output.source !== null) {
    contents.source = deserializeAws_restJson1_1Source(output.source, context);
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1SigningJobs = (
  output: any,
  context: __SerdeContext
): Array<SigningJob> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SigningJob(entry, context)
  );
};

const deserializeAws_restJson1_1SigningMaterial = (
  output: any,
  context: __SerdeContext
): SigningMaterial => {
  let contents: any = {
    __type: "SigningMaterial",
    certificateArn: undefined
  };
  if (output.certificateArn !== undefined && output.certificateArn !== null) {
    contents.certificateArn = output.certificateArn;
  }
  return contents;
};

const deserializeAws_restJson1_1SigningParameters = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1SigningPlatform = (
  output: any,
  context: __SerdeContext
): SigningPlatform => {
  let contents: any = {
    __type: "SigningPlatform",
    category: undefined,
    displayName: undefined,
    maxSizeInMB: undefined,
    partner: undefined,
    platformId: undefined,
    signingConfiguration: undefined,
    signingImageFormat: undefined,
    target: undefined
  };
  if (output.category !== undefined && output.category !== null) {
    contents.category = output.category;
  }
  if (output.displayName !== undefined && output.displayName !== null) {
    contents.displayName = output.displayName;
  }
  if (output.maxSizeInMB !== undefined && output.maxSizeInMB !== null) {
    contents.maxSizeInMB = output.maxSizeInMB;
  }
  if (output.partner !== undefined && output.partner !== null) {
    contents.partner = output.partner;
  }
  if (output.platformId !== undefined && output.platformId !== null) {
    contents.platformId = output.platformId;
  }
  if (
    output.signingConfiguration !== undefined &&
    output.signingConfiguration !== null
  ) {
    contents.signingConfiguration = deserializeAws_restJson1_1SigningConfiguration(
      output.signingConfiguration,
      context
    );
  }
  if (
    output.signingImageFormat !== undefined &&
    output.signingImageFormat !== null
  ) {
    contents.signingImageFormat = deserializeAws_restJson1_1SigningImageFormat(
      output.signingImageFormat,
      context
    );
  }
  if (output.target !== undefined && output.target !== null) {
    contents.target = output.target;
  }
  return contents;
};

const deserializeAws_restJson1_1SigningPlatformOverrides = (
  output: any,
  context: __SerdeContext
): SigningPlatformOverrides => {
  let contents: any = {
    __type: "SigningPlatformOverrides",
    signingConfiguration: undefined
  };
  if (
    output.signingConfiguration !== undefined &&
    output.signingConfiguration !== null
  ) {
    contents.signingConfiguration = deserializeAws_restJson1_1SigningConfigurationOverrides(
      output.signingConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1SigningPlatforms = (
  output: any,
  context: __SerdeContext
): Array<SigningPlatform> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SigningPlatform(entry, context)
  );
};

const deserializeAws_restJson1_1SigningProfile = (
  output: any,
  context: __SerdeContext
): SigningProfile => {
  let contents: any = {
    __type: "SigningProfile",
    arn: undefined,
    platformId: undefined,
    profileName: undefined,
    signingMaterial: undefined,
    signingParameters: undefined,
    status: undefined,
    tags: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.platformId !== undefined && output.platformId !== null) {
    contents.platformId = output.platformId;
  }
  if (output.profileName !== undefined && output.profileName !== null) {
    contents.profileName = output.profileName;
  }
  if (output.signingMaterial !== undefined && output.signingMaterial !== null) {
    contents.signingMaterial = deserializeAws_restJson1_1SigningMaterial(
      output.signingMaterial,
      context
    );
  }
  if (
    output.signingParameters !== undefined &&
    output.signingParameters !== null
  ) {
    contents.signingParameters = deserializeAws_restJson1_1SigningParameters(
      output.signingParameters,
      context
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1SigningProfiles = (
  output: any,
  context: __SerdeContext
): Array<SigningProfile> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SigningProfile(entry, context)
  );
};

const deserializeAws_restJson1_1Source = (
  output: any,
  context: __SerdeContext
): Source => {
  let contents: any = {
    __type: "Source",
    s3: undefined
  };
  if (output.s3 !== undefined && output.s3 !== null) {
    contents.s3 = deserializeAws_restJson1_1S3Source(output.s3, context);
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
