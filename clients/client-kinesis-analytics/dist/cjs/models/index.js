"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AddApplicationCloudWatchLoggingOptionRequest;
(function (AddApplicationCloudWatchLoggingOptionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddApplicationCloudWatchLoggingOptionRequest");
    }
    AddApplicationCloudWatchLoggingOptionRequest.isa = isa;
})(AddApplicationCloudWatchLoggingOptionRequest = exports.AddApplicationCloudWatchLoggingOptionRequest || (exports.AddApplicationCloudWatchLoggingOptionRequest = {}));
var AddApplicationCloudWatchLoggingOptionResponse;
(function (AddApplicationCloudWatchLoggingOptionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddApplicationCloudWatchLoggingOptionResponse");
    }
    AddApplicationCloudWatchLoggingOptionResponse.isa = isa;
})(AddApplicationCloudWatchLoggingOptionResponse = exports.AddApplicationCloudWatchLoggingOptionResponse || (exports.AddApplicationCloudWatchLoggingOptionResponse = {}));
var AddApplicationInputProcessingConfigurationRequest;
(function (AddApplicationInputProcessingConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddApplicationInputProcessingConfigurationRequest");
    }
    AddApplicationInputProcessingConfigurationRequest.isa = isa;
})(AddApplicationInputProcessingConfigurationRequest = exports.AddApplicationInputProcessingConfigurationRequest || (exports.AddApplicationInputProcessingConfigurationRequest = {}));
var AddApplicationInputProcessingConfigurationResponse;
(function (AddApplicationInputProcessingConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddApplicationInputProcessingConfigurationResponse");
    }
    AddApplicationInputProcessingConfigurationResponse.isa = isa;
})(AddApplicationInputProcessingConfigurationResponse = exports.AddApplicationInputProcessingConfigurationResponse || (exports.AddApplicationInputProcessingConfigurationResponse = {}));
var AddApplicationInputRequest;
(function (AddApplicationInputRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddApplicationInputRequest");
    }
    AddApplicationInputRequest.isa = isa;
})(AddApplicationInputRequest = exports.AddApplicationInputRequest || (exports.AddApplicationInputRequest = {}));
var AddApplicationInputResponse;
(function (AddApplicationInputResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddApplicationInputResponse");
    }
    AddApplicationInputResponse.isa = isa;
})(AddApplicationInputResponse = exports.AddApplicationInputResponse || (exports.AddApplicationInputResponse = {}));
var AddApplicationOutputRequest;
(function (AddApplicationOutputRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddApplicationOutputRequest");
    }
    AddApplicationOutputRequest.isa = isa;
})(AddApplicationOutputRequest = exports.AddApplicationOutputRequest || (exports.AddApplicationOutputRequest = {}));
var AddApplicationOutputResponse;
(function (AddApplicationOutputResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddApplicationOutputResponse");
    }
    AddApplicationOutputResponse.isa = isa;
})(AddApplicationOutputResponse = exports.AddApplicationOutputResponse || (exports.AddApplicationOutputResponse = {}));
var AddApplicationReferenceDataSourceRequest;
(function (AddApplicationReferenceDataSourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddApplicationReferenceDataSourceRequest");
    }
    AddApplicationReferenceDataSourceRequest.isa = isa;
})(AddApplicationReferenceDataSourceRequest = exports.AddApplicationReferenceDataSourceRequest || (exports.AddApplicationReferenceDataSourceRequest = {}));
var AddApplicationReferenceDataSourceResponse;
(function (AddApplicationReferenceDataSourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddApplicationReferenceDataSourceResponse");
    }
    AddApplicationReferenceDataSourceResponse.isa = isa;
})(AddApplicationReferenceDataSourceResponse = exports.AddApplicationReferenceDataSourceResponse || (exports.AddApplicationReferenceDataSourceResponse = {}));
var ApplicationDetail;
(function (ApplicationDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApplicationDetail");
    }
    ApplicationDetail.isa = isa;
})(ApplicationDetail = exports.ApplicationDetail || (exports.ApplicationDetail = {}));
var ApplicationStatus;
(function (ApplicationStatus) {
    ApplicationStatus["DELETING"] = "DELETING";
    ApplicationStatus["READY"] = "READY";
    ApplicationStatus["RUNNING"] = "RUNNING";
    ApplicationStatus["STARTING"] = "STARTING";
    ApplicationStatus["STOPPING"] = "STOPPING";
    ApplicationStatus["UPDATING"] = "UPDATING";
})(ApplicationStatus = exports.ApplicationStatus || (exports.ApplicationStatus = {}));
var ApplicationSummary;
(function (ApplicationSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApplicationSummary");
    }
    ApplicationSummary.isa = isa;
})(ApplicationSummary = exports.ApplicationSummary || (exports.ApplicationSummary = {}));
var ApplicationUpdate;
(function (ApplicationUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApplicationUpdate");
    }
    ApplicationUpdate.isa = isa;
})(ApplicationUpdate = exports.ApplicationUpdate || (exports.ApplicationUpdate = {}));
var CSVMappingParameters;
(function (CSVMappingParameters) {
    function isa(o) {
        return smithy_client_1.isa(o, "CSVMappingParameters");
    }
    CSVMappingParameters.isa = isa;
})(CSVMappingParameters = exports.CSVMappingParameters || (exports.CSVMappingParameters = {}));
var CloudWatchLoggingOption;
(function (CloudWatchLoggingOption) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudWatchLoggingOption");
    }
    CloudWatchLoggingOption.isa = isa;
})(CloudWatchLoggingOption = exports.CloudWatchLoggingOption || (exports.CloudWatchLoggingOption = {}));
var CloudWatchLoggingOptionDescription;
(function (CloudWatchLoggingOptionDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudWatchLoggingOptionDescription");
    }
    CloudWatchLoggingOptionDescription.isa = isa;
})(CloudWatchLoggingOptionDescription = exports.CloudWatchLoggingOptionDescription || (exports.CloudWatchLoggingOptionDescription = {}));
var CloudWatchLoggingOptionUpdate;
(function (CloudWatchLoggingOptionUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudWatchLoggingOptionUpdate");
    }
    CloudWatchLoggingOptionUpdate.isa = isa;
})(CloudWatchLoggingOptionUpdate = exports.CloudWatchLoggingOptionUpdate || (exports.CloudWatchLoggingOptionUpdate = {}));
var CodeValidationException;
(function (CodeValidationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CodeValidationException");
    }
    CodeValidationException.isa = isa;
})(CodeValidationException = exports.CodeValidationException || (exports.CodeValidationException = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConcurrentModificationException");
    }
    ConcurrentModificationException.isa = isa;
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var CreateApplicationRequest;
(function (CreateApplicationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateApplicationRequest");
    }
    CreateApplicationRequest.isa = isa;
})(CreateApplicationRequest = exports.CreateApplicationRequest || (exports.CreateApplicationRequest = {}));
var CreateApplicationResponse;
(function (CreateApplicationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateApplicationResponse");
    }
    CreateApplicationResponse.isa = isa;
})(CreateApplicationResponse = exports.CreateApplicationResponse || (exports.CreateApplicationResponse = {}));
var DeleteApplicationCloudWatchLoggingOptionRequest;
(function (DeleteApplicationCloudWatchLoggingOptionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteApplicationCloudWatchLoggingOptionRequest");
    }
    DeleteApplicationCloudWatchLoggingOptionRequest.isa = isa;
})(DeleteApplicationCloudWatchLoggingOptionRequest = exports.DeleteApplicationCloudWatchLoggingOptionRequest || (exports.DeleteApplicationCloudWatchLoggingOptionRequest = {}));
var DeleteApplicationCloudWatchLoggingOptionResponse;
(function (DeleteApplicationCloudWatchLoggingOptionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteApplicationCloudWatchLoggingOptionResponse");
    }
    DeleteApplicationCloudWatchLoggingOptionResponse.isa = isa;
})(DeleteApplicationCloudWatchLoggingOptionResponse = exports.DeleteApplicationCloudWatchLoggingOptionResponse || (exports.DeleteApplicationCloudWatchLoggingOptionResponse = {}));
var DeleteApplicationInputProcessingConfigurationRequest;
(function (DeleteApplicationInputProcessingConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteApplicationInputProcessingConfigurationRequest");
    }
    DeleteApplicationInputProcessingConfigurationRequest.isa = isa;
})(DeleteApplicationInputProcessingConfigurationRequest = exports.DeleteApplicationInputProcessingConfigurationRequest || (exports.DeleteApplicationInputProcessingConfigurationRequest = {}));
var DeleteApplicationInputProcessingConfigurationResponse;
(function (DeleteApplicationInputProcessingConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteApplicationInputProcessingConfigurationResponse");
    }
    DeleteApplicationInputProcessingConfigurationResponse.isa = isa;
})(DeleteApplicationInputProcessingConfigurationResponse = exports.DeleteApplicationInputProcessingConfigurationResponse || (exports.DeleteApplicationInputProcessingConfigurationResponse = {}));
var DeleteApplicationOutputRequest;
(function (DeleteApplicationOutputRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteApplicationOutputRequest");
    }
    DeleteApplicationOutputRequest.isa = isa;
})(DeleteApplicationOutputRequest = exports.DeleteApplicationOutputRequest || (exports.DeleteApplicationOutputRequest = {}));
var DeleteApplicationOutputResponse;
(function (DeleteApplicationOutputResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteApplicationOutputResponse");
    }
    DeleteApplicationOutputResponse.isa = isa;
})(DeleteApplicationOutputResponse = exports.DeleteApplicationOutputResponse || (exports.DeleteApplicationOutputResponse = {}));
var DeleteApplicationReferenceDataSourceRequest;
(function (DeleteApplicationReferenceDataSourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteApplicationReferenceDataSourceRequest");
    }
    DeleteApplicationReferenceDataSourceRequest.isa = isa;
})(DeleteApplicationReferenceDataSourceRequest = exports.DeleteApplicationReferenceDataSourceRequest || (exports.DeleteApplicationReferenceDataSourceRequest = {}));
var DeleteApplicationReferenceDataSourceResponse;
(function (DeleteApplicationReferenceDataSourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteApplicationReferenceDataSourceResponse");
    }
    DeleteApplicationReferenceDataSourceResponse.isa = isa;
})(DeleteApplicationReferenceDataSourceResponse = exports.DeleteApplicationReferenceDataSourceResponse || (exports.DeleteApplicationReferenceDataSourceResponse = {}));
var DeleteApplicationRequest;
(function (DeleteApplicationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteApplicationRequest");
    }
    DeleteApplicationRequest.isa = isa;
})(DeleteApplicationRequest = exports.DeleteApplicationRequest || (exports.DeleteApplicationRequest = {}));
var DeleteApplicationResponse;
(function (DeleteApplicationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteApplicationResponse");
    }
    DeleteApplicationResponse.isa = isa;
})(DeleteApplicationResponse = exports.DeleteApplicationResponse || (exports.DeleteApplicationResponse = {}));
var DescribeApplicationRequest;
(function (DescribeApplicationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeApplicationRequest");
    }
    DescribeApplicationRequest.isa = isa;
})(DescribeApplicationRequest = exports.DescribeApplicationRequest || (exports.DescribeApplicationRequest = {}));
var DescribeApplicationResponse;
(function (DescribeApplicationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeApplicationResponse");
    }
    DescribeApplicationResponse.isa = isa;
})(DescribeApplicationResponse = exports.DescribeApplicationResponse || (exports.DescribeApplicationResponse = {}));
var DestinationSchema;
(function (DestinationSchema) {
    function isa(o) {
        return smithy_client_1.isa(o, "DestinationSchema");
    }
    DestinationSchema.isa = isa;
})(DestinationSchema = exports.DestinationSchema || (exports.DestinationSchema = {}));
var DiscoverInputSchemaRequest;
(function (DiscoverInputSchemaRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DiscoverInputSchemaRequest");
    }
    DiscoverInputSchemaRequest.isa = isa;
})(DiscoverInputSchemaRequest = exports.DiscoverInputSchemaRequest || (exports.DiscoverInputSchemaRequest = {}));
var DiscoverInputSchemaResponse;
(function (DiscoverInputSchemaResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DiscoverInputSchemaResponse");
    }
    DiscoverInputSchemaResponse.isa = isa;
})(DiscoverInputSchemaResponse = exports.DiscoverInputSchemaResponse || (exports.DiscoverInputSchemaResponse = {}));
var Input;
(function (Input) {
    function isa(o) {
        return smithy_client_1.isa(o, "Input");
    }
    Input.isa = isa;
})(Input = exports.Input || (exports.Input = {}));
var InputConfiguration;
(function (InputConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputConfiguration");
    }
    InputConfiguration.isa = isa;
})(InputConfiguration = exports.InputConfiguration || (exports.InputConfiguration = {}));
var InputDescription;
(function (InputDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputDescription");
    }
    InputDescription.isa = isa;
})(InputDescription = exports.InputDescription || (exports.InputDescription = {}));
var InputLambdaProcessor;
(function (InputLambdaProcessor) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputLambdaProcessor");
    }
    InputLambdaProcessor.isa = isa;
})(InputLambdaProcessor = exports.InputLambdaProcessor || (exports.InputLambdaProcessor = {}));
var InputLambdaProcessorDescription;
(function (InputLambdaProcessorDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputLambdaProcessorDescription");
    }
    InputLambdaProcessorDescription.isa = isa;
})(InputLambdaProcessorDescription = exports.InputLambdaProcessorDescription || (exports.InputLambdaProcessorDescription = {}));
var InputLambdaProcessorUpdate;
(function (InputLambdaProcessorUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputLambdaProcessorUpdate");
    }
    InputLambdaProcessorUpdate.isa = isa;
})(InputLambdaProcessorUpdate = exports.InputLambdaProcessorUpdate || (exports.InputLambdaProcessorUpdate = {}));
var InputParallelism;
(function (InputParallelism) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputParallelism");
    }
    InputParallelism.isa = isa;
})(InputParallelism = exports.InputParallelism || (exports.InputParallelism = {}));
var InputParallelismUpdate;
(function (InputParallelismUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputParallelismUpdate");
    }
    InputParallelismUpdate.isa = isa;
})(InputParallelismUpdate = exports.InputParallelismUpdate || (exports.InputParallelismUpdate = {}));
var InputProcessingConfiguration;
(function (InputProcessingConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputProcessingConfiguration");
    }
    InputProcessingConfiguration.isa = isa;
})(InputProcessingConfiguration = exports.InputProcessingConfiguration || (exports.InputProcessingConfiguration = {}));
var InputProcessingConfigurationDescription;
(function (InputProcessingConfigurationDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputProcessingConfigurationDescription");
    }
    InputProcessingConfigurationDescription.isa = isa;
})(InputProcessingConfigurationDescription = exports.InputProcessingConfigurationDescription || (exports.InputProcessingConfigurationDescription = {}));
var InputProcessingConfigurationUpdate;
(function (InputProcessingConfigurationUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputProcessingConfigurationUpdate");
    }
    InputProcessingConfigurationUpdate.isa = isa;
})(InputProcessingConfigurationUpdate = exports.InputProcessingConfigurationUpdate || (exports.InputProcessingConfigurationUpdate = {}));
var InputSchemaUpdate;
(function (InputSchemaUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputSchemaUpdate");
    }
    InputSchemaUpdate.isa = isa;
})(InputSchemaUpdate = exports.InputSchemaUpdate || (exports.InputSchemaUpdate = {}));
var InputStartingPosition;
(function (InputStartingPosition) {
    InputStartingPosition["LAST_STOPPED_POINT"] = "LAST_STOPPED_POINT";
    InputStartingPosition["NOW"] = "NOW";
    InputStartingPosition["TRIM_HORIZON"] = "TRIM_HORIZON";
})(InputStartingPosition = exports.InputStartingPosition || (exports.InputStartingPosition = {}));
var InputStartingPositionConfiguration;
(function (InputStartingPositionConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputStartingPositionConfiguration");
    }
    InputStartingPositionConfiguration.isa = isa;
})(InputStartingPositionConfiguration = exports.InputStartingPositionConfiguration || (exports.InputStartingPositionConfiguration = {}));
var InputUpdate;
(function (InputUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputUpdate");
    }
    InputUpdate.isa = isa;
})(InputUpdate = exports.InputUpdate || (exports.InputUpdate = {}));
var InvalidApplicationConfigurationException;
(function (InvalidApplicationConfigurationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidApplicationConfigurationException");
    }
    InvalidApplicationConfigurationException.isa = isa;
})(InvalidApplicationConfigurationException = exports.InvalidApplicationConfigurationException || (exports.InvalidApplicationConfigurationException = {}));
var InvalidArgumentException;
(function (InvalidArgumentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidArgumentException");
    }
    InvalidArgumentException.isa = isa;
})(InvalidArgumentException = exports.InvalidArgumentException || (exports.InvalidArgumentException = {}));
var JSONMappingParameters;
(function (JSONMappingParameters) {
    function isa(o) {
        return smithy_client_1.isa(o, "JSONMappingParameters");
    }
    JSONMappingParameters.isa = isa;
})(JSONMappingParameters = exports.JSONMappingParameters || (exports.JSONMappingParameters = {}));
var KinesisFirehoseInput;
(function (KinesisFirehoseInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "KinesisFirehoseInput");
    }
    KinesisFirehoseInput.isa = isa;
})(KinesisFirehoseInput = exports.KinesisFirehoseInput || (exports.KinesisFirehoseInput = {}));
var KinesisFirehoseInputDescription;
(function (KinesisFirehoseInputDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "KinesisFirehoseInputDescription");
    }
    KinesisFirehoseInputDescription.isa = isa;
})(KinesisFirehoseInputDescription = exports.KinesisFirehoseInputDescription || (exports.KinesisFirehoseInputDescription = {}));
var KinesisFirehoseInputUpdate;
(function (KinesisFirehoseInputUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "KinesisFirehoseInputUpdate");
    }
    KinesisFirehoseInputUpdate.isa = isa;
})(KinesisFirehoseInputUpdate = exports.KinesisFirehoseInputUpdate || (exports.KinesisFirehoseInputUpdate = {}));
var KinesisFirehoseOutput;
(function (KinesisFirehoseOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "KinesisFirehoseOutput");
    }
    KinesisFirehoseOutput.isa = isa;
})(KinesisFirehoseOutput = exports.KinesisFirehoseOutput || (exports.KinesisFirehoseOutput = {}));
var KinesisFirehoseOutputDescription;
(function (KinesisFirehoseOutputDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "KinesisFirehoseOutputDescription");
    }
    KinesisFirehoseOutputDescription.isa = isa;
})(KinesisFirehoseOutputDescription = exports.KinesisFirehoseOutputDescription || (exports.KinesisFirehoseOutputDescription = {}));
var KinesisFirehoseOutputUpdate;
(function (KinesisFirehoseOutputUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "KinesisFirehoseOutputUpdate");
    }
    KinesisFirehoseOutputUpdate.isa = isa;
})(KinesisFirehoseOutputUpdate = exports.KinesisFirehoseOutputUpdate || (exports.KinesisFirehoseOutputUpdate = {}));
var KinesisStreamsInput;
(function (KinesisStreamsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "KinesisStreamsInput");
    }
    KinesisStreamsInput.isa = isa;
})(KinesisStreamsInput = exports.KinesisStreamsInput || (exports.KinesisStreamsInput = {}));
var KinesisStreamsInputDescription;
(function (KinesisStreamsInputDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "KinesisStreamsInputDescription");
    }
    KinesisStreamsInputDescription.isa = isa;
})(KinesisStreamsInputDescription = exports.KinesisStreamsInputDescription || (exports.KinesisStreamsInputDescription = {}));
var KinesisStreamsInputUpdate;
(function (KinesisStreamsInputUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "KinesisStreamsInputUpdate");
    }
    KinesisStreamsInputUpdate.isa = isa;
})(KinesisStreamsInputUpdate = exports.KinesisStreamsInputUpdate || (exports.KinesisStreamsInputUpdate = {}));
var KinesisStreamsOutput;
(function (KinesisStreamsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "KinesisStreamsOutput");
    }
    KinesisStreamsOutput.isa = isa;
})(KinesisStreamsOutput = exports.KinesisStreamsOutput || (exports.KinesisStreamsOutput = {}));
var KinesisStreamsOutputDescription;
(function (KinesisStreamsOutputDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "KinesisStreamsOutputDescription");
    }
    KinesisStreamsOutputDescription.isa = isa;
})(KinesisStreamsOutputDescription = exports.KinesisStreamsOutputDescription || (exports.KinesisStreamsOutputDescription = {}));
var KinesisStreamsOutputUpdate;
(function (KinesisStreamsOutputUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "KinesisStreamsOutputUpdate");
    }
    KinesisStreamsOutputUpdate.isa = isa;
})(KinesisStreamsOutputUpdate = exports.KinesisStreamsOutputUpdate || (exports.KinesisStreamsOutputUpdate = {}));
var LambdaOutput;
(function (LambdaOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "LambdaOutput");
    }
    LambdaOutput.isa = isa;
})(LambdaOutput = exports.LambdaOutput || (exports.LambdaOutput = {}));
var LambdaOutputDescription;
(function (LambdaOutputDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "LambdaOutputDescription");
    }
    LambdaOutputDescription.isa = isa;
})(LambdaOutputDescription = exports.LambdaOutputDescription || (exports.LambdaOutputDescription = {}));
var LambdaOutputUpdate;
(function (LambdaOutputUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "LambdaOutputUpdate");
    }
    LambdaOutputUpdate.isa = isa;
})(LambdaOutputUpdate = exports.LambdaOutputUpdate || (exports.LambdaOutputUpdate = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListApplicationsRequest;
(function (ListApplicationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListApplicationsRequest");
    }
    ListApplicationsRequest.isa = isa;
})(ListApplicationsRequest = exports.ListApplicationsRequest || (exports.ListApplicationsRequest = {}));
var ListApplicationsResponse;
(function (ListApplicationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListApplicationsResponse");
    }
    ListApplicationsResponse.isa = isa;
})(ListApplicationsResponse = exports.ListApplicationsResponse || (exports.ListApplicationsResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceRequest");
    }
    ListTagsForResourceRequest.isa = isa;
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceResponse");
    }
    ListTagsForResourceResponse.isa = isa;
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var MappingParameters;
(function (MappingParameters) {
    function isa(o) {
        return smithy_client_1.isa(o, "MappingParameters");
    }
    MappingParameters.isa = isa;
})(MappingParameters = exports.MappingParameters || (exports.MappingParameters = {}));
var Output;
(function (Output) {
    function isa(o) {
        return smithy_client_1.isa(o, "Output");
    }
    Output.isa = isa;
})(Output = exports.Output || (exports.Output = {}));
var OutputDescription;
(function (OutputDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "OutputDescription");
    }
    OutputDescription.isa = isa;
})(OutputDescription = exports.OutputDescription || (exports.OutputDescription = {}));
var OutputUpdate;
(function (OutputUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "OutputUpdate");
    }
    OutputUpdate.isa = isa;
})(OutputUpdate = exports.OutputUpdate || (exports.OutputUpdate = {}));
var RecordColumn;
(function (RecordColumn) {
    function isa(o) {
        return smithy_client_1.isa(o, "RecordColumn");
    }
    RecordColumn.isa = isa;
})(RecordColumn = exports.RecordColumn || (exports.RecordColumn = {}));
var RecordFormat;
(function (RecordFormat) {
    function isa(o) {
        return smithy_client_1.isa(o, "RecordFormat");
    }
    RecordFormat.isa = isa;
})(RecordFormat = exports.RecordFormat || (exports.RecordFormat = {}));
var RecordFormatType;
(function (RecordFormatType) {
    RecordFormatType["CSV"] = "CSV";
    RecordFormatType["JSON"] = "JSON";
})(RecordFormatType = exports.RecordFormatType || (exports.RecordFormatType = {}));
var ReferenceDataSource;
(function (ReferenceDataSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReferenceDataSource");
    }
    ReferenceDataSource.isa = isa;
})(ReferenceDataSource = exports.ReferenceDataSource || (exports.ReferenceDataSource = {}));
var ReferenceDataSourceDescription;
(function (ReferenceDataSourceDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReferenceDataSourceDescription");
    }
    ReferenceDataSourceDescription.isa = isa;
})(ReferenceDataSourceDescription = exports.ReferenceDataSourceDescription || (exports.ReferenceDataSourceDescription = {}));
var ReferenceDataSourceUpdate;
(function (ReferenceDataSourceUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReferenceDataSourceUpdate");
    }
    ReferenceDataSourceUpdate.isa = isa;
})(ReferenceDataSourceUpdate = exports.ReferenceDataSourceUpdate || (exports.ReferenceDataSourceUpdate = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceInUseException");
    }
    ResourceInUseException.isa = isa;
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ResourceProvisionedThroughputExceededException;
(function (ResourceProvisionedThroughputExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceProvisionedThroughputExceededException");
    }
    ResourceProvisionedThroughputExceededException.isa = isa;
})(ResourceProvisionedThroughputExceededException = exports.ResourceProvisionedThroughputExceededException || (exports.ResourceProvisionedThroughputExceededException = {}));
var S3Configuration;
(function (S3Configuration) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3Configuration");
    }
    S3Configuration.isa = isa;
})(S3Configuration = exports.S3Configuration || (exports.S3Configuration = {}));
var S3ReferenceDataSource;
(function (S3ReferenceDataSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3ReferenceDataSource");
    }
    S3ReferenceDataSource.isa = isa;
})(S3ReferenceDataSource = exports.S3ReferenceDataSource || (exports.S3ReferenceDataSource = {}));
var S3ReferenceDataSourceDescription;
(function (S3ReferenceDataSourceDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3ReferenceDataSourceDescription");
    }
    S3ReferenceDataSourceDescription.isa = isa;
})(S3ReferenceDataSourceDescription = exports.S3ReferenceDataSourceDescription || (exports.S3ReferenceDataSourceDescription = {}));
var S3ReferenceDataSourceUpdate;
(function (S3ReferenceDataSourceUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3ReferenceDataSourceUpdate");
    }
    S3ReferenceDataSourceUpdate.isa = isa;
})(S3ReferenceDataSourceUpdate = exports.S3ReferenceDataSourceUpdate || (exports.S3ReferenceDataSourceUpdate = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceUnavailableException");
    }
    ServiceUnavailableException.isa = isa;
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var SourceSchema;
(function (SourceSchema) {
    function isa(o) {
        return smithy_client_1.isa(o, "SourceSchema");
    }
    SourceSchema.isa = isa;
})(SourceSchema = exports.SourceSchema || (exports.SourceSchema = {}));
var StartApplicationRequest;
(function (StartApplicationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartApplicationRequest");
    }
    StartApplicationRequest.isa = isa;
})(StartApplicationRequest = exports.StartApplicationRequest || (exports.StartApplicationRequest = {}));
var StartApplicationResponse;
(function (StartApplicationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartApplicationResponse");
    }
    StartApplicationResponse.isa = isa;
})(StartApplicationResponse = exports.StartApplicationResponse || (exports.StartApplicationResponse = {}));
var StopApplicationRequest;
(function (StopApplicationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopApplicationRequest");
    }
    StopApplicationRequest.isa = isa;
})(StopApplicationRequest = exports.StopApplicationRequest || (exports.StopApplicationRequest = {}));
var StopApplicationResponse;
(function (StopApplicationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopApplicationResponse");
    }
    StopApplicationResponse.isa = isa;
})(StopApplicationResponse = exports.StopApplicationResponse || (exports.StopApplicationResponse = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceRequest");
    }
    TagResourceRequest.isa = isa;
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceResponse");
    }
    TagResourceResponse.isa = isa;
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyTagsException");
    }
    TooManyTagsException.isa = isa;
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var UnableToDetectSchemaException;
(function (UnableToDetectSchemaException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnableToDetectSchemaException");
    }
    UnableToDetectSchemaException.isa = isa;
})(UnableToDetectSchemaException = exports.UnableToDetectSchemaException || (exports.UnableToDetectSchemaException = {}));
var UnsupportedOperationException;
(function (UnsupportedOperationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedOperationException");
    }
    UnsupportedOperationException.isa = isa;
})(UnsupportedOperationException = exports.UnsupportedOperationException || (exports.UnsupportedOperationException = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceRequest");
    }
    UntagResourceRequest.isa = isa;
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceResponse");
    }
    UntagResourceResponse.isa = isa;
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateApplicationRequest;
(function (UpdateApplicationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateApplicationRequest");
    }
    UpdateApplicationRequest.isa = isa;
})(UpdateApplicationRequest = exports.UpdateApplicationRequest || (exports.UpdateApplicationRequest = {}));
var UpdateApplicationResponse;
(function (UpdateApplicationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateApplicationResponse");
    }
    UpdateApplicationResponse.isa = isa;
})(UpdateApplicationResponse = exports.UpdateApplicationResponse || (exports.UpdateApplicationResponse = {}));
//# sourceMappingURL=index.js.map