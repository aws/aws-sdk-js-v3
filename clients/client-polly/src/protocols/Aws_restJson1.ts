// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseEpochTimestamp as __parseEpochTimestamp,
  strictParseInt32 as __strictParseInt32,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DeleteLexiconCommandInput, DeleteLexiconCommandOutput } from "../commands/DeleteLexiconCommand";
import { DescribeVoicesCommandInput, DescribeVoicesCommandOutput } from "../commands/DescribeVoicesCommand";
import { GetLexiconCommandInput, GetLexiconCommandOutput } from "../commands/GetLexiconCommand";
import {
  GetSpeechSynthesisTaskCommandInput,
  GetSpeechSynthesisTaskCommandOutput,
} from "../commands/GetSpeechSynthesisTaskCommand";
import { ListLexiconsCommandInput, ListLexiconsCommandOutput } from "../commands/ListLexiconsCommand";
import {
  ListSpeechSynthesisTasksCommandInput,
  ListSpeechSynthesisTasksCommandOutput,
} from "../commands/ListSpeechSynthesisTasksCommand";
import { PutLexiconCommandInput, PutLexiconCommandOutput } from "../commands/PutLexiconCommand";
import {
  StartSpeechSynthesisTaskCommandInput,
  StartSpeechSynthesisTaskCommandOutput,
} from "../commands/StartSpeechSynthesisTaskCommand";
import { SynthesizeSpeechCommandInput, SynthesizeSpeechCommandOutput } from "../commands/SynthesizeSpeechCommand";
import {
  Engine,
  EngineNotSupportedException,
  InvalidLexiconException,
  InvalidNextTokenException,
  InvalidS3BucketException,
  InvalidS3KeyException,
  InvalidSampleRateException,
  InvalidSnsTopicArnException,
  InvalidSsmlException,
  InvalidTaskIdException,
  LanguageCode,
  LanguageNotSupportedException,
  Lexicon,
  LexiconAttributes,
  LexiconDescription,
  LexiconNotFoundException,
  LexiconSizeExceededException,
  MarksNotSupportedForFormatException,
  MaxLexemeLengthExceededException,
  MaxLexiconsNumberExceededException,
  ServiceFailureException,
  SpeechMarkType,
  SsmlMarksNotSupportedForTextTypeException,
  SynthesisTask,
  SynthesisTaskNotFoundException,
  TextLengthExceededException,
  UnsupportedPlsAlphabetException,
  UnsupportedPlsLanguageException,
  Voice,
} from "../models/models_0";
import { PollyServiceException as __BaseException } from "../models/PollyServiceException";

