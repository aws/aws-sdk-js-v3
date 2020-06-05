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

export const serializeAws_json1_1BatchCreateVariableCommand = async (
  input: BatchCreateVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.BatchCreateVariable"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchCreateVariableRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetVariableCommand = async (
  input: BatchGetVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.BatchGetVariable"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetVariableRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDetectorVersionCommand = async (
  input: CreateDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.CreateDetectorVersion"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDetectorVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateModelVersionCommand = async (
  input: CreateModelVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.CreateModelVersion"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateModelVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRuleCommand = async (
  input: CreateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.CreateRule"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateVariableCommand = async (
  input: CreateVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.CreateVariable"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateVariableRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDetectorVersionCommand = async (
  input: DeleteDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.DeleteDetectorVersion"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDetectorVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEventCommand = async (
  input: DeleteEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.DeleteEvent"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEventRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDetectorCommand = async (
  input: DescribeDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.DescribeDetector"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDetectorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeModelVersionsCommand = async (
  input: DescribeModelVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.DescribeModelVersions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeModelVersionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDetectorsCommand = async (
  input: GetDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.GetDetectors"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDetectorsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDetectorVersionCommand = async (
  input: GetDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.GetDetectorVersion"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDetectorVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetExternalModelsCommand = async (
  input: GetExternalModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.GetExternalModels"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetExternalModelsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetModelsCommand = async (
  input: GetModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.GetModels"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetModelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetModelVersionCommand = async (
  input: GetModelVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.GetModelVersion"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetModelVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOutcomesCommand = async (
  input: GetOutcomesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.GetOutcomes"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOutcomesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPredictionCommand = async (
  input: GetPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.GetPrediction"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetPredictionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRulesCommand = async (
  input: GetRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.GetRules"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetVariablesCommand = async (
  input: GetVariablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.GetVariables"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetVariablesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutDetectorCommand = async (
  input: PutDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.PutDetector"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutDetectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutExternalModelCommand = async (
  input: PutExternalModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.PutExternalModel"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutExternalModelRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutModelCommand = async (
  input: PutModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.PutModel"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutOutcomeCommand = async (
  input: PutOutcomeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.PutOutcome"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutOutcomeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDetectorVersionCommand = async (
  input: UpdateDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.UpdateDetectorVersion"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDetectorVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDetectorVersionMetadataCommand = async (
  input: UpdateDetectorVersionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDetectorVersionMetadataRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDetectorVersionStatusCommand = async (
  input: UpdateDetectorVersionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.UpdateDetectorVersionStatus"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDetectorVersionStatusRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateModelVersionCommand = async (
  input: UpdateModelVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.UpdateModelVersion"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateModelVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRuleMetadataCommand = async (
  input: UpdateRuleMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.UpdateRuleMetadata"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateRuleMetadataRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRuleVersionCommand = async (
  input: UpdateRuleVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.UpdateRuleVersion"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateRuleVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateVariableCommand = async (
  input: UpdateVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSHawksNestServiceFacade.UpdateVariable"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateVariableRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1BatchCreateVariableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateVariableCommandOutput> => {
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
};

const deserializeAws_json1_1BatchCreateVariableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateVariableCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1BatchGetVariableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetVariableCommandOutput> => {
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
};

const deserializeAws_json1_1BatchGetVariableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetVariableCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1CreateDetectorVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorVersionCommandOutput> => {
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
};

const deserializeAws_json1_1CreateDetectorVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorVersionCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1CreateModelVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelVersionCommandOutput> => {
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
};

const deserializeAws_json1_1CreateModelVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelVersionCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1CreateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
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
};

const deserializeAws_json1_1CreateRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1CreateVariableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVariableCommandOutput> => {
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
};

const deserializeAws_json1_1CreateVariableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVariableCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1DeleteDetectorVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorVersionCommandOutput> => {
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
};

const deserializeAws_json1_1DeleteDetectorVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorVersionCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1DeleteEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventCommandOutput> => {
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
};

const deserializeAws_json1_1DeleteEventCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

export const deserializeAws_json1_1DescribeDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1DescribeModelVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelVersionsCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeModelVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelVersionsCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1GetDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorsCommandOutput> => {
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
};

const deserializeAws_json1_1GetDetectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorsCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1GetDetectorVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorVersionCommandOutput> => {
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
};

const deserializeAws_json1_1GetDetectorVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorVersionCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1GetExternalModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExternalModelsCommandOutput> => {
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
};

const deserializeAws_json1_1GetExternalModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExternalModelsCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1GetModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelsCommandOutput> => {
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
};

const deserializeAws_json1_1GetModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelsCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1GetModelVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelVersionCommandOutput> => {
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
};

const deserializeAws_json1_1GetModelVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelVersionCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1GetOutcomesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutcomesCommandOutput> => {
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
};

const deserializeAws_json1_1GetOutcomesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutcomesCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1GetPredictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPredictionCommandOutput> => {
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
};

const deserializeAws_json1_1GetPredictionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPredictionCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1GetRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRulesCommandOutput> => {
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
};

const deserializeAws_json1_1GetRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRulesCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1GetVariablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVariablesCommandOutput> => {
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
};

const deserializeAws_json1_1GetVariablesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVariablesCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1PutDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDetectorCommandOutput> => {
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
};

const deserializeAws_json1_1PutDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDetectorCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1PutExternalModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutExternalModelCommandOutput> => {
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
};

const deserializeAws_json1_1PutExternalModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutExternalModelCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1PutModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutModelCommandOutput> => {
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
};

const deserializeAws_json1_1PutModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutModelCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1PutOutcomeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOutcomeCommandOutput> => {
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
};

const deserializeAws_json1_1PutOutcomeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOutcomeCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1UpdateDetectorVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateDetectorVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1UpdateDetectorVersionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionMetadataCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateDetectorVersionMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionMetadataCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1UpdateDetectorVersionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionStatusCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateDetectorVersionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionStatusCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1UpdateModelVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelVersionCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateModelVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelVersionCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1UpdateRuleMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleMetadataCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateRuleMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleMetadataCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1UpdateRuleVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleVersionCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateRuleVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleVersionCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1UpdateVariableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVariableCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateVariableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVariableCommandOutput> => {
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
    case "com.amazonaws.frauddetector#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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
  return {
    ...(input.variableEntries !== undefined && {
      variableEntries: serializeAws_json1_1VariableEntryList(
        input.variableEntries,
        context
      )
    })
  };
};

const serializeAws_json1_1BatchGetVariableRequest = (
  input: BatchGetVariableRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.names !== undefined && {
      names: serializeAws_json1_1NameList(input.names, context)
    })
  };
};

