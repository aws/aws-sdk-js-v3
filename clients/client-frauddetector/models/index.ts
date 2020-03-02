import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Provides the error of the batch create variable API.</p>
 */
export interface BatchCreateVariableError {
  __type?: "BatchCreateVariableError";
  /**
   * <p>The error code. </p>
   */
  code?: number;

  /**
   * <p>The error message.</p>
   */
  message?: string;

  /**
   * <p>The name.</p>
   */
  name?: string;
}

export namespace BatchCreateVariableError {
  export function isa(o: any): o is BatchCreateVariableError {
    return __isa(o, "BatchCreateVariableError");
  }
}

export interface BatchCreateVariableRequest {
  __type?: "BatchCreateVariableRequest";
  /**
   * <p>The list of variables for the batch create variable request.</p>
   */
  variableEntries: Array<VariableEntry> | undefined;
}

export namespace BatchCreateVariableRequest {
  export function isa(o: any): o is BatchCreateVariableRequest {
    return __isa(o, "BatchCreateVariableRequest");
  }
}

export interface BatchCreateVariableResult {
  __type?: "BatchCreateVariableResult";
  /**
   * <p>Provides the errors for the <code>BatchCreateVariable</code> request.</p>
   */
  errors?: Array<BatchCreateVariableError>;
}

export namespace BatchCreateVariableResult {
  export function isa(o: any): o is BatchCreateVariableResult {
    return __isa(o, "BatchCreateVariableResult");
  }
}

/**
 * <p>Provides the error of the batch get variable API.</p>
 */
export interface BatchGetVariableError {
  __type?: "BatchGetVariableError";
  /**
   * <p>The error code. </p>
   */
  code?: number;

  /**
   * <p>The error message.</p>
   */
  message?: string;

  /**
   * <p>The error name. </p>
   */
  name?: string;
}

export namespace BatchGetVariableError {
  export function isa(o: any): o is BatchGetVariableError {
    return __isa(o, "BatchGetVariableError");
  }
}

export interface BatchGetVariableRequest {
  __type?: "BatchGetVariableRequest";
  /**
   * <p>The list of variable names to get.</p>
   */
  names: Array<string> | undefined;
}

export namespace BatchGetVariableRequest {
  export function isa(o: any): o is BatchGetVariableRequest {
    return __isa(o, "BatchGetVariableRequest");
  }
}

export interface BatchGetVariableResult {
  __type?: "BatchGetVariableResult";
  /**
   * <p>The errors from the request.</p>
   */
  errors?: Array<BatchGetVariableError>;

  /**
   * <p>The returned variables.</p>
   */
  variables?: Array<Variable>;
}

export namespace BatchGetVariableResult {
  export function isa(o: any): o is BatchGetVariableResult {
    return __isa(o, "BatchGetVariableResult");
  }
}

export interface CreateDetectorVersionRequest {
  __type?: "CreateDetectorVersionRequest";
  /**
   * <p>The description of the detector version.</p>
   */
  description?: string;

  /**
   * <p>The ID of the detector under which you want to create a new version.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The Amazon Sagemaker model endpoints to include in the detector version.</p>
   */
  externalModelEndpoints?: Array<string>;

  /**
   * <p>The model versions to include in the detector version.</p>
   */
  modelVersions?: Array<ModelVersion>;

  /**
   * <p>The rules to include in the detector version.</p>
   */
  rules: Array<Rule> | undefined;
}

export namespace CreateDetectorVersionRequest {
  export function isa(o: any): o is CreateDetectorVersionRequest {
    return __isa(o, "CreateDetectorVersionRequest");
  }
}

export interface CreateDetectorVersionResult {
  __type?: "CreateDetectorVersionResult";
  /**
   * <p>The ID for the created version's parent detector.</p>
   */
  detectorId?: string;

  /**
   * <p>The ID for the created detector. </p>
   */
  detectorVersionId?: string;

  /**
   * <p>The status of the detector version.</p>
   */
  status?: DetectorVersionStatus | string;
}

export namespace CreateDetectorVersionResult {
  export function isa(o: any): o is CreateDetectorVersionResult {
    return __isa(o, "CreateDetectorVersionResult");
  }
}

export interface CreateModelVersionRequest {
  __type?: "CreateModelVersionRequest";
  /**
   * <p>The model version description.</p>
   */
  description?: string;

  /**
   * <p>The model ID. </p>
   */
  modelId: string | undefined;

  /**
   * <p>The model type.</p>
   */
  modelType: ModelTypeEnum | string | undefined;
}

export namespace CreateModelVersionRequest {
  export function isa(o: any): o is CreateModelVersionRequest {
    return __isa(o, "CreateModelVersionRequest");
  }
}

export interface CreateModelVersionResult {
  __type?: "CreateModelVersionResult";
  /**
   * <p>The model ID. </p>
   */
  modelId?: string;

  /**
   * <p>The model type.</p>
   */
  modelType?: ModelTypeEnum | string;

  /**
   * <p>The version of the model. </p>
   */
  modelVersionNumber?: string;

  /**
   * <p>The model version status. </p>
   */
  status?: string;
}

export namespace CreateModelVersionResult {
  export function isa(o: any): o is CreateModelVersionResult {
    return __isa(o, "CreateModelVersionResult");
  }
}

export interface CreateRuleRequest {
  __type?: "CreateRuleRequest";
  /**
   * <p>The rule description.</p>
   */
  description?: string;

  /**
   * <p>The detector ID for the rule's parent detector.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The rule expression.</p>
   */
  expression: string | undefined;

  /**
   * <p>The language of the rule.</p>
   */
  language: Language | string | undefined;

  /**
   * <p>The outcome or outcomes returned when the rule expression matches.</p>
   */
  outcomes: Array<string> | undefined;

  /**
   * <p>The rule ID.</p>
   */
  ruleId: string | undefined;
}

