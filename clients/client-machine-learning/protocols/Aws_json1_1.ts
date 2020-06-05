import {
  AddTagsCommandInput,
  AddTagsCommandOutput
} from "../commands/AddTagsCommand";
import {
  CreateBatchPredictionCommandInput,
  CreateBatchPredictionCommandOutput
} from "../commands/CreateBatchPredictionCommand";
import {
  CreateDataSourceFromRDSCommandInput,
  CreateDataSourceFromRDSCommandOutput
} from "../commands/CreateDataSourceFromRDSCommand";
import {
  CreateDataSourceFromRedshiftCommandInput,
  CreateDataSourceFromRedshiftCommandOutput
} from "../commands/CreateDataSourceFromRedshiftCommand";
import {
  CreateDataSourceFromS3CommandInput,
  CreateDataSourceFromS3CommandOutput
} from "../commands/CreateDataSourceFromS3Command";
import {
  CreateEvaluationCommandInput,
  CreateEvaluationCommandOutput
} from "../commands/CreateEvaluationCommand";
import {
  CreateMLModelCommandInput,
  CreateMLModelCommandOutput
} from "../commands/CreateMLModelCommand";
import {
  CreateRealtimeEndpointCommandInput,
  CreateRealtimeEndpointCommandOutput
} from "../commands/CreateRealtimeEndpointCommand";
import {
  DeleteBatchPredictionCommandInput,
  DeleteBatchPredictionCommandOutput
} from "../commands/DeleteBatchPredictionCommand";
import {
  DeleteDataSourceCommandInput,
  DeleteDataSourceCommandOutput
} from "../commands/DeleteDataSourceCommand";
import {
  DeleteEvaluationCommandInput,
  DeleteEvaluationCommandOutput
} from "../commands/DeleteEvaluationCommand";
import {
  DeleteMLModelCommandInput,
  DeleteMLModelCommandOutput
} from "../commands/DeleteMLModelCommand";
import {
  DeleteRealtimeEndpointCommandInput,
  DeleteRealtimeEndpointCommandOutput
} from "../commands/DeleteRealtimeEndpointCommand";
import {
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput
} from "../commands/DeleteTagsCommand";
import {
  DescribeBatchPredictionsCommandInput,
  DescribeBatchPredictionsCommandOutput
} from "../commands/DescribeBatchPredictionsCommand";
import {
  DescribeDataSourcesCommandInput,
  DescribeDataSourcesCommandOutput
} from "../commands/DescribeDataSourcesCommand";
import {
  DescribeEvaluationsCommandInput,
  DescribeEvaluationsCommandOutput
} from "../commands/DescribeEvaluationsCommand";
import {
  DescribeMLModelsCommandInput,
  DescribeMLModelsCommandOutput
} from "../commands/DescribeMLModelsCommand";
import {
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput
} from "../commands/DescribeTagsCommand";
import {
  GetBatchPredictionCommandInput,
  GetBatchPredictionCommandOutput
} from "../commands/GetBatchPredictionCommand";
import {
  GetDataSourceCommandInput,
  GetDataSourceCommandOutput
} from "../commands/GetDataSourceCommand";
import {
  GetEvaluationCommandInput,
  GetEvaluationCommandOutput
} from "../commands/GetEvaluationCommand";
import {
  GetMLModelCommandInput,
  GetMLModelCommandOutput
} from "../commands/GetMLModelCommand";
import {
  PredictCommandInput,
  PredictCommandOutput
} from "../commands/PredictCommand";
import {
  UpdateBatchPredictionCommandInput,
  UpdateBatchPredictionCommandOutput
} from "../commands/UpdateBatchPredictionCommand";
import {
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput
} from "../commands/UpdateDataSourceCommand";
import {
  UpdateEvaluationCommandInput,
  UpdateEvaluationCommandOutput
} from "../commands/UpdateEvaluationCommand";
import {
  UpdateMLModelCommandInput,
  UpdateMLModelCommandOutput
} from "../commands/UpdateMLModelCommand";
import {
  AddTagsInput,
  AddTagsOutput,
  BatchPrediction,
  CreateBatchPredictionInput,
  CreateBatchPredictionOutput,
  CreateDataSourceFromRDSInput,
  CreateDataSourceFromRDSOutput,
  CreateDataSourceFromRedshiftInput,
  CreateDataSourceFromRedshiftOutput,
  CreateDataSourceFromS3Input,
  CreateDataSourceFromS3Output,
  CreateEvaluationInput,
  CreateEvaluationOutput,
  CreateMLModelInput,
  CreateMLModelOutput,
  CreateRealtimeEndpointInput,
  CreateRealtimeEndpointOutput,
  DataSource,
  DeleteBatchPredictionInput,
  DeleteBatchPredictionOutput,
  DeleteDataSourceInput,
  DeleteDataSourceOutput,
  DeleteEvaluationInput,
  DeleteEvaluationOutput,
  DeleteMLModelInput,
  DeleteMLModelOutput,
  DeleteRealtimeEndpointInput,
  DeleteRealtimeEndpointOutput,
  DeleteTagsInput,
  DeleteTagsOutput,
  DescribeBatchPredictionsInput,
  DescribeBatchPredictionsOutput,
  DescribeDataSourcesInput,
  DescribeDataSourcesOutput,
  DescribeEvaluationsInput,
  DescribeEvaluationsOutput,
  DescribeMLModelsInput,
  DescribeMLModelsOutput,
  DescribeTagsInput,
  DescribeTagsOutput,
  DetailsAttributes,
  Evaluation,
  GetBatchPredictionInput,
  GetBatchPredictionOutput,
  GetDataSourceInput,
  GetDataSourceOutput,
  GetEvaluationInput,
  GetEvaluationOutput,
  GetMLModelInput,
  GetMLModelOutput,
  IdempotentParameterMismatchException,
  InternalServerException,
  InvalidInputException,
  InvalidTagException,
  LimitExceededException,
  MLModel,
  PerformanceMetrics,
  PredictInput,
  PredictOutput,
  Prediction,
  PredictorNotMountedException,
  RDSDataSpec,
  RDSDatabase,
  RDSDatabaseCredentials,
  RDSMetadata,
  RealtimeEndpointInfo,
  RedshiftDataSpec,
  RedshiftDatabase,
  RedshiftDatabaseCredentials,
  RedshiftMetadata,
  ResourceNotFoundException,
  S3DataSpec,
  Tag,
  TagLimitExceededException,
  UpdateBatchPredictionInput,
  UpdateBatchPredictionOutput,
  UpdateDataSourceInput,
  UpdateDataSourceOutput,
  UpdateEvaluationInput,
  UpdateEvaluationOutput,
  UpdateMLModelInput,
  UpdateMLModelOutput
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

export const serializeAws_json1_1AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.AddTags"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateBatchPredictionCommand = async (
  input: CreateBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.CreateBatchPrediction"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateBatchPredictionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDataSourceFromRDSCommand = async (
  input: CreateDataSourceFromRDSCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.CreateDataSourceFromRDS"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDataSourceFromRDSInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDataSourceFromRedshiftCommand = async (
  input: CreateDataSourceFromRedshiftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.CreateDataSourceFromRedshift"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDataSourceFromRedshiftInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDataSourceFromS3Command = async (
  input: CreateDataSourceFromS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.CreateDataSourceFromS3"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDataSourceFromS3Input(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateEvaluationCommand = async (
  input: CreateEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.CreateEvaluation"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateEvaluationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateMLModelCommand = async (
  input: CreateMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.CreateMLModel"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateMLModelInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRealtimeEndpointCommand = async (
  input: CreateRealtimeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.CreateRealtimeEndpoint"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateRealtimeEndpointInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBatchPredictionCommand = async (
  input: DeleteBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.DeleteBatchPrediction"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteBatchPredictionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDataSourceCommand = async (
  input: DeleteDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.DeleteDataSource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDataSourceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEvaluationCommand = async (
  input: DeleteEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.DeleteEvaluation"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteEvaluationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMLModelCommand = async (
  input: DeleteMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.DeleteMLModel"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteMLModelInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRealtimeEndpointCommand = async (
  input: DeleteRealtimeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.DeleteRealtimeEndpoint"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteRealtimeEndpointInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.DeleteTags"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBatchPredictionsCommand = async (
  input: DescribeBatchPredictionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.DescribeBatchPredictions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeBatchPredictionsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDataSourcesCommand = async (
  input: DescribeDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.DescribeDataSources"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDataSourcesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEvaluationsCommand = async (
  input: DescribeEvaluationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.DescribeEvaluations"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEvaluationsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMLModelsCommand = async (
  input: DescribeMLModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.DescribeMLModels"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeMLModelsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.DescribeTags"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBatchPredictionCommand = async (
  input: GetBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.GetBatchPrediction"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetBatchPredictionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDataSourceCommand = async (
  input: GetDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.GetDataSource"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDataSourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetEvaluationCommand = async (
  input: GetEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.GetEvaluation"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetEvaluationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMLModelCommand = async (
  input: GetMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.GetMLModel"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMLModelInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PredictCommand = async (
  input: PredictCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.Predict"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PredictInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateBatchPredictionCommand = async (
  input: UpdateBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.UpdateBatchPrediction"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateBatchPredictionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDataSourceCommand = async (
  input: UpdateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.UpdateDataSource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDataSourceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateEvaluationCommand = async (
  input: UpdateEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.UpdateEvaluation"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateEvaluationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateMLModelCommand = async (
  input: UpdateMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonML_20141212.UpdateMLModel"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateMLModelInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddTagsOutput(data, context);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddTagsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.machinelearning#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagLimitExceededException":
    case "com.amazonaws.machinelearning#TagLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TagLimitExceededExceptionResponse(
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

export const deserializeAws_json1_1CreateBatchPredictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchPredictionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateBatchPredictionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBatchPredictionOutput(data, context);
  const response: CreateBatchPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateBatchPredictionOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBatchPredictionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchPredictionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.machinelearning#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export const deserializeAws_json1_1CreateDataSourceFromRDSCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromRDSCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDataSourceFromRDSCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDataSourceFromRDSOutput(data, context);
  const response: CreateDataSourceFromRDSCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDataSourceFromRDSOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDataSourceFromRDSCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromRDSCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.machinelearning#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export const deserializeAws_json1_1CreateDataSourceFromRedshiftCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromRedshiftCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDataSourceFromRedshiftCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDataSourceFromRedshiftOutput(
    data,
    context
  );
  const response: CreateDataSourceFromRedshiftCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDataSourceFromRedshiftOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDataSourceFromRedshiftCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromRedshiftCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.machinelearning#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export const deserializeAws_json1_1CreateDataSourceFromS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromS3CommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDataSourceFromS3CommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDataSourceFromS3Output(data, context);
  const response: CreateDataSourceFromS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDataSourceFromS3Output",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDataSourceFromS3CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromS3CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.machinelearning#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export const deserializeAws_json1_1CreateEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEvaluationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEvaluationOutput(data, context);
  const response: CreateEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateEvaluationOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateEvaluationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEvaluationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.machinelearning#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export const deserializeAws_json1_1CreateMLModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMLModelCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateMLModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateMLModelOutput(data, context);
  const response: CreateMLModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateMLModelOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateMLModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMLModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.machinelearning#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export const deserializeAws_json1_1CreateRealtimeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRealtimeEndpointCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateRealtimeEndpointCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRealtimeEndpointOutput(data, context);
  const response: CreateRealtimeEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRealtimeEndpointOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRealtimeEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRealtimeEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DeleteBatchPredictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBatchPredictionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteBatchPredictionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBatchPredictionOutput(data, context);
  const response: DeleteBatchPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteBatchPredictionOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBatchPredictionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBatchPredictionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DeleteDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDataSourceOutput(data, context);
  const response: DeleteDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDataSourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DeleteEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEvaluationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEvaluationOutput(data, context);
  const response: DeleteEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteEvaluationOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEvaluationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEvaluationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DeleteMLModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMLModelCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteMLModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteMLModelOutput(data, context);
  const response: DeleteMLModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteMLModelOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMLModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMLModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DeleteRealtimeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRealtimeEndpointCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteRealtimeEndpointCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRealtimeEndpointOutput(data, context);
  const response: DeleteRealtimeEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRealtimeEndpointOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRealtimeEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRealtimeEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTagsOutput(data, context);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteTagsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.machinelearning#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DescribeBatchPredictionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBatchPredictionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeBatchPredictionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBatchPredictionsOutput(
    data,
    context
  );
  const response: DescribeBatchPredictionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeBatchPredictionsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBatchPredictionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBatchPredictionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export const deserializeAws_json1_1DescribeDataSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourcesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDataSourcesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDataSourcesOutput(data, context);
  const response: DescribeDataSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDataSourcesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDataSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export const deserializeAws_json1_1DescribeEvaluationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEvaluationsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEvaluationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEvaluationsOutput(data, context);
  const response: DescribeEvaluationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEvaluationsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEvaluationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEvaluationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export const deserializeAws_json1_1DescribeMLModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMLModelsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeMLModelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMLModelsOutput(data, context);
  const response: DescribeMLModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeMLModelsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMLModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMLModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export const deserializeAws_json1_1DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTagsOutput(data, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTagsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1GetBatchPredictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBatchPredictionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetBatchPredictionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBatchPredictionOutput(data, context);
  const response: GetBatchPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBatchPredictionOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBatchPredictionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBatchPredictionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1GetDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDataSourceOutput(data, context);
  const response: GetDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDataSourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1GetEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvaluationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetEvaluationOutput(data, context);
  const response: GetEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEvaluationOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetEvaluationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvaluationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1GetMLModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLModelCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetMLModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMLModelOutput(data, context);
  const response: GetMLModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMLModelOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMLModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1PredictCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PredictCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PredictCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PredictOutput(data, context);
  const response: PredictCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PredictOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PredictCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PredictCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.machinelearning#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PredictorNotMountedException":
    case "com.amazonaws.machinelearning#PredictorNotMountedException":
      response = {
        ...(await deserializeAws_json1_1PredictorNotMountedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1UpdateBatchPredictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBatchPredictionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateBatchPredictionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateBatchPredictionOutput(data, context);
  const response: UpdateBatchPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateBatchPredictionOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateBatchPredictionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBatchPredictionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1UpdateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDataSourceOutput(data, context);
  const response: UpdateDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDataSourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1UpdateEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEvaluationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateEvaluationOutput(data, context);
  const response: UpdateEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateEvaluationOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateEvaluationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEvaluationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1UpdateMLModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMLModelCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateMLModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateMLModelOutput(data, context);
  const response: UpdateMLModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateMLModelOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateMLModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMLModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IdempotentParameterMismatchException(
    body,
    context
  );
  const contents: IdempotentParameterMismatchException = {
    name: "IdempotentParameterMismatchException",
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

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(
    body,
    context
  );
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagException(
    body,
    context
  );
  const contents: InvalidTagException = {
    name: "InvalidTagException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PredictorNotMountedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PredictorNotMountedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PredictorNotMountedException(
    body,
    context
  );
  const contents: PredictorNotMountedException = {
    name: "PredictorNotMountedException",
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

const deserializeAws_json1_1TagLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagLimitExceededException(
    body,
    context
  );
  const contents: TagLimitExceededException = {
    name: "TagLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AddTagsInput = (
  input: AddTagsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId }),
    ...(input.ResourceType !== undefined && {
      ResourceType: input.ResourceType
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1CreateBatchPredictionInput = (
  input: CreateBatchPredictionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchPredictionDataSourceId !== undefined && {
      BatchPredictionDataSourceId: input.BatchPredictionDataSourceId
    }),
    ...(input.BatchPredictionId !== undefined && {
      BatchPredictionId: input.BatchPredictionId
    }),
    ...(input.BatchPredictionName !== undefined && {
      BatchPredictionName: input.BatchPredictionName
    }),
    ...(input.MLModelId !== undefined && { MLModelId: input.MLModelId }),
    ...(input.OutputUri !== undefined && { OutputUri: input.OutputUri })
  };
};

const serializeAws_json1_1CreateDataSourceFromRDSInput = (
  input: CreateDataSourceFromRDSInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComputeStatistics !== undefined && {
      ComputeStatistics: input.ComputeStatistics
    }),
    ...(input.DataSourceId !== undefined && {
      DataSourceId: input.DataSourceId
    }),
    ...(input.DataSourceName !== undefined && {
      DataSourceName: input.DataSourceName
    }),
    ...(input.RDSData !== undefined && {
      RDSData: serializeAws_json1_1RDSDataSpec(input.RDSData, context)
    }),
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN })
  };
};

const serializeAws_json1_1CreateDataSourceFromRedshiftInput = (
  input: CreateDataSourceFromRedshiftInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComputeStatistics !== undefined && {
      ComputeStatistics: input.ComputeStatistics
    }),
    ...(input.DataSourceId !== undefined && {
      DataSourceId: input.DataSourceId
    }),
    ...(input.DataSourceName !== undefined && {
      DataSourceName: input.DataSourceName
    }),
    ...(input.DataSpec !== undefined && {
      DataSpec: serializeAws_json1_1RedshiftDataSpec(input.DataSpec, context)
    }),
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN })
  };
};