const serializeAws_json1_1CreateDetectorVersionRequest = (
  input: CreateDetectorVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && { description: input.description }),
    ...(input.detectorId !== undefined && { detectorId: input.detectorId }),
    ...(input.externalModelEndpoints !== undefined && {
      externalModelEndpoints: serializeAws_json1_1ListOfStrings(
        input.externalModelEndpoints,
        context
      )
    }),
    ...(input.modelVersions !== undefined && {
      modelVersions: serializeAws_json1_1ListOfModelVersions(
        input.modelVersions,
        context
      )
    }),
    ...(input.rules !== undefined && {
      rules: serializeAws_json1_1RuleList(input.rules, context)
    })
  };
};

const serializeAws_json1_1CreateModelVersionRequest = (
  input: CreateModelVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && { description: input.description }),
    ...(input.modelId !== undefined && { modelId: input.modelId }),
    ...(input.modelType !== undefined && { modelType: input.modelType })
  };
};

const serializeAws_json1_1CreateRuleRequest = (
  input: CreateRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && { description: input.description }),
    ...(input.detectorId !== undefined && { detectorId: input.detectorId }),
    ...(input.expression !== undefined && { expression: input.expression }),
    ...(input.language !== undefined && { language: input.language }),
    ...(input.outcomes !== undefined && {
      outcomes: serializeAws_json1_1NonEmptyListOfStrings(
        input.outcomes,
        context
      )
    }),
    ...(input.ruleId !== undefined && { ruleId: input.ruleId })
  };
};

const serializeAws_json1_1CreateVariableRequest = (
  input: CreateVariableRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.dataSource !== undefined && { dataSource: input.dataSource }),
    ...(input.dataType !== undefined && { dataType: input.dataType }),
    ...(input.defaultValue !== undefined && {
      defaultValue: input.defaultValue
    }),
    ...(input.description !== undefined && { description: input.description }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.variableType !== undefined && {
      variableType: input.variableType
    })
  };
};

const serializeAws_json1_1CsvIndexToVariableMap = (
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

const serializeAws_json1_1DeleteDetectorVersionRequest = (
  input: DeleteDetectorVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectorId !== undefined && { detectorId: input.detectorId }),
    ...(input.detectorVersionId !== undefined && {
      detectorVersionId: input.detectorVersionId
    })
  };
};

const serializeAws_json1_1DeleteEventRequest = (
  input: DeleteEventRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.eventId !== undefined && { eventId: input.eventId })
  };
};

const serializeAws_json1_1DescribeDetectorRequest = (
  input: DescribeDetectorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectorId !== undefined && { detectorId: input.detectorId }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1DescribeModelVersionsRequest = (
  input: DescribeModelVersionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.modelId !== undefined && { modelId: input.modelId }),
    ...(input.modelType !== undefined && { modelType: input.modelType }),
    ...(input.modelVersionNumber !== undefined && {
      modelVersionNumber: input.modelVersionNumber
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1EventAttributeMap = (
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

const serializeAws_json1_1ExternalModelEndpointDataBlobMap = (
  input: { [key: string]: ModelEndpointDataBlob },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (
      acc: { [key: string]: ModelEndpointDataBlob },
      [key, value]: [string, any]
    ) => ({
      ...acc,
      [key]: serializeAws_json1_1ModelEndpointDataBlob(value, context)
    }),
    {}
  );
};

const serializeAws_json1_1GetDetectorsRequest = (
  input: GetDetectorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectorId !== undefined && { detectorId: input.detectorId }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1GetDetectorVersionRequest = (
  input: GetDetectorVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectorId !== undefined && { detectorId: input.detectorId }),
    ...(input.detectorVersionId !== undefined && {
      detectorVersionId: input.detectorVersionId
    })
  };
};

const serializeAws_json1_1GetExternalModelsRequest = (
  input: GetExternalModelsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.modelEndpoint !== undefined && {
      modelEndpoint: input.modelEndpoint
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1GetModelsRequest = (
  input: GetModelsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.modelId !== undefined && { modelId: input.modelId }),
    ...(input.modelType !== undefined && { modelType: input.modelType }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1GetModelVersionRequest = (
  input: GetModelVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.modelId !== undefined && { modelId: input.modelId }),
    ...(input.modelType !== undefined && { modelType: input.modelType }),
    ...(input.modelVersionNumber !== undefined && {
      modelVersionNumber: input.modelVersionNumber
    })
  };
};

const serializeAws_json1_1GetOutcomesRequest = (
  input: GetOutcomesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1GetPredictionRequest = (
  input: GetPredictionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectorId !== undefined && { detectorId: input.detectorId }),
    ...(input.detectorVersionId !== undefined && {
      detectorVersionId: input.detectorVersionId
    }),
    ...(input.eventAttributes !== undefined && {
      eventAttributes: serializeAws_json1_1EventAttributeMap(
        input.eventAttributes,
        context
      )
    }),
    ...(input.eventId !== undefined && { eventId: input.eventId }),
    ...(input.externalModelEndpointDataBlobs !== undefined && {
      externalModelEndpointDataBlobs: serializeAws_json1_1ExternalModelEndpointDataBlobMap(
        input.externalModelEndpointDataBlobs,
        context
      )
    })
  };
};

const serializeAws_json1_1GetRulesRequest = (
  input: GetRulesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectorId !== undefined && { detectorId: input.detectorId }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.ruleId !== undefined && { ruleId: input.ruleId }),
    ...(input.ruleVersion !== undefined && { ruleVersion: input.ruleVersion })
  };
};

