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
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1AddTagsCommand(
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.AddTags";
  let body: any = {};
  const wrappedBody: any = {
    AddTagsInput: serializeAws_json1_1AddTagsInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/AddTags",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateBatchPredictionCommand(
  input: CreateBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.CreateBatchPrediction";
  let body: any = {};
  const wrappedBody: any = {
    CreateBatchPredictionInput: serializeAws_json1_1CreateBatchPredictionInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateBatchPrediction",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateDataSourceFromRDSCommand(
  input: CreateDataSourceFromRDSCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.CreateDataSourceFromRDS";
  let body: any = {};
  const wrappedBody: any = {
    CreateDataSourceFromRDSInput: serializeAws_json1_1CreateDataSourceFromRDSInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateDataSourceFromRDS",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateDataSourceFromRedshiftCommand(
  input: CreateDataSourceFromRedshiftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.CreateDataSourceFromRedshift";
  let body: any = {};
  const wrappedBody: any = {
    CreateDataSourceFromRedshiftInput: serializeAws_json1_1CreateDataSourceFromRedshiftInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateDataSourceFromRedshift",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateDataSourceFromS3Command(
  input: CreateDataSourceFromS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.CreateDataSourceFromS3";
  let body: any = {};
  const wrappedBody: any = {
    CreateDataSourceFromS3Input: serializeAws_json1_1CreateDataSourceFromS3Input(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateDataSourceFromS3",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateEvaluationCommand(
  input: CreateEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.CreateEvaluation";
  let body: any = {};
  const wrappedBody: any = {
    CreateEvaluationInput: serializeAws_json1_1CreateEvaluationInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateEvaluation",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateMLModelCommand(
  input: CreateMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.CreateMLModel";
  let body: any = {};
  const wrappedBody: any = {
    CreateMLModelInput: serializeAws_json1_1CreateMLModelInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateMLModel",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateRealtimeEndpointCommand(
  input: CreateRealtimeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.CreateRealtimeEndpoint";
  let body: any = {};
  const wrappedBody: any = {
    CreateRealtimeEndpointInput: serializeAws_json1_1CreateRealtimeEndpointInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateRealtimeEndpoint",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteBatchPredictionCommand(
  input: DeleteBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.DeleteBatchPrediction";
  let body: any = {};
  const wrappedBody: any = {
    DeleteBatchPredictionInput: serializeAws_json1_1DeleteBatchPredictionInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteBatchPrediction",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteDataSourceCommand(
  input: DeleteDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.DeleteDataSource";
  let body: any = {};
  const wrappedBody: any = {
    DeleteDataSourceInput: serializeAws_json1_1DeleteDataSourceInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteDataSource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteEvaluationCommand(
  input: DeleteEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.DeleteEvaluation";
  let body: any = {};
  const wrappedBody: any = {
    DeleteEvaluationInput: serializeAws_json1_1DeleteEvaluationInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteEvaluation",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteMLModelCommand(
  input: DeleteMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.DeleteMLModel";
  let body: any = {};
  const wrappedBody: any = {
    DeleteMLModelInput: serializeAws_json1_1DeleteMLModelInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteMLModel",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteRealtimeEndpointCommand(
  input: DeleteRealtimeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.DeleteRealtimeEndpoint";
  let body: any = {};
  const wrappedBody: any = {
    DeleteRealtimeEndpointInput: serializeAws_json1_1DeleteRealtimeEndpointInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteRealtimeEndpoint",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteTagsCommand(
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.DeleteTags";
  let body: any = {};
  const wrappedBody: any = {
    DeleteTagsInput: serializeAws_json1_1DeleteTagsInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteTags",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeBatchPredictionsCommand(
  input: DescribeBatchPredictionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.DescribeBatchPredictions";
  let body: any = {};
  const wrappedBody: any = {
    DescribeBatchPredictionsInput: serializeAws_json1_1DescribeBatchPredictionsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeBatchPredictions",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeDataSourcesCommand(
  input: DescribeDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.DescribeDataSources";
  let body: any = {};
  const wrappedBody: any = {
    DescribeDataSourcesInput: serializeAws_json1_1DescribeDataSourcesInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeDataSources",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeEvaluationsCommand(
  input: DescribeEvaluationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.DescribeEvaluations";
  let body: any = {};
  const wrappedBody: any = {
    DescribeEvaluationsInput: serializeAws_json1_1DescribeEvaluationsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeEvaluations",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeMLModelsCommand(
  input: DescribeMLModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.DescribeMLModels";
  let body: any = {};
  const wrappedBody: any = {
    DescribeMLModelsInput: serializeAws_json1_1DescribeMLModelsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeMLModels",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeTagsCommand(
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.DescribeTags";
  let body: any = {};
  const wrappedBody: any = {
    DescribeTagsInput: serializeAws_json1_1DescribeTagsInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeTags",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetBatchPredictionCommand(
  input: GetBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.GetBatchPrediction";
  let body: any = {};
  const wrappedBody: any = {
    GetBatchPredictionInput: serializeAws_json1_1GetBatchPredictionInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetBatchPrediction",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetDataSourceCommand(
  input: GetDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.GetDataSource";
  let body: any = {};
  const wrappedBody: any = {
    GetDataSourceInput: serializeAws_json1_1GetDataSourceInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetDataSource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetEvaluationCommand(
  input: GetEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.GetEvaluation";
  let body: any = {};
  const wrappedBody: any = {
    GetEvaluationInput: serializeAws_json1_1GetEvaluationInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetEvaluation",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetMLModelCommand(
  input: GetMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.GetMLModel";
  let body: any = {};
  const wrappedBody: any = {
    GetMLModelInput: serializeAws_json1_1GetMLModelInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetMLModel",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PredictCommand(
  input: PredictCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.Predict";
  let body: any = {};
  const wrappedBody: any = {
    PredictInput: serializeAws_json1_1PredictInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/Predict",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateBatchPredictionCommand(
  input: UpdateBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.UpdateBatchPrediction";
  let body: any = {};
  const wrappedBody: any = {
    UpdateBatchPredictionInput: serializeAws_json1_1UpdateBatchPredictionInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateBatchPrediction",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateDataSourceCommand(
  input: UpdateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.UpdateDataSource";
  let body: any = {};
  const wrappedBody: any = {
    UpdateDataSourceInput: serializeAws_json1_1UpdateDataSourceInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateDataSource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateEvaluationCommand(
  input: UpdateEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.UpdateEvaluation";
  let body: any = {};
  const wrappedBody: any = {
    UpdateEvaluationInput: serializeAws_json1_1UpdateEvaluationInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateEvaluation",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateMLModelCommand(
  input: UpdateMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonML_20141212.UpdateMLModel";
  let body: any = {};
  const wrappedBody: any = {
    UpdateMLModelInput: serializeAws_json1_1UpdateMLModelInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateMLModel",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1AddTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddTagsOutput(data.AddTagsOutput, context);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddTagsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AddTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagException":
    case "com.amazon.eml.v20141212#InvalidTagException":
      response = await deserializeAws_json1_1InvalidTagExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.eml.v20141212#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TagLimitExceededException":
    case "com.amazon.eml.v20141212#TagLimitExceededException":
      response = await deserializeAws_json1_1TagLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateBatchPredictionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchPredictionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateBatchPredictionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBatchPredictionOutput(
    data.CreateBatchPredictionOutput,
    context
  );
  const response: CreateBatchPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateBatchPredictionOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateBatchPredictionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchPredictionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazon.eml.v20141212#IdempotentParameterMismatchException":
      response = await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateDataSourceFromRDSCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromRDSCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDataSourceFromRDSCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDataSourceFromRDSOutput(
    data.CreateDataSourceFromRDSOutput,
    context
  );
  const response: CreateDataSourceFromRDSCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDataSourceFromRDSOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateDataSourceFromRDSCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromRDSCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazon.eml.v20141212#IdempotentParameterMismatchException":
      response = await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateDataSourceFromRedshiftCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromRedshiftCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDataSourceFromRedshiftCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDataSourceFromRedshiftOutput(
    data.CreateDataSourceFromRedshiftOutput,
    context
  );
  const response: CreateDataSourceFromRedshiftCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDataSourceFromRedshiftOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateDataSourceFromRedshiftCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromRedshiftCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazon.eml.v20141212#IdempotentParameterMismatchException":
      response = await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateDataSourceFromS3Command(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromS3CommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDataSourceFromS3CommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDataSourceFromS3Output(
    data.CreateDataSourceFromS3Output,
    context
  );
  const response: CreateDataSourceFromS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDataSourceFromS3Output",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateDataSourceFromS3CommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromS3CommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazon.eml.v20141212#IdempotentParameterMismatchException":
      response = await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateEvaluationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEvaluationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEvaluationOutput(
    data.CreateEvaluationOutput,
    context
  );
  const response: CreateEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateEvaluationOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateEvaluationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEvaluationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazon.eml.v20141212#IdempotentParameterMismatchException":
      response = await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateMLModelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMLModelCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateMLModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateMLModelOutput(
    data.CreateMLModelOutput,
    context
  );
  const response: CreateMLModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateMLModelOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateMLModelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMLModelCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazon.eml.v20141212#IdempotentParameterMismatchException":
      response = await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateRealtimeEndpointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRealtimeEndpointCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateRealtimeEndpointCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRealtimeEndpointOutput(
    data.CreateRealtimeEndpointOutput,
    context
  );
  const response: CreateRealtimeEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRealtimeEndpointOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateRealtimeEndpointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRealtimeEndpointCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.eml.v20141212#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteBatchPredictionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBatchPredictionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteBatchPredictionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBatchPredictionOutput(
    data.DeleteBatchPredictionOutput,
    context
  );
  const response: DeleteBatchPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteBatchPredictionOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteBatchPredictionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBatchPredictionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.eml.v20141212#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteDataSourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDataSourceOutput(
    data.DeleteDataSourceOutput,
    context
  );
  const response: DeleteDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDataSourceOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteDataSourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.eml.v20141212#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteEvaluationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEvaluationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEvaluationOutput(
    data.DeleteEvaluationOutput,
    context
  );
  const response: DeleteEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteEvaluationOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteEvaluationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEvaluationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.eml.v20141212#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteMLModelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMLModelCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteMLModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteMLModelOutput(
    data.DeleteMLModelOutput,
    context
  );
  const response: DeleteMLModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteMLModelOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteMLModelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMLModelCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.eml.v20141212#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteRealtimeEndpointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRealtimeEndpointCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteRealtimeEndpointCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRealtimeEndpointOutput(
    data.DeleteRealtimeEndpointOutput,
    context
  );
  const response: DeleteRealtimeEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRealtimeEndpointOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteRealtimeEndpointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRealtimeEndpointCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.eml.v20141212#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTagsOutput(
    data.DeleteTagsOutput,
    context
  );
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteTagsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagException":
    case "com.amazon.eml.v20141212#InvalidTagException":
      response = await deserializeAws_json1_1InvalidTagExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.eml.v20141212#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeBatchPredictionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBatchPredictionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeBatchPredictionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBatchPredictionsOutput(
    data.DescribeBatchPredictionsOutput,
    context
  );
  const response: DescribeBatchPredictionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeBatchPredictionsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeBatchPredictionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBatchPredictionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeDataSourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDataSourcesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDataSourcesOutput(
    data.DescribeDataSourcesOutput,
    context
  );
  const response: DescribeDataSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDataSourcesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeDataSourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourcesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeEvaluationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEvaluationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEvaluationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEvaluationsOutput(
    data.DescribeEvaluationsOutput,
    context
  );
  const response: DescribeEvaluationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEvaluationsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeEvaluationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEvaluationsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeMLModelsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMLModelsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeMLModelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMLModelsOutput(
    data.DescribeMLModelsOutput,
    context
  );
  const response: DescribeMLModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeMLModelsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeMLModelsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMLModelsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTagsOutput(
    data.DescribeTagsOutput,
    context
  );
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTagsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.eml.v20141212#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetBatchPredictionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBatchPredictionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetBatchPredictionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBatchPredictionOutput(
    data.GetBatchPredictionOutput,
    context
  );
  const response: GetBatchPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBatchPredictionOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetBatchPredictionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBatchPredictionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.eml.v20141212#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetDataSourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDataSourceOutput(
    data.GetDataSourceOutput,
    context
  );
  const response: GetDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDataSourceOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDataSourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.eml.v20141212#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetEvaluationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvaluationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetEvaluationOutput(
    data.GetEvaluationOutput,
    context
  );
  const response: GetEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEvaluationOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetEvaluationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvaluationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.eml.v20141212#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetMLModelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLModelCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetMLModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMLModelOutput(
    data.GetMLModelOutput,
    context
  );
  const response: GetMLModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMLModelOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetMLModelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLModelCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.eml.v20141212#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PredictCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PredictCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PredictCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PredictOutput(data.PredictOutput, context);
  const response: PredictCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PredictOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PredictCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PredictCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.eml.v20141212#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PredictorNotMountedException":
    case "com.amazon.eml.v20141212#PredictorNotMountedException":
      response = await deserializeAws_json1_1PredictorNotMountedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.eml.v20141212#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateBatchPredictionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBatchPredictionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateBatchPredictionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateBatchPredictionOutput(
    data.UpdateBatchPredictionOutput,
    context
  );
  const response: UpdateBatchPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateBatchPredictionOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateBatchPredictionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBatchPredictionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.eml.v20141212#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateDataSourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDataSourceOutput(
    data.UpdateDataSourceOutput,
    context
  );
  const response: UpdateDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDataSourceOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateDataSourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.eml.v20141212#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateEvaluationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEvaluationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateEvaluationOutput(
    data.UpdateEvaluationOutput,
    context
  );
  const response: UpdateEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateEvaluationOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateEvaluationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEvaluationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.eml.v20141212#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateMLModelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMLModelCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateMLModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateMLModelOutput(
    data.UpdateMLModelOutput,
    context
  );
  const response: UpdateMLModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateMLModelOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateMLModelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMLModelCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazon.eml.v20141212#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.eml.v20141212#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.eml.v20141212#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.eml.v20141212#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const deserialized: any = deserializeAws_json1_1IdempotentParameterMismatchException(
    output.body,
    context
  );
  const contents: IdempotentParameterMismatchException = {
    __type: "IdempotentParameterMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const deserialized: any = deserializeAws_json1_1InternalServerException(
    output.body,
    context
  );
  const contents: InternalServerException = {
    __type: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const deserialized: any = deserializeAws_json1_1InvalidInputException(
    output.body,
    context
  );
  const contents: InvalidInputException = {
    __type: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTagException> => {
  const deserialized: any = deserializeAws_json1_1InvalidTagException(
    output.body,
    context
  );
  const contents: InvalidTagException = {
    __type: "InvalidTagException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    output.body,
    context
  );
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PredictorNotMountedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<PredictorNotMountedException> => {
  const deserialized: any = deserializeAws_json1_1PredictorNotMountedException(
    output.body,
    context
  );
  const contents: PredictorNotMountedException = {
    __type: "PredictorNotMountedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    output.body,
    context
  );
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TagLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TagLimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1TagLimitExceededException(
    output.body,
    context
  );
  const contents: TagLimitExceededException = {
    __type: "TagLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AddTagsInput = (
  input: AddTagsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.ResourceType !== undefined) {
    bodyParams["ResourceType"] = input.ResourceType;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateBatchPredictionInput = (
  input: CreateBatchPredictionInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BatchPredictionDataSourceId !== undefined) {
    bodyParams["BatchPredictionDataSourceId"] =
      input.BatchPredictionDataSourceId;
  }
  if (input.BatchPredictionId !== undefined) {
    bodyParams["BatchPredictionId"] = input.BatchPredictionId;
  }
  if (input.BatchPredictionName !== undefined) {
    bodyParams["BatchPredictionName"] = input.BatchPredictionName;
  }
  if (input.MLModelId !== undefined) {
    bodyParams["MLModelId"] = input.MLModelId;
  }
  if (input.OutputUri !== undefined) {
    bodyParams["OutputUri"] = input.OutputUri;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDataSourceFromRDSInput = (
  input: CreateDataSourceFromRDSInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ComputeStatistics !== undefined) {
    bodyParams["ComputeStatistics"] = input.ComputeStatistics;
  }
  if (input.DataSourceId !== undefined) {
    bodyParams["DataSourceId"] = input.DataSourceId;
  }
  if (input.DataSourceName !== undefined) {
    bodyParams["DataSourceName"] = input.DataSourceName;
  }
  if (input.RDSData !== undefined) {
    bodyParams["RDSData"] = serializeAws_json1_1RDSDataSpec(
      input.RDSData,
      context
    );
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDataSourceFromRedshiftInput = (
  input: CreateDataSourceFromRedshiftInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ComputeStatistics !== undefined) {
    bodyParams["ComputeStatistics"] = input.ComputeStatistics;
  }
  if (input.DataSourceId !== undefined) {
    bodyParams["DataSourceId"] = input.DataSourceId;
  }
  if (input.DataSourceName !== undefined) {
    bodyParams["DataSourceName"] = input.DataSourceName;
  }
  if (input.DataSpec !== undefined) {
    bodyParams["DataSpec"] = serializeAws_json1_1RedshiftDataSpec(
      input.DataSpec,
      context
    );
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDataSourceFromS3Input = (
  input: CreateDataSourceFromS3Input,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ComputeStatistics !== undefined) {
    bodyParams["ComputeStatistics"] = input.ComputeStatistics;
  }
  if (input.DataSourceId !== undefined) {
    bodyParams["DataSourceId"] = input.DataSourceId;
  }
  if (input.DataSourceName !== undefined) {
    bodyParams["DataSourceName"] = input.DataSourceName;
  }
  if (input.DataSpec !== undefined) {
    bodyParams["DataSpec"] = serializeAws_json1_1S3DataSpec(
      input.DataSpec,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateEvaluationInput = (
  input: CreateEvaluationInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EvaluationDataSourceId !== undefined) {
    bodyParams["EvaluationDataSourceId"] = input.EvaluationDataSourceId;
  }
  if (input.EvaluationId !== undefined) {
    bodyParams["EvaluationId"] = input.EvaluationId;
  }
  if (input.EvaluationName !== undefined) {
    bodyParams["EvaluationName"] = input.EvaluationName;
  }
  if (input.MLModelId !== undefined) {
    bodyParams["MLModelId"] = input.MLModelId;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateMLModelInput = (
  input: CreateMLModelInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MLModelId !== undefined) {
    bodyParams["MLModelId"] = input.MLModelId;
  }
  if (input.MLModelName !== undefined) {
    bodyParams["MLModelName"] = input.MLModelName;
  }
  if (input.MLModelType !== undefined) {
    bodyParams["MLModelType"] = input.MLModelType;
  }
  if (input.Parameters !== undefined) {
    bodyParams["Parameters"] = serializeAws_json1_1TrainingParameters(
      input.Parameters,
      context
    );
  }
  if (input.Recipe !== undefined) {
    bodyParams["Recipe"] = input.Recipe;
  }
  if (input.RecipeUri !== undefined) {
    bodyParams["RecipeUri"] = input.RecipeUri;
  }
  if (input.TrainingDataSourceId !== undefined) {
    bodyParams["TrainingDataSourceId"] = input.TrainingDataSourceId;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateRealtimeEndpointInput = (
  input: CreateRealtimeEndpointInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MLModelId !== undefined) {
    bodyParams["MLModelId"] = input.MLModelId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteBatchPredictionInput = (
  input: DeleteBatchPredictionInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BatchPredictionId !== undefined) {
    bodyParams["BatchPredictionId"] = input.BatchPredictionId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDataSourceInput = (
  input: DeleteDataSourceInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DataSourceId !== undefined) {
    bodyParams["DataSourceId"] = input.DataSourceId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteEvaluationInput = (
  input: DeleteEvaluationInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EvaluationId !== undefined) {
    bodyParams["EvaluationId"] = input.EvaluationId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteMLModelInput = (
  input: DeleteMLModelInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MLModelId !== undefined) {
    bodyParams["MLModelId"] = input.MLModelId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteRealtimeEndpointInput = (
  input: DeleteRealtimeEndpointInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MLModelId !== undefined) {
    bodyParams["MLModelId"] = input.MLModelId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteTagsInput = (
  input: DeleteTagsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.ResourceType !== undefined) {
    bodyParams["ResourceType"] = input.ResourceType;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeBatchPredictionsInput = (
  input: DescribeBatchPredictionsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EQ !== undefined) {
    bodyParams["EQ"] = input.EQ;
  }
  if (input.FilterVariable !== undefined) {
    bodyParams["FilterVariable"] = input.FilterVariable;
  }
  if (input.GE !== undefined) {
    bodyParams["GE"] = input.GE;
  }
  if (input.GT !== undefined) {
    bodyParams["GT"] = input.GT;
  }
  if (input.LE !== undefined) {
    bodyParams["LE"] = input.LE;
  }
  if (input.LT !== undefined) {
    bodyParams["LT"] = input.LT;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NE !== undefined) {
    bodyParams["NE"] = input.NE;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.Prefix !== undefined) {
    bodyParams["Prefix"] = input.Prefix;
  }
  if (input.SortOrder !== undefined) {
    bodyParams["SortOrder"] = input.SortOrder;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeDataSourcesInput = (
  input: DescribeDataSourcesInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EQ !== undefined) {
    bodyParams["EQ"] = input.EQ;
  }
  if (input.FilterVariable !== undefined) {
    bodyParams["FilterVariable"] = input.FilterVariable;
  }
  if (input.GE !== undefined) {
    bodyParams["GE"] = input.GE;
  }
  if (input.GT !== undefined) {
    bodyParams["GT"] = input.GT;
  }
  if (input.LE !== undefined) {
    bodyParams["LE"] = input.LE;
  }
  if (input.LT !== undefined) {
    bodyParams["LT"] = input.LT;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NE !== undefined) {
    bodyParams["NE"] = input.NE;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.Prefix !== undefined) {
    bodyParams["Prefix"] = input.Prefix;
  }
  if (input.SortOrder !== undefined) {
    bodyParams["SortOrder"] = input.SortOrder;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeEvaluationsInput = (
  input: DescribeEvaluationsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EQ !== undefined) {
    bodyParams["EQ"] = input.EQ;
  }
  if (input.FilterVariable !== undefined) {
    bodyParams["FilterVariable"] = input.FilterVariable;
  }
  if (input.GE !== undefined) {
    bodyParams["GE"] = input.GE;
  }
  if (input.GT !== undefined) {
    bodyParams["GT"] = input.GT;
  }
  if (input.LE !== undefined) {
    bodyParams["LE"] = input.LE;
  }
  if (input.LT !== undefined) {
    bodyParams["LT"] = input.LT;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NE !== undefined) {
    bodyParams["NE"] = input.NE;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.Prefix !== undefined) {
    bodyParams["Prefix"] = input.Prefix;
  }
  if (input.SortOrder !== undefined) {
    bodyParams["SortOrder"] = input.SortOrder;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeMLModelsInput = (
  input: DescribeMLModelsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EQ !== undefined) {
    bodyParams["EQ"] = input.EQ;
  }
  if (input.FilterVariable !== undefined) {
    bodyParams["FilterVariable"] = input.FilterVariable;
  }
  if (input.GE !== undefined) {
    bodyParams["GE"] = input.GE;
  }
  if (input.GT !== undefined) {
    bodyParams["GT"] = input.GT;
  }
  if (input.LE !== undefined) {
    bodyParams["LE"] = input.LE;
  }
  if (input.LT !== undefined) {
    bodyParams["LT"] = input.LT;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NE !== undefined) {
    bodyParams["NE"] = input.NE;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.Prefix !== undefined) {
    bodyParams["Prefix"] = input.Prefix;
  }
  if (input.SortOrder !== undefined) {
    bodyParams["SortOrder"] = input.SortOrder;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeTagsInput = (
  input: DescribeTagsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.ResourceType !== undefined) {
    bodyParams["ResourceType"] = input.ResourceType;
  }
  return bodyParams;
};

const serializeAws_json1_1EDPSecurityGroupIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1GetBatchPredictionInput = (
  input: GetBatchPredictionInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BatchPredictionId !== undefined) {
    bodyParams["BatchPredictionId"] = input.BatchPredictionId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDataSourceInput = (
  input: GetDataSourceInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DataSourceId !== undefined) {
    bodyParams["DataSourceId"] = input.DataSourceId;
  }
  if (input.Verbose !== undefined) {
    bodyParams["Verbose"] = input.Verbose;
  }
  return bodyParams;
};

const serializeAws_json1_1GetEvaluationInput = (
  input: GetEvaluationInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EvaluationId !== undefined) {
    bodyParams["EvaluationId"] = input.EvaluationId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetMLModelInput = (
  input: GetMLModelInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MLModelId !== undefined) {
    bodyParams["MLModelId"] = input.MLModelId;
  }
  if (input.Verbose !== undefined) {
    bodyParams["Verbose"] = input.Verbose;
  }
  return bodyParams;
};

const serializeAws_json1_1PredictInput = (
  input: PredictInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MLModelId !== undefined) {
    bodyParams["MLModelId"] = input.MLModelId;
  }
  if (input.PredictEndpoint !== undefined) {
    bodyParams["PredictEndpoint"] = input.PredictEndpoint;
  }
  if (input.Record !== undefined) {
    bodyParams["Record"] = serializeAws_json1_1Record(input.Record, context);
  }
  return bodyParams;
};

const serializeAws_json1_1RDSDataSpec = (
  input: RDSDataSpec,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DataRearrangement !== undefined) {
    bodyParams["DataRearrangement"] = input.DataRearrangement;
  }
  if (input.DataSchema !== undefined) {
    bodyParams["DataSchema"] = input.DataSchema;
  }
  if (input.DataSchemaUri !== undefined) {
    bodyParams["DataSchemaUri"] = input.DataSchemaUri;
  }
  if (input.DatabaseCredentials !== undefined) {
    bodyParams[
      "DatabaseCredentials"
    ] = serializeAws_json1_1RDSDatabaseCredentials(
      input.DatabaseCredentials,
      context
    );
  }
  if (input.DatabaseInformation !== undefined) {
    bodyParams["DatabaseInformation"] = serializeAws_json1_1RDSDatabase(
      input.DatabaseInformation,
      context
    );
  }
  if (input.ResourceRole !== undefined) {
    bodyParams["ResourceRole"] = input.ResourceRole;
  }
  if (input.S3StagingLocation !== undefined) {
    bodyParams["S3StagingLocation"] = input.S3StagingLocation;
  }
  if (input.SecurityGroupIds !== undefined) {
    bodyParams["SecurityGroupIds"] = serializeAws_json1_1EDPSecurityGroupIds(
      input.SecurityGroupIds,
      context
    );
  }
  if (input.SelectSqlQuery !== undefined) {
    bodyParams["SelectSqlQuery"] = input.SelectSqlQuery;
  }
  if (input.ServiceRole !== undefined) {
    bodyParams["ServiceRole"] = input.ServiceRole;
  }
  if (input.SubnetId !== undefined) {
    bodyParams["SubnetId"] = input.SubnetId;
  }
  return bodyParams;
};

const serializeAws_json1_1RDSDatabase = (
  input: RDSDatabase,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DatabaseName !== undefined) {
    bodyParams["DatabaseName"] = input.DatabaseName;
  }
  if (input.InstanceIdentifier !== undefined) {
    bodyParams["InstanceIdentifier"] = input.InstanceIdentifier;
  }
  return bodyParams;
};

const serializeAws_json1_1RDSDatabaseCredentials = (
  input: RDSDatabaseCredentials,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Password !== undefined) {
    bodyParams["Password"] = input.Password;
  }
  if (input.Username !== undefined) {
    bodyParams["Username"] = input.Username;
  }
  return bodyParams;
};

const serializeAws_json1_1Record = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1RedshiftDataSpec = (
  input: RedshiftDataSpec,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DataRearrangement !== undefined) {
    bodyParams["DataRearrangement"] = input.DataRearrangement;
  }
  if (input.DataSchema !== undefined) {
    bodyParams["DataSchema"] = input.DataSchema;
  }
  if (input.DataSchemaUri !== undefined) {
    bodyParams["DataSchemaUri"] = input.DataSchemaUri;
  }
  if (input.DatabaseCredentials !== undefined) {
    bodyParams[
      "DatabaseCredentials"
    ] = serializeAws_json1_1RedshiftDatabaseCredentials(
      input.DatabaseCredentials,
      context
    );
  }
  if (input.DatabaseInformation !== undefined) {
    bodyParams["DatabaseInformation"] = serializeAws_json1_1RedshiftDatabase(
      input.DatabaseInformation,
      context
    );
  }
  if (input.S3StagingLocation !== undefined) {
    bodyParams["S3StagingLocation"] = input.S3StagingLocation;
  }
  if (input.SelectSqlQuery !== undefined) {
    bodyParams["SelectSqlQuery"] = input.SelectSqlQuery;
  }
  return bodyParams;
};

const serializeAws_json1_1RedshiftDatabase = (
  input: RedshiftDatabase,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClusterIdentifier !== undefined) {
    bodyParams["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.DatabaseName !== undefined) {
    bodyParams["DatabaseName"] = input.DatabaseName;
  }
  return bodyParams;
};

const serializeAws_json1_1RedshiftDatabaseCredentials = (
  input: RedshiftDatabaseCredentials,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Password !== undefined) {
    bodyParams["Password"] = input.Password;
  }
  if (input.Username !== undefined) {
    bodyParams["Username"] = input.Username;
  }
  return bodyParams;
};

const serializeAws_json1_1S3DataSpec = (
  input: S3DataSpec,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DataLocationS3 !== undefined) {
    bodyParams["DataLocationS3"] = input.DataLocationS3;
  }
  if (input.DataRearrangement !== undefined) {
    bodyParams["DataRearrangement"] = input.DataRearrangement;
  }
  if (input.DataSchema !== undefined) {
    bodyParams["DataSchema"] = input.DataSchema;
  }
  if (input.DataSchemaLocationS3 !== undefined) {
    bodyParams["DataSchemaLocationS3"] = input.DataSchemaLocationS3;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TrainingParameters = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1UpdateBatchPredictionInput = (
  input: UpdateBatchPredictionInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BatchPredictionId !== undefined) {
    bodyParams["BatchPredictionId"] = input.BatchPredictionId;
  }
  if (input.BatchPredictionName !== undefined) {
    bodyParams["BatchPredictionName"] = input.BatchPredictionName;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateDataSourceInput = (
  input: UpdateDataSourceInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DataSourceId !== undefined) {
    bodyParams["DataSourceId"] = input.DataSourceId;
  }
  if (input.DataSourceName !== undefined) {
    bodyParams["DataSourceName"] = input.DataSourceName;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateEvaluationInput = (
  input: UpdateEvaluationInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EvaluationId !== undefined) {
    bodyParams["EvaluationId"] = input.EvaluationId;
  }
  if (input.EvaluationName !== undefined) {
    bodyParams["EvaluationName"] = input.EvaluationName;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateMLModelInput = (
  input: UpdateMLModelInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MLModelId !== undefined) {
    bodyParams["MLModelId"] = input.MLModelId;
  }
  if (input.MLModelName !== undefined) {
    bodyParams["MLModelName"] = input.MLModelName;
  }
  if (input.ScoreThreshold !== undefined) {
    bodyParams["ScoreThreshold"] = input.ScoreThreshold;
  }
  return bodyParams;
};

const deserializeAws_json1_1AddTagsOutput = (
  output: any,
  context: __SerdeContext
): AddTagsOutput => {
  let contents: any = {
    __type: "AddTagsOutput",
    ResourceId: undefined,
    ResourceType: undefined
  };
  if (output.ResourceId !== undefined) {
    contents.ResourceId = output.ResourceId;
  }
  if (output.ResourceType !== undefined) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1BatchPrediction = (
  output: any,
  context: __SerdeContext
): BatchPrediction => {
  let contents: any = {
    __type: "BatchPrediction",
    BatchPredictionDataSourceId: undefined,
    BatchPredictionId: undefined,
    ComputeTime: undefined,
    CreatedAt: undefined,
    CreatedByIamUser: undefined,
    FinishedAt: undefined,
    InputDataLocationS3: undefined,
    InvalidRecordCount: undefined,
    LastUpdatedAt: undefined,
    MLModelId: undefined,
    Message: undefined,
    Name: undefined,
    OutputUri: undefined,
    StartedAt: undefined,
    Status: undefined,
    TotalRecordCount: undefined
  };
  if (output.BatchPredictionDataSourceId !== undefined) {
    contents.BatchPredictionDataSourceId = output.BatchPredictionDataSourceId;
  }
  if (output.BatchPredictionId !== undefined) {
    contents.BatchPredictionId = output.BatchPredictionId;
  }
  if (output.ComputeTime !== undefined) {
    contents.ComputeTime = output.ComputeTime;
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(
      output.CreatedAt % 1 != 0
        ? Math.round(output.CreatedAt * 1000)
        : output.CreatedAt
    );
  }
  if (output.CreatedByIamUser !== undefined) {
    contents.CreatedByIamUser = output.CreatedByIamUser;
  }
  if (output.FinishedAt !== undefined) {
    contents.FinishedAt = new Date(
      output.FinishedAt % 1 != 0
        ? Math.round(output.FinishedAt * 1000)
        : output.FinishedAt
    );
  }
  if (output.InputDataLocationS3 !== undefined) {
    contents.InputDataLocationS3 = output.InputDataLocationS3;
  }
  if (output.InvalidRecordCount !== undefined) {
    contents.InvalidRecordCount = output.InvalidRecordCount;
  }
  if (output.LastUpdatedAt !== undefined) {
    contents.LastUpdatedAt = new Date(
      output.LastUpdatedAt % 1 != 0
        ? Math.round(output.LastUpdatedAt * 1000)
        : output.LastUpdatedAt
    );
  }
  if (output.MLModelId !== undefined) {
    contents.MLModelId = output.MLModelId;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.OutputUri !== undefined) {
    contents.OutputUri = output.OutputUri;
  }
  if (output.StartedAt !== undefined) {
    contents.StartedAt = new Date(
      output.StartedAt % 1 != 0
        ? Math.round(output.StartedAt * 1000)
        : output.StartedAt
    );
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.TotalRecordCount !== undefined) {
    contents.TotalRecordCount = output.TotalRecordCount;
  }
  return contents;
};

const deserializeAws_json1_1BatchPredictions = (
  output: any,
  context: __SerdeContext
): Array<BatchPrediction> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BatchPrediction(entry, context)
  );
};

const deserializeAws_json1_1CreateBatchPredictionOutput = (
  output: any,
  context: __SerdeContext
): CreateBatchPredictionOutput => {
  let contents: any = {
    __type: "CreateBatchPredictionOutput",
    BatchPredictionId: undefined
  };
  if (output.BatchPredictionId !== undefined) {
    contents.BatchPredictionId = output.BatchPredictionId;
  }
  return contents;
};

const deserializeAws_json1_1CreateDataSourceFromRDSOutput = (
  output: any,
  context: __SerdeContext
): CreateDataSourceFromRDSOutput => {
  let contents: any = {
    __type: "CreateDataSourceFromRDSOutput",
    DataSourceId: undefined
  };
  if (output.DataSourceId !== undefined) {
    contents.DataSourceId = output.DataSourceId;
  }
  return contents;
};

const deserializeAws_json1_1CreateDataSourceFromRedshiftOutput = (
  output: any,
  context: __SerdeContext
): CreateDataSourceFromRedshiftOutput => {
  let contents: any = {
    __type: "CreateDataSourceFromRedshiftOutput",
    DataSourceId: undefined
  };
  if (output.DataSourceId !== undefined) {
    contents.DataSourceId = output.DataSourceId;
  }
  return contents;
};

const deserializeAws_json1_1CreateDataSourceFromS3Output = (
  output: any,
  context: __SerdeContext
): CreateDataSourceFromS3Output => {
  let contents: any = {
    __type: "CreateDataSourceFromS3Output",
    DataSourceId: undefined
  };
  if (output.DataSourceId !== undefined) {
    contents.DataSourceId = output.DataSourceId;
  }
  return contents;
};

const deserializeAws_json1_1CreateEvaluationOutput = (
  output: any,
  context: __SerdeContext
): CreateEvaluationOutput => {
  let contents: any = {
    __type: "CreateEvaluationOutput",
    EvaluationId: undefined
  };
  if (output.EvaluationId !== undefined) {
    contents.EvaluationId = output.EvaluationId;
  }
  return contents;
};

const deserializeAws_json1_1CreateMLModelOutput = (
  output: any,
  context: __SerdeContext
): CreateMLModelOutput => {
  let contents: any = {
    __type: "CreateMLModelOutput",
    MLModelId: undefined
  };
  if (output.MLModelId !== undefined) {
    contents.MLModelId = output.MLModelId;
  }
  return contents;
};

const deserializeAws_json1_1CreateRealtimeEndpointOutput = (
  output: any,
  context: __SerdeContext
): CreateRealtimeEndpointOutput => {
  let contents: any = {
    __type: "CreateRealtimeEndpointOutput",
    MLModelId: undefined,
    RealtimeEndpointInfo: undefined
  };
  if (output.MLModelId !== undefined) {
    contents.MLModelId = output.MLModelId;
  }
  if (output.RealtimeEndpointInfo !== undefined) {
    contents.RealtimeEndpointInfo = deserializeAws_json1_1RealtimeEndpointInfo(
      output.RealtimeEndpointInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DataSource = (
  output: any,
  context: __SerdeContext
): DataSource => {
  let contents: any = {
    __type: "DataSource",
    ComputeStatistics: undefined,
    ComputeTime: undefined,
    CreatedAt: undefined,
    CreatedByIamUser: undefined,
    DataLocationS3: undefined,
    DataRearrangement: undefined,
    DataSizeInBytes: undefined,
    DataSourceId: undefined,
    FinishedAt: undefined,
    LastUpdatedAt: undefined,
    Message: undefined,
    Name: undefined,
    NumberOfFiles: undefined,
    RDSMetadata: undefined,
    RedshiftMetadata: undefined,
    RoleARN: undefined,
    StartedAt: undefined,
    Status: undefined
  };
  if (output.ComputeStatistics !== undefined) {
    contents.ComputeStatistics = output.ComputeStatistics;
  }
  if (output.ComputeTime !== undefined) {
    contents.ComputeTime = output.ComputeTime;
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(
      output.CreatedAt % 1 != 0
        ? Math.round(output.CreatedAt * 1000)
        : output.CreatedAt
    );
  }
  if (output.CreatedByIamUser !== undefined) {
    contents.CreatedByIamUser = output.CreatedByIamUser;
  }
  if (output.DataLocationS3 !== undefined) {
    contents.DataLocationS3 = output.DataLocationS3;
  }
  if (output.DataRearrangement !== undefined) {
    contents.DataRearrangement = output.DataRearrangement;
  }
  if (output.DataSizeInBytes !== undefined) {
    contents.DataSizeInBytes = output.DataSizeInBytes;
  }
  if (output.DataSourceId !== undefined) {
    contents.DataSourceId = output.DataSourceId;
  }
  if (output.FinishedAt !== undefined) {
    contents.FinishedAt = new Date(
      output.FinishedAt % 1 != 0
        ? Math.round(output.FinishedAt * 1000)
        : output.FinishedAt
    );
  }
  if (output.LastUpdatedAt !== undefined) {
    contents.LastUpdatedAt = new Date(
      output.LastUpdatedAt % 1 != 0
        ? Math.round(output.LastUpdatedAt * 1000)
        : output.LastUpdatedAt
    );
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.NumberOfFiles !== undefined) {
    contents.NumberOfFiles = output.NumberOfFiles;
  }
  if (output.RDSMetadata !== undefined) {
    contents.RDSMetadata = deserializeAws_json1_1RDSMetadata(
      output.RDSMetadata,
      context
    );
  }
  if (output.RedshiftMetadata !== undefined) {
    contents.RedshiftMetadata = deserializeAws_json1_1RedshiftMetadata(
      output.RedshiftMetadata,
      context
    );
  }
  if (output.RoleARN !== undefined) {
    contents.RoleARN = output.RoleARN;
  }
  if (output.StartedAt !== undefined) {
    contents.StartedAt = new Date(
      output.StartedAt % 1 != 0
        ? Math.round(output.StartedAt * 1000)
        : output.StartedAt
    );
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1DataSources = (
  output: any,
  context: __SerdeContext
): Array<DataSource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DataSource(entry, context)
  );
};

const deserializeAws_json1_1DeleteBatchPredictionOutput = (
  output: any,
  context: __SerdeContext
): DeleteBatchPredictionOutput => {
  let contents: any = {
    __type: "DeleteBatchPredictionOutput",
    BatchPredictionId: undefined
  };
  if (output.BatchPredictionId !== undefined) {
    contents.BatchPredictionId = output.BatchPredictionId;
  }
  return contents;
};

const deserializeAws_json1_1DeleteDataSourceOutput = (
  output: any,
  context: __SerdeContext
): DeleteDataSourceOutput => {
  let contents: any = {
    __type: "DeleteDataSourceOutput",
    DataSourceId: undefined
  };
  if (output.DataSourceId !== undefined) {
    contents.DataSourceId = output.DataSourceId;
  }
  return contents;
};

const deserializeAws_json1_1DeleteEvaluationOutput = (
  output: any,
  context: __SerdeContext
): DeleteEvaluationOutput => {
  let contents: any = {
    __type: "DeleteEvaluationOutput",
    EvaluationId: undefined
  };
  if (output.EvaluationId !== undefined) {
    contents.EvaluationId = output.EvaluationId;
  }
  return contents;
};

const deserializeAws_json1_1DeleteMLModelOutput = (
  output: any,
  context: __SerdeContext
): DeleteMLModelOutput => {
  let contents: any = {
    __type: "DeleteMLModelOutput",
    MLModelId: undefined
  };
  if (output.MLModelId !== undefined) {
    contents.MLModelId = output.MLModelId;
  }
  return contents;
};

const deserializeAws_json1_1DeleteRealtimeEndpointOutput = (
  output: any,
  context: __SerdeContext
): DeleteRealtimeEndpointOutput => {
  let contents: any = {
    __type: "DeleteRealtimeEndpointOutput",
    MLModelId: undefined,
    RealtimeEndpointInfo: undefined
  };
  if (output.MLModelId !== undefined) {
    contents.MLModelId = output.MLModelId;
  }
  if (output.RealtimeEndpointInfo !== undefined) {
    contents.RealtimeEndpointInfo = deserializeAws_json1_1RealtimeEndpointInfo(
      output.RealtimeEndpointInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteTagsOutput = (
  output: any,
  context: __SerdeContext
): DeleteTagsOutput => {
  let contents: any = {
    __type: "DeleteTagsOutput",
    ResourceId: undefined,
    ResourceType: undefined
  };
  if (output.ResourceId !== undefined) {
    contents.ResourceId = output.ResourceId;
  }
  if (output.ResourceType !== undefined) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1DescribeBatchPredictionsOutput = (
  output: any,
  context: __SerdeContext
): DescribeBatchPredictionsOutput => {
  let contents: any = {
    __type: "DescribeBatchPredictionsOutput",
    NextToken: undefined,
    Results: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Results !== undefined) {
    contents.Results = deserializeAws_json1_1BatchPredictions(
      output.Results,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeDataSourcesOutput = (
  output: any,
  context: __SerdeContext
): DescribeDataSourcesOutput => {
  let contents: any = {
    __type: "DescribeDataSourcesOutput",
    NextToken: undefined,
    Results: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Results !== undefined) {
    contents.Results = deserializeAws_json1_1DataSources(
      output.Results,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeEvaluationsOutput = (
  output: any,
  context: __SerdeContext
): DescribeEvaluationsOutput => {
  let contents: any = {
    __type: "DescribeEvaluationsOutput",
    NextToken: undefined,
    Results: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Results !== undefined) {
    contents.Results = deserializeAws_json1_1Evaluations(
      output.Results,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeMLModelsOutput = (
  output: any,
  context: __SerdeContext
): DescribeMLModelsOutput => {
  let contents: any = {
    __type: "DescribeMLModelsOutput",
    NextToken: undefined,
    Results: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Results !== undefined) {
    contents.Results = deserializeAws_json1_1MLModels(output.Results, context);
  }
  return contents;
};

const deserializeAws_json1_1DescribeTagsOutput = (
  output: any,
  context: __SerdeContext
): DescribeTagsOutput => {
  let contents: any = {
    __type: "DescribeTagsOutput",
    ResourceId: undefined,
    ResourceType: undefined,
    Tags: undefined
  };
  if (output.ResourceId !== undefined) {
    contents.ResourceId = output.ResourceId;
  }
  if (output.ResourceType !== undefined) {
    contents.ResourceType = output.ResourceType;
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1DetailsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1Evaluation = (
  output: any,
  context: __SerdeContext
): Evaluation => {
  let contents: any = {
    __type: "Evaluation",
    ComputeTime: undefined,
    CreatedAt: undefined,
    CreatedByIamUser: undefined,
    EvaluationDataSourceId: undefined,
    EvaluationId: undefined,
    FinishedAt: undefined,
    InputDataLocationS3: undefined,
    LastUpdatedAt: undefined,
    MLModelId: undefined,
    Message: undefined,
    Name: undefined,
    PerformanceMetrics: undefined,
    StartedAt: undefined,
    Status: undefined
  };
  if (output.ComputeTime !== undefined) {
    contents.ComputeTime = output.ComputeTime;
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(
      output.CreatedAt % 1 != 0
        ? Math.round(output.CreatedAt * 1000)
        : output.CreatedAt
    );
  }
  if (output.CreatedByIamUser !== undefined) {
    contents.CreatedByIamUser = output.CreatedByIamUser;
  }
  if (output.EvaluationDataSourceId !== undefined) {
    contents.EvaluationDataSourceId = output.EvaluationDataSourceId;
  }
  if (output.EvaluationId !== undefined) {
    contents.EvaluationId = output.EvaluationId;
  }
  if (output.FinishedAt !== undefined) {
    contents.FinishedAt = new Date(
      output.FinishedAt % 1 != 0
        ? Math.round(output.FinishedAt * 1000)
        : output.FinishedAt
    );
  }
  if (output.InputDataLocationS3 !== undefined) {
    contents.InputDataLocationS3 = output.InputDataLocationS3;
  }
  if (output.LastUpdatedAt !== undefined) {
    contents.LastUpdatedAt = new Date(
      output.LastUpdatedAt % 1 != 0
        ? Math.round(output.LastUpdatedAt * 1000)
        : output.LastUpdatedAt
    );
  }
  if (output.MLModelId !== undefined) {
    contents.MLModelId = output.MLModelId;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.PerformanceMetrics !== undefined) {
    contents.PerformanceMetrics = deserializeAws_json1_1PerformanceMetrics(
      output.PerformanceMetrics,
      context
    );
  }
  if (output.StartedAt !== undefined) {
    contents.StartedAt = new Date(
      output.StartedAt % 1 != 0
        ? Math.round(output.StartedAt * 1000)
        : output.StartedAt
    );
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1Evaluations = (
  output: any,
  context: __SerdeContext
): Array<Evaluation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Evaluation(entry, context)
  );
};

const deserializeAws_json1_1GetBatchPredictionOutput = (
  output: any,
  context: __SerdeContext
): GetBatchPredictionOutput => {
  let contents: any = {
    __type: "GetBatchPredictionOutput",
    BatchPredictionDataSourceId: undefined,
    BatchPredictionId: undefined,
    ComputeTime: undefined,
    CreatedAt: undefined,
    CreatedByIamUser: undefined,
    FinishedAt: undefined,
    InputDataLocationS3: undefined,
    InvalidRecordCount: undefined,
    LastUpdatedAt: undefined,
    LogUri: undefined,
    MLModelId: undefined,
    Message: undefined,
    Name: undefined,
    OutputUri: undefined,
    StartedAt: undefined,
    Status: undefined,
    TotalRecordCount: undefined
  };
  if (output.BatchPredictionDataSourceId !== undefined) {
    contents.BatchPredictionDataSourceId = output.BatchPredictionDataSourceId;
  }
  if (output.BatchPredictionId !== undefined) {
    contents.BatchPredictionId = output.BatchPredictionId;
  }
  if (output.ComputeTime !== undefined) {
    contents.ComputeTime = output.ComputeTime;
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(
      output.CreatedAt % 1 != 0
        ? Math.round(output.CreatedAt * 1000)
        : output.CreatedAt
    );
  }
  if (output.CreatedByIamUser !== undefined) {
    contents.CreatedByIamUser = output.CreatedByIamUser;
  }
  if (output.FinishedAt !== undefined) {
    contents.FinishedAt = new Date(
      output.FinishedAt % 1 != 0
        ? Math.round(output.FinishedAt * 1000)
        : output.FinishedAt
    );
  }
  if (output.InputDataLocationS3 !== undefined) {
    contents.InputDataLocationS3 = output.InputDataLocationS3;
  }
  if (output.InvalidRecordCount !== undefined) {
    contents.InvalidRecordCount = output.InvalidRecordCount;
  }
  if (output.LastUpdatedAt !== undefined) {
    contents.LastUpdatedAt = new Date(
      output.LastUpdatedAt % 1 != 0
        ? Math.round(output.LastUpdatedAt * 1000)
        : output.LastUpdatedAt
    );
  }
  if (output.LogUri !== undefined) {
    contents.LogUri = output.LogUri;
  }
  if (output.MLModelId !== undefined) {
    contents.MLModelId = output.MLModelId;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.OutputUri !== undefined) {
    contents.OutputUri = output.OutputUri;
  }
  if (output.StartedAt !== undefined) {
    contents.StartedAt = new Date(
      output.StartedAt % 1 != 0
        ? Math.round(output.StartedAt * 1000)
        : output.StartedAt
    );
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.TotalRecordCount !== undefined) {
    contents.TotalRecordCount = output.TotalRecordCount;
  }
  return contents;
};

const deserializeAws_json1_1GetDataSourceOutput = (
  output: any,
  context: __SerdeContext
): GetDataSourceOutput => {
  let contents: any = {
    __type: "GetDataSourceOutput",
    ComputeStatistics: undefined,
    ComputeTime: undefined,
    CreatedAt: undefined,
    CreatedByIamUser: undefined,
    DataLocationS3: undefined,
    DataRearrangement: undefined,
    DataSizeInBytes: undefined,
    DataSourceId: undefined,
    DataSourceSchema: undefined,
    FinishedAt: undefined,
    LastUpdatedAt: undefined,
    LogUri: undefined,
    Message: undefined,
    Name: undefined,
    NumberOfFiles: undefined,
    RDSMetadata: undefined,
    RedshiftMetadata: undefined,
    RoleARN: undefined,
    StartedAt: undefined,
    Status: undefined
  };
  if (output.ComputeStatistics !== undefined) {
    contents.ComputeStatistics = output.ComputeStatistics;
  }
  if (output.ComputeTime !== undefined) {
    contents.ComputeTime = output.ComputeTime;
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(
      output.CreatedAt % 1 != 0
        ? Math.round(output.CreatedAt * 1000)
        : output.CreatedAt
    );
  }
  if (output.CreatedByIamUser !== undefined) {
    contents.CreatedByIamUser = output.CreatedByIamUser;
  }
  if (output.DataLocationS3 !== undefined) {
    contents.DataLocationS3 = output.DataLocationS3;
  }
  if (output.DataRearrangement !== undefined) {
    contents.DataRearrangement = output.DataRearrangement;
  }
  if (output.DataSizeInBytes !== undefined) {
    contents.DataSizeInBytes = output.DataSizeInBytes;
  }
  if (output.DataSourceId !== undefined) {
    contents.DataSourceId = output.DataSourceId;
  }
  if (output.DataSourceSchema !== undefined) {
    contents.DataSourceSchema = output.DataSourceSchema;
  }
  if (output.FinishedAt !== undefined) {
    contents.FinishedAt = new Date(
      output.FinishedAt % 1 != 0
        ? Math.round(output.FinishedAt * 1000)
        : output.FinishedAt
    );
  }
  if (output.LastUpdatedAt !== undefined) {
    contents.LastUpdatedAt = new Date(
      output.LastUpdatedAt % 1 != 0
        ? Math.round(output.LastUpdatedAt * 1000)
        : output.LastUpdatedAt
    );
  }
  if (output.LogUri !== undefined) {
    contents.LogUri = output.LogUri;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.NumberOfFiles !== undefined) {
    contents.NumberOfFiles = output.NumberOfFiles;
  }
  if (output.RDSMetadata !== undefined) {
    contents.RDSMetadata = deserializeAws_json1_1RDSMetadata(
      output.RDSMetadata,
      context
    );
  }
  if (output.RedshiftMetadata !== undefined) {
    contents.RedshiftMetadata = deserializeAws_json1_1RedshiftMetadata(
      output.RedshiftMetadata,
      context
    );
  }
  if (output.RoleARN !== undefined) {
    contents.RoleARN = output.RoleARN;
  }
  if (output.StartedAt !== undefined) {
    contents.StartedAt = new Date(
      output.StartedAt % 1 != 0
        ? Math.round(output.StartedAt * 1000)
        : output.StartedAt
    );
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1GetEvaluationOutput = (
  output: any,
  context: __SerdeContext
): GetEvaluationOutput => {
  let contents: any = {
    __type: "GetEvaluationOutput",
    ComputeTime: undefined,
    CreatedAt: undefined,
    CreatedByIamUser: undefined,
    EvaluationDataSourceId: undefined,
    EvaluationId: undefined,
    FinishedAt: undefined,
    InputDataLocationS3: undefined,
    LastUpdatedAt: undefined,
    LogUri: undefined,
    MLModelId: undefined,
    Message: undefined,
    Name: undefined,
    PerformanceMetrics: undefined,
    StartedAt: undefined,
    Status: undefined
  };
  if (output.ComputeTime !== undefined) {
    contents.ComputeTime = output.ComputeTime;
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(
      output.CreatedAt % 1 != 0
        ? Math.round(output.CreatedAt * 1000)
        : output.CreatedAt
    );
  }
  if (output.CreatedByIamUser !== undefined) {
    contents.CreatedByIamUser = output.CreatedByIamUser;
  }
  if (output.EvaluationDataSourceId !== undefined) {
    contents.EvaluationDataSourceId = output.EvaluationDataSourceId;
  }
  if (output.EvaluationId !== undefined) {
    contents.EvaluationId = output.EvaluationId;
  }
  if (output.FinishedAt !== undefined) {
    contents.FinishedAt = new Date(
      output.FinishedAt % 1 != 0
        ? Math.round(output.FinishedAt * 1000)
        : output.FinishedAt
    );
  }
  if (output.InputDataLocationS3 !== undefined) {
    contents.InputDataLocationS3 = output.InputDataLocationS3;
  }
  if (output.LastUpdatedAt !== undefined) {
    contents.LastUpdatedAt = new Date(
      output.LastUpdatedAt % 1 != 0
        ? Math.round(output.LastUpdatedAt * 1000)
        : output.LastUpdatedAt
    );
  }
  if (output.LogUri !== undefined) {
    contents.LogUri = output.LogUri;
  }
  if (output.MLModelId !== undefined) {
    contents.MLModelId = output.MLModelId;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.PerformanceMetrics !== undefined) {
    contents.PerformanceMetrics = deserializeAws_json1_1PerformanceMetrics(
      output.PerformanceMetrics,
      context
    );
  }
  if (output.StartedAt !== undefined) {
    contents.StartedAt = new Date(
      output.StartedAt % 1 != 0
        ? Math.round(output.StartedAt * 1000)
        : output.StartedAt
    );
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1GetMLModelOutput = (
  output: any,
  context: __SerdeContext
): GetMLModelOutput => {
  let contents: any = {
    __type: "GetMLModelOutput",
    ComputeTime: undefined,
    CreatedAt: undefined,
    CreatedByIamUser: undefined,
    EndpointInfo: undefined,
    FinishedAt: undefined,
    InputDataLocationS3: undefined,
    LastUpdatedAt: undefined,
    LogUri: undefined,
    MLModelId: undefined,
    MLModelType: undefined,
    Message: undefined,
    Name: undefined,
    Recipe: undefined,
    Schema: undefined,
    ScoreThreshold: undefined,
    ScoreThresholdLastUpdatedAt: undefined,
    SizeInBytes: undefined,
    StartedAt: undefined,
    Status: undefined,
    TrainingDataSourceId: undefined,
    TrainingParameters: undefined
  };
  if (output.ComputeTime !== undefined) {
    contents.ComputeTime = output.ComputeTime;
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(
      output.CreatedAt % 1 != 0
        ? Math.round(output.CreatedAt * 1000)
        : output.CreatedAt
    );
  }
  if (output.CreatedByIamUser !== undefined) {
    contents.CreatedByIamUser = output.CreatedByIamUser;
  }
  if (output.EndpointInfo !== undefined) {
    contents.EndpointInfo = deserializeAws_json1_1RealtimeEndpointInfo(
      output.EndpointInfo,
      context
    );
  }
  if (output.FinishedAt !== undefined) {
    contents.FinishedAt = new Date(
      output.FinishedAt % 1 != 0
        ? Math.round(output.FinishedAt * 1000)
        : output.FinishedAt
    );
  }
  if (output.InputDataLocationS3 !== undefined) {
    contents.InputDataLocationS3 = output.InputDataLocationS3;
  }
  if (output.LastUpdatedAt !== undefined) {
    contents.LastUpdatedAt = new Date(
      output.LastUpdatedAt % 1 != 0
        ? Math.round(output.LastUpdatedAt * 1000)
        : output.LastUpdatedAt
    );
  }
  if (output.LogUri !== undefined) {
    contents.LogUri = output.LogUri;
  }
  if (output.MLModelId !== undefined) {
    contents.MLModelId = output.MLModelId;
  }
  if (output.MLModelType !== undefined) {
    contents.MLModelType = output.MLModelType;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Recipe !== undefined) {
    contents.Recipe = output.Recipe;
  }
  if (output.Schema !== undefined) {
    contents.Schema = output.Schema;
  }
  if (output.ScoreThreshold !== undefined) {
    contents.ScoreThreshold = output.ScoreThreshold;
  }
  if (output.ScoreThresholdLastUpdatedAt !== undefined) {
    contents.ScoreThresholdLastUpdatedAt = new Date(
      output.ScoreThresholdLastUpdatedAt % 1 != 0
        ? Math.round(output.ScoreThresholdLastUpdatedAt * 1000)
        : output.ScoreThresholdLastUpdatedAt
    );
  }
  if (output.SizeInBytes !== undefined) {
    contents.SizeInBytes = output.SizeInBytes;
  }
  if (output.StartedAt !== undefined) {
    contents.StartedAt = new Date(
      output.StartedAt % 1 != 0
        ? Math.round(output.StartedAt * 1000)
        : output.StartedAt
    );
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.TrainingDataSourceId !== undefined) {
    contents.TrainingDataSourceId = output.TrainingDataSourceId;
  }
  if (output.TrainingParameters !== undefined) {
    contents.TrainingParameters = deserializeAws_json1_1TrainingParameters(
      output.TrainingParameters,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  let contents: any = {
    __type: "IdempotentParameterMismatchException",
    code: undefined,
    message: undefined
  };
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  let contents: any = {
    __type: "InternalServerException",
    code: undefined,
    message: undefined
  };
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  let contents: any = {
    __type: "InvalidInputException",
    code: undefined,
    message: undefined
  };
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTagException = (
  output: any,
  context: __SerdeContext
): InvalidTagException => {
  let contents: any = {
    __type: "InvalidTagException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    code: undefined,
    message: undefined
  };
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1MLModel = (
  output: any,
  context: __SerdeContext
): MLModel => {
  let contents: any = {
    __type: "MLModel",
    Algorithm: undefined,
    ComputeTime: undefined,
    CreatedAt: undefined,
    CreatedByIamUser: undefined,
    EndpointInfo: undefined,
    FinishedAt: undefined,
    InputDataLocationS3: undefined,
    LastUpdatedAt: undefined,
    MLModelId: undefined,
    MLModelType: undefined,
    Message: undefined,
    Name: undefined,
    ScoreThreshold: undefined,
    ScoreThresholdLastUpdatedAt: undefined,
    SizeInBytes: undefined,
    StartedAt: undefined,
    Status: undefined,
    TrainingDataSourceId: undefined,
    TrainingParameters: undefined
  };
  if (output.Algorithm !== undefined) {
    contents.Algorithm = output.Algorithm;
  }
  if (output.ComputeTime !== undefined) {
    contents.ComputeTime = output.ComputeTime;
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(
      output.CreatedAt % 1 != 0
        ? Math.round(output.CreatedAt * 1000)
        : output.CreatedAt
    );
  }
  if (output.CreatedByIamUser !== undefined) {
    contents.CreatedByIamUser = output.CreatedByIamUser;
  }
  if (output.EndpointInfo !== undefined) {
    contents.EndpointInfo = deserializeAws_json1_1RealtimeEndpointInfo(
      output.EndpointInfo,
      context
    );
  }
  if (output.FinishedAt !== undefined) {
    contents.FinishedAt = new Date(
      output.FinishedAt % 1 != 0
        ? Math.round(output.FinishedAt * 1000)
        : output.FinishedAt
    );
  }
  if (output.InputDataLocationS3 !== undefined) {
    contents.InputDataLocationS3 = output.InputDataLocationS3;
  }
  if (output.LastUpdatedAt !== undefined) {
    contents.LastUpdatedAt = new Date(
      output.LastUpdatedAt % 1 != 0
        ? Math.round(output.LastUpdatedAt * 1000)
        : output.LastUpdatedAt
    );
  }
  if (output.MLModelId !== undefined) {
    contents.MLModelId = output.MLModelId;
  }
  if (output.MLModelType !== undefined) {
    contents.MLModelType = output.MLModelType;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.ScoreThreshold !== undefined) {
    contents.ScoreThreshold = output.ScoreThreshold;
  }
  if (output.ScoreThresholdLastUpdatedAt !== undefined) {
    contents.ScoreThresholdLastUpdatedAt = new Date(
      output.ScoreThresholdLastUpdatedAt % 1 != 0
        ? Math.round(output.ScoreThresholdLastUpdatedAt * 1000)
        : output.ScoreThresholdLastUpdatedAt
    );
  }
  if (output.SizeInBytes !== undefined) {
    contents.SizeInBytes = output.SizeInBytes;
  }
  if (output.StartedAt !== undefined) {
    contents.StartedAt = new Date(
      output.StartedAt % 1 != 0
        ? Math.round(output.StartedAt * 1000)
        : output.StartedAt
    );
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.TrainingDataSourceId !== undefined) {
    contents.TrainingDataSourceId = output.TrainingDataSourceId;
  }
  if (output.TrainingParameters !== undefined) {
    contents.TrainingParameters = deserializeAws_json1_1TrainingParameters(
      output.TrainingParameters,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1MLModels = (
  output: any,
  context: __SerdeContext
): Array<MLModel> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MLModel(entry, context)
  );
};

const deserializeAws_json1_1PerformanceMetrics = (
  output: any,
  context: __SerdeContext
): PerformanceMetrics => {
  let contents: any = {
    __type: "PerformanceMetrics",
    Properties: undefined
  };
  if (output.Properties !== undefined) {
    contents.Properties = deserializeAws_json1_1PerformanceMetricsProperties(
      output.Properties,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PerformanceMetricsProperties = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1PredictOutput = (
  output: any,
  context: __SerdeContext
): PredictOutput => {
  let contents: any = {
    __type: "PredictOutput",
    Prediction: undefined
  };
  if (output.Prediction !== undefined) {
    contents.Prediction = deserializeAws_json1_1Prediction(
      output.Prediction,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Prediction = (
  output: any,
  context: __SerdeContext
): Prediction => {
  let contents: any = {
    __type: "Prediction",
    details: undefined,
    predictedLabel: undefined,
    predictedScores: undefined,
    predictedValue: undefined
  };
  if (output.details !== undefined) {
    contents.details = deserializeAws_json1_1DetailsMap(
      output.details,
      context
    );
  }
  if (output.predictedLabel !== undefined) {
    contents.predictedLabel = output.predictedLabel;
  }
  if (output.predictedScores !== undefined) {
    contents.predictedScores = deserializeAws_json1_1ScoreValuePerLabelMap(
      output.predictedScores,
      context
    );
  }
  if (output.predictedValue !== undefined) {
    contents.predictedValue = output.predictedValue;
  }
  return contents;
};

const deserializeAws_json1_1PredictorNotMountedException = (
  output: any,
  context: __SerdeContext
): PredictorNotMountedException => {
  let contents: any = {
    __type: "PredictorNotMountedException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RDSDatabase = (
  output: any,
  context: __SerdeContext
): RDSDatabase => {
  let contents: any = {
    __type: "RDSDatabase",
    DatabaseName: undefined,
    InstanceIdentifier: undefined
  };
  if (output.DatabaseName !== undefined) {
    contents.DatabaseName = output.DatabaseName;
  }
  if (output.InstanceIdentifier !== undefined) {
    contents.InstanceIdentifier = output.InstanceIdentifier;
  }
  return contents;
};

const deserializeAws_json1_1RDSMetadata = (
  output: any,
  context: __SerdeContext
): RDSMetadata => {
  let contents: any = {
    __type: "RDSMetadata",
    DataPipelineId: undefined,
    Database: undefined,
    DatabaseUserName: undefined,
    ResourceRole: undefined,
    SelectSqlQuery: undefined,
    ServiceRole: undefined
  };
  if (output.DataPipelineId !== undefined) {
    contents.DataPipelineId = output.DataPipelineId;
  }
  if (output.Database !== undefined) {
    contents.Database = deserializeAws_json1_1RDSDatabase(
      output.Database,
      context
    );
  }
  if (output.DatabaseUserName !== undefined) {
    contents.DatabaseUserName = output.DatabaseUserName;
  }
  if (output.ResourceRole !== undefined) {
    contents.ResourceRole = output.ResourceRole;
  }
  if (output.SelectSqlQuery !== undefined) {
    contents.SelectSqlQuery = output.SelectSqlQuery;
  }
  if (output.ServiceRole !== undefined) {
    contents.ServiceRole = output.ServiceRole;
  }
  return contents;
};

const deserializeAws_json1_1RealtimeEndpointInfo = (
  output: any,
  context: __SerdeContext
): RealtimeEndpointInfo => {
  let contents: any = {
    __type: "RealtimeEndpointInfo",
    CreatedAt: undefined,
    EndpointStatus: undefined,
    EndpointUrl: undefined,
    PeakRequestsPerSecond: undefined
  };
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(
      output.CreatedAt % 1 != 0
        ? Math.round(output.CreatedAt * 1000)
        : output.CreatedAt
    );
  }
  if (output.EndpointStatus !== undefined) {
    contents.EndpointStatus = output.EndpointStatus;
  }
  if (output.EndpointUrl !== undefined) {
    contents.EndpointUrl = output.EndpointUrl;
  }
  if (output.PeakRequestsPerSecond !== undefined) {
    contents.PeakRequestsPerSecond = output.PeakRequestsPerSecond;
  }
  return contents;
};

const deserializeAws_json1_1RedshiftDatabase = (
  output: any,
  context: __SerdeContext
): RedshiftDatabase => {
  let contents: any = {
    __type: "RedshiftDatabase",
    ClusterIdentifier: undefined,
    DatabaseName: undefined
  };
  if (output.ClusterIdentifier !== undefined) {
    contents.ClusterIdentifier = output.ClusterIdentifier;
  }
  if (output.DatabaseName !== undefined) {
    contents.DatabaseName = output.DatabaseName;
  }
  return contents;
};

const deserializeAws_json1_1RedshiftMetadata = (
  output: any,
  context: __SerdeContext
): RedshiftMetadata => {
  let contents: any = {
    __type: "RedshiftMetadata",
    DatabaseUserName: undefined,
    RedshiftDatabase: undefined,
    SelectSqlQuery: undefined
  };
  if (output.DatabaseUserName !== undefined) {
    contents.DatabaseUserName = output.DatabaseUserName;
  }
  if (output.RedshiftDatabase !== undefined) {
    contents.RedshiftDatabase = deserializeAws_json1_1RedshiftDatabase(
      output.RedshiftDatabase,
      context
    );
  }
  if (output.SelectSqlQuery !== undefined) {
    contents.SelectSqlQuery = output.SelectSqlQuery;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    code: undefined,
    message: undefined
  };
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ScoreValuePerLabelMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
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
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagLimitExceededException = (
  output: any,
  context: __SerdeContext
): TagLimitExceededException => {
  let contents: any = {
    __type: "TagLimitExceededException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
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

const deserializeAws_json1_1TrainingParameters = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1UpdateBatchPredictionOutput = (
  output: any,
  context: __SerdeContext
): UpdateBatchPredictionOutput => {
  let contents: any = {
    __type: "UpdateBatchPredictionOutput",
    BatchPredictionId: undefined
  };
  if (output.BatchPredictionId !== undefined) {
    contents.BatchPredictionId = output.BatchPredictionId;
  }
  return contents;
};

const deserializeAws_json1_1UpdateDataSourceOutput = (
  output: any,
  context: __SerdeContext
): UpdateDataSourceOutput => {
  let contents: any = {
    __type: "UpdateDataSourceOutput",
    DataSourceId: undefined
  };
  if (output.DataSourceId !== undefined) {
    contents.DataSourceId = output.DataSourceId;
  }
  return contents;
};

const deserializeAws_json1_1UpdateEvaluationOutput = (
  output: any,
  context: __SerdeContext
): UpdateEvaluationOutput => {
  let contents: any = {
    __type: "UpdateEvaluationOutput",
    EvaluationId: undefined
  };
  if (output.EvaluationId !== undefined) {
    contents.EvaluationId = output.EvaluationId;
  }
  return contents;
};

const deserializeAws_json1_1UpdateMLModelOutput = (
  output: any,
  context: __SerdeContext
): UpdateMLModelOutput => {
  let contents: any = {
    __type: "UpdateMLModelOutput",
    MLModelId: undefined
  };
  if (output.MLModelId !== undefined) {
    contents.MLModelId = output.MLModelId;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