const serializeAws_json1_1CreateDataSourceFromS3Input = (
  input: CreateDataSourceFromS3Input,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComputeStatistics !== undefined && {
      ComputeStatistics: input.ComputeStatistics
    }),
    ...(input.DataSourceId !== undefined && {
      DataSourceId: input.DataSourceId
    }),
    ...(input.DataSourceName !== undefined && {
      DataSourceName: input.DataSourceName
    }),
    ...(input.DataSpec !== undefined && {
      DataSpec: serializeAws_json1_1S3DataSpec(input.DataSpec, context)
    })
  };
};

const serializeAws_json1_1CreateEvaluationInput = (
  input: CreateEvaluationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EvaluationDataSourceId !== undefined && {
      EvaluationDataSourceId: input.EvaluationDataSourceId
    }),
    ...(input.EvaluationId !== undefined && {
      EvaluationId: input.EvaluationId
    }),
    ...(input.EvaluationName !== undefined && {
      EvaluationName: input.EvaluationName
    }),
    ...(input.MLModelId !== undefined && { MLModelId: input.MLModelId })
  };
};

const serializeAws_json1_1CreateMLModelInput = (
  input: CreateMLModelInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MLModelId !== undefined && { MLModelId: input.MLModelId }),
    ...(input.MLModelName !== undefined && { MLModelName: input.MLModelName }),
    ...(input.MLModelType !== undefined && { MLModelType: input.MLModelType }),
    ...(input.Parameters !== undefined && {
      Parameters: serializeAws_json1_1TrainingParameters(
        input.Parameters,
        context
      )
    }),
    ...(input.Recipe !== undefined && { Recipe: input.Recipe }),
    ...(input.RecipeUri !== undefined && { RecipeUri: input.RecipeUri }),
    ...(input.TrainingDataSourceId !== undefined && {
      TrainingDataSourceId: input.TrainingDataSourceId
    })
  };
};