const serializeAws_json1_1GetVariablesRequest = (
  input: GetVariablesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1JsonKeyToVariableMap = (
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

const serializeAws_json1_1LabelMapper = (
  input: { [key: string]: string[] },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string[] }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_json1_1ListOfStrings(value, context)
    }),
    {}
  );
};

const serializeAws_json1_1LabelSchema = (
  input: LabelSchema,
  context: __SerdeContext
): any => {
  return {
    ...(input.labelKey !== undefined && { labelKey: input.labelKey }),
    ...(input.labelMapper !== undefined && {
      labelMapper: serializeAws_json1_1LabelMapper(input.labelMapper, context)
    })
  };
};

const serializeAws_json1_1ListOfModelVersions = (
  input: ModelVersion[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1ModelVersion(entry, context));
};

const serializeAws_json1_1ListOfStrings = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ModelEndpointDataBlob = (
  input: ModelEndpointDataBlob,
  context: __SerdeContext
): any => {
  return {
    ...(input.byteBuffer !== undefined && {
      byteBuffer: context.base64Encoder(input.byteBuffer)
    }),
    ...(input.contentType !== undefined && { contentType: input.contentType })
  };
};

const serializeAws_json1_1ModelInputConfiguration = (
  input: ModelInputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.csvInputTemplate !== undefined && {
      csvInputTemplate: input.csvInputTemplate
    }),
    ...(input.format !== undefined && { format: input.format }),
    ...(input.isOpaque !== undefined && { isOpaque: input.isOpaque }),
    ...(input.jsonInputTemplate !== undefined && {
      jsonInputTemplate: input.jsonInputTemplate
    })
  };
};

const serializeAws_json1_1ModelOutputConfiguration = (
  input: ModelOutputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.csvIndexToVariableMap !== undefined && {
      csvIndexToVariableMap: serializeAws_json1_1CsvIndexToVariableMap(
        input.csvIndexToVariableMap,
        context
      )
    }),
    ...(input.format !== undefined && { format: input.format }),
    ...(input.jsonKeyToVariableMap !== undefined && {
      jsonKeyToVariableMap: serializeAws_json1_1JsonKeyToVariableMap(
        input.jsonKeyToVariableMap,
        context
      )
    })
  };
};

const serializeAws_json1_1ModelVariable = (
  input: ModelVariable,
  context: __SerdeContext
): any => {
  return {
    ...(input.index !== undefined && { index: input.index }),
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1ModelVariablesList = (
  input: ModelVariable[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1ModelVariable(entry, context));
};

const serializeAws_json1_1ModelVersion = (
  input: ModelVersion,
  context: __SerdeContext
): any => {
  return {
    ...(input.modelId !== undefined && { modelId: input.modelId }),
    ...(input.modelType !== undefined && { modelType: input.modelType }),
    ...(input.modelVersionNumber !== undefined && {
      modelVersionNumber: input.modelVersionNumber
    })
  };
};

const serializeAws_json1_1NameList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1NonEmptyListOfStrings = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1PutDetectorRequest = (
  input: PutDetectorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && { description: input.description }),
    ...(input.detectorId !== undefined && { detectorId: input.detectorId })
  };
};

const serializeAws_json1_1PutExternalModelRequest = (
  input: PutExternalModelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.inputConfiguration !== undefined && {
      inputConfiguration: serializeAws_json1_1ModelInputConfiguration(
        input.inputConfiguration,
        context
      )
    }),
    ...(input.modelEndpoint !== undefined && {
      modelEndpoint: input.modelEndpoint
    }),
    ...(input.modelEndpointStatus !== undefined && {
      modelEndpointStatus: input.modelEndpointStatus
    }),
    ...(input.modelSource !== undefined && { modelSource: input.modelSource }),
    ...(input.outputConfiguration !== undefined && {
      outputConfiguration: serializeAws_json1_1ModelOutputConfiguration(
        input.outputConfiguration,
        context
      )
    }),
    ...(input.role !== undefined && {
      role: serializeAws_json1_1Role(input.role, context)
    })
  };
};

const serializeAws_json1_1PutModelRequest = (
  input: PutModelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && { description: input.description }),
    ...(input.labelSchema !== undefined && {
      labelSchema: serializeAws_json1_1LabelSchema(input.labelSchema, context)
    }),
    ...(input.modelId !== undefined && { modelId: input.modelId }),
    ...(input.modelType !== undefined && { modelType: input.modelType }),
    ...(input.modelVariables !== undefined && {
      modelVariables: serializeAws_json1_1ModelVariablesList(
        input.modelVariables,
        context
      )
    }),
    ...(input.trainingDataSource !== undefined && {
      trainingDataSource: serializeAws_json1_1TrainingDataSource(
        input.trainingDataSource,
        context
      )
    })
  };
};