export namespace CreateRuleRequest {
  export function isa(o: any): o is CreateRuleRequest {
    return __isa(o, "CreateRuleRequest");
  }
}

export interface CreateRuleResult {
  __type?: "CreateRuleResult";
  /**
   * <p>The created rule.</p>
   */
  rule?: Rule;
}

export namespace CreateRuleResult {
  export function isa(o: any): o is CreateRuleResult {
    return __isa(o, "CreateRuleResult");
  }
}

export interface CreateVariableRequest {
  __type?: "CreateVariableRequest";
  /**
   * <p>The source of the data.</p>
   */
  dataSource: DataSource | string | undefined;

  /**
   * <p>The data type.</p>
   */
  dataType: DataType | string | undefined;

  /**
   * <p>The default value for the variable when no value is received.</p>
   */
  defaultValue: string | undefined;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The name of the variable.</p>
   */
  name: string | undefined;

  /**
   * <p>The variable type.</p>
   */
  variableType?: string;
}

export namespace CreateVariableRequest {
  export function isa(o: any): o is CreateVariableRequest {
    return __isa(o, "CreateVariableRequest");
  }
}

export interface CreateVariableResult {
  __type?: "CreateVariableResult";
}

export namespace CreateVariableResult {
  export function isa(o: any): o is CreateVariableResult {
    return __isa(o, "CreateVariableResult");
  }
}

export enum DataSource {
  EVENT = "EVENT",
  EXTERNAL_MODEL_SCORE = "EXTERNAL_MODEL_SCORE",
  MODEL_SCORE = "MODEL_SCORE"
}

export enum DataType {
  BOOLEAN = "BOOLEAN",
  FLOAT = "FLOAT",
  INTEGER = "INTEGER",
  STRING = "STRING"
}

export interface DeleteDetectorVersionRequest {
  __type?: "DeleteDetectorVersionRequest";
  /**
   * <p>The ID of the parent detector for the detector version to delete.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The ID of the detector version to delete.</p>
   */
  detectorVersionId: string | undefined;
}

export namespace DeleteDetectorVersionRequest {
  export function isa(o: any): o is DeleteDetectorVersionRequest {
    return __isa(o, "DeleteDetectorVersionRequest");
  }
}

export interface DeleteDetectorVersionResult {
  __type?: "DeleteDetectorVersionResult";
}

export namespace DeleteDetectorVersionResult {
  export function isa(o: any): o is DeleteDetectorVersionResult {
    return __isa(o, "DeleteDetectorVersionResult");
  }
}

export interface DeleteEventRequest {
  __type?: "DeleteEventRequest";
  /**
   * <p>The ID of the event to delete.</p>
   */
  eventId: string | undefined;
}

export namespace DeleteEventRequest {
  export function isa(o: any): o is DeleteEventRequest {
    return __isa(o, "DeleteEventRequest");
  }
}

export interface DeleteEventResult {
  __type?: "DeleteEventResult";
}

export namespace DeleteEventResult {
  export function isa(o: any): o is DeleteEventResult {
    return __isa(o, "DeleteEventResult");
  }
}

export interface DescribeDetectorRequest {
  __type?: "DescribeDetectorRequest";
  /**
   * <p>The detector ID.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The maximum number of results to return for the request.</p>
   */
  maxResults?: number;

  /**
   * <p>The next token from the previous response.</p>
   */
  nextToken?: string;
}

export namespace DescribeDetectorRequest {
  export function isa(o: any): o is DescribeDetectorRequest {
    return __isa(o, "DescribeDetectorRequest");
  }
}

export interface DescribeDetectorResult {
  __type?: "DescribeDetectorResult";
  /**
   * <p>The detector ID.</p>
   */
  detectorId?: string;

  /**
   * <p>The status and description for each detector version.</p>
   */
  detectorVersionSummaries?: Array<DetectorVersionSummary>;

  /**
   * <p>The next token to be used for subsequent requests.</p>
   */
  nextToken?: string;
}

export namespace DescribeDetectorResult {
  export function isa(o: any): o is DescribeDetectorResult {
    return __isa(o, "DescribeDetectorResult");
  }
}

export interface DescribeModelVersionsRequest {
  __type?: "DescribeModelVersionsRequest";
  /**
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The model ID.</p>
   */
  modelId?: string;

  /**
   * <p>The model type.</p>
   */
  modelType?: ModelTypeEnum | string;

  /**
   * <p>The model version. </p>
   */
  modelVersionNumber?: string;

  /**
   * <p>The next token from the previous results.</p>
   */
  nextToken?: string;
}

export namespace DescribeModelVersionsRequest {
  export function isa(o: any): o is DescribeModelVersionsRequest {
    return __isa(o, "DescribeModelVersionsRequest");
  }
}

export interface DescribeModelVersionsResult {
  __type?: "DescribeModelVersionsResult";
  /**
   * <p>The model version details.</p>
   */
  modelVersionDetails?: Array<ModelVersionDetail>;

  /**
   * <p>The next token.</p>
   */
  nextToken?: string;
}

export namespace DescribeModelVersionsResult {
  export function isa(o: any): o is DescribeModelVersionsResult {
    return __isa(o, "DescribeModelVersionsResult");
  }
}

/**
 * <p>The detector.</p>
 */
export interface Detector {
  __type?: "Detector";
  /**
   * <p>Timestamp of when the detector was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The detector description.</p>
   */
  description?: string;

  /**
   * <p>The detector ID.</p>
   */
  detectorId?: string;

  /**
   * <p>Timestamp of when the detector was last updated.</p>
   */
  lastUpdatedTime?: string;
}

export namespace Detector {
  export function isa(o: any): o is Detector {
    return __isa(o, "Detector");
  }
}

export enum DetectorVersionStatus {
  ACTIVE = "ACTIVE",
  DRAFT = "DRAFT",
  INACTIVE = "INACTIVE"
}