const serializeAws_json1_1CreateRealtimeEndpointInput = (
  input: CreateRealtimeEndpointInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MLModelId !== undefined && { MLModelId: input.MLModelId })
  };
};

const serializeAws_json1_1DeleteBatchPredictionInput = (
  input: DeleteBatchPredictionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchPredictionId !== undefined && {
      BatchPredictionId: input.BatchPredictionId
    })
  };
};

const serializeAws_json1_1DeleteDataSourceInput = (
  input: DeleteDataSourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceId !== undefined && {
      DataSourceId: input.DataSourceId
    })
  };
};

const serializeAws_json1_1DeleteEvaluationInput = (
  input: DeleteEvaluationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EvaluationId !== undefined && {
      EvaluationId: input.EvaluationId
    })
  };
};

const serializeAws_json1_1DeleteMLModelInput = (
  input: DeleteMLModelInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MLModelId !== undefined && { MLModelId: input.MLModelId })
  };
};

const serializeAws_json1_1DeleteRealtimeEndpointInput = (
  input: DeleteRealtimeEndpointInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MLModelId !== undefined && { MLModelId: input.MLModelId })
  };
};

const serializeAws_json1_1DeleteTagsInput = (
  input: DeleteTagsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId }),
    ...(input.ResourceType !== undefined && {
      ResourceType: input.ResourceType
    }),
    ...(input.TagKeys !== undefined && {
      TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context)
    })
  };
};

const serializeAws_json1_1DescribeBatchPredictionsInput = (
  input: DescribeBatchPredictionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EQ !== undefined && { EQ: input.EQ }),
    ...(input.FilterVariable !== undefined && {
      FilterVariable: input.FilterVariable
    }),
    ...(input.GE !== undefined && { GE: input.GE }),
    ...(input.GT !== undefined && { GT: input.GT }),
    ...(input.LE !== undefined && { LE: input.LE }),
    ...(input.LT !== undefined && { LT: input.LT }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NE !== undefined && { NE: input.NE }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.Prefix !== undefined && { Prefix: input.Prefix }),
    ...(input.SortOrder !== undefined && { SortOrder: input.SortOrder })
  };
};

const serializeAws_json1_1DescribeDataSourcesInput = (
  input: DescribeDataSourcesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EQ !== undefined && { EQ: input.EQ }),
    ...(input.FilterVariable !== undefined && {
      FilterVariable: input.FilterVariable
    }),
    ...(input.GE !== undefined && { GE: input.GE }),
    ...(input.GT !== undefined && { GT: input.GT }),
    ...(input.LE !== undefined && { LE: input.LE }),
    ...(input.LT !== undefined && { LT: input.LT }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NE !== undefined && { NE: input.NE }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.Prefix !== undefined && { Prefix: input.Prefix }),
    ...(input.SortOrder !== undefined && { SortOrder: input.SortOrder })
  };
};

const serializeAws_json1_1DescribeEvaluationsInput = (
  input: DescribeEvaluationsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EQ !== undefined && { EQ: input.EQ }),
    ...(input.FilterVariable !== undefined && {
      FilterVariable: input.FilterVariable
    }),
    ...(input.GE !== undefined && { GE: input.GE }),
    ...(input.GT !== undefined && { GT: input.GT }),
    ...(input.LE !== undefined && { LE: input.LE }),
    ...(input.LT !== undefined && { LT: input.LT }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NE !== undefined && { NE: input.NE }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.Prefix !== undefined && { Prefix: input.Prefix }),
    ...(input.SortOrder !== undefined && { SortOrder: input.SortOrder })
  };
};

const serializeAws_json1_1DescribeMLModelsInput = (
  input: DescribeMLModelsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EQ !== undefined && { EQ: input.EQ }),
    ...(input.FilterVariable !== undefined && {
      FilterVariable: input.FilterVariable
    }),
    ...(input.GE !== undefined && { GE: input.GE }),
    ...(input.GT !== undefined && { GT: input.GT }),
    ...(input.LE !== undefined && { LE: input.LE }),
    ...(input.LT !== undefined && { LT: input.LT }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NE !== undefined && { NE: input.NE }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.Prefix !== undefined && { Prefix: input.Prefix }),
    ...(input.SortOrder !== undefined && { SortOrder: input.SortOrder })
  };
};