const serializeAws_json1_1PutOutcomeRequest = (
  input: PutOutcomeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && { description: input.description }),
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1Role = (
  input: Role,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && { arn: input.arn }),
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1Rule = (
  input: Rule,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectorId !== undefined && { detectorId: input.detectorId }),
    ...(input.ruleId !== undefined && { ruleId: input.ruleId }),
    ...(input.ruleVersion !== undefined && { ruleVersion: input.ruleVersion })
  };
};

const serializeAws_json1_1RuleList = (
  input: Rule[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Rule(entry, context));
};

const serializeAws_json1_1TrainingDataSource = (
  input: TrainingDataSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.dataAccessRoleArn !== undefined && {
      dataAccessRoleArn: input.dataAccessRoleArn
    }),
    ...(input.dataLocation !== undefined && {
      dataLocation: input.dataLocation
    })
  };
};

const serializeAws_json1_1UpdateDetectorVersionMetadataRequest = (
  input: UpdateDetectorVersionMetadataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && { description: input.description }),
    ...(input.detectorId !== undefined && { detectorId: input.detectorId }),
    ...(input.detectorVersionId !== undefined && {
      detectorVersionId: input.detectorVersionId
    })
  };
};

const serializeAws_json1_1UpdateDetectorVersionRequest = (
  input: UpdateDetectorVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && { description: input.description }),
    ...(input.detectorId !== undefined && { detectorId: input.detectorId }),
    ...(input.detectorVersionId !== undefined && {
      detectorVersionId: input.detectorVersionId
    }),
    ...(input.externalModelEndpoints !== undefined && {
      externalModelEndpoints: serializeAws_json1_1ListOfStrings(
        input.externalModelEndpoints,
        context
      )
    }),
    ...(input.modelVersions !== undefined && {
      modelVersions: serializeAws_json1_1ListOfModelVersions(
        input.modelVersions,
        context
      )
    }),
    ...(input.rules !== undefined && {
      rules: serializeAws_json1_1RuleList(input.rules, context)
    })
  };
};

const serializeAws_json1_1UpdateDetectorVersionStatusRequest = (
  input: UpdateDetectorVersionStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectorId !== undefined && { detectorId: input.detectorId }),
    ...(input.detectorVersionId !== undefined && {
      detectorVersionId: input.detectorVersionId
    }),
    ...(input.status !== undefined && { status: input.status })
  };
};

const serializeAws_json1_1UpdateModelVersionRequest = (
  input: UpdateModelVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && { description: input.description }),
    ...(input.modelId !== undefined && { modelId: input.modelId }),
    ...(input.modelType !== undefined && { modelType: input.modelType }),
    ...(input.modelVersionNumber !== undefined && {
      modelVersionNumber: input.modelVersionNumber
    }),
    ...(input.status !== undefined && { status: input.status })
  };
};

const serializeAws_json1_1UpdateRuleMetadataRequest = (
  input: UpdateRuleMetadataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && { description: input.description }),
    ...(input.rule !== undefined && {
      rule: serializeAws_json1_1Rule(input.rule, context)
    })
  };
};

const serializeAws_json1_1UpdateRuleVersionRequest = (
  input: UpdateRuleVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && { description: input.description }),
    ...(input.expression !== undefined && { expression: input.expression }),
    ...(input.language !== undefined && { language: input.language }),
    ...(input.outcomes !== undefined && {
      outcomes: serializeAws_json1_1NonEmptyListOfStrings(
        input.outcomes,
        context
      )
    }),
    ...(input.rule !== undefined && {
      rule: serializeAws_json1_1Rule(input.rule, context)
    })
  };
};

const serializeAws_json1_1UpdateVariableRequest = (
  input: UpdateVariableRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.defaultValue !== undefined && {
      defaultValue: input.defaultValue
    }),
    ...(input.description !== undefined && { description: input.description }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.variableType !== undefined && {
      variableType: input.variableType
    })
  };
};

const serializeAws_json1_1VariableEntry = (
  input: VariableEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.dataSource !== undefined && { dataSource: input.dataSource }),
    ...(input.dataType !== undefined && { dataType: input.dataType }),
    ...(input.defaultValue !== undefined && {
      defaultValue: input.defaultValue
    }),
    ...(input.description !== undefined && { description: input.description }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.variableType !== undefined && {
      variableType: input.variableType
    })
  };
};

const serializeAws_json1_1VariableEntryList = (
  input: VariableEntry[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1VariableEntry(entry, context));
};

