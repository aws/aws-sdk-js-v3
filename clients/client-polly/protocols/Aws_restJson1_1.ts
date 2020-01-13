import {
  DeleteLexiconCommandInput,
  DeleteLexiconCommandOutput
} from "../commands/DeleteLexiconCommand";
import {
  DescribeVoicesCommandInput,
  DescribeVoicesCommandOutput
} from "../commands/DescribeVoicesCommand";
import {
  GetLexiconCommandInput,
  GetLexiconCommandOutput
} from "../commands/GetLexiconCommand";
import {
  GetSpeechSynthesisTaskCommandInput,
  GetSpeechSynthesisTaskCommandOutput
} from "../commands/GetSpeechSynthesisTaskCommand";
import {
  ListLexiconsCommandInput,
  ListLexiconsCommandOutput
} from "../commands/ListLexiconsCommand";
import {
  ListSpeechSynthesisTasksCommandInput,
  ListSpeechSynthesisTasksCommandOutput
} from "../commands/ListSpeechSynthesisTasksCommand";
import {
  PutLexiconCommandInput,
  PutLexiconCommandOutput
} from "../commands/PutLexiconCommand";
import {
  StartSpeechSynthesisTaskCommandInput,
  StartSpeechSynthesisTaskCommandOutput
} from "../commands/StartSpeechSynthesisTaskCommand";
import {
  SynthesizeSpeechCommandInput,
  SynthesizeSpeechCommandOutput
} from "../commands/SynthesizeSpeechCommand";
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
  Voice
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