/**
 * <p>The summary of the detector version.</p>
 */
export interface DetectorVersionSummary {
  __type?: "DetectorVersionSummary";
  /**
   * <p>The detector version description. </p>
   */
  description?: string;

  /**
   * <p>The detector version ID. </p>
   */
  detectorVersionId?: string;

  /**
   * <p>Timestamp of when the detector version was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The detector version status. </p>
   */
  status?: DetectorVersionStatus | string;
}

export namespace DetectorVersionSummary {
  export function isa(o: any): o is DetectorVersionSummary {
    return __isa(o, "DetectorVersionSummary");
  }
}

/**
 * <p>The Amazon SageMaker model.</p>
 */
export interface ExternalModel {
  __type?: "ExternalModel";
  /**
   * <p>Timestamp of when the model was last created.</p>
   */
  createdTime?: string;

  /**
   * <p>The input configuration.</p>
   */
  inputConfiguration?: ModelInputConfiguration;

  /**
   * <p>Timestamp of when the model was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The Amazon SageMaker model endpoints.</p>
   */
  modelEndpoint?: string;

  /**
   * <p>The Amazon Fraud Detector status for the external model endpoint</p>
   */
  modelEndpointStatus?: ModelEndpointStatus | string;

  /**
   * <p>The source of the model.</p>
   */
  modelSource?: ModelSource | string;

  /**
   * <p>The output configuration.</p>
   */
  outputConfiguration?: ModelOutputConfiguration;

  /**
   * <p>The role used to invoke the model. </p>
   */
  role?: Role;
}

export namespace ExternalModel {
  export function isa(o: any): o is ExternalModel {
    return __isa(o, "ExternalModel");
  }
}

export interface GetDetectorVersionRequest {
  __type?: "GetDetectorVersionRequest";
  /**
   * <p>The detector ID.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The detector version ID.</p>
   */
  detectorVersionId: string | undefined;
}

export namespace GetDetectorVersionRequest {
  export function isa(o: any): o is GetDetectorVersionRequest {
    return __isa(o, "GetDetectorVersionRequest");
  }
}

export interface GetDetectorVersionResult {
  __type?: "GetDetectorVersionResult";
  /**
   * <p>The timestamp when the detector version was created. </p>
   */
  createdTime?: string;

  /**
   * <p>The detector version description.</p>
   */
  description?: string;

  /**
   * <p>The detector ID.</p>
   */
  detectorId?: string;

  /**
   * <p>The detector version ID.</p>
   */
  detectorVersionId?: string;

  /**
   * <p>The Amazon SageMaker model endpoints included in the detector version.</p>
   */
  externalModelEndpoints?: Array<string>;

  /**
   * <p>The timestamp when the detector version was last updated.
   *         </p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The model versions included in the detector version. </p>
   */
  modelVersions?: Array<ModelVersion>;

  /**
   * <p>The rules included in the detector version.</p>
   */
  rules?: Array<Rule>;

  /**
   * <p>The status of the detector version.</p>
   */
  status?: DetectorVersionStatus | string;
}

export namespace GetDetectorVersionResult {
  export function isa(o: any): o is GetDetectorVersionResult {
    return __isa(o, "GetDetectorVersionResult");
  }
}

export interface GetDetectorsRequest {
  __type?: "GetDetectorsRequest";
  /**
   * <p>The detector ID.</p>
   */
  detectorId?: string;

  /**
   * <p>The maximum number of objects to return for the request.</p>
   */
  maxResults?: number;

  /**
   * <p>The next token for the subsequent request.</p>
   */
  nextToken?: string;
}

export namespace GetDetectorsRequest {
  export function isa(o: any): o is GetDetectorsRequest {
    return __isa(o, "GetDetectorsRequest");
  }
}

export interface GetDetectorsResult {
  __type?: "GetDetectorsResult";
  /**
   * <p>The detectors.</p>
   */
  detectors?: Array<Detector>;

  /**
   * <p>The next page token.</p>
   */
  nextToken?: string;
}

export namespace GetDetectorsResult {
  export function isa(o: any): o is GetDetectorsResult {
    return __isa(o, "GetDetectorsResult");
  }
}

export interface GetExternalModelsRequest {
  __type?: "GetExternalModelsRequest";
  /**
   * <p>The maximum number of objects to return for the request.</p>
   */
  maxResults?: number;

  /**
   * <p>The Amazon SageMaker model endpoint.</p>
   */
  modelEndpoint?: string;

  /**
   * <p>The next page token for the request.</p>
   */
  nextToken?: string;
}

export namespace GetExternalModelsRequest {
  export function isa(o: any): o is GetExternalModelsRequest {
    return __isa(o, "GetExternalModelsRequest");
  }
}

export interface GetExternalModelsResult {
  __type?: "GetExternalModelsResult";
  /**
   * <p>Gets the Amazon SageMaker models.</p>
   */
  externalModels?: Array<ExternalModel>;

  /**
   * <p>The next page token to be used in subsequent requests.</p>
   */
  nextToken?: string;
}

export namespace GetExternalModelsResult {
  export function isa(o: any): o is GetExternalModelsResult {
    return __isa(o, "GetExternalModelsResult");
  }
}

export interface GetModelVersionRequest {
  __type?: "GetModelVersionRequest";
  /**
   * <p>The model ID. </p>
   */
  modelId: string | undefined;

  /**
   * <p>The model type. </p>
   */
  modelType: ModelTypeEnum | string | undefined;

  /**
   * <p>The model version. </p>
   */
  modelVersionNumber: string | undefined;
}

export namespace GetModelVersionRequest {
  export function isa(o: any): o is GetModelVersionRequest {
    return __isa(o, "GetModelVersionRequest");
  }
}

export interface GetModelVersionResult {
  __type?: "GetModelVersionResult";
  /**
   * <p>The model version description.</p>
   */
  description?: string;

  /**
   * <p>The model ID. </p>
   */
  modelId?: string;