export const serializeAws_restJson1DeleteLexiconCommand = async (
  input: DeleteLexiconCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/lexicons/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeVoicesCommand = async (
  input: DescribeVoicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/voices";
  const query: any = {
    ...(input.Engine !== undefined && { Engine: input.Engine }),
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.IncludeAdditionalLanguageCodes !== undefined && {
      IncludeAdditionalLanguageCodes: input.IncludeAdditionalLanguageCodes.toString(),
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetLexiconCommand = async (
  input: GetLexiconCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/lexicons/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetSpeechSynthesisTaskCommand = async (
  input: GetSpeechSynthesisTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/synthesisTasks/{TaskId}";
  if (input.TaskId !== undefined) {
    const labelValue: string = input.TaskId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TaskId.");
    }
    resolvedPath = resolvedPath.replace("{TaskId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TaskId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListLexiconsCommand = async (
  input: ListLexiconsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/lexicons";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListSpeechSynthesisTasksCommand = async (
  input: ListSpeechSynthesisTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/synthesisTasks";
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.Status !== undefined && { Status: input.Status }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1PutLexiconCommand = async (
  input: PutLexiconCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/lexicons/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Content != null && { Content: input.Content }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StartSpeechSynthesisTaskCommand = async (
  input: StartSpeechSynthesisTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/synthesisTasks";
  let body: any;
  body = JSON.stringify({
    ...(input.Engine != null && { Engine: input.Engine }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.LexiconNames != null && {
      LexiconNames: serializeAws_restJson1LexiconNameList(input.LexiconNames, context),
    }),
    ...(input.OutputFormat != null && { OutputFormat: input.OutputFormat }),
    ...(input.OutputS3BucketName != null && { OutputS3BucketName: input.OutputS3BucketName }),
    ...(input.OutputS3KeyPrefix != null && { OutputS3KeyPrefix: input.OutputS3KeyPrefix }),
    ...(input.SampleRate != null && { SampleRate: input.SampleRate }),
    ...(input.SnsTopicArn != null && { SnsTopicArn: input.SnsTopicArn }),
    ...(input.SpeechMarkTypes != null && {
      SpeechMarkTypes: serializeAws_restJson1SpeechMarkTypeList(input.SpeechMarkTypes, context),
    }),
    ...(input.Text != null && { Text: input.Text }),
    ...(input.TextType != null && { TextType: input.TextType }),
    ...(input.VoiceId != null && { VoiceId: input.VoiceId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SynthesizeSpeechCommand = async (
  input: SynthesizeSpeechCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/speech";
  let body: any;
  body = JSON.stringify({
    ...(input.Engine != null && { Engine: input.Engine }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.LexiconNames != null && {
      LexiconNames: serializeAws_restJson1LexiconNameList(input.LexiconNames, context),
    }),
    ...(input.OutputFormat != null && { OutputFormat: input.OutputFormat }),
    ...(input.SampleRate != null && { SampleRate: input.SampleRate }),
    ...(input.SpeechMarkTypes != null && {
      SpeechMarkTypes: serializeAws_restJson1SpeechMarkTypeList(input.SpeechMarkTypes, context),
    }),
    ...(input.Text != null && { Text: input.Text }),
    ...(input.TextType != null && { TextType: input.TextType }),
    ...(input.VoiceId != null && { VoiceId: input.VoiceId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1DeleteLexiconCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLexiconCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteLexiconCommandError(output, context);
  }
  const contents: DeleteLexiconCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteLexiconCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLexiconCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LexiconNotFoundException":
    case "com.amazonaws.polly#LexiconNotFoundException":
      throw await deserializeAws_restJson1LexiconNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.polly#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeVoicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVoicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVoicesCommandError(output, context);
  }
  const contents: DescribeVoicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Voices: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Voices !== undefined && data.Voices !== null) {
    contents.Voices = deserializeAws_restJson1VoiceList(data.Voices, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeVoicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVoicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.polly#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.polly#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetLexiconCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLexiconCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLexiconCommandError(output, context);
  }
  const contents: GetLexiconCommandOutput = {
    $metadata: deserializeMetadata(output),
    Lexicon: undefined,
    LexiconAttributes: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Lexicon !== undefined && data.Lexicon !== null) {
    contents.Lexicon = deserializeAws_restJson1Lexicon(data.Lexicon, context);
  }
  if (data.LexiconAttributes !== undefined && data.LexiconAttributes !== null) {
    contents.LexiconAttributes = deserializeAws_restJson1LexiconAttributes(data.LexiconAttributes, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLexiconCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLexiconCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LexiconNotFoundException":
    case "com.amazonaws.polly#LexiconNotFoundException":
      throw await deserializeAws_restJson1LexiconNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.polly#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetSpeechSynthesisTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSpeechSynthesisTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSpeechSynthesisTaskCommandError(output, context);
  }
  const contents: GetSpeechSynthesisTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    SynthesisTask: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SynthesisTask !== undefined && data.SynthesisTask !== null) {
    contents.SynthesisTask = deserializeAws_restJson1SynthesisTask(data.SynthesisTask, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSpeechSynthesisTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSpeechSynthesisTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTaskIdException":
    case "com.amazonaws.polly#InvalidTaskIdException":
      throw await deserializeAws_restJson1InvalidTaskIdExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.polly#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "SynthesisTaskNotFoundException":
    case "com.amazonaws.polly#SynthesisTaskNotFoundException":
      throw await deserializeAws_restJson1SynthesisTaskNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListLexiconsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLexiconsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLexiconsCommandError(output, context);
  }
  const contents: ListLexiconsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Lexicons: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Lexicons !== undefined && data.Lexicons !== null) {
    contents.Lexicons = deserializeAws_restJson1LexiconDescriptionList(data.Lexicons, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListLexiconsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLexiconsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.polly#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.polly#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListSpeechSynthesisTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSpeechSynthesisTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSpeechSynthesisTasksCommandError(output, context);
  }
  const contents: ListSpeechSynthesisTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    SynthesisTasks: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SynthesisTasks !== undefined && data.SynthesisTasks !== null) {
    contents.SynthesisTasks = deserializeAws_restJson1SynthesisTasks(data.SynthesisTasks, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSpeechSynthesisTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSpeechSynthesisTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.polly#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.polly#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1PutLexiconCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLexiconCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutLexiconCommandError(output, context);
  }
  const contents: PutLexiconCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutLexiconCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLexiconCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLexiconException":
    case "com.amazonaws.polly#InvalidLexiconException":
      throw await deserializeAws_restJson1InvalidLexiconExceptionResponse(parsedOutput, context);
    case "LexiconSizeExceededException":
    case "com.amazonaws.polly#LexiconSizeExceededException":
      throw await deserializeAws_restJson1LexiconSizeExceededExceptionResponse(parsedOutput, context);
    case "MaxLexemeLengthExceededException":
    case "com.amazonaws.polly#MaxLexemeLengthExceededException":
      throw await deserializeAws_restJson1MaxLexemeLengthExceededExceptionResponse(parsedOutput, context);
    case "MaxLexiconsNumberExceededException":
    case "com.amazonaws.polly#MaxLexiconsNumberExceededException":
      throw await deserializeAws_restJson1MaxLexiconsNumberExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.polly#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "UnsupportedPlsAlphabetException":
    case "com.amazonaws.polly#UnsupportedPlsAlphabetException":
      throw await deserializeAws_restJson1UnsupportedPlsAlphabetExceptionResponse(parsedOutput, context);
    case "UnsupportedPlsLanguageException":
    case "com.amazonaws.polly#UnsupportedPlsLanguageException":
      throw await deserializeAws_restJson1UnsupportedPlsLanguageExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartSpeechSynthesisTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSpeechSynthesisTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartSpeechSynthesisTaskCommandError(output, context);
  }
  const contents: StartSpeechSynthesisTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    SynthesisTask: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SynthesisTask !== undefined && data.SynthesisTask !== null) {
    contents.SynthesisTask = deserializeAws_restJson1SynthesisTask(data.SynthesisTask, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartSpeechSynthesisTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSpeechSynthesisTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EngineNotSupportedException":
    case "com.amazonaws.polly#EngineNotSupportedException":
      throw await deserializeAws_restJson1EngineNotSupportedExceptionResponse(parsedOutput, context);
    case "InvalidS3BucketException":
    case "com.amazonaws.polly#InvalidS3BucketException":
      throw await deserializeAws_restJson1InvalidS3BucketExceptionResponse(parsedOutput, context);
    case "InvalidS3KeyException":
    case "com.amazonaws.polly#InvalidS3KeyException":
      throw await deserializeAws_restJson1InvalidS3KeyExceptionResponse(parsedOutput, context);
    case "InvalidSampleRateException":
    case "com.amazonaws.polly#InvalidSampleRateException":
      throw await deserializeAws_restJson1InvalidSampleRateExceptionResponse(parsedOutput, context);
    case "InvalidSnsTopicArnException":
    case "com.amazonaws.polly#InvalidSnsTopicArnException":
      throw await deserializeAws_restJson1InvalidSnsTopicArnExceptionResponse(parsedOutput, context);
    case "InvalidSsmlException":
    case "com.amazonaws.polly#InvalidSsmlException":
      throw await deserializeAws_restJson1InvalidSsmlExceptionResponse(parsedOutput, context);
    case "LanguageNotSupportedException":
    case "com.amazonaws.polly#LanguageNotSupportedException":
      throw await deserializeAws_restJson1LanguageNotSupportedExceptionResponse(parsedOutput, context);
    case "LexiconNotFoundException":
    case "com.amazonaws.polly#LexiconNotFoundException":
      throw await deserializeAws_restJson1LexiconNotFoundExceptionResponse(parsedOutput, context);
    case "MarksNotSupportedForFormatException":
    case "com.amazonaws.polly#MarksNotSupportedForFormatException":
      throw await deserializeAws_restJson1MarksNotSupportedForFormatExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.polly#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "SsmlMarksNotSupportedForTextTypeException":
    case "com.amazonaws.polly#SsmlMarksNotSupportedForTextTypeException":
      throw await deserializeAws_restJson1SsmlMarksNotSupportedForTextTypeExceptionResponse(parsedOutput, context);
    case "TextLengthExceededException":
    case "com.amazonaws.polly#TextLengthExceededException":
      throw await deserializeAws_restJson1TextLengthExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1SynthesizeSpeechCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SynthesizeSpeechCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SynthesizeSpeechCommandError(output, context);
  }
  const contents: SynthesizeSpeechCommandOutput = {
    $metadata: deserializeMetadata(output),
    AudioStream: undefined,
    ContentType: undefined,
    RequestCharacters: undefined,
  };
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  if (output.headers["x-amzn-requestcharacters"] !== undefined) {
    contents.RequestCharacters = __strictParseInt32(output.headers["x-amzn-requestcharacters"]);
  }
  const data: any = output.body;
  contents.AudioStream = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SynthesizeSpeechCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SynthesizeSpeechCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EngineNotSupportedException":
    case "com.amazonaws.polly#EngineNotSupportedException":
      throw await deserializeAws_restJson1EngineNotSupportedExceptionResponse(parsedOutput, context);
    case "InvalidSampleRateException":
    case "com.amazonaws.polly#InvalidSampleRateException":
      throw await deserializeAws_restJson1InvalidSampleRateExceptionResponse(parsedOutput, context);
    case "InvalidSsmlException":
    case "com.amazonaws.polly#InvalidSsmlException":
      throw await deserializeAws_restJson1InvalidSsmlExceptionResponse(parsedOutput, context);
    case "LanguageNotSupportedException":
    case "com.amazonaws.polly#LanguageNotSupportedException":
      throw await deserializeAws_restJson1LanguageNotSupportedExceptionResponse(parsedOutput, context);
    case "LexiconNotFoundException":
    case "com.amazonaws.polly#LexiconNotFoundException":
      throw await deserializeAws_restJson1LexiconNotFoundExceptionResponse(parsedOutput, context);
    case "MarksNotSupportedForFormatException":
    case "com.amazonaws.polly#MarksNotSupportedForFormatException":
      throw await deserializeAws_restJson1MarksNotSupportedForFormatExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.polly#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "SsmlMarksNotSupportedForTextTypeException":
    case "com.amazonaws.polly#SsmlMarksNotSupportedForTextTypeException":
      throw await deserializeAws_restJson1SsmlMarksNotSupportedForTextTypeExceptionResponse(parsedOutput, context);
    case "TextLengthExceededException":
    case "com.amazonaws.polly#TextLengthExceededException":
      throw await deserializeAws_restJson1TextLengthExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1EngineNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EngineNotSupportedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new EngineNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidLexiconExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLexiconException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidLexiconException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidS3BucketExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3BucketException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidS3BucketException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidS3KeyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3KeyException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidS3KeyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidSampleRateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSampleRateException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidSampleRateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidSnsTopicArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSnsTopicArnException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidSnsTopicArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidSsmlExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSsmlException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidSsmlException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidTaskIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTaskIdException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidTaskIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1LanguageNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LanguageNotSupportedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new LanguageNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1LexiconNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LexiconNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new LexiconNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1LexiconSizeExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LexiconSizeExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new LexiconSizeExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1MarksNotSupportedForFormatExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MarksNotSupportedForFormatException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new MarksNotSupportedForFormatException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1MaxLexemeLengthExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxLexemeLengthExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new MaxLexemeLengthExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1MaxLexiconsNumberExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxLexiconsNumberExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new MaxLexiconsNumberExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceFailureException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1SsmlMarksNotSupportedForTextTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SsmlMarksNotSupportedForTextTypeException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new SsmlMarksNotSupportedForTextTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1SynthesisTaskNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SynthesisTaskNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new SynthesisTaskNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TextLengthExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TextLengthExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new TextLengthExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnsupportedPlsAlphabetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedPlsAlphabetException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new UnsupportedPlsAlphabetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnsupportedPlsLanguageExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedPlsLanguageException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new UnsupportedPlsLanguageException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1LexiconNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SpeechMarkTypeList = (input: (SpeechMarkType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1EngineList = (output: any, context: __SerdeContext): (Engine | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1LanguageCodeList = (output: any, context: __SerdeContext): (LanguageCode | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1Lexicon = (output: any, context: __SerdeContext): Lexicon => {
  return {
    Content: __expectString(output.Content),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1LexiconAttributes = (output: any, context: __SerdeContext): LexiconAttributes => {
  return {
    Alphabet: __expectString(output.Alphabet),
    LanguageCode: __expectString(output.LanguageCode),
    LastModified:
      output.LastModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModified)))
        : undefined,
    LexemesCount: __expectInt32(output.LexemesCount),
    LexiconArn: __expectString(output.LexiconArn),
    Size: __expectInt32(output.Size),
  } as any;
};

const deserializeAws_restJson1LexiconDescription = (output: any, context: __SerdeContext): LexiconDescription => {
  return {
    Attributes:
      output.Attributes != null ? deserializeAws_restJson1LexiconAttributes(output.Attributes, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1LexiconDescriptionList = (output: any, context: __SerdeContext): LexiconDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LexiconDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LexiconNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1SpeechMarkTypeList = (
  output: any,
  context: __SerdeContext
): (SpeechMarkType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1SynthesisTask = (output: any, context: __SerdeContext): SynthesisTask => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Engine: __expectString(output.Engine),
    LanguageCode: __expectString(output.LanguageCode),
    LexiconNames:
      output.LexiconNames != null ? deserializeAws_restJson1LexiconNameList(output.LexiconNames, context) : undefined,
    OutputFormat: __expectString(output.OutputFormat),
    OutputUri: __expectString(output.OutputUri),
    RequestCharacters: __expectInt32(output.RequestCharacters),
    SampleRate: __expectString(output.SampleRate),
    SnsTopicArn: __expectString(output.SnsTopicArn),
    SpeechMarkTypes:
      output.SpeechMarkTypes != null
        ? deserializeAws_restJson1SpeechMarkTypeList(output.SpeechMarkTypes, context)
        : undefined,
    TaskId: __expectString(output.TaskId),
    TaskStatus: __expectString(output.TaskStatus),
    TaskStatusReason: __expectString(output.TaskStatusReason),
    TextType: __expectString(output.TextType),
    VoiceId: __expectString(output.VoiceId),
  } as any;
};

const deserializeAws_restJson1SynthesisTasks = (output: any, context: __SerdeContext): SynthesisTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SynthesisTask(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Voice = (output: any, context: __SerdeContext): Voice => {
  return {
    AdditionalLanguageCodes:
      output.AdditionalLanguageCodes != null
        ? deserializeAws_restJson1LanguageCodeList(output.AdditionalLanguageCodes, context)
        : undefined,
    Gender: __expectString(output.Gender),
    Id: __expectString(output.Id),
    LanguageCode: __expectString(output.LanguageCode),
    LanguageName: __expectString(output.LanguageName),
    Name: __expectString(output.Name),
    SupportedEngines:
      output.SupportedEngines != null
        ? deserializeAws_restJson1EngineList(output.SupportedEngines, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VoiceList = (output: any, context: __SerdeContext): Voice[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Voice(entry, context);
    });
  return retVal;
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

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
};