const serializeAws_json1_1DescribeTagsInput = (
  input: DescribeTagsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId }),
    ...(input.ResourceType !== undefined && {
      ResourceType: input.ResourceType
    })
  };
};

const serializeAws_json1_1EDPSecurityGroupIds = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1GetBatchPredictionInput = (
  input: GetBatchPredictionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchPredictionId !== undefined && {
      BatchPredictionId: input.BatchPredictionId
    })
  };
};

const serializeAws_json1_1GetDataSourceInput = (
  input: GetDataSourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceId !== undefined && {
      DataSourceId: input.DataSourceId
    }),
    ...(input.Verbose !== undefined && { Verbose: input.Verbose })
  };
};

const serializeAws_json1_1GetEvaluationInput = (
  input: GetEvaluationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EvaluationId !== undefined && {
      EvaluationId: input.EvaluationId
    })
  };
};

const serializeAws_json1_1GetMLModelInput = (
  input: GetMLModelInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MLModelId !== undefined && { MLModelId: input.MLModelId }),
    ...(input.Verbose !== undefined && { Verbose: input.Verbose })
  };
};

const serializeAws_json1_1PredictInput = (
  input: PredictInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MLModelId !== undefined && { MLModelId: input.MLModelId }),
    ...(input.PredictEndpoint !== undefined && {
      PredictEndpoint: input.PredictEndpoint
    }),
    ...(input.Record !== undefined && {
      Record: serializeAws_json1_1Record(input.Record, context)
    })
  };
};

const serializeAws_json1_1RDSDatabase = (
  input: RDSDatabase,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatabaseName !== undefined && {
      DatabaseName: input.DatabaseName
    }),
    ...(input.InstanceIdentifier !== undefined && {
      InstanceIdentifier: input.InstanceIdentifier
    })
  };
};

const serializeAws_json1_1RDSDatabaseCredentials = (
  input: RDSDatabaseCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.Password !== undefined && { Password: input.Password }),
    ...(input.Username !== undefined && { Username: input.Username })
  };
};

const serializeAws_json1_1RDSDataSpec = (
  input: RDSDataSpec,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataRearrangement !== undefined && {
      DataRearrangement: input.DataRearrangement
    }),
    ...(input.DataSchema !== undefined && { DataSchema: input.DataSchema }),
    ...(input.DataSchemaUri !== undefined && {
      DataSchemaUri: input.DataSchemaUri
    }),
    ...(input.DatabaseCredentials !== undefined && {
      DatabaseCredentials: serializeAws_json1_1RDSDatabaseCredentials(
        input.DatabaseCredentials,
        context
      )
    }),
    ...(input.DatabaseInformation !== undefined && {
      DatabaseInformation: serializeAws_json1_1RDSDatabase(
        input.DatabaseInformation,
        context
      )
    }),
    ...(input.ResourceRole !== undefined && {
      ResourceRole: input.ResourceRole
    }),
    ...(input.S3StagingLocation !== undefined && {
      S3StagingLocation: input.S3StagingLocation
    }),
    ...(input.SecurityGroupIds !== undefined && {
      SecurityGroupIds: serializeAws_json1_1EDPSecurityGroupIds(
        input.SecurityGroupIds,
        context
      )
    }),
    ...(input.SelectSqlQuery !== undefined && {
      SelectSqlQuery: input.SelectSqlQuery
    }),
    ...(input.ServiceRole !== undefined && { ServiceRole: input.ServiceRole }),
    ...(input.SubnetId !== undefined && { SubnetId: input.SubnetId })
  };
};

const serializeAws_json1_1Record = (
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

const serializeAws_json1_1RedshiftDatabase = (
  input: RedshiftDatabase,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterIdentifier !== undefined && {
      ClusterIdentifier: input.ClusterIdentifier
    }),
    ...(input.DatabaseName !== undefined && {
      DatabaseName: input.DatabaseName
    })
  };
};

const serializeAws_json1_1RedshiftDatabaseCredentials = (
  input: RedshiftDatabaseCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.Password !== undefined && { Password: input.Password }),
    ...(input.Username !== undefined && { Username: input.Username })
  };
};

const serializeAws_json1_1RedshiftDataSpec = (
  input: RedshiftDataSpec,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataRearrangement !== undefined && {
      DataRearrangement: input.DataRearrangement
    }),
    ...(input.DataSchema !== undefined && { DataSchema: input.DataSchema }),
    ...(input.DataSchemaUri !== undefined && {
      DataSchemaUri: input.DataSchemaUri
    }),
    ...(input.DatabaseCredentials !== undefined && {
      DatabaseCredentials: serializeAws_json1_1RedshiftDatabaseCredentials(
        input.DatabaseCredentials,
        context
      )
    }),
    ...(input.DatabaseInformation !== undefined && {
      DatabaseInformation: serializeAws_json1_1RedshiftDatabase(
        input.DatabaseInformation,
        context
      )
    }),
    ...(input.S3StagingLocation !== undefined && {
      S3StagingLocation: input.S3StagingLocation
    }),
    ...(input.SelectSqlQuery !== undefined && {
      SelectSqlQuery: input.SelectSqlQuery
    })
  };
};

const serializeAws_json1_1S3DataSpec = (
  input: S3DataSpec,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataLocationS3 !== undefined && {
      DataLocationS3: input.DataLocationS3
    }),
    ...(input.DataRearrangement !== undefined && {
      DataRearrangement: input.DataRearrangement
    }),
    ...(input.DataSchema !== undefined && { DataSchema: input.DataSchema }),
    ...(input.DataSchemaLocationS3 !== undefined && {
      DataSchemaLocationS3: input.DataSchemaLocationS3
    })
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1TagKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TrainingParameters = (
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

const serializeAws_json1_1UpdateBatchPredictionInput = (
  input: UpdateBatchPredictionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchPredictionId !== undefined && {
      BatchPredictionId: input.BatchPredictionId
    }),
    ...(input.BatchPredictionName !== undefined && {
      BatchPredictionName: input.BatchPredictionName
    })
  };
};

const serializeAws_json1_1UpdateDataSourceInput = (
  input: UpdateDataSourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceId !== undefined && {
      DataSourceId: input.DataSourceId
    }),
    ...(input.DataSourceName !== undefined && {
      DataSourceName: input.DataSourceName
    })
  };
};

const serializeAws_json1_1UpdateEvaluationInput = (
  input: UpdateEvaluationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EvaluationId !== undefined && {
      EvaluationId: input.EvaluationId
    }),
    ...(input.EvaluationName !== undefined && {
      EvaluationName: input.EvaluationName
    })
  };
};

const serializeAws_json1_1UpdateMLModelInput = (
  input: UpdateMLModelInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MLModelId !== undefined && { MLModelId: input.MLModelId }),
    ...(input.MLModelName !== undefined && { MLModelName: input.MLModelName }),
    ...(input.ScoreThreshold !== undefined && {
      ScoreThreshold: input.ScoreThreshold
    })
  };
};

