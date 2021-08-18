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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectInt as __expectInt,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  strictParseInt as __strictParseInt,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/voices";
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/lexicons";
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/synthesisTasks";
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
    ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/synthesisTasks";
  let body: any;
  body = JSON.stringify({
    ...(input.Engine !== undefined && input.Engine !== null && { Engine: input.Engine }),
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
    ...(input.LexiconNames !== undefined &&
      input.LexiconNames !== null && {
        LexiconNames: serializeAws_restJson1LexiconNameList(input.LexiconNames, context),
      }),
    ...(input.OutputFormat !== undefined && input.OutputFormat !== null && { OutputFormat: input.OutputFormat }),
    ...(input.OutputS3BucketName !== undefined &&
      input.OutputS3BucketName !== null && { OutputS3BucketName: input.OutputS3BucketName }),
    ...(input.OutputS3KeyPrefix !== undefined &&
      input.OutputS3KeyPrefix !== null && { OutputS3KeyPrefix: input.OutputS3KeyPrefix }),
    ...(input.SampleRate !== undefined && input.SampleRate !== null && { SampleRate: input.SampleRate }),
    ...(input.SnsTopicArn !== undefined && input.SnsTopicArn !== null && { SnsTopicArn: input.SnsTopicArn }),
    ...(input.SpeechMarkTypes !== undefined &&
      input.SpeechMarkTypes !== null && {
        SpeechMarkTypes: serializeAws_restJson1SpeechMarkTypeList(input.SpeechMarkTypes, context),
      }),
    ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
    ...(input.TextType !== undefined && input.TextType !== null && { TextType: input.TextType }),
    ...(input.VoiceId !== undefined && input.VoiceId !== null && { VoiceId: input.VoiceId }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/speech";
  let body: any;
  body = JSON.stringify({
    ...(input.Engine !== undefined && input.Engine !== null && { Engine: input.Engine }),
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
    ...(input.LexiconNames !== undefined &&
      input.LexiconNames !== null && {
        LexiconNames: serializeAws_restJson1LexiconNameList(input.LexiconNames, context),
      }),
    ...(input.OutputFormat !== undefined && input.OutputFormat !== null && { OutputFormat: input.OutputFormat }),
    ...(input.SampleRate !== undefined && input.SampleRate !== null && { SampleRate: input.SampleRate }),
    ...(input.SpeechMarkTypes !== undefined &&
      input.SpeechMarkTypes !== null && {
        SpeechMarkTypes: serializeAws_restJson1SpeechMarkTypeList(input.SpeechMarkTypes, context),
      }),
    ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
    ...(input.TextType !== undefined && input.TextType !== null && { TextType: input.TextType }),
    ...(input.VoiceId !== undefined && input.VoiceId !== null && { VoiceId: input.VoiceId }),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LexiconNotFoundException":
    case "com.amazonaws.polly#LexiconNotFoundException":
      response = {
        ...(await deserializeAws_restJson1LexiconNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.polly#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.polly#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.polly#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LexiconNotFoundException":
    case "com.amazonaws.polly#LexiconNotFoundException":
      response = {
        ...(await deserializeAws_restJson1LexiconNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.polly#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTaskIdException":
    case "com.amazonaws.polly#InvalidTaskIdException":
      response = {
        ...(await deserializeAws_restJson1InvalidTaskIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.polly#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SynthesisTaskNotFoundException":
    case "com.amazonaws.polly#SynthesisTaskNotFoundException":
      response = {
        ...(await deserializeAws_restJson1SynthesisTaskNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.polly#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.polly#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.polly#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.polly#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLexiconException":
    case "com.amazonaws.polly#InvalidLexiconException":
      response = {
        ...(await deserializeAws_restJson1InvalidLexiconExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LexiconSizeExceededException":
    case "com.amazonaws.polly#LexiconSizeExceededException":
      response = {
        ...(await deserializeAws_restJson1LexiconSizeExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaxLexemeLengthExceededException":
    case "com.amazonaws.polly#MaxLexemeLengthExceededException":
      response = {
        ...(await deserializeAws_restJson1MaxLexemeLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaxLexiconsNumberExceededException":
    case "com.amazonaws.polly#MaxLexiconsNumberExceededException":
      response = {
        ...(await deserializeAws_restJson1MaxLexiconsNumberExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.polly#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedPlsAlphabetException":
    case "com.amazonaws.polly#UnsupportedPlsAlphabetException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedPlsAlphabetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedPlsLanguageException":
    case "com.amazonaws.polly#UnsupportedPlsLanguageException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedPlsLanguageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EngineNotSupportedException":
    case "com.amazonaws.polly#EngineNotSupportedException":
      response = {
        ...(await deserializeAws_restJson1EngineNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3BucketException":
    case "com.amazonaws.polly#InvalidS3BucketException":
      response = {
        ...(await deserializeAws_restJson1InvalidS3BucketExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3KeyException":
    case "com.amazonaws.polly#InvalidS3KeyException":
      response = {
        ...(await deserializeAws_restJson1InvalidS3KeyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSampleRateException":
    case "com.amazonaws.polly#InvalidSampleRateException":
      response = {
        ...(await deserializeAws_restJson1InvalidSampleRateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSnsTopicArnException":
    case "com.amazonaws.polly#InvalidSnsTopicArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidSnsTopicArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSsmlException":
    case "com.amazonaws.polly#InvalidSsmlException":
      response = {
        ...(await deserializeAws_restJson1InvalidSsmlExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LanguageNotSupportedException":
    case "com.amazonaws.polly#LanguageNotSupportedException":
      response = {
        ...(await deserializeAws_restJson1LanguageNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LexiconNotFoundException":
    case "com.amazonaws.polly#LexiconNotFoundException":
      response = {
        ...(await deserializeAws_restJson1LexiconNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MarksNotSupportedForFormatException":
    case "com.amazonaws.polly#MarksNotSupportedForFormatException":
      response = {
        ...(await deserializeAws_restJson1MarksNotSupportedForFormatExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.polly#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SsmlMarksNotSupportedForTextTypeException":
    case "com.amazonaws.polly#SsmlMarksNotSupportedForTextTypeException":
      response = {
        ...(await deserializeAws_restJson1SsmlMarksNotSupportedForTextTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TextLengthExceededException":
    case "com.amazonaws.polly#TextLengthExceededException":
      response = {
        ...(await deserializeAws_restJson1TextLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    contents.RequestCharacters = __strictParseInt(output.headers["x-amzn-requestcharacters"]);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EngineNotSupportedException":
    case "com.amazonaws.polly#EngineNotSupportedException":
      response = {
        ...(await deserializeAws_restJson1EngineNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSampleRateException":
    case "com.amazonaws.polly#InvalidSampleRateException":
      response = {
        ...(await deserializeAws_restJson1InvalidSampleRateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSsmlException":
    case "com.amazonaws.polly#InvalidSsmlException":
      response = {
        ...(await deserializeAws_restJson1InvalidSsmlExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LanguageNotSupportedException":
    case "com.amazonaws.polly#LanguageNotSupportedException":
      response = {
        ...(await deserializeAws_restJson1LanguageNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LexiconNotFoundException":
    case "com.amazonaws.polly#LexiconNotFoundException":
      response = {
        ...(await deserializeAws_restJson1LexiconNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MarksNotSupportedForFormatException":
    case "com.amazonaws.polly#MarksNotSupportedForFormatException":
      response = {
        ...(await deserializeAws_restJson1MarksNotSupportedForFormatExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.polly#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SsmlMarksNotSupportedForTextTypeException":
    case "com.amazonaws.polly#SsmlMarksNotSupportedForTextTypeException":
      response = {
        ...(await deserializeAws_restJson1SsmlMarksNotSupportedForTextTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TextLengthExceededException":
    case "com.amazonaws.polly#TextLengthExceededException":
      response = {
        ...(await deserializeAws_restJson1TextLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1EngineNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EngineNotSupportedException> => {
  const contents: EngineNotSupportedException = {
    name: "EngineNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InvalidLexiconExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLexiconException> => {
  const contents: InvalidLexiconException = {
    name: "InvalidLexiconException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InvalidS3BucketExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3BucketException> => {
  const contents: InvalidS3BucketException = {
    name: "InvalidS3BucketException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InvalidS3KeyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3KeyException> => {
  const contents: InvalidS3KeyException = {
    name: "InvalidS3KeyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InvalidSampleRateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSampleRateException> => {
  const contents: InvalidSampleRateException = {
    name: "InvalidSampleRateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InvalidSnsTopicArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSnsTopicArnException> => {
  const contents: InvalidSnsTopicArnException = {
    name: "InvalidSnsTopicArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InvalidSsmlExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSsmlException> => {
  const contents: InvalidSsmlException = {
    name: "InvalidSsmlException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InvalidTaskIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTaskIdException> => {
  const contents: InvalidTaskIdException = {
    name: "InvalidTaskIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1LanguageNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LanguageNotSupportedException> => {
  const contents: LanguageNotSupportedException = {
    name: "LanguageNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1LexiconNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LexiconNotFoundException> => {
  const contents: LexiconNotFoundException = {
    name: "LexiconNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1LexiconSizeExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LexiconSizeExceededException> => {
  const contents: LexiconSizeExceededException = {
    name: "LexiconSizeExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1MarksNotSupportedForFormatExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MarksNotSupportedForFormatException> => {
  const contents: MarksNotSupportedForFormatException = {
    name: "MarksNotSupportedForFormatException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1MaxLexemeLengthExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxLexemeLengthExceededException> => {
  const contents: MaxLexemeLengthExceededException = {
    name: "MaxLexemeLengthExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1MaxLexiconsNumberExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxLexiconsNumberExceededException> => {
  const contents: MaxLexiconsNumberExceededException = {
    name: "MaxLexiconsNumberExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ServiceFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceFailureException> => {
  const contents: ServiceFailureException = {
    name: "ServiceFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1SsmlMarksNotSupportedForTextTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SsmlMarksNotSupportedForTextTypeException> => {
  const contents: SsmlMarksNotSupportedForTextTypeException = {
    name: "SsmlMarksNotSupportedForTextTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1SynthesisTaskNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SynthesisTaskNotFoundException> => {
  const contents: SynthesisTaskNotFoundException = {
    name: "SynthesisTaskNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1TextLengthExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TextLengthExceededException> => {
  const contents: TextLengthExceededException = {
    name: "TextLengthExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1UnsupportedPlsAlphabetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedPlsAlphabetException> => {
  const contents: UnsupportedPlsAlphabetException = {
    name: "UnsupportedPlsAlphabetException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1UnsupportedPlsLanguageExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedPlsLanguageException> => {
  const contents: UnsupportedPlsLanguageException = {
    name: "UnsupportedPlsLanguageException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1LanguageCodeList = (output: any, context: __SerdeContext): (LanguageCode | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
      output.LastModified !== undefined && output.LastModified !== null
        ? new Date(Math.round(output.LastModified * 1000))
        : undefined,
    LexemesCount: __expectInt(output.LexemesCount),
    LexiconArn: __expectString(output.LexiconArn),
    Size: __expectInt(output.Size),
  } as any;
};

const deserializeAws_restJson1LexiconDescription = (output: any, context: __SerdeContext): LexiconDescription => {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1LexiconAttributes(output.Attributes, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1LexiconDescriptionList = (output: any, context: __SerdeContext): LexiconDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LexiconDescription(entry, context);
    });
};

const deserializeAws_restJson1LexiconNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1SpeechMarkTypeList = (
  output: any,
  context: __SerdeContext
): (SpeechMarkType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1SynthesisTask = (output: any, context: __SerdeContext): SynthesisTask => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    Engine: __expectString(output.Engine),
    LanguageCode: __expectString(output.LanguageCode),
    LexiconNames:
      output.LexiconNames !== undefined && output.LexiconNames !== null
        ? deserializeAws_restJson1LexiconNameList(output.LexiconNames, context)
        : undefined,
    OutputFormat: __expectString(output.OutputFormat),
    OutputUri: __expectString(output.OutputUri),
    RequestCharacters: __expectInt(output.RequestCharacters),
    SampleRate: __expectString(output.SampleRate),
    SnsTopicArn: __expectString(output.SnsTopicArn),
    SpeechMarkTypes:
      output.SpeechMarkTypes !== undefined && output.SpeechMarkTypes !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SynthesisTask(entry, context);
    });
};

const deserializeAws_restJson1Voice = (output: any, context: __SerdeContext): Voice => {
  return {
    AdditionalLanguageCodes:
      output.AdditionalLanguageCodes !== undefined && output.AdditionalLanguageCodes !== null
        ? deserializeAws_restJson1LanguageCodeList(output.AdditionalLanguageCodes, context)
        : undefined,
    Gender: __expectString(output.Gender),
    Id: __expectString(output.Id),
    LanguageCode: __expectString(output.LanguageCode),
    LanguageName: __expectString(output.LanguageName),
    Name: __expectString(output.Name),
    SupportedEngines:
      output.SupportedEngines !== undefined && output.SupportedEngines !== null
        ? deserializeAws_restJson1EngineList(output.SupportedEngines, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VoiceList = (output: any, context: __SerdeContext): Voice[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Voice(entry, context);
    });
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
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
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

  return "";
};
