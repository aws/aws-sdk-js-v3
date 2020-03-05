import {
  BatchCreateVariableCommandInput,
  BatchCreateVariableCommandOutput
} from "../commands/BatchCreateVariableCommand";
import {
  BatchGetVariableCommandInput,
  BatchGetVariableCommandOutput
} from "../commands/BatchGetVariableCommand";
import {
  CreateDetectorVersionCommandInput,
  CreateDetectorVersionCommandOutput
} from "../commands/CreateDetectorVersionCommand";
import {
  CreateModelVersionCommandInput,
  CreateModelVersionCommandOutput
} from "../commands/CreateModelVersionCommand";
import {
  CreateRuleCommandInput,
  CreateRuleCommandOutput
} from "../commands/CreateRuleCommand";
import {
  CreateVariableCommandInput,
  CreateVariableCommandOutput
} from "../commands/CreateVariableCommand";
import {
  DeleteDetectorVersionCommandInput,
  DeleteDetectorVersionCommandOutput
} from "../commands/DeleteDetectorVersionCommand";
import {
  DeleteEventCommandInput,
  DeleteEventCommandOutput
} from "../commands/DeleteEventCommand";
import {
  DescribeDetectorCommandInput,
  DescribeDetectorCommandOutput
} from "../commands/DescribeDetectorCommand";
import {
  DescribeModelVersionsCommandInput,
  DescribeModelVersionsCommandOutput
} from "../commands/DescribeModelVersionsCommand";
import {
  GetDetectorVersionCommandInput,
  GetDetectorVersionCommandOutput
} from "../commands/GetDetectorVersionCommand";
import {
  GetDetectorsCommandInput,
  GetDetectorsCommandOutput
} from "../commands/GetDetectorsCommand";
import {
  GetExternalModelsCommandInput,
  GetExternalModelsCommandOutput
} from "../commands/GetExternalModelsCommand";
import {
  GetModelVersionCommandInput,
  GetModelVersionCommandOutput
} from "../commands/GetModelVersionCommand";
import {
  GetModelsCommandInput,
  GetModelsCommandOutput
} from "../commands/GetModelsCommand";
import {
  GetOutcomesCommandInput,
  GetOutcomesCommandOutput
} from "../commands/GetOutcomesCommand";
import {
  GetPredictionCommandInput,
  GetPredictionCommandOutput
} from "../commands/GetPredictionCommand";
import {
  GetRulesCommandInput,
  GetRulesCommandOutput
} from "../commands/GetRulesCommand";
import {
  GetVariablesCommandInput,
  GetVariablesCommandOutput
} from "../commands/GetVariablesCommand";
import {
  PutDetectorCommandInput,
  PutDetectorCommandOutput
} from "../commands/PutDetectorCommand";
import {
  PutExternalModelCommandInput,
  PutExternalModelCommandOutput
} from "../commands/PutExternalModelCommand";
import {
  PutModelCommandInput,
  PutModelCommandOutput
} from "../commands/PutModelCommand";
import {
  PutOutcomeCommandInput,
  PutOutcomeCommandOutput
} from "../commands/PutOutcomeCommand";
import {
  UpdateDetectorVersionCommandInput,
  UpdateDetectorVersionCommandOutput
} from "../commands/UpdateDetectorVersionCommand";
import {
  UpdateDetectorVersionMetadataCommandInput,
  UpdateDetectorVersionMetadataCommandOutput
} from "../commands/UpdateDetectorVersionMetadataCommand";
import {
  UpdateDetectorVersionStatusCommandInput,
  UpdateDetectorVersionStatusCommandOutput
} from "../commands/UpdateDetectorVersionStatusCommand";
import {
  UpdateModelVersionCommandInput,
  UpdateModelVersionCommandOutput
} from "../commands/UpdateModelVersionCommand";
import {
  UpdateRuleMetadataCommandInput,
  UpdateRuleMetadataCommandOutput
} from "../commands/UpdateRuleMetadataCommand";
import {
  UpdateRuleVersionCommandInput,
  UpdateRuleVersionCommandOutput
} from "../commands/UpdateRuleVersionCommand";
import {
  UpdateVariableCommandInput,
  UpdateVariableCommandOutput
} from "../commands/UpdateVariableCommand";
import {
  BatchCreateVariableError,
  BatchCreateVariableRequest,
  BatchCreateVariableResult,
  BatchGetVariableError,
  BatchGetVariableRequest,
  BatchGetVariableResult,
  CreateDetectorVersionRequest,
  CreateDetectorVersionResult,
  CreateModelVersionRequest,
  CreateModelVersionResult,
  CreateRuleRequest,
  CreateRuleResult,
  CreateVariableRequest,
  CreateVariableResult,
  DeleteDetectorVersionRequest,
  DeleteDetectorVersionResult,
  DeleteEventRequest,
  DeleteEventResult,
  DescribeDetectorRequest,
  DescribeDetectorResult,
  DescribeModelVersionsRequest,
  DescribeModelVersionsResult,
  Detector,
  DetectorVersionSummary,
  ExternalModel,
  GetDetectorVersionRequest,
  GetDetectorVersionResult,
  GetDetectorsRequest,
  GetDetectorsResult,
  GetExternalModelsRequest,
  GetExternalModelsResult,
  GetModelVersionRequest,
  GetModelVersionResult,
  GetModelsRequest,
  GetModelsResult,
  GetOutcomesRequest,
  GetOutcomesResult,
  GetPredictionRequest,
  GetPredictionResult,
  GetRulesRequest,
  GetRulesResult,
  GetVariablesRequest,
  GetVariablesResult,
  InternalServerException,
  LabelSchema,
  Model,
  ModelEndpointDataBlob,
  ModelInputConfiguration,
  ModelOutputConfiguration,
  ModelScores,
  ModelVariable,
  ModelVersion,
  ModelVersionDetail,
  Outcome,
  PutDetectorRequest,
  PutDetectorResult,
  PutExternalModelRequest,
  PutExternalModelResult,
  PutModelRequest,
  PutModelResult,
  PutOutcomeRequest,
  PutOutcomeResult,
  ResourceNotFoundException,
  Role,
  Rule,
  RuleDetail,
  ThrottlingException,
  TrainingDataSource,
  UpdateDetectorVersionMetadataRequest,
  UpdateDetectorVersionMetadataResult,
  UpdateDetectorVersionRequest,
  UpdateDetectorVersionResult,
  UpdateDetectorVersionStatusRequest,
  UpdateDetectorVersionStatusResult,
  UpdateModelVersionRequest,
  UpdateModelVersionResult,
  UpdateRuleMetadataRequest,
  UpdateRuleMetadataResult,
  UpdateRuleVersionRequest,
  UpdateRuleVersionResult,
  UpdateVariableRequest,
  UpdateVariableResult,
  ValidationException,
  Variable,
  VariableEntry
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

export async function serializeAws_json1_1BatchCreateVariableCommand(
  input: BatchCreateVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.BatchCreateVariable";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchCreateVariableRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1BatchGetVariableCommand(
  input: BatchGetVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.BatchGetVariable";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetVariableRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateDetectorVersionCommand(
  input: CreateDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.CreateDetectorVersion";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDetectorVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateModelVersionCommand(
  input: CreateModelVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.CreateModelVersion";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateModelVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateRuleCommand(
  input: CreateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.CreateRule";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateVariableCommand(
  input: CreateVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.CreateVariable";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateVariableRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteDetectorVersionCommand(
  input: DeleteDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.DeleteDetectorVersion";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDetectorVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteEventCommand(
  input: DeleteEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.DeleteEvent";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEventRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeDetectorCommand(
  input: DescribeDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.DescribeDetector";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDetectorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeModelVersionsCommand(
  input: DescribeModelVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.DescribeModelVersions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeModelVersionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetDetectorVersionCommand(
  input: GetDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.GetDetectorVersion";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDetectorVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetDetectorsCommand(
  input: GetDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.GetDetectors";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDetectorsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetExternalModelsCommand(
  input: GetExternalModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.GetExternalModels";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetExternalModelsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetModelVersionCommand(
  input: GetModelVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.GetModelVersion";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetModelVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetModelsCommand(
  input: GetModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.GetModels";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetModelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetOutcomesCommand(
  input: GetOutcomesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.GetOutcomes";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOutcomesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetPredictionCommand(
  input: GetPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.GetPrediction";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetPredictionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetRulesCommand(
  input: GetRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.GetRules";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetVariablesCommand(
  input: GetVariablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.GetVariables";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetVariablesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutDetectorCommand(
  input: PutDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.PutDetector";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutDetectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutExternalModelCommand(
  input: PutExternalModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.PutExternalModel";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutExternalModelRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutModelCommand(
  input: PutModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.PutModel";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutOutcomeCommand(
  input: PutOutcomeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.PutOutcome";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutOutcomeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateDetectorVersionCommand(
  input: UpdateDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.UpdateDetectorVersion";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDetectorVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateDetectorVersionMetadataCommand(
  input: UpdateDetectorVersionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDetectorVersionMetadataRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateDetectorVersionStatusCommand(
  input: UpdateDetectorVersionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSHawksNestServiceFacade.UpdateDetectorVersionStatus";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDetectorVersionStatusRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateModelVersionCommand(
  input: UpdateModelVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.UpdateModelVersion";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateModelVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateRuleMetadataCommand(
  input: UpdateRuleMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.UpdateRuleMetadata";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateRuleMetadataRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateRuleVersionCommand(
  input: UpdateRuleVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.UpdateRuleVersion";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateRuleVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateVariableCommand(
  input: UpdateVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSHawksNestServiceFacade.UpdateVariable";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateVariableRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1BatchCreateVariableCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateVariableCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchCreateVariableCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchCreateVariableResult(data, context);
  const response: BatchCreateVariableCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchCreateVariableResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1BatchCreateVariableCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateVariableCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1BatchGetVariableCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetVariableCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchGetVariableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetVariableResult(data, context);
  const response: BatchGetVariableCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGetVariableResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1BatchGetVariableCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetVariableCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1CreateDetectorVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorVersionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDetectorVersionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDetectorVersionResult(data, context);
  const response: CreateDetectorVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDetectorVersionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateDetectorVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorVersionCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1CreateModelVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelVersionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateModelVersionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateModelVersionResult(data, context);
  const response: CreateModelVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateModelVersionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateModelVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelVersionCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1CreateRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRuleResult(data, context);
  const response: CreateRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRuleResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1CreateVariableCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVariableCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateVariableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateVariableResult(data, context);
  const response: CreateVariableCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateVariableResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateVariableCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVariableCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1DeleteDetectorVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorVersionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDetectorVersionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDetectorVersionResult(data, context);
  const response: DeleteDetectorVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDetectorVersionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteDetectorVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorVersionCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1DeleteEventCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteEventCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEventResult(data, context);
  const response: DeleteEventCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteEventResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteEventCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_json1_1DescribeDetectorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDetectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDetectorResult(data, context);
  const response: DescribeDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDetectorResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeDetectorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1DescribeModelVersionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelVersionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeModelVersionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeModelVersionsResult(data, context);
  const response: DescribeModelVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeModelVersionsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeModelVersionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelVersionsCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1GetDetectorVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorVersionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDetectorVersionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDetectorVersionResult(data, context);
  const response: GetDetectorVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDetectorVersionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDetectorVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorVersionCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1GetDetectorsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDetectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDetectorsResult(data, context);
  const response: GetDetectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDetectorsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDetectorsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorsCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1GetExternalModelsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExternalModelsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetExternalModelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetExternalModelsResult(data, context);
  const response: GetExternalModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetExternalModelsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetExternalModelsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExternalModelsCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1GetModelVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelVersionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetModelVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetModelVersionResult(data, context);
  const response: GetModelVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetModelVersionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetModelVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelVersionCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1GetModelsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetModelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetModelsResult(data, context);
  const response: GetModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetModelsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetModelsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelsCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1GetOutcomesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutcomesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetOutcomesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOutcomesResult(data, context);
  const response: GetOutcomesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOutcomesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetOutcomesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutcomesCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1GetPredictionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPredictionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetPredictionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPredictionResult(data, context);
  const response: GetPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPredictionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetPredictionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPredictionCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1GetRulesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRulesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRulesResult(data, context);
  const response: GetRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRulesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRulesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRulesCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1GetVariablesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVariablesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetVariablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetVariablesResult(data, context);
  const response: GetVariablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetVariablesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetVariablesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVariablesCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1PutDetectorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDetectorCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutDetectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutDetectorResult(data, context);
  const response: PutDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutDetectorResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutDetectorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDetectorCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1PutExternalModelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutExternalModelCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutExternalModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutExternalModelResult(data, context);
  const response: PutExternalModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutExternalModelResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutExternalModelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutExternalModelCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1PutModelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutModelCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutModelResult(data, context);
  const response: PutModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutModelResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutModelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutModelCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1PutOutcomeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOutcomeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutOutcomeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutOutcomeResult(data, context);
  const response: PutOutcomeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutOutcomeResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutOutcomeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOutcomeCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1UpdateDetectorVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDetectorVersionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDetectorVersionResult(data, context);
  const response: UpdateDetectorVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDetectorVersionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateDetectorVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1UpdateDetectorVersionMetadataCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionMetadataCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDetectorVersionMetadataCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDetectorVersionMetadataResult(
    data,
    context
  );
  const response: UpdateDetectorVersionMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDetectorVersionMetadataResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateDetectorVersionMetadataCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionMetadataCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1UpdateDetectorVersionStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDetectorVersionStatusCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDetectorVersionStatusResult(
    data,
    context
  );
  const response: UpdateDetectorVersionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDetectorVersionStatusResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateDetectorVersionStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionStatusCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1UpdateModelVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelVersionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateModelVersionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateModelVersionResult(data, context);
  const response: UpdateModelVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateModelVersionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateModelVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelVersionCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1UpdateRuleMetadataCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleMetadataCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateRuleMetadataCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRuleMetadataResult(data, context);
  const response: UpdateRuleMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRuleMetadataResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateRuleMetadataCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleMetadataCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1UpdateRuleVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleVersionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateRuleVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRuleVersionResult(data, context);
  const response: UpdateRuleVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRuleVersionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateRuleVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleVersionCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

export async function deserializeAws_json1_1UpdateVariableCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVariableCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateVariableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateVariableResult(data, context);
  const response: UpdateVariableCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateVariableResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateVariableCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVariableCommandOutput> {
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
    case "com.amazonaws.hawksnest.servicefacade.exceptions#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.hawksnest.servicefacade.exceptions#ValidationException":
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

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(
    body,
    context
  );
  const contents: ThrottlingException = {
    name: "ThrottlingException",
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

const serializeAws_json1_1BatchCreateVariableRequest = (
  input: BatchCreateVariableRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.variableEntries !== undefined) {
    bodyParams["variableEntries"] = serializeAws_json1_1VariableEntryList(
      input.variableEntries,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BatchGetVariableRequest = (
  input: BatchGetVariableRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.names !== undefined) {
    bodyParams["names"] = serializeAws_json1_1NameList(input.names, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDetectorVersionRequest = (
  input: CreateDetectorVersionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.detectorId !== undefined) {
    bodyParams["detectorId"] = input.detectorId;
  }
  if (input.externalModelEndpoints !== undefined) {
    bodyParams["externalModelEndpoints"] = serializeAws_json1_1ListOfStrings(
      input.externalModelEndpoints,
      context
    );
  }
  if (input.modelVersions !== undefined) {
    bodyParams["modelVersions"] = serializeAws_json1_1ListOfModelVersions(
      input.modelVersions,
      context
    );
  }
  if (input.rules !== undefined) {
    bodyParams["rules"] = serializeAws_json1_1RuleList(input.rules, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateModelVersionRequest = (
  input: CreateModelVersionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.modelId !== undefined) {
    bodyParams["modelId"] = input.modelId;
  }
  if (input.modelType !== undefined) {
    bodyParams["modelType"] = input.modelType;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateRuleRequest = (
  input: CreateRuleRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.detectorId !== undefined) {
    bodyParams["detectorId"] = input.detectorId;
  }
  if (input.expression !== undefined) {
    bodyParams["expression"] = input.expression;
  }
  if (input.language !== undefined) {
    bodyParams["language"] = input.language;
  }
  if (input.outcomes !== undefined) {
    bodyParams["outcomes"] = serializeAws_json1_1NonEmptyListOfStrings(
      input.outcomes,
      context
    );
  }
  if (input.ruleId !== undefined) {
    bodyParams["ruleId"] = input.ruleId;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateVariableRequest = (
  input: CreateVariableRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.dataSource !== undefined) {
    bodyParams["dataSource"] = input.dataSource;
  }
  if (input.dataType !== undefined) {
    bodyParams["dataType"] = input.dataType;
  }
  if (input.defaultValue !== undefined) {
    bodyParams["defaultValue"] = input.defaultValue;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.variableType !== undefined) {
    bodyParams["variableType"] = input.variableType;
  }
  return bodyParams;
};

const serializeAws_json1_1CsvIndexToVariableMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1DeleteDetectorVersionRequest = (
  input: DeleteDetectorVersionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.detectorId !== undefined) {
    bodyParams["detectorId"] = input.detectorId;
  }
  if (input.detectorVersionId !== undefined) {
    bodyParams["detectorVersionId"] = input.detectorVersionId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteEventRequest = (
  input: DeleteEventRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.eventId !== undefined) {
    bodyParams["eventId"] = input.eventId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeDetectorRequest = (
  input: DescribeDetectorRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.detectorId !== undefined) {
    bodyParams["detectorId"] = input.detectorId;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeModelVersionsRequest = (
  input: DescribeModelVersionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.modelId !== undefined) {
    bodyParams["modelId"] = input.modelId;
  }
  if (input.modelType !== undefined) {
    bodyParams["modelType"] = input.modelType;
  }
  if (input.modelVersionNumber !== undefined) {
    bodyParams["modelVersionNumber"] = input.modelVersionNumber;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1EventAttributeMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1ExternalModelEndpointDataBlobMap = (
  input: { [key: string]: ModelEndpointDataBlob },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_1ModelEndpointDataBlob(
      input[key],
      context
    );
  });
  return mapParams;
};

const serializeAws_json1_1GetDetectorVersionRequest = (
  input: GetDetectorVersionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.detectorId !== undefined) {
    bodyParams["detectorId"] = input.detectorId;
  }
  if (input.detectorVersionId !== undefined) {
    bodyParams["detectorVersionId"] = input.detectorVersionId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDetectorsRequest = (
  input: GetDetectorsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.detectorId !== undefined) {
    bodyParams["detectorId"] = input.detectorId;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetExternalModelsRequest = (
  input: GetExternalModelsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.modelEndpoint !== undefined) {
    bodyParams["modelEndpoint"] = input.modelEndpoint;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetModelVersionRequest = (
  input: GetModelVersionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.modelId !== undefined) {
    bodyParams["modelId"] = input.modelId;
  }
  if (input.modelType !== undefined) {
    bodyParams["modelType"] = input.modelType;
  }
  if (input.modelVersionNumber !== undefined) {
    bodyParams["modelVersionNumber"] = input.modelVersionNumber;
  }
  return bodyParams;
};

const serializeAws_json1_1GetModelsRequest = (
  input: GetModelsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.modelId !== undefined) {
    bodyParams["modelId"] = input.modelId;
  }
  if (input.modelType !== undefined) {
    bodyParams["modelType"] = input.modelType;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetOutcomesRequest = (
  input: GetOutcomesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetPredictionRequest = (
  input: GetPredictionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.detectorId !== undefined) {
    bodyParams["detectorId"] = input.detectorId;
  }
  if (input.detectorVersionId !== undefined) {
    bodyParams["detectorVersionId"] = input.detectorVersionId;
  }
  if (input.eventAttributes !== undefined) {
    bodyParams["eventAttributes"] = serializeAws_json1_1EventAttributeMap(
      input.eventAttributes,
      context
    );
  }
  if (input.eventId !== undefined) {
    bodyParams["eventId"] = input.eventId;
  }
  if (input.externalModelEndpointDataBlobs !== undefined) {
    bodyParams[
      "externalModelEndpointDataBlobs"
    ] = serializeAws_json1_1ExternalModelEndpointDataBlobMap(
      input.externalModelEndpointDataBlobs,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetRulesRequest = (
  input: GetRulesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.detectorId !== undefined) {
    bodyParams["detectorId"] = input.detectorId;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.ruleId !== undefined) {
    bodyParams["ruleId"] = input.ruleId;
  }
  if (input.ruleVersion !== undefined) {
    bodyParams["ruleVersion"] = input.ruleVersion;
  }
  return bodyParams;
};

const serializeAws_json1_1GetVariablesRequest = (
  input: GetVariablesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1JsonKeyToVariableMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1LabelMapper = (
  input: { [key: string]: Array<string> },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_1ListOfStrings(input[key], context);
  });
  return mapParams;
};

const serializeAws_json1_1LabelSchema = (
  input: LabelSchema,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.labelKey !== undefined) {
    bodyParams["labelKey"] = input.labelKey;
  }
  if (input.labelMapper !== undefined) {
    bodyParams["labelMapper"] = serializeAws_json1_1LabelMapper(
      input.labelMapper,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ListOfModelVersions = (
  input: Array<ModelVersion>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ModelVersion(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ListOfStrings = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ModelEndpointDataBlob = (
  input: ModelEndpointDataBlob,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.byteBuffer !== undefined) {
    bodyParams["byteBuffer"] = context.base64Encoder(input.byteBuffer);
  }
  if (input.contentType !== undefined) {
    bodyParams["contentType"] = input.contentType;
  }
  return bodyParams;
};

const serializeAws_json1_1ModelInputConfiguration = (
  input: ModelInputConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.csvInputTemplate !== undefined) {
    bodyParams["csvInputTemplate"] = input.csvInputTemplate;
  }
  if (input.format !== undefined) {
    bodyParams["format"] = input.format;
  }
  if (input.isOpaque !== undefined) {
    bodyParams["isOpaque"] = input.isOpaque;
  }
  if (input.jsonInputTemplate !== undefined) {
    bodyParams["jsonInputTemplate"] = input.jsonInputTemplate;
  }
  return bodyParams;
};

const serializeAws_json1_1ModelOutputConfiguration = (
  input: ModelOutputConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.csvIndexToVariableMap !== undefined) {
    bodyParams[
      "csvIndexToVariableMap"
    ] = serializeAws_json1_1CsvIndexToVariableMap(
      input.csvIndexToVariableMap,
      context
    );
  }
  if (input.format !== undefined) {
    bodyParams["format"] = input.format;
  }
  if (input.jsonKeyToVariableMap !== undefined) {
    bodyParams[
      "jsonKeyToVariableMap"
    ] = serializeAws_json1_1JsonKeyToVariableMap(
      input.jsonKeyToVariableMap,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ModelVariable = (
  input: ModelVariable,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.index !== undefined) {
    bodyParams["index"] = input.index;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1ModelVariablesList = (
  input: Array<ModelVariable>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ModelVariable(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ModelVersion = (
  input: ModelVersion,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.modelId !== undefined) {
    bodyParams["modelId"] = input.modelId;
  }
  if (input.modelType !== undefined) {
    bodyParams["modelType"] = input.modelType;
  }
  if (input.modelVersionNumber !== undefined) {
    bodyParams["modelVersionNumber"] = input.modelVersionNumber;
  }
  return bodyParams;
};

const serializeAws_json1_1NameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1NonEmptyListOfStrings = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1PutDetectorRequest = (
  input: PutDetectorRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.detectorId !== undefined) {
    bodyParams["detectorId"] = input.detectorId;
  }
  return bodyParams;
};

const serializeAws_json1_1PutExternalModelRequest = (
  input: PutExternalModelRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.inputConfiguration !== undefined) {
    bodyParams[
      "inputConfiguration"
    ] = serializeAws_json1_1ModelInputConfiguration(
      input.inputConfiguration,
      context
    );
  }
  if (input.modelEndpoint !== undefined) {
    bodyParams["modelEndpoint"] = input.modelEndpoint;
  }
  if (input.modelEndpointStatus !== undefined) {
    bodyParams["modelEndpointStatus"] = input.modelEndpointStatus;
  }
  if (input.modelSource !== undefined) {
    bodyParams["modelSource"] = input.modelSource;
  }
  if (input.outputConfiguration !== undefined) {
    bodyParams[
      "outputConfiguration"
    ] = serializeAws_json1_1ModelOutputConfiguration(
      input.outputConfiguration,
      context
    );
  }
  if (input.role !== undefined) {
    bodyParams["role"] = serializeAws_json1_1Role(input.role, context);
  }
  return bodyParams;
};

const serializeAws_json1_1PutModelRequest = (
  input: PutModelRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.labelSchema !== undefined) {
    bodyParams["labelSchema"] = serializeAws_json1_1LabelSchema(
      input.labelSchema,
      context
    );
  }
  if (input.modelId !== undefined) {
    bodyParams["modelId"] = input.modelId;
  }
  if (input.modelType !== undefined) {
    bodyParams["modelType"] = input.modelType;
  }
  if (input.modelVariables !== undefined) {
    bodyParams["modelVariables"] = serializeAws_json1_1ModelVariablesList(
      input.modelVariables,
      context
    );
  }
  if (input.trainingDataSource !== undefined) {
    bodyParams["trainingDataSource"] = serializeAws_json1_1TrainingDataSource(
      input.trainingDataSource,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1PutOutcomeRequest = (
  input: PutOutcomeRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1Role = (
  input: Role,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1Rule = (
  input: Rule,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.detectorId !== undefined) {
    bodyParams["detectorId"] = input.detectorId;
  }
  if (input.ruleId !== undefined) {
    bodyParams["ruleId"] = input.ruleId;
  }
  if (input.ruleVersion !== undefined) {
    bodyParams["ruleVersion"] = input.ruleVersion;
  }
  return bodyParams;
};

const serializeAws_json1_1RuleList = (
  input: Array<Rule>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Rule(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TrainingDataSource = (
  input: TrainingDataSource,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.dataAccessRoleArn !== undefined) {
    bodyParams["dataAccessRoleArn"] = input.dataAccessRoleArn;
  }
  if (input.dataLocation !== undefined) {
    bodyParams["dataLocation"] = input.dataLocation;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateDetectorVersionMetadataRequest = (
  input: UpdateDetectorVersionMetadataRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.detectorId !== undefined) {
    bodyParams["detectorId"] = input.detectorId;
  }
  if (input.detectorVersionId !== undefined) {
    bodyParams["detectorVersionId"] = input.detectorVersionId;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateDetectorVersionRequest = (
  input: UpdateDetectorVersionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.detectorId !== undefined) {
    bodyParams["detectorId"] = input.detectorId;
  }
  if (input.detectorVersionId !== undefined) {
    bodyParams["detectorVersionId"] = input.detectorVersionId;
  }
  if (input.externalModelEndpoints !== undefined) {
    bodyParams["externalModelEndpoints"] = serializeAws_json1_1ListOfStrings(
      input.externalModelEndpoints,
      context
    );
  }
  if (input.modelVersions !== undefined) {
    bodyParams["modelVersions"] = serializeAws_json1_1ListOfModelVersions(
      input.modelVersions,
      context
    );
  }
  if (input.rules !== undefined) {
    bodyParams["rules"] = serializeAws_json1_1RuleList(input.rules, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateDetectorVersionStatusRequest = (
  input: UpdateDetectorVersionStatusRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.detectorId !== undefined) {
    bodyParams["detectorId"] = input.detectorId;
  }
  if (input.detectorVersionId !== undefined) {
    bodyParams["detectorVersionId"] = input.detectorVersionId;
  }
  if (input.status !== undefined) {
    bodyParams["status"] = input.status;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateModelVersionRequest = (
  input: UpdateModelVersionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.modelId !== undefined) {
    bodyParams["modelId"] = input.modelId;
  }
  if (input.modelType !== undefined) {
    bodyParams["modelType"] = input.modelType;
  }
  if (input.modelVersionNumber !== undefined) {
    bodyParams["modelVersionNumber"] = input.modelVersionNumber;
  }
  if (input.status !== undefined) {
    bodyParams["status"] = input.status;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateRuleMetadataRequest = (
  input: UpdateRuleMetadataRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.rule !== undefined) {
    bodyParams["rule"] = serializeAws_json1_1Rule(input.rule, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateRuleVersionRequest = (
  input: UpdateRuleVersionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.expression !== undefined) {
    bodyParams["expression"] = input.expression;
  }
  if (input.language !== undefined) {
    bodyParams["language"] = input.language;
  }
  if (input.outcomes !== undefined) {
    bodyParams["outcomes"] = serializeAws_json1_1NonEmptyListOfStrings(
      input.outcomes,
      context
    );
  }
  if (input.rule !== undefined) {
    bodyParams["rule"] = serializeAws_json1_1Rule(input.rule, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateVariableRequest = (
  input: UpdateVariableRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.defaultValue !== undefined) {
    bodyParams["defaultValue"] = input.defaultValue;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.variableType !== undefined) {
    bodyParams["variableType"] = input.variableType;
  }
  return bodyParams;
};

const serializeAws_json1_1VariableEntry = (
  input: VariableEntry,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.dataSource !== undefined) {
    bodyParams["dataSource"] = input.dataSource;
  }
  if (input.dataType !== undefined) {
    bodyParams["dataType"] = input.dataType;
  }
  if (input.defaultValue !== undefined) {
    bodyParams["defaultValue"] = input.defaultValue;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.variableType !== undefined) {
    bodyParams["variableType"] = input.variableType;
  }
  return bodyParams;
};

const serializeAws_json1_1VariableEntryList = (
  input: Array<VariableEntry>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1VariableEntry(entry, context));
  }
  return contents;
};

const deserializeAws_json1_1BatchCreateVariableError = (
  output: any,
  context: __SerdeContext
): BatchCreateVariableError => {
  let contents: any = {
    __type: "BatchCreateVariableError",
    code: undefined,
    message: undefined,
    name: undefined
  };
  if (output.code !== undefined && output.code !== null) {
    contents.code = output.code;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1BatchCreateVariableErrorList = (
  output: any,
  context: __SerdeContext
): Array<BatchCreateVariableError> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BatchCreateVariableError(entry, context)
  );
};

const deserializeAws_json1_1BatchCreateVariableResult = (
  output: any,
  context: __SerdeContext
): BatchCreateVariableResult => {
  let contents: any = {
    __type: "BatchCreateVariableResult",
    errors: undefined
  };
  if (output.errors !== undefined && output.errors !== null) {
    contents.errors = deserializeAws_json1_1BatchCreateVariableErrorList(
      output.errors,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchGetVariableError = (
  output: any,
  context: __SerdeContext
): BatchGetVariableError => {
  let contents: any = {
    __type: "BatchGetVariableError",
    code: undefined,
    message: undefined,
    name: undefined
  };
  if (output.code !== undefined && output.code !== null) {
    contents.code = output.code;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1BatchGetVariableErrorList = (
  output: any,
  context: __SerdeContext
): Array<BatchGetVariableError> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BatchGetVariableError(entry, context)
  );
};

const deserializeAws_json1_1BatchGetVariableResult = (
  output: any,
  context: __SerdeContext
): BatchGetVariableResult => {
  let contents: any = {
    __type: "BatchGetVariableResult",
    errors: undefined,
    variables: undefined
  };
  if (output.errors !== undefined && output.errors !== null) {
    contents.errors = deserializeAws_json1_1BatchGetVariableErrorList(
      output.errors,
      context
    );
  }
  if (output.variables !== undefined && output.variables !== null) {
    contents.variables = deserializeAws_json1_1VariableList(
      output.variables,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateDetectorVersionResult = (
  output: any,
  context: __SerdeContext
): CreateDetectorVersionResult => {
  let contents: any = {
    __type: "CreateDetectorVersionResult",
    detectorId: undefined,
    detectorVersionId: undefined,
    status: undefined
  };
  if (output.detectorId !== undefined && output.detectorId !== null) {
    contents.detectorId = output.detectorId;
  }
  if (
    output.detectorVersionId !== undefined &&
    output.detectorVersionId !== null
  ) {
    contents.detectorVersionId = output.detectorVersionId;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1CreateModelVersionResult = (
  output: any,
  context: __SerdeContext
): CreateModelVersionResult => {
  let contents: any = {
    __type: "CreateModelVersionResult",
    modelId: undefined,
    modelType: undefined,
    modelVersionNumber: undefined,
    status: undefined
  };
  if (output.modelId !== undefined && output.modelId !== null) {
    contents.modelId = output.modelId;
  }
  if (output.modelType !== undefined && output.modelType !== null) {
    contents.modelType = output.modelType;
  }
  if (
    output.modelVersionNumber !== undefined &&
    output.modelVersionNumber !== null
  ) {
    contents.modelVersionNumber = output.modelVersionNumber;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1CreateRuleResult = (
  output: any,
  context: __SerdeContext
): CreateRuleResult => {
  let contents: any = {
    __type: "CreateRuleResult",
    rule: undefined
  };
  if (output.rule !== undefined && output.rule !== null) {
    contents.rule = deserializeAws_json1_1Rule(output.rule, context);
  }
  return contents;
};

const deserializeAws_json1_1CreateVariableResult = (
  output: any,
  context: __SerdeContext
): CreateVariableResult => {
  let contents: any = {
    __type: "CreateVariableResult"
  };
  return contents;
};

const deserializeAws_json1_1CsvIndexToVariableMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1DeleteDetectorVersionResult = (
  output: any,
  context: __SerdeContext
): DeleteDetectorVersionResult => {
  let contents: any = {
    __type: "DeleteDetectorVersionResult"
  };
  return contents;
};

const deserializeAws_json1_1DeleteEventResult = (
  output: any,
  context: __SerdeContext
): DeleteEventResult => {
  let contents: any = {
    __type: "DeleteEventResult"
  };
  return contents;
};

const deserializeAws_json1_1DescribeDetectorResult = (
  output: any,
  context: __SerdeContext
): DescribeDetectorResult => {
  let contents: any = {
    __type: "DescribeDetectorResult",
    detectorId: undefined,
    detectorVersionSummaries: undefined,
    nextToken: undefined
  };
  if (output.detectorId !== undefined && output.detectorId !== null) {
    contents.detectorId = output.detectorId;
  }
  if (
    output.detectorVersionSummaries !== undefined &&
    output.detectorVersionSummaries !== null
  ) {
    contents.detectorVersionSummaries = deserializeAws_json1_1DetectorVersionSummaryList(
      output.detectorVersionSummaries,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeModelVersionsResult = (
  output: any,
  context: __SerdeContext
): DescribeModelVersionsResult => {
  let contents: any = {
    __type: "DescribeModelVersionsResult",
    modelVersionDetails: undefined,
    nextToken: undefined
  };
  if (
    output.modelVersionDetails !== undefined &&
    output.modelVersionDetails !== null
  ) {
    contents.modelVersionDetails = deserializeAws_json1_1ModelVersionDetailList(
      output.modelVersionDetails,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1Detector = (
  output: any,
  context: __SerdeContext
): Detector => {
  let contents: any = {
    __type: "Detector",
    createdTime: undefined,
    description: undefined,
    detectorId: undefined,
    lastUpdatedTime: undefined
  };
  if (output.createdTime !== undefined && output.createdTime !== null) {
    contents.createdTime = output.createdTime;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.detectorId !== undefined && output.detectorId !== null) {
    contents.detectorId = output.detectorId;
  }
  if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
    contents.lastUpdatedTime = output.lastUpdatedTime;
  }
  return contents;
};

const deserializeAws_json1_1DetectorList = (
  output: any,
  context: __SerdeContext
): Array<Detector> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Detector(entry, context)
  );
};

const deserializeAws_json1_1DetectorVersionSummary = (
  output: any,
  context: __SerdeContext
): DetectorVersionSummary => {
  let contents: any = {
    __type: "DetectorVersionSummary",
    description: undefined,
    detectorVersionId: undefined,
    lastUpdatedTime: undefined,
    status: undefined
  };
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (
    output.detectorVersionId !== undefined &&
    output.detectorVersionId !== null
  ) {
    contents.detectorVersionId = output.detectorVersionId;
  }
  if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
    contents.lastUpdatedTime = output.lastUpdatedTime;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1DetectorVersionSummaryList = (
  output: any,
  context: __SerdeContext
): Array<DetectorVersionSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DetectorVersionSummary(entry, context)
  );
};

const deserializeAws_json1_1ExternalModel = (
  output: any,
  context: __SerdeContext
): ExternalModel => {
  let contents: any = {
    __type: "ExternalModel",
    createdTime: undefined,
    inputConfiguration: undefined,
    lastUpdatedTime: undefined,
    modelEndpoint: undefined,
    modelEndpointStatus: undefined,
    modelSource: undefined,
    outputConfiguration: undefined,
    role: undefined
  };
  if (output.createdTime !== undefined && output.createdTime !== null) {
    contents.createdTime = output.createdTime;
  }
  if (
    output.inputConfiguration !== undefined &&
    output.inputConfiguration !== null
  ) {
    contents.inputConfiguration = deserializeAws_json1_1ModelInputConfiguration(
      output.inputConfiguration,
      context
    );
  }
  if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
    contents.lastUpdatedTime = output.lastUpdatedTime;
  }
  if (output.modelEndpoint !== undefined && output.modelEndpoint !== null) {
    contents.modelEndpoint = output.modelEndpoint;
  }
  if (
    output.modelEndpointStatus !== undefined &&
    output.modelEndpointStatus !== null
  ) {
    contents.modelEndpointStatus = output.modelEndpointStatus;
  }
  if (output.modelSource !== undefined && output.modelSource !== null) {
    contents.modelSource = output.modelSource;
  }
  if (
    output.outputConfiguration !== undefined &&
    output.outputConfiguration !== null
  ) {
    contents.outputConfiguration = deserializeAws_json1_1ModelOutputConfiguration(
      output.outputConfiguration,
      context
    );
  }
  if (output.role !== undefined && output.role !== null) {
    contents.role = deserializeAws_json1_1Role(output.role, context);
  }
  return contents;
};

const deserializeAws_json1_1ExternalModelList = (
  output: any,
  context: __SerdeContext
): Array<ExternalModel> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ExternalModel(entry, context)
  );
};

const deserializeAws_json1_1GetDetectorVersionResult = (
  output: any,
  context: __SerdeContext
): GetDetectorVersionResult => {
  let contents: any = {
    __type: "GetDetectorVersionResult",
    createdTime: undefined,
    description: undefined,
    detectorId: undefined,
    detectorVersionId: undefined,
    externalModelEndpoints: undefined,
    lastUpdatedTime: undefined,
    modelVersions: undefined,
    rules: undefined,
    status: undefined
  };
  if (output.createdTime !== undefined && output.createdTime !== null) {
    contents.createdTime = output.createdTime;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.detectorId !== undefined && output.detectorId !== null) {
    contents.detectorId = output.detectorId;
  }
  if (
    output.detectorVersionId !== undefined &&
    output.detectorVersionId !== null
  ) {
    contents.detectorVersionId = output.detectorVersionId;
  }
  if (
    output.externalModelEndpoints !== undefined &&
    output.externalModelEndpoints !== null
  ) {
    contents.externalModelEndpoints = deserializeAws_json1_1ListOfStrings(
      output.externalModelEndpoints,
      context
    );
  }
  if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
    contents.lastUpdatedTime = output.lastUpdatedTime;
  }
  if (output.modelVersions !== undefined && output.modelVersions !== null) {
    contents.modelVersions = deserializeAws_json1_1ListOfModelVersions(
      output.modelVersions,
      context
    );
  }
  if (output.rules !== undefined && output.rules !== null) {
    contents.rules = deserializeAws_json1_1RuleList(output.rules, context);
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1GetDetectorsResult = (
  output: any,
  context: __SerdeContext
): GetDetectorsResult => {
  let contents: any = {
    __type: "GetDetectorsResult",
    detectors: undefined,
    nextToken: undefined
  };
  if (output.detectors !== undefined && output.detectors !== null) {
    contents.detectors = deserializeAws_json1_1DetectorList(
      output.detectors,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1GetExternalModelsResult = (
  output: any,
  context: __SerdeContext
): GetExternalModelsResult => {
  let contents: any = {
    __type: "GetExternalModelsResult",
    externalModels: undefined,
    nextToken: undefined
  };
  if (output.externalModels !== undefined && output.externalModels !== null) {
    contents.externalModels = deserializeAws_json1_1ExternalModelList(
      output.externalModels,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1GetModelVersionResult = (
  output: any,
  context: __SerdeContext
): GetModelVersionResult => {
  let contents: any = {
    __type: "GetModelVersionResult",
    description: undefined,
    modelId: undefined,
    modelType: undefined,
    modelVersionNumber: undefined,
    status: undefined
  };
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.modelId !== undefined && output.modelId !== null) {
    contents.modelId = output.modelId;
  }
  if (output.modelType !== undefined && output.modelType !== null) {
    contents.modelType = output.modelType;
  }
  if (
    output.modelVersionNumber !== undefined &&
    output.modelVersionNumber !== null
  ) {
    contents.modelVersionNumber = output.modelVersionNumber;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1GetModelsResult = (
  output: any,
  context: __SerdeContext
): GetModelsResult => {
  let contents: any = {
    __type: "GetModelsResult",
    models: undefined,
    nextToken: undefined
  };
  if (output.models !== undefined && output.models !== null) {
    contents.models = deserializeAws_json1_1ModelList(output.models, context);
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1GetOutcomesResult = (
  output: any,
  context: __SerdeContext
): GetOutcomesResult => {
  let contents: any = {
    __type: "GetOutcomesResult",
    nextToken: undefined,
    outcomes: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.outcomes !== undefined && output.outcomes !== null) {
    contents.outcomes = deserializeAws_json1_1OutcomeList(
      output.outcomes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetPredictionResult = (
  output: any,
  context: __SerdeContext
): GetPredictionResult => {
  let contents: any = {
    __type: "GetPredictionResult",
    modelScores: undefined,
    outcomes: undefined
  };
  if (output.modelScores !== undefined && output.modelScores !== null) {
    contents.modelScores = deserializeAws_json1_1ListOfModelScores(
      output.modelScores,
      context
    );
  }
  if (output.outcomes !== undefined && output.outcomes !== null) {
    contents.outcomes = deserializeAws_json1_1ListOfStrings(
      output.outcomes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetRulesResult = (
  output: any,
  context: __SerdeContext
): GetRulesResult => {
  let contents: any = {
    __type: "GetRulesResult",
    nextToken: undefined,
    ruleDetails: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.ruleDetails !== undefined && output.ruleDetails !== null) {
    contents.ruleDetails = deserializeAws_json1_1RuleDetailList(
      output.ruleDetails,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetVariablesResult = (
  output: any,
  context: __SerdeContext
): GetVariablesResult => {
  let contents: any = {
    __type: "GetVariablesResult",
    nextToken: undefined,
    variables: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.variables !== undefined && output.variables !== null) {
    contents.variables = deserializeAws_json1_1VariableList(
      output.variables,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1JsonKeyToVariableMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1LabelMapper = (
  output: any,
  context: __SerdeContext
): { [key: string]: Array<string> } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1ListOfStrings(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_1LabelSchema = (
  output: any,
  context: __SerdeContext
): LabelSchema => {
  let contents: any = {
    __type: "LabelSchema",
    labelKey: undefined,
    labelMapper: undefined
  };
  if (output.labelKey !== undefined && output.labelKey !== null) {
    contents.labelKey = output.labelKey;
  }
  if (output.labelMapper !== undefined && output.labelMapper !== null) {
    contents.labelMapper = deserializeAws_json1_1LabelMapper(
      output.labelMapper,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListOfModelScores = (
  output: any,
  context: __SerdeContext
): Array<ModelScores> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ModelScores(entry, context)
  );
};

const deserializeAws_json1_1ListOfModelVersions = (
  output: any,
  context: __SerdeContext
): Array<ModelVersion> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ModelVersion(entry, context)
  );
};

const deserializeAws_json1_1ListOfStrings = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1MetricsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1Model = (
  output: any,
  context: __SerdeContext
): Model => {
  let contents: any = {
    __type: "Model",
    createdTime: undefined,
    description: undefined,
    labelSchema: undefined,
    lastUpdatedTime: undefined,
    modelId: undefined,
    modelType: undefined,
    modelVariables: undefined,
    trainingDataSource: undefined
  };
  if (output.createdTime !== undefined && output.createdTime !== null) {
    contents.createdTime = output.createdTime;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.labelSchema !== undefined && output.labelSchema !== null) {
    contents.labelSchema = deserializeAws_json1_1LabelSchema(
      output.labelSchema,
      context
    );
  }
  if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
    contents.lastUpdatedTime = output.lastUpdatedTime;
  }
  if (output.modelId !== undefined && output.modelId !== null) {
    contents.modelId = output.modelId;
  }
  if (output.modelType !== undefined && output.modelType !== null) {
    contents.modelType = output.modelType;
  }
  if (output.modelVariables !== undefined && output.modelVariables !== null) {
    contents.modelVariables = deserializeAws_json1_1ModelVariablesList(
      output.modelVariables,
      context
    );
  }
  if (
    output.trainingDataSource !== undefined &&
    output.trainingDataSource !== null
  ) {
    contents.trainingDataSource = deserializeAws_json1_1TrainingDataSource(
      output.trainingDataSource,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ModelInputConfiguration = (
  output: any,
  context: __SerdeContext
): ModelInputConfiguration => {
  let contents: any = {
    __type: "ModelInputConfiguration",
    csvInputTemplate: undefined,
    format: undefined,
    isOpaque: undefined,
    jsonInputTemplate: undefined
  };
  if (
    output.csvInputTemplate !== undefined &&
    output.csvInputTemplate !== null
  ) {
    contents.csvInputTemplate = output.csvInputTemplate;
  }
  if (output.format !== undefined && output.format !== null) {
    contents.format = output.format;
  }
  if (output.isOpaque !== undefined && output.isOpaque !== null) {
    contents.isOpaque = output.isOpaque;
  }
  if (
    output.jsonInputTemplate !== undefined &&
    output.jsonInputTemplate !== null
  ) {
    contents.jsonInputTemplate = output.jsonInputTemplate;
  }
  return contents;
};

const deserializeAws_json1_1ModelList = (
  output: any,
  context: __SerdeContext
): Array<Model> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Model(entry, context)
  );
};

const deserializeAws_json1_1ModelOutputConfiguration = (
  output: any,
  context: __SerdeContext
): ModelOutputConfiguration => {
  let contents: any = {
    __type: "ModelOutputConfiguration",
    csvIndexToVariableMap: undefined,
    format: undefined,
    jsonKeyToVariableMap: undefined
  };
  if (
    output.csvIndexToVariableMap !== undefined &&
    output.csvIndexToVariableMap !== null
  ) {
    contents.csvIndexToVariableMap = deserializeAws_json1_1CsvIndexToVariableMap(
      output.csvIndexToVariableMap,
      context
    );
  }
  if (output.format !== undefined && output.format !== null) {
    contents.format = output.format;
  }
  if (
    output.jsonKeyToVariableMap !== undefined &&
    output.jsonKeyToVariableMap !== null
  ) {
    contents.jsonKeyToVariableMap = deserializeAws_json1_1JsonKeyToVariableMap(
      output.jsonKeyToVariableMap,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ModelPredictionMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1ModelScores = (
  output: any,
  context: __SerdeContext
): ModelScores => {
  let contents: any = {
    __type: "ModelScores",
    modelVersion: undefined,
    scores: undefined
  };
  if (output.modelVersion !== undefined && output.modelVersion !== null) {
    contents.modelVersion = deserializeAws_json1_1ModelVersion(
      output.modelVersion,
      context
    );
  }
  if (output.scores !== undefined && output.scores !== null) {
    contents.scores = deserializeAws_json1_1ModelPredictionMap(
      output.scores,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ModelVariable = (
  output: any,
  context: __SerdeContext
): ModelVariable => {
  let contents: any = {
    __type: "ModelVariable",
    index: undefined,
    name: undefined
  };
  if (output.index !== undefined && output.index !== null) {
    contents.index = output.index;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1ModelVariablesList = (
  output: any,
  context: __SerdeContext
): Array<ModelVariable> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ModelVariable(entry, context)
  );
};

const deserializeAws_json1_1ModelVersion = (
  output: any,
  context: __SerdeContext
): ModelVersion => {
  let contents: any = {
    __type: "ModelVersion",
    modelId: undefined,
    modelType: undefined,
    modelVersionNumber: undefined
  };
  if (output.modelId !== undefined && output.modelId !== null) {
    contents.modelId = output.modelId;
  }
  if (output.modelType !== undefined && output.modelType !== null) {
    contents.modelType = output.modelType;
  }
  if (
    output.modelVersionNumber !== undefined &&
    output.modelVersionNumber !== null
  ) {
    contents.modelVersionNumber = output.modelVersionNumber;
  }
  return contents;
};

const deserializeAws_json1_1ModelVersionDetail = (
  output: any,
  context: __SerdeContext
): ModelVersionDetail => {
  let contents: any = {
    __type: "ModelVersionDetail",
    createdTime: undefined,
    description: undefined,
    labelSchema: undefined,
    lastUpdatedTime: undefined,
    modelId: undefined,
    modelType: undefined,
    modelVariables: undefined,
    modelVersionNumber: undefined,
    status: undefined,
    trainingDataSource: undefined,
    trainingMetrics: undefined,
    validationMetrics: undefined
  };
  if (output.createdTime !== undefined && output.createdTime !== null) {
    contents.createdTime = output.createdTime;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.labelSchema !== undefined && output.labelSchema !== null) {
    contents.labelSchema = deserializeAws_json1_1LabelSchema(
      output.labelSchema,
      context
    );
  }
  if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
    contents.lastUpdatedTime = output.lastUpdatedTime;
  }
  if (output.modelId !== undefined && output.modelId !== null) {
    contents.modelId = output.modelId;
  }
  if (output.modelType !== undefined && output.modelType !== null) {
    contents.modelType = output.modelType;
  }
  if (output.modelVariables !== undefined && output.modelVariables !== null) {
    contents.modelVariables = deserializeAws_json1_1ModelVariablesList(
      output.modelVariables,
      context
    );
  }
  if (
    output.modelVersionNumber !== undefined &&
    output.modelVersionNumber !== null
  ) {
    contents.modelVersionNumber = output.modelVersionNumber;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (
    output.trainingDataSource !== undefined &&
    output.trainingDataSource !== null
  ) {
    contents.trainingDataSource = deserializeAws_json1_1TrainingDataSource(
      output.trainingDataSource,
      context
    );
  }
  if (output.trainingMetrics !== undefined && output.trainingMetrics !== null) {
    contents.trainingMetrics = deserializeAws_json1_1MetricsMap(
      output.trainingMetrics,
      context
    );
  }
  if (
    output.validationMetrics !== undefined &&
    output.validationMetrics !== null
  ) {
    contents.validationMetrics = deserializeAws_json1_1MetricsMap(
      output.validationMetrics,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ModelVersionDetailList = (
  output: any,
  context: __SerdeContext
): Array<ModelVersionDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ModelVersionDetail(entry, context)
  );
};

const deserializeAws_json1_1NonEmptyListOfStrings = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Outcome = (
  output: any,
  context: __SerdeContext
): Outcome => {
  let contents: any = {
    __type: "Outcome",
    createdTime: undefined,
    description: undefined,
    lastUpdatedTime: undefined,
    name: undefined
  };
  if (output.createdTime !== undefined && output.createdTime !== null) {
    contents.createdTime = output.createdTime;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
    contents.lastUpdatedTime = output.lastUpdatedTime;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1OutcomeList = (
  output: any,
  context: __SerdeContext
): Array<Outcome> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Outcome(entry, context)
  );
};

const deserializeAws_json1_1PutDetectorResult = (
  output: any,
  context: __SerdeContext
): PutDetectorResult => {
  let contents: any = {
    __type: "PutDetectorResult"
  };
  return contents;
};

const deserializeAws_json1_1PutExternalModelResult = (
  output: any,
  context: __SerdeContext
): PutExternalModelResult => {
  let contents: any = {
    __type: "PutExternalModelResult"
  };
  return contents;
};

const deserializeAws_json1_1PutModelResult = (
  output: any,
  context: __SerdeContext
): PutModelResult => {
  let contents: any = {
    __type: "PutModelResult"
  };
  return contents;
};

const deserializeAws_json1_1PutOutcomeResult = (
  output: any,
  context: __SerdeContext
): PutOutcomeResult => {
  let contents: any = {
    __type: "PutOutcomeResult"
  };
  return contents;
};

const deserializeAws_json1_1Role = (
  output: any,
  context: __SerdeContext
): Role => {
  let contents: any = {
    __type: "Role",
    arn: undefined,
    name: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1Rule = (
  output: any,
  context: __SerdeContext
): Rule => {
  let contents: any = {
    __type: "Rule",
    detectorId: undefined,
    ruleId: undefined,
    ruleVersion: undefined
  };
  if (output.detectorId !== undefined && output.detectorId !== null) {
    contents.detectorId = output.detectorId;
  }
  if (output.ruleId !== undefined && output.ruleId !== null) {
    contents.ruleId = output.ruleId;
  }
  if (output.ruleVersion !== undefined && output.ruleVersion !== null) {
    contents.ruleVersion = output.ruleVersion;
  }
  return contents;
};

const deserializeAws_json1_1RuleDetail = (
  output: any,
  context: __SerdeContext
): RuleDetail => {
  let contents: any = {
    __type: "RuleDetail",
    createdTime: undefined,
    description: undefined,
    detectorId: undefined,
    expression: undefined,
    language: undefined,
    lastUpdatedTime: undefined,
    outcomes: undefined,
    ruleId: undefined,
    ruleVersion: undefined
  };
  if (output.createdTime !== undefined && output.createdTime !== null) {
    contents.createdTime = output.createdTime;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.detectorId !== undefined && output.detectorId !== null) {
    contents.detectorId = output.detectorId;
  }
  if (output.expression !== undefined && output.expression !== null) {
    contents.expression = output.expression;
  }
  if (output.language !== undefined && output.language !== null) {
    contents.language = output.language;
  }
  if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
    contents.lastUpdatedTime = output.lastUpdatedTime;
  }
  if (output.outcomes !== undefined && output.outcomes !== null) {
    contents.outcomes = deserializeAws_json1_1NonEmptyListOfStrings(
      output.outcomes,
      context
    );
  }
  if (output.ruleId !== undefined && output.ruleId !== null) {
    contents.ruleId = output.ruleId;
  }
  if (output.ruleVersion !== undefined && output.ruleVersion !== null) {
    contents.ruleVersion = output.ruleVersion;
  }
  return contents;
};

const deserializeAws_json1_1RuleDetailList = (
  output: any,
  context: __SerdeContext
): Array<RuleDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RuleDetail(entry, context)
  );
};

const deserializeAws_json1_1RuleList = (
  output: any,
  context: __SerdeContext
): Array<Rule> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Rule(entry, context)
  );
};

const deserializeAws_json1_1TrainingDataSource = (
  output: any,
  context: __SerdeContext
): TrainingDataSource => {
  let contents: any = {
    __type: "TrainingDataSource",
    dataAccessRoleArn: undefined,
    dataLocation: undefined
  };
  if (
    output.dataAccessRoleArn !== undefined &&
    output.dataAccessRoleArn !== null
  ) {
    contents.dataAccessRoleArn = output.dataAccessRoleArn;
  }
  if (output.dataLocation !== undefined && output.dataLocation !== null) {
    contents.dataLocation = output.dataLocation;
  }
  return contents;
};

const deserializeAws_json1_1UpdateDetectorVersionMetadataResult = (
  output: any,
  context: __SerdeContext
): UpdateDetectorVersionMetadataResult => {
  let contents: any = {
    __type: "UpdateDetectorVersionMetadataResult"
  };
  return contents;
};

const deserializeAws_json1_1UpdateDetectorVersionResult = (
  output: any,
  context: __SerdeContext
): UpdateDetectorVersionResult => {
  let contents: any = {
    __type: "UpdateDetectorVersionResult"
  };
  return contents;
};

const deserializeAws_json1_1UpdateDetectorVersionStatusResult = (
  output: any,
  context: __SerdeContext
): UpdateDetectorVersionStatusResult => {
  let contents: any = {
    __type: "UpdateDetectorVersionStatusResult"
  };
  return contents;
};

const deserializeAws_json1_1UpdateModelVersionResult = (
  output: any,
  context: __SerdeContext
): UpdateModelVersionResult => {
  let contents: any = {
    __type: "UpdateModelVersionResult"
  };
  return contents;
};

const deserializeAws_json1_1UpdateRuleMetadataResult = (
  output: any,
  context: __SerdeContext
): UpdateRuleMetadataResult => {
  let contents: any = {
    __type: "UpdateRuleMetadataResult"
  };
  return contents;
};

const deserializeAws_json1_1UpdateRuleVersionResult = (
  output: any,
  context: __SerdeContext
): UpdateRuleVersionResult => {
  let contents: any = {
    __type: "UpdateRuleVersionResult",
    rule: undefined
  };
  if (output.rule !== undefined && output.rule !== null) {
    contents.rule = deserializeAws_json1_1Rule(output.rule, context);
  }
  return contents;
};

const deserializeAws_json1_1UpdateVariableResult = (
  output: any,
  context: __SerdeContext
): UpdateVariableResult => {
  let contents: any = {
    __type: "UpdateVariableResult"
  };
  return contents;
};

const deserializeAws_json1_1Variable = (
  output: any,
  context: __SerdeContext
): Variable => {
  let contents: any = {
    __type: "Variable",
    createdTime: undefined,
    dataSource: undefined,
    dataType: undefined,
    defaultValue: undefined,
    description: undefined,
    lastUpdatedTime: undefined,
    name: undefined,
    variableType: undefined
  };
  if (output.createdTime !== undefined && output.createdTime !== null) {
    contents.createdTime = output.createdTime;
  }
  if (output.dataSource !== undefined && output.dataSource !== null) {
    contents.dataSource = output.dataSource;
  }
  if (output.dataType !== undefined && output.dataType !== null) {
    contents.dataType = output.dataType;
  }
  if (output.defaultValue !== undefined && output.defaultValue !== null) {
    contents.defaultValue = output.defaultValue;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
    contents.lastUpdatedTime = output.lastUpdatedTime;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.variableType !== undefined && output.variableType !== null) {
    contents.variableType = output.variableType;
  }
  return contents;
};

const deserializeAws_json1_1VariableList = (
  output: any,
  context: __SerdeContext
): Array<Variable> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Variable(entry, context)
  );
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  let contents: any = {
    __type: "InternalServerException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ThrottlingException = (
  output: any,
  context: __SerdeContext
): ThrottlingException => {
  let contents: any = {
    __type: "ThrottlingException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ValidationException = (
  output: any,
  context: __SerdeContext
): ValidationException => {
  let contents: any = {
    __type: "ValidationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
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