const deserializeAws_json1_1AddTagsOutput = (
  output: any,
  context: __SerdeContext
): AddTagsOutput => {
  return {
    __type: "AddTagsOutput",
    ResourceId:
      output.ResourceId !== undefined && output.ResourceId !== null
        ? output.ResourceId
        : undefined,
    ResourceType:
      output.ResourceType !== undefined && output.ResourceType !== null
        ? output.ResourceType
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchPrediction = (
  output: any,
  context: __SerdeContext
): BatchPrediction => {
  return {
    __type: "BatchPrediction",
    BatchPredictionDataSourceId:
      output.BatchPredictionDataSourceId !== undefined &&
      output.BatchPredictionDataSourceId !== null
        ? output.BatchPredictionDataSourceId
        : undefined,
    BatchPredictionId:
      output.BatchPredictionId !== undefined &&
      output.BatchPredictionId !== null
        ? output.BatchPredictionId
        : undefined,
    ComputeTime:
      output.ComputeTime !== undefined && output.ComputeTime !== null
        ? output.ComputeTime
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    CreatedByIamUser:
      output.CreatedByIamUser !== undefined && output.CreatedByIamUser !== null
        ? output.CreatedByIamUser
        : undefined,
    FinishedAt:
      output.FinishedAt !== undefined && output.FinishedAt !== null
        ? new Date(Math.round(output.FinishedAt * 1000))
        : undefined,
    InputDataLocationS3:
      output.InputDataLocationS3 !== undefined &&
      output.InputDataLocationS3 !== null
        ? output.InputDataLocationS3
        : undefined,
    InvalidRecordCount:
      output.InvalidRecordCount !== undefined &&
      output.InvalidRecordCount !== null
        ? output.InvalidRecordCount
        : undefined,
    LastUpdatedAt:
      output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
        ? new Date(Math.round(output.LastUpdatedAt * 1000))
        : undefined,
    MLModelId:
      output.MLModelId !== undefined && output.MLModelId !== null
        ? output.MLModelId
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    OutputUri:
      output.OutputUri !== undefined && output.OutputUri !== null
        ? output.OutputUri
        : undefined,
    StartedAt:
      output.StartedAt !== undefined && output.StartedAt !== null
        ? new Date(Math.round(output.StartedAt * 1000))
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    TotalRecordCount:
      output.TotalRecordCount !== undefined && output.TotalRecordCount !== null
        ? output.TotalRecordCount
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchPredictions = (
  output: any,
  context: __SerdeContext
): BatchPrediction[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BatchPrediction(entry, context)
  );
};

const deserializeAws_json1_1CreateBatchPredictionOutput = (
  output: any,
  context: __SerdeContext
): CreateBatchPredictionOutput => {
  return {
    __type: "CreateBatchPredictionOutput",
    BatchPredictionId:
      output.BatchPredictionId !== undefined &&
      output.BatchPredictionId !== null
        ? output.BatchPredictionId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateDataSourceFromRDSOutput = (
  output: any,
  context: __SerdeContext
): CreateDataSourceFromRDSOutput => {
  return {
    __type: "CreateDataSourceFromRDSOutput",
    DataSourceId:
      output.DataSourceId !== undefined && output.DataSourceId !== null
        ? output.DataSourceId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateDataSourceFromRedshiftOutput = (
  output: any,
  context: __SerdeContext
): CreateDataSourceFromRedshiftOutput => {
  return {
    __type: "CreateDataSourceFromRedshiftOutput",
    DataSourceId:
      output.DataSourceId !== undefined && output.DataSourceId !== null
        ? output.DataSourceId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateDataSourceFromS3Output = (
  output: any,
  context: __SerdeContext
): CreateDataSourceFromS3Output => {
  return {
    __type: "CreateDataSourceFromS3Output",
    DataSourceId:
      output.DataSourceId !== undefined && output.DataSourceId !== null
        ? output.DataSourceId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateEvaluationOutput = (
  output: any,
  context: __SerdeContext
): CreateEvaluationOutput => {
  return {
    __type: "CreateEvaluationOutput",
    EvaluationId:
      output.EvaluationId !== undefined && output.EvaluationId !== null
        ? output.EvaluationId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateMLModelOutput = (
  output: any,
  context: __SerdeContext
): CreateMLModelOutput => {
  return {
    __type: "CreateMLModelOutput",
    MLModelId:
      output.MLModelId !== undefined && output.MLModelId !== null
        ? output.MLModelId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateRealtimeEndpointOutput = (
  output: any,
  context: __SerdeContext
): CreateRealtimeEndpointOutput => {
  return {
    __type: "CreateRealtimeEndpointOutput",
    MLModelId:
      output.MLModelId !== undefined && output.MLModelId !== null
        ? output.MLModelId
        : undefined,
    RealtimeEndpointInfo:
      output.RealtimeEndpointInfo !== undefined &&
      output.RealtimeEndpointInfo !== null
        ? deserializeAws_json1_1RealtimeEndpointInfo(
            output.RealtimeEndpointInfo,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DataSource = (
  output: any,
  context: __SerdeContext
): DataSource => {
  return {
    __type: "DataSource",
    ComputeStatistics:
      output.ComputeStatistics !== undefined &&
      output.ComputeStatistics !== null
        ? output.ComputeStatistics
        : undefined,
    ComputeTime:
      output.ComputeTime !== undefined && output.ComputeTime !== null
        ? output.ComputeTime
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    CreatedByIamUser:
      output.CreatedByIamUser !== undefined && output.CreatedByIamUser !== null
        ? output.CreatedByIamUser
        : undefined,
    DataLocationS3:
      output.DataLocationS3 !== undefined && output.DataLocationS3 !== null
        ? output.DataLocationS3
        : undefined,
    DataRearrangement:
      output.DataRearrangement !== undefined &&
      output.DataRearrangement !== null
        ? output.DataRearrangement
        : undefined,
    DataSizeInBytes:
      output.DataSizeInBytes !== undefined && output.DataSizeInBytes !== null
        ? output.DataSizeInBytes
        : undefined,
    DataSourceId:
      output.DataSourceId !== undefined && output.DataSourceId !== null
        ? output.DataSourceId
        : undefined,
    FinishedAt:
      output.FinishedAt !== undefined && output.FinishedAt !== null
        ? new Date(Math.round(output.FinishedAt * 1000))
        : undefined,
    LastUpdatedAt:
      output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
        ? new Date(Math.round(output.LastUpdatedAt * 1000))
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    NumberOfFiles:
      output.NumberOfFiles !== undefined && output.NumberOfFiles !== null
        ? output.NumberOfFiles
        : undefined,
    RDSMetadata:
      output.RDSMetadata !== undefined && output.RDSMetadata !== null
        ? deserializeAws_json1_1RDSMetadata(output.RDSMetadata, context)
        : undefined,
    RedshiftMetadata:
      output.RedshiftMetadata !== undefined && output.RedshiftMetadata !== null
        ? deserializeAws_json1_1RedshiftMetadata(
            output.RedshiftMetadata,
            context
          )
        : undefined,
    RoleARN:
      output.RoleARN !== undefined && output.RoleARN !== null
        ? output.RoleARN
        : undefined,
    StartedAt:
      output.StartedAt !== undefined && output.StartedAt !== null
        ? new Date(Math.round(output.StartedAt * 1000))
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_json1_1DataSources = (
  output: any,
  context: __SerdeContext
): DataSource[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DataSource(entry, context)
  );
};

const deserializeAws_json1_1DeleteBatchPredictionOutput = (
  output: any,
  context: __SerdeContext
): DeleteBatchPredictionOutput => {
  return {
    __type: "DeleteBatchPredictionOutput",
    BatchPredictionId:
      output.BatchPredictionId !== undefined &&
      output.BatchPredictionId !== null
        ? output.BatchPredictionId
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteDataSourceOutput = (
  output: any,
  context: __SerdeContext
): DeleteDataSourceOutput => {
  return {
    __type: "DeleteDataSourceOutput",
    DataSourceId:
      output.DataSourceId !== undefined && output.DataSourceId !== null
        ? output.DataSourceId
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteEvaluationOutput = (
  output: any,
  context: __SerdeContext
): DeleteEvaluationOutput => {
  return {
    __type: "DeleteEvaluationOutput",
    EvaluationId:
      output.EvaluationId !== undefined && output.EvaluationId !== null
        ? output.EvaluationId
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteMLModelOutput = (
  output: any,
  context: __SerdeContext
): DeleteMLModelOutput => {
  return {
    __type: "DeleteMLModelOutput",
    MLModelId:
      output.MLModelId !== undefined && output.MLModelId !== null
        ? output.MLModelId
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteRealtimeEndpointOutput = (
  output: any,
  context: __SerdeContext
): DeleteRealtimeEndpointOutput => {
  return {
    __type: "DeleteRealtimeEndpointOutput",
    MLModelId:
      output.MLModelId !== undefined && output.MLModelId !== null
        ? output.MLModelId
        : undefined,
    RealtimeEndpointInfo:
      output.RealtimeEndpointInfo !== undefined &&
      output.RealtimeEndpointInfo !== null
        ? deserializeAws_json1_1RealtimeEndpointInfo(
            output.RealtimeEndpointInfo,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteTagsOutput = (
  output: any,
  context: __SerdeContext
): DeleteTagsOutput => {
  return {
    __type: "DeleteTagsOutput",
    ResourceId:
      output.ResourceId !== undefined && output.ResourceId !== null
        ? output.ResourceId
        : undefined,
    ResourceType:
      output.ResourceType !== undefined && output.ResourceType !== null
        ? output.ResourceType
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeBatchPredictionsOutput = (
  output: any,
  context: __SerdeContext
): DescribeBatchPredictionsOutput => {
  return {
    __type: "DescribeBatchPredictionsOutput",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Results:
      output.Results !== undefined && output.Results !== null
        ? deserializeAws_json1_1BatchPredictions(output.Results, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeDataSourcesOutput = (
  output: any,
  context: __SerdeContext
): DescribeDataSourcesOutput => {
  return {
    __type: "DescribeDataSourcesOutput",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Results:
      output.Results !== undefined && output.Results !== null
        ? deserializeAws_json1_1DataSources(output.Results, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeEvaluationsOutput = (
  output: any,
  context: __SerdeContext
): DescribeEvaluationsOutput => {
  return {
    __type: "DescribeEvaluationsOutput",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Results:
      output.Results !== undefined && output.Results !== null
        ? deserializeAws_json1_1Evaluations(output.Results, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeMLModelsOutput = (
  output: any,
  context: __SerdeContext
): DescribeMLModelsOutput => {
  return {
    __type: "DescribeMLModelsOutput",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Results:
      output.Results !== undefined && output.Results !== null
        ? deserializeAws_json1_1MLModels(output.Results, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeTagsOutput = (
  output: any,
  context: __SerdeContext
): DescribeTagsOutput => {
  return {
    __type: "DescribeTagsOutput",
    ResourceId:
      output.ResourceId !== undefined && output.ResourceId !== null
        ? output.ResourceId
        : undefined,
    ResourceType:
      output.ResourceType !== undefined && output.ResourceType !== null
        ? output.ResourceType
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DetailsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (
      acc: { [key: string]: string },
      [key, value]: [DetailsAttributes | string, any]
    ) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1Evaluation = (
  output: any,
  context: __SerdeContext
): Evaluation => {
  return {
    __type: "Evaluation",
    ComputeTime:
      output.ComputeTime !== undefined && output.ComputeTime !== null
        ? output.ComputeTime
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    CreatedByIamUser:
      output.CreatedByIamUser !== undefined && output.CreatedByIamUser !== null
        ? output.CreatedByIamUser
        : undefined,
    EvaluationDataSourceId:
      output.EvaluationDataSourceId !== undefined &&
      output.EvaluationDataSourceId !== null
        ? output.EvaluationDataSourceId
        : undefined,
    EvaluationId:
      output.EvaluationId !== undefined && output.EvaluationId !== null
        ? output.EvaluationId
        : undefined,
    FinishedAt:
      output.FinishedAt !== undefined && output.FinishedAt !== null
        ? new Date(Math.round(output.FinishedAt * 1000))
        : undefined,
    InputDataLocationS3:
      output.InputDataLocationS3 !== undefined &&
      output.InputDataLocationS3 !== null
        ? output.InputDataLocationS3
        : undefined,
    LastUpdatedAt:
      output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
        ? new Date(Math.round(output.LastUpdatedAt * 1000))
        : undefined,
    MLModelId:
      output.MLModelId !== undefined && output.MLModelId !== null
        ? output.MLModelId
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    PerformanceMetrics:
      output.PerformanceMetrics !== undefined &&
      output.PerformanceMetrics !== null
        ? deserializeAws_json1_1PerformanceMetrics(
            output.PerformanceMetrics,
            context
          )
        : undefined,
    StartedAt:
      output.StartedAt !== undefined && output.StartedAt !== null
        ? new Date(Math.round(output.StartedAt * 1000))
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_json1_1Evaluations = (
  output: any,
  context: __SerdeContext
): Evaluation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Evaluation(entry, context)
  );
};

const deserializeAws_json1_1GetBatchPredictionOutput = (
  output: any,
  context: __SerdeContext
): GetBatchPredictionOutput => {
  return {
    __type: "GetBatchPredictionOutput",
    BatchPredictionDataSourceId:
      output.BatchPredictionDataSourceId !== undefined &&
      output.BatchPredictionDataSourceId !== null
        ? output.BatchPredictionDataSourceId
        : undefined,
    BatchPredictionId:
      output.BatchPredictionId !== undefined &&
      output.BatchPredictionId !== null
        ? output.BatchPredictionId
        : undefined,
    ComputeTime:
      output.ComputeTime !== undefined && output.ComputeTime !== null
        ? output.ComputeTime
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    CreatedByIamUser:
      output.CreatedByIamUser !== undefined && output.CreatedByIamUser !== null
        ? output.CreatedByIamUser
        : undefined,
    FinishedAt:
      output.FinishedAt !== undefined && output.FinishedAt !== null
        ? new Date(Math.round(output.FinishedAt * 1000))
        : undefined,
    InputDataLocationS3:
      output.InputDataLocationS3 !== undefined &&
      output.InputDataLocationS3 !== null
        ? output.InputDataLocationS3
        : undefined,
    InvalidRecordCount:
      output.InvalidRecordCount !== undefined &&
      output.InvalidRecordCount !== null
        ? output.InvalidRecordCount
        : undefined,
    LastUpdatedAt:
      output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
        ? new Date(Math.round(output.LastUpdatedAt * 1000))
        : undefined,
    LogUri:
      output.LogUri !== undefined && output.LogUri !== null
        ? output.LogUri
        : undefined,
    MLModelId:
      output.MLModelId !== undefined && output.MLModelId !== null
        ? output.MLModelId
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    OutputUri:
      output.OutputUri !== undefined && output.OutputUri !== null
        ? output.OutputUri
        : undefined,
    StartedAt:
      output.StartedAt !== undefined && output.StartedAt !== null
        ? new Date(Math.round(output.StartedAt * 1000))
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    TotalRecordCount:
      output.TotalRecordCount !== undefined && output.TotalRecordCount !== null
        ? output.TotalRecordCount
        : undefined
  } as any;
};

const deserializeAws_json1_1GetDataSourceOutput = (
  output: any,
  context: __SerdeContext
): GetDataSourceOutput => {
  return {
    __type: "GetDataSourceOutput",
    ComputeStatistics:
      output.ComputeStatistics !== undefined &&
      output.ComputeStatistics !== null
        ? output.ComputeStatistics
        : undefined,
    ComputeTime:
      output.ComputeTime !== undefined && output.ComputeTime !== null
        ? output.ComputeTime
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    CreatedByIamUser:
      output.CreatedByIamUser !== undefined && output.CreatedByIamUser !== null
        ? output.CreatedByIamUser
        : undefined,
    DataLocationS3:
      output.DataLocationS3 !== undefined && output.DataLocationS3 !== null
        ? output.DataLocationS3
        : undefined,
    DataRearrangement:
      output.DataRearrangement !== undefined &&
      output.DataRearrangement !== null
        ? output.DataRearrangement
        : undefined,
    DataSizeInBytes:
      output.DataSizeInBytes !== undefined && output.DataSizeInBytes !== null
        ? output.DataSizeInBytes
        : undefined,
    DataSourceId:
      output.DataSourceId !== undefined && output.DataSourceId !== null
        ? output.DataSourceId
        : undefined,
    DataSourceSchema:
      output.DataSourceSchema !== undefined && output.DataSourceSchema !== null
        ? output.DataSourceSchema
        : undefined,
    FinishedAt:
      output.FinishedAt !== undefined && output.FinishedAt !== null
        ? new Date(Math.round(output.FinishedAt * 1000))
        : undefined,
    LastUpdatedAt:
      output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
        ? new Date(Math.round(output.LastUpdatedAt * 1000))
        : undefined,
    LogUri:
      output.LogUri !== undefined && output.LogUri !== null
        ? output.LogUri
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    NumberOfFiles:
      output.NumberOfFiles !== undefined && output.NumberOfFiles !== null
        ? output.NumberOfFiles
        : undefined,
    RDSMetadata:
      output.RDSMetadata !== undefined && output.RDSMetadata !== null
        ? deserializeAws_json1_1RDSMetadata(output.RDSMetadata, context)
        : undefined,
    RedshiftMetadata:
      output.RedshiftMetadata !== undefined && output.RedshiftMetadata !== null
        ? deserializeAws_json1_1RedshiftMetadata(
            output.RedshiftMetadata,
            context
          )
        : undefined,
    RoleARN:
      output.RoleARN !== undefined && output.RoleARN !== null
        ? output.RoleARN
        : undefined,
    StartedAt:
      output.StartedAt !== undefined && output.StartedAt !== null
        ? new Date(Math.round(output.StartedAt * 1000))
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_json1_1GetEvaluationOutput = (
  output: any,
  context: __SerdeContext
): GetEvaluationOutput => {
  return {
    __type: "GetEvaluationOutput",
    ComputeTime:
      output.ComputeTime !== undefined && output.ComputeTime !== null
        ? output.ComputeTime
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    CreatedByIamUser:
      output.CreatedByIamUser !== undefined && output.CreatedByIamUser !== null
        ? output.CreatedByIamUser
        : undefined,
    EvaluationDataSourceId:
      output.EvaluationDataSourceId !== undefined &&
      output.EvaluationDataSourceId !== null
        ? output.EvaluationDataSourceId
        : undefined,
    EvaluationId:
      output.EvaluationId !== undefined && output.EvaluationId !== null
        ? output.EvaluationId
        : undefined,
    FinishedAt:
      output.FinishedAt !== undefined && output.FinishedAt !== null
        ? new Date(Math.round(output.FinishedAt * 1000))
        : undefined,
    InputDataLocationS3:
      output.InputDataLocationS3 !== undefined &&
      output.InputDataLocationS3 !== null
        ? output.InputDataLocationS3
        : undefined,
    LastUpdatedAt:
      output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
        ? new Date(Math.round(output.LastUpdatedAt * 1000))
        : undefined,
    LogUri:
      output.LogUri !== undefined && output.LogUri !== null
        ? output.LogUri
        : undefined,
    MLModelId:
      output.MLModelId !== undefined && output.MLModelId !== null
        ? output.MLModelId
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    PerformanceMetrics:
      output.PerformanceMetrics !== undefined &&
      output.PerformanceMetrics !== null
        ? deserializeAws_json1_1PerformanceMetrics(
            output.PerformanceMetrics,
            context
          )
        : undefined,
    StartedAt:
      output.StartedAt !== undefined && output.StartedAt !== null
        ? new Date(Math.round(output.StartedAt * 1000))
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_json1_1GetMLModelOutput = (
  output: any,
  context: __SerdeContext
): GetMLModelOutput => {
  return {
    __type: "GetMLModelOutput",
    ComputeTime:
      output.ComputeTime !== undefined && output.ComputeTime !== null
        ? output.ComputeTime
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    CreatedByIamUser:
      output.CreatedByIamUser !== undefined && output.CreatedByIamUser !== null
        ? output.CreatedByIamUser
        : undefined,
    EndpointInfo:
      output.EndpointInfo !== undefined && output.EndpointInfo !== null
        ? deserializeAws_json1_1RealtimeEndpointInfo(
            output.EndpointInfo,
            context
          )
        : undefined,
    FinishedAt:
      output.FinishedAt !== undefined && output.FinishedAt !== null
        ? new Date(Math.round(output.FinishedAt * 1000))
        : undefined,
    InputDataLocationS3:
      output.InputDataLocationS3 !== undefined &&
      output.InputDataLocationS3 !== null
        ? output.InputDataLocationS3
        : undefined,
    LastUpdatedAt:
      output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
        ? new Date(Math.round(output.LastUpdatedAt * 1000))
        : undefined,
    LogUri:
      output.LogUri !== undefined && output.LogUri !== null
        ? output.LogUri
        : undefined,
    MLModelId:
      output.MLModelId !== undefined && output.MLModelId !== null
        ? output.MLModelId
        : undefined,
    MLModelType:
      output.MLModelType !== undefined && output.MLModelType !== null
        ? output.MLModelType
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Recipe:
      output.Recipe !== undefined && output.Recipe !== null
        ? output.Recipe
        : undefined,
    Schema:
      output.Schema !== undefined && output.Schema !== null
        ? output.Schema
        : undefined,
    ScoreThreshold:
      output.ScoreThreshold !== undefined && output.ScoreThreshold !== null
        ? output.ScoreThreshold
        : undefined,
    ScoreThresholdLastUpdatedAt:
      output.ScoreThresholdLastUpdatedAt !== undefined &&
      output.ScoreThresholdLastUpdatedAt !== null
        ? new Date(Math.round(output.ScoreThresholdLastUpdatedAt * 1000))
        : undefined,
    SizeInBytes:
      output.SizeInBytes !== undefined && output.SizeInBytes !== null
        ? output.SizeInBytes
        : undefined,
    StartedAt:
      output.StartedAt !== undefined && output.StartedAt !== null
        ? new Date(Math.round(output.StartedAt * 1000))
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    TrainingDataSourceId:
      output.TrainingDataSourceId !== undefined &&
      output.TrainingDataSourceId !== null
        ? output.TrainingDataSourceId
        : undefined,
    TrainingParameters:
      output.TrainingParameters !== undefined &&
      output.TrainingParameters !== null
        ? deserializeAws_json1_1TrainingParameters(
            output.TrainingParameters,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  return {
    __type: "IdempotentParameterMismatchException",
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    __type: "InternalServerException",
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  return {
    __type: "InvalidInputException",
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidTagException = (
  output: any,
  context: __SerdeContext
): InvalidTagException => {
  return {
    __type: "InvalidTagException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1MLModel = (
  output: any,
  context: __SerdeContext
): MLModel => {
  return {
    __type: "MLModel",
    Algorithm:
      output.Algorithm !== undefined && output.Algorithm !== null
        ? output.Algorithm
        : undefined,
    ComputeTime:
      output.ComputeTime !== undefined && output.ComputeTime !== null
        ? output.ComputeTime
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    CreatedByIamUser:
      output.CreatedByIamUser !== undefined && output.CreatedByIamUser !== null
        ? output.CreatedByIamUser
        : undefined,
    EndpointInfo:
      output.EndpointInfo !== undefined && output.EndpointInfo !== null
        ? deserializeAws_json1_1RealtimeEndpointInfo(
            output.EndpointInfo,
            context
          )
        : undefined,
    FinishedAt:
      output.FinishedAt !== undefined && output.FinishedAt !== null
        ? new Date(Math.round(output.FinishedAt * 1000))
        : undefined,
    InputDataLocationS3:
      output.InputDataLocationS3 !== undefined &&
      output.InputDataLocationS3 !== null
        ? output.InputDataLocationS3
        : undefined,
    LastUpdatedAt:
      output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
        ? new Date(Math.round(output.LastUpdatedAt * 1000))
        : undefined,
    MLModelId:
      output.MLModelId !== undefined && output.MLModelId !== null
        ? output.MLModelId
        : undefined,
    MLModelType:
      output.MLModelType !== undefined && output.MLModelType !== null
        ? output.MLModelType
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    ScoreThreshold:
      output.ScoreThreshold !== undefined && output.ScoreThreshold !== null
        ? output.ScoreThreshold
        : undefined,
    ScoreThresholdLastUpdatedAt:
      output.ScoreThresholdLastUpdatedAt !== undefined &&
      output.ScoreThresholdLastUpdatedAt !== null
        ? new Date(Math.round(output.ScoreThresholdLastUpdatedAt * 1000))
        : undefined,
    SizeInBytes:
      output.SizeInBytes !== undefined && output.SizeInBytes !== null
        ? output.SizeInBytes
        : undefined,
    StartedAt:
      output.StartedAt !== undefined && output.StartedAt !== null
        ? new Date(Math.round(output.StartedAt * 1000))
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    TrainingDataSourceId:
      output.TrainingDataSourceId !== undefined &&
      output.TrainingDataSourceId !== null
        ? output.TrainingDataSourceId
        : undefined,
    TrainingParameters:
      output.TrainingParameters !== undefined &&
      output.TrainingParameters !== null
        ? deserializeAws_json1_1TrainingParameters(
            output.TrainingParameters,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1MLModels = (
  output: any,
  context: __SerdeContext
): MLModel[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MLModel(entry, context)
  );
};

const deserializeAws_json1_1PerformanceMetrics = (
  output: any,
  context: __SerdeContext
): PerformanceMetrics => {
  return {
    __type: "PerformanceMetrics",
    Properties:
      output.Properties !== undefined && output.Properties !== null
        ? deserializeAws_json1_1PerformanceMetricsProperties(
            output.Properties,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1PerformanceMetricsProperties = (
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

const deserializeAws_json1_1Prediction = (
  output: any,
  context: __SerdeContext
): Prediction => {
  return {
    __type: "Prediction",
    details:
      output.details !== undefined && output.details !== null
        ? deserializeAws_json1_1DetailsMap(output.details, context)
        : undefined,
    predictedLabel:
      output.predictedLabel !== undefined && output.predictedLabel !== null
        ? output.predictedLabel
        : undefined,
    predictedScores:
      output.predictedScores !== undefined && output.predictedScores !== null
        ? deserializeAws_json1_1ScoreValuePerLabelMap(
            output.predictedScores,
            context
          )
        : undefined,
    predictedValue:
      output.predictedValue !== undefined && output.predictedValue !== null
        ? output.predictedValue
        : undefined
  } as any;
};

const deserializeAws_json1_1PredictorNotMountedException = (
  output: any,
  context: __SerdeContext
): PredictorNotMountedException => {
  return {
    __type: "PredictorNotMountedException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1PredictOutput = (
  output: any,
  context: __SerdeContext
): PredictOutput => {
  return {
    __type: "PredictOutput",
    Prediction:
      output.Prediction !== undefined && output.Prediction !== null
        ? deserializeAws_json1_1Prediction(output.Prediction, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1RDSDatabase = (
  output: any,
  context: __SerdeContext
): RDSDatabase => {
  return {
    __type: "RDSDatabase",
    DatabaseName:
      output.DatabaseName !== undefined && output.DatabaseName !== null
        ? output.DatabaseName
        : undefined,
    InstanceIdentifier:
      output.InstanceIdentifier !== undefined &&
      output.InstanceIdentifier !== null
        ? output.InstanceIdentifier
        : undefined
  } as any;
};

const deserializeAws_json1_1RDSMetadata = (
  output: any,
  context: __SerdeContext
): RDSMetadata => {
  return {
    __type: "RDSMetadata",
    DataPipelineId:
      output.DataPipelineId !== undefined && output.DataPipelineId !== null
        ? output.DataPipelineId
        : undefined,
    Database:
      output.Database !== undefined && output.Database !== null
        ? deserializeAws_json1_1RDSDatabase(output.Database, context)
        : undefined,
    DatabaseUserName:
      output.DatabaseUserName !== undefined && output.DatabaseUserName !== null
        ? output.DatabaseUserName
        : undefined,
    ResourceRole:
      output.ResourceRole !== undefined && output.ResourceRole !== null
        ? output.ResourceRole
        : undefined,
    SelectSqlQuery:
      output.SelectSqlQuery !== undefined && output.SelectSqlQuery !== null
        ? output.SelectSqlQuery
        : undefined,
    ServiceRole:
      output.ServiceRole !== undefined && output.ServiceRole !== null
        ? output.ServiceRole
        : undefined
  } as any;
};

const deserializeAws_json1_1RealtimeEndpointInfo = (
  output: any,
  context: __SerdeContext
): RealtimeEndpointInfo => {
  return {
    __type: "RealtimeEndpointInfo",
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    EndpointStatus:
      output.EndpointStatus !== undefined && output.EndpointStatus !== null
        ? output.EndpointStatus
        : undefined,
    EndpointUrl:
      output.EndpointUrl !== undefined && output.EndpointUrl !== null
        ? output.EndpointUrl
        : undefined,
    PeakRequestsPerSecond:
      output.PeakRequestsPerSecond !== undefined &&
      output.PeakRequestsPerSecond !== null
        ? output.PeakRequestsPerSecond
        : undefined
  } as any;
};

const deserializeAws_json1_1RedshiftDatabase = (
  output: any,
  context: __SerdeContext
): RedshiftDatabase => {
  return {
    __type: "RedshiftDatabase",
    ClusterIdentifier:
      output.ClusterIdentifier !== undefined &&
      output.ClusterIdentifier !== null
        ? output.ClusterIdentifier
        : undefined,
    DatabaseName:
      output.DatabaseName !== undefined && output.DatabaseName !== null
        ? output.DatabaseName
        : undefined
  } as any;
};

const deserializeAws_json1_1RedshiftMetadata = (
  output: any,
  context: __SerdeContext
): RedshiftMetadata => {
  return {
    __type: "RedshiftMetadata",
    DatabaseUserName:
      output.DatabaseUserName !== undefined && output.DatabaseUserName !== null
        ? output.DatabaseUserName
        : undefined,
    RedshiftDatabase:
      output.RedshiftDatabase !== undefined && output.RedshiftDatabase !== null
        ? deserializeAws_json1_1RedshiftDatabase(
            output.RedshiftDatabase,
            context
          )
        : undefined,
    SelectSqlQuery:
      output.SelectSqlQuery !== undefined && output.SelectSqlQuery !== null
        ? output.SelectSqlQuery
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ScoreValuePerLabelMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: number }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1Tag = (
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

const deserializeAws_json1_1TagLimitExceededException = (
  output: any,
  context: __SerdeContext
): TagLimitExceededException => {
  return {
    __type: "TagLimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TrainingParameters = (
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

const deserializeAws_json1_1UpdateBatchPredictionOutput = (
  output: any,
  context: __SerdeContext
): UpdateBatchPredictionOutput => {
  return {
    __type: "UpdateBatchPredictionOutput",
    BatchPredictionId:
      output.BatchPredictionId !== undefined &&
      output.BatchPredictionId !== null
        ? output.BatchPredictionId
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateDataSourceOutput = (
  output: any,
  context: __SerdeContext
): UpdateDataSourceOutput => {
  return {
    __type: "UpdateDataSourceOutput",
    DataSourceId:
      output.DataSourceId !== undefined && output.DataSourceId !== null
        ? output.DataSourceId
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateEvaluationOutput = (
  output: any,
  context: __SerdeContext
): UpdateEvaluationOutput => {
  return {
    __type: "UpdateEvaluationOutput",
    EvaluationId:
      output.EvaluationId !== undefined && output.EvaluationId !== null
        ? output.EvaluationId
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateMLModelOutput = (
  output: any,
  context: __SerdeContext
): UpdateMLModelOutput => {
  return {
    __type: "UpdateMLModelOutput",
    MLModelId:
      output.MLModelId !== undefined && output.MLModelId !== null
        ? output.MLModelId
        : undefined
  } as any;
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
