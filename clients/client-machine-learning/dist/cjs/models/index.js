"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AddTagsInput;
(function (AddTagsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddTagsInput");
    }
    AddTagsInput.isa = isa;
})(AddTagsInput = exports.AddTagsInput || (exports.AddTagsInput = {}));
var AddTagsOutput;
(function (AddTagsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddTagsOutput");
    }
    AddTagsOutput.isa = isa;
})(AddTagsOutput = exports.AddTagsOutput || (exports.AddTagsOutput = {}));
var Algorithm;
(function (Algorithm) {
    Algorithm["SGD"] = "sgd";
})(Algorithm = exports.Algorithm || (exports.Algorithm = {}));
var BatchPrediction;
(function (BatchPrediction) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchPrediction");
    }
    BatchPrediction.isa = isa;
})(BatchPrediction = exports.BatchPrediction || (exports.BatchPrediction = {}));
var BatchPredictionFilterVariable;
(function (BatchPredictionFilterVariable) {
    BatchPredictionFilterVariable["CREATED_AT"] = "CreatedAt";
    BatchPredictionFilterVariable["DATASOURCE_ID"] = "DataSourceId";
    BatchPredictionFilterVariable["DATA_URI"] = "DataURI";
    BatchPredictionFilterVariable["IAM_USER"] = "IAMUser";
    BatchPredictionFilterVariable["LAST_UPDATED_AT"] = "LastUpdatedAt";
    BatchPredictionFilterVariable["ML_MODEL_ID"] = "MLModelId";
    BatchPredictionFilterVariable["NAME"] = "Name";
    BatchPredictionFilterVariable["STATUS"] = "Status";
})(BatchPredictionFilterVariable = exports.BatchPredictionFilterVariable || (exports.BatchPredictionFilterVariable = {}));
var CreateBatchPredictionInput;
(function (CreateBatchPredictionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateBatchPredictionInput");
    }
    CreateBatchPredictionInput.isa = isa;
})(CreateBatchPredictionInput = exports.CreateBatchPredictionInput || (exports.CreateBatchPredictionInput = {}));
var CreateBatchPredictionOutput;
(function (CreateBatchPredictionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateBatchPredictionOutput");
    }
    CreateBatchPredictionOutput.isa = isa;
})(CreateBatchPredictionOutput = exports.CreateBatchPredictionOutput || (exports.CreateBatchPredictionOutput = {}));
var CreateDataSourceFromRDSInput;
(function (CreateDataSourceFromRDSInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDataSourceFromRDSInput");
    }
    CreateDataSourceFromRDSInput.isa = isa;
})(CreateDataSourceFromRDSInput = exports.CreateDataSourceFromRDSInput || (exports.CreateDataSourceFromRDSInput = {}));
var CreateDataSourceFromRDSOutput;
(function (CreateDataSourceFromRDSOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDataSourceFromRDSOutput");
    }
    CreateDataSourceFromRDSOutput.isa = isa;
})(CreateDataSourceFromRDSOutput = exports.CreateDataSourceFromRDSOutput || (exports.CreateDataSourceFromRDSOutput = {}));
var CreateDataSourceFromRedshiftInput;
(function (CreateDataSourceFromRedshiftInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDataSourceFromRedshiftInput");
    }
    CreateDataSourceFromRedshiftInput.isa = isa;
})(CreateDataSourceFromRedshiftInput = exports.CreateDataSourceFromRedshiftInput || (exports.CreateDataSourceFromRedshiftInput = {}));
var CreateDataSourceFromRedshiftOutput;
(function (CreateDataSourceFromRedshiftOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDataSourceFromRedshiftOutput");
    }
    CreateDataSourceFromRedshiftOutput.isa = isa;
})(CreateDataSourceFromRedshiftOutput = exports.CreateDataSourceFromRedshiftOutput || (exports.CreateDataSourceFromRedshiftOutput = {}));
var CreateDataSourceFromS3Input;
(function (CreateDataSourceFromS3Input) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDataSourceFromS3Input");
    }
    CreateDataSourceFromS3Input.isa = isa;
})(CreateDataSourceFromS3Input = exports.CreateDataSourceFromS3Input || (exports.CreateDataSourceFromS3Input = {}));
var CreateDataSourceFromS3Output;
(function (CreateDataSourceFromS3Output) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDataSourceFromS3Output");
    }
    CreateDataSourceFromS3Output.isa = isa;
})(CreateDataSourceFromS3Output = exports.CreateDataSourceFromS3Output || (exports.CreateDataSourceFromS3Output = {}));
var CreateEvaluationInput;
(function (CreateEvaluationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateEvaluationInput");
    }
    CreateEvaluationInput.isa = isa;
})(CreateEvaluationInput = exports.CreateEvaluationInput || (exports.CreateEvaluationInput = {}));
var CreateEvaluationOutput;
(function (CreateEvaluationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateEvaluationOutput");
    }
    CreateEvaluationOutput.isa = isa;
})(CreateEvaluationOutput = exports.CreateEvaluationOutput || (exports.CreateEvaluationOutput = {}));
var CreateMLModelInput;
(function (CreateMLModelInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMLModelInput");
    }
    CreateMLModelInput.isa = isa;
})(CreateMLModelInput = exports.CreateMLModelInput || (exports.CreateMLModelInput = {}));
var CreateMLModelOutput;
(function (CreateMLModelOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMLModelOutput");
    }
    CreateMLModelOutput.isa = isa;
})(CreateMLModelOutput = exports.CreateMLModelOutput || (exports.CreateMLModelOutput = {}));
var CreateRealtimeEndpointInput;
(function (CreateRealtimeEndpointInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRealtimeEndpointInput");
    }
    CreateRealtimeEndpointInput.isa = isa;
})(CreateRealtimeEndpointInput = exports.CreateRealtimeEndpointInput || (exports.CreateRealtimeEndpointInput = {}));
var CreateRealtimeEndpointOutput;
(function (CreateRealtimeEndpointOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRealtimeEndpointOutput");
    }
    CreateRealtimeEndpointOutput.isa = isa;
})(CreateRealtimeEndpointOutput = exports.CreateRealtimeEndpointOutput || (exports.CreateRealtimeEndpointOutput = {}));
var DataSource;
(function (DataSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataSource");
    }
    DataSource.isa = isa;
})(DataSource = exports.DataSource || (exports.DataSource = {}));
var DataSourceFilterVariable;
(function (DataSourceFilterVariable) {
    DataSourceFilterVariable["CREATED_AT"] = "CreatedAt";
    DataSourceFilterVariable["DATA_URI"] = "DataLocationS3";
    DataSourceFilterVariable["IAM_USER"] = "IAMUser";
    DataSourceFilterVariable["LAST_UPDATED_AT"] = "LastUpdatedAt";
    DataSourceFilterVariable["NAME"] = "Name";
    DataSourceFilterVariable["STATUS"] = "Status";
})(DataSourceFilterVariable = exports.DataSourceFilterVariable || (exports.DataSourceFilterVariable = {}));
var DeleteBatchPredictionInput;
(function (DeleteBatchPredictionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteBatchPredictionInput");
    }
    DeleteBatchPredictionInput.isa = isa;
})(DeleteBatchPredictionInput = exports.DeleteBatchPredictionInput || (exports.DeleteBatchPredictionInput = {}));
var DeleteBatchPredictionOutput;
(function (DeleteBatchPredictionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteBatchPredictionOutput");
    }
    DeleteBatchPredictionOutput.isa = isa;
})(DeleteBatchPredictionOutput = exports.DeleteBatchPredictionOutput || (exports.DeleteBatchPredictionOutput = {}));
var DeleteDataSourceInput;
(function (DeleteDataSourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDataSourceInput");
    }
    DeleteDataSourceInput.isa = isa;
})(DeleteDataSourceInput = exports.DeleteDataSourceInput || (exports.DeleteDataSourceInput = {}));
var DeleteDataSourceOutput;
(function (DeleteDataSourceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDataSourceOutput");
    }
    DeleteDataSourceOutput.isa = isa;
})(DeleteDataSourceOutput = exports.DeleteDataSourceOutput || (exports.DeleteDataSourceOutput = {}));
var DeleteEvaluationInput;
(function (DeleteEvaluationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteEvaluationInput");
    }
    DeleteEvaluationInput.isa = isa;
})(DeleteEvaluationInput = exports.DeleteEvaluationInput || (exports.DeleteEvaluationInput = {}));
var DeleteEvaluationOutput;
(function (DeleteEvaluationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteEvaluationOutput");
    }
    DeleteEvaluationOutput.isa = isa;
})(DeleteEvaluationOutput = exports.DeleteEvaluationOutput || (exports.DeleteEvaluationOutput = {}));
var DeleteMLModelInput;
(function (DeleteMLModelInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteMLModelInput");
    }
    DeleteMLModelInput.isa = isa;
})(DeleteMLModelInput = exports.DeleteMLModelInput || (exports.DeleteMLModelInput = {}));
var DeleteMLModelOutput;
(function (DeleteMLModelOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteMLModelOutput");
    }
    DeleteMLModelOutput.isa = isa;
})(DeleteMLModelOutput = exports.DeleteMLModelOutput || (exports.DeleteMLModelOutput = {}));
var DeleteRealtimeEndpointInput;
(function (DeleteRealtimeEndpointInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRealtimeEndpointInput");
    }
    DeleteRealtimeEndpointInput.isa = isa;
})(DeleteRealtimeEndpointInput = exports.DeleteRealtimeEndpointInput || (exports.DeleteRealtimeEndpointInput = {}));
var DeleteRealtimeEndpointOutput;
(function (DeleteRealtimeEndpointOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRealtimeEndpointOutput");
    }
    DeleteRealtimeEndpointOutput.isa = isa;
})(DeleteRealtimeEndpointOutput = exports.DeleteRealtimeEndpointOutput || (exports.DeleteRealtimeEndpointOutput = {}));
var DeleteTagsInput;
(function (DeleteTagsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTagsInput");
    }
    DeleteTagsInput.isa = isa;
})(DeleteTagsInput = exports.DeleteTagsInput || (exports.DeleteTagsInput = {}));
var DeleteTagsOutput;
(function (DeleteTagsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTagsOutput");
    }
    DeleteTagsOutput.isa = isa;
})(DeleteTagsOutput = exports.DeleteTagsOutput || (exports.DeleteTagsOutput = {}));
var DescribeBatchPredictionsInput;
(function (DescribeBatchPredictionsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeBatchPredictionsInput");
    }
    DescribeBatchPredictionsInput.isa = isa;
})(DescribeBatchPredictionsInput = exports.DescribeBatchPredictionsInput || (exports.DescribeBatchPredictionsInput = {}));
var DescribeBatchPredictionsOutput;
(function (DescribeBatchPredictionsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeBatchPredictionsOutput");
    }
    DescribeBatchPredictionsOutput.isa = isa;
})(DescribeBatchPredictionsOutput = exports.DescribeBatchPredictionsOutput || (exports.DescribeBatchPredictionsOutput = {}));
var DescribeDataSourcesInput;
(function (DescribeDataSourcesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDataSourcesInput");
    }
    DescribeDataSourcesInput.isa = isa;
})(DescribeDataSourcesInput = exports.DescribeDataSourcesInput || (exports.DescribeDataSourcesInput = {}));
var DescribeDataSourcesOutput;
(function (DescribeDataSourcesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDataSourcesOutput");
    }
    DescribeDataSourcesOutput.isa = isa;
})(DescribeDataSourcesOutput = exports.DescribeDataSourcesOutput || (exports.DescribeDataSourcesOutput = {}));
var DescribeEvaluationsInput;
(function (DescribeEvaluationsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEvaluationsInput");
    }
    DescribeEvaluationsInput.isa = isa;
})(DescribeEvaluationsInput = exports.DescribeEvaluationsInput || (exports.DescribeEvaluationsInput = {}));
var DescribeEvaluationsOutput;
(function (DescribeEvaluationsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEvaluationsOutput");
    }
    DescribeEvaluationsOutput.isa = isa;
})(DescribeEvaluationsOutput = exports.DescribeEvaluationsOutput || (exports.DescribeEvaluationsOutput = {}));
var DescribeMLModelsInput;
(function (DescribeMLModelsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMLModelsInput");
    }
    DescribeMLModelsInput.isa = isa;
})(DescribeMLModelsInput = exports.DescribeMLModelsInput || (exports.DescribeMLModelsInput = {}));
var DescribeMLModelsOutput;
(function (DescribeMLModelsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMLModelsOutput");
    }
    DescribeMLModelsOutput.isa = isa;
})(DescribeMLModelsOutput = exports.DescribeMLModelsOutput || (exports.DescribeMLModelsOutput = {}));
var DescribeTagsInput;
(function (DescribeTagsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTagsInput");
    }
    DescribeTagsInput.isa = isa;
})(DescribeTagsInput = exports.DescribeTagsInput || (exports.DescribeTagsInput = {}));
var DescribeTagsOutput;
(function (DescribeTagsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTagsOutput");
    }
    DescribeTagsOutput.isa = isa;
})(DescribeTagsOutput = exports.DescribeTagsOutput || (exports.DescribeTagsOutput = {}));
var DetailsAttributes;
(function (DetailsAttributes) {
    DetailsAttributes["ALGORITHM"] = "Algorithm";
    DetailsAttributes["PREDICTIVE_MODEL_TYPE"] = "PredictiveModelType";
})(DetailsAttributes = exports.DetailsAttributes || (exports.DetailsAttributes = {}));
var EntityStatus;
(function (EntityStatus) {
    EntityStatus["COMPLETED"] = "COMPLETED";
    EntityStatus["DELETED"] = "DELETED";
    EntityStatus["FAILED"] = "FAILED";
    EntityStatus["INPROGRESS"] = "INPROGRESS";
    EntityStatus["PENDING"] = "PENDING";
})(EntityStatus = exports.EntityStatus || (exports.EntityStatus = {}));
var Evaluation;
(function (Evaluation) {
    function isa(o) {
        return smithy_client_1.isa(o, "Evaluation");
    }
    Evaluation.isa = isa;
})(Evaluation = exports.Evaluation || (exports.Evaluation = {}));
var EvaluationFilterVariable;
(function (EvaluationFilterVariable) {
    EvaluationFilterVariable["CREATED_AT"] = "CreatedAt";
    EvaluationFilterVariable["DATASOURCE_ID"] = "DataSourceId";
    EvaluationFilterVariable["DATA_URI"] = "DataURI";
    EvaluationFilterVariable["IAM_USER"] = "IAMUser";
    EvaluationFilterVariable["LAST_UPDATED_AT"] = "LastUpdatedAt";
    EvaluationFilterVariable["ML_MODEL_ID"] = "MLModelId";
    EvaluationFilterVariable["NAME"] = "Name";
    EvaluationFilterVariable["STATUS"] = "Status";
})(EvaluationFilterVariable = exports.EvaluationFilterVariable || (exports.EvaluationFilterVariable = {}));
var GetBatchPredictionInput;
(function (GetBatchPredictionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetBatchPredictionInput");
    }
    GetBatchPredictionInput.isa = isa;
})(GetBatchPredictionInput = exports.GetBatchPredictionInput || (exports.GetBatchPredictionInput = {}));
var GetBatchPredictionOutput;
(function (GetBatchPredictionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetBatchPredictionOutput");
    }
    GetBatchPredictionOutput.isa = isa;
})(GetBatchPredictionOutput = exports.GetBatchPredictionOutput || (exports.GetBatchPredictionOutput = {}));
var GetDataSourceInput;
(function (GetDataSourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDataSourceInput");
    }
    GetDataSourceInput.isa = isa;
})(GetDataSourceInput = exports.GetDataSourceInput || (exports.GetDataSourceInput = {}));
var GetDataSourceOutput;
(function (GetDataSourceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDataSourceOutput");
    }
    GetDataSourceOutput.isa = isa;
})(GetDataSourceOutput = exports.GetDataSourceOutput || (exports.GetDataSourceOutput = {}));
var GetEvaluationInput;
(function (GetEvaluationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetEvaluationInput");
    }
    GetEvaluationInput.isa = isa;
})(GetEvaluationInput = exports.GetEvaluationInput || (exports.GetEvaluationInput = {}));
var GetEvaluationOutput;
(function (GetEvaluationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetEvaluationOutput");
    }
    GetEvaluationOutput.isa = isa;
})(GetEvaluationOutput = exports.GetEvaluationOutput || (exports.GetEvaluationOutput = {}));
var GetMLModelInput;
(function (GetMLModelInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMLModelInput");
    }
    GetMLModelInput.isa = isa;
})(GetMLModelInput = exports.GetMLModelInput || (exports.GetMLModelInput = {}));
var GetMLModelOutput;
(function (GetMLModelOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMLModelOutput");
    }
    GetMLModelOutput.isa = isa;
})(GetMLModelOutput = exports.GetMLModelOutput || (exports.GetMLModelOutput = {}));
var IdempotentParameterMismatchException;
(function (IdempotentParameterMismatchException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IdempotentParameterMismatchException");
    }
    IdempotentParameterMismatchException.isa = isa;
})(IdempotentParameterMismatchException = exports.IdempotentParameterMismatchException || (exports.IdempotentParameterMismatchException = {}));
var InternalServerException;
(function (InternalServerException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerException");
    }
    InternalServerException.isa = isa;
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var InvalidInputException;
(function (InvalidInputException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInputException");
    }
    InvalidInputException.isa = isa;
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var InvalidTagException;
(function (InvalidTagException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTagException");
    }
    InvalidTagException.isa = isa;
})(InvalidTagException = exports.InvalidTagException || (exports.InvalidTagException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var MLModel;
(function (MLModel) {
    function isa(o) {
        return smithy_client_1.isa(o, "MLModel");
    }
    MLModel.isa = isa;
})(MLModel = exports.MLModel || (exports.MLModel = {}));
var MLModelFilterVariable;
(function (MLModelFilterVariable) {
    MLModelFilterVariable["ALGORITHM"] = "Algorithm";
    MLModelFilterVariable["CREATED_AT"] = "CreatedAt";
    MLModelFilterVariable["IAM_USER"] = "IAMUser";
    MLModelFilterVariable["LAST_UPDATED_AT"] = "LastUpdatedAt";
    MLModelFilterVariable["ML_MODEL_TYPE"] = "MLModelType";
    MLModelFilterVariable["NAME"] = "Name";
    MLModelFilterVariable["REAL_TIME_ENDPOINT_STATUS"] = "RealtimeEndpointStatus";
    MLModelFilterVariable["STATUS"] = "Status";
    MLModelFilterVariable["TRAINING_DATASOURCE_ID"] = "TrainingDataSourceId";
    MLModelFilterVariable["TRAINING_DATA_URI"] = "TrainingDataURI";
})(MLModelFilterVariable = exports.MLModelFilterVariable || (exports.MLModelFilterVariable = {}));
var MLModelType;
(function (MLModelType) {
    MLModelType["BINARY"] = "BINARY";
    MLModelType["MULTICLASS"] = "MULTICLASS";
    MLModelType["REGRESSION"] = "REGRESSION";
})(MLModelType = exports.MLModelType || (exports.MLModelType = {}));
var PerformanceMetrics;
(function (PerformanceMetrics) {
    function isa(o) {
        return smithy_client_1.isa(o, "PerformanceMetrics");
    }
    PerformanceMetrics.isa = isa;
})(PerformanceMetrics = exports.PerformanceMetrics || (exports.PerformanceMetrics = {}));
var PredictInput;
(function (PredictInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PredictInput");
    }
    PredictInput.isa = isa;
})(PredictInput = exports.PredictInput || (exports.PredictInput = {}));
var PredictOutput;
(function (PredictOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PredictOutput");
    }
    PredictOutput.isa = isa;
})(PredictOutput = exports.PredictOutput || (exports.PredictOutput = {}));
var Prediction;
(function (Prediction) {
    function isa(o) {
        return smithy_client_1.isa(o, "Prediction");
    }
    Prediction.isa = isa;
})(Prediction = exports.Prediction || (exports.Prediction = {}));
var PredictorNotMountedException;
(function (PredictorNotMountedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PredictorNotMountedException");
    }
    PredictorNotMountedException.isa = isa;
})(PredictorNotMountedException = exports.PredictorNotMountedException || (exports.PredictorNotMountedException = {}));
var RDSDataSpec;
(function (RDSDataSpec) {
    function isa(o) {
        return smithy_client_1.isa(o, "RDSDataSpec");
    }
    RDSDataSpec.isa = isa;
})(RDSDataSpec = exports.RDSDataSpec || (exports.RDSDataSpec = {}));
var RDSDatabase;
(function (RDSDatabase) {
    function isa(o) {
        return smithy_client_1.isa(o, "RDSDatabase");
    }
    RDSDatabase.isa = isa;
})(RDSDatabase = exports.RDSDatabase || (exports.RDSDatabase = {}));
var RDSDatabaseCredentials;
(function (RDSDatabaseCredentials) {
    function isa(o) {
        return smithy_client_1.isa(o, "RDSDatabaseCredentials");
    }
    RDSDatabaseCredentials.isa = isa;
})(RDSDatabaseCredentials = exports.RDSDatabaseCredentials || (exports.RDSDatabaseCredentials = {}));
var RDSMetadata;
(function (RDSMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "RDSMetadata");
    }
    RDSMetadata.isa = isa;
})(RDSMetadata = exports.RDSMetadata || (exports.RDSMetadata = {}));
var RealtimeEndpointInfo;
(function (RealtimeEndpointInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "RealtimeEndpointInfo");
    }
    RealtimeEndpointInfo.isa = isa;
})(RealtimeEndpointInfo = exports.RealtimeEndpointInfo || (exports.RealtimeEndpointInfo = {}));
var RealtimeEndpointStatus;
(function (RealtimeEndpointStatus) {
    RealtimeEndpointStatus["FAILED"] = "FAILED";
    RealtimeEndpointStatus["NONE"] = "NONE";
    RealtimeEndpointStatus["READY"] = "READY";
    RealtimeEndpointStatus["UPDATING"] = "UPDATING";
})(RealtimeEndpointStatus = exports.RealtimeEndpointStatus || (exports.RealtimeEndpointStatus = {}));
var RedshiftDataSpec;
(function (RedshiftDataSpec) {
    function isa(o) {
        return smithy_client_1.isa(o, "RedshiftDataSpec");
    }
    RedshiftDataSpec.isa = isa;
})(RedshiftDataSpec = exports.RedshiftDataSpec || (exports.RedshiftDataSpec = {}));
var RedshiftDatabase;
(function (RedshiftDatabase) {
    function isa(o) {
        return smithy_client_1.isa(o, "RedshiftDatabase");
    }
    RedshiftDatabase.isa = isa;
})(RedshiftDatabase = exports.RedshiftDatabase || (exports.RedshiftDatabase = {}));
var RedshiftDatabaseCredentials;
(function (RedshiftDatabaseCredentials) {
    function isa(o) {
        return smithy_client_1.isa(o, "RedshiftDatabaseCredentials");
    }
    RedshiftDatabaseCredentials.isa = isa;
})(RedshiftDatabaseCredentials = exports.RedshiftDatabaseCredentials || (exports.RedshiftDatabaseCredentials = {}));
var RedshiftMetadata;
(function (RedshiftMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "RedshiftMetadata");
    }
    RedshiftMetadata.isa = isa;
})(RedshiftMetadata = exports.RedshiftMetadata || (exports.RedshiftMetadata = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var S3DataSpec;
(function (S3DataSpec) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3DataSpec");
    }
    S3DataSpec.isa = isa;
})(S3DataSpec = exports.S3DataSpec || (exports.S3DataSpec = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["ASC"] = "asc";
    SortOrder["DSC"] = "dsc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagLimitExceededException;
(function (TagLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagLimitExceededException");
    }
    TagLimitExceededException.isa = isa;
})(TagLimitExceededException = exports.TagLimitExceededException || (exports.TagLimitExceededException = {}));
var TaggableResourceType;
(function (TaggableResourceType) {
    TaggableResourceType["BATCH_PREDICTION"] = "BatchPrediction";
    TaggableResourceType["DATASOURCE"] = "DataSource";
    TaggableResourceType["EVALUATION"] = "Evaluation";
    TaggableResourceType["ML_MODEL"] = "MLModel";
})(TaggableResourceType = exports.TaggableResourceType || (exports.TaggableResourceType = {}));
var UpdateBatchPredictionInput;
(function (UpdateBatchPredictionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateBatchPredictionInput");
    }
    UpdateBatchPredictionInput.isa = isa;
})(UpdateBatchPredictionInput = exports.UpdateBatchPredictionInput || (exports.UpdateBatchPredictionInput = {}));
var UpdateBatchPredictionOutput;
(function (UpdateBatchPredictionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateBatchPredictionOutput");
    }
    UpdateBatchPredictionOutput.isa = isa;
})(UpdateBatchPredictionOutput = exports.UpdateBatchPredictionOutput || (exports.UpdateBatchPredictionOutput = {}));
var UpdateDataSourceInput;
(function (UpdateDataSourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDataSourceInput");
    }
    UpdateDataSourceInput.isa = isa;
})(UpdateDataSourceInput = exports.UpdateDataSourceInput || (exports.UpdateDataSourceInput = {}));
var UpdateDataSourceOutput;
(function (UpdateDataSourceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDataSourceOutput");
    }
    UpdateDataSourceOutput.isa = isa;
})(UpdateDataSourceOutput = exports.UpdateDataSourceOutput || (exports.UpdateDataSourceOutput = {}));
var UpdateEvaluationInput;
(function (UpdateEvaluationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateEvaluationInput");
    }
    UpdateEvaluationInput.isa = isa;
})(UpdateEvaluationInput = exports.UpdateEvaluationInput || (exports.UpdateEvaluationInput = {}));
var UpdateEvaluationOutput;
(function (UpdateEvaluationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateEvaluationOutput");
    }
    UpdateEvaluationOutput.isa = isa;
})(UpdateEvaluationOutput = exports.UpdateEvaluationOutput || (exports.UpdateEvaluationOutput = {}));
var UpdateMLModelInput;
(function (UpdateMLModelInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateMLModelInput");
    }
    UpdateMLModelInput.isa = isa;
})(UpdateMLModelInput = exports.UpdateMLModelInput || (exports.UpdateMLModelInput = {}));
var UpdateMLModelOutput;
(function (UpdateMLModelOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateMLModelOutput");
    }
    UpdateMLModelOutput.isa = isa;
})(UpdateMLModelOutput = exports.UpdateMLModelOutput || (exports.UpdateMLModelOutput = {}));
//# sourceMappingURL=index.js.map