  /**
   * <p>The model type. </p>
   */
  modelType?: ModelTypeEnum | string;

  /**
   * <p>The model version. </p>
   */
  modelVersionNumber?: string;

  /**
   * <p>The model version status. </p>
   */
  status?: string;
}

export namespace GetModelVersionResult {
  export function isa(o: any): o is GetModelVersionResult {
    return __isa(o, "GetModelVersionResult");
  }
}

export interface GetModelsRequest {
  __type?: "GetModelsRequest";
  /**
   * <p>The maximum results to return for the request.</p>
   */
  maxResults?: number;

  /**
   * <p>The model ID.</p>
   */
  modelId?: string;

  /**
   * <p>The model type.</p>
   */
  modelType?: ModelTypeEnum | string;

  /**
   * <p>The next token for the request.</p>
   */
  nextToken?: string;
}

export namespace GetModelsRequest {
  export function isa(o: any): o is GetModelsRequest {
    return __isa(o, "GetModelsRequest");
  }
}

export interface GetModelsResult {
  __type?: "GetModelsResult";
  /**
   * <p>The returned models. </p>
   */
  models?: Array<Model>;

  /**
   * <p>The next token for subsequent requests. </p>
   */
  nextToken?: string;
}

export namespace GetModelsResult {
  export function isa(o: any): o is GetModelsResult {
    return __isa(o, "GetModelsResult");
  }
}

export interface GetOutcomesRequest {
  __type?: "GetOutcomesRequest";
  /**
   * <p>The maximum number of objects to return for the request. </p>
   */
  maxResults?: number;

  /**
   * <p>The name of the outcome or outcomes to get.</p>
   */
  name?: string;

  /**
   * <p>The next page token for the request. </p>
   */
  nextToken?: string;
}

export namespace GetOutcomesRequest {
  export function isa(o: any): o is GetOutcomesRequest {
    return __isa(o, "GetOutcomesRequest");
  }
}

export interface GetOutcomesResult {
  __type?: "GetOutcomesResult";
  /**
   * <p>The next page token for subsequent requests.</p>
   */
  nextToken?: string;

  /**
   * <p>The outcomes. </p>
   */
  outcomes?: Array<Outcome>;
}

export namespace GetOutcomesResult {
  export function isa(o: any): o is GetOutcomesResult {
    return __isa(o, "GetOutcomesResult");
  }
}

export interface GetPredictionRequest {
  __type?: "GetPredictionRequest";
  /**
   * <p>The detector ID. </p>
   */
  detectorId: string | undefined;

  /**
   * <p>The detector version ID.</p>
   */
  detectorVersionId?: string;

  /**
   * <p>Names of variables you defined in Amazon Fraud Detector to represent event data elements and their corresponding values for the event you are sending for evaluation.</p>
   */
  eventAttributes?: { [key: string]: string };

  /**
   * <p>The unique ID used to identify the event.</p>
   */
  eventId: string | undefined;

  /**
   * <p>The Amazon SageMaker model endpoint input data blobs.</p>
   */
  externalModelEndpointDataBlobs?: { [key: string]: ModelEndpointDataBlob };
}

export namespace GetPredictionRequest {
  export function isa(o: any): o is GetPredictionRequest {
    return __isa(o, "GetPredictionRequest");
  }
}

export interface GetPredictionResult {
  __type?: "GetPredictionResult";
  /**
   * <p>The model scores for models used in the detector version.</p>
   */
  modelScores?: Array<ModelScores>;

  /**
   * <p>The prediction outcomes.</p>
   */
  outcomes?: Array<string>;
}

export namespace GetPredictionResult {
  export function isa(o: any): o is GetPredictionResult {
    return __isa(o, "GetPredictionResult");
  }
}

export interface GetRulesRequest {
  __type?: "GetRulesRequest";
  /**
   * <p>The detector ID.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The maximum number of rules to return for the request.</p>
   */
  maxResults?: number;

  /**
   * <p>The next page token.</p>
   */
  nextToken?: string;

  /**
   * <p>The rule ID.</p>
   */
  ruleId?: string;

  /**
   * <p>The rule version.</p>
   */
  ruleVersion?: string;
}

export namespace GetRulesRequest {
  export function isa(o: any): o is GetRulesRequest {
    return __isa(o, "GetRulesRequest");
  }
}

export interface GetRulesResult {
  __type?: "GetRulesResult";
  /**
   * <p>The next page token to be used in subsequent requests.</p>
   */
  nextToken?: string;

  /**
   * <p>The details of the requested rule.</p>
   */
  ruleDetails?: Array<RuleDetail>;
}

export namespace GetRulesResult {
  export function isa(o: any): o is GetRulesResult {
    return __isa(o, "GetRulesResult");
  }
}

export interface GetVariablesRequest {
  __type?: "GetVariablesRequest";
  /**
   * <p>The max size per page determined for the get variable request. </p>
   */
  maxResults?: number;

  /**
   * <p>The name of the variable. </p>
   */
  name?: string;

  /**
   * <p>The next page token of the get variable request. </p>
   */
  nextToken?: string;
}

export namespace GetVariablesRequest {
  export function isa(o: any): o is GetVariablesRequest {
    return __isa(o, "GetVariablesRequest");
  }
}

export interface GetVariablesResult {
  __type?: "GetVariablesResult";
  /**
   * <p>The next page token to be used in subsequent requests. </p>
   */
  nextToken?: string;

  /**
   * <p>The names of the variables returned. </p>
   */
  variables?: Array<Variable>;
}

export namespace GetVariablesResult {
  export function isa(o: any): o is GetVariablesResult {
    return __isa(o, "GetVariablesResult");
  }
}

/**
 * <p>The label schema.</p>
 */
export interface LabelSchema {
  __type?: "LabelSchema";
  /**
   * <p>The label key.</p>
   */
  labelKey: string | undefined;

