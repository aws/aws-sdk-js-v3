import {
  CancelJobCommandInput,
  CancelJobCommandOutput
} from "../commands/CancelJobCommand";
import {
  CreateJobCommandInput,
  CreateJobCommandOutput
} from "../commands/CreateJobCommand";
import {
  CreatePipelineCommandInput,
  CreatePipelineCommandOutput
} from "../commands/CreatePipelineCommand";
import {
  CreatePresetCommandInput,
  CreatePresetCommandOutput
} from "../commands/CreatePresetCommand";
import {
  DeletePipelineCommandInput,
  DeletePipelineCommandOutput
} from "../commands/DeletePipelineCommand";
import {
  DeletePresetCommandInput,
  DeletePresetCommandOutput
} from "../commands/DeletePresetCommand";
import {
  ListJobsByPipelineCommandInput,
  ListJobsByPipelineCommandOutput
} from "../commands/ListJobsByPipelineCommand";
import {
  ListJobsByStatusCommandInput,
  ListJobsByStatusCommandOutput
} from "../commands/ListJobsByStatusCommand";
import {
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput
} from "../commands/ListPipelinesCommand";
import {
  ListPresetsCommandInput,
  ListPresetsCommandOutput
} from "../commands/ListPresetsCommand";
import {
  ReadJobCommandInput,
  ReadJobCommandOutput
} from "../commands/ReadJobCommand";
import {
  ReadPipelineCommandInput,
  ReadPipelineCommandOutput
} from "../commands/ReadPipelineCommand";
import {
  ReadPresetCommandInput,
  ReadPresetCommandOutput
} from "../commands/ReadPresetCommand";
import {
  TestRoleCommandInput,
  TestRoleCommandOutput
} from "../commands/TestRoleCommand";
import {
  UpdatePipelineCommandInput,
  UpdatePipelineCommandOutput
} from "../commands/UpdatePipelineCommand";
import {
  UpdatePipelineNotificationsCommandInput,
  UpdatePipelineNotificationsCommandOutput
} from "../commands/UpdatePipelineNotificationsCommand";
import {
  UpdatePipelineStatusCommandInput,
  UpdatePipelineStatusCommandOutput
} from "../commands/UpdatePipelineStatusCommand";
import {
  AccessDeniedException,
  Artwork,
  AudioCodecOptions,
  AudioParameters,
  CaptionFormat,
  CaptionSource,
  Captions,
  Clip,
  CreateJobOutput,
  CreateJobPlaylist,
  DetectedProperties,
  Encryption,
  HlsContentProtection,
  IncompatibleVersionException,
  InputCaptions,
  InternalServiceException,
  Job,
  JobAlbumArt,
  JobInput,
  JobOutput,
  JobWatermark,
  LimitExceededException,
  Notifications,
  Permission,
  Pipeline,
  PipelineOutputConfig,
  PlayReadyDrm,
  Playlist,
  Preset,
  PresetWatermark,
  ResourceInUseException,
  ResourceNotFoundException,
  Thumbnails,
  TimeSpan,
  Timing,
  ValidationException,
  VideoParameters,
  Warning
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

export async function serializeAws_restJson1_1CancelJobCommand(
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2012-09-25/jobs/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1CreateJobCommand(
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2012-09-25/jobs";
  let body: any;
  const bodyParams: any = {};
  if (input.Input !== undefined) {
    bodyParams["Input"] = serializeAws_restJson1_1JobInput(
      input.Input,
      context
    );
  }
  if (input.Inputs !== undefined) {
    bodyParams["Inputs"] = serializeAws_restJson1_1JobInputs(
      input.Inputs,
      context
    );
  }
  if (input.Output !== undefined) {
    bodyParams["Output"] = serializeAws_restJson1_1CreateJobOutput(
      input.Output,
      context
    );
  }
  if (input.OutputKeyPrefix !== undefined) {
    bodyParams["OutputKeyPrefix"] = input.OutputKeyPrefix;
  }
  if (input.Outputs !== undefined) {
    bodyParams["Outputs"] = serializeAws_restJson1_1CreateJobOutputs(
      input.Outputs,
      context
    );
  }
  if (input.PipelineId !== undefined) {
    bodyParams["PipelineId"] = input.PipelineId;
  }
  if (input.Playlists !== undefined) {
    bodyParams["Playlists"] = serializeAws_restJson1_1CreateJobPlaylists(
      input.Playlists,
      context
    );
  }
  if (input.UserMetadata !== undefined) {
    bodyParams["UserMetadata"] = serializeAws_restJson1_1UserMetadata(
      input.UserMetadata,
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

export async function serializeAws_restJson1_1CreatePipelineCommand(
  input: CreatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2012-09-25/pipelines";
  let body: any;
  const bodyParams: any = {};
  if (input.AwsKmsKeyArn !== undefined) {
    bodyParams["AwsKmsKeyArn"] = input.AwsKmsKeyArn;
  }
  if (input.ContentConfig !== undefined) {
    bodyParams["ContentConfig"] = serializeAws_restJson1_1PipelineOutputConfig(
      input.ContentConfig,
      context
    );
  }
  if (input.InputBucket !== undefined) {
    bodyParams["InputBucket"] = input.InputBucket;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Notifications !== undefined) {
    bodyParams["Notifications"] = serializeAws_restJson1_1Notifications(
      input.Notifications,
      context
    );
  }
  if (input.OutputBucket !== undefined) {
    bodyParams["OutputBucket"] = input.OutputBucket;
  }
  if (input.Role !== undefined) {
    bodyParams["Role"] = input.Role;
  }
  if (input.ThumbnailConfig !== undefined) {
    bodyParams[
      "ThumbnailConfig"
    ] = serializeAws_restJson1_1PipelineOutputConfig(
      input.ThumbnailConfig,
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

export async function serializeAws_restJson1_1CreatePresetCommand(
  input: CreatePresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2012-09-25/presets";
  let body: any;
  const bodyParams: any = {};
  if (input.Audio !== undefined) {
    bodyParams["Audio"] = serializeAws_restJson1_1AudioParameters(
      input.Audio,
      context
    );
  }
  if (input.Container !== undefined) {
    bodyParams["Container"] = input.Container;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Thumbnails !== undefined) {
    bodyParams["Thumbnails"] = serializeAws_restJson1_1Thumbnails(
      input.Thumbnails,
      context
    );
  }
  if (input.Video !== undefined) {
    bodyParams["Video"] = serializeAws_restJson1_1VideoParameters(
      input.Video,
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

export async function serializeAws_restJson1_1DeletePipelineCommand(
  input: DeletePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2012-09-25/pipelines/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeletePresetCommand(
  input: DeletePresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2012-09-25/presets/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListJobsByPipelineCommand(
  input: ListJobsByPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2012-09-25/jobsByPipeline/{PipelineId}";
  if (input.PipelineId !== undefined) {
    const labelValue: string = input.PipelineId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PipelineId.");
    }
    resolvedPath = resolvedPath.replace(
      "{PipelineId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: PipelineId.");
  }
  const query: any = {};
  if (input.Ascending !== undefined) {
    query["Ascending"] = input.Ascending;
  }
  if (input.PageToken !== undefined) {
    query["PageToken"] = input.PageToken;
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

export async function serializeAws_restJson1_1ListJobsByStatusCommand(
  input: ListJobsByStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2012-09-25/jobsByStatus/{Status}";
  if (input.Status !== undefined) {
    const labelValue: string = input.Status;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Status.");
    }
    resolvedPath = resolvedPath.replace(
      "{Status}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Status.");
  }
  const query: any = {};
  if (input.Ascending !== undefined) {
    query["Ascending"] = input.Ascending;
  }
  if (input.PageToken !== undefined) {
    query["PageToken"] = input.PageToken;
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

export async function serializeAws_restJson1_1ListPipelinesCommand(
  input: ListPipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2012-09-25/pipelines";
  const query: any = {};
  if (input.Ascending !== undefined) {
    query["Ascending"] = input.Ascending;
  }
  if (input.PageToken !== undefined) {
    query["PageToken"] = input.PageToken;
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

export async function serializeAws_restJson1_1ListPresetsCommand(
  input: ListPresetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2012-09-25/presets";
  const query: any = {};
  if (input.Ascending !== undefined) {
    query["Ascending"] = input.Ascending;
  }
  if (input.PageToken !== undefined) {
    query["PageToken"] = input.PageToken;
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

export async function serializeAws_restJson1_1ReadJobCommand(
  input: ReadJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2012-09-25/jobs/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ReadPipelineCommand(
  input: ReadPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2012-09-25/pipelines/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ReadPresetCommand(
  input: ReadPresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2012-09-25/presets/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1TestRoleCommand(
  input: TestRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2012-09-25/roleTests";
  let body: any;
  const bodyParams: any = {};
  if (input.InputBucket !== undefined) {
    bodyParams["InputBucket"] = input.InputBucket;
  }
  if (input.OutputBucket !== undefined) {
    bodyParams["OutputBucket"] = input.OutputBucket;
  }
  if (input.Role !== undefined) {
    bodyParams["Role"] = input.Role;
  }
  if (input.Topics !== undefined) {
    bodyParams["Topics"] = serializeAws_restJson1_1SnsTopics(
      input.Topics,
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

export async function serializeAws_restJson1_1UpdatePipelineCommand(
  input: UpdatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2012-09-25/pipelines/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.AwsKmsKeyArn !== undefined) {
    bodyParams["AwsKmsKeyArn"] = input.AwsKmsKeyArn;
  }
  if (input.ContentConfig !== undefined) {
    bodyParams["ContentConfig"] = serializeAws_restJson1_1PipelineOutputConfig(
      input.ContentConfig,
      context
    );
  }
  if (input.InputBucket !== undefined) {
    bodyParams["InputBucket"] = input.InputBucket;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Notifications !== undefined) {
    bodyParams["Notifications"] = serializeAws_restJson1_1Notifications(
      input.Notifications,
      context
    );
  }
  if (input.Role !== undefined) {
    bodyParams["Role"] = input.Role;
  }
  if (input.ThumbnailConfig !== undefined) {
    bodyParams[
      "ThumbnailConfig"
    ] = serializeAws_restJson1_1PipelineOutputConfig(
      input.ThumbnailConfig,
      context
    );
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

export async function serializeAws_restJson1_1UpdatePipelineNotificationsCommand(
  input: UpdatePipelineNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2012-09-25/pipelines/{Id}/notifications";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Notifications !== undefined) {
    bodyParams["Notifications"] = serializeAws_restJson1_1Notifications(
      input.Notifications,
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

export async function serializeAws_restJson1_1UpdatePipelineStatusCommand(
  input: UpdatePipelineStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2012-09-25/pipelines/{Id}/status";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Status !== undefined) {
    bodyParams["Status"] = input.Status;
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

export async function deserializeAws_restJson1_1CancelJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CancelJobCommandError(output, context);
  }
  const contents: CancelJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelJobResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CancelJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.etscustomer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleVersionException":
    case "com.amazonaws.etscustomer#IncompatibleVersionException":
      response = {
        ...(await deserializeAws_restJson1_1IncompatibleVersionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.etscustomer#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.etscustomer#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.etscustomer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.etscustomer#ValidationException":
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

export async function deserializeAws_restJson1_1CreateJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateJobCommandError(output, context);
  }
  const contents: CreateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateJobResponse",
    Job: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Job !== undefined && data.Job !== null) {
    contents.Job = deserializeAws_restJson1_1Job(data.Job, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.etscustomer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleVersionException":
    case "com.amazonaws.etscustomer#IncompatibleVersionException":
      response = {
        ...(await deserializeAws_restJson1_1IncompatibleVersionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.etscustomer#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.etscustomer#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.etscustomer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.etscustomer#ValidationException":
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

export async function deserializeAws_restJson1_1CreatePipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreatePipelineCommandError(
      output,
      context
    );
  }
  const contents: CreatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePipelineResponse",
    Pipeline: undefined,
    Warnings: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Pipeline !== undefined && data.Pipeline !== null) {
    contents.Pipeline = deserializeAws_restJson1_1Pipeline(
      data.Pipeline,
      context
    );
  }
  if (data.Warnings !== undefined && data.Warnings !== null) {
    contents.Warnings = deserializeAws_restJson1_1Warnings(
      data.Warnings,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreatePipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.etscustomer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleVersionException":
    case "com.amazonaws.etscustomer#IncompatibleVersionException":
      response = {
        ...(await deserializeAws_restJson1_1IncompatibleVersionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.etscustomer#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.etscustomer#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.etscustomer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.etscustomer#ValidationException":
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

export async function deserializeAws_restJson1_1CreatePresetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresetCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreatePresetCommandError(output, context);
  }
  const contents: CreatePresetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePresetResponse",
    Preset: undefined,
    Warning: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Preset !== undefined && data.Preset !== null) {
    contents.Preset = deserializeAws_restJson1_1Preset(data.Preset, context);
  }
  if (data.Warning !== undefined && data.Warning !== null) {
    contents.Warning = data.Warning;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreatePresetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.etscustomer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleVersionException":
    case "com.amazonaws.etscustomer#IncompatibleVersionException":
      response = {
        ...(await deserializeAws_restJson1_1IncompatibleVersionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.etscustomer#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.etscustomer#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.etscustomer#ValidationException":
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

export async function deserializeAws_restJson1_1DeletePipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeletePipelineCommandError(
      output,
      context
    );
  }
  const contents: DeletePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeletePipelineResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeletePipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.etscustomer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleVersionException":
    case "com.amazonaws.etscustomer#IncompatibleVersionException":
      response = {
        ...(await deserializeAws_restJson1_1IncompatibleVersionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.etscustomer#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.etscustomer#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.etscustomer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.etscustomer#ValidationException":
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

export async function deserializeAws_restJson1_1DeletePresetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePresetCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeletePresetCommandError(output, context);
  }
  const contents: DeletePresetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeletePresetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeletePresetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePresetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.etscustomer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleVersionException":
    case "com.amazonaws.etscustomer#IncompatibleVersionException":
      response = {
        ...(await deserializeAws_restJson1_1IncompatibleVersionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.etscustomer#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.etscustomer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.etscustomer#ValidationException":
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

export async function deserializeAws_restJson1_1ListJobsByPipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsByPipelineCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListJobsByPipelineCommandError(
      output,
      context
    );
  }
  const contents: ListJobsByPipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListJobsByPipelineResponse",
    Jobs: undefined,
    NextPageToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Jobs !== undefined && data.Jobs !== null) {
    contents.Jobs = deserializeAws_restJson1_1Jobs(data.Jobs, context);
  }
  if (data.NextPageToken !== undefined && data.NextPageToken !== null) {
    contents.NextPageToken = data.NextPageToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListJobsByPipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsByPipelineCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.etscustomer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleVersionException":
    case "com.amazonaws.etscustomer#IncompatibleVersionException":
      response = {
        ...(await deserializeAws_restJson1_1IncompatibleVersionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.etscustomer#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.etscustomer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.etscustomer#ValidationException":
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

export async function deserializeAws_restJson1_1ListJobsByStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsByStatusCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListJobsByStatusCommandError(
      output,
      context
    );
  }
  const contents: ListJobsByStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListJobsByStatusResponse",
    Jobs: undefined,
    NextPageToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Jobs !== undefined && data.Jobs !== null) {
    contents.Jobs = deserializeAws_restJson1_1Jobs(data.Jobs, context);
  }
  if (data.NextPageToken !== undefined && data.NextPageToken !== null) {
    contents.NextPageToken = data.NextPageToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListJobsByStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsByStatusCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.etscustomer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleVersionException":
    case "com.amazonaws.etscustomer#IncompatibleVersionException":
      response = {
        ...(await deserializeAws_restJson1_1IncompatibleVersionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.etscustomer#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.etscustomer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.etscustomer#ValidationException":
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

export async function deserializeAws_restJson1_1ListPipelinesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListPipelinesCommandError(output, context);
  }
  const contents: ListPipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPipelinesResponse",
    NextPageToken: undefined,
    Pipelines: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextPageToken !== undefined && data.NextPageToken !== null) {
    contents.NextPageToken = data.NextPageToken;
  }
  if (data.Pipelines !== undefined && data.Pipelines !== null) {
    contents.Pipelines = deserializeAws_restJson1_1Pipelines(
      data.Pipelines,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListPipelinesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.etscustomer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleVersionException":
    case "com.amazonaws.etscustomer#IncompatibleVersionException":
      response = {
        ...(await deserializeAws_restJson1_1IncompatibleVersionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.etscustomer#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.etscustomer#ValidationException":
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

export async function deserializeAws_restJson1_1ListPresetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPresetsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListPresetsCommandError(output, context);
  }
  const contents: ListPresetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPresetsResponse",
    NextPageToken: undefined,
    Presets: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextPageToken !== undefined && data.NextPageToken !== null) {
    contents.NextPageToken = data.NextPageToken;
  }
  if (data.Presets !== undefined && data.Presets !== null) {
    contents.Presets = deserializeAws_restJson1_1Presets(data.Presets, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListPresetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPresetsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.etscustomer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleVersionException":
    case "com.amazonaws.etscustomer#IncompatibleVersionException":
      response = {
        ...(await deserializeAws_restJson1_1IncompatibleVersionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.etscustomer#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.etscustomer#ValidationException":
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

export async function deserializeAws_restJson1_1ReadJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ReadJobCommandError(output, context);
  }
  const contents: ReadJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ReadJobResponse",
    Job: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Job !== undefined && data.Job !== null) {
    contents.Job = deserializeAws_restJson1_1Job(data.Job, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ReadJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.etscustomer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleVersionException":
    case "com.amazonaws.etscustomer#IncompatibleVersionException":
      response = {
        ...(await deserializeAws_restJson1_1IncompatibleVersionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.etscustomer#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.etscustomer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.etscustomer#ValidationException":
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

export async function deserializeAws_restJson1_1ReadPipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadPipelineCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ReadPipelineCommandError(output, context);
  }
  const contents: ReadPipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ReadPipelineResponse",
    Pipeline: undefined,
    Warnings: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Pipeline !== undefined && data.Pipeline !== null) {
    contents.Pipeline = deserializeAws_restJson1_1Pipeline(
      data.Pipeline,
      context
    );
  }
  if (data.Warnings !== undefined && data.Warnings !== null) {
    contents.Warnings = deserializeAws_restJson1_1Warnings(
      data.Warnings,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ReadPipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadPipelineCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.etscustomer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleVersionException":
    case "com.amazonaws.etscustomer#IncompatibleVersionException":
      response = {
        ...(await deserializeAws_restJson1_1IncompatibleVersionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.etscustomer#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.etscustomer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.etscustomer#ValidationException":
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

export async function deserializeAws_restJson1_1ReadPresetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadPresetCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ReadPresetCommandError(output, context);
  }
  const contents: ReadPresetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ReadPresetResponse",
    Preset: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Preset !== undefined && data.Preset !== null) {
    contents.Preset = deserializeAws_restJson1_1Preset(data.Preset, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ReadPresetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadPresetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.etscustomer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleVersionException":
    case "com.amazonaws.etscustomer#IncompatibleVersionException":
      response = {
        ...(await deserializeAws_restJson1_1IncompatibleVersionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.etscustomer#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.etscustomer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.etscustomer#ValidationException":
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

export async function deserializeAws_restJson1_1TestRoleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRoleCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TestRoleCommandError(output, context);
  }
  const contents: TestRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TestRoleResponse",
    Messages: undefined,
    Success: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Messages !== undefined && data.Messages !== null) {
    contents.Messages = deserializeAws_restJson1_1ExceptionMessages(
      data.Messages,
      context
    );
  }
  if (data.Success !== undefined && data.Success !== null) {
    contents.Success = data.Success;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TestRoleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRoleCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.etscustomer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleVersionException":
    case "com.amazonaws.etscustomer#IncompatibleVersionException":
      response = {
        ...(await deserializeAws_restJson1_1IncompatibleVersionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.etscustomer#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.etscustomer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.etscustomer#ValidationException":
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

export async function deserializeAws_restJson1_1UpdatePipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdatePipelineCommandError(
      output,
      context
    );
  }
  const contents: UpdatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdatePipelineResponse",
    Pipeline: undefined,
    Warnings: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Pipeline !== undefined && data.Pipeline !== null) {
    contents.Pipeline = deserializeAws_restJson1_1Pipeline(
      data.Pipeline,
      context
    );
  }
  if (data.Warnings !== undefined && data.Warnings !== null) {
    contents.Warnings = deserializeAws_restJson1_1Warnings(
      data.Warnings,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdatePipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.etscustomer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleVersionException":
    case "com.amazonaws.etscustomer#IncompatibleVersionException":
      response = {
        ...(await deserializeAws_restJson1_1IncompatibleVersionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.etscustomer#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.etscustomer#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.etscustomer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.etscustomer#ValidationException":
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

export async function deserializeAws_restJson1_1UpdatePipelineNotificationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineNotificationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdatePipelineNotificationsCommandError(
      output,
      context
    );
  }
  const contents: UpdatePipelineNotificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdatePipelineNotificationsResponse",
    Pipeline: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Pipeline !== undefined && data.Pipeline !== null) {
    contents.Pipeline = deserializeAws_restJson1_1Pipeline(
      data.Pipeline,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdatePipelineNotificationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineNotificationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.etscustomer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleVersionException":
    case "com.amazonaws.etscustomer#IncompatibleVersionException":
      response = {
        ...(await deserializeAws_restJson1_1IncompatibleVersionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.etscustomer#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.etscustomer#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.etscustomer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.etscustomer#ValidationException":
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

export async function deserializeAws_restJson1_1UpdatePipelineStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineStatusCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdatePipelineStatusCommandError(
      output,
      context
    );
  }
  const contents: UpdatePipelineStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdatePipelineStatusResponse",
    Pipeline: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Pipeline !== undefined && data.Pipeline !== null) {
    contents.Pipeline = deserializeAws_restJson1_1Pipeline(
      data.Pipeline,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdatePipelineStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineStatusCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.etscustomer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleVersionException":
    case "com.amazonaws.etscustomer#IncompatibleVersionException":
      response = {
        ...(await deserializeAws_restJson1_1IncompatibleVersionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.etscustomer#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.etscustomer#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.etscustomer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.etscustomer#ValidationException":
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

const deserializeAws_restJson1_1IncompatibleVersionExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IncompatibleVersionException> => {
  const contents: IncompatibleVersionException = {
    name: "IncompatibleVersionException",
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

const deserializeAws_restJson1_1InternalServiceExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: InternalServiceException = {
    name: "InternalServiceException",
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

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
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

const deserializeAws_restJson1_1ResourceInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
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

const serializeAws_restJson1_1AccessControls = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1Artwork = (
  input: Artwork,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AlbumArtFormat !== undefined) {
    bodyParams["AlbumArtFormat"] = input.AlbumArtFormat;
  }
  if (input.Encryption !== undefined) {
    bodyParams["Encryption"] = serializeAws_restJson1_1Encryption(
      input.Encryption,
      context
    );
  }
  if (input.InputKey !== undefined) {
    bodyParams["InputKey"] = input.InputKey;
  }
  if (input.MaxHeight !== undefined) {
    bodyParams["MaxHeight"] = input.MaxHeight;
  }
  if (input.MaxWidth !== undefined) {
    bodyParams["MaxWidth"] = input.MaxWidth;
  }
  if (input.PaddingPolicy !== undefined) {
    bodyParams["PaddingPolicy"] = input.PaddingPolicy;
  }
  if (input.SizingPolicy !== undefined) {
    bodyParams["SizingPolicy"] = input.SizingPolicy;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Artworks = (
  input: Array<Artwork>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Artwork(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1AudioCodecOptions = (
  input: AudioCodecOptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BitDepth !== undefined) {
    bodyParams["BitDepth"] = input.BitDepth;
  }
  if (input.BitOrder !== undefined) {
    bodyParams["BitOrder"] = input.BitOrder;
  }
  if (input.Profile !== undefined) {
    bodyParams["Profile"] = input.Profile;
  }
  if (input.Signed !== undefined) {
    bodyParams["Signed"] = input.Signed;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AudioParameters = (
  input: AudioParameters,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AudioPackingMode !== undefined) {
    bodyParams["AudioPackingMode"] = input.AudioPackingMode;
  }
  if (input.BitRate !== undefined) {
    bodyParams["BitRate"] = input.BitRate;
  }
  if (input.Channels !== undefined) {
    bodyParams["Channels"] = input.Channels;
  }
  if (input.Codec !== undefined) {
    bodyParams["Codec"] = input.Codec;
  }
  if (input.CodecOptions !== undefined) {
    bodyParams["CodecOptions"] = serializeAws_restJson1_1AudioCodecOptions(
      input.CodecOptions,
      context
    );
  }
  if (input.SampleRate !== undefined) {
    bodyParams["SampleRate"] = input.SampleRate;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CaptionFormat = (
  input: CaptionFormat,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Encryption !== undefined) {
    bodyParams["Encryption"] = serializeAws_restJson1_1Encryption(
      input.Encryption,
      context
    );
  }
  if (input.Format !== undefined) {
    bodyParams["Format"] = input.Format;
  }
  if (input.Pattern !== undefined) {
    bodyParams["Pattern"] = input.Pattern;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CaptionFormats = (
  input: Array<CaptionFormat>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1CaptionFormat(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1CaptionSource = (
  input: CaptionSource,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Encryption !== undefined) {
    bodyParams["Encryption"] = serializeAws_restJson1_1Encryption(
      input.Encryption,
      context
    );
  }
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Label !== undefined) {
    bodyParams["Label"] = input.Label;
  }
  if (input.Language !== undefined) {
    bodyParams["Language"] = input.Language;
  }
  if (input.TimeOffset !== undefined) {
    bodyParams["TimeOffset"] = input.TimeOffset;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CaptionSources = (
  input: Array<CaptionSource>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1CaptionSource(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1Captions = (
  input: Captions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CaptionFormats !== undefined) {
    bodyParams["CaptionFormats"] = serializeAws_restJson1_1CaptionFormats(
      input.CaptionFormats,
      context
    );
  }
  if (input.CaptionSources !== undefined) {
    bodyParams["CaptionSources"] = serializeAws_restJson1_1CaptionSources(
      input.CaptionSources,
      context
    );
  }
  if (input.MergePolicy !== undefined) {
    bodyParams["MergePolicy"] = input.MergePolicy;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Clip = (
  input: Clip,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.TimeSpan !== undefined) {
    bodyParams["TimeSpan"] = serializeAws_restJson1_1TimeSpan(
      input.TimeSpan,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1CodecOptions = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1Composition = (
  input: Array<Clip>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Clip(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1CreateJobOutput = (
  input: CreateJobOutput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AlbumArt !== undefined) {
    bodyParams["AlbumArt"] = serializeAws_restJson1_1JobAlbumArt(
      input.AlbumArt,
      context
    );
  }
  if (input.Captions !== undefined) {
    bodyParams["Captions"] = serializeAws_restJson1_1Captions(
      input.Captions,
      context
    );
  }
  if (input.Composition !== undefined) {
    bodyParams["Composition"] = serializeAws_restJson1_1Composition(
      input.Composition,
      context
    );
  }
  if (input.Encryption !== undefined) {
    bodyParams["Encryption"] = serializeAws_restJson1_1Encryption(
      input.Encryption,
      context
    );
  }
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.PresetId !== undefined) {
    bodyParams["PresetId"] = input.PresetId;
  }
  if (input.Rotate !== undefined) {
    bodyParams["Rotate"] = input.Rotate;
  }
  if (input.SegmentDuration !== undefined) {
    bodyParams["SegmentDuration"] = input.SegmentDuration;
  }
  if (input.ThumbnailEncryption !== undefined) {
    bodyParams["ThumbnailEncryption"] = serializeAws_restJson1_1Encryption(
      input.ThumbnailEncryption,
      context
    );
  }
  if (input.ThumbnailPattern !== undefined) {
    bodyParams["ThumbnailPattern"] = input.ThumbnailPattern;
  }
  if (input.Watermarks !== undefined) {
    bodyParams["Watermarks"] = serializeAws_restJson1_1JobWatermarks(
      input.Watermarks,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1CreateJobOutputs = (
  input: Array<CreateJobOutput>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1CreateJobOutput(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1CreateJobPlaylist = (
  input: CreateJobPlaylist,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Format !== undefined) {
    bodyParams["Format"] = input.Format;
  }
  if (input.HlsContentProtection !== undefined) {
    bodyParams[
      "HlsContentProtection"
    ] = serializeAws_restJson1_1HlsContentProtection(
      input.HlsContentProtection,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.OutputKeys !== undefined) {
    bodyParams["OutputKeys"] = serializeAws_restJson1_1OutputKeys(
      input.OutputKeys,
      context
    );
  }
  if (input.PlayReadyDrm !== undefined) {
    bodyParams["PlayReadyDrm"] = serializeAws_restJson1_1PlayReadyDrm(
      input.PlayReadyDrm,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1CreateJobPlaylists = (
  input: Array<CreateJobPlaylist>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1CreateJobPlaylist(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1DetectedProperties = (
  input: DetectedProperties,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DurationMillis !== undefined) {
    bodyParams["DurationMillis"] = input.DurationMillis;
  }
  if (input.FileSize !== undefined) {
    bodyParams["FileSize"] = input.FileSize;
  }
  if (input.FrameRate !== undefined) {
    bodyParams["FrameRate"] = input.FrameRate;
  }
  if (input.Height !== undefined) {
    bodyParams["Height"] = input.Height;
  }
  if (input.Width !== undefined) {
    bodyParams["Width"] = input.Width;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Encryption = (
  input: Encryption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InitializationVector !== undefined) {
    bodyParams["InitializationVector"] = input.InitializationVector;
  }
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.KeyMd5 !== undefined) {
    bodyParams["KeyMd5"] = input.KeyMd5;
  }
  if (input.Mode !== undefined) {
    bodyParams["Mode"] = input.Mode;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsContentProtection = (
  input: HlsContentProtection,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InitializationVector !== undefined) {
    bodyParams["InitializationVector"] = input.InitializationVector;
  }
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.KeyMd5 !== undefined) {
    bodyParams["KeyMd5"] = input.KeyMd5;
  }
  if (input.KeyStoragePolicy !== undefined) {
    bodyParams["KeyStoragePolicy"] = input.KeyStoragePolicy;
  }
  if (input.LicenseAcquisitionUrl !== undefined) {
    bodyParams["LicenseAcquisitionUrl"] = input.LicenseAcquisitionUrl;
  }
  if (input.Method !== undefined) {
    bodyParams["Method"] = input.Method;
  }
  return bodyParams;
};

const serializeAws_restJson1_1InputCaptions = (
  input: InputCaptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CaptionSources !== undefined) {
    bodyParams["CaptionSources"] = serializeAws_restJson1_1CaptionSources(
      input.CaptionSources,
      context
    );
  }
  if (input.MergePolicy !== undefined) {
    bodyParams["MergePolicy"] = input.MergePolicy;
  }
  return bodyParams;
};

const serializeAws_restJson1_1JobAlbumArt = (
  input: JobAlbumArt,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Artwork !== undefined) {
    bodyParams["Artwork"] = serializeAws_restJson1_1Artworks(
      input.Artwork,
      context
    );
  }
  if (input.MergePolicy !== undefined) {
    bodyParams["MergePolicy"] = input.MergePolicy;
  }
  return bodyParams;
};

const serializeAws_restJson1_1JobInput = (
  input: JobInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AspectRatio !== undefined) {
    bodyParams["AspectRatio"] = input.AspectRatio;
  }
  if (input.Container !== undefined) {
    bodyParams["Container"] = input.Container;
  }
  if (input.DetectedProperties !== undefined) {
    bodyParams[
      "DetectedProperties"
    ] = serializeAws_restJson1_1DetectedProperties(
      input.DetectedProperties,
      context
    );
  }
  if (input.Encryption !== undefined) {
    bodyParams["Encryption"] = serializeAws_restJson1_1Encryption(
      input.Encryption,
      context
    );
  }
  if (input.FrameRate !== undefined) {
    bodyParams["FrameRate"] = input.FrameRate;
  }
  if (input.InputCaptions !== undefined) {
    bodyParams["InputCaptions"] = serializeAws_restJson1_1InputCaptions(
      input.InputCaptions,
      context
    );
  }
  if (input.Interlaced !== undefined) {
    bodyParams["Interlaced"] = input.Interlaced;
  }
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Resolution !== undefined) {
    bodyParams["Resolution"] = input.Resolution;
  }
  if (input.TimeSpan !== undefined) {
    bodyParams["TimeSpan"] = serializeAws_restJson1_1TimeSpan(
      input.TimeSpan,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1JobInputs = (
  input: Array<JobInput>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1JobInput(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1JobWatermark = (
  input: JobWatermark,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Encryption !== undefined) {
    bodyParams["Encryption"] = serializeAws_restJson1_1Encryption(
      input.Encryption,
      context
    );
  }
  if (input.InputKey !== undefined) {
    bodyParams["InputKey"] = input.InputKey;
  }
  if (input.PresetWatermarkId !== undefined) {
    bodyParams["PresetWatermarkId"] = input.PresetWatermarkId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1JobWatermarks = (
  input: Array<JobWatermark>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1JobWatermark(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1Notifications = (
  input: Notifications,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Completed !== undefined) {
    bodyParams["Completed"] = input.Completed;
  }
  if (input.Error !== undefined) {
    bodyParams["Error"] = input.Error;
  }
  if (input.Progressing !== undefined) {
    bodyParams["Progressing"] = input.Progressing;
  }
  if (input.Warning !== undefined) {
    bodyParams["Warning"] = input.Warning;
  }
  return bodyParams;
};

const serializeAws_restJson1_1OutputKeys = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1Permission = (
  input: Permission,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Access !== undefined) {
    bodyParams["Access"] = serializeAws_restJson1_1AccessControls(
      input.Access,
      context
    );
  }
  if (input.Grantee !== undefined) {
    bodyParams["Grantee"] = input.Grantee;
  }
  if (input.GranteeType !== undefined) {
    bodyParams["GranteeType"] = input.GranteeType;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Permissions = (
  input: Array<Permission>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Permission(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1PipelineOutputConfig = (
  input: PipelineOutputConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Bucket !== undefined) {
    bodyParams["Bucket"] = input.Bucket;
  }
  if (input.Permissions !== undefined) {
    bodyParams["Permissions"] = serializeAws_restJson1_1Permissions(
      input.Permissions,
      context
    );
  }
  if (input.StorageClass !== undefined) {
    bodyParams["StorageClass"] = input.StorageClass;
  }
  return bodyParams;
};

const serializeAws_restJson1_1PlayReadyDrm = (
  input: PlayReadyDrm,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Format !== undefined) {
    bodyParams["Format"] = input.Format;
  }
  if (input.InitializationVector !== undefined) {
    bodyParams["InitializationVector"] = input.InitializationVector;
  }
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.KeyMd5 !== undefined) {
    bodyParams["KeyMd5"] = input.KeyMd5;
  }
  if (input.LicenseAcquisitionUrl !== undefined) {
    bodyParams["LicenseAcquisitionUrl"] = input.LicenseAcquisitionUrl;
  }
  return bodyParams;
};

const serializeAws_restJson1_1PresetWatermark = (
  input: PresetWatermark,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.HorizontalAlign !== undefined) {
    bodyParams["HorizontalAlign"] = input.HorizontalAlign;
  }
  if (input.HorizontalOffset !== undefined) {
    bodyParams["HorizontalOffset"] = input.HorizontalOffset;
  }
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.MaxHeight !== undefined) {
    bodyParams["MaxHeight"] = input.MaxHeight;
  }
  if (input.MaxWidth !== undefined) {
    bodyParams["MaxWidth"] = input.MaxWidth;
  }
  if (input.Opacity !== undefined) {
    bodyParams["Opacity"] = input.Opacity;
  }
  if (input.SizingPolicy !== undefined) {
    bodyParams["SizingPolicy"] = input.SizingPolicy;
  }
  if (input.Target !== undefined) {
    bodyParams["Target"] = input.Target;
  }
  if (input.VerticalAlign !== undefined) {
    bodyParams["VerticalAlign"] = input.VerticalAlign;
  }
  if (input.VerticalOffset !== undefined) {
    bodyParams["VerticalOffset"] = input.VerticalOffset;
  }
  return bodyParams;
};

const serializeAws_restJson1_1PresetWatermarks = (
  input: Array<PresetWatermark>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1PresetWatermark(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1SnsTopics = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1Thumbnails = (
  input: Thumbnails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AspectRatio !== undefined) {
    bodyParams["AspectRatio"] = input.AspectRatio;
  }
  if (input.Format !== undefined) {
    bodyParams["Format"] = input.Format;
  }
  if (input.Interval !== undefined) {
    bodyParams["Interval"] = input.Interval;
  }
  if (input.MaxHeight !== undefined) {
    bodyParams["MaxHeight"] = input.MaxHeight;
  }
  if (input.MaxWidth !== undefined) {
    bodyParams["MaxWidth"] = input.MaxWidth;
  }
  if (input.PaddingPolicy !== undefined) {
    bodyParams["PaddingPolicy"] = input.PaddingPolicy;
  }
  if (input.Resolution !== undefined) {
    bodyParams["Resolution"] = input.Resolution;
  }
  if (input.SizingPolicy !== undefined) {
    bodyParams["SizingPolicy"] = input.SizingPolicy;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TimeSpan = (
  input: TimeSpan,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Duration !== undefined) {
    bodyParams["Duration"] = input.Duration;
  }
  if (input.StartTime !== undefined) {
    bodyParams["StartTime"] = input.StartTime;
  }
  return bodyParams;
};

const serializeAws_restJson1_1UserMetadata = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1VideoParameters = (
  input: VideoParameters,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AspectRatio !== undefined) {
    bodyParams["AspectRatio"] = input.AspectRatio;
  }
  if (input.BitRate !== undefined) {
    bodyParams["BitRate"] = input.BitRate;
  }
  if (input.Codec !== undefined) {
    bodyParams["Codec"] = input.Codec;
  }
  if (input.CodecOptions !== undefined) {
    bodyParams["CodecOptions"] = serializeAws_restJson1_1CodecOptions(
      input.CodecOptions,
      context
    );
  }
  if (input.DisplayAspectRatio !== undefined) {
    bodyParams["DisplayAspectRatio"] = input.DisplayAspectRatio;
  }
  if (input.FixedGOP !== undefined) {
    bodyParams["FixedGOP"] = input.FixedGOP;
  }
  if (input.FrameRate !== undefined) {
    bodyParams["FrameRate"] = input.FrameRate;
  }
  if (input.KeyframesMaxDist !== undefined) {
    bodyParams["KeyframesMaxDist"] = input.KeyframesMaxDist;
  }
  if (input.MaxFrameRate !== undefined) {
    bodyParams["MaxFrameRate"] = input.MaxFrameRate;
  }
  if (input.MaxHeight !== undefined) {
    bodyParams["MaxHeight"] = input.MaxHeight;
  }
  if (input.MaxWidth !== undefined) {
    bodyParams["MaxWidth"] = input.MaxWidth;
  }
  if (input.PaddingPolicy !== undefined) {
    bodyParams["PaddingPolicy"] = input.PaddingPolicy;
  }
  if (input.Resolution !== undefined) {
    bodyParams["Resolution"] = input.Resolution;
  }
  if (input.SizingPolicy !== undefined) {
    bodyParams["SizingPolicy"] = input.SizingPolicy;
  }
  if (input.Watermarks !== undefined) {
    bodyParams["Watermarks"] = serializeAws_restJson1_1PresetWatermarks(
      input.Watermarks,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_restJson1_1AccessControls = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Artwork = (
  output: any,
  context: __SerdeContext
): Artwork => {
  let contents: any = {
    __type: "Artwork",
    AlbumArtFormat: undefined,
    Encryption: undefined,
    InputKey: undefined,
    MaxHeight: undefined,
    MaxWidth: undefined,
    PaddingPolicy: undefined,
    SizingPolicy: undefined
  };
  if (output.AlbumArtFormat !== undefined && output.AlbumArtFormat !== null) {
    contents.AlbumArtFormat = output.AlbumArtFormat;
  }
  if (output.Encryption !== undefined && output.Encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1Encryption(
      output.Encryption,
      context
    );
  }
  if (output.InputKey !== undefined && output.InputKey !== null) {
    contents.InputKey = output.InputKey;
  }
  if (output.MaxHeight !== undefined && output.MaxHeight !== null) {
    contents.MaxHeight = output.MaxHeight;
  }
  if (output.MaxWidth !== undefined && output.MaxWidth !== null) {
    contents.MaxWidth = output.MaxWidth;
  }
  if (output.PaddingPolicy !== undefined && output.PaddingPolicy !== null) {
    contents.PaddingPolicy = output.PaddingPolicy;
  }
  if (output.SizingPolicy !== undefined && output.SizingPolicy !== null) {
    contents.SizingPolicy = output.SizingPolicy;
  }
  return contents;
};

const deserializeAws_restJson1_1Artworks = (
  output: any,
  context: __SerdeContext
): Array<Artwork> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Artwork(entry, context)
  );
};

const deserializeAws_restJson1_1AudioCodecOptions = (
  output: any,
  context: __SerdeContext
): AudioCodecOptions => {
  let contents: any = {
    __type: "AudioCodecOptions",
    BitDepth: undefined,
    BitOrder: undefined,
    Profile: undefined,
    Signed: undefined
  };
  if (output.BitDepth !== undefined && output.BitDepth !== null) {
    contents.BitDepth = output.BitDepth;
  }
  if (output.BitOrder !== undefined && output.BitOrder !== null) {
    contents.BitOrder = output.BitOrder;
  }
  if (output.Profile !== undefined && output.Profile !== null) {
    contents.Profile = output.Profile;
  }
  if (output.Signed !== undefined && output.Signed !== null) {
    contents.Signed = output.Signed;
  }
  return contents;
};

const deserializeAws_restJson1_1AudioParameters = (
  output: any,
  context: __SerdeContext
): AudioParameters => {
  let contents: any = {
    __type: "AudioParameters",
    AudioPackingMode: undefined,
    BitRate: undefined,
    Channels: undefined,
    Codec: undefined,
    CodecOptions: undefined,
    SampleRate: undefined
  };
  if (
    output.AudioPackingMode !== undefined &&
    output.AudioPackingMode !== null
  ) {
    contents.AudioPackingMode = output.AudioPackingMode;
  }
  if (output.BitRate !== undefined && output.BitRate !== null) {
    contents.BitRate = output.BitRate;
  }
  if (output.Channels !== undefined && output.Channels !== null) {
    contents.Channels = output.Channels;
  }
  if (output.Codec !== undefined && output.Codec !== null) {
    contents.Codec = output.Codec;
  }
  if (output.CodecOptions !== undefined && output.CodecOptions !== null) {
    contents.CodecOptions = deserializeAws_restJson1_1AudioCodecOptions(
      output.CodecOptions,
      context
    );
  }
  if (output.SampleRate !== undefined && output.SampleRate !== null) {
    contents.SampleRate = output.SampleRate;
  }
  return contents;
};

const deserializeAws_restJson1_1CaptionFormat = (
  output: any,
  context: __SerdeContext
): CaptionFormat => {
  let contents: any = {
    __type: "CaptionFormat",
    Encryption: undefined,
    Format: undefined,
    Pattern: undefined
  };
  if (output.Encryption !== undefined && output.Encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1Encryption(
      output.Encryption,
      context
    );
  }
  if (output.Format !== undefined && output.Format !== null) {
    contents.Format = output.Format;
  }
  if (output.Pattern !== undefined && output.Pattern !== null) {
    contents.Pattern = output.Pattern;
  }
  return contents;
};

const deserializeAws_restJson1_1CaptionFormats = (
  output: any,
  context: __SerdeContext
): Array<CaptionFormat> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CaptionFormat(entry, context)
  );
};

const deserializeAws_restJson1_1CaptionSource = (
  output: any,
  context: __SerdeContext
): CaptionSource => {
  let contents: any = {
    __type: "CaptionSource",
    Encryption: undefined,
    Key: undefined,
    Label: undefined,
    Language: undefined,
    TimeOffset: undefined
  };
  if (output.Encryption !== undefined && output.Encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1Encryption(
      output.Encryption,
      context
    );
  }
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Label !== undefined && output.Label !== null) {
    contents.Label = output.Label;
  }
  if (output.Language !== undefined && output.Language !== null) {
    contents.Language = output.Language;
  }
  if (output.TimeOffset !== undefined && output.TimeOffset !== null) {
    contents.TimeOffset = output.TimeOffset;
  }
  return contents;
};

const deserializeAws_restJson1_1CaptionSources = (
  output: any,
  context: __SerdeContext
): Array<CaptionSource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CaptionSource(entry, context)
  );
};

const deserializeAws_restJson1_1Captions = (
  output: any,
  context: __SerdeContext
): Captions => {
  let contents: any = {
    __type: "Captions",
    CaptionFormats: undefined,
    CaptionSources: undefined,
    MergePolicy: undefined
  };
  if (output.CaptionFormats !== undefined && output.CaptionFormats !== null) {
    contents.CaptionFormats = deserializeAws_restJson1_1CaptionFormats(
      output.CaptionFormats,
      context
    );
  }
  if (output.CaptionSources !== undefined && output.CaptionSources !== null) {
    contents.CaptionSources = deserializeAws_restJson1_1CaptionSources(
      output.CaptionSources,
      context
    );
  }
  if (output.MergePolicy !== undefined && output.MergePolicy !== null) {
    contents.MergePolicy = output.MergePolicy;
  }
  return contents;
};

const deserializeAws_restJson1_1Clip = (
  output: any,
  context: __SerdeContext
): Clip => {
  let contents: any = {
    __type: "Clip",
    TimeSpan: undefined
  };
  if (output.TimeSpan !== undefined && output.TimeSpan !== null) {
    contents.TimeSpan = deserializeAws_restJson1_1TimeSpan(
      output.TimeSpan,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1CodecOptions = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1Composition = (
  output: any,
  context: __SerdeContext
): Array<Clip> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Clip(entry, context)
  );
};

const deserializeAws_restJson1_1DetectedProperties = (
  output: any,
  context: __SerdeContext
): DetectedProperties => {
  let contents: any = {
    __type: "DetectedProperties",
    DurationMillis: undefined,
    FileSize: undefined,
    FrameRate: undefined,
    Height: undefined,
    Width: undefined
  };
  if (output.DurationMillis !== undefined && output.DurationMillis !== null) {
    contents.DurationMillis = output.DurationMillis;
  }
  if (output.FileSize !== undefined && output.FileSize !== null) {
    contents.FileSize = output.FileSize;
  }
  if (output.FrameRate !== undefined && output.FrameRate !== null) {
    contents.FrameRate = output.FrameRate;
  }
  if (output.Height !== undefined && output.Height !== null) {
    contents.Height = output.Height;
  }
  if (output.Width !== undefined && output.Width !== null) {
    contents.Width = output.Width;
  }
  return contents;
};

const deserializeAws_restJson1_1Encryption = (
  output: any,
  context: __SerdeContext
): Encryption => {
  let contents: any = {
    __type: "Encryption",
    InitializationVector: undefined,
    Key: undefined,
    KeyMd5: undefined,
    Mode: undefined
  };
  if (
    output.InitializationVector !== undefined &&
    output.InitializationVector !== null
  ) {
    contents.InitializationVector = output.InitializationVector;
  }
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.KeyMd5 !== undefined && output.KeyMd5 !== null) {
    contents.KeyMd5 = output.KeyMd5;
  }
  if (output.Mode !== undefined && output.Mode !== null) {
    contents.Mode = output.Mode;
  }
  return contents;
};

const deserializeAws_restJson1_1ExceptionMessages = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1HlsContentProtection = (
  output: any,
  context: __SerdeContext
): HlsContentProtection => {
  let contents: any = {
    __type: "HlsContentProtection",
    InitializationVector: undefined,
    Key: undefined,
    KeyMd5: undefined,
    KeyStoragePolicy: undefined,
    LicenseAcquisitionUrl: undefined,
    Method: undefined
  };
  if (
    output.InitializationVector !== undefined &&
    output.InitializationVector !== null
  ) {
    contents.InitializationVector = output.InitializationVector;
  }
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.KeyMd5 !== undefined && output.KeyMd5 !== null) {
    contents.KeyMd5 = output.KeyMd5;
  }
  if (
    output.KeyStoragePolicy !== undefined &&
    output.KeyStoragePolicy !== null
  ) {
    contents.KeyStoragePolicy = output.KeyStoragePolicy;
  }
  if (
    output.LicenseAcquisitionUrl !== undefined &&
    output.LicenseAcquisitionUrl !== null
  ) {
    contents.LicenseAcquisitionUrl = output.LicenseAcquisitionUrl;
  }
  if (output.Method !== undefined && output.Method !== null) {
    contents.Method = output.Method;
  }
  return contents;
};

const deserializeAws_restJson1_1InputCaptions = (
  output: any,
  context: __SerdeContext
): InputCaptions => {
  let contents: any = {
    __type: "InputCaptions",
    CaptionSources: undefined,
    MergePolicy: undefined
  };
  if (output.CaptionSources !== undefined && output.CaptionSources !== null) {
    contents.CaptionSources = deserializeAws_restJson1_1CaptionSources(
      output.CaptionSources,
      context
    );
  }
  if (output.MergePolicy !== undefined && output.MergePolicy !== null) {
    contents.MergePolicy = output.MergePolicy;
  }
  return contents;
};

const deserializeAws_restJson1_1Job = (
  output: any,
  context: __SerdeContext
): Job => {
  let contents: any = {
    __type: "Job",
    Arn: undefined,
    Id: undefined,
    Input: undefined,
    Inputs: undefined,
    Output: undefined,
    OutputKeyPrefix: undefined,
    Outputs: undefined,
    PipelineId: undefined,
    Playlists: undefined,
    Status: undefined,
    Timing: undefined,
    UserMetadata: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Input !== undefined && output.Input !== null) {
    contents.Input = deserializeAws_restJson1_1JobInput(output.Input, context);
  }
  if (output.Inputs !== undefined && output.Inputs !== null) {
    contents.Inputs = deserializeAws_restJson1_1JobInputs(
      output.Inputs,
      context
    );
  }
  if (output.Output !== undefined && output.Output !== null) {
    contents.Output = deserializeAws_restJson1_1JobOutput(
      output.Output,
      context
    );
  }
  if (output.OutputKeyPrefix !== undefined && output.OutputKeyPrefix !== null) {
    contents.OutputKeyPrefix = output.OutputKeyPrefix;
  }
  if (output.Outputs !== undefined && output.Outputs !== null) {
    contents.Outputs = deserializeAws_restJson1_1JobOutputs(
      output.Outputs,
      context
    );
  }
  if (output.PipelineId !== undefined && output.PipelineId !== null) {
    contents.PipelineId = output.PipelineId;
  }
  if (output.Playlists !== undefined && output.Playlists !== null) {
    contents.Playlists = deserializeAws_restJson1_1Playlists(
      output.Playlists,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.Timing !== undefined && output.Timing !== null) {
    contents.Timing = deserializeAws_restJson1_1Timing(output.Timing, context);
  }
  if (output.UserMetadata !== undefined && output.UserMetadata !== null) {
    contents.UserMetadata = deserializeAws_restJson1_1UserMetadata(
      output.UserMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1JobAlbumArt = (
  output: any,
  context: __SerdeContext
): JobAlbumArt => {
  let contents: any = {
    __type: "JobAlbumArt",
    Artwork: undefined,
    MergePolicy: undefined
  };
  if (output.Artwork !== undefined && output.Artwork !== null) {
    contents.Artwork = deserializeAws_restJson1_1Artworks(
      output.Artwork,
      context
    );
  }
  if (output.MergePolicy !== undefined && output.MergePolicy !== null) {
    contents.MergePolicy = output.MergePolicy;
  }
  return contents;
};

const deserializeAws_restJson1_1JobInput = (
  output: any,
  context: __SerdeContext
): JobInput => {
  let contents: any = {
    __type: "JobInput",
    AspectRatio: undefined,
    Container: undefined,
    DetectedProperties: undefined,
    Encryption: undefined,
    FrameRate: undefined,
    InputCaptions: undefined,
    Interlaced: undefined,
    Key: undefined,
    Resolution: undefined,
    TimeSpan: undefined
  };
  if (output.AspectRatio !== undefined && output.AspectRatio !== null) {
    contents.AspectRatio = output.AspectRatio;
  }
  if (output.Container !== undefined && output.Container !== null) {
    contents.Container = output.Container;
  }
  if (
    output.DetectedProperties !== undefined &&
    output.DetectedProperties !== null
  ) {
    contents.DetectedProperties = deserializeAws_restJson1_1DetectedProperties(
      output.DetectedProperties,
      context
    );
  }
  if (output.Encryption !== undefined && output.Encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1Encryption(
      output.Encryption,
      context
    );
  }
  if (output.FrameRate !== undefined && output.FrameRate !== null) {
    contents.FrameRate = output.FrameRate;
  }
  if (output.InputCaptions !== undefined && output.InputCaptions !== null) {
    contents.InputCaptions = deserializeAws_restJson1_1InputCaptions(
      output.InputCaptions,
      context
    );
  }
  if (output.Interlaced !== undefined && output.Interlaced !== null) {
    contents.Interlaced = output.Interlaced;
  }
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Resolution !== undefined && output.Resolution !== null) {
    contents.Resolution = output.Resolution;
  }
  if (output.TimeSpan !== undefined && output.TimeSpan !== null) {
    contents.TimeSpan = deserializeAws_restJson1_1TimeSpan(
      output.TimeSpan,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1JobInputs = (
  output: any,
  context: __SerdeContext
): Array<JobInput> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1JobInput(entry, context)
  );
};

const deserializeAws_restJson1_1JobOutput = (
  output: any,
  context: __SerdeContext
): JobOutput => {
  let contents: any = {
    __type: "JobOutput",
    AlbumArt: undefined,
    AppliedColorSpaceConversion: undefined,
    Captions: undefined,
    Composition: undefined,
    Duration: undefined,
    DurationMillis: undefined,
    Encryption: undefined,
    FileSize: undefined,
    FrameRate: undefined,
    Height: undefined,
    Id: undefined,
    Key: undefined,
    PresetId: undefined,
    Rotate: undefined,
    SegmentDuration: undefined,
    Status: undefined,
    StatusDetail: undefined,
    ThumbnailEncryption: undefined,
    ThumbnailPattern: undefined,
    Watermarks: undefined,
    Width: undefined
  };
  if (output.AlbumArt !== undefined && output.AlbumArt !== null) {
    contents.AlbumArt = deserializeAws_restJson1_1JobAlbumArt(
      output.AlbumArt,
      context
    );
  }
  if (
    output.AppliedColorSpaceConversion !== undefined &&
    output.AppliedColorSpaceConversion !== null
  ) {
    contents.AppliedColorSpaceConversion = output.AppliedColorSpaceConversion;
  }
  if (output.Captions !== undefined && output.Captions !== null) {
    contents.Captions = deserializeAws_restJson1_1Captions(
      output.Captions,
      context
    );
  }
  if (output.Composition !== undefined && output.Composition !== null) {
    contents.Composition = deserializeAws_restJson1_1Composition(
      output.Composition,
      context
    );
  }
  if (output.Duration !== undefined && output.Duration !== null) {
    contents.Duration = output.Duration;
  }
  if (output.DurationMillis !== undefined && output.DurationMillis !== null) {
    contents.DurationMillis = output.DurationMillis;
  }
  if (output.Encryption !== undefined && output.Encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1Encryption(
      output.Encryption,
      context
    );
  }
  if (output.FileSize !== undefined && output.FileSize !== null) {
    contents.FileSize = output.FileSize;
  }
  if (output.FrameRate !== undefined && output.FrameRate !== null) {
    contents.FrameRate = output.FrameRate;
  }
  if (output.Height !== undefined && output.Height !== null) {
    contents.Height = output.Height;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.PresetId !== undefined && output.PresetId !== null) {
    contents.PresetId = output.PresetId;
  }
  if (output.Rotate !== undefined && output.Rotate !== null) {
    contents.Rotate = output.Rotate;
  }
  if (output.SegmentDuration !== undefined && output.SegmentDuration !== null) {
    contents.SegmentDuration = output.SegmentDuration;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.StatusDetail !== undefined && output.StatusDetail !== null) {
    contents.StatusDetail = output.StatusDetail;
  }
  if (
    output.ThumbnailEncryption !== undefined &&
    output.ThumbnailEncryption !== null
  ) {
    contents.ThumbnailEncryption = deserializeAws_restJson1_1Encryption(
      output.ThumbnailEncryption,
      context
    );
  }
  if (
    output.ThumbnailPattern !== undefined &&
    output.ThumbnailPattern !== null
  ) {
    contents.ThumbnailPattern = output.ThumbnailPattern;
  }
  if (output.Watermarks !== undefined && output.Watermarks !== null) {
    contents.Watermarks = deserializeAws_restJson1_1JobWatermarks(
      output.Watermarks,
      context
    );
  }
  if (output.Width !== undefined && output.Width !== null) {
    contents.Width = output.Width;
  }
  return contents;
};

const deserializeAws_restJson1_1JobOutputs = (
  output: any,
  context: __SerdeContext
): Array<JobOutput> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1JobOutput(entry, context)
  );
};

const deserializeAws_restJson1_1JobWatermark = (
  output: any,
  context: __SerdeContext
): JobWatermark => {
  let contents: any = {
    __type: "JobWatermark",
    Encryption: undefined,
    InputKey: undefined,
    PresetWatermarkId: undefined
  };
  if (output.Encryption !== undefined && output.Encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1Encryption(
      output.Encryption,
      context
    );
  }
  if (output.InputKey !== undefined && output.InputKey !== null) {
    contents.InputKey = output.InputKey;
  }
  if (
    output.PresetWatermarkId !== undefined &&
    output.PresetWatermarkId !== null
  ) {
    contents.PresetWatermarkId = output.PresetWatermarkId;
  }
  return contents;
};

const deserializeAws_restJson1_1JobWatermarks = (
  output: any,
  context: __SerdeContext
): Array<JobWatermark> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1JobWatermark(entry, context)
  );
};

const deserializeAws_restJson1_1Jobs = (
  output: any,
  context: __SerdeContext
): Array<Job> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Job(entry, context)
  );
};

const deserializeAws_restJson1_1Notifications = (
  output: any,
  context: __SerdeContext
): Notifications => {
  let contents: any = {
    __type: "Notifications",
    Completed: undefined,
    Error: undefined,
    Progressing: undefined,
    Warning: undefined
  };
  if (output.Completed !== undefined && output.Completed !== null) {
    contents.Completed = output.Completed;
  }
  if (output.Error !== undefined && output.Error !== null) {
    contents.Error = output.Error;
  }
  if (output.Progressing !== undefined && output.Progressing !== null) {
    contents.Progressing = output.Progressing;
  }
  if (output.Warning !== undefined && output.Warning !== null) {
    contents.Warning = output.Warning;
  }
  return contents;
};

const deserializeAws_restJson1_1OutputKeys = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Permission = (
  output: any,
  context: __SerdeContext
): Permission => {
  let contents: any = {
    __type: "Permission",
    Access: undefined,
    Grantee: undefined,
    GranteeType: undefined
  };
  if (output.Access !== undefined && output.Access !== null) {
    contents.Access = deserializeAws_restJson1_1AccessControls(
      output.Access,
      context
    );
  }
  if (output.Grantee !== undefined && output.Grantee !== null) {
    contents.Grantee = output.Grantee;
  }
  if (output.GranteeType !== undefined && output.GranteeType !== null) {
    contents.GranteeType = output.GranteeType;
  }
  return contents;
};

const deserializeAws_restJson1_1Permissions = (
  output: any,
  context: __SerdeContext
): Array<Permission> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Permission(entry, context)
  );
};

const deserializeAws_restJson1_1Pipeline = (
  output: any,
  context: __SerdeContext
): Pipeline => {
  let contents: any = {
    __type: "Pipeline",
    Arn: undefined,
    AwsKmsKeyArn: undefined,
    ContentConfig: undefined,
    Id: undefined,
    InputBucket: undefined,
    Name: undefined,
    Notifications: undefined,
    OutputBucket: undefined,
    Role: undefined,
    Status: undefined,
    ThumbnailConfig: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.AwsKmsKeyArn !== undefined && output.AwsKmsKeyArn !== null) {
    contents.AwsKmsKeyArn = output.AwsKmsKeyArn;
  }
  if (output.ContentConfig !== undefined && output.ContentConfig !== null) {
    contents.ContentConfig = deserializeAws_restJson1_1PipelineOutputConfig(
      output.ContentConfig,
      context
    );
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.InputBucket !== undefined && output.InputBucket !== null) {
    contents.InputBucket = output.InputBucket;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Notifications !== undefined && output.Notifications !== null) {
    contents.Notifications = deserializeAws_restJson1_1Notifications(
      output.Notifications,
      context
    );
  }
  if (output.OutputBucket !== undefined && output.OutputBucket !== null) {
    contents.OutputBucket = output.OutputBucket;
  }
  if (output.Role !== undefined && output.Role !== null) {
    contents.Role = output.Role;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.ThumbnailConfig !== undefined && output.ThumbnailConfig !== null) {
    contents.ThumbnailConfig = deserializeAws_restJson1_1PipelineOutputConfig(
      output.ThumbnailConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1PipelineOutputConfig = (
  output: any,
  context: __SerdeContext
): PipelineOutputConfig => {
  let contents: any = {
    __type: "PipelineOutputConfig",
    Bucket: undefined,
    Permissions: undefined,
    StorageClass: undefined
  };
  if (output.Bucket !== undefined && output.Bucket !== null) {
    contents.Bucket = output.Bucket;
  }
  if (output.Permissions !== undefined && output.Permissions !== null) {
    contents.Permissions = deserializeAws_restJson1_1Permissions(
      output.Permissions,
      context
    );
  }
  if (output.StorageClass !== undefined && output.StorageClass !== null) {
    contents.StorageClass = output.StorageClass;
  }
  return contents;
};

const deserializeAws_restJson1_1Pipelines = (
  output: any,
  context: __SerdeContext
): Array<Pipeline> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Pipeline(entry, context)
  );
};

const deserializeAws_restJson1_1PlayReadyDrm = (
  output: any,
  context: __SerdeContext
): PlayReadyDrm => {
  let contents: any = {
    __type: "PlayReadyDrm",
    Format: undefined,
    InitializationVector: undefined,
    Key: undefined,
    KeyId: undefined,
    KeyMd5: undefined,
    LicenseAcquisitionUrl: undefined
  };
  if (output.Format !== undefined && output.Format !== null) {
    contents.Format = output.Format;
  }
  if (
    output.InitializationVector !== undefined &&
    output.InitializationVector !== null
  ) {
    contents.InitializationVector = output.InitializationVector;
  }
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  if (output.KeyMd5 !== undefined && output.KeyMd5 !== null) {
    contents.KeyMd5 = output.KeyMd5;
  }
  if (
    output.LicenseAcquisitionUrl !== undefined &&
    output.LicenseAcquisitionUrl !== null
  ) {
    contents.LicenseAcquisitionUrl = output.LicenseAcquisitionUrl;
  }
  return contents;
};

const deserializeAws_restJson1_1Playlist = (
  output: any,
  context: __SerdeContext
): Playlist => {
  let contents: any = {
    __type: "Playlist",
    Format: undefined,
    HlsContentProtection: undefined,
    Name: undefined,
    OutputKeys: undefined,
    PlayReadyDrm: undefined,
    Status: undefined,
    StatusDetail: undefined
  };
  if (output.Format !== undefined && output.Format !== null) {
    contents.Format = output.Format;
  }
  if (
    output.HlsContentProtection !== undefined &&
    output.HlsContentProtection !== null
  ) {
    contents.HlsContentProtection = deserializeAws_restJson1_1HlsContentProtection(
      output.HlsContentProtection,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.OutputKeys !== undefined && output.OutputKeys !== null) {
    contents.OutputKeys = deserializeAws_restJson1_1OutputKeys(
      output.OutputKeys,
      context
    );
  }
  if (output.PlayReadyDrm !== undefined && output.PlayReadyDrm !== null) {
    contents.PlayReadyDrm = deserializeAws_restJson1_1PlayReadyDrm(
      output.PlayReadyDrm,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.StatusDetail !== undefined && output.StatusDetail !== null) {
    contents.StatusDetail = output.StatusDetail;
  }
  return contents;
};

const deserializeAws_restJson1_1Playlists = (
  output: any,
  context: __SerdeContext
): Array<Playlist> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Playlist(entry, context)
  );
};

const deserializeAws_restJson1_1Preset = (
  output: any,
  context: __SerdeContext
): Preset => {
  let contents: any = {
    __type: "Preset",
    Arn: undefined,
    Audio: undefined,
    Container: undefined,
    Description: undefined,
    Id: undefined,
    Name: undefined,
    Thumbnails: undefined,
    Type: undefined,
    Video: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.Audio !== undefined && output.Audio !== null) {
    contents.Audio = deserializeAws_restJson1_1AudioParameters(
      output.Audio,
      context
    );
  }
  if (output.Container !== undefined && output.Container !== null) {
    contents.Container = output.Container;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Thumbnails !== undefined && output.Thumbnails !== null) {
    contents.Thumbnails = deserializeAws_restJson1_1Thumbnails(
      output.Thumbnails,
      context
    );
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  if (output.Video !== undefined && output.Video !== null) {
    contents.Video = deserializeAws_restJson1_1VideoParameters(
      output.Video,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1PresetWatermark = (
  output: any,
  context: __SerdeContext
): PresetWatermark => {
  let contents: any = {
    __type: "PresetWatermark",
    HorizontalAlign: undefined,
    HorizontalOffset: undefined,
    Id: undefined,
    MaxHeight: undefined,
    MaxWidth: undefined,
    Opacity: undefined,
    SizingPolicy: undefined,
    Target: undefined,
    VerticalAlign: undefined,
    VerticalOffset: undefined
  };
  if (output.HorizontalAlign !== undefined && output.HorizontalAlign !== null) {
    contents.HorizontalAlign = output.HorizontalAlign;
  }
  if (
    output.HorizontalOffset !== undefined &&
    output.HorizontalOffset !== null
  ) {
    contents.HorizontalOffset = output.HorizontalOffset;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.MaxHeight !== undefined && output.MaxHeight !== null) {
    contents.MaxHeight = output.MaxHeight;
  }
  if (output.MaxWidth !== undefined && output.MaxWidth !== null) {
    contents.MaxWidth = output.MaxWidth;
  }
  if (output.Opacity !== undefined && output.Opacity !== null) {
    contents.Opacity = output.Opacity;
  }
  if (output.SizingPolicy !== undefined && output.SizingPolicy !== null) {
    contents.SizingPolicy = output.SizingPolicy;
  }
  if (output.Target !== undefined && output.Target !== null) {
    contents.Target = output.Target;
  }
  if (output.VerticalAlign !== undefined && output.VerticalAlign !== null) {
    contents.VerticalAlign = output.VerticalAlign;
  }
  if (output.VerticalOffset !== undefined && output.VerticalOffset !== null) {
    contents.VerticalOffset = output.VerticalOffset;
  }
  return contents;
};

const deserializeAws_restJson1_1PresetWatermarks = (
  output: any,
  context: __SerdeContext
): Array<PresetWatermark> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PresetWatermark(entry, context)
  );
};

const deserializeAws_restJson1_1Presets = (
  output: any,
  context: __SerdeContext
): Array<Preset> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Preset(entry, context)
  );
};

const deserializeAws_restJson1_1Thumbnails = (
  output: any,
  context: __SerdeContext
): Thumbnails => {
  let contents: any = {
    __type: "Thumbnails",
    AspectRatio: undefined,
    Format: undefined,
    Interval: undefined,
    MaxHeight: undefined,
    MaxWidth: undefined,
    PaddingPolicy: undefined,
    Resolution: undefined,
    SizingPolicy: undefined
  };
  if (output.AspectRatio !== undefined && output.AspectRatio !== null) {
    contents.AspectRatio = output.AspectRatio;
  }
  if (output.Format !== undefined && output.Format !== null) {
    contents.Format = output.Format;
  }
  if (output.Interval !== undefined && output.Interval !== null) {
    contents.Interval = output.Interval;
  }
  if (output.MaxHeight !== undefined && output.MaxHeight !== null) {
    contents.MaxHeight = output.MaxHeight;
  }
  if (output.MaxWidth !== undefined && output.MaxWidth !== null) {
    contents.MaxWidth = output.MaxWidth;
  }
  if (output.PaddingPolicy !== undefined && output.PaddingPolicy !== null) {
    contents.PaddingPolicy = output.PaddingPolicy;
  }
  if (output.Resolution !== undefined && output.Resolution !== null) {
    contents.Resolution = output.Resolution;
  }
  if (output.SizingPolicy !== undefined && output.SizingPolicy !== null) {
    contents.SizingPolicy = output.SizingPolicy;
  }
  return contents;
};

const deserializeAws_restJson1_1TimeSpan = (
  output: any,
  context: __SerdeContext
): TimeSpan => {
  let contents: any = {
    __type: "TimeSpan",
    Duration: undefined,
    StartTime: undefined
  };
  if (output.Duration !== undefined && output.Duration !== null) {
    contents.Duration = output.Duration;
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = output.StartTime;
  }
  return contents;
};

const deserializeAws_restJson1_1Timing = (
  output: any,
  context: __SerdeContext
): Timing => {
  let contents: any = {
    __type: "Timing",
    FinishTimeMillis: undefined,
    StartTimeMillis: undefined,
    SubmitTimeMillis: undefined
  };
  if (
    output.FinishTimeMillis !== undefined &&
    output.FinishTimeMillis !== null
  ) {
    contents.FinishTimeMillis = output.FinishTimeMillis;
  }
  if (output.StartTimeMillis !== undefined && output.StartTimeMillis !== null) {
    contents.StartTimeMillis = output.StartTimeMillis;
  }
  if (
    output.SubmitTimeMillis !== undefined &&
    output.SubmitTimeMillis !== null
  ) {
    contents.SubmitTimeMillis = output.SubmitTimeMillis;
  }
  return contents;
};

const deserializeAws_restJson1_1UserMetadata = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1VideoParameters = (
  output: any,
  context: __SerdeContext
): VideoParameters => {
  let contents: any = {
    __type: "VideoParameters",
    AspectRatio: undefined,
    BitRate: undefined,
    Codec: undefined,
    CodecOptions: undefined,
    DisplayAspectRatio: undefined,
    FixedGOP: undefined,
    FrameRate: undefined,
    KeyframesMaxDist: undefined,
    MaxFrameRate: undefined,
    MaxHeight: undefined,
    MaxWidth: undefined,
    PaddingPolicy: undefined,
    Resolution: undefined,
    SizingPolicy: undefined,
    Watermarks: undefined
  };
  if (output.AspectRatio !== undefined && output.AspectRatio !== null) {
    contents.AspectRatio = output.AspectRatio;
  }
  if (output.BitRate !== undefined && output.BitRate !== null) {
    contents.BitRate = output.BitRate;
  }
  if (output.Codec !== undefined && output.Codec !== null) {
    contents.Codec = output.Codec;
  }
  if (output.CodecOptions !== undefined && output.CodecOptions !== null) {
    contents.CodecOptions = deserializeAws_restJson1_1CodecOptions(
      output.CodecOptions,
      context
    );
  }
  if (
    output.DisplayAspectRatio !== undefined &&
    output.DisplayAspectRatio !== null
  ) {
    contents.DisplayAspectRatio = output.DisplayAspectRatio;
  }
  if (output.FixedGOP !== undefined && output.FixedGOP !== null) {
    contents.FixedGOP = output.FixedGOP;
  }
  if (output.FrameRate !== undefined && output.FrameRate !== null) {
    contents.FrameRate = output.FrameRate;
  }
  if (
    output.KeyframesMaxDist !== undefined &&
    output.KeyframesMaxDist !== null
  ) {
    contents.KeyframesMaxDist = output.KeyframesMaxDist;
  }
  if (output.MaxFrameRate !== undefined && output.MaxFrameRate !== null) {
    contents.MaxFrameRate = output.MaxFrameRate;
  }
  if (output.MaxHeight !== undefined && output.MaxHeight !== null) {
    contents.MaxHeight = output.MaxHeight;
  }
  if (output.MaxWidth !== undefined && output.MaxWidth !== null) {
    contents.MaxWidth = output.MaxWidth;
  }
  if (output.PaddingPolicy !== undefined && output.PaddingPolicy !== null) {
    contents.PaddingPolicy = output.PaddingPolicy;
  }
  if (output.Resolution !== undefined && output.Resolution !== null) {
    contents.Resolution = output.Resolution;
  }
  if (output.SizingPolicy !== undefined && output.SizingPolicy !== null) {
    contents.SizingPolicy = output.SizingPolicy;
  }
  if (output.Watermarks !== undefined && output.Watermarks !== null) {
    contents.Watermarks = deserializeAws_restJson1_1PresetWatermarks(
      output.Watermarks,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Warning = (
  output: any,
  context: __SerdeContext
): Warning => {
  let contents: any = {
    __type: "Warning",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1Warnings = (
  output: any,
  context: __SerdeContext
): Array<Warning> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Warning(entry, context)
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
