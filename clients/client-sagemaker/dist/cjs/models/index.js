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
var AlgorithmSortBy;
(function (AlgorithmSortBy) {
    AlgorithmSortBy["CREATION_TIME"] = "CreationTime";
    AlgorithmSortBy["NAME"] = "Name";
})(AlgorithmSortBy = exports.AlgorithmSortBy || (exports.AlgorithmSortBy = {}));
var AlgorithmSpecification;
(function (AlgorithmSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "AlgorithmSpecification");
    }
    AlgorithmSpecification.isa = isa;
})(AlgorithmSpecification = exports.AlgorithmSpecification || (exports.AlgorithmSpecification = {}));
var AlgorithmStatus;
(function (AlgorithmStatus) {
    AlgorithmStatus["COMPLETED"] = "Completed";
    AlgorithmStatus["DELETING"] = "Deleting";
    AlgorithmStatus["FAILED"] = "Failed";
    AlgorithmStatus["IN_PROGRESS"] = "InProgress";
    AlgorithmStatus["PENDING"] = "Pending";
})(AlgorithmStatus = exports.AlgorithmStatus || (exports.AlgorithmStatus = {}));
var AlgorithmStatusDetails;
(function (AlgorithmStatusDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "AlgorithmStatusDetails");
    }
    AlgorithmStatusDetails.isa = isa;
})(AlgorithmStatusDetails = exports.AlgorithmStatusDetails || (exports.AlgorithmStatusDetails = {}));
var AlgorithmStatusItem;
(function (AlgorithmStatusItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "AlgorithmStatusItem");
    }
    AlgorithmStatusItem.isa = isa;
})(AlgorithmStatusItem = exports.AlgorithmStatusItem || (exports.AlgorithmStatusItem = {}));
var AlgorithmSummary;
(function (AlgorithmSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "AlgorithmSummary");
    }
    AlgorithmSummary.isa = isa;
})(AlgorithmSummary = exports.AlgorithmSummary || (exports.AlgorithmSummary = {}));
var AlgorithmValidationProfile;
(function (AlgorithmValidationProfile) {
    function isa(o) {
        return smithy_client_1.isa(o, "AlgorithmValidationProfile");
    }
    AlgorithmValidationProfile.isa = isa;
})(AlgorithmValidationProfile = exports.AlgorithmValidationProfile || (exports.AlgorithmValidationProfile = {}));
var AlgorithmValidationSpecification;
(function (AlgorithmValidationSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "AlgorithmValidationSpecification");
    }
    AlgorithmValidationSpecification.isa = isa;
})(AlgorithmValidationSpecification = exports.AlgorithmValidationSpecification || (exports.AlgorithmValidationSpecification = {}));
var AnnotationConsolidationConfig;
(function (AnnotationConsolidationConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "AnnotationConsolidationConfig");
    }
    AnnotationConsolidationConfig.isa = isa;
})(AnnotationConsolidationConfig = exports.AnnotationConsolidationConfig || (exports.AnnotationConsolidationConfig = {}));
var AppDetails;
(function (AppDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "AppDetails");
    }
    AppDetails.isa = isa;
})(AppDetails = exports.AppDetails || (exports.AppDetails = {}));
var AppInstanceType;
(function (AppInstanceType) {
    AppInstanceType["ML_C5_12XLARGE"] = "ml.c5.12xlarge";
    AppInstanceType["ML_C5_18XLARGE"] = "ml.c5.18xlarge";
    AppInstanceType["ML_C5_24XLARGE"] = "ml.c5.24xlarge";
    AppInstanceType["ML_C5_2XLARGE"] = "ml.c5.2xlarge";
    AppInstanceType["ML_C5_4XLARGE"] = "ml.c5.4xlarge";
    AppInstanceType["ML_C5_9XLARGE"] = "ml.c5.9xlarge";
    AppInstanceType["ML_C5_LARGE"] = "ml.c5.large";
    AppInstanceType["ML_C5_XLARGE"] = "ml.c5.xlarge";
    AppInstanceType["ML_G4DN_12XLARGE"] = "ml.g4dn.12xlarge";
    AppInstanceType["ML_G4DN_16XLARGE"] = "ml.g4dn.16xlarge";
    AppInstanceType["ML_G4DN_2XLARGE"] = "ml.g4dn.2xlarge";
    AppInstanceType["ML_G4DN_4XLARGE"] = "ml.g4dn.4xlarge";
    AppInstanceType["ML_G4DN_8XLARGE"] = "ml.g4dn.8xlarge";
    AppInstanceType["ML_G4DN_XLARGE"] = "ml.g4dn.xlarge";
    AppInstanceType["ML_M5_12XLARGE"] = "ml.m5.12xlarge";
    AppInstanceType["ML_M5_16XLARGE"] = "ml.m5.16xlarge";
    AppInstanceType["ML_M5_24XLARGE"] = "ml.m5.24xlarge";
    AppInstanceType["ML_M5_2XLARGE"] = "ml.m5.2xlarge";
    AppInstanceType["ML_M5_4XLARGE"] = "ml.m5.4xlarge";
    AppInstanceType["ML_M5_8XLARGE"] = "ml.m5.8xlarge";
    AppInstanceType["ML_M5_LARGE"] = "ml.m5.large";
    AppInstanceType["ML_M5_XLARGE"] = "ml.m5.xlarge";
    AppInstanceType["ML_P3_16XLARGE"] = "ml.p3.16xlarge";
    AppInstanceType["ML_P3_2XLARGE"] = "ml.p3.2xlarge";
    AppInstanceType["ML_P3_8XLARGE"] = "ml.p3.8xlarge";
    AppInstanceType["ML_T3_2XLARGE"] = "ml.t3.2xlarge";
    AppInstanceType["ML_T3_LARGE"] = "ml.t3.large";
    AppInstanceType["ML_T3_MEDIUM"] = "ml.t3.medium";
    AppInstanceType["ML_T3_MICRO"] = "ml.t3.micro";
    AppInstanceType["ML_T3_SMALL"] = "ml.t3.small";
    AppInstanceType["ML_T3_XLARGE"] = "ml.t3.xlarge";
    AppInstanceType["SYSTEM"] = "system";
})(AppInstanceType = exports.AppInstanceType || (exports.AppInstanceType = {}));
var AppSortKey;
(function (AppSortKey) {
    AppSortKey["CreationTime"] = "CreationTime";
})(AppSortKey = exports.AppSortKey || (exports.AppSortKey = {}));
var AppSpecification;
(function (AppSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "AppSpecification");
    }
    AppSpecification.isa = isa;
})(AppSpecification = exports.AppSpecification || (exports.AppSpecification = {}));
var AppStatus;
(function (AppStatus) {
    AppStatus["Deleted"] = "Deleted";
    AppStatus["Deleting"] = "Deleting";
    AppStatus["Failed"] = "Failed";
    AppStatus["InService"] = "InService";
    AppStatus["Pending"] = "Pending";
})(AppStatus = exports.AppStatus || (exports.AppStatus = {}));
var AppType;
(function (AppType) {
    AppType["JupyterServer"] = "JupyterServer";
    AppType["KernelGateway"] = "KernelGateway";
    AppType["TensorBoard"] = "TensorBoard";
})(AppType = exports.AppType || (exports.AppType = {}));
var AssemblyType;
(function (AssemblyType) {
    AssemblyType["LINE"] = "Line";
    AssemblyType["NONE"] = "None";
})(AssemblyType = exports.AssemblyType || (exports.AssemblyType = {}));
var AssociateTrialComponentRequest;
(function (AssociateTrialComponentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateTrialComponentRequest");
    }
    AssociateTrialComponentRequest.isa = isa;
})(AssociateTrialComponentRequest = exports.AssociateTrialComponentRequest || (exports.AssociateTrialComponentRequest = {}));
var AssociateTrialComponentResponse;
(function (AssociateTrialComponentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateTrialComponentResponse");
    }
    AssociateTrialComponentResponse.isa = isa;
})(AssociateTrialComponentResponse = exports.AssociateTrialComponentResponse || (exports.AssociateTrialComponentResponse = {}));
var AuthMode;
(function (AuthMode) {
    AuthMode["IAM"] = "IAM";
    AuthMode["SSO"] = "SSO";
})(AuthMode = exports.AuthMode || (exports.AuthMode = {}));
var AutoMLCandidate;
(function (AutoMLCandidate) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoMLCandidate");
    }
    AutoMLCandidate.isa = isa;
})(AutoMLCandidate = exports.AutoMLCandidate || (exports.AutoMLCandidate = {}));
var AutoMLCandidateStep;
(function (AutoMLCandidateStep) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoMLCandidateStep");
    }
    AutoMLCandidateStep.isa = isa;
})(AutoMLCandidateStep = exports.AutoMLCandidateStep || (exports.AutoMLCandidateStep = {}));
var AutoMLChannel;
(function (AutoMLChannel) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoMLChannel");
    }
    AutoMLChannel.isa = isa;
})(AutoMLChannel = exports.AutoMLChannel || (exports.AutoMLChannel = {}));
var AutoMLContainerDefinition;
(function (AutoMLContainerDefinition) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoMLContainerDefinition");
    }
    AutoMLContainerDefinition.isa = isa;
})(AutoMLContainerDefinition = exports.AutoMLContainerDefinition || (exports.AutoMLContainerDefinition = {}));
var AutoMLDataSource;
(function (AutoMLDataSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoMLDataSource");
    }
    AutoMLDataSource.isa = isa;
})(AutoMLDataSource = exports.AutoMLDataSource || (exports.AutoMLDataSource = {}));
var AutoMLJobArtifacts;
(function (AutoMLJobArtifacts) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoMLJobArtifacts");
    }
    AutoMLJobArtifacts.isa = isa;
})(AutoMLJobArtifacts = exports.AutoMLJobArtifacts || (exports.AutoMLJobArtifacts = {}));
var AutoMLJobCompletionCriteria;
(function (AutoMLJobCompletionCriteria) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoMLJobCompletionCriteria");
    }
    AutoMLJobCompletionCriteria.isa = isa;
})(AutoMLJobCompletionCriteria = exports.AutoMLJobCompletionCriteria || (exports.AutoMLJobCompletionCriteria = {}));
var AutoMLJobConfig;
(function (AutoMLJobConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoMLJobConfig");
    }
    AutoMLJobConfig.isa = isa;
})(AutoMLJobConfig = exports.AutoMLJobConfig || (exports.AutoMLJobConfig = {}));
var AutoMLJobObjective;
(function (AutoMLJobObjective) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoMLJobObjective");
    }
    AutoMLJobObjective.isa = isa;
})(AutoMLJobObjective = exports.AutoMLJobObjective || (exports.AutoMLJobObjective = {}));
var AutoMLJobObjectiveType;
(function (AutoMLJobObjectiveType) {
    AutoMLJobObjectiveType["MAXIMIZE"] = "Maximize";
    AutoMLJobObjectiveType["MINIMIZE"] = "Minimize";
})(AutoMLJobObjectiveType = exports.AutoMLJobObjectiveType || (exports.AutoMLJobObjectiveType = {}));
var AutoMLJobSecondaryStatus;
(function (AutoMLJobSecondaryStatus) {
    AutoMLJobSecondaryStatus["ANALYZING_DATA"] = "AnalyzingData";
    AutoMLJobSecondaryStatus["CANDIDATE_DEFINITIONS_GENERATED"] = "CandidateDefinitionsGenerated";
    AutoMLJobSecondaryStatus["FAILED"] = "Failed";
    AutoMLJobSecondaryStatus["FEATURE_ENGINEERING"] = "FeatureEngineering";
    AutoMLJobSecondaryStatus["MAX_AUTO_ML_JOB_RUNTIME_REACHED"] = "MaxAutoMLJobRuntimeReached";
    AutoMLJobSecondaryStatus["MAX_CANDIDATES_REACHED"] = "MaxCandidatesReached";
    AutoMLJobSecondaryStatus["MODEL_TUNING"] = "ModelTuning";
    AutoMLJobSecondaryStatus["STARTING"] = "Starting";
    AutoMLJobSecondaryStatus["STOPPED"] = "Stopped";
    AutoMLJobSecondaryStatus["STOPPING"] = "Stopping";
})(AutoMLJobSecondaryStatus = exports.AutoMLJobSecondaryStatus || (exports.AutoMLJobSecondaryStatus = {}));
var AutoMLJobStatus;
(function (AutoMLJobStatus) {
    AutoMLJobStatus["COMPLETED"] = "Completed";
    AutoMLJobStatus["FAILED"] = "Failed";
    AutoMLJobStatus["IN_PROGRESS"] = "InProgress";
    AutoMLJobStatus["STOPPED"] = "Stopped";
    AutoMLJobStatus["STOPPING"] = "Stopping";
})(AutoMLJobStatus = exports.AutoMLJobStatus || (exports.AutoMLJobStatus = {}));
var AutoMLJobSummary;
(function (AutoMLJobSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoMLJobSummary");
    }
    AutoMLJobSummary.isa = isa;
})(AutoMLJobSummary = exports.AutoMLJobSummary || (exports.AutoMLJobSummary = {}));
var AutoMLMetricEnum;
(function (AutoMLMetricEnum) {
    AutoMLMetricEnum["ACCURACY"] = "Accuracy";
    AutoMLMetricEnum["F1"] = "F1";
    AutoMLMetricEnum["F1_MACRO"] = "F1macro";
    AutoMLMetricEnum["MSE"] = "MSE";
})(AutoMLMetricEnum = exports.AutoMLMetricEnum || (exports.AutoMLMetricEnum = {}));
var AutoMLOutputDataConfig;
(function (AutoMLOutputDataConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoMLOutputDataConfig");
    }
    AutoMLOutputDataConfig.isa = isa;
})(AutoMLOutputDataConfig = exports.AutoMLOutputDataConfig || (exports.AutoMLOutputDataConfig = {}));
var AutoMLS3DataSource;
(function (AutoMLS3DataSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoMLS3DataSource");
    }
    AutoMLS3DataSource.isa = isa;
})(AutoMLS3DataSource = exports.AutoMLS3DataSource || (exports.AutoMLS3DataSource = {}));
var AutoMLS3DataType;
(function (AutoMLS3DataType) {
    AutoMLS3DataType["MANIFEST_FILE"] = "ManifestFile";
    AutoMLS3DataType["S3_PREFIX"] = "S3Prefix";
})(AutoMLS3DataType = exports.AutoMLS3DataType || (exports.AutoMLS3DataType = {}));
var AutoMLSecurityConfig;
(function (AutoMLSecurityConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoMLSecurityConfig");
    }
    AutoMLSecurityConfig.isa = isa;
})(AutoMLSecurityConfig = exports.AutoMLSecurityConfig || (exports.AutoMLSecurityConfig = {}));
var AutoMLSortBy;
(function (AutoMLSortBy) {
    AutoMLSortBy["CREATION_TIME"] = "CreationTime";
    AutoMLSortBy["NAME"] = "Name";
    AutoMLSortBy["STATUS"] = "Status";
})(AutoMLSortBy = exports.AutoMLSortBy || (exports.AutoMLSortBy = {}));
var AutoMLSortOrder;
(function (AutoMLSortOrder) {
    AutoMLSortOrder["ASCENDING"] = "Ascending";
    AutoMLSortOrder["DESCENDING"] = "Descending";
})(AutoMLSortOrder = exports.AutoMLSortOrder || (exports.AutoMLSortOrder = {}));
var AwsManagedHumanLoopRequestSource;
(function (AwsManagedHumanLoopRequestSource) {
    AwsManagedHumanLoopRequestSource["REKOGNITION_DETECT_MODERATION_LABELS_IMAGE_V3"] = "AWS/Rekognition/DetectModerationLabels/Image/V3";
    AwsManagedHumanLoopRequestSource["TEXTRACT_ANALYZE_DOCUMENT_FORMS_V1"] = "AWS/Textract/AnalyzeDocument/Forms/V1";
})(AwsManagedHumanLoopRequestSource = exports.AwsManagedHumanLoopRequestSource || (exports.AwsManagedHumanLoopRequestSource = {}));
var BatchStrategy;
(function (BatchStrategy) {
    BatchStrategy["MULTI_RECORD"] = "MultiRecord";
    BatchStrategy["SINGLE_RECORD"] = "SingleRecord";
})(BatchStrategy = exports.BatchStrategy || (exports.BatchStrategy = {}));
var BooleanOperator;
(function (BooleanOperator) {
    BooleanOperator["AND"] = "And";
    BooleanOperator["OR"] = "Or";
})(BooleanOperator = exports.BooleanOperator || (exports.BooleanOperator = {}));
var CandidateSortBy;
(function (CandidateSortBy) {
    CandidateSortBy["CreationTime"] = "CreationTime";
    CandidateSortBy["FinalObjectiveMetricValue"] = "FinalObjectiveMetricValue";
    CandidateSortBy["Status"] = "Status";
})(CandidateSortBy = exports.CandidateSortBy || (exports.CandidateSortBy = {}));
var CandidateStatus;
(function (CandidateStatus) {
    CandidateStatus["COMPLETED"] = "Completed";
    CandidateStatus["FAILED"] = "Failed";
    CandidateStatus["IN_PROGRESS"] = "InProgress";
    CandidateStatus["STOPPED"] = "Stopped";
    CandidateStatus["STOPPING"] = "Stopping";
})(CandidateStatus = exports.CandidateStatus || (exports.CandidateStatus = {}));
var CandidateStepType;
(function (CandidateStepType) {
    CandidateStepType["PROCESSING"] = "AWS::SageMaker::ProcessingJob";
    CandidateStepType["TRAINING"] = "AWS::SageMaker::TrainingJob";
    CandidateStepType["TRANSFORM"] = "AWS::SageMaker::TransformJob";
})(CandidateStepType = exports.CandidateStepType || (exports.CandidateStepType = {}));
var CaptureContentTypeHeader;
(function (CaptureContentTypeHeader) {
    function isa(o) {
        return smithy_client_1.isa(o, "CaptureContentTypeHeader");
    }
    CaptureContentTypeHeader.isa = isa;
})(CaptureContentTypeHeader = exports.CaptureContentTypeHeader || (exports.CaptureContentTypeHeader = {}));
var CaptureMode;
(function (CaptureMode) {
    CaptureMode["INPUT"] = "Input";
    CaptureMode["OUTPUT"] = "Output";
})(CaptureMode = exports.CaptureMode || (exports.CaptureMode = {}));
var CaptureOption;
(function (CaptureOption) {
    function isa(o) {
        return smithy_client_1.isa(o, "CaptureOption");
    }
    CaptureOption.isa = isa;
})(CaptureOption = exports.CaptureOption || (exports.CaptureOption = {}));
var CaptureStatus;
(function (CaptureStatus) {
    CaptureStatus["STARTED"] = "Started";
    CaptureStatus["STOPPED"] = "Stopped";
})(CaptureStatus = exports.CaptureStatus || (exports.CaptureStatus = {}));
var CategoricalParameterRange;
(function (CategoricalParameterRange) {
    function isa(o) {
        return smithy_client_1.isa(o, "CategoricalParameterRange");
    }
    CategoricalParameterRange.isa = isa;
})(CategoricalParameterRange = exports.CategoricalParameterRange || (exports.CategoricalParameterRange = {}));
var CategoricalParameterRangeSpecification;
(function (CategoricalParameterRangeSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "CategoricalParameterRangeSpecification");
    }
    CategoricalParameterRangeSpecification.isa = isa;
})(CategoricalParameterRangeSpecification = exports.CategoricalParameterRangeSpecification || (exports.CategoricalParameterRangeSpecification = {}));
var Channel;
(function (Channel) {
    function isa(o) {
        return smithy_client_1.isa(o, "Channel");
    }
    Channel.isa = isa;
})(Channel = exports.Channel || (exports.Channel = {}));
var ChannelSpecification;
(function (ChannelSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "ChannelSpecification");
    }
    ChannelSpecification.isa = isa;
})(ChannelSpecification = exports.ChannelSpecification || (exports.ChannelSpecification = {}));
var CheckpointConfig;
(function (CheckpointConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "CheckpointConfig");
    }
    CheckpointConfig.isa = isa;
})(CheckpointConfig = exports.CheckpointConfig || (exports.CheckpointConfig = {}));
var CodeRepositorySortBy;
(function (CodeRepositorySortBy) {
    CodeRepositorySortBy["CREATION_TIME"] = "CreationTime";
    CodeRepositorySortBy["LAST_MODIFIED_TIME"] = "LastModifiedTime";
    CodeRepositorySortBy["NAME"] = "Name";
})(CodeRepositorySortBy = exports.CodeRepositorySortBy || (exports.CodeRepositorySortBy = {}));
var CodeRepositorySortOrder;
(function (CodeRepositorySortOrder) {
    CodeRepositorySortOrder["ASCENDING"] = "Ascending";
    CodeRepositorySortOrder["DESCENDING"] = "Descending";
})(CodeRepositorySortOrder = exports.CodeRepositorySortOrder || (exports.CodeRepositorySortOrder = {}));
var CodeRepositorySummary;
(function (CodeRepositorySummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "CodeRepositorySummary");
    }
    CodeRepositorySummary.isa = isa;
})(CodeRepositorySummary = exports.CodeRepositorySummary || (exports.CodeRepositorySummary = {}));
var CognitoMemberDefinition;
(function (CognitoMemberDefinition) {
    function isa(o) {
        return smithy_client_1.isa(o, "CognitoMemberDefinition");
    }
    CognitoMemberDefinition.isa = isa;
})(CognitoMemberDefinition = exports.CognitoMemberDefinition || (exports.CognitoMemberDefinition = {}));
var CollectionConfiguration;
(function (CollectionConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "CollectionConfiguration");
    }
    CollectionConfiguration.isa = isa;
})(CollectionConfiguration = exports.CollectionConfiguration || (exports.CollectionConfiguration = {}));
var CompilationJobStatus;
(function (CompilationJobStatus) {
    CompilationJobStatus["COMPLETED"] = "COMPLETED";
    CompilationJobStatus["FAILED"] = "FAILED";
    CompilationJobStatus["INPROGRESS"] = "INPROGRESS";
    CompilationJobStatus["STARTING"] = "STARTING";
    CompilationJobStatus["STOPPED"] = "STOPPED";
    CompilationJobStatus["STOPPING"] = "STOPPING";
})(CompilationJobStatus = exports.CompilationJobStatus || (exports.CompilationJobStatus = {}));
var CompilationJobSummary;
(function (CompilationJobSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "CompilationJobSummary");
    }
    CompilationJobSummary.isa = isa;
})(CompilationJobSummary = exports.CompilationJobSummary || (exports.CompilationJobSummary = {}));
var CompressionType;
(function (CompressionType) {
    CompressionType["GZIP"] = "Gzip";
    CompressionType["NONE"] = "None";
})(CompressionType = exports.CompressionType || (exports.CompressionType = {}));
var ConflictException;
(function (ConflictException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConflictException");
    }
    ConflictException.isa = isa;
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var ContainerDefinition;
(function (ContainerDefinition) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContainerDefinition");
    }
    ContainerDefinition.isa = isa;
})(ContainerDefinition = exports.ContainerDefinition || (exports.ContainerDefinition = {}));
var ContainerMode;
(function (ContainerMode) {
    ContainerMode["MULTI_MODEL"] = "MultiModel";
    ContainerMode["SINGLE_MODEL"] = "SingleModel";
})(ContainerMode = exports.ContainerMode || (exports.ContainerMode = {}));
var ContentClassifier;
(function (ContentClassifier) {
    ContentClassifier["FREE_OF_ADULT_CONTENT"] = "FreeOfAdultContent";
    ContentClassifier["FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION"] = "FreeOfPersonallyIdentifiableInformation";
})(ContentClassifier = exports.ContentClassifier || (exports.ContentClassifier = {}));
var ContinuousParameterRange;
(function (ContinuousParameterRange) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContinuousParameterRange");
    }
    ContinuousParameterRange.isa = isa;
})(ContinuousParameterRange = exports.ContinuousParameterRange || (exports.ContinuousParameterRange = {}));
var ContinuousParameterRangeSpecification;
(function (ContinuousParameterRangeSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContinuousParameterRangeSpecification");
    }
    ContinuousParameterRangeSpecification.isa = isa;
})(ContinuousParameterRangeSpecification = exports.ContinuousParameterRangeSpecification || (exports.ContinuousParameterRangeSpecification = {}));
var CreateAlgorithmInput;
(function (CreateAlgorithmInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAlgorithmInput");
    }
    CreateAlgorithmInput.isa = isa;
})(CreateAlgorithmInput = exports.CreateAlgorithmInput || (exports.CreateAlgorithmInput = {}));
var CreateAlgorithmOutput;
(function (CreateAlgorithmOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAlgorithmOutput");
    }
    CreateAlgorithmOutput.isa = isa;
})(CreateAlgorithmOutput = exports.CreateAlgorithmOutput || (exports.CreateAlgorithmOutput = {}));
var CreateAppRequest;
(function (CreateAppRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAppRequest");
    }
    CreateAppRequest.isa = isa;
})(CreateAppRequest = exports.CreateAppRequest || (exports.CreateAppRequest = {}));
var CreateAppResponse;
(function (CreateAppResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAppResponse");
    }
    CreateAppResponse.isa = isa;
})(CreateAppResponse = exports.CreateAppResponse || (exports.CreateAppResponse = {}));
var CreateAutoMLJobRequest;
(function (CreateAutoMLJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAutoMLJobRequest");
    }
    CreateAutoMLJobRequest.isa = isa;
})(CreateAutoMLJobRequest = exports.CreateAutoMLJobRequest || (exports.CreateAutoMLJobRequest = {}));
var CreateAutoMLJobResponse;
(function (CreateAutoMLJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAutoMLJobResponse");
    }
    CreateAutoMLJobResponse.isa = isa;
})(CreateAutoMLJobResponse = exports.CreateAutoMLJobResponse || (exports.CreateAutoMLJobResponse = {}));
var CreateCodeRepositoryInput;
(function (CreateCodeRepositoryInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCodeRepositoryInput");
    }
    CreateCodeRepositoryInput.isa = isa;
})(CreateCodeRepositoryInput = exports.CreateCodeRepositoryInput || (exports.CreateCodeRepositoryInput = {}));
var CreateCodeRepositoryOutput;
(function (CreateCodeRepositoryOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCodeRepositoryOutput");
    }
    CreateCodeRepositoryOutput.isa = isa;
})(CreateCodeRepositoryOutput = exports.CreateCodeRepositoryOutput || (exports.CreateCodeRepositoryOutput = {}));
var CreateCompilationJobRequest;
(function (CreateCompilationJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCompilationJobRequest");
    }
    CreateCompilationJobRequest.isa = isa;
})(CreateCompilationJobRequest = exports.CreateCompilationJobRequest || (exports.CreateCompilationJobRequest = {}));
var CreateCompilationJobResponse;
(function (CreateCompilationJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCompilationJobResponse");
    }
    CreateCompilationJobResponse.isa = isa;
})(CreateCompilationJobResponse = exports.CreateCompilationJobResponse || (exports.CreateCompilationJobResponse = {}));
var CreateDomainRequest;
(function (CreateDomainRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDomainRequest");
    }
    CreateDomainRequest.isa = isa;
})(CreateDomainRequest = exports.CreateDomainRequest || (exports.CreateDomainRequest = {}));
var CreateDomainResponse;
(function (CreateDomainResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDomainResponse");
    }
    CreateDomainResponse.isa = isa;
})(CreateDomainResponse = exports.CreateDomainResponse || (exports.CreateDomainResponse = {}));
var CreateEndpointConfigInput;
(function (CreateEndpointConfigInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateEndpointConfigInput");
    }
    CreateEndpointConfigInput.isa = isa;
})(CreateEndpointConfigInput = exports.CreateEndpointConfigInput || (exports.CreateEndpointConfigInput = {}));
var CreateEndpointConfigOutput;
(function (CreateEndpointConfigOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateEndpointConfigOutput");
    }
    CreateEndpointConfigOutput.isa = isa;
})(CreateEndpointConfigOutput = exports.CreateEndpointConfigOutput || (exports.CreateEndpointConfigOutput = {}));
var CreateEndpointInput;
(function (CreateEndpointInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateEndpointInput");
    }
    CreateEndpointInput.isa = isa;
})(CreateEndpointInput = exports.CreateEndpointInput || (exports.CreateEndpointInput = {}));
var CreateEndpointOutput;
(function (CreateEndpointOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateEndpointOutput");
    }
    CreateEndpointOutput.isa = isa;
})(CreateEndpointOutput = exports.CreateEndpointOutput || (exports.CreateEndpointOutput = {}));
var CreateExperimentRequest;
(function (CreateExperimentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateExperimentRequest");
    }
    CreateExperimentRequest.isa = isa;
})(CreateExperimentRequest = exports.CreateExperimentRequest || (exports.CreateExperimentRequest = {}));
var CreateExperimentResponse;
(function (CreateExperimentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateExperimentResponse");
    }
    CreateExperimentResponse.isa = isa;
})(CreateExperimentResponse = exports.CreateExperimentResponse || (exports.CreateExperimentResponse = {}));
var CreateFlowDefinitionRequest;
(function (CreateFlowDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateFlowDefinitionRequest");
    }
    CreateFlowDefinitionRequest.isa = isa;
})(CreateFlowDefinitionRequest = exports.CreateFlowDefinitionRequest || (exports.CreateFlowDefinitionRequest = {}));
var CreateFlowDefinitionResponse;
(function (CreateFlowDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateFlowDefinitionResponse");
    }
    CreateFlowDefinitionResponse.isa = isa;
})(CreateFlowDefinitionResponse = exports.CreateFlowDefinitionResponse || (exports.CreateFlowDefinitionResponse = {}));
var CreateHumanTaskUiRequest;
(function (CreateHumanTaskUiRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateHumanTaskUiRequest");
    }
    CreateHumanTaskUiRequest.isa = isa;
})(CreateHumanTaskUiRequest = exports.CreateHumanTaskUiRequest || (exports.CreateHumanTaskUiRequest = {}));
var CreateHumanTaskUiResponse;
(function (CreateHumanTaskUiResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateHumanTaskUiResponse");
    }
    CreateHumanTaskUiResponse.isa = isa;
})(CreateHumanTaskUiResponse = exports.CreateHumanTaskUiResponse || (exports.CreateHumanTaskUiResponse = {}));
var CreateHyperParameterTuningJobRequest;
(function (CreateHyperParameterTuningJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateHyperParameterTuningJobRequest");
    }
    CreateHyperParameterTuningJobRequest.isa = isa;
})(CreateHyperParameterTuningJobRequest = exports.CreateHyperParameterTuningJobRequest || (exports.CreateHyperParameterTuningJobRequest = {}));
var CreateHyperParameterTuningJobResponse;
(function (CreateHyperParameterTuningJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateHyperParameterTuningJobResponse");
    }
    CreateHyperParameterTuningJobResponse.isa = isa;
})(CreateHyperParameterTuningJobResponse = exports.CreateHyperParameterTuningJobResponse || (exports.CreateHyperParameterTuningJobResponse = {}));
var CreateLabelingJobRequest;
(function (CreateLabelingJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLabelingJobRequest");
    }
    CreateLabelingJobRequest.isa = isa;
})(CreateLabelingJobRequest = exports.CreateLabelingJobRequest || (exports.CreateLabelingJobRequest = {}));
var CreateLabelingJobResponse;
(function (CreateLabelingJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLabelingJobResponse");
    }
    CreateLabelingJobResponse.isa = isa;
})(CreateLabelingJobResponse = exports.CreateLabelingJobResponse || (exports.CreateLabelingJobResponse = {}));
var CreateModelInput;
(function (CreateModelInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateModelInput");
    }
    CreateModelInput.isa = isa;
})(CreateModelInput = exports.CreateModelInput || (exports.CreateModelInput = {}));
var CreateModelOutput;
(function (CreateModelOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateModelOutput");
    }
    CreateModelOutput.isa = isa;
})(CreateModelOutput = exports.CreateModelOutput || (exports.CreateModelOutput = {}));
var CreateModelPackageInput;
(function (CreateModelPackageInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateModelPackageInput");
    }
    CreateModelPackageInput.isa = isa;
})(CreateModelPackageInput = exports.CreateModelPackageInput || (exports.CreateModelPackageInput = {}));
var CreateModelPackageOutput;
(function (CreateModelPackageOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateModelPackageOutput");
    }
    CreateModelPackageOutput.isa = isa;
})(CreateModelPackageOutput = exports.CreateModelPackageOutput || (exports.CreateModelPackageOutput = {}));
var CreateMonitoringScheduleRequest;
(function (CreateMonitoringScheduleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMonitoringScheduleRequest");
    }
    CreateMonitoringScheduleRequest.isa = isa;
})(CreateMonitoringScheduleRequest = exports.CreateMonitoringScheduleRequest || (exports.CreateMonitoringScheduleRequest = {}));
var CreateMonitoringScheduleResponse;
(function (CreateMonitoringScheduleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMonitoringScheduleResponse");
    }
    CreateMonitoringScheduleResponse.isa = isa;
})(CreateMonitoringScheduleResponse = exports.CreateMonitoringScheduleResponse || (exports.CreateMonitoringScheduleResponse = {}));
var CreateNotebookInstanceInput;
(function (CreateNotebookInstanceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateNotebookInstanceInput");
    }
    CreateNotebookInstanceInput.isa = isa;
})(CreateNotebookInstanceInput = exports.CreateNotebookInstanceInput || (exports.CreateNotebookInstanceInput = {}));
var CreateNotebookInstanceLifecycleConfigInput;
(function (CreateNotebookInstanceLifecycleConfigInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateNotebookInstanceLifecycleConfigInput");
    }
    CreateNotebookInstanceLifecycleConfigInput.isa = isa;
})(CreateNotebookInstanceLifecycleConfigInput = exports.CreateNotebookInstanceLifecycleConfigInput || (exports.CreateNotebookInstanceLifecycleConfigInput = {}));
var CreateNotebookInstanceLifecycleConfigOutput;
(function (CreateNotebookInstanceLifecycleConfigOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateNotebookInstanceLifecycleConfigOutput");
    }
    CreateNotebookInstanceLifecycleConfigOutput.isa = isa;
})(CreateNotebookInstanceLifecycleConfigOutput = exports.CreateNotebookInstanceLifecycleConfigOutput || (exports.CreateNotebookInstanceLifecycleConfigOutput = {}));
var CreateNotebookInstanceOutput;
(function (CreateNotebookInstanceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateNotebookInstanceOutput");
    }
    CreateNotebookInstanceOutput.isa = isa;
})(CreateNotebookInstanceOutput = exports.CreateNotebookInstanceOutput || (exports.CreateNotebookInstanceOutput = {}));
var CreatePresignedDomainUrlRequest;
(function (CreatePresignedDomainUrlRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePresignedDomainUrlRequest");
    }
    CreatePresignedDomainUrlRequest.isa = isa;
})(CreatePresignedDomainUrlRequest = exports.CreatePresignedDomainUrlRequest || (exports.CreatePresignedDomainUrlRequest = {}));
var CreatePresignedDomainUrlResponse;
(function (CreatePresignedDomainUrlResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePresignedDomainUrlResponse");
    }
    CreatePresignedDomainUrlResponse.isa = isa;
})(CreatePresignedDomainUrlResponse = exports.CreatePresignedDomainUrlResponse || (exports.CreatePresignedDomainUrlResponse = {}));
var CreatePresignedNotebookInstanceUrlInput;
(function (CreatePresignedNotebookInstanceUrlInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePresignedNotebookInstanceUrlInput");
    }
    CreatePresignedNotebookInstanceUrlInput.isa = isa;
})(CreatePresignedNotebookInstanceUrlInput = exports.CreatePresignedNotebookInstanceUrlInput || (exports.CreatePresignedNotebookInstanceUrlInput = {}));
var CreatePresignedNotebookInstanceUrlOutput;
(function (CreatePresignedNotebookInstanceUrlOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePresignedNotebookInstanceUrlOutput");
    }
    CreatePresignedNotebookInstanceUrlOutput.isa = isa;
})(CreatePresignedNotebookInstanceUrlOutput = exports.CreatePresignedNotebookInstanceUrlOutput || (exports.CreatePresignedNotebookInstanceUrlOutput = {}));
var CreateProcessingJobRequest;
(function (CreateProcessingJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateProcessingJobRequest");
    }
    CreateProcessingJobRequest.isa = isa;
})(CreateProcessingJobRequest = exports.CreateProcessingJobRequest || (exports.CreateProcessingJobRequest = {}));
var CreateProcessingJobResponse;
(function (CreateProcessingJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateProcessingJobResponse");
    }
    CreateProcessingJobResponse.isa = isa;
})(CreateProcessingJobResponse = exports.CreateProcessingJobResponse || (exports.CreateProcessingJobResponse = {}));
var CreateTrainingJobRequest;
(function (CreateTrainingJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTrainingJobRequest");
    }
    CreateTrainingJobRequest.isa = isa;
})(CreateTrainingJobRequest = exports.CreateTrainingJobRequest || (exports.CreateTrainingJobRequest = {}));
var CreateTrainingJobResponse;
(function (CreateTrainingJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTrainingJobResponse");
    }
    CreateTrainingJobResponse.isa = isa;
})(CreateTrainingJobResponse = exports.CreateTrainingJobResponse || (exports.CreateTrainingJobResponse = {}));
var CreateTransformJobRequest;
(function (CreateTransformJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTransformJobRequest");
    }
    CreateTransformJobRequest.isa = isa;
})(CreateTransformJobRequest = exports.CreateTransformJobRequest || (exports.CreateTransformJobRequest = {}));
var CreateTransformJobResponse;
(function (CreateTransformJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTransformJobResponse");
    }
    CreateTransformJobResponse.isa = isa;
})(CreateTransformJobResponse = exports.CreateTransformJobResponse || (exports.CreateTransformJobResponse = {}));
var CreateTrialComponentRequest;
(function (CreateTrialComponentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTrialComponentRequest");
    }
    CreateTrialComponentRequest.isa = isa;
})(CreateTrialComponentRequest = exports.CreateTrialComponentRequest || (exports.CreateTrialComponentRequest = {}));
var CreateTrialComponentResponse;
(function (CreateTrialComponentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTrialComponentResponse");
    }
    CreateTrialComponentResponse.isa = isa;
})(CreateTrialComponentResponse = exports.CreateTrialComponentResponse || (exports.CreateTrialComponentResponse = {}));
var CreateTrialRequest;
(function (CreateTrialRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTrialRequest");
    }
    CreateTrialRequest.isa = isa;
})(CreateTrialRequest = exports.CreateTrialRequest || (exports.CreateTrialRequest = {}));
var CreateTrialResponse;
(function (CreateTrialResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTrialResponse");
    }
    CreateTrialResponse.isa = isa;
})(CreateTrialResponse = exports.CreateTrialResponse || (exports.CreateTrialResponse = {}));
var CreateUserProfileRequest;
(function (CreateUserProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUserProfileRequest");
    }
    CreateUserProfileRequest.isa = isa;
})(CreateUserProfileRequest = exports.CreateUserProfileRequest || (exports.CreateUserProfileRequest = {}));
var CreateUserProfileResponse;
(function (CreateUserProfileResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUserProfileResponse");
    }
    CreateUserProfileResponse.isa = isa;
})(CreateUserProfileResponse = exports.CreateUserProfileResponse || (exports.CreateUserProfileResponse = {}));
var CreateWorkteamRequest;
(function (CreateWorkteamRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateWorkteamRequest");
    }
    CreateWorkteamRequest.isa = isa;
})(CreateWorkteamRequest = exports.CreateWorkteamRequest || (exports.CreateWorkteamRequest = {}));
var CreateWorkteamResponse;
(function (CreateWorkteamResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateWorkteamResponse");
    }
    CreateWorkteamResponse.isa = isa;
})(CreateWorkteamResponse = exports.CreateWorkteamResponse || (exports.CreateWorkteamResponse = {}));
var DataCaptureConfig;
(function (DataCaptureConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataCaptureConfig");
    }
    DataCaptureConfig.isa = isa;
})(DataCaptureConfig = exports.DataCaptureConfig || (exports.DataCaptureConfig = {}));
var DataCaptureConfigSummary;
(function (DataCaptureConfigSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataCaptureConfigSummary");
    }
    DataCaptureConfigSummary.isa = isa;
})(DataCaptureConfigSummary = exports.DataCaptureConfigSummary || (exports.DataCaptureConfigSummary = {}));
var DataProcessing;
(function (DataProcessing) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataProcessing");
    }
    DataProcessing.isa = isa;
})(DataProcessing = exports.DataProcessing || (exports.DataProcessing = {}));
var DataSource;
(function (DataSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataSource");
    }
    DataSource.isa = isa;
})(DataSource = exports.DataSource || (exports.DataSource = {}));
var DebugHookConfig;
(function (DebugHookConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "DebugHookConfig");
    }
    DebugHookConfig.isa = isa;
})(DebugHookConfig = exports.DebugHookConfig || (exports.DebugHookConfig = {}));
var DebugRuleConfiguration;
(function (DebugRuleConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "DebugRuleConfiguration");
    }
    DebugRuleConfiguration.isa = isa;
})(DebugRuleConfiguration = exports.DebugRuleConfiguration || (exports.DebugRuleConfiguration = {}));
var DebugRuleEvaluationStatus;
(function (DebugRuleEvaluationStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "DebugRuleEvaluationStatus");
    }
    DebugRuleEvaluationStatus.isa = isa;
})(DebugRuleEvaluationStatus = exports.DebugRuleEvaluationStatus || (exports.DebugRuleEvaluationStatus = {}));
var DeleteAlgorithmInput;
(function (DeleteAlgorithmInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAlgorithmInput");
    }
    DeleteAlgorithmInput.isa = isa;
})(DeleteAlgorithmInput = exports.DeleteAlgorithmInput || (exports.DeleteAlgorithmInput = {}));
var DeleteAppRequest;
(function (DeleteAppRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAppRequest");
    }
    DeleteAppRequest.isa = isa;
})(DeleteAppRequest = exports.DeleteAppRequest || (exports.DeleteAppRequest = {}));
var DeleteCodeRepositoryInput;
(function (DeleteCodeRepositoryInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteCodeRepositoryInput");
    }
    DeleteCodeRepositoryInput.isa = isa;
})(DeleteCodeRepositoryInput = exports.DeleteCodeRepositoryInput || (exports.DeleteCodeRepositoryInput = {}));
var DeleteDomainRequest;
(function (DeleteDomainRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDomainRequest");
    }
    DeleteDomainRequest.isa = isa;
})(DeleteDomainRequest = exports.DeleteDomainRequest || (exports.DeleteDomainRequest = {}));
var DeleteEndpointConfigInput;
(function (DeleteEndpointConfigInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteEndpointConfigInput");
    }
    DeleteEndpointConfigInput.isa = isa;
})(DeleteEndpointConfigInput = exports.DeleteEndpointConfigInput || (exports.DeleteEndpointConfigInput = {}));
var DeleteEndpointInput;
(function (DeleteEndpointInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteEndpointInput");
    }
    DeleteEndpointInput.isa = isa;
})(DeleteEndpointInput = exports.DeleteEndpointInput || (exports.DeleteEndpointInput = {}));
var DeleteExperimentRequest;
(function (DeleteExperimentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteExperimentRequest");
    }
    DeleteExperimentRequest.isa = isa;
})(DeleteExperimentRequest = exports.DeleteExperimentRequest || (exports.DeleteExperimentRequest = {}));
var DeleteExperimentResponse;
(function (DeleteExperimentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteExperimentResponse");
    }
    DeleteExperimentResponse.isa = isa;
})(DeleteExperimentResponse = exports.DeleteExperimentResponse || (exports.DeleteExperimentResponse = {}));
var DeleteFlowDefinitionRequest;
(function (DeleteFlowDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteFlowDefinitionRequest");
    }
    DeleteFlowDefinitionRequest.isa = isa;
})(DeleteFlowDefinitionRequest = exports.DeleteFlowDefinitionRequest || (exports.DeleteFlowDefinitionRequest = {}));
var DeleteFlowDefinitionResponse;
(function (DeleteFlowDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteFlowDefinitionResponse");
    }
    DeleteFlowDefinitionResponse.isa = isa;
})(DeleteFlowDefinitionResponse = exports.DeleteFlowDefinitionResponse || (exports.DeleteFlowDefinitionResponse = {}));
var DeleteModelInput;
(function (DeleteModelInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteModelInput");
    }
    DeleteModelInput.isa = isa;
})(DeleteModelInput = exports.DeleteModelInput || (exports.DeleteModelInput = {}));
var DeleteModelPackageInput;
(function (DeleteModelPackageInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteModelPackageInput");
    }
    DeleteModelPackageInput.isa = isa;
})(DeleteModelPackageInput = exports.DeleteModelPackageInput || (exports.DeleteModelPackageInput = {}));
var DeleteMonitoringScheduleRequest;
(function (DeleteMonitoringScheduleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteMonitoringScheduleRequest");
    }
    DeleteMonitoringScheduleRequest.isa = isa;
})(DeleteMonitoringScheduleRequest = exports.DeleteMonitoringScheduleRequest || (exports.DeleteMonitoringScheduleRequest = {}));
var DeleteNotebookInstanceInput;
(function (DeleteNotebookInstanceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteNotebookInstanceInput");
    }
    DeleteNotebookInstanceInput.isa = isa;
})(DeleteNotebookInstanceInput = exports.DeleteNotebookInstanceInput || (exports.DeleteNotebookInstanceInput = {}));
var DeleteNotebookInstanceLifecycleConfigInput;
(function (DeleteNotebookInstanceLifecycleConfigInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteNotebookInstanceLifecycleConfigInput");
    }
    DeleteNotebookInstanceLifecycleConfigInput.isa = isa;
})(DeleteNotebookInstanceLifecycleConfigInput = exports.DeleteNotebookInstanceLifecycleConfigInput || (exports.DeleteNotebookInstanceLifecycleConfigInput = {}));
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
var DeleteTrialComponentRequest;
(function (DeleteTrialComponentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTrialComponentRequest");
    }
    DeleteTrialComponentRequest.isa = isa;
})(DeleteTrialComponentRequest = exports.DeleteTrialComponentRequest || (exports.DeleteTrialComponentRequest = {}));
var DeleteTrialComponentResponse;
(function (DeleteTrialComponentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTrialComponentResponse");
    }
    DeleteTrialComponentResponse.isa = isa;
})(DeleteTrialComponentResponse = exports.DeleteTrialComponentResponse || (exports.DeleteTrialComponentResponse = {}));
var DeleteTrialRequest;
(function (DeleteTrialRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTrialRequest");
    }
    DeleteTrialRequest.isa = isa;
})(DeleteTrialRequest = exports.DeleteTrialRequest || (exports.DeleteTrialRequest = {}));
var DeleteTrialResponse;
(function (DeleteTrialResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTrialResponse");
    }
    DeleteTrialResponse.isa = isa;
})(DeleteTrialResponse = exports.DeleteTrialResponse || (exports.DeleteTrialResponse = {}));
var DeleteUserProfileRequest;
(function (DeleteUserProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUserProfileRequest");
    }
    DeleteUserProfileRequest.isa = isa;
})(DeleteUserProfileRequest = exports.DeleteUserProfileRequest || (exports.DeleteUserProfileRequest = {}));
var DeleteWorkteamRequest;
(function (DeleteWorkteamRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteWorkteamRequest");
    }
    DeleteWorkteamRequest.isa = isa;
})(DeleteWorkteamRequest = exports.DeleteWorkteamRequest || (exports.DeleteWorkteamRequest = {}));
var DeleteWorkteamResponse;
(function (DeleteWorkteamResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteWorkteamResponse");
    }
    DeleteWorkteamResponse.isa = isa;
})(DeleteWorkteamResponse = exports.DeleteWorkteamResponse || (exports.DeleteWorkteamResponse = {}));
var DeployedImage;
(function (DeployedImage) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeployedImage");
    }
    DeployedImage.isa = isa;
})(DeployedImage = exports.DeployedImage || (exports.DeployedImage = {}));
var DescribeAlgorithmInput;
(function (DescribeAlgorithmInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAlgorithmInput");
    }
    DescribeAlgorithmInput.isa = isa;
})(DescribeAlgorithmInput = exports.DescribeAlgorithmInput || (exports.DescribeAlgorithmInput = {}));
var DescribeAlgorithmOutput;
(function (DescribeAlgorithmOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAlgorithmOutput");
    }
    DescribeAlgorithmOutput.isa = isa;
})(DescribeAlgorithmOutput = exports.DescribeAlgorithmOutput || (exports.DescribeAlgorithmOutput = {}));
var DescribeAppRequest;
(function (DescribeAppRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAppRequest");
    }
    DescribeAppRequest.isa = isa;
})(DescribeAppRequest = exports.DescribeAppRequest || (exports.DescribeAppRequest = {}));
var DescribeAppResponse;
(function (DescribeAppResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAppResponse");
    }
    DescribeAppResponse.isa = isa;
})(DescribeAppResponse = exports.DescribeAppResponse || (exports.DescribeAppResponse = {}));
var DescribeAutoMLJobRequest;
(function (DescribeAutoMLJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAutoMLJobRequest");
    }
    DescribeAutoMLJobRequest.isa = isa;
})(DescribeAutoMLJobRequest = exports.DescribeAutoMLJobRequest || (exports.DescribeAutoMLJobRequest = {}));
var DescribeAutoMLJobResponse;
(function (DescribeAutoMLJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAutoMLJobResponse");
    }
    DescribeAutoMLJobResponse.isa = isa;
})(DescribeAutoMLJobResponse = exports.DescribeAutoMLJobResponse || (exports.DescribeAutoMLJobResponse = {}));
var DescribeCodeRepositoryInput;
(function (DescribeCodeRepositoryInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCodeRepositoryInput");
    }
    DescribeCodeRepositoryInput.isa = isa;
})(DescribeCodeRepositoryInput = exports.DescribeCodeRepositoryInput || (exports.DescribeCodeRepositoryInput = {}));
var DescribeCodeRepositoryOutput;
(function (DescribeCodeRepositoryOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCodeRepositoryOutput");
    }
    DescribeCodeRepositoryOutput.isa = isa;
})(DescribeCodeRepositoryOutput = exports.DescribeCodeRepositoryOutput || (exports.DescribeCodeRepositoryOutput = {}));
var DescribeCompilationJobRequest;
(function (DescribeCompilationJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCompilationJobRequest");
    }
    DescribeCompilationJobRequest.isa = isa;
})(DescribeCompilationJobRequest = exports.DescribeCompilationJobRequest || (exports.DescribeCompilationJobRequest = {}));
var DescribeCompilationJobResponse;
(function (DescribeCompilationJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCompilationJobResponse");
    }
    DescribeCompilationJobResponse.isa = isa;
})(DescribeCompilationJobResponse = exports.DescribeCompilationJobResponse || (exports.DescribeCompilationJobResponse = {}));
var DescribeDomainRequest;
(function (DescribeDomainRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDomainRequest");
    }
    DescribeDomainRequest.isa = isa;
})(DescribeDomainRequest = exports.DescribeDomainRequest || (exports.DescribeDomainRequest = {}));
var DescribeDomainResponse;
(function (DescribeDomainResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDomainResponse");
    }
    DescribeDomainResponse.isa = isa;
})(DescribeDomainResponse = exports.DescribeDomainResponse || (exports.DescribeDomainResponse = {}));
var DescribeEndpointConfigInput;
(function (DescribeEndpointConfigInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEndpointConfigInput");
    }
    DescribeEndpointConfigInput.isa = isa;
})(DescribeEndpointConfigInput = exports.DescribeEndpointConfigInput || (exports.DescribeEndpointConfigInput = {}));
var DescribeEndpointConfigOutput;
(function (DescribeEndpointConfigOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEndpointConfigOutput");
    }
    DescribeEndpointConfigOutput.isa = isa;
})(DescribeEndpointConfigOutput = exports.DescribeEndpointConfigOutput || (exports.DescribeEndpointConfigOutput = {}));
var DescribeEndpointInput;
(function (DescribeEndpointInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEndpointInput");
    }
    DescribeEndpointInput.isa = isa;
})(DescribeEndpointInput = exports.DescribeEndpointInput || (exports.DescribeEndpointInput = {}));
var DescribeEndpointOutput;
(function (DescribeEndpointOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEndpointOutput");
    }
    DescribeEndpointOutput.isa = isa;
})(DescribeEndpointOutput = exports.DescribeEndpointOutput || (exports.DescribeEndpointOutput = {}));
var DescribeExperimentRequest;
(function (DescribeExperimentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeExperimentRequest");
    }
    DescribeExperimentRequest.isa = isa;
})(DescribeExperimentRequest = exports.DescribeExperimentRequest || (exports.DescribeExperimentRequest = {}));
var DescribeExperimentResponse;
(function (DescribeExperimentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeExperimentResponse");
    }
    DescribeExperimentResponse.isa = isa;
})(DescribeExperimentResponse = exports.DescribeExperimentResponse || (exports.DescribeExperimentResponse = {}));
var DescribeFlowDefinitionRequest;
(function (DescribeFlowDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeFlowDefinitionRequest");
    }
    DescribeFlowDefinitionRequest.isa = isa;
})(DescribeFlowDefinitionRequest = exports.DescribeFlowDefinitionRequest || (exports.DescribeFlowDefinitionRequest = {}));
var DescribeFlowDefinitionResponse;
(function (DescribeFlowDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeFlowDefinitionResponse");
    }
    DescribeFlowDefinitionResponse.isa = isa;
})(DescribeFlowDefinitionResponse = exports.DescribeFlowDefinitionResponse || (exports.DescribeFlowDefinitionResponse = {}));
var DescribeHumanTaskUiRequest;
(function (DescribeHumanTaskUiRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeHumanTaskUiRequest");
    }
    DescribeHumanTaskUiRequest.isa = isa;
})(DescribeHumanTaskUiRequest = exports.DescribeHumanTaskUiRequest || (exports.DescribeHumanTaskUiRequest = {}));
var DescribeHumanTaskUiResponse;
(function (DescribeHumanTaskUiResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeHumanTaskUiResponse");
    }
    DescribeHumanTaskUiResponse.isa = isa;
})(DescribeHumanTaskUiResponse = exports.DescribeHumanTaskUiResponse || (exports.DescribeHumanTaskUiResponse = {}));
var DescribeHyperParameterTuningJobRequest;
(function (DescribeHyperParameterTuningJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeHyperParameterTuningJobRequest");
    }
    DescribeHyperParameterTuningJobRequest.isa = isa;
})(DescribeHyperParameterTuningJobRequest = exports.DescribeHyperParameterTuningJobRequest || (exports.DescribeHyperParameterTuningJobRequest = {}));
var DescribeHyperParameterTuningJobResponse;
(function (DescribeHyperParameterTuningJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeHyperParameterTuningJobResponse");
    }
    DescribeHyperParameterTuningJobResponse.isa = isa;
})(DescribeHyperParameterTuningJobResponse = exports.DescribeHyperParameterTuningJobResponse || (exports.DescribeHyperParameterTuningJobResponse = {}));
var DescribeLabelingJobRequest;
(function (DescribeLabelingJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLabelingJobRequest");
    }
    DescribeLabelingJobRequest.isa = isa;
})(DescribeLabelingJobRequest = exports.DescribeLabelingJobRequest || (exports.DescribeLabelingJobRequest = {}));
var DescribeLabelingJobResponse;
(function (DescribeLabelingJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLabelingJobResponse");
    }
    DescribeLabelingJobResponse.isa = isa;
})(DescribeLabelingJobResponse = exports.DescribeLabelingJobResponse || (exports.DescribeLabelingJobResponse = {}));
var DescribeModelInput;
(function (DescribeModelInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeModelInput");
    }
    DescribeModelInput.isa = isa;
})(DescribeModelInput = exports.DescribeModelInput || (exports.DescribeModelInput = {}));
var DescribeModelOutput;
(function (DescribeModelOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeModelOutput");
    }
    DescribeModelOutput.isa = isa;
})(DescribeModelOutput = exports.DescribeModelOutput || (exports.DescribeModelOutput = {}));
var DescribeModelPackageInput;
(function (DescribeModelPackageInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeModelPackageInput");
    }
    DescribeModelPackageInput.isa = isa;
})(DescribeModelPackageInput = exports.DescribeModelPackageInput || (exports.DescribeModelPackageInput = {}));
var DescribeModelPackageOutput;
(function (DescribeModelPackageOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeModelPackageOutput");
    }
    DescribeModelPackageOutput.isa = isa;
})(DescribeModelPackageOutput = exports.DescribeModelPackageOutput || (exports.DescribeModelPackageOutput = {}));
var DescribeMonitoringScheduleRequest;
(function (DescribeMonitoringScheduleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMonitoringScheduleRequest");
    }
    DescribeMonitoringScheduleRequest.isa = isa;
})(DescribeMonitoringScheduleRequest = exports.DescribeMonitoringScheduleRequest || (exports.DescribeMonitoringScheduleRequest = {}));
var DescribeMonitoringScheduleResponse;
(function (DescribeMonitoringScheduleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMonitoringScheduleResponse");
    }
    DescribeMonitoringScheduleResponse.isa = isa;
})(DescribeMonitoringScheduleResponse = exports.DescribeMonitoringScheduleResponse || (exports.DescribeMonitoringScheduleResponse = {}));
var DescribeNotebookInstanceInput;
(function (DescribeNotebookInstanceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeNotebookInstanceInput");
    }
    DescribeNotebookInstanceInput.isa = isa;
})(DescribeNotebookInstanceInput = exports.DescribeNotebookInstanceInput || (exports.DescribeNotebookInstanceInput = {}));
var DescribeNotebookInstanceLifecycleConfigInput;
(function (DescribeNotebookInstanceLifecycleConfigInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeNotebookInstanceLifecycleConfigInput");
    }
    DescribeNotebookInstanceLifecycleConfigInput.isa = isa;
})(DescribeNotebookInstanceLifecycleConfigInput = exports.DescribeNotebookInstanceLifecycleConfigInput || (exports.DescribeNotebookInstanceLifecycleConfigInput = {}));
var DescribeNotebookInstanceLifecycleConfigOutput;
(function (DescribeNotebookInstanceLifecycleConfigOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeNotebookInstanceLifecycleConfigOutput");
    }
    DescribeNotebookInstanceLifecycleConfigOutput.isa = isa;
})(DescribeNotebookInstanceLifecycleConfigOutput = exports.DescribeNotebookInstanceLifecycleConfigOutput || (exports.DescribeNotebookInstanceLifecycleConfigOutput = {}));
var DescribeNotebookInstanceOutput;
(function (DescribeNotebookInstanceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeNotebookInstanceOutput");
    }
    DescribeNotebookInstanceOutput.isa = isa;
})(DescribeNotebookInstanceOutput = exports.DescribeNotebookInstanceOutput || (exports.DescribeNotebookInstanceOutput = {}));
var DescribeProcessingJobRequest;
(function (DescribeProcessingJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeProcessingJobRequest");
    }
    DescribeProcessingJobRequest.isa = isa;
})(DescribeProcessingJobRequest = exports.DescribeProcessingJobRequest || (exports.DescribeProcessingJobRequest = {}));
var DescribeProcessingJobResponse;
(function (DescribeProcessingJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeProcessingJobResponse");
    }
    DescribeProcessingJobResponse.isa = isa;
})(DescribeProcessingJobResponse = exports.DescribeProcessingJobResponse || (exports.DescribeProcessingJobResponse = {}));
var DescribeSubscribedWorkteamRequest;
(function (DescribeSubscribedWorkteamRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSubscribedWorkteamRequest");
    }
    DescribeSubscribedWorkteamRequest.isa = isa;
})(DescribeSubscribedWorkteamRequest = exports.DescribeSubscribedWorkteamRequest || (exports.DescribeSubscribedWorkteamRequest = {}));
var DescribeSubscribedWorkteamResponse;
(function (DescribeSubscribedWorkteamResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSubscribedWorkteamResponse");
    }
    DescribeSubscribedWorkteamResponse.isa = isa;
})(DescribeSubscribedWorkteamResponse = exports.DescribeSubscribedWorkteamResponse || (exports.DescribeSubscribedWorkteamResponse = {}));
var DescribeTrainingJobRequest;
(function (DescribeTrainingJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTrainingJobRequest");
    }
    DescribeTrainingJobRequest.isa = isa;
})(DescribeTrainingJobRequest = exports.DescribeTrainingJobRequest || (exports.DescribeTrainingJobRequest = {}));
var DescribeTrainingJobResponse;
(function (DescribeTrainingJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTrainingJobResponse");
    }
    DescribeTrainingJobResponse.isa = isa;
})(DescribeTrainingJobResponse = exports.DescribeTrainingJobResponse || (exports.DescribeTrainingJobResponse = {}));
var DescribeTransformJobRequest;
(function (DescribeTransformJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTransformJobRequest");
    }
    DescribeTransformJobRequest.isa = isa;
})(DescribeTransformJobRequest = exports.DescribeTransformJobRequest || (exports.DescribeTransformJobRequest = {}));
var DescribeTransformJobResponse;
(function (DescribeTransformJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTransformJobResponse");
    }
    DescribeTransformJobResponse.isa = isa;
})(DescribeTransformJobResponse = exports.DescribeTransformJobResponse || (exports.DescribeTransformJobResponse = {}));
var DescribeTrialComponentRequest;
(function (DescribeTrialComponentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTrialComponentRequest");
    }
    DescribeTrialComponentRequest.isa = isa;
})(DescribeTrialComponentRequest = exports.DescribeTrialComponentRequest || (exports.DescribeTrialComponentRequest = {}));
var DescribeTrialComponentResponse;
(function (DescribeTrialComponentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTrialComponentResponse");
    }
    DescribeTrialComponentResponse.isa = isa;
})(DescribeTrialComponentResponse = exports.DescribeTrialComponentResponse || (exports.DescribeTrialComponentResponse = {}));
var DescribeTrialRequest;
(function (DescribeTrialRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTrialRequest");
    }
    DescribeTrialRequest.isa = isa;
})(DescribeTrialRequest = exports.DescribeTrialRequest || (exports.DescribeTrialRequest = {}));
var DescribeTrialResponse;
(function (DescribeTrialResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTrialResponse");
    }
    DescribeTrialResponse.isa = isa;
})(DescribeTrialResponse = exports.DescribeTrialResponse || (exports.DescribeTrialResponse = {}));
var DescribeUserProfileRequest;
(function (DescribeUserProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeUserProfileRequest");
    }
    DescribeUserProfileRequest.isa = isa;
})(DescribeUserProfileRequest = exports.DescribeUserProfileRequest || (exports.DescribeUserProfileRequest = {}));
var DescribeUserProfileResponse;
(function (DescribeUserProfileResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeUserProfileResponse");
    }
    DescribeUserProfileResponse.isa = isa;
})(DescribeUserProfileResponse = exports.DescribeUserProfileResponse || (exports.DescribeUserProfileResponse = {}));
var DescribeWorkforceRequest;
(function (DescribeWorkforceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeWorkforceRequest");
    }
    DescribeWorkforceRequest.isa = isa;
})(DescribeWorkforceRequest = exports.DescribeWorkforceRequest || (exports.DescribeWorkforceRequest = {}));
var DescribeWorkforceResponse;
(function (DescribeWorkforceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeWorkforceResponse");
    }
    DescribeWorkforceResponse.isa = isa;
})(DescribeWorkforceResponse = exports.DescribeWorkforceResponse || (exports.DescribeWorkforceResponse = {}));
var DescribeWorkteamRequest;
(function (DescribeWorkteamRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeWorkteamRequest");
    }
    DescribeWorkteamRequest.isa = isa;
})(DescribeWorkteamRequest = exports.DescribeWorkteamRequest || (exports.DescribeWorkteamRequest = {}));
var DescribeWorkteamResponse;
(function (DescribeWorkteamResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeWorkteamResponse");
    }
    DescribeWorkteamResponse.isa = isa;
})(DescribeWorkteamResponse = exports.DescribeWorkteamResponse || (exports.DescribeWorkteamResponse = {}));
var DesiredWeightAndCapacity;
(function (DesiredWeightAndCapacity) {
    function isa(o) {
        return smithy_client_1.isa(o, "DesiredWeightAndCapacity");
    }
    DesiredWeightAndCapacity.isa = isa;
})(DesiredWeightAndCapacity = exports.DesiredWeightAndCapacity || (exports.DesiredWeightAndCapacity = {}));
var DetailedAlgorithmStatus;
(function (DetailedAlgorithmStatus) {
    DetailedAlgorithmStatus["COMPLETED"] = "Completed";
    DetailedAlgorithmStatus["FAILED"] = "Failed";
    DetailedAlgorithmStatus["IN_PROGRESS"] = "InProgress";
    DetailedAlgorithmStatus["NOT_STARTED"] = "NotStarted";
})(DetailedAlgorithmStatus = exports.DetailedAlgorithmStatus || (exports.DetailedAlgorithmStatus = {}));
var DetailedModelPackageStatus;
(function (DetailedModelPackageStatus) {
    DetailedModelPackageStatus["COMPLETED"] = "Completed";
    DetailedModelPackageStatus["FAILED"] = "Failed";
    DetailedModelPackageStatus["IN_PROGRESS"] = "InProgress";
    DetailedModelPackageStatus["NOT_STARTED"] = "NotStarted";
})(DetailedModelPackageStatus = exports.DetailedModelPackageStatus || (exports.DetailedModelPackageStatus = {}));
var DirectInternetAccess;
(function (DirectInternetAccess) {
    DirectInternetAccess["DISABLED"] = "Disabled";
    DirectInternetAccess["ENABLED"] = "Enabled";
})(DirectInternetAccess = exports.DirectInternetAccess || (exports.DirectInternetAccess = {}));
var DisassociateTrialComponentRequest;
(function (DisassociateTrialComponentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateTrialComponentRequest");
    }
    DisassociateTrialComponentRequest.isa = isa;
})(DisassociateTrialComponentRequest = exports.DisassociateTrialComponentRequest || (exports.DisassociateTrialComponentRequest = {}));
var DisassociateTrialComponentResponse;
(function (DisassociateTrialComponentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateTrialComponentResponse");
    }
    DisassociateTrialComponentResponse.isa = isa;
})(DisassociateTrialComponentResponse = exports.DisassociateTrialComponentResponse || (exports.DisassociateTrialComponentResponse = {}));
var DomainDetails;
(function (DomainDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "DomainDetails");
    }
    DomainDetails.isa = isa;
})(DomainDetails = exports.DomainDetails || (exports.DomainDetails = {}));
var DomainStatus;
(function (DomainStatus) {
    DomainStatus["Deleting"] = "Deleting";
    DomainStatus["Failed"] = "Failed";
    DomainStatus["InService"] = "InService";
    DomainStatus["Pending"] = "Pending";
})(DomainStatus = exports.DomainStatus || (exports.DomainStatus = {}));
var EndpointConfigSortKey;
(function (EndpointConfigSortKey) {
    EndpointConfigSortKey["CreationTime"] = "CreationTime";
    EndpointConfigSortKey["Name"] = "Name";
})(EndpointConfigSortKey = exports.EndpointConfigSortKey || (exports.EndpointConfigSortKey = {}));
var EndpointConfigSummary;
(function (EndpointConfigSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "EndpointConfigSummary");
    }
    EndpointConfigSummary.isa = isa;
})(EndpointConfigSummary = exports.EndpointConfigSummary || (exports.EndpointConfigSummary = {}));
var EndpointInput;
(function (EndpointInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "EndpointInput");
    }
    EndpointInput.isa = isa;
})(EndpointInput = exports.EndpointInput || (exports.EndpointInput = {}));
var EndpointSortKey;
(function (EndpointSortKey) {
    EndpointSortKey["CreationTime"] = "CreationTime";
    EndpointSortKey["Name"] = "Name";
    EndpointSortKey["Status"] = "Status";
})(EndpointSortKey = exports.EndpointSortKey || (exports.EndpointSortKey = {}));
var EndpointStatus;
(function (EndpointStatus) {
    EndpointStatus["CREATING"] = "Creating";
    EndpointStatus["DELETING"] = "Deleting";
    EndpointStatus["FAILED"] = "Failed";
    EndpointStatus["IN_SERVICE"] = "InService";
    EndpointStatus["OUT_OF_SERVICE"] = "OutOfService";
    EndpointStatus["ROLLING_BACK"] = "RollingBack";
    EndpointStatus["SYSTEM_UPDATING"] = "SystemUpdating";
    EndpointStatus["UPDATING"] = "Updating";
})(EndpointStatus = exports.EndpointStatus || (exports.EndpointStatus = {}));
var EndpointSummary;
(function (EndpointSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "EndpointSummary");
    }
    EndpointSummary.isa = isa;
})(EndpointSummary = exports.EndpointSummary || (exports.EndpointSummary = {}));
var ExecutionStatus;
(function (ExecutionStatus) {
    ExecutionStatus["COMPLETED"] = "Completed";
    ExecutionStatus["COMPLETED_WITH_VIOLATIONS"] = "CompletedWithViolations";
    ExecutionStatus["FAILED"] = "Failed";
    ExecutionStatus["IN_PROGRESS"] = "InProgress";
    ExecutionStatus["PENDING"] = "Pending";
    ExecutionStatus["STOPPED"] = "Stopped";
    ExecutionStatus["STOPPING"] = "Stopping";
})(ExecutionStatus = exports.ExecutionStatus || (exports.ExecutionStatus = {}));
var Experiment;
(function (Experiment) {
    function isa(o) {
        return smithy_client_1.isa(o, "Experiment");
    }
    Experiment.isa = isa;
})(Experiment = exports.Experiment || (exports.Experiment = {}));
var ExperimentConfig;
(function (ExperimentConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExperimentConfig");
    }
    ExperimentConfig.isa = isa;
})(ExperimentConfig = exports.ExperimentConfig || (exports.ExperimentConfig = {}));
var ExperimentSource;
(function (ExperimentSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExperimentSource");
    }
    ExperimentSource.isa = isa;
})(ExperimentSource = exports.ExperimentSource || (exports.ExperimentSource = {}));
var ExperimentSummary;
(function (ExperimentSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExperimentSummary");
    }
    ExperimentSummary.isa = isa;
})(ExperimentSummary = exports.ExperimentSummary || (exports.ExperimentSummary = {}));
var FileSystemAccessMode;
(function (FileSystemAccessMode) {
    FileSystemAccessMode["RO"] = "ro";
    FileSystemAccessMode["RW"] = "rw";
})(FileSystemAccessMode = exports.FileSystemAccessMode || (exports.FileSystemAccessMode = {}));
var FileSystemDataSource;
(function (FileSystemDataSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "FileSystemDataSource");
    }
    FileSystemDataSource.isa = isa;
})(FileSystemDataSource = exports.FileSystemDataSource || (exports.FileSystemDataSource = {}));
var FileSystemType;
(function (FileSystemType) {
    FileSystemType["EFS"] = "EFS";
    FileSystemType["FSXLUSTRE"] = "FSxLustre";
})(FileSystemType = exports.FileSystemType || (exports.FileSystemType = {}));
var Filter;
(function (Filter) {
    function isa(o) {
        return smithy_client_1.isa(o, "Filter");
    }
    Filter.isa = isa;
})(Filter = exports.Filter || (exports.Filter = {}));
var FinalAutoMLJobObjectiveMetric;
(function (FinalAutoMLJobObjectiveMetric) {
    function isa(o) {
        return smithy_client_1.isa(o, "FinalAutoMLJobObjectiveMetric");
    }
    FinalAutoMLJobObjectiveMetric.isa = isa;
})(FinalAutoMLJobObjectiveMetric = exports.FinalAutoMLJobObjectiveMetric || (exports.FinalAutoMLJobObjectiveMetric = {}));
var FinalHyperParameterTuningJobObjectiveMetric;
(function (FinalHyperParameterTuningJobObjectiveMetric) {
    function isa(o) {
        return smithy_client_1.isa(o, "FinalHyperParameterTuningJobObjectiveMetric");
    }
    FinalHyperParameterTuningJobObjectiveMetric.isa = isa;
})(FinalHyperParameterTuningJobObjectiveMetric = exports.FinalHyperParameterTuningJobObjectiveMetric || (exports.FinalHyperParameterTuningJobObjectiveMetric = {}));
var FlowDefinitionOutputConfig;
(function (FlowDefinitionOutputConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "FlowDefinitionOutputConfig");
    }
    FlowDefinitionOutputConfig.isa = isa;
})(FlowDefinitionOutputConfig = exports.FlowDefinitionOutputConfig || (exports.FlowDefinitionOutputConfig = {}));
var FlowDefinitionStatus;
(function (FlowDefinitionStatus) {
    FlowDefinitionStatus["ACTIVE"] = "Active";
    FlowDefinitionStatus["DELETED"] = "Deleted";
    FlowDefinitionStatus["DELETING"] = "Deleting";
    FlowDefinitionStatus["FAILED"] = "Failed";
    FlowDefinitionStatus["INITIALIZING"] = "Initializing";
})(FlowDefinitionStatus = exports.FlowDefinitionStatus || (exports.FlowDefinitionStatus = {}));
var FlowDefinitionSummary;
(function (FlowDefinitionSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "FlowDefinitionSummary");
    }
    FlowDefinitionSummary.isa = isa;
})(FlowDefinitionSummary = exports.FlowDefinitionSummary || (exports.FlowDefinitionSummary = {}));
var Framework;
(function (Framework) {
    Framework["KERAS"] = "KERAS";
    Framework["MXNET"] = "MXNET";
    Framework["ONNX"] = "ONNX";
    Framework["PYTORCH"] = "PYTORCH";
    Framework["TENSORFLOW"] = "TENSORFLOW";
    Framework["XGBOOST"] = "XGBOOST";
})(Framework = exports.Framework || (exports.Framework = {}));
var GetSearchSuggestionsRequest;
(function (GetSearchSuggestionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSearchSuggestionsRequest");
    }
    GetSearchSuggestionsRequest.isa = isa;
})(GetSearchSuggestionsRequest = exports.GetSearchSuggestionsRequest || (exports.GetSearchSuggestionsRequest = {}));
var GetSearchSuggestionsResponse;
(function (GetSearchSuggestionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSearchSuggestionsResponse");
    }
    GetSearchSuggestionsResponse.isa = isa;
})(GetSearchSuggestionsResponse = exports.GetSearchSuggestionsResponse || (exports.GetSearchSuggestionsResponse = {}));
var GitConfig;
(function (GitConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "GitConfig");
    }
    GitConfig.isa = isa;
})(GitConfig = exports.GitConfig || (exports.GitConfig = {}));
var GitConfigForUpdate;
(function (GitConfigForUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "GitConfigForUpdate");
    }
    GitConfigForUpdate.isa = isa;
})(GitConfigForUpdate = exports.GitConfigForUpdate || (exports.GitConfigForUpdate = {}));
var HumanLoopActivationConditionsConfig;
(function (HumanLoopActivationConditionsConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "HumanLoopActivationConditionsConfig");
    }
    HumanLoopActivationConditionsConfig.isa = isa;
})(HumanLoopActivationConditionsConfig = exports.HumanLoopActivationConditionsConfig || (exports.HumanLoopActivationConditionsConfig = {}));
var HumanLoopActivationConfig;
(function (HumanLoopActivationConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "HumanLoopActivationConfig");
    }
    HumanLoopActivationConfig.isa = isa;
})(HumanLoopActivationConfig = exports.HumanLoopActivationConfig || (exports.HumanLoopActivationConfig = {}));
var HumanLoopConfig;
(function (HumanLoopConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "HumanLoopConfig");
    }
    HumanLoopConfig.isa = isa;
})(HumanLoopConfig = exports.HumanLoopConfig || (exports.HumanLoopConfig = {}));
var HumanLoopRequestSource;
(function (HumanLoopRequestSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "HumanLoopRequestSource");
    }
    HumanLoopRequestSource.isa = isa;
})(HumanLoopRequestSource = exports.HumanLoopRequestSource || (exports.HumanLoopRequestSource = {}));
var HumanTaskConfig;
(function (HumanTaskConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "HumanTaskConfig");
    }
    HumanTaskConfig.isa = isa;
})(HumanTaskConfig = exports.HumanTaskConfig || (exports.HumanTaskConfig = {}));
var HumanTaskUiSummary;
(function (HumanTaskUiSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "HumanTaskUiSummary");
    }
    HumanTaskUiSummary.isa = isa;
})(HumanTaskUiSummary = exports.HumanTaskUiSummary || (exports.HumanTaskUiSummary = {}));
var HyperParameterAlgorithmSpecification;
(function (HyperParameterAlgorithmSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "HyperParameterAlgorithmSpecification");
    }
    HyperParameterAlgorithmSpecification.isa = isa;
})(HyperParameterAlgorithmSpecification = exports.HyperParameterAlgorithmSpecification || (exports.HyperParameterAlgorithmSpecification = {}));
var HyperParameterScalingType;
(function (HyperParameterScalingType) {
    HyperParameterScalingType["AUTO"] = "Auto";
    HyperParameterScalingType["LINEAR"] = "Linear";
    HyperParameterScalingType["LOGARITHMIC"] = "Logarithmic";
    HyperParameterScalingType["REVERSE_LOGARITHMIC"] = "ReverseLogarithmic";
})(HyperParameterScalingType = exports.HyperParameterScalingType || (exports.HyperParameterScalingType = {}));
var HyperParameterSpecification;
(function (HyperParameterSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "HyperParameterSpecification");
    }
    HyperParameterSpecification.isa = isa;
})(HyperParameterSpecification = exports.HyperParameterSpecification || (exports.HyperParameterSpecification = {}));
var HyperParameterTrainingJobDefinition;
(function (HyperParameterTrainingJobDefinition) {
    function isa(o) {
        return smithy_client_1.isa(o, "HyperParameterTrainingJobDefinition");
    }
    HyperParameterTrainingJobDefinition.isa = isa;
})(HyperParameterTrainingJobDefinition = exports.HyperParameterTrainingJobDefinition || (exports.HyperParameterTrainingJobDefinition = {}));
var HyperParameterTrainingJobSummary;
(function (HyperParameterTrainingJobSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "HyperParameterTrainingJobSummary");
    }
    HyperParameterTrainingJobSummary.isa = isa;
})(HyperParameterTrainingJobSummary = exports.HyperParameterTrainingJobSummary || (exports.HyperParameterTrainingJobSummary = {}));
var HyperParameterTuningJobConfig;
(function (HyperParameterTuningJobConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "HyperParameterTuningJobConfig");
    }
    HyperParameterTuningJobConfig.isa = isa;
})(HyperParameterTuningJobConfig = exports.HyperParameterTuningJobConfig || (exports.HyperParameterTuningJobConfig = {}));
var HyperParameterTuningJobObjective;
(function (HyperParameterTuningJobObjective) {
    function isa(o) {
        return smithy_client_1.isa(o, "HyperParameterTuningJobObjective");
    }
    HyperParameterTuningJobObjective.isa = isa;
})(HyperParameterTuningJobObjective = exports.HyperParameterTuningJobObjective || (exports.HyperParameterTuningJobObjective = {}));
var HyperParameterTuningJobObjectiveType;
(function (HyperParameterTuningJobObjectiveType) {
    HyperParameterTuningJobObjectiveType["MAXIMIZE"] = "Maximize";
    HyperParameterTuningJobObjectiveType["MINIMIZE"] = "Minimize";
})(HyperParameterTuningJobObjectiveType = exports.HyperParameterTuningJobObjectiveType || (exports.HyperParameterTuningJobObjectiveType = {}));
var HyperParameterTuningJobSortByOptions;
(function (HyperParameterTuningJobSortByOptions) {
    HyperParameterTuningJobSortByOptions["CreationTime"] = "CreationTime";
    HyperParameterTuningJobSortByOptions["Name"] = "Name";
    HyperParameterTuningJobSortByOptions["Status"] = "Status";
})(HyperParameterTuningJobSortByOptions = exports.HyperParameterTuningJobSortByOptions || (exports.HyperParameterTuningJobSortByOptions = {}));
var HyperParameterTuningJobStatus;
(function (HyperParameterTuningJobStatus) {
    HyperParameterTuningJobStatus["COMPLETED"] = "Completed";
    HyperParameterTuningJobStatus["FAILED"] = "Failed";
    HyperParameterTuningJobStatus["IN_PROGRESS"] = "InProgress";
    HyperParameterTuningJobStatus["STOPPED"] = "Stopped";
    HyperParameterTuningJobStatus["STOPPING"] = "Stopping";
})(HyperParameterTuningJobStatus = exports.HyperParameterTuningJobStatus || (exports.HyperParameterTuningJobStatus = {}));
var HyperParameterTuningJobStrategyType;
(function (HyperParameterTuningJobStrategyType) {
    HyperParameterTuningJobStrategyType["BAYESIAN"] = "Bayesian";
    HyperParameterTuningJobStrategyType["RANDOM"] = "Random";
})(HyperParameterTuningJobStrategyType = exports.HyperParameterTuningJobStrategyType || (exports.HyperParameterTuningJobStrategyType = {}));
var HyperParameterTuningJobSummary;
(function (HyperParameterTuningJobSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "HyperParameterTuningJobSummary");
    }
    HyperParameterTuningJobSummary.isa = isa;
})(HyperParameterTuningJobSummary = exports.HyperParameterTuningJobSummary || (exports.HyperParameterTuningJobSummary = {}));
var HyperParameterTuningJobWarmStartConfig;
(function (HyperParameterTuningJobWarmStartConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "HyperParameterTuningJobWarmStartConfig");
    }
    HyperParameterTuningJobWarmStartConfig.isa = isa;
})(HyperParameterTuningJobWarmStartConfig = exports.HyperParameterTuningJobWarmStartConfig || (exports.HyperParameterTuningJobWarmStartConfig = {}));
var HyperParameterTuningJobWarmStartType;
(function (HyperParameterTuningJobWarmStartType) {
    HyperParameterTuningJobWarmStartType["IDENTICAL_DATA_AND_ALGORITHM"] = "IdenticalDataAndAlgorithm";
    HyperParameterTuningJobWarmStartType["TRANSFER_LEARNING"] = "TransferLearning";
})(HyperParameterTuningJobWarmStartType = exports.HyperParameterTuningJobWarmStartType || (exports.HyperParameterTuningJobWarmStartType = {}));
var InferenceSpecification;
(function (InferenceSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "InferenceSpecification");
    }
    InferenceSpecification.isa = isa;
})(InferenceSpecification = exports.InferenceSpecification || (exports.InferenceSpecification = {}));
var InputConfig;
(function (InputConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputConfig");
    }
    InputConfig.isa = isa;
})(InputConfig = exports.InputConfig || (exports.InputConfig = {}));
var _InstanceType;
(function (_InstanceType) {
    _InstanceType["ML_C4_2XLARGE"] = "ml.c4.2xlarge";
    _InstanceType["ML_C4_4XLARGE"] = "ml.c4.4xlarge";
    _InstanceType["ML_C4_8XLARGE"] = "ml.c4.8xlarge";
    _InstanceType["ML_C4_XLARGE"] = "ml.c4.xlarge";
    _InstanceType["ML_C5D_18XLARGE"] = "ml.c5d.18xlarge";
    _InstanceType["ML_C5D_2XLARGE"] = "ml.c5d.2xlarge";
    _InstanceType["ML_C5D_4XLARGE"] = "ml.c5d.4xlarge";
    _InstanceType["ML_C5D_9XLARGE"] = "ml.c5d.9xlarge";
    _InstanceType["ML_C5D_XLARGE"] = "ml.c5d.xlarge";
    _InstanceType["ML_C5_18XLARGE"] = "ml.c5.18xlarge";
    _InstanceType["ML_C5_2XLARGE"] = "ml.c5.2xlarge";
    _InstanceType["ML_C5_4XLARGE"] = "ml.c5.4xlarge";
    _InstanceType["ML_C5_9XLARGE"] = "ml.c5.9xlarge";
    _InstanceType["ML_C5_XLARGE"] = "ml.c5.xlarge";
    _InstanceType["ML_M4_10XLARGE"] = "ml.m4.10xlarge";
    _InstanceType["ML_M4_16XLARGE"] = "ml.m4.16xlarge";
    _InstanceType["ML_M4_2XLARGE"] = "ml.m4.2xlarge";
    _InstanceType["ML_M4_4XLARGE"] = "ml.m4.4xlarge";
    _InstanceType["ML_M4_XLARGE"] = "ml.m4.xlarge";
    _InstanceType["ML_M5_12XLARGE"] = "ml.m5.12xlarge";
    _InstanceType["ML_M5_24XLARGE"] = "ml.m5.24xlarge";
    _InstanceType["ML_M5_2XLARGE"] = "ml.m5.2xlarge";
    _InstanceType["ML_M5_4XLARGE"] = "ml.m5.4xlarge";
    _InstanceType["ML_M5_XLARGE"] = "ml.m5.xlarge";
    _InstanceType["ML_P2_16XLARGE"] = "ml.p2.16xlarge";
    _InstanceType["ML_P2_8XLARGE"] = "ml.p2.8xlarge";
    _InstanceType["ML_P2_XLARGE"] = "ml.p2.xlarge";
    _InstanceType["ML_P3_16XLARGE"] = "ml.p3.16xlarge";
    _InstanceType["ML_P3_2XLARGE"] = "ml.p3.2xlarge";
    _InstanceType["ML_P3_8XLARGE"] = "ml.p3.8xlarge";
    _InstanceType["ML_T2_2XLARGE"] = "ml.t2.2xlarge";
    _InstanceType["ML_T2_LARGE"] = "ml.t2.large";
    _InstanceType["ML_T2_MEDIUM"] = "ml.t2.medium";
    _InstanceType["ML_T2_XLARGE"] = "ml.t2.xlarge";
    _InstanceType["ML_T3_2XLARGE"] = "ml.t3.2xlarge";
    _InstanceType["ML_T3_LARGE"] = "ml.t3.large";
    _InstanceType["ML_T3_MEDIUM"] = "ml.t3.medium";
    _InstanceType["ML_T3_XLARGE"] = "ml.t3.xlarge";
})(_InstanceType = exports._InstanceType || (exports._InstanceType = {}));
var IntegerParameterRange;
(function (IntegerParameterRange) {
    function isa(o) {
        return smithy_client_1.isa(o, "IntegerParameterRange");
    }
    IntegerParameterRange.isa = isa;
})(IntegerParameterRange = exports.IntegerParameterRange || (exports.IntegerParameterRange = {}));
var IntegerParameterRangeSpecification;
(function (IntegerParameterRangeSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "IntegerParameterRangeSpecification");
    }
    IntegerParameterRangeSpecification.isa = isa;
})(IntegerParameterRangeSpecification = exports.IntegerParameterRangeSpecification || (exports.IntegerParameterRangeSpecification = {}));
var JoinSource;
(function (JoinSource) {
    JoinSource["INPUT"] = "Input";
    JoinSource["NONE"] = "None";
})(JoinSource = exports.JoinSource || (exports.JoinSource = {}));
var JupyterServerAppSettings;
(function (JupyterServerAppSettings) {
    function isa(o) {
        return smithy_client_1.isa(o, "JupyterServerAppSettings");
    }
    JupyterServerAppSettings.isa = isa;
})(JupyterServerAppSettings = exports.JupyterServerAppSettings || (exports.JupyterServerAppSettings = {}));
var KernelGatewayAppSettings;
(function (KernelGatewayAppSettings) {
    function isa(o) {
        return smithy_client_1.isa(o, "KernelGatewayAppSettings");
    }
    KernelGatewayAppSettings.isa = isa;
})(KernelGatewayAppSettings = exports.KernelGatewayAppSettings || (exports.KernelGatewayAppSettings = {}));
var LabelCounters;
(function (LabelCounters) {
    function isa(o) {
        return smithy_client_1.isa(o, "LabelCounters");
    }
    LabelCounters.isa = isa;
})(LabelCounters = exports.LabelCounters || (exports.LabelCounters = {}));
var LabelCountersForWorkteam;
(function (LabelCountersForWorkteam) {
    function isa(o) {
        return smithy_client_1.isa(o, "LabelCountersForWorkteam");
    }
    LabelCountersForWorkteam.isa = isa;
})(LabelCountersForWorkteam = exports.LabelCountersForWorkteam || (exports.LabelCountersForWorkteam = {}));
var LabelingJobAlgorithmsConfig;
(function (LabelingJobAlgorithmsConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "LabelingJobAlgorithmsConfig");
    }
    LabelingJobAlgorithmsConfig.isa = isa;
})(LabelingJobAlgorithmsConfig = exports.LabelingJobAlgorithmsConfig || (exports.LabelingJobAlgorithmsConfig = {}));
var LabelingJobDataAttributes;
(function (LabelingJobDataAttributes) {
    function isa(o) {
        return smithy_client_1.isa(o, "LabelingJobDataAttributes");
    }
    LabelingJobDataAttributes.isa = isa;
})(LabelingJobDataAttributes = exports.LabelingJobDataAttributes || (exports.LabelingJobDataAttributes = {}));
var LabelingJobDataSource;
(function (LabelingJobDataSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "LabelingJobDataSource");
    }
    LabelingJobDataSource.isa = isa;
})(LabelingJobDataSource = exports.LabelingJobDataSource || (exports.LabelingJobDataSource = {}));
var LabelingJobForWorkteamSummary;
(function (LabelingJobForWorkteamSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "LabelingJobForWorkteamSummary");
    }
    LabelingJobForWorkteamSummary.isa = isa;
})(LabelingJobForWorkteamSummary = exports.LabelingJobForWorkteamSummary || (exports.LabelingJobForWorkteamSummary = {}));
var LabelingJobInputConfig;
(function (LabelingJobInputConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "LabelingJobInputConfig");
    }
    LabelingJobInputConfig.isa = isa;
})(LabelingJobInputConfig = exports.LabelingJobInputConfig || (exports.LabelingJobInputConfig = {}));
var LabelingJobOutput;
(function (LabelingJobOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "LabelingJobOutput");
    }
    LabelingJobOutput.isa = isa;
})(LabelingJobOutput = exports.LabelingJobOutput || (exports.LabelingJobOutput = {}));
var LabelingJobOutputConfig;
(function (LabelingJobOutputConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "LabelingJobOutputConfig");
    }
    LabelingJobOutputConfig.isa = isa;
})(LabelingJobOutputConfig = exports.LabelingJobOutputConfig || (exports.LabelingJobOutputConfig = {}));
var LabelingJobResourceConfig;
(function (LabelingJobResourceConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "LabelingJobResourceConfig");
    }
    LabelingJobResourceConfig.isa = isa;
})(LabelingJobResourceConfig = exports.LabelingJobResourceConfig || (exports.LabelingJobResourceConfig = {}));
var LabelingJobS3DataSource;
(function (LabelingJobS3DataSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "LabelingJobS3DataSource");
    }
    LabelingJobS3DataSource.isa = isa;
})(LabelingJobS3DataSource = exports.LabelingJobS3DataSource || (exports.LabelingJobS3DataSource = {}));
var LabelingJobStatus;
(function (LabelingJobStatus) {
    LabelingJobStatus["COMPLETED"] = "Completed";
    LabelingJobStatus["FAILED"] = "Failed";
    LabelingJobStatus["IN_PROGRESS"] = "InProgress";
    LabelingJobStatus["STOPPED"] = "Stopped";
    LabelingJobStatus["STOPPING"] = "Stopping";
})(LabelingJobStatus = exports.LabelingJobStatus || (exports.LabelingJobStatus = {}));
var LabelingJobStoppingConditions;
(function (LabelingJobStoppingConditions) {
    function isa(o) {
        return smithy_client_1.isa(o, "LabelingJobStoppingConditions");
    }
    LabelingJobStoppingConditions.isa = isa;
})(LabelingJobStoppingConditions = exports.LabelingJobStoppingConditions || (exports.LabelingJobStoppingConditions = {}));
var LabelingJobSummary;
(function (LabelingJobSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "LabelingJobSummary");
    }
    LabelingJobSummary.isa = isa;
})(LabelingJobSummary = exports.LabelingJobSummary || (exports.LabelingJobSummary = {}));
var ListAlgorithmsInput;
(function (ListAlgorithmsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAlgorithmsInput");
    }
    ListAlgorithmsInput.isa = isa;
})(ListAlgorithmsInput = exports.ListAlgorithmsInput || (exports.ListAlgorithmsInput = {}));
var ListAlgorithmsOutput;
(function (ListAlgorithmsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAlgorithmsOutput");
    }
    ListAlgorithmsOutput.isa = isa;
})(ListAlgorithmsOutput = exports.ListAlgorithmsOutput || (exports.ListAlgorithmsOutput = {}));
var ListAppsRequest;
(function (ListAppsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAppsRequest");
    }
    ListAppsRequest.isa = isa;
})(ListAppsRequest = exports.ListAppsRequest || (exports.ListAppsRequest = {}));
var ListAppsResponse;
(function (ListAppsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAppsResponse");
    }
    ListAppsResponse.isa = isa;
})(ListAppsResponse = exports.ListAppsResponse || (exports.ListAppsResponse = {}));
var ListAutoMLJobsRequest;
(function (ListAutoMLJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAutoMLJobsRequest");
    }
    ListAutoMLJobsRequest.isa = isa;
})(ListAutoMLJobsRequest = exports.ListAutoMLJobsRequest || (exports.ListAutoMLJobsRequest = {}));
var ListAutoMLJobsResponse;
(function (ListAutoMLJobsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAutoMLJobsResponse");
    }
    ListAutoMLJobsResponse.isa = isa;
})(ListAutoMLJobsResponse = exports.ListAutoMLJobsResponse || (exports.ListAutoMLJobsResponse = {}));
var ListCandidatesForAutoMLJobRequest;
(function (ListCandidatesForAutoMLJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCandidatesForAutoMLJobRequest");
    }
    ListCandidatesForAutoMLJobRequest.isa = isa;
})(ListCandidatesForAutoMLJobRequest = exports.ListCandidatesForAutoMLJobRequest || (exports.ListCandidatesForAutoMLJobRequest = {}));
var ListCandidatesForAutoMLJobResponse;
(function (ListCandidatesForAutoMLJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCandidatesForAutoMLJobResponse");
    }
    ListCandidatesForAutoMLJobResponse.isa = isa;
})(ListCandidatesForAutoMLJobResponse = exports.ListCandidatesForAutoMLJobResponse || (exports.ListCandidatesForAutoMLJobResponse = {}));
var ListCodeRepositoriesInput;
(function (ListCodeRepositoriesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCodeRepositoriesInput");
    }
    ListCodeRepositoriesInput.isa = isa;
})(ListCodeRepositoriesInput = exports.ListCodeRepositoriesInput || (exports.ListCodeRepositoriesInput = {}));
var ListCodeRepositoriesOutput;
(function (ListCodeRepositoriesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCodeRepositoriesOutput");
    }
    ListCodeRepositoriesOutput.isa = isa;
})(ListCodeRepositoriesOutput = exports.ListCodeRepositoriesOutput || (exports.ListCodeRepositoriesOutput = {}));
var ListCompilationJobsRequest;
(function (ListCompilationJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCompilationJobsRequest");
    }
    ListCompilationJobsRequest.isa = isa;
})(ListCompilationJobsRequest = exports.ListCompilationJobsRequest || (exports.ListCompilationJobsRequest = {}));
var ListCompilationJobsResponse;
(function (ListCompilationJobsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCompilationJobsResponse");
    }
    ListCompilationJobsResponse.isa = isa;
})(ListCompilationJobsResponse = exports.ListCompilationJobsResponse || (exports.ListCompilationJobsResponse = {}));
var ListCompilationJobsSortBy;
(function (ListCompilationJobsSortBy) {
    ListCompilationJobsSortBy["CREATION_TIME"] = "CreationTime";
    ListCompilationJobsSortBy["NAME"] = "Name";
    ListCompilationJobsSortBy["STATUS"] = "Status";
})(ListCompilationJobsSortBy = exports.ListCompilationJobsSortBy || (exports.ListCompilationJobsSortBy = {}));
var ListDomainsRequest;
(function (ListDomainsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDomainsRequest");
    }
    ListDomainsRequest.isa = isa;
})(ListDomainsRequest = exports.ListDomainsRequest || (exports.ListDomainsRequest = {}));
var ListDomainsResponse;
(function (ListDomainsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDomainsResponse");
    }
    ListDomainsResponse.isa = isa;
})(ListDomainsResponse = exports.ListDomainsResponse || (exports.ListDomainsResponse = {}));
var ListEndpointConfigsInput;
(function (ListEndpointConfigsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListEndpointConfigsInput");
    }
    ListEndpointConfigsInput.isa = isa;
})(ListEndpointConfigsInput = exports.ListEndpointConfigsInput || (exports.ListEndpointConfigsInput = {}));
var ListEndpointConfigsOutput;
(function (ListEndpointConfigsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListEndpointConfigsOutput");
    }
    ListEndpointConfigsOutput.isa = isa;
})(ListEndpointConfigsOutput = exports.ListEndpointConfigsOutput || (exports.ListEndpointConfigsOutput = {}));
var ListEndpointsInput;
(function (ListEndpointsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListEndpointsInput");
    }
    ListEndpointsInput.isa = isa;
})(ListEndpointsInput = exports.ListEndpointsInput || (exports.ListEndpointsInput = {}));
var ListEndpointsOutput;
(function (ListEndpointsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListEndpointsOutput");
    }
    ListEndpointsOutput.isa = isa;
})(ListEndpointsOutput = exports.ListEndpointsOutput || (exports.ListEndpointsOutput = {}));
var ListExperimentsRequest;
(function (ListExperimentsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListExperimentsRequest");
    }
    ListExperimentsRequest.isa = isa;
})(ListExperimentsRequest = exports.ListExperimentsRequest || (exports.ListExperimentsRequest = {}));
var ListExperimentsResponse;
(function (ListExperimentsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListExperimentsResponse");
    }
    ListExperimentsResponse.isa = isa;
})(ListExperimentsResponse = exports.ListExperimentsResponse || (exports.ListExperimentsResponse = {}));
var ListFlowDefinitionsRequest;
(function (ListFlowDefinitionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListFlowDefinitionsRequest");
    }
    ListFlowDefinitionsRequest.isa = isa;
})(ListFlowDefinitionsRequest = exports.ListFlowDefinitionsRequest || (exports.ListFlowDefinitionsRequest = {}));
var ListFlowDefinitionsResponse;
(function (ListFlowDefinitionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListFlowDefinitionsResponse");
    }
    ListFlowDefinitionsResponse.isa = isa;
})(ListFlowDefinitionsResponse = exports.ListFlowDefinitionsResponse || (exports.ListFlowDefinitionsResponse = {}));
var ListHumanTaskUisRequest;
(function (ListHumanTaskUisRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListHumanTaskUisRequest");
    }
    ListHumanTaskUisRequest.isa = isa;
})(ListHumanTaskUisRequest = exports.ListHumanTaskUisRequest || (exports.ListHumanTaskUisRequest = {}));
var ListHumanTaskUisResponse;
(function (ListHumanTaskUisResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListHumanTaskUisResponse");
    }
    ListHumanTaskUisResponse.isa = isa;
})(ListHumanTaskUisResponse = exports.ListHumanTaskUisResponse || (exports.ListHumanTaskUisResponse = {}));
var ListHyperParameterTuningJobsRequest;
(function (ListHyperParameterTuningJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListHyperParameterTuningJobsRequest");
    }
    ListHyperParameterTuningJobsRequest.isa = isa;
})(ListHyperParameterTuningJobsRequest = exports.ListHyperParameterTuningJobsRequest || (exports.ListHyperParameterTuningJobsRequest = {}));
var ListHyperParameterTuningJobsResponse;
(function (ListHyperParameterTuningJobsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListHyperParameterTuningJobsResponse");
    }
    ListHyperParameterTuningJobsResponse.isa = isa;
})(ListHyperParameterTuningJobsResponse = exports.ListHyperParameterTuningJobsResponse || (exports.ListHyperParameterTuningJobsResponse = {}));
var ListLabelingJobsForWorkteamRequest;
(function (ListLabelingJobsForWorkteamRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLabelingJobsForWorkteamRequest");
    }
    ListLabelingJobsForWorkteamRequest.isa = isa;
})(ListLabelingJobsForWorkteamRequest = exports.ListLabelingJobsForWorkteamRequest || (exports.ListLabelingJobsForWorkteamRequest = {}));
var ListLabelingJobsForWorkteamResponse;
(function (ListLabelingJobsForWorkteamResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLabelingJobsForWorkteamResponse");
    }
    ListLabelingJobsForWorkteamResponse.isa = isa;
})(ListLabelingJobsForWorkteamResponse = exports.ListLabelingJobsForWorkteamResponse || (exports.ListLabelingJobsForWorkteamResponse = {}));
var ListLabelingJobsForWorkteamSortByOptions;
(function (ListLabelingJobsForWorkteamSortByOptions) {
    ListLabelingJobsForWorkteamSortByOptions["CREATION_TIME"] = "CreationTime";
})(ListLabelingJobsForWorkteamSortByOptions = exports.ListLabelingJobsForWorkteamSortByOptions || (exports.ListLabelingJobsForWorkteamSortByOptions = {}));
var ListLabelingJobsRequest;
(function (ListLabelingJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLabelingJobsRequest");
    }
    ListLabelingJobsRequest.isa = isa;
})(ListLabelingJobsRequest = exports.ListLabelingJobsRequest || (exports.ListLabelingJobsRequest = {}));
var ListLabelingJobsResponse;
(function (ListLabelingJobsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLabelingJobsResponse");
    }
    ListLabelingJobsResponse.isa = isa;
})(ListLabelingJobsResponse = exports.ListLabelingJobsResponse || (exports.ListLabelingJobsResponse = {}));
var ListModelPackagesInput;
(function (ListModelPackagesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListModelPackagesInput");
    }
    ListModelPackagesInput.isa = isa;
})(ListModelPackagesInput = exports.ListModelPackagesInput || (exports.ListModelPackagesInput = {}));
var ListModelPackagesOutput;
(function (ListModelPackagesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListModelPackagesOutput");
    }
    ListModelPackagesOutput.isa = isa;
})(ListModelPackagesOutput = exports.ListModelPackagesOutput || (exports.ListModelPackagesOutput = {}));
var ListModelsInput;
(function (ListModelsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListModelsInput");
    }
    ListModelsInput.isa = isa;
})(ListModelsInput = exports.ListModelsInput || (exports.ListModelsInput = {}));
var ListModelsOutput;
(function (ListModelsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListModelsOutput");
    }
    ListModelsOutput.isa = isa;
})(ListModelsOutput = exports.ListModelsOutput || (exports.ListModelsOutput = {}));
var ListMonitoringExecutionsRequest;
(function (ListMonitoringExecutionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMonitoringExecutionsRequest");
    }
    ListMonitoringExecutionsRequest.isa = isa;
})(ListMonitoringExecutionsRequest = exports.ListMonitoringExecutionsRequest || (exports.ListMonitoringExecutionsRequest = {}));
var ListMonitoringExecutionsResponse;
(function (ListMonitoringExecutionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMonitoringExecutionsResponse");
    }
    ListMonitoringExecutionsResponse.isa = isa;
})(ListMonitoringExecutionsResponse = exports.ListMonitoringExecutionsResponse || (exports.ListMonitoringExecutionsResponse = {}));
var ListMonitoringSchedulesRequest;
(function (ListMonitoringSchedulesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMonitoringSchedulesRequest");
    }
    ListMonitoringSchedulesRequest.isa = isa;
})(ListMonitoringSchedulesRequest = exports.ListMonitoringSchedulesRequest || (exports.ListMonitoringSchedulesRequest = {}));
var ListMonitoringSchedulesResponse;
(function (ListMonitoringSchedulesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMonitoringSchedulesResponse");
    }
    ListMonitoringSchedulesResponse.isa = isa;
})(ListMonitoringSchedulesResponse = exports.ListMonitoringSchedulesResponse || (exports.ListMonitoringSchedulesResponse = {}));
var ListNotebookInstanceLifecycleConfigsInput;
(function (ListNotebookInstanceLifecycleConfigsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListNotebookInstanceLifecycleConfigsInput");
    }
    ListNotebookInstanceLifecycleConfigsInput.isa = isa;
})(ListNotebookInstanceLifecycleConfigsInput = exports.ListNotebookInstanceLifecycleConfigsInput || (exports.ListNotebookInstanceLifecycleConfigsInput = {}));
var ListNotebookInstanceLifecycleConfigsOutput;
(function (ListNotebookInstanceLifecycleConfigsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListNotebookInstanceLifecycleConfigsOutput");
    }
    ListNotebookInstanceLifecycleConfigsOutput.isa = isa;
})(ListNotebookInstanceLifecycleConfigsOutput = exports.ListNotebookInstanceLifecycleConfigsOutput || (exports.ListNotebookInstanceLifecycleConfigsOutput = {}));
var ListNotebookInstancesInput;
(function (ListNotebookInstancesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListNotebookInstancesInput");
    }
    ListNotebookInstancesInput.isa = isa;
})(ListNotebookInstancesInput = exports.ListNotebookInstancesInput || (exports.ListNotebookInstancesInput = {}));
var ListNotebookInstancesOutput;
(function (ListNotebookInstancesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListNotebookInstancesOutput");
    }
    ListNotebookInstancesOutput.isa = isa;
})(ListNotebookInstancesOutput = exports.ListNotebookInstancesOutput || (exports.ListNotebookInstancesOutput = {}));
var ListProcessingJobsRequest;
(function (ListProcessingJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListProcessingJobsRequest");
    }
    ListProcessingJobsRequest.isa = isa;
})(ListProcessingJobsRequest = exports.ListProcessingJobsRequest || (exports.ListProcessingJobsRequest = {}));
var ListProcessingJobsResponse;
(function (ListProcessingJobsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListProcessingJobsResponse");
    }
    ListProcessingJobsResponse.isa = isa;
})(ListProcessingJobsResponse = exports.ListProcessingJobsResponse || (exports.ListProcessingJobsResponse = {}));
var ListSubscribedWorkteamsRequest;
(function (ListSubscribedWorkteamsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSubscribedWorkteamsRequest");
    }
    ListSubscribedWorkteamsRequest.isa = isa;
})(ListSubscribedWorkteamsRequest = exports.ListSubscribedWorkteamsRequest || (exports.ListSubscribedWorkteamsRequest = {}));
var ListSubscribedWorkteamsResponse;
(function (ListSubscribedWorkteamsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSubscribedWorkteamsResponse");
    }
    ListSubscribedWorkteamsResponse.isa = isa;
})(ListSubscribedWorkteamsResponse = exports.ListSubscribedWorkteamsResponse || (exports.ListSubscribedWorkteamsResponse = {}));
var ListTagsInput;
(function (ListTagsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsInput");
    }
    ListTagsInput.isa = isa;
})(ListTagsInput = exports.ListTagsInput || (exports.ListTagsInput = {}));
var ListTagsOutput;
(function (ListTagsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsOutput");
    }
    ListTagsOutput.isa = isa;
})(ListTagsOutput = exports.ListTagsOutput || (exports.ListTagsOutput = {}));
var ListTrainingJobsForHyperParameterTuningJobRequest;
(function (ListTrainingJobsForHyperParameterTuningJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTrainingJobsForHyperParameterTuningJobRequest");
    }
    ListTrainingJobsForHyperParameterTuningJobRequest.isa = isa;
})(ListTrainingJobsForHyperParameterTuningJobRequest = exports.ListTrainingJobsForHyperParameterTuningJobRequest || (exports.ListTrainingJobsForHyperParameterTuningJobRequest = {}));
var ListTrainingJobsForHyperParameterTuningJobResponse;
(function (ListTrainingJobsForHyperParameterTuningJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTrainingJobsForHyperParameterTuningJobResponse");
    }
    ListTrainingJobsForHyperParameterTuningJobResponse.isa = isa;
})(ListTrainingJobsForHyperParameterTuningJobResponse = exports.ListTrainingJobsForHyperParameterTuningJobResponse || (exports.ListTrainingJobsForHyperParameterTuningJobResponse = {}));
var ListTrainingJobsRequest;
(function (ListTrainingJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTrainingJobsRequest");
    }
    ListTrainingJobsRequest.isa = isa;
})(ListTrainingJobsRequest = exports.ListTrainingJobsRequest || (exports.ListTrainingJobsRequest = {}));
var ListTrainingJobsResponse;
(function (ListTrainingJobsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTrainingJobsResponse");
    }
    ListTrainingJobsResponse.isa = isa;
})(ListTrainingJobsResponse = exports.ListTrainingJobsResponse || (exports.ListTrainingJobsResponse = {}));
var ListTransformJobsRequest;
(function (ListTransformJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTransformJobsRequest");
    }
    ListTransformJobsRequest.isa = isa;
})(ListTransformJobsRequest = exports.ListTransformJobsRequest || (exports.ListTransformJobsRequest = {}));
var ListTransformJobsResponse;
(function (ListTransformJobsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTransformJobsResponse");
    }
    ListTransformJobsResponse.isa = isa;
})(ListTransformJobsResponse = exports.ListTransformJobsResponse || (exports.ListTransformJobsResponse = {}));
var ListTrialComponentsRequest;
(function (ListTrialComponentsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTrialComponentsRequest");
    }
    ListTrialComponentsRequest.isa = isa;
})(ListTrialComponentsRequest = exports.ListTrialComponentsRequest || (exports.ListTrialComponentsRequest = {}));
var ListTrialComponentsResponse;
(function (ListTrialComponentsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTrialComponentsResponse");
    }
    ListTrialComponentsResponse.isa = isa;
})(ListTrialComponentsResponse = exports.ListTrialComponentsResponse || (exports.ListTrialComponentsResponse = {}));
var ListTrialsRequest;
(function (ListTrialsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTrialsRequest");
    }
    ListTrialsRequest.isa = isa;
})(ListTrialsRequest = exports.ListTrialsRequest || (exports.ListTrialsRequest = {}));
var ListTrialsResponse;
(function (ListTrialsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTrialsResponse");
    }
    ListTrialsResponse.isa = isa;
})(ListTrialsResponse = exports.ListTrialsResponse || (exports.ListTrialsResponse = {}));
var ListUserProfilesRequest;
(function (ListUserProfilesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUserProfilesRequest");
    }
    ListUserProfilesRequest.isa = isa;
})(ListUserProfilesRequest = exports.ListUserProfilesRequest || (exports.ListUserProfilesRequest = {}));
var ListUserProfilesResponse;
(function (ListUserProfilesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUserProfilesResponse");
    }
    ListUserProfilesResponse.isa = isa;
})(ListUserProfilesResponse = exports.ListUserProfilesResponse || (exports.ListUserProfilesResponse = {}));
var ListWorkteamsRequest;
(function (ListWorkteamsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListWorkteamsRequest");
    }
    ListWorkteamsRequest.isa = isa;
})(ListWorkteamsRequest = exports.ListWorkteamsRequest || (exports.ListWorkteamsRequest = {}));
var ListWorkteamsResponse;
(function (ListWorkteamsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListWorkteamsResponse");
    }
    ListWorkteamsResponse.isa = isa;
})(ListWorkteamsResponse = exports.ListWorkteamsResponse || (exports.ListWorkteamsResponse = {}));
var ListWorkteamsSortByOptions;
(function (ListWorkteamsSortByOptions) {
    ListWorkteamsSortByOptions["CreateDate"] = "CreateDate";
    ListWorkteamsSortByOptions["Name"] = "Name";
})(ListWorkteamsSortByOptions = exports.ListWorkteamsSortByOptions || (exports.ListWorkteamsSortByOptions = {}));
var MemberDefinition;
(function (MemberDefinition) {
    function isa(o) {
        return smithy_client_1.isa(o, "MemberDefinition");
    }
    MemberDefinition.isa = isa;
})(MemberDefinition = exports.MemberDefinition || (exports.MemberDefinition = {}));
var MetricData;
(function (MetricData) {
    function isa(o) {
        return smithy_client_1.isa(o, "MetricData");
    }
    MetricData.isa = isa;
})(MetricData = exports.MetricData || (exports.MetricData = {}));
var MetricDefinition;
(function (MetricDefinition) {
    function isa(o) {
        return smithy_client_1.isa(o, "MetricDefinition");
    }
    MetricDefinition.isa = isa;
})(MetricDefinition = exports.MetricDefinition || (exports.MetricDefinition = {}));
var ModelArtifacts;
(function (ModelArtifacts) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModelArtifacts");
    }
    ModelArtifacts.isa = isa;
})(ModelArtifacts = exports.ModelArtifacts || (exports.ModelArtifacts = {}));
var ModelPackageContainerDefinition;
(function (ModelPackageContainerDefinition) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModelPackageContainerDefinition");
    }
    ModelPackageContainerDefinition.isa = isa;
})(ModelPackageContainerDefinition = exports.ModelPackageContainerDefinition || (exports.ModelPackageContainerDefinition = {}));
var ModelPackageSortBy;
(function (ModelPackageSortBy) {
    ModelPackageSortBy["CREATION_TIME"] = "CreationTime";
    ModelPackageSortBy["NAME"] = "Name";
})(ModelPackageSortBy = exports.ModelPackageSortBy || (exports.ModelPackageSortBy = {}));
var ModelPackageStatus;
(function (ModelPackageStatus) {
    ModelPackageStatus["COMPLETED"] = "Completed";
    ModelPackageStatus["DELETING"] = "Deleting";
    ModelPackageStatus["FAILED"] = "Failed";
    ModelPackageStatus["IN_PROGRESS"] = "InProgress";
    ModelPackageStatus["PENDING"] = "Pending";
})(ModelPackageStatus = exports.ModelPackageStatus || (exports.ModelPackageStatus = {}));
var ModelPackageStatusDetails;
(function (ModelPackageStatusDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModelPackageStatusDetails");
    }
    ModelPackageStatusDetails.isa = isa;
})(ModelPackageStatusDetails = exports.ModelPackageStatusDetails || (exports.ModelPackageStatusDetails = {}));
var ModelPackageStatusItem;
(function (ModelPackageStatusItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModelPackageStatusItem");
    }
    ModelPackageStatusItem.isa = isa;
})(ModelPackageStatusItem = exports.ModelPackageStatusItem || (exports.ModelPackageStatusItem = {}));
var ModelPackageSummary;
(function (ModelPackageSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModelPackageSummary");
    }
    ModelPackageSummary.isa = isa;
})(ModelPackageSummary = exports.ModelPackageSummary || (exports.ModelPackageSummary = {}));
var ModelPackageValidationProfile;
(function (ModelPackageValidationProfile) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModelPackageValidationProfile");
    }
    ModelPackageValidationProfile.isa = isa;
})(ModelPackageValidationProfile = exports.ModelPackageValidationProfile || (exports.ModelPackageValidationProfile = {}));
var ModelPackageValidationSpecification;
(function (ModelPackageValidationSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModelPackageValidationSpecification");
    }
    ModelPackageValidationSpecification.isa = isa;
})(ModelPackageValidationSpecification = exports.ModelPackageValidationSpecification || (exports.ModelPackageValidationSpecification = {}));
var ModelSortKey;
(function (ModelSortKey) {
    ModelSortKey["CreationTime"] = "CreationTime";
    ModelSortKey["Name"] = "Name";
})(ModelSortKey = exports.ModelSortKey || (exports.ModelSortKey = {}));
var ModelSummary;
(function (ModelSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModelSummary");
    }
    ModelSummary.isa = isa;
})(ModelSummary = exports.ModelSummary || (exports.ModelSummary = {}));
var MonitoringAppSpecification;
(function (MonitoringAppSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "MonitoringAppSpecification");
    }
    MonitoringAppSpecification.isa = isa;
})(MonitoringAppSpecification = exports.MonitoringAppSpecification || (exports.MonitoringAppSpecification = {}));
var MonitoringBaselineConfig;
(function (MonitoringBaselineConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "MonitoringBaselineConfig");
    }
    MonitoringBaselineConfig.isa = isa;
})(MonitoringBaselineConfig = exports.MonitoringBaselineConfig || (exports.MonitoringBaselineConfig = {}));
var MonitoringClusterConfig;
(function (MonitoringClusterConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "MonitoringClusterConfig");
    }
    MonitoringClusterConfig.isa = isa;
})(MonitoringClusterConfig = exports.MonitoringClusterConfig || (exports.MonitoringClusterConfig = {}));
var MonitoringConstraintsResource;
(function (MonitoringConstraintsResource) {
    function isa(o) {
        return smithy_client_1.isa(o, "MonitoringConstraintsResource");
    }
    MonitoringConstraintsResource.isa = isa;
})(MonitoringConstraintsResource = exports.MonitoringConstraintsResource || (exports.MonitoringConstraintsResource = {}));
var MonitoringExecutionSortKey;
(function (MonitoringExecutionSortKey) {
    MonitoringExecutionSortKey["CREATION_TIME"] = "CreationTime";
    MonitoringExecutionSortKey["SCHEDULED_TIME"] = "ScheduledTime";
    MonitoringExecutionSortKey["STATUS"] = "Status";
})(MonitoringExecutionSortKey = exports.MonitoringExecutionSortKey || (exports.MonitoringExecutionSortKey = {}));
var MonitoringExecutionSummary;
(function (MonitoringExecutionSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "MonitoringExecutionSummary");
    }
    MonitoringExecutionSummary.isa = isa;
})(MonitoringExecutionSummary = exports.MonitoringExecutionSummary || (exports.MonitoringExecutionSummary = {}));
var MonitoringInput;
(function (MonitoringInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "MonitoringInput");
    }
    MonitoringInput.isa = isa;
})(MonitoringInput = exports.MonitoringInput || (exports.MonitoringInput = {}));
var MonitoringJobDefinition;
(function (MonitoringJobDefinition) {
    function isa(o) {
        return smithy_client_1.isa(o, "MonitoringJobDefinition");
    }
    MonitoringJobDefinition.isa = isa;
})(MonitoringJobDefinition = exports.MonitoringJobDefinition || (exports.MonitoringJobDefinition = {}));
var MonitoringOutput;
(function (MonitoringOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "MonitoringOutput");
    }
    MonitoringOutput.isa = isa;
})(MonitoringOutput = exports.MonitoringOutput || (exports.MonitoringOutput = {}));
var MonitoringOutputConfig;
(function (MonitoringOutputConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "MonitoringOutputConfig");
    }
    MonitoringOutputConfig.isa = isa;
})(MonitoringOutputConfig = exports.MonitoringOutputConfig || (exports.MonitoringOutputConfig = {}));
var MonitoringResources;
(function (MonitoringResources) {
    function isa(o) {
        return smithy_client_1.isa(o, "MonitoringResources");
    }
    MonitoringResources.isa = isa;
})(MonitoringResources = exports.MonitoringResources || (exports.MonitoringResources = {}));
var MonitoringS3Output;
(function (MonitoringS3Output) {
    function isa(o) {
        return smithy_client_1.isa(o, "MonitoringS3Output");
    }
    MonitoringS3Output.isa = isa;
})(MonitoringS3Output = exports.MonitoringS3Output || (exports.MonitoringS3Output = {}));
var MonitoringScheduleConfig;
(function (MonitoringScheduleConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "MonitoringScheduleConfig");
    }
    MonitoringScheduleConfig.isa = isa;
})(MonitoringScheduleConfig = exports.MonitoringScheduleConfig || (exports.MonitoringScheduleConfig = {}));
var MonitoringScheduleSortKey;
(function (MonitoringScheduleSortKey) {
    MonitoringScheduleSortKey["CREATION_TIME"] = "CreationTime";
    MonitoringScheduleSortKey["NAME"] = "Name";
    MonitoringScheduleSortKey["STATUS"] = "Status";
})(MonitoringScheduleSortKey = exports.MonitoringScheduleSortKey || (exports.MonitoringScheduleSortKey = {}));
var MonitoringScheduleSummary;
(function (MonitoringScheduleSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "MonitoringScheduleSummary");
    }
    MonitoringScheduleSummary.isa = isa;
})(MonitoringScheduleSummary = exports.MonitoringScheduleSummary || (exports.MonitoringScheduleSummary = {}));
var MonitoringStatisticsResource;
(function (MonitoringStatisticsResource) {
    function isa(o) {
        return smithy_client_1.isa(o, "MonitoringStatisticsResource");
    }
    MonitoringStatisticsResource.isa = isa;
})(MonitoringStatisticsResource = exports.MonitoringStatisticsResource || (exports.MonitoringStatisticsResource = {}));
var MonitoringStoppingCondition;
(function (MonitoringStoppingCondition) {
    function isa(o) {
        return smithy_client_1.isa(o, "MonitoringStoppingCondition");
    }
    MonitoringStoppingCondition.isa = isa;
})(MonitoringStoppingCondition = exports.MonitoringStoppingCondition || (exports.MonitoringStoppingCondition = {}));
var NestedFilters;
(function (NestedFilters) {
    function isa(o) {
        return smithy_client_1.isa(o, "NestedFilters");
    }
    NestedFilters.isa = isa;
})(NestedFilters = exports.NestedFilters || (exports.NestedFilters = {}));
var NetworkConfig;
(function (NetworkConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "NetworkConfig");
    }
    NetworkConfig.isa = isa;
})(NetworkConfig = exports.NetworkConfig || (exports.NetworkConfig = {}));
var NotebookInstanceAcceleratorType;
(function (NotebookInstanceAcceleratorType) {
    NotebookInstanceAcceleratorType["ML_EIA1_LARGE"] = "ml.eia1.large";
    NotebookInstanceAcceleratorType["ML_EIA1_MEDIUM"] = "ml.eia1.medium";
    NotebookInstanceAcceleratorType["ML_EIA1_XLARGE"] = "ml.eia1.xlarge";
    NotebookInstanceAcceleratorType["ML_EIA2_LARGE"] = "ml.eia2.large";
    NotebookInstanceAcceleratorType["ML_EIA2_MEDIUM"] = "ml.eia2.medium";
    NotebookInstanceAcceleratorType["ML_EIA2_XLARGE"] = "ml.eia2.xlarge";
})(NotebookInstanceAcceleratorType = exports.NotebookInstanceAcceleratorType || (exports.NotebookInstanceAcceleratorType = {}));
var NotebookInstanceLifecycleConfigSortKey;
(function (NotebookInstanceLifecycleConfigSortKey) {
    NotebookInstanceLifecycleConfigSortKey["CREATION_TIME"] = "CreationTime";
    NotebookInstanceLifecycleConfigSortKey["LAST_MODIFIED_TIME"] = "LastModifiedTime";
    NotebookInstanceLifecycleConfigSortKey["NAME"] = "Name";
})(NotebookInstanceLifecycleConfigSortKey = exports.NotebookInstanceLifecycleConfigSortKey || (exports.NotebookInstanceLifecycleConfigSortKey = {}));
var NotebookInstanceLifecycleConfigSortOrder;
(function (NotebookInstanceLifecycleConfigSortOrder) {
    NotebookInstanceLifecycleConfigSortOrder["ASCENDING"] = "Ascending";
    NotebookInstanceLifecycleConfigSortOrder["DESCENDING"] = "Descending";
})(NotebookInstanceLifecycleConfigSortOrder = exports.NotebookInstanceLifecycleConfigSortOrder || (exports.NotebookInstanceLifecycleConfigSortOrder = {}));
var NotebookInstanceLifecycleConfigSummary;
(function (NotebookInstanceLifecycleConfigSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotebookInstanceLifecycleConfigSummary");
    }
    NotebookInstanceLifecycleConfigSummary.isa = isa;
})(NotebookInstanceLifecycleConfigSummary = exports.NotebookInstanceLifecycleConfigSummary || (exports.NotebookInstanceLifecycleConfigSummary = {}));
var NotebookInstanceLifecycleHook;
(function (NotebookInstanceLifecycleHook) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotebookInstanceLifecycleHook");
    }
    NotebookInstanceLifecycleHook.isa = isa;
})(NotebookInstanceLifecycleHook = exports.NotebookInstanceLifecycleHook || (exports.NotebookInstanceLifecycleHook = {}));
var NotebookInstanceSortKey;
(function (NotebookInstanceSortKey) {
    NotebookInstanceSortKey["CREATION_TIME"] = "CreationTime";
    NotebookInstanceSortKey["NAME"] = "Name";
    NotebookInstanceSortKey["STATUS"] = "Status";
})(NotebookInstanceSortKey = exports.NotebookInstanceSortKey || (exports.NotebookInstanceSortKey = {}));
var NotebookInstanceSortOrder;
(function (NotebookInstanceSortOrder) {
    NotebookInstanceSortOrder["ASCENDING"] = "Ascending";
    NotebookInstanceSortOrder["DESCENDING"] = "Descending";
})(NotebookInstanceSortOrder = exports.NotebookInstanceSortOrder || (exports.NotebookInstanceSortOrder = {}));
var NotebookInstanceStatus;
(function (NotebookInstanceStatus) {
    NotebookInstanceStatus["Deleting"] = "Deleting";
    NotebookInstanceStatus["Failed"] = "Failed";
    NotebookInstanceStatus["InService"] = "InService";
    NotebookInstanceStatus["Pending"] = "Pending";
    NotebookInstanceStatus["Stopped"] = "Stopped";
    NotebookInstanceStatus["Stopping"] = "Stopping";
    NotebookInstanceStatus["Updating"] = "Updating";
})(NotebookInstanceStatus = exports.NotebookInstanceStatus || (exports.NotebookInstanceStatus = {}));
var NotebookInstanceSummary;
(function (NotebookInstanceSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotebookInstanceSummary");
    }
    NotebookInstanceSummary.isa = isa;
})(NotebookInstanceSummary = exports.NotebookInstanceSummary || (exports.NotebookInstanceSummary = {}));
var NotebookOutputOption;
(function (NotebookOutputOption) {
    NotebookOutputOption["Allowed"] = "Allowed";
    NotebookOutputOption["Disabled"] = "Disabled";
})(NotebookOutputOption = exports.NotebookOutputOption || (exports.NotebookOutputOption = {}));
var NotificationConfiguration;
(function (NotificationConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotificationConfiguration");
    }
    NotificationConfiguration.isa = isa;
})(NotificationConfiguration = exports.NotificationConfiguration || (exports.NotificationConfiguration = {}));
var ObjectiveStatus;
(function (ObjectiveStatus) {
    ObjectiveStatus["Failed"] = "Failed";
    ObjectiveStatus["Pending"] = "Pending";
    ObjectiveStatus["Succeeded"] = "Succeeded";
})(ObjectiveStatus = exports.ObjectiveStatus || (exports.ObjectiveStatus = {}));
var ObjectiveStatusCounters;
(function (ObjectiveStatusCounters) {
    function isa(o) {
        return smithy_client_1.isa(o, "ObjectiveStatusCounters");
    }
    ObjectiveStatusCounters.isa = isa;
})(ObjectiveStatusCounters = exports.ObjectiveStatusCounters || (exports.ObjectiveStatusCounters = {}));
var Operator;
(function (Operator) {
    Operator["CONTAINS"] = "Contains";
    Operator["EQUALS"] = "Equals";
    Operator["EXISTS"] = "Exists";
    Operator["GREATER_THAN"] = "GreaterThan";
    Operator["GREATER_THAN_OR_EQUAL_TO"] = "GreaterThanOrEqualTo";
    Operator["LESS_THAN"] = "LessThan";
    Operator["LESS_THAN_OR_EQUAL_TO"] = "LessThanOrEqualTo";
    Operator["NOT_EQUALS"] = "NotEquals";
    Operator["NOT_EXISTS"] = "NotExists";
})(Operator = exports.Operator || (exports.Operator = {}));
var OrderKey;
(function (OrderKey) {
    OrderKey["Ascending"] = "Ascending";
    OrderKey["Descending"] = "Descending";
})(OrderKey = exports.OrderKey || (exports.OrderKey = {}));
var OutputConfig;
(function (OutputConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "OutputConfig");
    }
    OutputConfig.isa = isa;
})(OutputConfig = exports.OutputConfig || (exports.OutputConfig = {}));
var OutputDataConfig;
(function (OutputDataConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "OutputDataConfig");
    }
    OutputDataConfig.isa = isa;
})(OutputDataConfig = exports.OutputDataConfig || (exports.OutputDataConfig = {}));
var ParameterRange;
(function (ParameterRange) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParameterRange");
    }
    ParameterRange.isa = isa;
})(ParameterRange = exports.ParameterRange || (exports.ParameterRange = {}));
var ParameterRanges;
(function (ParameterRanges) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParameterRanges");
    }
    ParameterRanges.isa = isa;
})(ParameterRanges = exports.ParameterRanges || (exports.ParameterRanges = {}));
var ParameterType;
(function (ParameterType) {
    ParameterType["CATEGORICAL"] = "Categorical";
    ParameterType["CONTINUOUS"] = "Continuous";
    ParameterType["FREE_TEXT"] = "FreeText";
    ParameterType["INTEGER"] = "Integer";
})(ParameterType = exports.ParameterType || (exports.ParameterType = {}));
var Parent;
(function (Parent) {
    function isa(o) {
        return smithy_client_1.isa(o, "Parent");
    }
    Parent.isa = isa;
})(Parent = exports.Parent || (exports.Parent = {}));
var ParentHyperParameterTuningJob;
(function (ParentHyperParameterTuningJob) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParentHyperParameterTuningJob");
    }
    ParentHyperParameterTuningJob.isa = isa;
})(ParentHyperParameterTuningJob = exports.ParentHyperParameterTuningJob || (exports.ParentHyperParameterTuningJob = {}));
var ProblemType;
(function (ProblemType) {
    ProblemType["BINARY_CLASSIFICATION"] = "BinaryClassification";
    ProblemType["MULTICLASS_CLASSIFICATION"] = "MulticlassClassification";
    ProblemType["REGRESSION"] = "Regression";
})(ProblemType = exports.ProblemType || (exports.ProblemType = {}));
var ProcessingClusterConfig;
(function (ProcessingClusterConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProcessingClusterConfig");
    }
    ProcessingClusterConfig.isa = isa;
})(ProcessingClusterConfig = exports.ProcessingClusterConfig || (exports.ProcessingClusterConfig = {}));
var ProcessingInput;
(function (ProcessingInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProcessingInput");
    }
    ProcessingInput.isa = isa;
})(ProcessingInput = exports.ProcessingInput || (exports.ProcessingInput = {}));
var ProcessingInstanceType;
(function (ProcessingInstanceType) {
    ProcessingInstanceType["ML_C4_2XLARGE"] = "ml.c4.2xlarge";
    ProcessingInstanceType["ML_C4_4XLARGE"] = "ml.c4.4xlarge";
    ProcessingInstanceType["ML_C4_8XLARGE"] = "ml.c4.8xlarge";
    ProcessingInstanceType["ML_C4_XLARGE"] = "ml.c4.xlarge";
    ProcessingInstanceType["ML_C5_18XLARGE"] = "ml.c5.18xlarge";
    ProcessingInstanceType["ML_C5_2XLARGE"] = "ml.c5.2xlarge";
    ProcessingInstanceType["ML_C5_4XLARGE"] = "ml.c5.4xlarge";
    ProcessingInstanceType["ML_C5_9XLARGE"] = "ml.c5.9xlarge";
    ProcessingInstanceType["ML_C5_XLARGE"] = "ml.c5.xlarge";
    ProcessingInstanceType["ML_M4_10XLARGE"] = "ml.m4.10xlarge";
    ProcessingInstanceType["ML_M4_16XLARGE"] = "ml.m4.16xlarge";
    ProcessingInstanceType["ML_M4_2XLARGE"] = "ml.m4.2xlarge";
    ProcessingInstanceType["ML_M4_4XLARGE"] = "ml.m4.4xlarge";
    ProcessingInstanceType["ML_M4_XLARGE"] = "ml.m4.xlarge";
    ProcessingInstanceType["ML_M5_12XLARGE"] = "ml.m5.12xlarge";
    ProcessingInstanceType["ML_M5_24XLARGE"] = "ml.m5.24xlarge";
    ProcessingInstanceType["ML_M5_2XLARGE"] = "ml.m5.2xlarge";
    ProcessingInstanceType["ML_M5_4XLARGE"] = "ml.m5.4xlarge";
    ProcessingInstanceType["ML_M5_LARGE"] = "ml.m5.large";
    ProcessingInstanceType["ML_M5_XLARGE"] = "ml.m5.xlarge";
    ProcessingInstanceType["ML_P2_16XLARGE"] = "ml.p2.16xlarge";
    ProcessingInstanceType["ML_P2_8XLARGE"] = "ml.p2.8xlarge";
    ProcessingInstanceType["ML_P2_XLARGE"] = "ml.p2.xlarge";
    ProcessingInstanceType["ML_P3_16XLARGE"] = "ml.p3.16xlarge";
    ProcessingInstanceType["ML_P3_2XLARGE"] = "ml.p3.2xlarge";
    ProcessingInstanceType["ML_P3_8XLARGE"] = "ml.p3.8xlarge";
    ProcessingInstanceType["ML_R5_12XLARGE"] = "ml.r5.12xlarge";
    ProcessingInstanceType["ML_R5_16XLARGE"] = "ml.r5.16xlarge";
    ProcessingInstanceType["ML_R5_24XLARGE"] = "ml.r5.24xlarge";
    ProcessingInstanceType["ML_R5_2XLARGE"] = "ml.r5.2xlarge";
    ProcessingInstanceType["ML_R5_4XLARGE"] = "ml.r5.4xlarge";
    ProcessingInstanceType["ML_R5_8XLARGE"] = "ml.r5.8xlarge";
    ProcessingInstanceType["ML_R5_LARGE"] = "ml.r5.large";
    ProcessingInstanceType["ML_R5_XLARGE"] = "ml.r5.xlarge";
    ProcessingInstanceType["ML_T3_2XLARGE"] = "ml.t3.2xlarge";
    ProcessingInstanceType["ML_T3_LARGE"] = "ml.t3.large";
    ProcessingInstanceType["ML_T3_MEDIUM"] = "ml.t3.medium";
    ProcessingInstanceType["ML_T3_XLARGE"] = "ml.t3.xlarge";
})(ProcessingInstanceType = exports.ProcessingInstanceType || (exports.ProcessingInstanceType = {}));
var ProcessingJobStatus;
(function (ProcessingJobStatus) {
    ProcessingJobStatus["COMPLETED"] = "Completed";
    ProcessingJobStatus["FAILED"] = "Failed";
    ProcessingJobStatus["IN_PROGRESS"] = "InProgress";
    ProcessingJobStatus["STOPPED"] = "Stopped";
    ProcessingJobStatus["STOPPING"] = "Stopping";
})(ProcessingJobStatus = exports.ProcessingJobStatus || (exports.ProcessingJobStatus = {}));
var ProcessingJobSummary;
(function (ProcessingJobSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProcessingJobSummary");
    }
    ProcessingJobSummary.isa = isa;
})(ProcessingJobSummary = exports.ProcessingJobSummary || (exports.ProcessingJobSummary = {}));
var ProcessingOutput;
(function (ProcessingOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProcessingOutput");
    }
    ProcessingOutput.isa = isa;
})(ProcessingOutput = exports.ProcessingOutput || (exports.ProcessingOutput = {}));
var ProcessingOutputConfig;
(function (ProcessingOutputConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProcessingOutputConfig");
    }
    ProcessingOutputConfig.isa = isa;
})(ProcessingOutputConfig = exports.ProcessingOutputConfig || (exports.ProcessingOutputConfig = {}));
var ProcessingResources;
(function (ProcessingResources) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProcessingResources");
    }
    ProcessingResources.isa = isa;
})(ProcessingResources = exports.ProcessingResources || (exports.ProcessingResources = {}));
var ProcessingS3CompressionType;
(function (ProcessingS3CompressionType) {
    ProcessingS3CompressionType["GZIP"] = "Gzip";
    ProcessingS3CompressionType["NONE"] = "None";
})(ProcessingS3CompressionType = exports.ProcessingS3CompressionType || (exports.ProcessingS3CompressionType = {}));
var ProcessingS3DataDistributionType;
(function (ProcessingS3DataDistributionType) {
    ProcessingS3DataDistributionType["FULLYREPLICATED"] = "FullyReplicated";
    ProcessingS3DataDistributionType["SHARDEDBYS3KEY"] = "ShardedByS3Key";
})(ProcessingS3DataDistributionType = exports.ProcessingS3DataDistributionType || (exports.ProcessingS3DataDistributionType = {}));
var ProcessingS3DataType;
(function (ProcessingS3DataType) {
    ProcessingS3DataType["MANIFEST_FILE"] = "ManifestFile";
    ProcessingS3DataType["S3_PREFIX"] = "S3Prefix";
})(ProcessingS3DataType = exports.ProcessingS3DataType || (exports.ProcessingS3DataType = {}));
var ProcessingS3Input;
(function (ProcessingS3Input) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProcessingS3Input");
    }
    ProcessingS3Input.isa = isa;
})(ProcessingS3Input = exports.ProcessingS3Input || (exports.ProcessingS3Input = {}));
var ProcessingS3InputMode;
(function (ProcessingS3InputMode) {
    ProcessingS3InputMode["FILE"] = "File";
    ProcessingS3InputMode["PIPE"] = "Pipe";
})(ProcessingS3InputMode = exports.ProcessingS3InputMode || (exports.ProcessingS3InputMode = {}));
var ProcessingS3Output;
(function (ProcessingS3Output) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProcessingS3Output");
    }
    ProcessingS3Output.isa = isa;
})(ProcessingS3Output = exports.ProcessingS3Output || (exports.ProcessingS3Output = {}));
var ProcessingS3UploadMode;
(function (ProcessingS3UploadMode) {
    ProcessingS3UploadMode["CONTINUOUS"] = "Continuous";
    ProcessingS3UploadMode["END_OF_JOB"] = "EndOfJob";
})(ProcessingS3UploadMode = exports.ProcessingS3UploadMode || (exports.ProcessingS3UploadMode = {}));
var ProcessingStoppingCondition;
(function (ProcessingStoppingCondition) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProcessingStoppingCondition");
    }
    ProcessingStoppingCondition.isa = isa;
})(ProcessingStoppingCondition = exports.ProcessingStoppingCondition || (exports.ProcessingStoppingCondition = {}));
var ProductionVariant;
(function (ProductionVariant) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProductionVariant");
    }
    ProductionVariant.isa = isa;
})(ProductionVariant = exports.ProductionVariant || (exports.ProductionVariant = {}));
var ProductionVariantAcceleratorType;
(function (ProductionVariantAcceleratorType) {
    ProductionVariantAcceleratorType["ML_EIA1_LARGE"] = "ml.eia1.large";
    ProductionVariantAcceleratorType["ML_EIA1_MEDIUM"] = "ml.eia1.medium";
    ProductionVariantAcceleratorType["ML_EIA1_XLARGE"] = "ml.eia1.xlarge";
    ProductionVariantAcceleratorType["ML_EIA2_LARGE"] = "ml.eia2.large";
    ProductionVariantAcceleratorType["ML_EIA2_MEDIUM"] = "ml.eia2.medium";
    ProductionVariantAcceleratorType["ML_EIA2_XLARGE"] = "ml.eia2.xlarge";
})(ProductionVariantAcceleratorType = exports.ProductionVariantAcceleratorType || (exports.ProductionVariantAcceleratorType = {}));
var ProductionVariantInstanceType;
(function (ProductionVariantInstanceType) {
    ProductionVariantInstanceType["ML_C4_2XLARGE"] = "ml.c4.2xlarge";
    ProductionVariantInstanceType["ML_C4_4XLARGE"] = "ml.c4.4xlarge";
    ProductionVariantInstanceType["ML_C4_8XLARGE"] = "ml.c4.8xlarge";
    ProductionVariantInstanceType["ML_C4_LARGE"] = "ml.c4.large";
    ProductionVariantInstanceType["ML_C4_XLARGE"] = "ml.c4.xlarge";
    ProductionVariantInstanceType["ML_C5D_18XLARGE"] = "ml.c5d.18xlarge";
    ProductionVariantInstanceType["ML_C5D_2XLARGE"] = "ml.c5d.2xlarge";
    ProductionVariantInstanceType["ML_C5D_4XLARGE"] = "ml.c5d.4xlarge";
    ProductionVariantInstanceType["ML_C5D_9XLARGE"] = "ml.c5d.9xlarge";
    ProductionVariantInstanceType["ML_C5D_LARGE"] = "ml.c5d.large";
    ProductionVariantInstanceType["ML_C5D_XLARGE"] = "ml.c5d.xlarge";
    ProductionVariantInstanceType["ML_C5_18XLARGE"] = "ml.c5.18xlarge";
    ProductionVariantInstanceType["ML_C5_2XLARGE"] = "ml.c5.2xlarge";
    ProductionVariantInstanceType["ML_C5_4XLARGE"] = "ml.c5.4xlarge";
    ProductionVariantInstanceType["ML_C5_9XLARGE"] = "ml.c5.9xlarge";
    ProductionVariantInstanceType["ML_C5_LARGE"] = "ml.c5.large";
    ProductionVariantInstanceType["ML_C5_XLARGE"] = "ml.c5.xlarge";
    ProductionVariantInstanceType["ML_G4DN_12XLARGE"] = "ml.g4dn.12xlarge";
    ProductionVariantInstanceType["ML_G4DN_16XLARGE"] = "ml.g4dn.16xlarge";
    ProductionVariantInstanceType["ML_G4DN_2XLARGE"] = "ml.g4dn.2xlarge";
    ProductionVariantInstanceType["ML_G4DN_4XLARGE"] = "ml.g4dn.4xlarge";
    ProductionVariantInstanceType["ML_G4DN_8XLARGE"] = "ml.g4dn.8xlarge";
    ProductionVariantInstanceType["ML_G4DN_XLARGE"] = "ml.g4dn.xlarge";
    ProductionVariantInstanceType["ML_INF1_24XLARGE"] = "ml.inf1.24xlarge";
    ProductionVariantInstanceType["ML_INF1_2XLARGE"] = "ml.inf1.2xlarge";
    ProductionVariantInstanceType["ML_INF1_6XLARGE"] = "ml.inf1.6xlarge";
    ProductionVariantInstanceType["ML_INF1_XLARGE"] = "ml.inf1.xlarge";
    ProductionVariantInstanceType["ML_M4_10XLARGE"] = "ml.m4.10xlarge";
    ProductionVariantInstanceType["ML_M4_16XLARGE"] = "ml.m4.16xlarge";
    ProductionVariantInstanceType["ML_M4_2XLARGE"] = "ml.m4.2xlarge";
    ProductionVariantInstanceType["ML_M4_4XLARGE"] = "ml.m4.4xlarge";
    ProductionVariantInstanceType["ML_M4_XLARGE"] = "ml.m4.xlarge";
    ProductionVariantInstanceType["ML_M5D_12XLARGE"] = "ml.m5d.12xlarge";
    ProductionVariantInstanceType["ML_M5D_24XLARGE"] = "ml.m5d.24xlarge";
    ProductionVariantInstanceType["ML_M5D_2XLARGE"] = "ml.m5d.2xlarge";
    ProductionVariantInstanceType["ML_M5D_4XLARGE"] = "ml.m5d.4xlarge";
    ProductionVariantInstanceType["ML_M5D_LARGE"] = "ml.m5d.large";
    ProductionVariantInstanceType["ML_M5D_XLARGE"] = "ml.m5d.xlarge";
    ProductionVariantInstanceType["ML_M5_12XLARGE"] = "ml.m5.12xlarge";
    ProductionVariantInstanceType["ML_M5_24XLARGE"] = "ml.m5.24xlarge";
    ProductionVariantInstanceType["ML_M5_2XLARGE"] = "ml.m5.2xlarge";
    ProductionVariantInstanceType["ML_M5_4XLARGE"] = "ml.m5.4xlarge";
    ProductionVariantInstanceType["ML_M5_LARGE"] = "ml.m5.large";
    ProductionVariantInstanceType["ML_M5_XLARGE"] = "ml.m5.xlarge";
    ProductionVariantInstanceType["ML_P2_16XLARGE"] = "ml.p2.16xlarge";
    ProductionVariantInstanceType["ML_P2_8XLARGE"] = "ml.p2.8xlarge";
    ProductionVariantInstanceType["ML_P2_XLARGE"] = "ml.p2.xlarge";
    ProductionVariantInstanceType["ML_P3_16XLARGE"] = "ml.p3.16xlarge";
    ProductionVariantInstanceType["ML_P3_2XLARGE"] = "ml.p3.2xlarge";
    ProductionVariantInstanceType["ML_P3_8XLARGE"] = "ml.p3.8xlarge";
    ProductionVariantInstanceType["ML_R5D_12XLARGE"] = "ml.r5d.12xlarge";
    ProductionVariantInstanceType["ML_R5D_24XLARGE"] = "ml.r5d.24xlarge";
    ProductionVariantInstanceType["ML_R5D_2XLARGE"] = "ml.r5d.2xlarge";
    ProductionVariantInstanceType["ML_R5D_4XLARGE"] = "ml.r5d.4xlarge";
    ProductionVariantInstanceType["ML_R5D_LARGE"] = "ml.r5d.large";
    ProductionVariantInstanceType["ML_R5D_XLARGE"] = "ml.r5d.xlarge";
    ProductionVariantInstanceType["ML_R5_12XLARGE"] = "ml.r5.12xlarge";
    ProductionVariantInstanceType["ML_R5_24XLARGE"] = "ml.r5.24xlarge";
    ProductionVariantInstanceType["ML_R5_2XLARGE"] = "ml.r5.2xlarge";
    ProductionVariantInstanceType["ML_R5_4XLARGE"] = "ml.r5.4xlarge";
    ProductionVariantInstanceType["ML_R5_LARGE"] = "ml.r5.large";
    ProductionVariantInstanceType["ML_R5_XLARGE"] = "ml.r5.xlarge";
    ProductionVariantInstanceType["ML_T2_2XLARGE"] = "ml.t2.2xlarge";
    ProductionVariantInstanceType["ML_T2_LARGE"] = "ml.t2.large";
    ProductionVariantInstanceType["ML_T2_MEDIUM"] = "ml.t2.medium";
    ProductionVariantInstanceType["ML_T2_XLARGE"] = "ml.t2.xlarge";
})(ProductionVariantInstanceType = exports.ProductionVariantInstanceType || (exports.ProductionVariantInstanceType = {}));
var ProductionVariantSummary;
(function (ProductionVariantSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProductionVariantSummary");
    }
    ProductionVariantSummary.isa = isa;
})(ProductionVariantSummary = exports.ProductionVariantSummary || (exports.ProductionVariantSummary = {}));
var PropertyNameQuery;
(function (PropertyNameQuery) {
    function isa(o) {
        return smithy_client_1.isa(o, "PropertyNameQuery");
    }
    PropertyNameQuery.isa = isa;
})(PropertyNameQuery = exports.PropertyNameQuery || (exports.PropertyNameQuery = {}));
var PropertyNameSuggestion;
(function (PropertyNameSuggestion) {
    function isa(o) {
        return smithy_client_1.isa(o, "PropertyNameSuggestion");
    }
    PropertyNameSuggestion.isa = isa;
})(PropertyNameSuggestion = exports.PropertyNameSuggestion || (exports.PropertyNameSuggestion = {}));
var PublicWorkforceTaskPrice;
(function (PublicWorkforceTaskPrice) {
    function isa(o) {
        return smithy_client_1.isa(o, "PublicWorkforceTaskPrice");
    }
    PublicWorkforceTaskPrice.isa = isa;
})(PublicWorkforceTaskPrice = exports.PublicWorkforceTaskPrice || (exports.PublicWorkforceTaskPrice = {}));
var RecordWrapper;
(function (RecordWrapper) {
    RecordWrapper["NONE"] = "None";
    RecordWrapper["RECORDIO"] = "RecordIO";
})(RecordWrapper = exports.RecordWrapper || (exports.RecordWrapper = {}));
var RenderUiTemplateRequest;
(function (RenderUiTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RenderUiTemplateRequest");
    }
    RenderUiTemplateRequest.isa = isa;
})(RenderUiTemplateRequest = exports.RenderUiTemplateRequest || (exports.RenderUiTemplateRequest = {}));
var RenderUiTemplateResponse;
(function (RenderUiTemplateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RenderUiTemplateResponse");
    }
    RenderUiTemplateResponse.isa = isa;
})(RenderUiTemplateResponse = exports.RenderUiTemplateResponse || (exports.RenderUiTemplateResponse = {}));
var RenderableTask;
(function (RenderableTask) {
    function isa(o) {
        return smithy_client_1.isa(o, "RenderableTask");
    }
    RenderableTask.isa = isa;
})(RenderableTask = exports.RenderableTask || (exports.RenderableTask = {}));
var RenderingError;
(function (RenderingError) {
    function isa(o) {
        return smithy_client_1.isa(o, "RenderingError");
    }
    RenderingError.isa = isa;
})(RenderingError = exports.RenderingError || (exports.RenderingError = {}));
var ResolvedAttributes;
(function (ResolvedAttributes) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResolvedAttributes");
    }
    ResolvedAttributes.isa = isa;
})(ResolvedAttributes = exports.ResolvedAttributes || (exports.ResolvedAttributes = {}));
var ResourceConfig;
(function (ResourceConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceConfig");
    }
    ResourceConfig.isa = isa;
})(ResourceConfig = exports.ResourceConfig || (exports.ResourceConfig = {}));
var ResourceInUse;
(function (ResourceInUse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceInUse");
    }
    ResourceInUse.isa = isa;
})(ResourceInUse = exports.ResourceInUse || (exports.ResourceInUse = {}));
var ResourceLimitExceeded;
(function (ResourceLimitExceeded) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceLimitExceeded");
    }
    ResourceLimitExceeded.isa = isa;
})(ResourceLimitExceeded = exports.ResourceLimitExceeded || (exports.ResourceLimitExceeded = {}));
var ResourceLimits;
(function (ResourceLimits) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceLimits");
    }
    ResourceLimits.isa = isa;
})(ResourceLimits = exports.ResourceLimits || (exports.ResourceLimits = {}));
var ResourceNotFound;
(function (ResourceNotFound) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFound");
    }
    ResourceNotFound.isa = isa;
})(ResourceNotFound = exports.ResourceNotFound || (exports.ResourceNotFound = {}));
var ResourceSpec;
(function (ResourceSpec) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceSpec");
    }
    ResourceSpec.isa = isa;
})(ResourceSpec = exports.ResourceSpec || (exports.ResourceSpec = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["EXPERIMENT"] = "Experiment";
    ResourceType["EXPERIMENT_TRIAL"] = "ExperimentTrial";
    ResourceType["EXPERIMENT_TRIAL_COMPONENT"] = "ExperimentTrialComponent";
    ResourceType["TRAINING_JOB"] = "TrainingJob";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var RetentionPolicy;
(function (RetentionPolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "RetentionPolicy");
    }
    RetentionPolicy.isa = isa;
})(RetentionPolicy = exports.RetentionPolicy || (exports.RetentionPolicy = {}));
var RetentionType;
(function (RetentionType) {
    RetentionType["Delete"] = "Delete";
    RetentionType["Retain"] = "Retain";
})(RetentionType = exports.RetentionType || (exports.RetentionType = {}));
var RootAccess;
(function (RootAccess) {
    RootAccess["DISABLED"] = "Disabled";
    RootAccess["ENABLED"] = "Enabled";
})(RootAccess = exports.RootAccess || (exports.RootAccess = {}));
var RuleEvaluationStatus;
(function (RuleEvaluationStatus) {
    RuleEvaluationStatus["ERROR"] = "Error";
    RuleEvaluationStatus["IN_PROGRESS"] = "InProgress";
    RuleEvaluationStatus["ISSUES_FOUND"] = "IssuesFound";
    RuleEvaluationStatus["NO_ISSUES_FOUND"] = "NoIssuesFound";
    RuleEvaluationStatus["STOPPED"] = "Stopped";
    RuleEvaluationStatus["STOPPING"] = "Stopping";
})(RuleEvaluationStatus = exports.RuleEvaluationStatus || (exports.RuleEvaluationStatus = {}));
var S3DataDistribution;
(function (S3DataDistribution) {
    S3DataDistribution["FULLY_REPLICATED"] = "FullyReplicated";
    S3DataDistribution["SHARDED_BY_S3_KEY"] = "ShardedByS3Key";
})(S3DataDistribution = exports.S3DataDistribution || (exports.S3DataDistribution = {}));
var S3DataSource;
(function (S3DataSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3DataSource");
    }
    S3DataSource.isa = isa;
})(S3DataSource = exports.S3DataSource || (exports.S3DataSource = {}));
var S3DataType;
(function (S3DataType) {
    S3DataType["AUGMENTED_MANIFEST_FILE"] = "AugmentedManifestFile";
    S3DataType["MANIFEST_FILE"] = "ManifestFile";
    S3DataType["S3_PREFIX"] = "S3Prefix";
})(S3DataType = exports.S3DataType || (exports.S3DataType = {}));
var ScheduleConfig;
(function (ScheduleConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScheduleConfig");
    }
    ScheduleConfig.isa = isa;
})(ScheduleConfig = exports.ScheduleConfig || (exports.ScheduleConfig = {}));
var ScheduleStatus;
(function (ScheduleStatus) {
    ScheduleStatus["FAILED"] = "Failed";
    ScheduleStatus["PENDING"] = "Pending";
    ScheduleStatus["SCHEDULED"] = "Scheduled";
    ScheduleStatus["STOPPED"] = "Stopped";
})(ScheduleStatus = exports.ScheduleStatus || (exports.ScheduleStatus = {}));
var SearchExpression;
(function (SearchExpression) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchExpression");
    }
    SearchExpression.isa = isa;
})(SearchExpression = exports.SearchExpression || (exports.SearchExpression = {}));
var SearchRecord;
(function (SearchRecord) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchRecord");
    }
    SearchRecord.isa = isa;
})(SearchRecord = exports.SearchRecord || (exports.SearchRecord = {}));
var SearchRequest;
(function (SearchRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchRequest");
    }
    SearchRequest.isa = isa;
})(SearchRequest = exports.SearchRequest || (exports.SearchRequest = {}));
var SearchResponse;
(function (SearchResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchResponse");
    }
    SearchResponse.isa = isa;
})(SearchResponse = exports.SearchResponse || (exports.SearchResponse = {}));
var SearchSortOrder;
(function (SearchSortOrder) {
    SearchSortOrder["ASCENDING"] = "Ascending";
    SearchSortOrder["DESCENDING"] = "Descending";
})(SearchSortOrder = exports.SearchSortOrder || (exports.SearchSortOrder = {}));
var SecondaryStatus;
(function (SecondaryStatus) {
    SecondaryStatus["COMPLETED"] = "Completed";
    SecondaryStatus["DOWNLOADING"] = "Downloading";
    SecondaryStatus["DOWNLOADING_TRAINING_IMAGE"] = "DownloadingTrainingImage";
    SecondaryStatus["FAILED"] = "Failed";
    SecondaryStatus["INTERRUPTED"] = "Interrupted";
    SecondaryStatus["LAUNCHING_ML_INSTANCES"] = "LaunchingMLInstances";
    SecondaryStatus["MAX_RUNTIME_EXCEEDED"] = "MaxRuntimeExceeded";
    SecondaryStatus["MAX_WAIT_TIME_EXCEEDED"] = "MaxWaitTimeExceeded";
    SecondaryStatus["PREPARING_TRAINING_STACK"] = "PreparingTrainingStack";
    SecondaryStatus["STARTING"] = "Starting";
    SecondaryStatus["STOPPED"] = "Stopped";
    SecondaryStatus["STOPPING"] = "Stopping";
    SecondaryStatus["TRAINING"] = "Training";
    SecondaryStatus["UPLOADING"] = "Uploading";
})(SecondaryStatus = exports.SecondaryStatus || (exports.SecondaryStatus = {}));
var SecondaryStatusTransition;
(function (SecondaryStatusTransition) {
    function isa(o) {
        return smithy_client_1.isa(o, "SecondaryStatusTransition");
    }
    SecondaryStatusTransition.isa = isa;
})(SecondaryStatusTransition = exports.SecondaryStatusTransition || (exports.SecondaryStatusTransition = {}));
var SharingSettings;
(function (SharingSettings) {
    function isa(o) {
        return smithy_client_1.isa(o, "SharingSettings");
    }
    SharingSettings.isa = isa;
})(SharingSettings = exports.SharingSettings || (exports.SharingSettings = {}));
var ShuffleConfig;
(function (ShuffleConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "ShuffleConfig");
    }
    ShuffleConfig.isa = isa;
})(ShuffleConfig = exports.ShuffleConfig || (exports.ShuffleConfig = {}));
var SortBy;
(function (SortBy) {
    SortBy["CREATION_TIME"] = "CreationTime";
    SortBy["NAME"] = "Name";
    SortBy["STATUS"] = "Status";
})(SortBy = exports.SortBy || (exports.SortBy = {}));
var SortExperimentsBy;
(function (SortExperimentsBy) {
    SortExperimentsBy["CREATION_TIME"] = "CreationTime";
    SortExperimentsBy["NAME"] = "Name";
})(SortExperimentsBy = exports.SortExperimentsBy || (exports.SortExperimentsBy = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["ASCENDING"] = "Ascending";
    SortOrder["DESCENDING"] = "Descending";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var SortTrialComponentsBy;
(function (SortTrialComponentsBy) {
    SortTrialComponentsBy["CREATION_TIME"] = "CreationTime";
    SortTrialComponentsBy["NAME"] = "Name";
})(SortTrialComponentsBy = exports.SortTrialComponentsBy || (exports.SortTrialComponentsBy = {}));
var SortTrialsBy;
(function (SortTrialsBy) {
    SortTrialsBy["CREATION_TIME"] = "CreationTime";
    SortTrialsBy["NAME"] = "Name";
})(SortTrialsBy = exports.SortTrialsBy || (exports.SortTrialsBy = {}));
var SourceAlgorithm;
(function (SourceAlgorithm) {
    function isa(o) {
        return smithy_client_1.isa(o, "SourceAlgorithm");
    }
    SourceAlgorithm.isa = isa;
})(SourceAlgorithm = exports.SourceAlgorithm || (exports.SourceAlgorithm = {}));
var SourceAlgorithmSpecification;
(function (SourceAlgorithmSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "SourceAlgorithmSpecification");
    }
    SourceAlgorithmSpecification.isa = isa;
})(SourceAlgorithmSpecification = exports.SourceAlgorithmSpecification || (exports.SourceAlgorithmSpecification = {}));
var SourceIpConfig;
(function (SourceIpConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "SourceIpConfig");
    }
    SourceIpConfig.isa = isa;
})(SourceIpConfig = exports.SourceIpConfig || (exports.SourceIpConfig = {}));
var SplitType;
(function (SplitType) {
    SplitType["LINE"] = "Line";
    SplitType["NONE"] = "None";
    SplitType["RECORDIO"] = "RecordIO";
    SplitType["TFRECORD"] = "TFRecord";
})(SplitType = exports.SplitType || (exports.SplitType = {}));
var StartMonitoringScheduleRequest;
(function (StartMonitoringScheduleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartMonitoringScheduleRequest");
    }
    StartMonitoringScheduleRequest.isa = isa;
})(StartMonitoringScheduleRequest = exports.StartMonitoringScheduleRequest || (exports.StartMonitoringScheduleRequest = {}));
var StartNotebookInstanceInput;
(function (StartNotebookInstanceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartNotebookInstanceInput");
    }
    StartNotebookInstanceInput.isa = isa;
})(StartNotebookInstanceInput = exports.StartNotebookInstanceInput || (exports.StartNotebookInstanceInput = {}));
var StopAutoMLJobRequest;
(function (StopAutoMLJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopAutoMLJobRequest");
    }
    StopAutoMLJobRequest.isa = isa;
})(StopAutoMLJobRequest = exports.StopAutoMLJobRequest || (exports.StopAutoMLJobRequest = {}));
var StopCompilationJobRequest;
(function (StopCompilationJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopCompilationJobRequest");
    }
    StopCompilationJobRequest.isa = isa;
})(StopCompilationJobRequest = exports.StopCompilationJobRequest || (exports.StopCompilationJobRequest = {}));
var StopHyperParameterTuningJobRequest;
(function (StopHyperParameterTuningJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopHyperParameterTuningJobRequest");
    }
    StopHyperParameterTuningJobRequest.isa = isa;
})(StopHyperParameterTuningJobRequest = exports.StopHyperParameterTuningJobRequest || (exports.StopHyperParameterTuningJobRequest = {}));
var StopLabelingJobRequest;
(function (StopLabelingJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopLabelingJobRequest");
    }
    StopLabelingJobRequest.isa = isa;
})(StopLabelingJobRequest = exports.StopLabelingJobRequest || (exports.StopLabelingJobRequest = {}));
var StopMonitoringScheduleRequest;
(function (StopMonitoringScheduleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopMonitoringScheduleRequest");
    }
    StopMonitoringScheduleRequest.isa = isa;
})(StopMonitoringScheduleRequest = exports.StopMonitoringScheduleRequest || (exports.StopMonitoringScheduleRequest = {}));
var StopNotebookInstanceInput;
(function (StopNotebookInstanceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopNotebookInstanceInput");
    }
    StopNotebookInstanceInput.isa = isa;
})(StopNotebookInstanceInput = exports.StopNotebookInstanceInput || (exports.StopNotebookInstanceInput = {}));
var StopProcessingJobRequest;
(function (StopProcessingJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopProcessingJobRequest");
    }
    StopProcessingJobRequest.isa = isa;
})(StopProcessingJobRequest = exports.StopProcessingJobRequest || (exports.StopProcessingJobRequest = {}));
var StopTrainingJobRequest;
(function (StopTrainingJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopTrainingJobRequest");
    }
    StopTrainingJobRequest.isa = isa;
})(StopTrainingJobRequest = exports.StopTrainingJobRequest || (exports.StopTrainingJobRequest = {}));
var StopTransformJobRequest;
(function (StopTransformJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopTransformJobRequest");
    }
    StopTransformJobRequest.isa = isa;
})(StopTransformJobRequest = exports.StopTransformJobRequest || (exports.StopTransformJobRequest = {}));
var StoppingCondition;
(function (StoppingCondition) {
    function isa(o) {
        return smithy_client_1.isa(o, "StoppingCondition");
    }
    StoppingCondition.isa = isa;
})(StoppingCondition = exports.StoppingCondition || (exports.StoppingCondition = {}));
var SubscribedWorkteam;
(function (SubscribedWorkteam) {
    function isa(o) {
        return smithy_client_1.isa(o, "SubscribedWorkteam");
    }
    SubscribedWorkteam.isa = isa;
})(SubscribedWorkteam = exports.SubscribedWorkteam || (exports.SubscribedWorkteam = {}));
var SuggestionQuery;
(function (SuggestionQuery) {
    function isa(o) {
        return smithy_client_1.isa(o, "SuggestionQuery");
    }
    SuggestionQuery.isa = isa;
})(SuggestionQuery = exports.SuggestionQuery || (exports.SuggestionQuery = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TargetDevice;
(function (TargetDevice) {
    TargetDevice["AISAGE"] = "aisage";
    TargetDevice["DEEPLENS"] = "deeplens";
    TargetDevice["JETSON_NANO"] = "jetson_nano";
    TargetDevice["JETSON_TX1"] = "jetson_tx1";
    TargetDevice["JETSON_TX2"] = "jetson_tx2";
    TargetDevice["LAMBDA"] = "lambda";
    TargetDevice["ML_C4"] = "ml_c4";
    TargetDevice["ML_C5"] = "ml_c5";
    TargetDevice["ML_INF1"] = "ml_inf1";
    TargetDevice["ML_M4"] = "ml_m4";
    TargetDevice["ML_M5"] = "ml_m5";
    TargetDevice["ML_P2"] = "ml_p2";
    TargetDevice["ML_P3"] = "ml_p3";
    TargetDevice["QCS603"] = "qcs603";
    TargetDevice["QCS605"] = "qcs605";
    TargetDevice["RASP3B"] = "rasp3b";
    TargetDevice["RK3288"] = "rk3288";
    TargetDevice["RK3399"] = "rk3399";
    TargetDevice["SBE_C"] = "sbe_c";
})(TargetDevice = exports.TargetDevice || (exports.TargetDevice = {}));
var TensorBoardAppSettings;
(function (TensorBoardAppSettings) {
    function isa(o) {
        return smithy_client_1.isa(o, "TensorBoardAppSettings");
    }
    TensorBoardAppSettings.isa = isa;
})(TensorBoardAppSettings = exports.TensorBoardAppSettings || (exports.TensorBoardAppSettings = {}));
var TensorBoardOutputConfig;
(function (TensorBoardOutputConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "TensorBoardOutputConfig");
    }
    TensorBoardOutputConfig.isa = isa;
})(TensorBoardOutputConfig = exports.TensorBoardOutputConfig || (exports.TensorBoardOutputConfig = {}));
var TrainingInputMode;
(function (TrainingInputMode) {
    TrainingInputMode["FILE"] = "File";
    TrainingInputMode["PIPE"] = "Pipe";
})(TrainingInputMode = exports.TrainingInputMode || (exports.TrainingInputMode = {}));
var TrainingInstanceType;
(function (TrainingInstanceType) {
    TrainingInstanceType["ML_C4_2XLARGE"] = "ml.c4.2xlarge";
    TrainingInstanceType["ML_C4_4XLARGE"] = "ml.c4.4xlarge";
    TrainingInstanceType["ML_C4_8XLARGE"] = "ml.c4.8xlarge";
    TrainingInstanceType["ML_C4_XLARGE"] = "ml.c4.xlarge";
    TrainingInstanceType["ML_C5_18XLARGE"] = "ml.c5.18xlarge";
    TrainingInstanceType["ML_C5_2XLARGE"] = "ml.c5.2xlarge";
    TrainingInstanceType["ML_C5_4XLARGE"] = "ml.c5.4xlarge";
    TrainingInstanceType["ML_C5_9XLARGE"] = "ml.c5.9xlarge";
    TrainingInstanceType["ML_C5_XLARGE"] = "ml.c5.xlarge";
    TrainingInstanceType["ML_G4DN_12XLARGE"] = "ml.g4dn.12xlarge";
    TrainingInstanceType["ML_G4DN_16XLARGE"] = "ml.g4dn.16xlarge";
    TrainingInstanceType["ML_G4DN_2XLARGE"] = "ml.g4dn.2xlarge";
    TrainingInstanceType["ML_G4DN_4XLARGE"] = "ml.g4dn.4xlarge";
    TrainingInstanceType["ML_G4DN_8XLARGE"] = "ml.g4dn.8xlarge";
    TrainingInstanceType["ML_G4DN_XLARGE"] = "ml.g4dn.xlarge";
    TrainingInstanceType["ML_M4_10XLARGE"] = "ml.m4.10xlarge";
    TrainingInstanceType["ML_M4_16XLARGE"] = "ml.m4.16xlarge";
    TrainingInstanceType["ML_M4_2XLARGE"] = "ml.m4.2xlarge";
    TrainingInstanceType["ML_M4_4XLARGE"] = "ml.m4.4xlarge";
    TrainingInstanceType["ML_M4_XLARGE"] = "ml.m4.xlarge";
    TrainingInstanceType["ML_M5_12XLARGE"] = "ml.m5.12xlarge";
    TrainingInstanceType["ML_M5_24XLARGE"] = "ml.m5.24xlarge";
    TrainingInstanceType["ML_M5_2XLARGE"] = "ml.m5.2xlarge";
    TrainingInstanceType["ML_M5_4XLARGE"] = "ml.m5.4xlarge";
    TrainingInstanceType["ML_M5_LARGE"] = "ml.m5.large";
    TrainingInstanceType["ML_M5_XLARGE"] = "ml.m5.xlarge";
    TrainingInstanceType["ML_P2_16XLARGE"] = "ml.p2.16xlarge";
    TrainingInstanceType["ML_P2_8XLARGE"] = "ml.p2.8xlarge";
    TrainingInstanceType["ML_P2_XLARGE"] = "ml.p2.xlarge";
    TrainingInstanceType["ML_P3DN_24XLARGE"] = "ml.p3dn.24xlarge";
    TrainingInstanceType["ML_P3_16XLARGE"] = "ml.p3.16xlarge";
    TrainingInstanceType["ML_P3_2XLARGE"] = "ml.p3.2xlarge";
    TrainingInstanceType["ML_P3_8XLARGE"] = "ml.p3.8xlarge";
})(TrainingInstanceType = exports.TrainingInstanceType || (exports.TrainingInstanceType = {}));
var TrainingJob;
(function (TrainingJob) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrainingJob");
    }
    TrainingJob.isa = isa;
})(TrainingJob = exports.TrainingJob || (exports.TrainingJob = {}));
var TrainingJobDefinition;
(function (TrainingJobDefinition) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrainingJobDefinition");
    }
    TrainingJobDefinition.isa = isa;
})(TrainingJobDefinition = exports.TrainingJobDefinition || (exports.TrainingJobDefinition = {}));
var TrainingJobEarlyStoppingType;
(function (TrainingJobEarlyStoppingType) {
    TrainingJobEarlyStoppingType["AUTO"] = "Auto";
    TrainingJobEarlyStoppingType["OFF"] = "Off";
})(TrainingJobEarlyStoppingType = exports.TrainingJobEarlyStoppingType || (exports.TrainingJobEarlyStoppingType = {}));
var TrainingJobSortByOptions;
(function (TrainingJobSortByOptions) {
    TrainingJobSortByOptions["CreationTime"] = "CreationTime";
    TrainingJobSortByOptions["FinalObjectiveMetricValue"] = "FinalObjectiveMetricValue";
    TrainingJobSortByOptions["Name"] = "Name";
    TrainingJobSortByOptions["Status"] = "Status";
})(TrainingJobSortByOptions = exports.TrainingJobSortByOptions || (exports.TrainingJobSortByOptions = {}));
var TrainingJobStatus;
(function (TrainingJobStatus) {
    TrainingJobStatus["COMPLETED"] = "Completed";
    TrainingJobStatus["FAILED"] = "Failed";
    TrainingJobStatus["IN_PROGRESS"] = "InProgress";
    TrainingJobStatus["STOPPED"] = "Stopped";
    TrainingJobStatus["STOPPING"] = "Stopping";
})(TrainingJobStatus = exports.TrainingJobStatus || (exports.TrainingJobStatus = {}));
var TrainingJobStatusCounters;
(function (TrainingJobStatusCounters) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrainingJobStatusCounters");
    }
    TrainingJobStatusCounters.isa = isa;
})(TrainingJobStatusCounters = exports.TrainingJobStatusCounters || (exports.TrainingJobStatusCounters = {}));
var TrainingJobSummary;
(function (TrainingJobSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrainingJobSummary");
    }
    TrainingJobSummary.isa = isa;
})(TrainingJobSummary = exports.TrainingJobSummary || (exports.TrainingJobSummary = {}));
var TrainingSpecification;
(function (TrainingSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrainingSpecification");
    }
    TrainingSpecification.isa = isa;
})(TrainingSpecification = exports.TrainingSpecification || (exports.TrainingSpecification = {}));
var TransformDataSource;
(function (TransformDataSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransformDataSource");
    }
    TransformDataSource.isa = isa;
})(TransformDataSource = exports.TransformDataSource || (exports.TransformDataSource = {}));
var TransformInput;
(function (TransformInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransformInput");
    }
    TransformInput.isa = isa;
})(TransformInput = exports.TransformInput || (exports.TransformInput = {}));
var TransformInstanceType;
(function (TransformInstanceType) {
    TransformInstanceType["ML_C4_2XLARGE"] = "ml.c4.2xlarge";
    TransformInstanceType["ML_C4_4XLARGE"] = "ml.c4.4xlarge";
    TransformInstanceType["ML_C4_8XLARGE"] = "ml.c4.8xlarge";
    TransformInstanceType["ML_C4_XLARGE"] = "ml.c4.xlarge";
    TransformInstanceType["ML_C5_18XLARGE"] = "ml.c5.18xlarge";
    TransformInstanceType["ML_C5_2XLARGE"] = "ml.c5.2xlarge";
    TransformInstanceType["ML_C5_4XLARGE"] = "ml.c5.4xlarge";
    TransformInstanceType["ML_C5_9XLARGE"] = "ml.c5.9xlarge";
    TransformInstanceType["ML_C5_XLARGE"] = "ml.c5.xlarge";
    TransformInstanceType["ML_M4_10XLARGE"] = "ml.m4.10xlarge";
    TransformInstanceType["ML_M4_16XLARGE"] = "ml.m4.16xlarge";
    TransformInstanceType["ML_M4_2XLARGE"] = "ml.m4.2xlarge";
    TransformInstanceType["ML_M4_4XLARGE"] = "ml.m4.4xlarge";
    TransformInstanceType["ML_M4_XLARGE"] = "ml.m4.xlarge";
    TransformInstanceType["ML_M5_12XLARGE"] = "ml.m5.12xlarge";
    TransformInstanceType["ML_M5_24XLARGE"] = "ml.m5.24xlarge";
    TransformInstanceType["ML_M5_2XLARGE"] = "ml.m5.2xlarge";
    TransformInstanceType["ML_M5_4XLARGE"] = "ml.m5.4xlarge";
    TransformInstanceType["ML_M5_LARGE"] = "ml.m5.large";
    TransformInstanceType["ML_M5_XLARGE"] = "ml.m5.xlarge";
    TransformInstanceType["ML_P2_16XLARGE"] = "ml.p2.16xlarge";
    TransformInstanceType["ML_P2_8XLARGE"] = "ml.p2.8xlarge";
    TransformInstanceType["ML_P2_XLARGE"] = "ml.p2.xlarge";
    TransformInstanceType["ML_P3_16XLARGE"] = "ml.p3.16xlarge";
    TransformInstanceType["ML_P3_2XLARGE"] = "ml.p3.2xlarge";
    TransformInstanceType["ML_P3_8XLARGE"] = "ml.p3.8xlarge";
})(TransformInstanceType = exports.TransformInstanceType || (exports.TransformInstanceType = {}));
var TransformJobDefinition;
(function (TransformJobDefinition) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransformJobDefinition");
    }
    TransformJobDefinition.isa = isa;
})(TransformJobDefinition = exports.TransformJobDefinition || (exports.TransformJobDefinition = {}));
var TransformJobStatus;
(function (TransformJobStatus) {
    TransformJobStatus["COMPLETED"] = "Completed";
    TransformJobStatus["FAILED"] = "Failed";
    TransformJobStatus["IN_PROGRESS"] = "InProgress";
    TransformJobStatus["STOPPED"] = "Stopped";
    TransformJobStatus["STOPPING"] = "Stopping";
})(TransformJobStatus = exports.TransformJobStatus || (exports.TransformJobStatus = {}));
var TransformJobSummary;
(function (TransformJobSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransformJobSummary");
    }
    TransformJobSummary.isa = isa;
})(TransformJobSummary = exports.TransformJobSummary || (exports.TransformJobSummary = {}));
var TransformOutput;
(function (TransformOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransformOutput");
    }
    TransformOutput.isa = isa;
})(TransformOutput = exports.TransformOutput || (exports.TransformOutput = {}));
var TransformResources;
(function (TransformResources) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransformResources");
    }
    TransformResources.isa = isa;
})(TransformResources = exports.TransformResources || (exports.TransformResources = {}));
var TransformS3DataSource;
(function (TransformS3DataSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransformS3DataSource");
    }
    TransformS3DataSource.isa = isa;
})(TransformS3DataSource = exports.TransformS3DataSource || (exports.TransformS3DataSource = {}));
var Trial;
(function (Trial) {
    function isa(o) {
        return smithy_client_1.isa(o, "Trial");
    }
    Trial.isa = isa;
})(Trial = exports.Trial || (exports.Trial = {}));
var TrialComponent;
(function (TrialComponent) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrialComponent");
    }
    TrialComponent.isa = isa;
})(TrialComponent = exports.TrialComponent || (exports.TrialComponent = {}));
var TrialComponentArtifact;
(function (TrialComponentArtifact) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrialComponentArtifact");
    }
    TrialComponentArtifact.isa = isa;
})(TrialComponentArtifact = exports.TrialComponentArtifact || (exports.TrialComponentArtifact = {}));
var TrialComponentMetricSummary;
(function (TrialComponentMetricSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrialComponentMetricSummary");
    }
    TrialComponentMetricSummary.isa = isa;
})(TrialComponentMetricSummary = exports.TrialComponentMetricSummary || (exports.TrialComponentMetricSummary = {}));
var TrialComponentParameterValue;
(function (TrialComponentParameterValue) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrialComponentParameterValue");
    }
    TrialComponentParameterValue.isa = isa;
})(TrialComponentParameterValue = exports.TrialComponentParameterValue || (exports.TrialComponentParameterValue = {}));
var TrialComponentPrimaryStatus;
(function (TrialComponentPrimaryStatus) {
    TrialComponentPrimaryStatus["COMPLETED"] = "Completed";
    TrialComponentPrimaryStatus["FAILED"] = "Failed";
    TrialComponentPrimaryStatus["IN_PROGRESS"] = "InProgress";
})(TrialComponentPrimaryStatus = exports.TrialComponentPrimaryStatus || (exports.TrialComponentPrimaryStatus = {}));
var TrialComponentSimpleSummary;
(function (TrialComponentSimpleSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrialComponentSimpleSummary");
    }
    TrialComponentSimpleSummary.isa = isa;
})(TrialComponentSimpleSummary = exports.TrialComponentSimpleSummary || (exports.TrialComponentSimpleSummary = {}));
var TrialComponentSource;
(function (TrialComponentSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrialComponentSource");
    }
    TrialComponentSource.isa = isa;
})(TrialComponentSource = exports.TrialComponentSource || (exports.TrialComponentSource = {}));
var TrialComponentSourceDetail;
(function (TrialComponentSourceDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrialComponentSourceDetail");
    }
    TrialComponentSourceDetail.isa = isa;
})(TrialComponentSourceDetail = exports.TrialComponentSourceDetail || (exports.TrialComponentSourceDetail = {}));
var TrialComponentStatus;
(function (TrialComponentStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrialComponentStatus");
    }
    TrialComponentStatus.isa = isa;
})(TrialComponentStatus = exports.TrialComponentStatus || (exports.TrialComponentStatus = {}));
var TrialComponentSummary;
(function (TrialComponentSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrialComponentSummary");
    }
    TrialComponentSummary.isa = isa;
})(TrialComponentSummary = exports.TrialComponentSummary || (exports.TrialComponentSummary = {}));
var TrialSource;
(function (TrialSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrialSource");
    }
    TrialSource.isa = isa;
})(TrialSource = exports.TrialSource || (exports.TrialSource = {}));
var TrialSummary;
(function (TrialSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrialSummary");
    }
    TrialSummary.isa = isa;
})(TrialSummary = exports.TrialSummary || (exports.TrialSummary = {}));
var TuningJobCompletionCriteria;
(function (TuningJobCompletionCriteria) {
    function isa(o) {
        return smithy_client_1.isa(o, "TuningJobCompletionCriteria");
    }
    TuningJobCompletionCriteria.isa = isa;
})(TuningJobCompletionCriteria = exports.TuningJobCompletionCriteria || (exports.TuningJobCompletionCriteria = {}));
var USD;
(function (USD) {
    function isa(o) {
        return smithy_client_1.isa(o, "USD");
    }
    USD.isa = isa;
})(USD = exports.USD || (exports.USD = {}));
var UiConfig;
(function (UiConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "UiConfig");
    }
    UiConfig.isa = isa;
})(UiConfig = exports.UiConfig || (exports.UiConfig = {}));
var UiTemplate;
(function (UiTemplate) {
    function isa(o) {
        return smithy_client_1.isa(o, "UiTemplate");
    }
    UiTemplate.isa = isa;
})(UiTemplate = exports.UiTemplate || (exports.UiTemplate = {}));
var UiTemplateInfo;
(function (UiTemplateInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "UiTemplateInfo");
    }
    UiTemplateInfo.isa = isa;
})(UiTemplateInfo = exports.UiTemplateInfo || (exports.UiTemplateInfo = {}));
var UpdateCodeRepositoryInput;
(function (UpdateCodeRepositoryInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateCodeRepositoryInput");
    }
    UpdateCodeRepositoryInput.isa = isa;
})(UpdateCodeRepositoryInput = exports.UpdateCodeRepositoryInput || (exports.UpdateCodeRepositoryInput = {}));
var UpdateCodeRepositoryOutput;
(function (UpdateCodeRepositoryOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateCodeRepositoryOutput");
    }
    UpdateCodeRepositoryOutput.isa = isa;
})(UpdateCodeRepositoryOutput = exports.UpdateCodeRepositoryOutput || (exports.UpdateCodeRepositoryOutput = {}));
var UpdateDomainRequest;
(function (UpdateDomainRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDomainRequest");
    }
    UpdateDomainRequest.isa = isa;
})(UpdateDomainRequest = exports.UpdateDomainRequest || (exports.UpdateDomainRequest = {}));
var UpdateDomainResponse;
(function (UpdateDomainResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDomainResponse");
    }
    UpdateDomainResponse.isa = isa;
})(UpdateDomainResponse = exports.UpdateDomainResponse || (exports.UpdateDomainResponse = {}));
var UpdateEndpointInput;
(function (UpdateEndpointInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateEndpointInput");
    }
    UpdateEndpointInput.isa = isa;
})(UpdateEndpointInput = exports.UpdateEndpointInput || (exports.UpdateEndpointInput = {}));
var UpdateEndpointOutput;
(function (UpdateEndpointOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateEndpointOutput");
    }
    UpdateEndpointOutput.isa = isa;
})(UpdateEndpointOutput = exports.UpdateEndpointOutput || (exports.UpdateEndpointOutput = {}));
var UpdateEndpointWeightsAndCapacitiesInput;
(function (UpdateEndpointWeightsAndCapacitiesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateEndpointWeightsAndCapacitiesInput");
    }
    UpdateEndpointWeightsAndCapacitiesInput.isa = isa;
})(UpdateEndpointWeightsAndCapacitiesInput = exports.UpdateEndpointWeightsAndCapacitiesInput || (exports.UpdateEndpointWeightsAndCapacitiesInput = {}));
var UpdateEndpointWeightsAndCapacitiesOutput;
(function (UpdateEndpointWeightsAndCapacitiesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateEndpointWeightsAndCapacitiesOutput");
    }
    UpdateEndpointWeightsAndCapacitiesOutput.isa = isa;
})(UpdateEndpointWeightsAndCapacitiesOutput = exports.UpdateEndpointWeightsAndCapacitiesOutput || (exports.UpdateEndpointWeightsAndCapacitiesOutput = {}));
var UpdateExperimentRequest;
(function (UpdateExperimentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateExperimentRequest");
    }
    UpdateExperimentRequest.isa = isa;
})(UpdateExperimentRequest = exports.UpdateExperimentRequest || (exports.UpdateExperimentRequest = {}));
var UpdateExperimentResponse;
(function (UpdateExperimentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateExperimentResponse");
    }
    UpdateExperimentResponse.isa = isa;
})(UpdateExperimentResponse = exports.UpdateExperimentResponse || (exports.UpdateExperimentResponse = {}));
var UpdateMonitoringScheduleRequest;
(function (UpdateMonitoringScheduleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateMonitoringScheduleRequest");
    }
    UpdateMonitoringScheduleRequest.isa = isa;
})(UpdateMonitoringScheduleRequest = exports.UpdateMonitoringScheduleRequest || (exports.UpdateMonitoringScheduleRequest = {}));
var UpdateMonitoringScheduleResponse;
(function (UpdateMonitoringScheduleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateMonitoringScheduleResponse");
    }
    UpdateMonitoringScheduleResponse.isa = isa;
})(UpdateMonitoringScheduleResponse = exports.UpdateMonitoringScheduleResponse || (exports.UpdateMonitoringScheduleResponse = {}));
var UpdateNotebookInstanceInput;
(function (UpdateNotebookInstanceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateNotebookInstanceInput");
    }
    UpdateNotebookInstanceInput.isa = isa;
})(UpdateNotebookInstanceInput = exports.UpdateNotebookInstanceInput || (exports.UpdateNotebookInstanceInput = {}));
var UpdateNotebookInstanceLifecycleConfigInput;
(function (UpdateNotebookInstanceLifecycleConfigInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateNotebookInstanceLifecycleConfigInput");
    }
    UpdateNotebookInstanceLifecycleConfigInput.isa = isa;
})(UpdateNotebookInstanceLifecycleConfigInput = exports.UpdateNotebookInstanceLifecycleConfigInput || (exports.UpdateNotebookInstanceLifecycleConfigInput = {}));
var UpdateNotebookInstanceLifecycleConfigOutput;
(function (UpdateNotebookInstanceLifecycleConfigOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateNotebookInstanceLifecycleConfigOutput");
    }
    UpdateNotebookInstanceLifecycleConfigOutput.isa = isa;
})(UpdateNotebookInstanceLifecycleConfigOutput = exports.UpdateNotebookInstanceLifecycleConfigOutput || (exports.UpdateNotebookInstanceLifecycleConfigOutput = {}));
var UpdateNotebookInstanceOutput;
(function (UpdateNotebookInstanceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateNotebookInstanceOutput");
    }
    UpdateNotebookInstanceOutput.isa = isa;
})(UpdateNotebookInstanceOutput = exports.UpdateNotebookInstanceOutput || (exports.UpdateNotebookInstanceOutput = {}));
var UpdateTrialComponentRequest;
(function (UpdateTrialComponentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTrialComponentRequest");
    }
    UpdateTrialComponentRequest.isa = isa;
})(UpdateTrialComponentRequest = exports.UpdateTrialComponentRequest || (exports.UpdateTrialComponentRequest = {}));
var UpdateTrialComponentResponse;
(function (UpdateTrialComponentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTrialComponentResponse");
    }
    UpdateTrialComponentResponse.isa = isa;
})(UpdateTrialComponentResponse = exports.UpdateTrialComponentResponse || (exports.UpdateTrialComponentResponse = {}));
var UpdateTrialRequest;
(function (UpdateTrialRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTrialRequest");
    }
    UpdateTrialRequest.isa = isa;
})(UpdateTrialRequest = exports.UpdateTrialRequest || (exports.UpdateTrialRequest = {}));
var UpdateTrialResponse;
(function (UpdateTrialResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTrialResponse");
    }
    UpdateTrialResponse.isa = isa;
})(UpdateTrialResponse = exports.UpdateTrialResponse || (exports.UpdateTrialResponse = {}));
var UpdateUserProfileRequest;
(function (UpdateUserProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateUserProfileRequest");
    }
    UpdateUserProfileRequest.isa = isa;
})(UpdateUserProfileRequest = exports.UpdateUserProfileRequest || (exports.UpdateUserProfileRequest = {}));
var UpdateUserProfileResponse;
(function (UpdateUserProfileResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateUserProfileResponse");
    }
    UpdateUserProfileResponse.isa = isa;
})(UpdateUserProfileResponse = exports.UpdateUserProfileResponse || (exports.UpdateUserProfileResponse = {}));
var UpdateWorkforceRequest;
(function (UpdateWorkforceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateWorkforceRequest");
    }
    UpdateWorkforceRequest.isa = isa;
})(UpdateWorkforceRequest = exports.UpdateWorkforceRequest || (exports.UpdateWorkforceRequest = {}));
var UpdateWorkforceResponse;
(function (UpdateWorkforceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateWorkforceResponse");
    }
    UpdateWorkforceResponse.isa = isa;
})(UpdateWorkforceResponse = exports.UpdateWorkforceResponse || (exports.UpdateWorkforceResponse = {}));
var UpdateWorkteamRequest;
(function (UpdateWorkteamRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateWorkteamRequest");
    }
    UpdateWorkteamRequest.isa = isa;
})(UpdateWorkteamRequest = exports.UpdateWorkteamRequest || (exports.UpdateWorkteamRequest = {}));
var UpdateWorkteamResponse;
(function (UpdateWorkteamResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateWorkteamResponse");
    }
    UpdateWorkteamResponse.isa = isa;
})(UpdateWorkteamResponse = exports.UpdateWorkteamResponse || (exports.UpdateWorkteamResponse = {}));
var UserContext;
(function (UserContext) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserContext");
    }
    UserContext.isa = isa;
})(UserContext = exports.UserContext || (exports.UserContext = {}));
var UserProfileDetails;
(function (UserProfileDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserProfileDetails");
    }
    UserProfileDetails.isa = isa;
})(UserProfileDetails = exports.UserProfileDetails || (exports.UserProfileDetails = {}));
var UserProfileSortKey;
(function (UserProfileSortKey) {
    UserProfileSortKey["CreationTime"] = "CreationTime";
    UserProfileSortKey["LastModifiedTime"] = "LastModifiedTime";
})(UserProfileSortKey = exports.UserProfileSortKey || (exports.UserProfileSortKey = {}));
var UserProfileStatus;
(function (UserProfileStatus) {
    UserProfileStatus["Deleting"] = "Deleting";
    UserProfileStatus["Failed"] = "Failed";
    UserProfileStatus["InService"] = "InService";
    UserProfileStatus["Pending"] = "Pending";
})(UserProfileStatus = exports.UserProfileStatus || (exports.UserProfileStatus = {}));
var UserSettings;
(function (UserSettings) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserSettings");
    }
    UserSettings.isa = isa;
})(UserSettings = exports.UserSettings || (exports.UserSettings = {}));
var VpcConfig;
(function (VpcConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "VpcConfig");
    }
    VpcConfig.isa = isa;
})(VpcConfig = exports.VpcConfig || (exports.VpcConfig = {}));
var Workforce;
(function (Workforce) {
    function isa(o) {
        return smithy_client_1.isa(o, "Workforce");
    }
    Workforce.isa = isa;
})(Workforce = exports.Workforce || (exports.Workforce = {}));
var Workteam;
(function (Workteam) {
    function isa(o) {
        return smithy_client_1.isa(o, "Workteam");
    }
    Workteam.isa = isa;
})(Workteam = exports.Workteam || (exports.Workteam = {}));
//# sourceMappingURL=index.js.map