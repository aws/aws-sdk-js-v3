"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var BatchCreateVariableError;
(function (BatchCreateVariableError) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchCreateVariableError");
    }
    BatchCreateVariableError.isa = isa;
})(BatchCreateVariableError = exports.BatchCreateVariableError || (exports.BatchCreateVariableError = {}));
var BatchCreateVariableRequest;
(function (BatchCreateVariableRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchCreateVariableRequest");
    }
    BatchCreateVariableRequest.isa = isa;
})(BatchCreateVariableRequest = exports.BatchCreateVariableRequest || (exports.BatchCreateVariableRequest = {}));
var BatchCreateVariableResult;
(function (BatchCreateVariableResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchCreateVariableResult");
    }
    BatchCreateVariableResult.isa = isa;
})(BatchCreateVariableResult = exports.BatchCreateVariableResult || (exports.BatchCreateVariableResult = {}));
var BatchGetVariableError;
(function (BatchGetVariableError) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetVariableError");
    }
    BatchGetVariableError.isa = isa;
})(BatchGetVariableError = exports.BatchGetVariableError || (exports.BatchGetVariableError = {}));
var BatchGetVariableRequest;
(function (BatchGetVariableRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetVariableRequest");
    }
    BatchGetVariableRequest.isa = isa;
})(BatchGetVariableRequest = exports.BatchGetVariableRequest || (exports.BatchGetVariableRequest = {}));
var BatchGetVariableResult;
(function (BatchGetVariableResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetVariableResult");
    }
    BatchGetVariableResult.isa = isa;
})(BatchGetVariableResult = exports.BatchGetVariableResult || (exports.BatchGetVariableResult = {}));
var CreateDetectorVersionRequest;
(function (CreateDetectorVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDetectorVersionRequest");
    }
    CreateDetectorVersionRequest.isa = isa;
})(CreateDetectorVersionRequest = exports.CreateDetectorVersionRequest || (exports.CreateDetectorVersionRequest = {}));
var CreateDetectorVersionResult;
(function (CreateDetectorVersionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDetectorVersionResult");
    }
    CreateDetectorVersionResult.isa = isa;
})(CreateDetectorVersionResult = exports.CreateDetectorVersionResult || (exports.CreateDetectorVersionResult = {}));
var CreateModelVersionRequest;
(function (CreateModelVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateModelVersionRequest");
    }
    CreateModelVersionRequest.isa = isa;
})(CreateModelVersionRequest = exports.CreateModelVersionRequest || (exports.CreateModelVersionRequest = {}));
var CreateModelVersionResult;
(function (CreateModelVersionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateModelVersionResult");
    }
    CreateModelVersionResult.isa = isa;
})(CreateModelVersionResult = exports.CreateModelVersionResult || (exports.CreateModelVersionResult = {}));
var CreateRuleRequest;
(function (CreateRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRuleRequest");
    }
    CreateRuleRequest.isa = isa;
})(CreateRuleRequest = exports.CreateRuleRequest || (exports.CreateRuleRequest = {}));
var CreateRuleResult;
(function (CreateRuleResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRuleResult");
    }
    CreateRuleResult.isa = isa;
})(CreateRuleResult = exports.CreateRuleResult || (exports.CreateRuleResult = {}));
var CreateVariableRequest;
(function (CreateVariableRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVariableRequest");
    }
    CreateVariableRequest.isa = isa;
})(CreateVariableRequest = exports.CreateVariableRequest || (exports.CreateVariableRequest = {}));
var CreateVariableResult;
(function (CreateVariableResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVariableResult");
    }
    CreateVariableResult.isa = isa;
})(CreateVariableResult = exports.CreateVariableResult || (exports.CreateVariableResult = {}));
var DataSource;
(function (DataSource) {
    DataSource["EVENT"] = "EVENT";
    DataSource["EXTERNAL_MODEL_SCORE"] = "EXTERNAL_MODEL_SCORE";
    DataSource["MODEL_SCORE"] = "MODEL_SCORE";
})(DataSource = exports.DataSource || (exports.DataSource = {}));
var DataType;
(function (DataType) {
    DataType["BOOLEAN"] = "BOOLEAN";
    DataType["FLOAT"] = "FLOAT";
    DataType["INTEGER"] = "INTEGER";
    DataType["STRING"] = "STRING";
})(DataType = exports.DataType || (exports.DataType = {}));
var DeleteDetectorVersionRequest;
(function (DeleteDetectorVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDetectorVersionRequest");
    }
    DeleteDetectorVersionRequest.isa = isa;
})(DeleteDetectorVersionRequest = exports.DeleteDetectorVersionRequest || (exports.DeleteDetectorVersionRequest = {}));
var DeleteDetectorVersionResult;
(function (DeleteDetectorVersionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDetectorVersionResult");
    }
    DeleteDetectorVersionResult.isa = isa;
})(DeleteDetectorVersionResult = exports.DeleteDetectorVersionResult || (exports.DeleteDetectorVersionResult = {}));
var DeleteEventRequest;
(function (DeleteEventRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteEventRequest");
    }
    DeleteEventRequest.isa = isa;
})(DeleteEventRequest = exports.DeleteEventRequest || (exports.DeleteEventRequest = {}));
var DeleteEventResult;
(function (DeleteEventResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteEventResult");
    }
    DeleteEventResult.isa = isa;
})(DeleteEventResult = exports.DeleteEventResult || (exports.DeleteEventResult = {}));
var DescribeDetectorRequest;
(function (DescribeDetectorRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDetectorRequest");
    }
    DescribeDetectorRequest.isa = isa;
})(DescribeDetectorRequest = exports.DescribeDetectorRequest || (exports.DescribeDetectorRequest = {}));
var DescribeDetectorResult;
(function (DescribeDetectorResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDetectorResult");
    }
    DescribeDetectorResult.isa = isa;
})(DescribeDetectorResult = exports.DescribeDetectorResult || (exports.DescribeDetectorResult = {}));
var DescribeModelVersionsRequest;
(function (DescribeModelVersionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeModelVersionsRequest");
    }
    DescribeModelVersionsRequest.isa = isa;
})(DescribeModelVersionsRequest = exports.DescribeModelVersionsRequest || (exports.DescribeModelVersionsRequest = {}));
var DescribeModelVersionsResult;
(function (DescribeModelVersionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeModelVersionsResult");
    }
    DescribeModelVersionsResult.isa = isa;
})(DescribeModelVersionsResult = exports.DescribeModelVersionsResult || (exports.DescribeModelVersionsResult = {}));
var Detector;
(function (Detector) {
    function isa(o) {
        return smithy_client_1.isa(o, "Detector");
    }
    Detector.isa = isa;
})(Detector = exports.Detector || (exports.Detector = {}));
var DetectorVersionStatus;
(function (DetectorVersionStatus) {
    DetectorVersionStatus["ACTIVE"] = "ACTIVE";
    DetectorVersionStatus["DRAFT"] = "DRAFT";
    DetectorVersionStatus["INACTIVE"] = "INACTIVE";
})(DetectorVersionStatus = exports.DetectorVersionStatus || (exports.DetectorVersionStatus = {}));
var DetectorVersionSummary;
(function (DetectorVersionSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectorVersionSummary");
    }
    DetectorVersionSummary.isa = isa;
})(DetectorVersionSummary = exports.DetectorVersionSummary || (exports.DetectorVersionSummary = {}));
var ExternalModel;
(function (ExternalModel) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExternalModel");
    }
    ExternalModel.isa = isa;
})(ExternalModel = exports.ExternalModel || (exports.ExternalModel = {}));
var GetDetectorVersionRequest;
(function (GetDetectorVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDetectorVersionRequest");
    }
    GetDetectorVersionRequest.isa = isa;
})(GetDetectorVersionRequest = exports.GetDetectorVersionRequest || (exports.GetDetectorVersionRequest = {}));
var GetDetectorVersionResult;
(function (GetDetectorVersionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDetectorVersionResult");
    }
    GetDetectorVersionResult.isa = isa;
})(GetDetectorVersionResult = exports.GetDetectorVersionResult || (exports.GetDetectorVersionResult = {}));
var GetDetectorsRequest;
(function (GetDetectorsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDetectorsRequest");
    }
    GetDetectorsRequest.isa = isa;
})(GetDetectorsRequest = exports.GetDetectorsRequest || (exports.GetDetectorsRequest = {}));
var GetDetectorsResult;
(function (GetDetectorsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDetectorsResult");
    }
    GetDetectorsResult.isa = isa;
})(GetDetectorsResult = exports.GetDetectorsResult || (exports.GetDetectorsResult = {}));
var GetExternalModelsRequest;
(function (GetExternalModelsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetExternalModelsRequest");
    }
    GetExternalModelsRequest.isa = isa;
})(GetExternalModelsRequest = exports.GetExternalModelsRequest || (exports.GetExternalModelsRequest = {}));
var GetExternalModelsResult;
(function (GetExternalModelsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetExternalModelsResult");
    }
    GetExternalModelsResult.isa = isa;
})(GetExternalModelsResult = exports.GetExternalModelsResult || (exports.GetExternalModelsResult = {}));
var GetModelVersionRequest;
(function (GetModelVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetModelVersionRequest");
    }
    GetModelVersionRequest.isa = isa;
})(GetModelVersionRequest = exports.GetModelVersionRequest || (exports.GetModelVersionRequest = {}));
var GetModelVersionResult;
(function (GetModelVersionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetModelVersionResult");
    }
    GetModelVersionResult.isa = isa;
})(GetModelVersionResult = exports.GetModelVersionResult || (exports.GetModelVersionResult = {}));
var GetModelsRequest;
(function (GetModelsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetModelsRequest");
    }
    GetModelsRequest.isa = isa;
})(GetModelsRequest = exports.GetModelsRequest || (exports.GetModelsRequest = {}));
var GetModelsResult;
(function (GetModelsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetModelsResult");
    }
    GetModelsResult.isa = isa;
})(GetModelsResult = exports.GetModelsResult || (exports.GetModelsResult = {}));
var GetOutcomesRequest;
(function (GetOutcomesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOutcomesRequest");
    }
    GetOutcomesRequest.isa = isa;
})(GetOutcomesRequest = exports.GetOutcomesRequest || (exports.GetOutcomesRequest = {}));
var GetOutcomesResult;
(function (GetOutcomesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOutcomesResult");
    }
    GetOutcomesResult.isa = isa;
})(GetOutcomesResult = exports.GetOutcomesResult || (exports.GetOutcomesResult = {}));
var GetPredictionRequest;
(function (GetPredictionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPredictionRequest");
    }
    GetPredictionRequest.isa = isa;
})(GetPredictionRequest = exports.GetPredictionRequest || (exports.GetPredictionRequest = {}));
var GetPredictionResult;
(function (GetPredictionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPredictionResult");
    }
    GetPredictionResult.isa = isa;
})(GetPredictionResult = exports.GetPredictionResult || (exports.GetPredictionResult = {}));
var GetRulesRequest;
(function (GetRulesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRulesRequest");
    }
    GetRulesRequest.isa = isa;
})(GetRulesRequest = exports.GetRulesRequest || (exports.GetRulesRequest = {}));
var GetRulesResult;
(function (GetRulesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRulesResult");
    }
    GetRulesResult.isa = isa;
})(GetRulesResult = exports.GetRulesResult || (exports.GetRulesResult = {}));
var GetVariablesRequest;
(function (GetVariablesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetVariablesRequest");
    }
    GetVariablesRequest.isa = isa;
})(GetVariablesRequest = exports.GetVariablesRequest || (exports.GetVariablesRequest = {}));
var GetVariablesResult;
(function (GetVariablesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetVariablesResult");
    }
    GetVariablesResult.isa = isa;
})(GetVariablesResult = exports.GetVariablesResult || (exports.GetVariablesResult = {}));
var LabelSchema;
(function (LabelSchema) {
    function isa(o) {
        return smithy_client_1.isa(o, "LabelSchema");
    }
    LabelSchema.isa = isa;
})(LabelSchema = exports.LabelSchema || (exports.LabelSchema = {}));
var Language;
(function (Language) {
    Language["DETECTORPL"] = "DETECTORPL";
})(Language = exports.Language || (exports.Language = {}));
var Model;
(function (Model) {
    function isa(o) {
        return smithy_client_1.isa(o, "Model");
    }
    Model.isa = isa;
})(Model = exports.Model || (exports.Model = {}));
var ModelEndpointDataBlob;
(function (ModelEndpointDataBlob) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModelEndpointDataBlob");
    }
    ModelEndpointDataBlob.isa = isa;
})(ModelEndpointDataBlob = exports.ModelEndpointDataBlob || (exports.ModelEndpointDataBlob = {}));
var ModelEndpointStatus;
(function (ModelEndpointStatus) {
    ModelEndpointStatus["ASSOCIATED"] = "ASSOCIATED";
    ModelEndpointStatus["DISSOCIATED"] = "DISSOCIATED";
})(ModelEndpointStatus = exports.ModelEndpointStatus || (exports.ModelEndpointStatus = {}));
var ModelInputConfiguration;
(function (ModelInputConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModelInputConfiguration");
    }
    ModelInputConfiguration.isa = isa;
})(ModelInputConfiguration = exports.ModelInputConfiguration || (exports.ModelInputConfiguration = {}));
var ModelInputDataFormat;
(function (ModelInputDataFormat) {
    ModelInputDataFormat["CSV"] = "TEXT_CSV";
    ModelInputDataFormat["JSON"] = "APPLICATION_JSON";
})(ModelInputDataFormat = exports.ModelInputDataFormat || (exports.ModelInputDataFormat = {}));
var ModelOutputConfiguration;
(function (ModelOutputConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModelOutputConfiguration");
    }
    ModelOutputConfiguration.isa = isa;
})(ModelOutputConfiguration = exports.ModelOutputConfiguration || (exports.ModelOutputConfiguration = {}));
var ModelOutputDataFormat;
(function (ModelOutputDataFormat) {
    ModelOutputDataFormat["CSV"] = "TEXT_CSV";
    ModelOutputDataFormat["JSONLINES"] = "APPLICATION_JSONLINES";
})(ModelOutputDataFormat = exports.ModelOutputDataFormat || (exports.ModelOutputDataFormat = {}));
var ModelScores;
(function (ModelScores) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModelScores");
    }
    ModelScores.isa = isa;
})(ModelScores = exports.ModelScores || (exports.ModelScores = {}));
var ModelSource;
(function (ModelSource) {
    ModelSource["SAGEMAKER"] = "SAGEMAKER";
})(ModelSource = exports.ModelSource || (exports.ModelSource = {}));
var ModelTypeEnum;
(function (ModelTypeEnum) {
    ModelTypeEnum["ONLINE_FRAUD_INSIGHTS"] = "ONLINE_FRAUD_INSIGHTS";
})(ModelTypeEnum = exports.ModelTypeEnum || (exports.ModelTypeEnum = {}));
var ModelVariable;
(function (ModelVariable) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModelVariable");
    }
    ModelVariable.isa = isa;
})(ModelVariable = exports.ModelVariable || (exports.ModelVariable = {}));
var ModelVersion;
(function (ModelVersion) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModelVersion");
    }
    ModelVersion.isa = isa;
})(ModelVersion = exports.ModelVersion || (exports.ModelVersion = {}));
var ModelVersionDetail;
(function (ModelVersionDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModelVersionDetail");
    }
    ModelVersionDetail.isa = isa;
})(ModelVersionDetail = exports.ModelVersionDetail || (exports.ModelVersionDetail = {}));
var ModelVersionStatus;
(function (ModelVersionStatus) {
    ModelVersionStatus["ACTIVATE_IN_PROGRESS"] = "ACTIVATE_IN_PROGRESS";
    ModelVersionStatus["ACTIVATE_REQUESTED"] = "ACTIVATE_REQUESTED";
    ModelVersionStatus["ACTIVE"] = "ACTIVE";
    ModelVersionStatus["ERROR"] = "ERROR";
    ModelVersionStatus["INACTIVATE_IN_PROGRESS"] = "INACTIVATE_IN_PROGRESS";
    ModelVersionStatus["INACTIVE"] = "INACTIVE";
    ModelVersionStatus["TRAINING_COMPLETE"] = "TRAINING_COMPLETE";
    ModelVersionStatus["TRAINING_IN_PROGRESS"] = "TRAINING_IN_PROGRESS";
})(ModelVersionStatus = exports.ModelVersionStatus || (exports.ModelVersionStatus = {}));
var Outcome;
(function (Outcome) {
    function isa(o) {
        return smithy_client_1.isa(o, "Outcome");
    }
    Outcome.isa = isa;
})(Outcome = exports.Outcome || (exports.Outcome = {}));
var PutDetectorRequest;
(function (PutDetectorRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutDetectorRequest");
    }
    PutDetectorRequest.isa = isa;
})(PutDetectorRequest = exports.PutDetectorRequest || (exports.PutDetectorRequest = {}));
var PutDetectorResult;
(function (PutDetectorResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutDetectorResult");
    }
    PutDetectorResult.isa = isa;
})(PutDetectorResult = exports.PutDetectorResult || (exports.PutDetectorResult = {}));
var PutExternalModelRequest;
(function (PutExternalModelRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutExternalModelRequest");
    }
    PutExternalModelRequest.isa = isa;
})(PutExternalModelRequest = exports.PutExternalModelRequest || (exports.PutExternalModelRequest = {}));
var PutExternalModelResult;
(function (PutExternalModelResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutExternalModelResult");
    }
    PutExternalModelResult.isa = isa;
})(PutExternalModelResult = exports.PutExternalModelResult || (exports.PutExternalModelResult = {}));
var PutModelRequest;
(function (PutModelRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutModelRequest");
    }
    PutModelRequest.isa = isa;
})(PutModelRequest = exports.PutModelRequest || (exports.PutModelRequest = {}));
var PutModelResult;
(function (PutModelResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutModelResult");
    }
    PutModelResult.isa = isa;
})(PutModelResult = exports.PutModelResult || (exports.PutModelResult = {}));
var PutOutcomeRequest;
(function (PutOutcomeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutOutcomeRequest");
    }
    PutOutcomeRequest.isa = isa;
})(PutOutcomeRequest = exports.PutOutcomeRequest || (exports.PutOutcomeRequest = {}));
var PutOutcomeResult;
(function (PutOutcomeResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutOutcomeResult");
    }
    PutOutcomeResult.isa = isa;
})(PutOutcomeResult = exports.PutOutcomeResult || (exports.PutOutcomeResult = {}));
var Role;
(function (Role) {
    function isa(o) {
        return smithy_client_1.isa(o, "Role");
    }
    Role.isa = isa;
})(Role = exports.Role || (exports.Role = {}));
var Rule;
(function (Rule) {
    function isa(o) {
        return smithy_client_1.isa(o, "Rule");
    }
    Rule.isa = isa;
})(Rule = exports.Rule || (exports.Rule = {}));
var RuleDetail;
(function (RuleDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "RuleDetail");
    }
    RuleDetail.isa = isa;
})(RuleDetail = exports.RuleDetail || (exports.RuleDetail = {}));
var TrainingDataSource;
(function (TrainingDataSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrainingDataSource");
    }
    TrainingDataSource.isa = isa;
})(TrainingDataSource = exports.TrainingDataSource || (exports.TrainingDataSource = {}));
var UpdateDetectorVersionMetadataRequest;
(function (UpdateDetectorVersionMetadataRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDetectorVersionMetadataRequest");
    }
    UpdateDetectorVersionMetadataRequest.isa = isa;
})(UpdateDetectorVersionMetadataRequest = exports.UpdateDetectorVersionMetadataRequest || (exports.UpdateDetectorVersionMetadataRequest = {}));
var UpdateDetectorVersionMetadataResult;
(function (UpdateDetectorVersionMetadataResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDetectorVersionMetadataResult");
    }
    UpdateDetectorVersionMetadataResult.isa = isa;
})(UpdateDetectorVersionMetadataResult = exports.UpdateDetectorVersionMetadataResult || (exports.UpdateDetectorVersionMetadataResult = {}));
var UpdateDetectorVersionRequest;
(function (UpdateDetectorVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDetectorVersionRequest");
    }
    UpdateDetectorVersionRequest.isa = isa;
})(UpdateDetectorVersionRequest = exports.UpdateDetectorVersionRequest || (exports.UpdateDetectorVersionRequest = {}));
var UpdateDetectorVersionResult;
(function (UpdateDetectorVersionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDetectorVersionResult");
    }
    UpdateDetectorVersionResult.isa = isa;
})(UpdateDetectorVersionResult = exports.UpdateDetectorVersionResult || (exports.UpdateDetectorVersionResult = {}));
var UpdateDetectorVersionStatusRequest;
(function (UpdateDetectorVersionStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDetectorVersionStatusRequest");
    }
    UpdateDetectorVersionStatusRequest.isa = isa;
})(UpdateDetectorVersionStatusRequest = exports.UpdateDetectorVersionStatusRequest || (exports.UpdateDetectorVersionStatusRequest = {}));
var UpdateDetectorVersionStatusResult;
(function (UpdateDetectorVersionStatusResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDetectorVersionStatusResult");
    }
    UpdateDetectorVersionStatusResult.isa = isa;
})(UpdateDetectorVersionStatusResult = exports.UpdateDetectorVersionStatusResult || (exports.UpdateDetectorVersionStatusResult = {}));
var UpdateModelVersionRequest;
(function (UpdateModelVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateModelVersionRequest");
    }
    UpdateModelVersionRequest.isa = isa;
})(UpdateModelVersionRequest = exports.UpdateModelVersionRequest || (exports.UpdateModelVersionRequest = {}));
var UpdateModelVersionResult;
(function (UpdateModelVersionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateModelVersionResult");
    }
    UpdateModelVersionResult.isa = isa;
})(UpdateModelVersionResult = exports.UpdateModelVersionResult || (exports.UpdateModelVersionResult = {}));
var UpdateRuleMetadataRequest;
(function (UpdateRuleMetadataRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRuleMetadataRequest");
    }
    UpdateRuleMetadataRequest.isa = isa;
})(UpdateRuleMetadataRequest = exports.UpdateRuleMetadataRequest || (exports.UpdateRuleMetadataRequest = {}));
var UpdateRuleMetadataResult;
(function (UpdateRuleMetadataResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRuleMetadataResult");
    }
    UpdateRuleMetadataResult.isa = isa;
})(UpdateRuleMetadataResult = exports.UpdateRuleMetadataResult || (exports.UpdateRuleMetadataResult = {}));
var UpdateRuleVersionRequest;
(function (UpdateRuleVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRuleVersionRequest");
    }
    UpdateRuleVersionRequest.isa = isa;
})(UpdateRuleVersionRequest = exports.UpdateRuleVersionRequest || (exports.UpdateRuleVersionRequest = {}));
var UpdateRuleVersionResult;
(function (UpdateRuleVersionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRuleVersionResult");
    }
    UpdateRuleVersionResult.isa = isa;
})(UpdateRuleVersionResult = exports.UpdateRuleVersionResult || (exports.UpdateRuleVersionResult = {}));
var UpdateVariableRequest;
(function (UpdateVariableRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateVariableRequest");
    }
    UpdateVariableRequest.isa = isa;
})(UpdateVariableRequest = exports.UpdateVariableRequest || (exports.UpdateVariableRequest = {}));
var UpdateVariableResult;
(function (UpdateVariableResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateVariableResult");
    }
    UpdateVariableResult.isa = isa;
})(UpdateVariableResult = exports.UpdateVariableResult || (exports.UpdateVariableResult = {}));
var Variable;
(function (Variable) {
    function isa(o) {
        return smithy_client_1.isa(o, "Variable");
    }
    Variable.isa = isa;
})(Variable = exports.Variable || (exports.Variable = {}));
var VariableEntry;
(function (VariableEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "VariableEntry");
    }
    VariableEntry.isa = isa;
})(VariableEntry = exports.VariableEntry || (exports.VariableEntry = {}));
var InternalServerException;
(function (InternalServerException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerException");
    }
    InternalServerException.isa = isa;
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ThrottlingException");
    }
    ThrottlingException.isa = isa;
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var ValidationException;
(function (ValidationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ValidationException");
    }
    ValidationException.isa = isa;
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
//# sourceMappingURL=index.js.map