const deserializeAws_json1_1BatchCreateVariableError = (
  output: any,
  context: __SerdeContext
): BatchCreateVariableError => {
  return {
    __type: "BatchCreateVariableError",
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchCreateVariableErrorList = (
  output: any,
  context: __SerdeContext
): BatchCreateVariableError[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BatchCreateVariableError(entry, context)
  );
};

const deserializeAws_json1_1BatchCreateVariableResult = (
  output: any,
  context: __SerdeContext
): BatchCreateVariableResult => {
  return {
    __type: "BatchCreateVariableResult",
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_json1_1BatchCreateVariableErrorList(
            output.errors,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchGetVariableError = (
  output: any,
  context: __SerdeContext
): BatchGetVariableError => {
  return {
    __type: "BatchGetVariableError",
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchGetVariableErrorList = (
  output: any,
  context: __SerdeContext
): BatchGetVariableError[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BatchGetVariableError(entry, context)
  );
};

const deserializeAws_json1_1BatchGetVariableResult = (
  output: any,
  context: __SerdeContext
): BatchGetVariableResult => {
  return {
    __type: "BatchGetVariableResult",
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_json1_1BatchGetVariableErrorList(
            output.errors,
            context
          )
        : undefined,
    variables:
      output.variables !== undefined && output.variables !== null
        ? deserializeAws_json1_1VariableList(output.variables, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateDetectorVersionResult = (
  output: any,
  context: __SerdeContext
): CreateDetectorVersionResult => {
  return {
    __type: "CreateDetectorVersionResult",
    detectorId:
      output.detectorId !== undefined && output.detectorId !== null
        ? output.detectorId
        : undefined,
    detectorVersionId:
      output.detectorVersionId !== undefined &&
      output.detectorVersionId !== null
        ? output.detectorVersionId
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateModelVersionResult = (
  output: any,
  context: __SerdeContext
): CreateModelVersionResult => {
  return {
    __type: "CreateModelVersionResult",
    modelId:
      output.modelId !== undefined && output.modelId !== null
        ? output.modelId
        : undefined,
    modelType:
      output.modelType !== undefined && output.modelType !== null
        ? output.modelType
        : undefined,
    modelVersionNumber:
      output.modelVersionNumber !== undefined &&
      output.modelVersionNumber !== null
        ? output.modelVersionNumber
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateRuleResult = (
  output: any,
  context: __SerdeContext
): CreateRuleResult => {
  return {
    __type: "CreateRuleResult",
    rule:
      output.rule !== undefined && output.rule !== null
        ? deserializeAws_json1_1Rule(output.rule, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateVariableResult = (
  output: any,
  context: __SerdeContext
): CreateVariableResult => {
  return {
    __type: "CreateVariableResult"
  } as any;
};

const deserializeAws_json1_1CsvIndexToVariableMap = (
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

const deserializeAws_json1_1DeleteDetectorVersionResult = (
  output: any,
  context: __SerdeContext
): DeleteDetectorVersionResult => {
  return {
    __type: "DeleteDetectorVersionResult"
  } as any;
};

const deserializeAws_json1_1DeleteEventResult = (
  output: any,
  context: __SerdeContext
): DeleteEventResult => {
  return {
    __type: "DeleteEventResult"
  } as any;
};

const deserializeAws_json1_1DescribeDetectorResult = (
  output: any,
  context: __SerdeContext
): DescribeDetectorResult => {
  return {
    __type: "DescribeDetectorResult",
    detectorId:
      output.detectorId !== undefined && output.detectorId !== null
        ? output.detectorId
        : undefined,
    detectorVersionSummaries:
      output.detectorVersionSummaries !== undefined &&
      output.detectorVersionSummaries !== null
        ? deserializeAws_json1_1DetectorVersionSummaryList(
            output.detectorVersionSummaries,
            context
          )
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeModelVersionsResult = (
  output: any,
  context: __SerdeContext
): DescribeModelVersionsResult => {
  return {
    __type: "DescribeModelVersionsResult",
    modelVersionDetails:
      output.modelVersionDetails !== undefined &&
      output.modelVersionDetails !== null
        ? deserializeAws_json1_1ModelVersionDetailList(
            output.modelVersionDetails,
            context
          )
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1Detector = (
  output: any,
  context: __SerdeContext
): Detector => {
  return {
    __type: "Detector",
    createdTime:
      output.createdTime !== undefined && output.createdTime !== null
        ? output.createdTime
        : undefined,
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    detectorId:
      output.detectorId !== undefined && output.detectorId !== null
        ? output.detectorId
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? output.lastUpdatedTime
        : undefined
  } as any;
};

const deserializeAws_json1_1DetectorList = (
  output: any,
  context: __SerdeContext
): Detector[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Detector(entry, context)
  );
};

const deserializeAws_json1_1DetectorVersionSummary = (
  output: any,
  context: __SerdeContext
): DetectorVersionSummary => {
  return {
    __type: "DetectorVersionSummary",
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    detectorVersionId:
      output.detectorVersionId !== undefined &&
      output.detectorVersionId !== null
        ? output.detectorVersionId
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? output.lastUpdatedTime
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1DetectorVersionSummaryList = (
  output: any,
  context: __SerdeContext
): DetectorVersionSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DetectorVersionSummary(entry, context)
  );
};

const deserializeAws_json1_1ExternalModel = (
  output: any,
  context: __SerdeContext
): ExternalModel => {
  return {
    __type: "ExternalModel",
    createdTime:
      output.createdTime !== undefined && output.createdTime !== null
        ? output.createdTime
        : undefined,
    inputConfiguration:
      output.inputConfiguration !== undefined &&
      output.inputConfiguration !== null
        ? deserializeAws_json1_1ModelInputConfiguration(
            output.inputConfiguration,
            context
          )
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? output.lastUpdatedTime
        : undefined,
    modelEndpoint:
      output.modelEndpoint !== undefined && output.modelEndpoint !== null
        ? output.modelEndpoint
        : undefined,
    modelEndpointStatus:
      output.modelEndpointStatus !== undefined &&
      output.modelEndpointStatus !== null
        ? output.modelEndpointStatus
        : undefined,
    modelSource:
      output.modelSource !== undefined && output.modelSource !== null
        ? output.modelSource
        : undefined,
    outputConfiguration:
      output.outputConfiguration !== undefined &&
      output.outputConfiguration !== null
        ? deserializeAws_json1_1ModelOutputConfiguration(
            output.outputConfiguration,
            context
          )
        : undefined,
    role:
      output.role !== undefined && output.role !== null
        ? deserializeAws_json1_1Role(output.role, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ExternalModelList = (
  output: any,
  context: __SerdeContext
): ExternalModel[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ExternalModel(entry, context)
  );
};

const deserializeAws_json1_1GetDetectorsResult = (
  output: any,
  context: __SerdeContext
): GetDetectorsResult => {
  return {
    __type: "GetDetectorsResult",
    detectors:
      output.detectors !== undefined && output.detectors !== null
        ? deserializeAws_json1_1DetectorList(output.detectors, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1GetDetectorVersionResult = (
  output: any,
  context: __SerdeContext
): GetDetectorVersionResult => {
  return {
    __type: "GetDetectorVersionResult",
    createdTime:
      output.createdTime !== undefined && output.createdTime !== null
        ? output.createdTime
        : undefined,
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    detectorId:
      output.detectorId !== undefined && output.detectorId !== null
        ? output.detectorId
        : undefined,
    detectorVersionId:
      output.detectorVersionId !== undefined &&
      output.detectorVersionId !== null
        ? output.detectorVersionId
        : undefined,
    externalModelEndpoints:
      output.externalModelEndpoints !== undefined &&
      output.externalModelEndpoints !== null
        ? deserializeAws_json1_1ListOfStrings(
            output.externalModelEndpoints,
            context
          )
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? output.lastUpdatedTime
        : undefined,
    modelVersions:
      output.modelVersions !== undefined && output.modelVersions !== null
        ? deserializeAws_json1_1ListOfModelVersions(
            output.modelVersions,
            context
          )
        : undefined,
    rules:
      output.rules !== undefined && output.rules !== null
        ? deserializeAws_json1_1RuleList(output.rules, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1GetExternalModelsResult = (
  output: any,
  context: __SerdeContext
): GetExternalModelsResult => {
  return {
    __type: "GetExternalModelsResult",
    externalModels:
      output.externalModels !== undefined && output.externalModels !== null
        ? deserializeAws_json1_1ExternalModelList(
            output.externalModels,
            context
          )
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1GetModelsResult = (
  output: any,
  context: __SerdeContext
): GetModelsResult => {
  return {
    __type: "GetModelsResult",
    models:
      output.models !== undefined && output.models !== null
        ? deserializeAws_json1_1ModelList(output.models, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1GetModelVersionResult = (
  output: any,
  context: __SerdeContext
): GetModelVersionResult => {
  return {
    __type: "GetModelVersionResult",
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    modelId:
      output.modelId !== undefined && output.modelId !== null
        ? output.modelId
        : undefined,
    modelType:
      output.modelType !== undefined && output.modelType !== null
        ? output.modelType
        : undefined,
    modelVersionNumber:
      output.modelVersionNumber !== undefined &&
      output.modelVersionNumber !== null
        ? output.modelVersionNumber
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1GetOutcomesResult = (
  output: any,
  context: __SerdeContext
): GetOutcomesResult => {
  return {
    __type: "GetOutcomesResult",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    outcomes:
      output.outcomes !== undefined && output.outcomes !== null
        ? deserializeAws_json1_1OutcomeList(output.outcomes, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetPredictionResult = (
  output: any,
  context: __SerdeContext
): GetPredictionResult => {
  return {
    __type: "GetPredictionResult",
    modelScores:
      output.modelScores !== undefined && output.modelScores !== null
        ? deserializeAws_json1_1ListOfModelScores(output.modelScores, context)
        : undefined,
    outcomes:
      output.outcomes !== undefined && output.outcomes !== null
        ? deserializeAws_json1_1ListOfStrings(output.outcomes, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetRulesResult = (
  output: any,
  context: __SerdeContext
): GetRulesResult => {
  return {
    __type: "GetRulesResult",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    ruleDetails:
      output.ruleDetails !== undefined && output.ruleDetails !== null
        ? deserializeAws_json1_1RuleDetailList(output.ruleDetails, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetVariablesResult = (
  output: any,
  context: __SerdeContext
): GetVariablesResult => {
  return {
    __type: "GetVariablesResult",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    variables:
      output.variables !== undefined && output.variables !== null
        ? deserializeAws_json1_1VariableList(output.variables, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    __type: "InternalServerException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1JsonKeyToVariableMap = (
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

const deserializeAws_json1_1LabelMapper = (
  output: any,
  context: __SerdeContext
): { [key: string]: string[] } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string[] }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_1ListOfStrings(value, context)
    }),
    {}
  );
};

const deserializeAws_json1_1LabelSchema = (
  output: any,
  context: __SerdeContext
): LabelSchema => {
  return {
    __type: "LabelSchema",
    labelKey:
      output.labelKey !== undefined && output.labelKey !== null
        ? output.labelKey
        : undefined,
    labelMapper:
      output.labelMapper !== undefined && output.labelMapper !== null
        ? deserializeAws_json1_1LabelMapper(output.labelMapper, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListOfModelScores = (
  output: any,
  context: __SerdeContext
): ModelScores[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ModelScores(entry, context)
  );
};

const deserializeAws_json1_1ListOfModelVersions = (
  output: any,
  context: __SerdeContext
): ModelVersion[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ModelVersion(entry, context)
  );
};

const deserializeAws_json1_1ListOfStrings = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1MetricsMap = (
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

const deserializeAws_json1_1Model = (
  output: any,
  context: __SerdeContext
): Model => {
  return {
    __type: "Model",
    createdTime:
      output.createdTime !== undefined && output.createdTime !== null
        ? output.createdTime
        : undefined,
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    labelSchema:
      output.labelSchema !== undefined && output.labelSchema !== null
        ? deserializeAws_json1_1LabelSchema(output.labelSchema, context)
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? output.lastUpdatedTime
        : undefined,
    modelId:
      output.modelId !== undefined && output.modelId !== null
        ? output.modelId
        : undefined,
    modelType:
      output.modelType !== undefined && output.modelType !== null
        ? output.modelType
        : undefined,
    modelVariables:
      output.modelVariables !== undefined && output.modelVariables !== null
        ? deserializeAws_json1_1ModelVariablesList(
            output.modelVariables,
            context
          )
        : undefined,
    trainingDataSource:
      output.trainingDataSource !== undefined &&
      output.trainingDataSource !== null
        ? deserializeAws_json1_1TrainingDataSource(
            output.trainingDataSource,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ModelInputConfiguration = (
  output: any,
  context: __SerdeContext
): ModelInputConfiguration => {
  return {
    __type: "ModelInputConfiguration",
    csvInputTemplate:
      output.csvInputTemplate !== undefined && output.csvInputTemplate !== null
        ? output.csvInputTemplate
        : undefined,
    format:
      output.format !== undefined && output.format !== null
        ? output.format
        : undefined,
    isOpaque:
      output.isOpaque !== undefined && output.isOpaque !== null
        ? output.isOpaque
        : undefined,
    jsonInputTemplate:
      output.jsonInputTemplate !== undefined &&
      output.jsonInputTemplate !== null
        ? output.jsonInputTemplate
        : undefined
  } as any;
};

const deserializeAws_json1_1ModelList = (
  output: any,
  context: __SerdeContext
): Model[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Model(entry, context)
  );
};

const deserializeAws_json1_1ModelOutputConfiguration = (
  output: any,
  context: __SerdeContext
): ModelOutputConfiguration => {
  return {
    __type: "ModelOutputConfiguration",
    csvIndexToVariableMap:
      output.csvIndexToVariableMap !== undefined &&
      output.csvIndexToVariableMap !== null
        ? deserializeAws_json1_1CsvIndexToVariableMap(
            output.csvIndexToVariableMap,
            context
          )
        : undefined,
    format:
      output.format !== undefined && output.format !== null
        ? output.format
        : undefined,
    jsonKeyToVariableMap:
      output.jsonKeyToVariableMap !== undefined &&
      output.jsonKeyToVariableMap !== null
        ? deserializeAws_json1_1JsonKeyToVariableMap(
            output.jsonKeyToVariableMap,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ModelPredictionMap = (
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

const deserializeAws_json1_1ModelScores = (
  output: any,
  context: __SerdeContext
): ModelScores => {
  return {
    __type: "ModelScores",
    modelVersion:
      output.modelVersion !== undefined && output.modelVersion !== null
        ? deserializeAws_json1_1ModelVersion(output.modelVersion, context)
        : undefined,
    scores:
      output.scores !== undefined && output.scores !== null
        ? deserializeAws_json1_1ModelPredictionMap(output.scores, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ModelVariable = (
  output: any,
  context: __SerdeContext
): ModelVariable => {
  return {
    __type: "ModelVariable",
    index:
      output.index !== undefined && output.index !== null
        ? output.index
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1ModelVariablesList = (
  output: any,
  context: __SerdeContext
): ModelVariable[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ModelVariable(entry, context)
  );
};

const deserializeAws_json1_1ModelVersion = (
  output: any,
  context: __SerdeContext
): ModelVersion => {
  return {
    __type: "ModelVersion",
    modelId:
      output.modelId !== undefined && output.modelId !== null
        ? output.modelId
        : undefined,
    modelType:
      output.modelType !== undefined && output.modelType !== null
        ? output.modelType
        : undefined,
    modelVersionNumber:
      output.modelVersionNumber !== undefined &&
      output.modelVersionNumber !== null
        ? output.modelVersionNumber
        : undefined
  } as any;
};

const deserializeAws_json1_1ModelVersionDetail = (
  output: any,
  context: __SerdeContext
): ModelVersionDetail => {
  return {
    __type: "ModelVersionDetail",
    createdTime:
      output.createdTime !== undefined && output.createdTime !== null
        ? output.createdTime
        : undefined,
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    labelSchema:
      output.labelSchema !== undefined && output.labelSchema !== null
        ? deserializeAws_json1_1LabelSchema(output.labelSchema, context)
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? output.lastUpdatedTime
        : undefined,
    modelId:
      output.modelId !== undefined && output.modelId !== null
        ? output.modelId
        : undefined,
    modelType:
      output.modelType !== undefined && output.modelType !== null
        ? output.modelType
        : undefined,
    modelVariables:
      output.modelVariables !== undefined && output.modelVariables !== null
        ? deserializeAws_json1_1ModelVariablesList(
            output.modelVariables,
            context
          )
        : undefined,
    modelVersionNumber:
      output.modelVersionNumber !== undefined &&
      output.modelVersionNumber !== null
        ? output.modelVersionNumber
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    trainingDataSource:
      output.trainingDataSource !== undefined &&
      output.trainingDataSource !== null
        ? deserializeAws_json1_1TrainingDataSource(
            output.trainingDataSource,
            context
          )
        : undefined,
    trainingMetrics:
      output.trainingMetrics !== undefined && output.trainingMetrics !== null
        ? deserializeAws_json1_1MetricsMap(output.trainingMetrics, context)
        : undefined,
    validationMetrics:
      output.validationMetrics !== undefined &&
      output.validationMetrics !== null
        ? deserializeAws_json1_1MetricsMap(output.validationMetrics, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ModelVersionDetailList = (
  output: any,
  context: __SerdeContext
): ModelVersionDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ModelVersionDetail(entry, context)
  );
};

const deserializeAws_json1_1NonEmptyListOfStrings = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Outcome = (
  output: any,
  context: __SerdeContext
): Outcome => {
  return {
    __type: "Outcome",
    createdTime:
      output.createdTime !== undefined && output.createdTime !== null
        ? output.createdTime
        : undefined,
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? output.lastUpdatedTime
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1OutcomeList = (
  output: any,
  context: __SerdeContext
): Outcome[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Outcome(entry, context)
  );
};

const deserializeAws_json1_1PutDetectorResult = (
  output: any,
  context: __SerdeContext
): PutDetectorResult => {
  return {
    __type: "PutDetectorResult"
  } as any;
};

const deserializeAws_json1_1PutExternalModelResult = (
  output: any,
  context: __SerdeContext
): PutExternalModelResult => {
  return {
    __type: "PutExternalModelResult"
  } as any;
};

const deserializeAws_json1_1PutModelResult = (
  output: any,
  context: __SerdeContext
): PutModelResult => {
  return {
    __type: "PutModelResult"
  } as any;
};

const deserializeAws_json1_1PutOutcomeResult = (
  output: any,
  context: __SerdeContext
): PutOutcomeResult => {
  return {
    __type: "PutOutcomeResult"
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1Role = (
  output: any,
  context: __SerdeContext
): Role => {
  return {
    __type: "Role",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1Rule = (
  output: any,
  context: __SerdeContext
): Rule => {
  return {
    __type: "Rule",
    detectorId:
      output.detectorId !== undefined && output.detectorId !== null
        ? output.detectorId
        : undefined,
    ruleId:
      output.ruleId !== undefined && output.ruleId !== null
        ? output.ruleId
        : undefined,
    ruleVersion:
      output.ruleVersion !== undefined && output.ruleVersion !== null
        ? output.ruleVersion
        : undefined
  } as any;
};

const deserializeAws_json1_1RuleDetail = (
  output: any,
  context: __SerdeContext
): RuleDetail => {
  return {
    __type: "RuleDetail",
    createdTime:
      output.createdTime !== undefined && output.createdTime !== null
        ? output.createdTime
        : undefined,
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    detectorId:
      output.detectorId !== undefined && output.detectorId !== null
        ? output.detectorId
        : undefined,
    expression:
      output.expression !== undefined && output.expression !== null
        ? output.expression
        : undefined,
    language:
      output.language !== undefined && output.language !== null
        ? output.language
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? output.lastUpdatedTime
        : undefined,
    outcomes:
      output.outcomes !== undefined && output.outcomes !== null
        ? deserializeAws_json1_1NonEmptyListOfStrings(output.outcomes, context)
        : undefined,
    ruleId:
      output.ruleId !== undefined && output.ruleId !== null
        ? output.ruleId
        : undefined,
    ruleVersion:
      output.ruleVersion !== undefined && output.ruleVersion !== null
        ? output.ruleVersion
        : undefined
  } as any;
};

const deserializeAws_json1_1RuleDetailList = (
  output: any,
  context: __SerdeContext
): RuleDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RuleDetail(entry, context)
  );
};

const deserializeAws_json1_1RuleList = (
  output: any,
  context: __SerdeContext
): Rule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Rule(entry, context)
  );
};

const deserializeAws_json1_1ThrottlingException = (
  output: any,
  context: __SerdeContext
): ThrottlingException => {
  return {
    __type: "ThrottlingException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1TrainingDataSource = (
  output: any,
  context: __SerdeContext
): TrainingDataSource => {
  return {
    __type: "TrainingDataSource",
    dataAccessRoleArn:
      output.dataAccessRoleArn !== undefined &&
      output.dataAccessRoleArn !== null
        ? output.dataAccessRoleArn
        : undefined,
    dataLocation:
      output.dataLocation !== undefined && output.dataLocation !== null
        ? output.dataLocation
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateDetectorVersionMetadataResult = (
  output: any,
  context: __SerdeContext
): UpdateDetectorVersionMetadataResult => {
  return {
    __type: "UpdateDetectorVersionMetadataResult"
  } as any;
};

const deserializeAws_json1_1UpdateDetectorVersionResult = (
  output: any,
  context: __SerdeContext
): UpdateDetectorVersionResult => {
  return {
    __type: "UpdateDetectorVersionResult"
  } as any;
};

const deserializeAws_json1_1UpdateDetectorVersionStatusResult = (
  output: any,
  context: __SerdeContext
): UpdateDetectorVersionStatusResult => {
  return {
    __type: "UpdateDetectorVersionStatusResult"
  } as any;
};

const deserializeAws_json1_1UpdateModelVersionResult = (
  output: any,
  context: __SerdeContext
): UpdateModelVersionResult => {
  return {
    __type: "UpdateModelVersionResult"
  } as any;
};

const deserializeAws_json1_1UpdateRuleMetadataResult = (
  output: any,
  context: __SerdeContext
): UpdateRuleMetadataResult => {
  return {
    __type: "UpdateRuleMetadataResult"
  } as any;
};

const deserializeAws_json1_1UpdateRuleVersionResult = (
  output: any,
  context: __SerdeContext
): UpdateRuleVersionResult => {
  return {
    __type: "UpdateRuleVersionResult",
    rule:
      output.rule !== undefined && output.rule !== null
        ? deserializeAws_json1_1Rule(output.rule, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateVariableResult = (
  output: any,
  context: __SerdeContext
): UpdateVariableResult => {
  return {
    __type: "UpdateVariableResult"
  } as any;
};

const deserializeAws_json1_1ValidationException = (
  output: any,
  context: __SerdeContext
): ValidationException => {
  return {
    __type: "ValidationException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1Variable = (
  output: any,
  context: __SerdeContext
): Variable => {
  return {
    __type: "Variable",
    createdTime:
      output.createdTime !== undefined && output.createdTime !== null
        ? output.createdTime
        : undefined,
    dataSource:
      output.dataSource !== undefined && output.dataSource !== null
        ? output.dataSource
        : undefined,
    dataType:
      output.dataType !== undefined && output.dataType !== null
        ? output.dataType
        : undefined,
    defaultValue:
      output.defaultValue !== undefined && output.defaultValue !== null
        ? output.defaultValue
        : undefined,
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? output.lastUpdatedTime
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    variableType:
      output.variableType !== undefined && output.variableType !== null
        ? output.variableType
        : undefined
  } as any;
};

const deserializeAws_json1_1VariableList = (
  output: any,
  context: __SerdeContext
): Variable[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Variable(entry, context)
  );
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