  /**
   * <p>The label mapper maps the Amazon Fraud Detector supported label to the appropriate source labels.
   *             For example, if <code>"FRAUD"</code> and <code>"LEGIT"</code> are Amazon Fraud Detector supported labels, this mapper could
   *             be: <code>{"FRAUD" => ["0"]</code>, "LEGIT" => ["1"]} or <code>{"FRAUD" => ["false"], "LEGIT" => ["true"]}</code>
   *             or <code>{"FRAUD" => ["fraud", "abuse"], "LEGIT" => ["legit", "safe"]}</code>. The value part of the
   *             mapper is a list, because you may have multiple variants for a single Amazon Fraud Detector label.
   *         </p>
   */
  labelMapper: { [key: string]: Array<string> } | undefined;
}

export namespace LabelSchema {
  export function isa(o: any): o is LabelSchema {
    return __isa(o, "LabelSchema");
  }
}

export enum Language {
  DETECTORPL = "DETECTORPL"
}

/**
 * <p>The model.</p>
 */
export interface Model {
  __type?: "Model";
  /**
   * <p>Timestamp of when the model was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The model description.</p>
   */
  description?: string;

  /**
   * <p>The model label schema.</p>
   */
  labelSchema?: LabelSchema;

  /**
   * <p>Timestamp of last time the model was updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The model ID.</p>
   */
  modelId?: string;

  /**
   * <p>The model type.</p>
   */
  modelType?: ModelTypeEnum | string;

  /**
   * <p>The model input variables.</p>
   */
  modelVariables?: Array<ModelVariable>;

  /**
   * <p>The model training data source in Amazon S3.</p>
   */
  trainingDataSource?: TrainingDataSource;
}

export namespace Model {
  export function isa(o: any): o is Model {
    return __isa(o, "Model");
  }
}

/**
 * <p>A pre-formed Amazon SageMaker model input you can include if your detector version includes an imported Amazon SageMaker model endpoint with pass-through input configuration.</p>
 */
export interface ModelEndpointDataBlob {
  __type?: "ModelEndpointDataBlob";
  /**
   * <p>The byte buffer of the Amazon SageMaker model endpoint input data blob.</p>
   */
  byteBuffer?: Uint8Array;

  /**
   * <p>The content type of the Amazon SageMaker model endpoint input data blob. </p>
   */
  contentType?: string;
}

export namespace ModelEndpointDataBlob {
  export function isa(o: any): o is ModelEndpointDataBlob {
    return __isa(o, "ModelEndpointDataBlob");
  }
}

export enum ModelEndpointStatus {
  ASSOCIATED = "ASSOCIATED",
  DISSOCIATED = "DISSOCIATED"
}

/**
 * <p>The model input configuration.</p>
 */
export interface ModelInputConfiguration {
  __type?: "ModelInputConfiguration";
  /**
   * <p> Template for constructing the CSV input-data sent to SageMaker. At event-evaluation,
   *             the placeholders for variable-names in the template will be replaced with the variable
   *             values before being sent to SageMaker. </p>
   */
  csvInputTemplate?: string;

  /**
   * <p> The format of the model input configuration. The format differs depending on if it is
   *             passed through to SageMaker or constructed by Amazon Fraud Detector.</p>
   */
  format?: ModelInputDataFormat | string;

  /**
   * <p> For an opaque-model, the input to the model will be a ByteBuffer blob provided in the
   *             getPrediction request, and will be passed to SageMaker as-is. For non-opaque models,
   *             the input will be constructed by Amazon Fraud Detector based on the model-configuration. </p>
   */
  isOpaque: boolean | undefined;

  /**
   * <p> Template for constructing the JSON input-data sent to SageMaker. At event-evaluation,
   *             the placeholders for variable names in the template will be replaced with the variable
   *             values before being sent to SageMaker. </p>
   */
  jsonInputTemplate?: string;
}

export namespace ModelInputConfiguration {
  export function isa(o: any): o is ModelInputConfiguration {
    return __isa(o, "ModelInputConfiguration");
  }
}

export enum ModelInputDataFormat {
  CSV = "TEXT_CSV",
  JSON = "APPLICATION_JSON"
}

/**
 * <p>Provides the model output configuration.</p>
 */
export interface ModelOutputConfiguration {
  __type?: "ModelOutputConfiguration";
  /**
   * <p>A map of CSV index values in the SageMaker response to the Amazon Fraud Detector variables. </p>
   */
  csvIndexToVariableMap?: { [key: string]: string };

  /**
   * <p>The format of the model output configuration.</p>
   */
  format: ModelOutputDataFormat | string | undefined;

  /**
   * <p>A map of JSON keys in response from SageMaker to the Amazon Fraud Detector variables. </p>
   */
  jsonKeyToVariableMap?: { [key: string]: string };
}

export namespace ModelOutputConfiguration {
  export function isa(o: any): o is ModelOutputConfiguration {
    return __isa(o, "ModelOutputConfiguration");
  }
}

export enum ModelOutputDataFormat {
  CSV = "TEXT_CSV",
  JSONLINES = "APPLICATION_JSONLINES"
}

/**
 * <p>The fraud prediction scores.</p>
 */
export interface ModelScores {
  __type?: "ModelScores";
  /**
   * <p>The model version.</p>
   */
  modelVersion?: ModelVersion;

  /**
   * <p>The model's fraud prediction scores.</p>
   */
  scores?: { [key: string]: number };
}

export namespace ModelScores {
  export function isa(o: any): o is ModelScores {
    return __isa(o, "ModelScores");
  }
}

export enum ModelSource {
  SAGEMAKER = "SAGEMAKER"
}

export enum ModelTypeEnum {
  ONLINE_FRAUD_INSIGHTS = "ONLINE_FRAUD_INSIGHTS"
}

/**
 * <p>The model variable.></p>
 */