export async function serializeAws_restJson1_1DeleteLexiconCommand(
  input: DeleteLexiconCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/lexicons/{Name}";
  if (input.Name !== undefined) {
    const labelValue: any = input.Name.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeVoicesCommand(
  input: DescribeVoicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/voices";
  const query: any = {};
  if (input.Engine !== undefined) {
    query["Engine"] = input.Engine.toString();
  }
  if (input.IncludeAdditionalLanguageCodes !== undefined) {
    query[
      "IncludeAdditionalLanguageCodes"
    ] = input.IncludeAdditionalLanguageCodes.toString();
  }
  if (input.LanguageCode !== undefined) {
    query["LanguageCode"] = input.LanguageCode.toString();
  }
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken.toString();
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

export async function serializeAws_restJson1_1GetLexiconCommand(
  input: GetLexiconCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/lexicons/{Name}";
  if (input.Name !== undefined) {
    const labelValue: any = input.Name.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetSpeechSynthesisTaskCommand(
  input: GetSpeechSynthesisTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/synthesisTasks/{TaskId}";
  if (input.TaskId !== undefined) {
    const labelValue: any = input.TaskId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TaskId.");
    }
    resolvedPath = resolvedPath.replace("{TaskId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: TaskId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListLexiconsCommand(
  input: ListLexiconsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/lexicons";
  const query: any = {};
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken.toString();
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

export async function serializeAws_restJson1_1ListSpeechSynthesisTasksCommand(
  input: ListSpeechSynthesisTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/synthesisTasks";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["MaxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken.toString();
  }
  if (input.Status !== undefined) {
    query["Status"] = input.Status.toString();
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

export async function serializeAws_restJson1_1PutLexiconCommand(
  input: PutLexiconCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/lexicons/{Name}";
  if (input.Name !== undefined) {
    const labelValue: any = input.Name.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Content !== undefined) {
    bodyParams["Content"] = input.Content;
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

export async function serializeAws_restJson1_1StartSpeechSynthesisTaskCommand(
  input: StartSpeechSynthesisTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/synthesisTasks";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Engine !== undefined) {
    bodyParams["Engine"] = input.Engine;
  }
  if (input.LanguageCode !== undefined) {
    bodyParams["LanguageCode"] = input.LanguageCode;
  }
  if (input.LexiconNames !== undefined) {
    bodyParams["LexiconNames"] = serializeAws_restJson1_1LexiconNameList(
      input.LexiconNames,
      context
    );
  }
  if (input.OutputFormat !== undefined) {
    bodyParams["OutputFormat"] = input.OutputFormat;
  }
  if (input.OutputS3BucketName !== undefined) {
    bodyParams["OutputS3BucketName"] = input.OutputS3BucketName;
  }
  if (input.OutputS3KeyPrefix !== undefined) {
    bodyParams["OutputS3KeyPrefix"] = input.OutputS3KeyPrefix;
  }
  if (input.SampleRate !== undefined) {
    bodyParams["SampleRate"] = input.SampleRate;
  }
  if (input.SnsTopicArn !== undefined) {
    bodyParams["SnsTopicArn"] = input.SnsTopicArn;
  }
  if (input.SpeechMarkTypes !== undefined) {
    bodyParams["SpeechMarkTypes"] = serializeAws_restJson1_1SpeechMarkTypeList(
      input.SpeechMarkTypes,
      context
    );
  }
  if (input.Text !== undefined) {
    bodyParams["Text"] = input.Text;
  }
  if (input.TextType !== undefined) {
    bodyParams["TextType"] = input.TextType;
  }
  if (input.VoiceId !== undefined) {
    bodyParams["VoiceId"] = input.VoiceId;
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

export async function serializeAws_restJson1_1SynthesizeSpeechCommand(
  input: SynthesizeSpeechCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/speech";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Engine !== undefined) {
    bodyParams["Engine"] = input.Engine;
  }
  if (input.LanguageCode !== undefined) {
    bodyParams["LanguageCode"] = input.LanguageCode;
  }
  if (input.LexiconNames !== undefined) {
    bodyParams["LexiconNames"] = serializeAws_restJson1_1LexiconNameList(
      input.LexiconNames,
      context
    );
  }
  if (input.OutputFormat !== undefined) {
    bodyParams["OutputFormat"] = input.OutputFormat;
  }
  if (input.SampleRate !== undefined) {
    bodyParams["SampleRate"] = input.SampleRate;
  }
  if (input.SpeechMarkTypes !== undefined) {
    bodyParams["SpeechMarkTypes"] = serializeAws_restJson1_1SpeechMarkTypeList(
      input.SpeechMarkTypes,
      context
    );
  }
  if (input.Text !== undefined) {
    bodyParams["Text"] = input.Text;
  }
  if (input.TextType !== undefined) {
    bodyParams["TextType"] = input.TextType;
  }
  if (input.VoiceId !== undefined) {
    bodyParams["VoiceId"] = input.VoiceId;
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

export async function deserializeAws_restJson1_1DeleteLexiconCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLexiconCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteLexiconCommandError(output, context);
  }
  const contents: DeleteLexiconCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLexiconOutput"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteLexiconCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLexiconCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "LexiconNotFoundException":
    case "com.amazonaws.parrot.v1#LexiconNotFoundException":
      response = await deserializeAws_restJson1_1LexiconNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceFailureException":
    case "com.amazonaws.parrot.v1#ServiceFailureException":
      response = await deserializeAws_restJson1_1ServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.parrot.v1#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeVoicesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVoicesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeVoicesCommandError(
      output,
      context
    );
  }
  const contents: DescribeVoicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeVoicesOutput",
    NextToken: undefined,
    Voices: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.Voices !== undefined) {
    contents.Voices = deserializeAws_restJson1_1VoiceList(data.Voices, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeVoicesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVoicesCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.parrot.v1#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceFailureException":
    case "com.amazonaws.parrot.v1#ServiceFailureException":
      response = await deserializeAws_restJson1_1ServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.parrot.v1#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetLexiconCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLexiconCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetLexiconCommandError(output, context);
  }
  const contents: GetLexiconCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLexiconOutput",
    Lexicon: undefined,
    LexiconAttributes: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Lexicon !== undefined) {
    contents.Lexicon = deserializeAws_restJson1_1Lexicon(data.Lexicon, context);
  }
  if (data.LexiconAttributes !== undefined) {
    contents.LexiconAttributes = deserializeAws_restJson1_1LexiconAttributes(
      data.LexiconAttributes,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetLexiconCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLexiconCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "LexiconNotFoundException":
    case "com.amazonaws.parrot.v1#LexiconNotFoundException":
      response = await deserializeAws_restJson1_1LexiconNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceFailureException":
    case "com.amazonaws.parrot.v1#ServiceFailureException":
      response = await deserializeAws_restJson1_1ServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.parrot.v1#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetSpeechSynthesisTaskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSpeechSynthesisTaskCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetSpeechSynthesisTaskCommandError(
      output,
      context
    );
  }
  const contents: GetSpeechSynthesisTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSpeechSynthesisTaskOutput",
    SynthesisTask: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.SynthesisTask !== undefined) {
    contents.SynthesisTask = deserializeAws_restJson1_1SynthesisTask(
      data.SynthesisTask,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetSpeechSynthesisTaskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSpeechSynthesisTaskCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidTaskIdException":
    case "com.amazonaws.parrot.v1#InvalidTaskIdException":
      response = await deserializeAws_restJson1_1InvalidTaskIdExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceFailureException":
    case "com.amazonaws.parrot.v1#ServiceFailureException":
      response = await deserializeAws_restJson1_1ServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    case "SynthesisTaskNotFoundException":
    case "com.amazonaws.parrot.v1#SynthesisTaskNotFoundException":
      response = await deserializeAws_restJson1_1SynthesisTaskNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.parrot.v1#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListLexiconsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLexiconsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListLexiconsCommandError(output, context);
  }
  const contents: ListLexiconsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListLexiconsOutput",
    Lexicons: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Lexicons !== undefined) {
    contents.Lexicons = deserializeAws_restJson1_1LexiconDescriptionList(
      data.Lexicons,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListLexiconsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLexiconsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.parrot.v1#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceFailureException":
    case "com.amazonaws.parrot.v1#ServiceFailureException":
      response = await deserializeAws_restJson1_1ServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.parrot.v1#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListSpeechSynthesisTasksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSpeechSynthesisTasksCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListSpeechSynthesisTasksCommandError(
      output,
      context
    );
  }
  const contents: ListSpeechSynthesisTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSpeechSynthesisTasksOutput",
    NextToken: undefined,
    SynthesisTasks: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.SynthesisTasks !== undefined) {
    contents.SynthesisTasks = deserializeAws_restJson1_1SynthesisTasks(
      data.SynthesisTasks,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListSpeechSynthesisTasksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSpeechSynthesisTasksCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.parrot.v1#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceFailureException":
    case "com.amazonaws.parrot.v1#ServiceFailureException":
      response = await deserializeAws_restJson1_1ServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.parrot.v1#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1PutLexiconCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLexiconCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutLexiconCommandError(output, context);
  }
  const contents: PutLexiconCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutLexiconOutput"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutLexiconCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLexiconCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidLexiconException":
    case "com.amazonaws.parrot.v1#InvalidLexiconException":
      response = await deserializeAws_restJson1_1InvalidLexiconExceptionResponse(
        output,
        context
      );
      break;
    case "LexiconSizeExceededException":
    case "com.amazonaws.parrot.v1#LexiconSizeExceededException":
      response = await deserializeAws_restJson1_1LexiconSizeExceededExceptionResponse(
        output,
        context
      );
      break;
    case "MaxLexemeLengthExceededException":
    case "com.amazonaws.parrot.v1#MaxLexemeLengthExceededException":
      response = await deserializeAws_restJson1_1MaxLexemeLengthExceededExceptionResponse(
        output,
        context
      );
      break;
    case "MaxLexiconsNumberExceededException":
    case "com.amazonaws.parrot.v1#MaxLexiconsNumberExceededException":
      response = await deserializeAws_restJson1_1MaxLexiconsNumberExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceFailureException":
    case "com.amazonaws.parrot.v1#ServiceFailureException":
      response = await deserializeAws_restJson1_1ServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    case "UnsupportedPlsAlphabetException":
    case "com.amazonaws.parrot.v1#UnsupportedPlsAlphabetException":
      response = await deserializeAws_restJson1_1UnsupportedPlsAlphabetExceptionResponse(
        output,
        context
      );
      break;
    case "UnsupportedPlsLanguageException":
    case "com.amazonaws.parrot.v1#UnsupportedPlsLanguageException":
      response = await deserializeAws_restJson1_1UnsupportedPlsLanguageExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.parrot.v1#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1StartSpeechSynthesisTaskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSpeechSynthesisTaskCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartSpeechSynthesisTaskCommandError(
      output,
      context
    );
  }
  const contents: StartSpeechSynthesisTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartSpeechSynthesisTaskOutput",
    SynthesisTask: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.SynthesisTask !== undefined) {
    contents.SynthesisTask = deserializeAws_restJson1_1SynthesisTask(
      data.SynthesisTask,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartSpeechSynthesisTaskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSpeechSynthesisTaskCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EngineNotSupportedException":
    case "com.amazonaws.parrot.v1#EngineNotSupportedException":
      response = await deserializeAws_restJson1_1EngineNotSupportedExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidS3BucketException":
    case "com.amazonaws.parrot.v1#InvalidS3BucketException":
      response = await deserializeAws_restJson1_1InvalidS3BucketExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidS3KeyException":
    case "com.amazonaws.parrot.v1#InvalidS3KeyException":
      response = await deserializeAws_restJson1_1InvalidS3KeyExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidSampleRateException":
    case "com.amazonaws.parrot.v1#InvalidSampleRateException":
      response = await deserializeAws_restJson1_1InvalidSampleRateExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidSnsTopicArnException":
    case "com.amazonaws.parrot.v1#InvalidSnsTopicArnException":
      response = await deserializeAws_restJson1_1InvalidSnsTopicArnExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidSsmlException":
    case "com.amazonaws.parrot.v1#InvalidSsmlException":
      response = await deserializeAws_restJson1_1InvalidSsmlExceptionResponse(
        output,
        context
      );
      break;
    case "LanguageNotSupportedException":
    case "com.amazonaws.parrot.v1#LanguageNotSupportedException":
      response = await deserializeAws_restJson1_1LanguageNotSupportedExceptionResponse(
        output,
        context
      );
      break;
    case "LexiconNotFoundException":
    case "com.amazonaws.parrot.v1#LexiconNotFoundException":
      response = await deserializeAws_restJson1_1LexiconNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "MarksNotSupportedForFormatException":
    case "com.amazonaws.parrot.v1#MarksNotSupportedForFormatException":
      response = await deserializeAws_restJson1_1MarksNotSupportedForFormatExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceFailureException":
    case "com.amazonaws.parrot.v1#ServiceFailureException":
      response = await deserializeAws_restJson1_1ServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    case "SsmlMarksNotSupportedForTextTypeException":
    case "com.amazonaws.parrot.v1#SsmlMarksNotSupportedForTextTypeException":
      response = await deserializeAws_restJson1_1SsmlMarksNotSupportedForTextTypeExceptionResponse(
        output,
        context
      );
      break;
    case "TextLengthExceededException":
    case "com.amazonaws.parrot.v1#TextLengthExceededException":
      response = await deserializeAws_restJson1_1TextLengthExceededExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.parrot.v1#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1SynthesizeSpeechCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SynthesizeSpeechCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SynthesizeSpeechCommandError(
      output,
      context
    );
  }
  const contents: SynthesizeSpeechCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SynthesizeSpeechOutput",
    AudioStream: undefined,
    ContentType: undefined,
    RequestCharacters: undefined
  };
  if (output.headers["Content-Type"] !== undefined) {
    contents.ContentType = output.headers["Content-Type"];
  }
  if (output.headers["x-amzn-RequestCharacters"] !== undefined) {
    contents.RequestCharacters = parseInt(
      output.headers["x-amzn-RequestCharacters"],
      10
    );
  }
  const data: any = output.body;
  contents.AudioStream = data;
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1SynthesizeSpeechCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SynthesizeSpeechCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EngineNotSupportedException":
    case "com.amazonaws.parrot.v1#EngineNotSupportedException":
      response = await deserializeAws_restJson1_1EngineNotSupportedExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidSampleRateException":
    case "com.amazonaws.parrot.v1#InvalidSampleRateException":
      response = await deserializeAws_restJson1_1InvalidSampleRateExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidSsmlException":
    case "com.amazonaws.parrot.v1#InvalidSsmlException":
      response = await deserializeAws_restJson1_1InvalidSsmlExceptionResponse(
        output,
        context
      );
      break;
    case "LanguageNotSupportedException":
    case "com.amazonaws.parrot.v1#LanguageNotSupportedException":
      response = await deserializeAws_restJson1_1LanguageNotSupportedExceptionResponse(
        output,
        context
      );
      break;
    case "LexiconNotFoundException":
    case "com.amazonaws.parrot.v1#LexiconNotFoundException":
      response = await deserializeAws_restJson1_1LexiconNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "MarksNotSupportedForFormatException":
    case "com.amazonaws.parrot.v1#MarksNotSupportedForFormatException":
      response = await deserializeAws_restJson1_1MarksNotSupportedForFormatExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceFailureException":
    case "com.amazonaws.parrot.v1#ServiceFailureException":
      response = await deserializeAws_restJson1_1ServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    case "SsmlMarksNotSupportedForTextTypeException":
    case "com.amazonaws.parrot.v1#SsmlMarksNotSupportedForTextTypeException":
      response = await deserializeAws_restJson1_1SsmlMarksNotSupportedForTextTypeExceptionResponse(
        output,
        context
      );
      break;
    case "TextLengthExceededException":
    case "com.amazonaws.parrot.v1#TextLengthExceededException":
      response = await deserializeAws_restJson1_1TextLengthExceededExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.parrot.v1#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1EngineNotSupportedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<EngineNotSupportedException> => {
  const contents: EngineNotSupportedException = {
    __type: "EngineNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidLexiconExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidLexiconException> => {
  const contents: InvalidLexiconException = {
    __type: "InvalidLexiconException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidNextTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: InvalidNextTokenException = {
    __type: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidS3BucketExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidS3BucketException> => {
  const contents: InvalidS3BucketException = {
    __type: "InvalidS3BucketException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidS3KeyExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidS3KeyException> => {
  const contents: InvalidS3KeyException = {
    __type: "InvalidS3KeyException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidSampleRateExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidSampleRateException> => {
  const contents: InvalidSampleRateException = {
    __type: "InvalidSampleRateException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidSnsTopicArnExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidSnsTopicArnException> => {
  const contents: InvalidSnsTopicArnException = {
    __type: "InvalidSnsTopicArnException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidSsmlExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidSsmlException> => {
  const contents: InvalidSsmlException = {
    __type: "InvalidSsmlException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidTaskIdExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTaskIdException> => {
  const contents: InvalidTaskIdException = {
    __type: "InvalidTaskIdException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LanguageNotSupportedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LanguageNotSupportedException> => {
  const contents: LanguageNotSupportedException = {
    __type: "LanguageNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LexiconNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LexiconNotFoundException> => {
  const contents: LexiconNotFoundException = {
    __type: "LexiconNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LexiconSizeExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LexiconSizeExceededException> => {
  const contents: LexiconSizeExceededException = {
    __type: "LexiconSizeExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1MarksNotSupportedForFormatExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MarksNotSupportedForFormatException> => {
  const contents: MarksNotSupportedForFormatException = {
    __type: "MarksNotSupportedForFormatException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1MaxLexemeLengthExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MaxLexemeLengthExceededException> => {
  const contents: MaxLexemeLengthExceededException = {
    __type: "MaxLexemeLengthExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1MaxLexiconsNumberExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MaxLexiconsNumberExceededException> => {
  const contents: MaxLexiconsNumberExceededException = {
    __type: "MaxLexiconsNumberExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceFailureExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceFailureException> => {
  const contents: ServiceFailureException = {
    __type: "ServiceFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1SsmlMarksNotSupportedForTextTypeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SsmlMarksNotSupportedForTextTypeException> => {
  const contents: SsmlMarksNotSupportedForTextTypeException = {
    __type: "SsmlMarksNotSupportedForTextTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1SynthesisTaskNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SynthesisTaskNotFoundException> => {
  const contents: SynthesisTaskNotFoundException = {
    __type: "SynthesisTaskNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TextLengthExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TextLengthExceededException> => {
  const contents: TextLengthExceededException = {
    __type: "TextLengthExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnsupportedPlsAlphabetExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnsupportedPlsAlphabetException> => {
  const contents: UnsupportedPlsAlphabetException = {
    __type: "UnsupportedPlsAlphabetException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnsupportedPlsLanguageExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnsupportedPlsLanguageException> => {
  const contents: UnsupportedPlsLanguageException = {
    __type: "UnsupportedPlsLanguageException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1LexiconNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1SpeechMarkTypeList = (
  input: Array<SpeechMarkType | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const deserializeAws_restJson1_1EngineList = (
  output: any,
  context: __SerdeContext
): Array<Engine | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1LanguageCodeList = (
  output: any,
  context: __SerdeContext
): Array<LanguageCode | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Lexicon = (
  output: any,
  context: __SerdeContext
): Lexicon => {
  let contents: any = {
    __type: "Lexicon",
    Content: undefined,
    Name: undefined
  };
  if (output.Content !== undefined) {
    contents.Content = output.Content;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_restJson1_1LexiconAttributes = (
  output: any,
  context: __SerdeContext
): LexiconAttributes => {
  let contents: any = {
    __type: "LexiconAttributes",
    Alphabet: undefined,
    LanguageCode: undefined,
    LastModified: undefined,
    LexemesCount: undefined,
    LexiconArn: undefined,
    Size: undefined
  };
  if (output.Alphabet !== undefined) {
    contents.Alphabet = output.Alphabet;
  }
  if (output.LanguageCode !== undefined) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (output.LastModified !== undefined) {
    contents.LastModified = new Date(
      output.LastModified % 1 != 0
        ? Math.round(output.LastModified * 1000)
        : output.LastModified
    );
  }
  if (output.LexemesCount !== undefined) {
    contents.LexemesCount = output.LexemesCount;
  }
  if (output.LexiconArn !== undefined) {
    contents.LexiconArn = output.LexiconArn;
  }
  if (output.Size !== undefined) {
    contents.Size = output.Size;
  }
  return contents;
};

const deserializeAws_restJson1_1LexiconDescription = (
  output: any,
  context: __SerdeContext
): LexiconDescription => {
  let contents: any = {
    __type: "LexiconDescription",
    Attributes: undefined,
    Name: undefined
  };
  if (output.Attributes !== undefined) {
    contents.Attributes = deserializeAws_restJson1_1LexiconAttributes(
      output.Attributes,
      context
    );
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_restJson1_1LexiconDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<LexiconDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1LexiconDescription(entry, context)
  );
};

const deserializeAws_restJson1_1LexiconNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1SpeechMarkTypeList = (
  output: any,
  context: __SerdeContext
): Array<SpeechMarkType | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1SynthesisTask = (
  output: any,
  context: __SerdeContext
): SynthesisTask => {
  let contents: any = {
    __type: "SynthesisTask",
    CreationTime: undefined,
    Engine: undefined,
    LanguageCode: undefined,
    LexiconNames: undefined,
    OutputFormat: undefined,
    OutputUri: undefined,
    RequestCharacters: undefined,
    SampleRate: undefined,
    SnsTopicArn: undefined,
    SpeechMarkTypes: undefined,
    TaskId: undefined,
    TaskStatus: undefined,
    TaskStatusReason: undefined,
    TextType: undefined,
    VoiceId: undefined
  };
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.Engine !== undefined) {
    contents.Engine = output.Engine;
  }
  if (output.LanguageCode !== undefined) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (output.LexiconNames !== undefined) {
    contents.LexiconNames = deserializeAws_restJson1_1LexiconNameList(
      output.LexiconNames,
      context
    );
  }
  if (output.OutputFormat !== undefined) {
    contents.OutputFormat = output.OutputFormat;
  }
  if (output.OutputUri !== undefined) {
    contents.OutputUri = output.OutputUri;
  }
  if (output.RequestCharacters !== undefined) {
    contents.RequestCharacters = output.RequestCharacters;
  }
  if (output.SampleRate !== undefined) {
    contents.SampleRate = output.SampleRate;
  }
  if (output.SnsTopicArn !== undefined) {
    contents.SnsTopicArn = output.SnsTopicArn;
  }
  if (output.SpeechMarkTypes !== undefined) {
    contents.SpeechMarkTypes = deserializeAws_restJson1_1SpeechMarkTypeList(
      output.SpeechMarkTypes,
      context
    );
  }
  if (output.TaskId !== undefined) {
    contents.TaskId = output.TaskId;
  }
  if (output.TaskStatus !== undefined) {
    contents.TaskStatus = output.TaskStatus;
  }
  if (output.TaskStatusReason !== undefined) {
    contents.TaskStatusReason = output.TaskStatusReason;
  }
  if (output.TextType !== undefined) {
    contents.TextType = output.TextType;
  }
  if (output.VoiceId !== undefined) {
    contents.VoiceId = output.VoiceId;
  }
  return contents;
};

const deserializeAws_restJson1_1SynthesisTasks = (
  output: any,
  context: __SerdeContext
): Array<SynthesisTask> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SynthesisTask(entry, context)
  );
};

const deserializeAws_restJson1_1Voice = (
  output: any,
  context: __SerdeContext
): Voice => {
  let contents: any = {
    __type: "Voice",
    AdditionalLanguageCodes: undefined,
    Gender: undefined,
    Id: undefined,
    LanguageCode: undefined,
    LanguageName: undefined,
    Name: undefined,
    SupportedEngines: undefined
  };
  if (output.AdditionalLanguageCodes !== undefined) {
    contents.AdditionalLanguageCodes = deserializeAws_restJson1_1LanguageCodeList(
      output.AdditionalLanguageCodes,
      context
    );
  }
  if (output.Gender !== undefined) {
    contents.Gender = output.Gender;
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.LanguageCode !== undefined) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (output.LanguageName !== undefined) {
    contents.LanguageName = output.LanguageName;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.SupportedEngines !== undefined) {
    contents.SupportedEngines = deserializeAws_restJson1_1EngineList(
      output.SupportedEngines,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1VoiceList = (
  output: any,
  context: __SerdeContext
): Array<Voice> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Voice(entry, context)
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
