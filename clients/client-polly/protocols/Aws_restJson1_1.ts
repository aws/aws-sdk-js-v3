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

export async function serializeAws_restJson1_1DeleteLexiconCommand(
  input: DeleteLexiconCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/lexicons/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    body: body
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
    query["Engine"] = input.Engine;
  }
  if (input.IncludeAdditionalLanguageCodes !== undefined) {
    query[
      "IncludeAdditionalLanguageCodes"
    ] = input.IncludeAdditionalLanguageCodes.toString();
  }
  if (input.LanguageCode !== undefined) {
    query["LanguageCode"] = input.LanguageCode;
  }
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken;
  }
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body
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
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    body: body
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
    const labelValue: string = input.TaskId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TaskId.");
    }
    resolvedPath = resolvedPath.replace(
      "{TaskId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: TaskId.");
  }
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    body: body
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
    query["NextToken"] = input.NextToken;
  }
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body
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
    query["NextToken"] = input.NextToken;
  }
  if (input.Status !== undefined) {
    query["Status"] = input.Status;
  }
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body
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
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
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
  let body: any;
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
  let body: any;
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
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteLexiconCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLexiconCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LexiconNotFoundException":
    case "com.amazonaws.parrot.v1#LexiconNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1LexiconNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.parrot.v1#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceFailureExceptionResponse(
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
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Voices !== undefined && data.Voices !== null) {
    contents.Voices = deserializeAws_restJson1_1VoiceList(data.Voices, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeVoicesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVoicesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.parrot.v1#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.parrot.v1#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceFailureExceptionResponse(
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
  if (data.Lexicon !== undefined && data.Lexicon !== null) {
    contents.Lexicon = deserializeAws_restJson1_1Lexicon(data.Lexicon, context);
  }
  if (data.LexiconAttributes !== undefined && data.LexiconAttributes !== null) {
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
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LexiconNotFoundException":
    case "com.amazonaws.parrot.v1#LexiconNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1LexiconNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.parrot.v1#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceFailureExceptionResponse(
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
  if (data.SynthesisTask !== undefined && data.SynthesisTask !== null) {
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
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTaskIdException":
    case "com.amazonaws.parrot.v1#InvalidTaskIdException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidTaskIdExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.parrot.v1#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SynthesisTaskNotFoundException":
    case "com.amazonaws.parrot.v1#SynthesisTaskNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1SynthesisTaskNotFoundExceptionResponse(
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
  if (data.Lexicons !== undefined && data.Lexicons !== null) {
    contents.Lexicons = deserializeAws_restJson1_1LexiconDescriptionList(
      data.Lexicons,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListLexiconsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLexiconsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.parrot.v1#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.parrot.v1#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceFailureExceptionResponse(
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
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.SynthesisTasks !== undefined && data.SynthesisTasks !== null) {
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
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.parrot.v1#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.parrot.v1#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceFailureExceptionResponse(
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
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutLexiconCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLexiconCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLexiconException":
    case "com.amazonaws.parrot.v1#InvalidLexiconException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidLexiconExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LexiconSizeExceededException":
    case "com.amazonaws.parrot.v1#LexiconSizeExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LexiconSizeExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MaxLexemeLengthExceededException":
    case "com.amazonaws.parrot.v1#MaxLexemeLengthExceededException":
      response = {
        ...(await deserializeAws_restJson1_1MaxLexemeLengthExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MaxLexiconsNumberExceededException":
    case "com.amazonaws.parrot.v1#MaxLexiconsNumberExceededException":
      response = {
        ...(await deserializeAws_restJson1_1MaxLexiconsNumberExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.parrot.v1#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedPlsAlphabetException":
    case "com.amazonaws.parrot.v1#UnsupportedPlsAlphabetException":
      response = {
        ...(await deserializeAws_restJson1_1UnsupportedPlsAlphabetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedPlsLanguageException":
    case "com.amazonaws.parrot.v1#UnsupportedPlsLanguageException":
      response = {
        ...(await deserializeAws_restJson1_1UnsupportedPlsLanguageExceptionResponse(
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
  if (data.SynthesisTask !== undefined && data.SynthesisTask !== null) {
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
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EngineNotSupportedException":
    case "com.amazonaws.parrot.v1#EngineNotSupportedException":
      response = {
        ...(await deserializeAws_restJson1_1EngineNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3BucketException":
    case "com.amazonaws.parrot.v1#InvalidS3BucketException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidS3BucketExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3KeyException":
    case "com.amazonaws.parrot.v1#InvalidS3KeyException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidS3KeyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSampleRateException":
    case "com.amazonaws.parrot.v1#InvalidSampleRateException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidSampleRateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSnsTopicArnException":
    case "com.amazonaws.parrot.v1#InvalidSnsTopicArnException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidSnsTopicArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSsmlException":
    case "com.amazonaws.parrot.v1#InvalidSsmlException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidSsmlExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LanguageNotSupportedException":
    case "com.amazonaws.parrot.v1#LanguageNotSupportedException":
      response = {
        ...(await deserializeAws_restJson1_1LanguageNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LexiconNotFoundException":
    case "com.amazonaws.parrot.v1#LexiconNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1LexiconNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MarksNotSupportedForFormatException":
    case "com.amazonaws.parrot.v1#MarksNotSupportedForFormatException":
      response = {
        ...(await deserializeAws_restJson1_1MarksNotSupportedForFormatExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.parrot.v1#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SsmlMarksNotSupportedForTextTypeException":
    case "com.amazonaws.parrot.v1#SsmlMarksNotSupportedForTextTypeException":
      response = {
        ...(await deserializeAws_restJson1_1SsmlMarksNotSupportedForTextTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TextLengthExceededException":
    case "com.amazonaws.parrot.v1#TextLengthExceededException":
      response = {
        ...(await deserializeAws_restJson1_1TextLengthExceededExceptionResponse(
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
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  if (output.headers["x-amzn-requestcharacters"] !== undefined) {
    contents.RequestCharacters = parseInt(
      output.headers["x-amzn-requestcharacters"],
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
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EngineNotSupportedException":
    case "com.amazonaws.parrot.v1#EngineNotSupportedException":
      response = {
        ...(await deserializeAws_restJson1_1EngineNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSampleRateException":
    case "com.amazonaws.parrot.v1#InvalidSampleRateException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidSampleRateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSsmlException":
    case "com.amazonaws.parrot.v1#InvalidSsmlException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidSsmlExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LanguageNotSupportedException":
    case "com.amazonaws.parrot.v1#LanguageNotSupportedException":
      response = {
        ...(await deserializeAws_restJson1_1LanguageNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LexiconNotFoundException":
    case "com.amazonaws.parrot.v1#LexiconNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1LexiconNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MarksNotSupportedForFormatException":
    case "com.amazonaws.parrot.v1#MarksNotSupportedForFormatException":
      response = {
        ...(await deserializeAws_restJson1_1MarksNotSupportedForFormatExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.parrot.v1#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SsmlMarksNotSupportedForTextTypeException":
    case "com.amazonaws.parrot.v1#SsmlMarksNotSupportedForTextTypeException":
      response = {
        ...(await deserializeAws_restJson1_1SsmlMarksNotSupportedForTextTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TextLengthExceededException":
    case "com.amazonaws.parrot.v1#TextLengthExceededException":
      response = {
        ...(await deserializeAws_restJson1_1TextLengthExceededExceptionResponse(
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
}

const deserializeAws_restJson1_1EngineNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EngineNotSupportedException> => {
  const contents: EngineNotSupportedException = {
    name: "EngineNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidLexiconExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLexiconException> => {
  const contents: InvalidLexiconException = {
    name: "InvalidLexiconException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidS3BucketExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3BucketException> => {
  const contents: InvalidS3BucketException = {
    name: "InvalidS3BucketException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidS3KeyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3KeyException> => {
  const contents: InvalidS3KeyException = {
    name: "InvalidS3KeyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidSampleRateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSampleRateException> => {
  const contents: InvalidSampleRateException = {
    name: "InvalidSampleRateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidSnsTopicArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSnsTopicArnException> => {
  const contents: InvalidSnsTopicArnException = {
    name: "InvalidSnsTopicArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidSsmlExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSsmlException> => {
  const contents: InvalidSsmlException = {
    name: "InvalidSsmlException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidTaskIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTaskIdException> => {
  const contents: InvalidTaskIdException = {
    name: "InvalidTaskIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LanguageNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LanguageNotSupportedException> => {
  const contents: LanguageNotSupportedException = {
    name: "LanguageNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LexiconNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LexiconNotFoundException> => {
  const contents: LexiconNotFoundException = {
    name: "LexiconNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LexiconSizeExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LexiconSizeExceededException> => {
  const contents: LexiconSizeExceededException = {
    name: "LexiconSizeExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1MarksNotSupportedForFormatExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MarksNotSupportedForFormatException> => {
  const contents: MarksNotSupportedForFormatException = {
    name: "MarksNotSupportedForFormatException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1MaxLexemeLengthExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxLexemeLengthExceededException> => {
  const contents: MaxLexemeLengthExceededException = {
    name: "MaxLexemeLengthExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1MaxLexiconsNumberExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxLexiconsNumberExceededException> => {
  const contents: MaxLexiconsNumberExceededException = {
    name: "MaxLexiconsNumberExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceFailureException> => {
  const contents: ServiceFailureException = {
    name: "ServiceFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1SsmlMarksNotSupportedForTextTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SsmlMarksNotSupportedForTextTypeException> => {
  const contents: SsmlMarksNotSupportedForTextTypeException = {
    name: "SsmlMarksNotSupportedForTextTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1SynthesisTaskNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SynthesisTaskNotFoundException> => {
  const contents: SynthesisTaskNotFoundException = {
    name: "SynthesisTaskNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TextLengthExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TextLengthExceededException> => {
  const contents: TextLengthExceededException = {
    name: "TextLengthExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnsupportedPlsAlphabetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedPlsAlphabetException> => {
  const contents: UnsupportedPlsAlphabetException = {
    name: "UnsupportedPlsAlphabetException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnsupportedPlsLanguageExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedPlsLanguageException> => {
  const contents: UnsupportedPlsLanguageException = {
    name: "UnsupportedPlsLanguageException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1LexiconNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SpeechMarkTypeList = (
  input: Array<SpeechMarkType | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
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
  if (output.Content !== undefined && output.Content !== null) {
    contents.Content = output.Content;
  }
  if (output.Name !== undefined && output.Name !== null) {
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
  if (output.Alphabet !== undefined && output.Alphabet !== null) {
    contents.Alphabet = output.Alphabet;
  }
  if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (output.LastModified !== undefined && output.LastModified !== null) {
    contents.LastModified = new Date(Math.round(output.LastModified * 1000));
  }
  if (output.LexemesCount !== undefined && output.LexemesCount !== null) {
    contents.LexemesCount = output.LexemesCount;
  }
  if (output.LexiconArn !== undefined && output.LexiconArn !== null) {
    contents.LexiconArn = output.LexiconArn;
  }
  if (output.Size !== undefined && output.Size !== null) {
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
  if (output.Attributes !== undefined && output.Attributes !== null) {
    contents.Attributes = deserializeAws_restJson1_1LexiconAttributes(
      output.Attributes,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
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
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.Engine !== undefined && output.Engine !== null) {
    contents.Engine = output.Engine;
  }
  if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (output.LexiconNames !== undefined && output.LexiconNames !== null) {
    contents.LexiconNames = deserializeAws_restJson1_1LexiconNameList(
      output.LexiconNames,
      context
    );
  }
  if (output.OutputFormat !== undefined && output.OutputFormat !== null) {
    contents.OutputFormat = output.OutputFormat;
  }
  if (output.OutputUri !== undefined && output.OutputUri !== null) {
    contents.OutputUri = output.OutputUri;
  }
  if (
    output.RequestCharacters !== undefined &&
    output.RequestCharacters !== null
  ) {
    contents.RequestCharacters = output.RequestCharacters;
  }
  if (output.SampleRate !== undefined && output.SampleRate !== null) {
    contents.SampleRate = output.SampleRate;
  }
  if (output.SnsTopicArn !== undefined && output.SnsTopicArn !== null) {
    contents.SnsTopicArn = output.SnsTopicArn;
  }
  if (output.SpeechMarkTypes !== undefined && output.SpeechMarkTypes !== null) {
    contents.SpeechMarkTypes = deserializeAws_restJson1_1SpeechMarkTypeList(
      output.SpeechMarkTypes,
      context
    );
  }
  if (output.TaskId !== undefined && output.TaskId !== null) {
    contents.TaskId = output.TaskId;
  }
  if (output.TaskStatus !== undefined && output.TaskStatus !== null) {
    contents.TaskStatus = output.TaskStatus;
  }
  if (
    output.TaskStatusReason !== undefined &&
    output.TaskStatusReason !== null
  ) {
    contents.TaskStatusReason = output.TaskStatusReason;
  }
  if (output.TextType !== undefined && output.TextType !== null) {
    contents.TextType = output.TextType;
  }
  if (output.VoiceId !== undefined && output.VoiceId !== null) {
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
  if (
    output.AdditionalLanguageCodes !== undefined &&
    output.AdditionalLanguageCodes !== null
  ) {
    contents.AdditionalLanguageCodes = deserializeAws_restJson1_1LanguageCodeList(
      output.AdditionalLanguageCodes,
      context
    );
  }
  if (output.Gender !== undefined && output.Gender !== null) {
    contents.Gender = output.Gender;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (output.LanguageName !== undefined && output.LanguageName !== null) {
    contents.LanguageName = output.LanguageName;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (
    output.SupportedEngines !== undefined &&
    output.SupportedEngines !== null
  ) {
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