export interface ModelVariable {
  __type?: "ModelVariable";
  /**
   * <p>The model variable's index.></p>
   */
  index?: number;

  /**
   * <p>The model variable's name.></p>
   */
  name: string | undefined;
}

export namespace ModelVariable {
  export function isa(o: any): o is ModelVariable {
    return __isa(o, "ModelVariable");
  }
}

/**
 * <p>The model version.</p>
 */
export interface ModelVersion {
  __type?: "ModelVersion";
  /**
   * <p>The parent model ID.</p>
   */
  modelId: string | undefined;

  /**
   * <p>The model type.</p>
   */
  modelType: ModelTypeEnum | string | undefined;

  /**
   * <p>The model version.</p>
   */
  modelVersionNumber: string | undefined;
}

export namespace ModelVersion {
  export function isa(o: any): o is ModelVersion {
    return __isa(o, "ModelVersion");
  }
}

/**
 * <p>Provides the model version details. </p>
 */
export interface ModelVersionDetail {
  __type?: "ModelVersionDetail";
  /**
   * <p>The timestamp when the model was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The model description.</p>
   */
  description?: string;

  /**
   * <p>The model label schema.</p>
   */
  labelSchema?: LabelSchema;

  /**
   * <p>The timestamp when the model was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The model ID.</p>
   */
  modelId?: string;

  /**
   * <p>The model type.</p>
   */
  modelType?: ModelTypeEnum | string;

  /**
   * <p>The model variables.</p>
   */
  modelVariables?: Array<ModelVariable>;

  /**
   * <p>The model version.</p>
   */
  modelVersionNumber?: string;

  /**
   * <p>The model status.</p>
   */
  status?: string;

  /**
   * <p>The model training data source.</p>
   */
  trainingDataSource?: TrainingDataSource;

  /**
   * <p>The model training metrics.</p>
   */
  trainingMetrics?: { [key: string]: string };

  /**
   * <p>The model validation metrics.</p>
   */
  validationMetrics?: { [key: string]: string };
}

export namespace ModelVersionDetail {
  export function isa(o: any): o is ModelVersionDetail {
    return __isa(o, "ModelVersionDetail");
  }
}

export enum ModelVersionStatus {
  ACTIVATE_IN_PROGRESS = "ACTIVATE_IN_PROGRESS",
  ACTIVATE_REQUESTED = "ACTIVATE_REQUESTED",
  ACTIVE = "ACTIVE",
  ERROR = "ERROR",
  INACTIVATE_IN_PROGRESS = "INACTIVATE_IN_PROGRESS",
  INACTIVE = "INACTIVE",
  TRAINING_COMPLETE = "TRAINING_COMPLETE",
  TRAINING_IN_PROGRESS = "TRAINING_IN_PROGRESS"
}

/**
 * <p>The outcome.</p>
 */
export interface Outcome {
  __type?: "Outcome";
  /**
   * <p>The timestamp when the outcome was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The outcome description.</p>
   */
  description?: string;

  /**
   * <p>The timestamp when the outcome was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The outcome name.</p>
   */
  name?: string;
}

export namespace Outcome {
  export function isa(o: any): o is Outcome {
    return __isa(o, "Outcome");
  }
}

export interface PutDetectorRequest {
  __type?: "PutDetectorRequest";
  /**
   * <p>The description of the detector.</p>
   */
  description?: string;

  /**
   * <p>The detector ID. </p>
   */
  detectorId: string | undefined;
}

export namespace PutDetectorRequest {
  export function isa(o: any): o is PutDetectorRequest {
    return __isa(o, "PutDetectorRequest");
  }
}

export interface PutDetectorResult {
  __type?: "PutDetectorResult";
}

export namespace PutDetectorResult {
  export function isa(o: any): o is PutDetectorResult {
    return __isa(o, "PutDetectorResult");
  }
}

export interface PutExternalModelRequest {
  __type?: "PutExternalModelRequest";
  /**
   * <p>The model endpoint input configuration.</p>
   */
  inputConfiguration: ModelInputConfiguration | undefined;

  /**
   * <p>The model endpoints name.</p>
   */
  modelEndpoint: string | undefined;

  /**
   * <p>The model endpoint’s status in Amazon Fraud Detector.</p>
   */
  modelEndpointStatus: ModelEndpointStatus | string | undefined;

  /**
   * <p>The source of the model.</p>
   */
  modelSource: ModelSource | string | undefined;

  /**
   * <p>The model endpoint output configuration.</p>
   */
  outputConfiguration: ModelOutputConfiguration | undefined;

  /**
   * <p>The IAM role used to invoke the model endpoint.</p>
   */
  role: Role | undefined;
}

export namespace PutExternalModelRequest {
  export function isa(o: any): o is PutExternalModelRequest {
    return __isa(o, "PutExternalModelRequest");
  }
}

export interface PutExternalModelResult {
  __type?: "PutExternalModelResult";
}

export namespace PutExternalModelResult {
  export function isa(o: any): o is PutExternalModelResult {
    return __isa(o, "PutExternalModelResult");
  }
}

export interface PutModelRequest {
  __type?: "PutModelRequest";
  /**
   * <p>The model description. </p>
   */
  description?: string;

  /**
   * <p>The label schema.</p>
   */
  labelSchema: LabelSchema | undefined;

  /**
   * <p>The model ID.</p>
   */
  modelId: string | undefined;

  /**
   * <p>The model type. </p>
   */
  modelType: ModelTypeEnum | string | undefined;

  /**
   * <p>The model input variables.</p>
   */
  modelVariables: Array<ModelVariable> | undefined;

  /**
   * <p>The training data source location in Amazon S3.  </p>
   */
  trainingDataSource: TrainingDataSource | undefined;
}

export namespace PutModelRequest {
  export function isa(o: any): o is PutModelRequest {
    return __isa(o, "PutModelRequest");
  }
}

export interface PutModelResult {
  __type?: "PutModelResult";
}

