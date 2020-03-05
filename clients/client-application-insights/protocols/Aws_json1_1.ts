import {
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput
} from "../commands/CreateApplicationCommand";
import {
  CreateComponentCommandInput,
  CreateComponentCommandOutput
} from "../commands/CreateComponentCommand";
import {
  CreateLogPatternCommandInput,
  CreateLogPatternCommandOutput
} from "../commands/CreateLogPatternCommand";
import {
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput
} from "../commands/DeleteApplicationCommand";
import {
  DeleteComponentCommandInput,
  DeleteComponentCommandOutput
} from "../commands/DeleteComponentCommand";
import {
  DeleteLogPatternCommandInput,
  DeleteLogPatternCommandOutput
} from "../commands/DeleteLogPatternCommand";
import {
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput
} from "../commands/DescribeApplicationCommand";
import {
  DescribeComponentCommandInput,
  DescribeComponentCommandOutput
} from "../commands/DescribeComponentCommand";
import {
  DescribeComponentConfigurationCommandInput,
  DescribeComponentConfigurationCommandOutput
} from "../commands/DescribeComponentConfigurationCommand";
import {
  DescribeComponentConfigurationRecommendationCommandInput,
  DescribeComponentConfigurationRecommendationCommandOutput
} from "../commands/DescribeComponentConfigurationRecommendationCommand";
import {
  DescribeLogPatternCommandInput,
  DescribeLogPatternCommandOutput
} from "../commands/DescribeLogPatternCommand";
import {
  DescribeObservationCommandInput,
  DescribeObservationCommandOutput
} from "../commands/DescribeObservationCommand";
import {
  DescribeProblemCommandInput,
  DescribeProblemCommandOutput
} from "../commands/DescribeProblemCommand";
import {
  DescribeProblemObservationsCommandInput,
  DescribeProblemObservationsCommandOutput
} from "../commands/DescribeProblemObservationsCommand";
import {
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput
} from "../commands/ListApplicationsCommand";
import {
  ListComponentsCommandInput,
  ListComponentsCommandOutput
} from "../commands/ListComponentsCommand";
import {
  ListConfigurationHistoryCommandInput,
  ListConfigurationHistoryCommandOutput
} from "../commands/ListConfigurationHistoryCommand";
import {
  ListLogPatternSetsCommandInput,
  ListLogPatternSetsCommandOutput
} from "../commands/ListLogPatternSetsCommand";
import {
  ListLogPatternsCommandInput,
  ListLogPatternsCommandOutput
} from "../commands/ListLogPatternsCommand";
import {
  ListProblemsCommandInput,
  ListProblemsCommandOutput
} from "../commands/ListProblemsCommand";
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
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput
} from "../commands/UpdateApplicationCommand";
import {
  UpdateComponentCommandInput,
  UpdateComponentCommandOutput
} from "../commands/UpdateComponentCommand";
import {
  UpdateComponentConfigurationCommandInput,
  UpdateComponentConfigurationCommandOutput
} from "../commands/UpdateComponentConfigurationCommand";
import {
  UpdateLogPatternCommandInput,
  UpdateLogPatternCommandOutput
} from "../commands/UpdateLogPatternCommand";
import {
  ApplicationComponent,
  ApplicationInfo,
  BadRequestException,
  ConfigurationEvent,
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateComponentRequest,
  CreateComponentResponse,
  CreateLogPatternRequest,
  CreateLogPatternResponse,
  DeleteApplicationRequest,
  DeleteApplicationResponse,
  DeleteComponentRequest,
  DeleteComponentResponse,
  DeleteLogPatternRequest,
  DeleteLogPatternResponse,
  DescribeApplicationRequest,
  DescribeApplicationResponse,
  DescribeComponentConfigurationRecommendationRequest,
  DescribeComponentConfigurationRecommendationResponse,
  DescribeComponentConfigurationRequest,
  DescribeComponentConfigurationResponse,
  DescribeComponentRequest,
  DescribeComponentResponse,
  DescribeLogPatternRequest,
  DescribeLogPatternResponse,
  DescribeObservationRequest,
  DescribeObservationResponse,
  DescribeProblemObservationsRequest,
  DescribeProblemObservationsResponse,
  DescribeProblemRequest,
  DescribeProblemResponse,
  FeedbackValue,
  InternalServerException,
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListComponentsRequest,
  ListComponentsResponse,
  ListConfigurationHistoryRequest,
  ListConfigurationHistoryResponse,
  ListLogPatternSetsRequest,
  ListLogPatternSetsResponse,
  ListLogPatternsRequest,
  ListLogPatternsResponse,
  ListProblemsRequest,
  ListProblemsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  LogPattern,
  Observation,
  Problem,
  RelatedObservations,
  ResourceInUseException,
  ResourceNotFoundException,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TagsAlreadyExistException,
  TooManyTagsException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateApplicationRequest,
  UpdateApplicationResponse,
  UpdateComponentConfigurationRequest,
  UpdateComponentConfigurationResponse,
  UpdateComponentRequest,
  UpdateComponentResponse,
  UpdateLogPatternRequest,
  UpdateLogPatternResponse,
  ValidationException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1CreateApplicationCommand(
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.CreateApplication";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateApplicationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateComponentCommand(
  input: CreateComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.CreateComponent";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateComponentRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateLogPatternCommand(
  input: CreateLogPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.CreateLogPattern";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateLogPatternRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteApplicationCommand(
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.DeleteApplication";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteApplicationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteComponentCommand(
  input: DeleteComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.DeleteComponent";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteComponentRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteLogPatternCommand(
  input: DeleteLogPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.DeleteLogPattern";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteLogPatternRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeApplicationCommand(
  input: DescribeApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.DescribeApplication";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeApplicationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeComponentCommand(
  input: DescribeComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.DescribeComponent";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeComponentRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeComponentConfigurationCommand(
  input: DescribeComponentConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "EC2WindowsBarleyService.DescribeComponentConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeComponentConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeComponentConfigurationRecommendationCommand(
  input: DescribeComponentConfigurationRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeComponentConfigurationRecommendationRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeLogPatternCommand(
  input: DescribeLogPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.DescribeLogPattern";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeLogPatternRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeObservationCommand(
  input: DescribeObservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.DescribeObservation";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeObservationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeProblemCommand(
  input: DescribeProblemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.DescribeProblem";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeProblemRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeProblemObservationsCommand(
  input: DescribeProblemObservationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "EC2WindowsBarleyService.DescribeProblemObservations";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeProblemObservationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListApplicationsCommand(
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.ListApplications";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListApplicationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListComponentsCommand(
  input: ListComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.ListComponents";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListComponentsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListConfigurationHistoryCommand(
  input: ListConfigurationHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.ListConfigurationHistory";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListConfigurationHistoryRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListLogPatternSetsCommand(
  input: ListLogPatternSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.ListLogPatternSets";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListLogPatternSetsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListLogPatternsCommand(
  input: ListLogPatternsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.ListLogPatterns";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListLogPatternsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListProblemsCommand(
  input: ListProblemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.ListProblems";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListProblemsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.ListTagsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.TagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.UntagResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateApplicationCommand(
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.UpdateApplication";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateApplicationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateComponentCommand(
  input: UpdateComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.UpdateComponent";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateComponentRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateComponentConfigurationCommand(
  input: UpdateComponentConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "EC2WindowsBarleyService.UpdateComponentConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateComponentConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateLogPatternCommand(
  input: UpdateLogPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "EC2WindowsBarleyService.UpdateLogPattern";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateLogPatternRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1CreateApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateApplicationResponse(data, context);
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateApplicationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.ec2windowsbarley#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagsAlreadyExistException":
    case "com.amazonaws.ec2windowsbarley#TagsAlreadyExistException":
      response = {
        ...(await deserializeAws_json1_1TagsAlreadyExistExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1CreateComponentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateComponentResponse(data, context);
  const response: CreateComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateComponentResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateComponentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.ec2windowsbarley#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1CreateLogPatternCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogPatternCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateLogPatternCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLogPatternResponse(data, context);
  const response: CreateLogPatternCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLogPatternResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateLogPatternCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogPatternCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.ec2windowsbarley#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1DeleteApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationResponse(data, context);
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteApplicationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> {
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
    case "BadRequestException":
    case "com.amazonaws.ec2windowsbarley#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1DeleteComponentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteComponentResponse(data, context);
  const response: DeleteComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteComponentResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteComponentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1DeleteLogPatternCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogPatternCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteLogPatternCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLogPatternResponse(data, context);
  const response: DeleteLogPatternCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLogPatternResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteLogPatternCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogPatternCommandOutput> {
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
    case "BadRequestException":
    case "com.amazonaws.ec2windowsbarley#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1DescribeApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeApplicationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeApplicationResponse(data, context);
  const response: DescribeApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeApplicationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1DescribeComponentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeComponentResponse(data, context);
  const response: DescribeComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeComponentResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeComponentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1DescribeComponentConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentConfigurationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeComponentConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeComponentConfigurationResponse(
    data,
    context
  );
  const response: DescribeComponentConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeComponentConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeComponentConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentConfigurationCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentConfigurationRecommendationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeComponentConfigurationRecommendationResponse(
    data,
    context
  );
  const response: DescribeComponentConfigurationRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeComponentConfigurationRecommendationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentConfigurationRecommendationCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1DescribeLogPatternCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogPatternCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeLogPatternCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLogPatternResponse(data, context);
  const response: DescribeLogPatternCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLogPatternResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeLogPatternCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogPatternCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1DescribeObservationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObservationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeObservationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeObservationResponse(data, context);
  const response: DescribeObservationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeObservationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeObservationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObservationCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1DescribeProblemCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProblemCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeProblemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProblemResponse(data, context);
  const response: DescribeProblemCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeProblemResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeProblemCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProblemCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1DescribeProblemObservationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProblemObservationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeProblemObservationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProblemObservationsResponse(
    data,
    context
  );
  const response: DescribeProblemObservationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeProblemObservationsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeProblemObservationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProblemObservationsCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1ListApplicationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListApplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListApplicationsResponse(data, context);
  const response: ListApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListApplicationsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListApplicationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1ListComponentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListComponentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListComponentsResponse(data, context);
  const response: ListComponentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListComponentsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListComponentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1ListConfigurationHistoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationHistoryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListConfigurationHistoryCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListConfigurationHistoryResponse(
    data,
    context
  );
  const response: ListConfigurationHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListConfigurationHistoryResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListConfigurationHistoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationHistoryCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1ListLogPatternSetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogPatternSetsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListLogPatternSetsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLogPatternSetsResponse(data, context);
  const response: ListLogPatternSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListLogPatternSetsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListLogPatternSetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogPatternSetsCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1ListLogPatternsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogPatternsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListLogPatternsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLogPatternsResponse(data, context);
  const response: ListLogPatternsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListLogPatternsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListLogPatternsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogPatternsCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1ListProblemsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProblemsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListProblemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProblemsResponse(data, context);
  const response: ListProblemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListProblemsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListProblemsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProblemsCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.ec2windowsbarley#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1UpdateApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateApplicationResponse(data, context);
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateApplicationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1UpdateComponentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateComponentResponse(data, context);
  const response: UpdateComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateComponentResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateComponentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.ec2windowsbarley#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1UpdateComponentConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentConfigurationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateComponentConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateComponentConfigurationResponse(
    data,
    context
  );
  const response: UpdateComponentConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateComponentConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateComponentConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentConfigurationCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

export async function deserializeAws_json1_1UpdateLogPatternCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLogPatternCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateLogPatternCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateLogPatternResponse(data, context);
  const response: UpdateLogPatternCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateLogPatternResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateLogPatternCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLogPatternCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.ec2windowsbarley#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.ec2windowsbarley#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ec2windowsbarley#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.ec2windowsbarley#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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

const deserializeAws_json1_1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BadRequestException(
    body,
    context
  );
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(
    body,
    context
  );
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(
    body,
    context
  );
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TagsAlreadyExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagsAlreadyExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagsAlreadyExistException(
    body,
    context
  );
  const contents: TagsAlreadyExistException = {
    name: "TagsAlreadyExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(
    body,
    context
  );
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(
    body,
    context
  );
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1CreateApplicationRequest = (
  input: CreateApplicationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.OpsCenterEnabled !== undefined) {
    bodyParams["OpsCenterEnabled"] = input.OpsCenterEnabled;
  }
  if (input.OpsItemSNSTopicArn !== undefined) {
    bodyParams["OpsItemSNSTopicArn"] = input.OpsItemSNSTopicArn;
  }
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateComponentRequest = (
  input: CreateComponentRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ComponentName !== undefined) {
    bodyParams["ComponentName"] = input.ComponentName;
  }
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  if (input.ResourceList !== undefined) {
    bodyParams["ResourceList"] = serializeAws_json1_1ResourceList(
      input.ResourceList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateLogPatternRequest = (
  input: CreateLogPatternRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Pattern !== undefined) {
    bodyParams["Pattern"] = input.Pattern;
  }
  if (input.PatternName !== undefined) {
    bodyParams["PatternName"] = input.PatternName;
  }
  if (input.PatternSetName !== undefined) {
    bodyParams["PatternSetName"] = input.PatternSetName;
  }
  if (input.Rank !== undefined) {
    bodyParams["Rank"] = input.Rank;
  }
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteApplicationRequest = (
  input: DeleteApplicationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteComponentRequest = (
  input: DeleteComponentRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ComponentName !== undefined) {
    bodyParams["ComponentName"] = input.ComponentName;
  }
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteLogPatternRequest = (
  input: DeleteLogPatternRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PatternName !== undefined) {
    bodyParams["PatternName"] = input.PatternName;
  }
  if (input.PatternSetName !== undefined) {
    bodyParams["PatternSetName"] = input.PatternSetName;
  }
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeApplicationRequest = (
  input: DescribeApplicationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeComponentConfigurationRecommendationRequest = (
  input: DescribeComponentConfigurationRecommendationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ComponentName !== undefined) {
    bodyParams["ComponentName"] = input.ComponentName;
  }
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  if (input.Tier !== undefined) {
    bodyParams["Tier"] = input.Tier;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeComponentConfigurationRequest = (
  input: DescribeComponentConfigurationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ComponentName !== undefined) {
    bodyParams["ComponentName"] = input.ComponentName;
  }
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeComponentRequest = (
  input: DescribeComponentRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ComponentName !== undefined) {
    bodyParams["ComponentName"] = input.ComponentName;
  }
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeLogPatternRequest = (
  input: DescribeLogPatternRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PatternName !== undefined) {
    bodyParams["PatternName"] = input.PatternName;
  }
  if (input.PatternSetName !== undefined) {
    bodyParams["PatternSetName"] = input.PatternSetName;
  }
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeObservationRequest = (
  input: DescribeObservationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ObservationId !== undefined) {
    bodyParams["ObservationId"] = input.ObservationId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeProblemObservationsRequest = (
  input: DescribeProblemObservationsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ProblemId !== undefined) {
    bodyParams["ProblemId"] = input.ProblemId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeProblemRequest = (
  input: DescribeProblemRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ProblemId !== undefined) {
    bodyParams["ProblemId"] = input.ProblemId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListApplicationsRequest = (
  input: ListApplicationsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListComponentsRequest = (
  input: ListComponentsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1ListConfigurationHistoryRequest = (
  input: ListConfigurationHistoryRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EndTime !== undefined) {
    bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
  }
  if (input.EventStatus !== undefined) {
    bodyParams["EventStatus"] = input.EventStatus;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  if (input.StartTime !== undefined) {
    bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1ListLogPatternSetsRequest = (
  input: ListLogPatternSetsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1ListLogPatternsRequest = (
  input: ListLogPatternsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.PatternSetName !== undefined) {
    bodyParams["PatternSetName"] = input.PatternSetName;
  }
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1ListProblemsRequest = (
  input: ListProblemsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EndTime !== undefined) {
    bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  if (input.StartTime !== undefined) {
    bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  return bodyParams;
};

const serializeAws_json1_1ResourceList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateApplicationRequest = (
  input: UpdateApplicationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.OpsCenterEnabled !== undefined) {
    bodyParams["OpsCenterEnabled"] = input.OpsCenterEnabled;
  }
  if (input.OpsItemSNSTopicArn !== undefined) {
    bodyParams["OpsItemSNSTopicArn"] = input.OpsItemSNSTopicArn;
  }
  if (input.RemoveSNSTopic !== undefined) {
    bodyParams["RemoveSNSTopic"] = input.RemoveSNSTopic;
  }
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateComponentConfigurationRequest = (
  input: UpdateComponentConfigurationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ComponentConfiguration !== undefined) {
    bodyParams["ComponentConfiguration"] = input.ComponentConfiguration;
  }
  if (input.ComponentName !== undefined) {
    bodyParams["ComponentName"] = input.ComponentName;
  }
  if (input.Monitor !== undefined) {
    bodyParams["Monitor"] = input.Monitor;
  }
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  if (input.Tier !== undefined) {
    bodyParams["Tier"] = input.Tier;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateComponentRequest = (
  input: UpdateComponentRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ComponentName !== undefined) {
    bodyParams["ComponentName"] = input.ComponentName;
  }
  if (input.NewComponentName !== undefined) {
    bodyParams["NewComponentName"] = input.NewComponentName;
  }
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  if (input.ResourceList !== undefined) {
    bodyParams["ResourceList"] = serializeAws_json1_1ResourceList(
      input.ResourceList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateLogPatternRequest = (
  input: UpdateLogPatternRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Pattern !== undefined) {
    bodyParams["Pattern"] = input.Pattern;
  }
  if (input.PatternName !== undefined) {
    bodyParams["PatternName"] = input.PatternName;
  }
  if (input.PatternSetName !== undefined) {
    bodyParams["PatternSetName"] = input.PatternSetName;
  }
  if (input.Rank !== undefined) {
    bodyParams["Rank"] = input.Rank;
  }
  if (input.ResourceGroupName !== undefined) {
    bodyParams["ResourceGroupName"] = input.ResourceGroupName;
  }
  return bodyParams;
};

const deserializeAws_json1_1ApplicationComponent = (
  output: any,
  context: __SerdeContext
): ApplicationComponent => {
  let contents: any = {
    __type: "ApplicationComponent",
    ComponentName: undefined,
    Monitor: undefined,
    ResourceType: undefined,
    Tier: undefined
  };
  if (output.ComponentName !== undefined && output.ComponentName !== null) {
    contents.ComponentName = output.ComponentName;
  }
  if (output.Monitor !== undefined && output.Monitor !== null) {
    contents.Monitor = output.Monitor;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  if (output.Tier !== undefined && output.Tier !== null) {
    contents.Tier = output.Tier;
  }
  return contents;
};

const deserializeAws_json1_1ApplicationComponentList = (
  output: any,
  context: __SerdeContext
): Array<ApplicationComponent> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ApplicationComponent(entry, context)
  );
};

const deserializeAws_json1_1ApplicationInfo = (
  output: any,
  context: __SerdeContext
): ApplicationInfo => {
  let contents: any = {
    __type: "ApplicationInfo",
    LifeCycle: undefined,
    OpsCenterEnabled: undefined,
    OpsItemSNSTopicArn: undefined,
    Remarks: undefined,
    ResourceGroupName: undefined
  };
  if (output.LifeCycle !== undefined && output.LifeCycle !== null) {
    contents.LifeCycle = output.LifeCycle;
  }
  if (
    output.OpsCenterEnabled !== undefined &&
    output.OpsCenterEnabled !== null
  ) {
    contents.OpsCenterEnabled = output.OpsCenterEnabled;
  }
  if (
    output.OpsItemSNSTopicArn !== undefined &&
    output.OpsItemSNSTopicArn !== null
  ) {
    contents.OpsItemSNSTopicArn = output.OpsItemSNSTopicArn;
  }
  if (output.Remarks !== undefined && output.Remarks !== null) {
    contents.Remarks = output.Remarks;
  }
  if (
    output.ResourceGroupName !== undefined &&
    output.ResourceGroupName !== null
  ) {
    contents.ResourceGroupName = output.ResourceGroupName;
  }
  return contents;
};

const deserializeAws_json1_1ApplicationInfoList = (
  output: any,
  context: __SerdeContext
): Array<ApplicationInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ApplicationInfo(entry, context)
  );
};

const deserializeAws_json1_1BadRequestException = (
  output: any,
  context: __SerdeContext
): BadRequestException => {
  let contents: any = {
    __type: "BadRequestException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ConfigurationEvent = (
  output: any,
  context: __SerdeContext
): ConfigurationEvent => {
  let contents: any = {
    __type: "ConfigurationEvent",
    EventDetail: undefined,
    EventResourceName: undefined,
    EventResourceType: undefined,
    EventStatus: undefined,
    EventTime: undefined,
    MonitoredResourceARN: undefined
  };
  if (output.EventDetail !== undefined && output.EventDetail !== null) {
    contents.EventDetail = output.EventDetail;
  }
  if (
    output.EventResourceName !== undefined &&
    output.EventResourceName !== null
  ) {
    contents.EventResourceName = output.EventResourceName;
  }
  if (
    output.EventResourceType !== undefined &&
    output.EventResourceType !== null
  ) {
    contents.EventResourceType = output.EventResourceType;
  }
  if (output.EventStatus !== undefined && output.EventStatus !== null) {
    contents.EventStatus = output.EventStatus;
  }
  if (output.EventTime !== undefined && output.EventTime !== null) {
    contents.EventTime = new Date(Math.round(output.EventTime * 1000));
  }
  if (
    output.MonitoredResourceARN !== undefined &&
    output.MonitoredResourceARN !== null
  ) {
    contents.MonitoredResourceARN = output.MonitoredResourceARN;
  }
  return contents;
};

const deserializeAws_json1_1ConfigurationEventList = (
  output: any,
  context: __SerdeContext
): Array<ConfigurationEvent> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ConfigurationEvent(entry, context)
  );
};

const deserializeAws_json1_1CreateApplicationResponse = (
  output: any,
  context: __SerdeContext
): CreateApplicationResponse => {
  let contents: any = {
    __type: "CreateApplicationResponse",
    ApplicationInfo: undefined
  };
  if (output.ApplicationInfo !== undefined && output.ApplicationInfo !== null) {
    contents.ApplicationInfo = deserializeAws_json1_1ApplicationInfo(
      output.ApplicationInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateComponentResponse = (
  output: any,
  context: __SerdeContext
): CreateComponentResponse => {
  let contents: any = {
    __type: "CreateComponentResponse"
  };
  return contents;
};

const deserializeAws_json1_1CreateLogPatternResponse = (
  output: any,
  context: __SerdeContext
): CreateLogPatternResponse => {
  let contents: any = {
    __type: "CreateLogPatternResponse",
    LogPattern: undefined,
    ResourceGroupName: undefined
  };
  if (output.LogPattern !== undefined && output.LogPattern !== null) {
    contents.LogPattern = deserializeAws_json1_1LogPattern(
      output.LogPattern,
      context
    );
  }
  if (
    output.ResourceGroupName !== undefined &&
    output.ResourceGroupName !== null
  ) {
    contents.ResourceGroupName = output.ResourceGroupName;
  }
  return contents;
};

const deserializeAws_json1_1DeleteApplicationResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationResponse => {
  let contents: any = {
    __type: "DeleteApplicationResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteComponentResponse = (
  output: any,
  context: __SerdeContext
): DeleteComponentResponse => {
  let contents: any = {
    __type: "DeleteComponentResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteLogPatternResponse = (
  output: any,
  context: __SerdeContext
): DeleteLogPatternResponse => {
  let contents: any = {
    __type: "DeleteLogPatternResponse"
  };
  return contents;
};

const deserializeAws_json1_1DescribeApplicationResponse = (
  output: any,
  context: __SerdeContext
): DescribeApplicationResponse => {
  let contents: any = {
    __type: "DescribeApplicationResponse",
    ApplicationInfo: undefined
  };
  if (output.ApplicationInfo !== undefined && output.ApplicationInfo !== null) {
    contents.ApplicationInfo = deserializeAws_json1_1ApplicationInfo(
      output.ApplicationInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeComponentConfigurationRecommendationResponse = (
  output: any,
  context: __SerdeContext
): DescribeComponentConfigurationRecommendationResponse => {
  let contents: any = {
    __type: "DescribeComponentConfigurationRecommendationResponse",
    ComponentConfiguration: undefined
  };
  if (
    output.ComponentConfiguration !== undefined &&
    output.ComponentConfiguration !== null
  ) {
    contents.ComponentConfiguration = output.ComponentConfiguration;
  }
  return contents;
};

const deserializeAws_json1_1DescribeComponentConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeComponentConfigurationResponse => {
  let contents: any = {
    __type: "DescribeComponentConfigurationResponse",
    ComponentConfiguration: undefined,
    Monitor: undefined,
    Tier: undefined
  };
  if (
    output.ComponentConfiguration !== undefined &&
    output.ComponentConfiguration !== null
  ) {
    contents.ComponentConfiguration = output.ComponentConfiguration;
  }
  if (output.Monitor !== undefined && output.Monitor !== null) {
    contents.Monitor = output.Monitor;
  }
  if (output.Tier !== undefined && output.Tier !== null) {
    contents.Tier = output.Tier;
  }
  return contents;
};

const deserializeAws_json1_1DescribeComponentResponse = (
  output: any,
  context: __SerdeContext
): DescribeComponentResponse => {
  let contents: any = {
    __type: "DescribeComponentResponse",
    ApplicationComponent: undefined,
    ResourceList: undefined
  };
  if (
    output.ApplicationComponent !== undefined &&
    output.ApplicationComponent !== null
  ) {
    contents.ApplicationComponent = deserializeAws_json1_1ApplicationComponent(
      output.ApplicationComponent,
      context
    );
  }
  if (output.ResourceList !== undefined && output.ResourceList !== null) {
    contents.ResourceList = deserializeAws_json1_1ResourceList(
      output.ResourceList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeLogPatternResponse = (
  output: any,
  context: __SerdeContext
): DescribeLogPatternResponse => {
  let contents: any = {
    __type: "DescribeLogPatternResponse",
    LogPattern: undefined,
    ResourceGroupName: undefined
  };
  if (output.LogPattern !== undefined && output.LogPattern !== null) {
    contents.LogPattern = deserializeAws_json1_1LogPattern(
      output.LogPattern,
      context
    );
  }
  if (
    output.ResourceGroupName !== undefined &&
    output.ResourceGroupName !== null
  ) {
    contents.ResourceGroupName = output.ResourceGroupName;
  }
  return contents;
};

const deserializeAws_json1_1DescribeObservationResponse = (
  output: any,
  context: __SerdeContext
): DescribeObservationResponse => {
  let contents: any = {
    __type: "DescribeObservationResponse",
    Observation: undefined
  };
  if (output.Observation !== undefined && output.Observation !== null) {
    contents.Observation = deserializeAws_json1_1Observation(
      output.Observation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeProblemObservationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeProblemObservationsResponse => {
  let contents: any = {
    __type: "DescribeProblemObservationsResponse",
    RelatedObservations: undefined
  };
  if (
    output.RelatedObservations !== undefined &&
    output.RelatedObservations !== null
  ) {
    contents.RelatedObservations = deserializeAws_json1_1RelatedObservations(
      output.RelatedObservations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeProblemResponse = (
  output: any,
  context: __SerdeContext
): DescribeProblemResponse => {
  let contents: any = {
    __type: "DescribeProblemResponse",
    Problem: undefined
  };
  if (output.Problem !== undefined && output.Problem !== null) {
    contents.Problem = deserializeAws_json1_1Problem(output.Problem, context);
  }
  return contents;
};

const deserializeAws_json1_1Feedback = (
  output: any,
  context: __SerdeContext
): { [key: string]: FeedbackValue | string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  let contents: any = {
    __type: "InternalServerException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListApplicationsResponse = (
  output: any,
  context: __SerdeContext
): ListApplicationsResponse => {
  let contents: any = {
    __type: "ListApplicationsResponse",
    ApplicationInfoList: undefined,
    NextToken: undefined
  };
  if (
    output.ApplicationInfoList !== undefined &&
    output.ApplicationInfoList !== null
  ) {
    contents.ApplicationInfoList = deserializeAws_json1_1ApplicationInfoList(
      output.ApplicationInfoList,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListComponentsResponse = (
  output: any,
  context: __SerdeContext
): ListComponentsResponse => {
  let contents: any = {
    __type: "ListComponentsResponse",
    ApplicationComponentList: undefined,
    NextToken: undefined
  };
  if (
    output.ApplicationComponentList !== undefined &&
    output.ApplicationComponentList !== null
  ) {
    contents.ApplicationComponentList = deserializeAws_json1_1ApplicationComponentList(
      output.ApplicationComponentList,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListConfigurationHistoryResponse = (
  output: any,
  context: __SerdeContext
): ListConfigurationHistoryResponse => {
  let contents: any = {
    __type: "ListConfigurationHistoryResponse",
    EventList: undefined,
    NextToken: undefined
  };
  if (output.EventList !== undefined && output.EventList !== null) {
    contents.EventList = deserializeAws_json1_1ConfigurationEventList(
      output.EventList,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListLogPatternSetsResponse = (
  output: any,
  context: __SerdeContext
): ListLogPatternSetsResponse => {
  let contents: any = {
    __type: "ListLogPatternSetsResponse",
    LogPatternSets: undefined,
    NextToken: undefined,
    ResourceGroupName: undefined
  };
  if (output.LogPatternSets !== undefined && output.LogPatternSets !== null) {
    contents.LogPatternSets = deserializeAws_json1_1LogPatternSetList(
      output.LogPatternSets,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.ResourceGroupName !== undefined &&
    output.ResourceGroupName !== null
  ) {
    contents.ResourceGroupName = output.ResourceGroupName;
  }
  return contents;
};

const deserializeAws_json1_1ListLogPatternsResponse = (
  output: any,
  context: __SerdeContext
): ListLogPatternsResponse => {
  let contents: any = {
    __type: "ListLogPatternsResponse",
    LogPatterns: undefined,
    NextToken: undefined,
    ResourceGroupName: undefined
  };
  if (output.LogPatterns !== undefined && output.LogPatterns !== null) {
    contents.LogPatterns = deserializeAws_json1_1LogPatternList(
      output.LogPatterns,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.ResourceGroupName !== undefined &&
    output.ResourceGroupName !== null
  ) {
    contents.ResourceGroupName = output.ResourceGroupName;
  }
  return contents;
};

const deserializeAws_json1_1ListProblemsResponse = (
  output: any,
  context: __SerdeContext
): ListProblemsResponse => {
  let contents: any = {
    __type: "ListProblemsResponse",
    NextToken: undefined,
    ProblemList: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.ProblemList !== undefined && output.ProblemList !== null) {
    contents.ProblemList = deserializeAws_json1_1ProblemList(
      output.ProblemList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  let contents: any = {
    __type: "ListTagsForResourceResponse",
    Tags: undefined
  };
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1LogPattern = (
  output: any,
  context: __SerdeContext
): LogPattern => {
  let contents: any = {
    __type: "LogPattern",
    Pattern: undefined,
    PatternName: undefined,
    PatternSetName: undefined,
    Rank: undefined
  };
  if (output.Pattern !== undefined && output.Pattern !== null) {
    contents.Pattern = output.Pattern;
  }
  if (output.PatternName !== undefined && output.PatternName !== null) {
    contents.PatternName = output.PatternName;
  }
  if (output.PatternSetName !== undefined && output.PatternSetName !== null) {
    contents.PatternSetName = output.PatternSetName;
  }
  if (output.Rank !== undefined && output.Rank !== null) {
    contents.Rank = output.Rank;
  }
  return contents;
};

const deserializeAws_json1_1LogPatternList = (
  output: any,
  context: __SerdeContext
): Array<LogPattern> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LogPattern(entry, context)
  );
};

const deserializeAws_json1_1LogPatternSetList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Observation = (
  output: any,
  context: __SerdeContext
): Observation => {
  let contents: any = {
    __type: "Observation",
    EndTime: undefined,
    Id: undefined,
    LineTime: undefined,
    LogFilter: undefined,
    LogGroup: undefined,
    LogText: undefined,
    MetricName: undefined,
    MetricNamespace: undefined,
    SourceARN: undefined,
    SourceType: undefined,
    StartTime: undefined,
    Unit: undefined,
    Value: undefined
  };
  if (output.EndTime !== undefined && output.EndTime !== null) {
    contents.EndTime = new Date(Math.round(output.EndTime * 1000));
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.LineTime !== undefined && output.LineTime !== null) {
    contents.LineTime = new Date(Math.round(output.LineTime * 1000));
  }
  if (output.LogFilter !== undefined && output.LogFilter !== null) {
    contents.LogFilter = output.LogFilter;
  }
  if (output.LogGroup !== undefined && output.LogGroup !== null) {
    contents.LogGroup = output.LogGroup;
  }
  if (output.LogText !== undefined && output.LogText !== null) {
    contents.LogText = output.LogText;
  }
  if (output.MetricName !== undefined && output.MetricName !== null) {
    contents.MetricName = output.MetricName;
  }
  if (output.MetricNamespace !== undefined && output.MetricNamespace !== null) {
    contents.MetricNamespace = output.MetricNamespace;
  }
  if (output.SourceARN !== undefined && output.SourceARN !== null) {
    contents.SourceARN = output.SourceARN;
  }
  if (output.SourceType !== undefined && output.SourceType !== null) {
    contents.SourceType = output.SourceType;
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = new Date(Math.round(output.StartTime * 1000));
  }
  if (output.Unit !== undefined && output.Unit !== null) {
    contents.Unit = output.Unit;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1ObservationList = (
  output: any,
  context: __SerdeContext
): Array<Observation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Observation(entry, context)
  );
};

const deserializeAws_json1_1Problem = (
  output: any,
  context: __SerdeContext
): Problem => {
  let contents: any = {
    __type: "Problem",
    AffectedResource: undefined,
    EndTime: undefined,
    Feedback: undefined,
    Id: undefined,
    Insights: undefined,
    ResourceGroupName: undefined,
    SeverityLevel: undefined,
    StartTime: undefined,
    Status: undefined,
    Title: undefined
  };
  if (
    output.AffectedResource !== undefined &&
    output.AffectedResource !== null
  ) {
    contents.AffectedResource = output.AffectedResource;
  }
  if (output.EndTime !== undefined && output.EndTime !== null) {
    contents.EndTime = new Date(Math.round(output.EndTime * 1000));
  }
  if (output.Feedback !== undefined && output.Feedback !== null) {
    contents.Feedback = deserializeAws_json1_1Feedback(
      output.Feedback,
      context
    );
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Insights !== undefined && output.Insights !== null) {
    contents.Insights = output.Insights;
  }
  if (
    output.ResourceGroupName !== undefined &&
    output.ResourceGroupName !== null
  ) {
    contents.ResourceGroupName = output.ResourceGroupName;
  }
  if (output.SeverityLevel !== undefined && output.SeverityLevel !== null) {
    contents.SeverityLevel = output.SeverityLevel;
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = new Date(Math.round(output.StartTime * 1000));
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.Title !== undefined && output.Title !== null) {
    contents.Title = output.Title;
  }
  return contents;
};

const deserializeAws_json1_1ProblemList = (
  output: any,
  context: __SerdeContext
): Array<Problem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Problem(entry, context)
  );
};

const deserializeAws_json1_1RelatedObservations = (
  output: any,
  context: __SerdeContext
): RelatedObservations => {
  let contents: any = {
    __type: "RelatedObservations",
    ObservationList: undefined
  };
  if (output.ObservationList !== undefined && output.ObservationList !== null) {
    contents.ObservationList = deserializeAws_json1_1ObservationList(
      output.ObservationList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  let contents: any = {
    __type: "ResourceInUseException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Tag = (
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

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  let contents: any = {
    __type: "TagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1TagsAlreadyExistException = (
  output: any,
  context: __SerdeContext
): TagsAlreadyExistException => {
  let contents: any = {
    __type: "TagsAlreadyExistException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1TooManyTagsException = (
  output: any,
  context: __SerdeContext
): TooManyTagsException => {
  let contents: any = {
    __type: "TooManyTagsException",
    Message: undefined,
    ResourceName: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.ResourceName !== undefined && output.ResourceName !== null) {
    contents.ResourceName = output.ResourceName;
  }
  return contents;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  let contents: any = {
    __type: "UntagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateApplicationResponse = (
  output: any,
  context: __SerdeContext
): UpdateApplicationResponse => {
  let contents: any = {
    __type: "UpdateApplicationResponse",
    ApplicationInfo: undefined
  };
  if (output.ApplicationInfo !== undefined && output.ApplicationInfo !== null) {
    contents.ApplicationInfo = deserializeAws_json1_1ApplicationInfo(
      output.ApplicationInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateComponentConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateComponentConfigurationResponse => {
  let contents: any = {
    __type: "UpdateComponentConfigurationResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateComponentResponse = (
  output: any,
  context: __SerdeContext
): UpdateComponentResponse => {
  let contents: any = {
    __type: "UpdateComponentResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateLogPatternResponse = (
  output: any,
  context: __SerdeContext
): UpdateLogPatternResponse => {
  let contents: any = {
    __type: "UpdateLogPatternResponse",
    LogPattern: undefined,
    ResourceGroupName: undefined
  };
  if (output.LogPattern !== undefined && output.LogPattern !== null) {
    contents.LogPattern = deserializeAws_json1_1LogPattern(
      output.LogPattern,
      context
    );
  }
  if (
    output.ResourceGroupName !== undefined &&
    output.ResourceGroupName !== null
  ) {
    contents.ResourceGroupName = output.ResourceGroupName;
  }
  return contents;
};

const deserializeAws_json1_1ValidationException = (
  output: any,
  context: __SerdeContext
): ValidationException => {
  let contents: any = {
    __type: "ValidationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
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

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