export namespace PutModelResult {
  export function isa(o: any): o is PutModelResult {
    return __isa(o, "PutModelResult");
  }
}

export interface PutOutcomeRequest {
  __type?: "PutOutcomeRequest";
  /**
   * <p>The outcome description.</p>
   */
  description?: string;

  /**
   * <p>The name of the outcome.</p>
   */
  name: string | undefined;
}

export namespace PutOutcomeRequest {
  export function isa(o: any): o is PutOutcomeRequest {
    return __isa(o, "PutOutcomeRequest");
  }
}

export interface PutOutcomeResult {
  __type?: "PutOutcomeResult";
}

export namespace PutOutcomeResult {
  export function isa(o: any): o is PutOutcomeResult {
    return __isa(o, "PutOutcomeResult");
  }
}

/**
 * <p>The role used to invoke external model endpoints.</p>
 */
export interface Role {
  __type?: "Role";
  /**
   * <p>The role ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>The role name.</p>
   */
  name: string | undefined;
}

export namespace Role {
  export function isa(o: any): o is Role {
    return __isa(o, "Role");
  }
}

/**
 * <p>A rule.</p>
 */
export interface Rule {
  __type?: "Rule";
  /**
   * <p>The detector for which the rule is associated.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The rule ID.</p>
   */
  ruleId: string | undefined;

  /**
   * <p>The rule version.</p>
   */
  ruleVersion: string | undefined;
}

export namespace Rule {
  export function isa(o: any): o is Rule {
    return __isa(o, "Rule");
  }
}

/**
 * <p>The details of the rule.</p>
 */
export interface RuleDetail {
  __type?: "RuleDetail";
  /**
   * <p>The timestamp of when the rule was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The rule description.</p>
   */
  description?: string;

  /**
   * <p>The detector for which the rule is associated.</p>
   */
  detectorId?: string;

  /**
   * <p>The rule expression.</p>
   */
  expression?: string;

  /**
   * <p>The rule language.</p>
   */
  language?: Language | string;

  /**
   * <p>Timestamp of the last time the rule was updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The rule outcomes.</p>
   */
  outcomes?: Array<string>;

  /**
   * <p>The rule ID.</p>
   */
  ruleId?: string;

  /**
   * <p>The rule version.</p>
   */
  ruleVersion?: string;
}

export namespace RuleDetail {
  export function isa(o: any): o is RuleDetail {
    return __isa(o, "RuleDetail");
  }
}

/**
 * <p>The training data source.</p>
 */
export interface TrainingDataSource {
  __type?: "TrainingDataSource";
  /**
   * <p>The data access role ARN for the training data source.</p>
   */
  dataAccessRoleArn: string | undefined;

  /**
   * <p>The data location of the training data source.</p>
   */
  dataLocation: string | undefined;
}

export namespace TrainingDataSource {
  export function isa(o: any): o is TrainingDataSource {
    return __isa(o, "TrainingDataSource");
  }
}

export interface UpdateDetectorVersionMetadataRequest {
  __type?: "UpdateDetectorVersionMetadataRequest";
  /**
   * <p>The description.</p>
   */
  description: string | undefined;

  /**
   * <p>The detector ID.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The detector version ID. </p>
   */
  detectorVersionId: string | undefined;
}

export namespace UpdateDetectorVersionMetadataRequest {
  export function isa(o: any): o is UpdateDetectorVersionMetadataRequest {
    return __isa(o, "UpdateDetectorVersionMetadataRequest");
  }
}

export interface UpdateDetectorVersionMetadataResult {
  __type?: "UpdateDetectorVersionMetadataResult";
}

export namespace UpdateDetectorVersionMetadataResult {
  export function isa(o: any): o is UpdateDetectorVersionMetadataResult {
    return __isa(o, "UpdateDetectorVersionMetadataResult");
  }
}

export interface UpdateDetectorVersionRequest {
  __type?: "UpdateDetectorVersionRequest";
  /**
   * <p>The detector version description. </p>
   */
  description?: string;

  /**
   * <p>The parent detector ID for the detector version you want to update.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The detector version ID. </p>
   */
  detectorVersionId: string | undefined;

  /**
   * <p>The Amazon SageMaker model endpoints to include in the detector version.</p>
   */
  externalModelEndpoints: Array<string> | undefined;

  /**
   * <p>The model versions to include in the detector version.</p>
   */
  modelVersions?: Array<ModelVersion>;

  /**
   * <p>The rules to include in the detector version.</p>
   */
  rules: Array<Rule> | undefined;
}

export namespace UpdateDetectorVersionRequest {
  export function isa(o: any): o is UpdateDetectorVersionRequest {
    return __isa(o, "UpdateDetectorVersionRequest");
  }
}

export interface UpdateDetectorVersionResult {
  __type?: "UpdateDetectorVersionResult";
}

export namespace UpdateDetectorVersionResult {
  export function isa(o: any): o is UpdateDetectorVersionResult {
    return __isa(o, "UpdateDetectorVersionResult");
  }
}

export interface UpdateDetectorVersionStatusRequest {
  __type?: "UpdateDetectorVersionStatusRequest";
  /**
   * <p>The detector ID. </p>
   */
  detectorId: string | undefined;

  /**
   * <p>The detector version ID. </p>
   */
  detectorVersionId: string | undefined;

  /**
   * <p>The new status.</p>
   */
  status: DetectorVersionStatus | string | undefined;
}

export namespace UpdateDetectorVersionStatusRequest {
  export function isa(o: any): o is UpdateDetectorVersionStatusRequest {
    return __isa(o, "UpdateDetectorVersionStatusRequest");
  }
}

export interface UpdateDetectorVersionStatusResult {
  __type?: "UpdateDetectorVersionStatusResult";
}

export namespace UpdateDetectorVersionStatusResult {
  export function isa(o: any): o is UpdateDetectorVersionStatusResult {
    return __isa(o, "UpdateDetectorVersionStatusResult");
  }
}

export interface UpdateModelVersionRequest {
  __type?: "UpdateModelVersionRequest";
  /**
   * <p>The model description.</p>
   */
  description: string | undefined;

  /**
   * <p>The model ID.</p>
   */
  modelId: string | undefined;

  /**
   * <p>The model type.</p>
   */
  modelType: ModelTypeEnum | string | undefined;

  /**
   * <p>The model version.</p>
   */
  modelVersionNumber: string | undefined;

  /**
   * <p>The new model status.</p>
   */
  status: ModelVersionStatus | string | undefined;
}

export namespace UpdateModelVersionRequest {
  export function isa(o: any): o is UpdateModelVersionRequest {
    return __isa(o, "UpdateModelVersionRequest");
  }
}

export interface UpdateModelVersionResult {
  __type?: "UpdateModelVersionResult";
}

export namespace UpdateModelVersionResult {
  export function isa(o: any): o is UpdateModelVersionResult {
    return __isa(o, "UpdateModelVersionResult");
  }
}

export interface UpdateRuleMetadataRequest {
  __type?: "UpdateRuleMetadataRequest";
  /**
   * <p>The rule description.</p>
   */
  description: string | undefined;

  /**
   * <p>The rule to update.</p>
   */
  rule: Rule | undefined;
}

export namespace UpdateRuleMetadataRequest {
  export function isa(o: any): o is UpdateRuleMetadataRequest {
    return __isa(o, "UpdateRuleMetadataRequest");
  }
}

export interface UpdateRuleMetadataResult {
  __type?: "UpdateRuleMetadataResult";
}

export namespace UpdateRuleMetadataResult {
  export function isa(o: any): o is UpdateRuleMetadataResult {
    return __isa(o, "UpdateRuleMetadataResult");
  }
}

export interface UpdateRuleVersionRequest {
  __type?: "UpdateRuleVersionRequest";
  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The rule expression.</p>
   */
  expression: string | undefined;

  /**
   * <p>The language.</p>
   */
  language: Language | string | undefined;

  /**
   * <p>The outcomes.</p>
   */
  outcomes: Array<string> | undefined;

  /**
   * <p>The rule to update.</p>
   */
  rule: Rule | undefined;
}

export namespace UpdateRuleVersionRequest {
  export function isa(o: any): o is UpdateRuleVersionRequest {
    return __isa(o, "UpdateRuleVersionRequest");
  }
}

export interface UpdateRuleVersionResult {
  __type?: "UpdateRuleVersionResult";
  /**
   * <p>The new rule version that was created.</p>
   */
  rule?: Rule;
}

export namespace UpdateRuleVersionResult {
  export function isa(o: any): o is UpdateRuleVersionResult {
    return __isa(o, "UpdateRuleVersionResult");
  }
}

export interface UpdateVariableRequest {
  __type?: "UpdateVariableRequest";
  /**
   * <p>The new default value of the variable.</p>
   */
  defaultValue?: string;

  /**
   * <p>The new description.</p>
   */
  description?: string;

  /**
   * <p>The name of the variable.</p>
   */
  name: string | undefined;

  /**
   * <p>The variable type.</p>
   */
  variableType?: string;
}

export namespace UpdateVariableRequest {
  export function isa(o: any): o is UpdateVariableRequest {
    return __isa(o, "UpdateVariableRequest");
  }
}

export interface UpdateVariableResult {
  __type?: "UpdateVariableResult";
}

export namespace UpdateVariableResult {
  export function isa(o: any): o is UpdateVariableResult {
    return __isa(o, "UpdateVariableResult");
  }
}

/**
 * <p>The variable.</p>
 */
export interface Variable {
  __type?: "Variable";
  /**
   * <p>The time when the variable was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The data source of the variable.</p>
   */
  dataSource?: DataSource | string;

  /**
   * <p>The data type of the variable.</p>
   */
  dataType?: DataType | string;

  /**
   * <p>The default value of the variable.</p>
   */
  defaultValue?: string;

  /**
   * <p>The description of the variable. </p>
   */
  description?: string;

  /**
   * <p>The time when variable was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The name of the variable.</p>
   */
  name?: string;

  /**
   * <p>The variable type of the variable.</p>
   */
  variableType?: string;
}

export namespace Variable {
  export function isa(o: any): o is Variable {
    return __isa(o, "Variable");
  }
}

/**
 * <p>The variable entry in a list.</p>
 */
export interface VariableEntry {
  __type?: "VariableEntry";
  /**
   * <p>The data source of the variable entry.</p>
   */
  dataSource?: string;

  /**
   * <p>The data type of the variable entry.</p>
   */
  dataType?: string;

  /**
   * <p>The default value of the variable entry.</p>
   */
  defaultValue?: string;

  /**
   * <p>The description of the variable entry.</p>
   */
  description?: string;

  /**
   * <p>The name of the variable entry.</p>
   */
  name?: string;

  /**
   * <p>The type of the variable entry.</p>
   */
  variableType?: string;
}

export namespace VariableEntry {
  export function isa(o: any): o is VariableEntry {
    return __isa(o, "VariableEntry");
  }
}

/**
 * <p>An exception indicating an internal server error.</p>
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message: string | undefined;
}

export namespace InternalServerException {
  export function isa(o: any): o is InternalServerException {
    return __isa(o, "InternalServerException");
  }
}

/**
 * <p>An exception indicating the specified resource was not found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>An exception indicating a throttling error.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message: string | undefined;
}

export namespace ThrottlingException {
  export function isa(o: any): o is ThrottlingException {
    return __isa(o, "ThrottlingException");
  }
}

/**
 * <p>An exception indicating a specified value is not allowed.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message: string | undefined;
}

export namespace ValidationException {
  export function isa(o: any): o is ValidationException {
    return __isa(o, "ValidationException");
  }
}
