"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var BufferingHints;
(function (BufferingHints) {
    function isa(o) {
        return smithy_client_1.isa(o, "BufferingHints");
    }
    BufferingHints.isa = isa;
})(BufferingHints = exports.BufferingHints || (exports.BufferingHints = {}));
var CloudWatchLoggingOptions;
(function (CloudWatchLoggingOptions) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudWatchLoggingOptions");
    }
    CloudWatchLoggingOptions.isa = isa;
})(CloudWatchLoggingOptions = exports.CloudWatchLoggingOptions || (exports.CloudWatchLoggingOptions = {}));
var CompressionFormat;
(function (CompressionFormat) {
    CompressionFormat["GZIP"] = "GZIP";
    CompressionFormat["SNAPPY"] = "Snappy";
    CompressionFormat["UNCOMPRESSED"] = "UNCOMPRESSED";
    CompressionFormat["ZIP"] = "ZIP";
})(CompressionFormat = exports.CompressionFormat || (exports.CompressionFormat = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConcurrentModificationException");
    }
    ConcurrentModificationException.isa = isa;
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var CopyCommand;
(function (CopyCommand) {
    function isa(o) {
        return smithy_client_1.isa(o, "CopyCommand");
    }
    CopyCommand.isa = isa;
})(CopyCommand = exports.CopyCommand || (exports.CopyCommand = {}));
var CreateDeliveryStreamInput;
(function (CreateDeliveryStreamInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDeliveryStreamInput");
    }
    CreateDeliveryStreamInput.isa = isa;
})(CreateDeliveryStreamInput = exports.CreateDeliveryStreamInput || (exports.CreateDeliveryStreamInput = {}));
var CreateDeliveryStreamOutput;
(function (CreateDeliveryStreamOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDeliveryStreamOutput");
    }
    CreateDeliveryStreamOutput.isa = isa;
})(CreateDeliveryStreamOutput = exports.CreateDeliveryStreamOutput || (exports.CreateDeliveryStreamOutput = {}));
var DataFormatConversionConfiguration;
(function (DataFormatConversionConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataFormatConversionConfiguration");
    }
    DataFormatConversionConfiguration.isa = isa;
})(DataFormatConversionConfiguration = exports.DataFormatConversionConfiguration || (exports.DataFormatConversionConfiguration = {}));
var DeleteDeliveryStreamInput;
(function (DeleteDeliveryStreamInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDeliveryStreamInput");
    }
    DeleteDeliveryStreamInput.isa = isa;
})(DeleteDeliveryStreamInput = exports.DeleteDeliveryStreamInput || (exports.DeleteDeliveryStreamInput = {}));
var DeleteDeliveryStreamOutput;
(function (DeleteDeliveryStreamOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDeliveryStreamOutput");
    }
    DeleteDeliveryStreamOutput.isa = isa;
})(DeleteDeliveryStreamOutput = exports.DeleteDeliveryStreamOutput || (exports.DeleteDeliveryStreamOutput = {}));
var DeliveryStreamDescription;
(function (DeliveryStreamDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeliveryStreamDescription");
    }
    DeliveryStreamDescription.isa = isa;
})(DeliveryStreamDescription = exports.DeliveryStreamDescription || (exports.DeliveryStreamDescription = {}));
var DeliveryStreamEncryptionConfiguration;
(function (DeliveryStreamEncryptionConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeliveryStreamEncryptionConfiguration");
    }
    DeliveryStreamEncryptionConfiguration.isa = isa;
})(DeliveryStreamEncryptionConfiguration = exports.DeliveryStreamEncryptionConfiguration || (exports.DeliveryStreamEncryptionConfiguration = {}));
var DeliveryStreamEncryptionConfigurationInput;
(function (DeliveryStreamEncryptionConfigurationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeliveryStreamEncryptionConfigurationInput");
    }
    DeliveryStreamEncryptionConfigurationInput.isa = isa;
})(DeliveryStreamEncryptionConfigurationInput = exports.DeliveryStreamEncryptionConfigurationInput || (exports.DeliveryStreamEncryptionConfigurationInput = {}));
var DeliveryStreamEncryptionStatus;
(function (DeliveryStreamEncryptionStatus) {
    DeliveryStreamEncryptionStatus["DISABLED"] = "DISABLED";
    DeliveryStreamEncryptionStatus["DISABLING"] = "DISABLING";
    DeliveryStreamEncryptionStatus["DISABLING_FAILED"] = "DISABLING_FAILED";
    DeliveryStreamEncryptionStatus["ENABLED"] = "ENABLED";
    DeliveryStreamEncryptionStatus["ENABLING"] = "ENABLING";
    DeliveryStreamEncryptionStatus["ENABLING_FAILED"] = "ENABLING_FAILED";
})(DeliveryStreamEncryptionStatus = exports.DeliveryStreamEncryptionStatus || (exports.DeliveryStreamEncryptionStatus = {}));
var DeliveryStreamFailureType;
(function (DeliveryStreamFailureType) {
    DeliveryStreamFailureType["CREATE_KMS_GRANT_FAILED"] = "CREATE_KMS_GRANT_FAILED";
    DeliveryStreamFailureType["DISABLED_KMS_KEY"] = "DISABLED_KMS_KEY";
    DeliveryStreamFailureType["INVALID_KMS_KEY"] = "INVALID_KMS_KEY";
    DeliveryStreamFailureType["KMS_ACCESS_DENIED"] = "KMS_ACCESS_DENIED";
    DeliveryStreamFailureType["KMS_KEY_NOT_FOUND"] = "KMS_KEY_NOT_FOUND";
    DeliveryStreamFailureType["KMS_OPT_IN_REQUIRED"] = "KMS_OPT_IN_REQUIRED";
    DeliveryStreamFailureType["RETIRE_KMS_GRANT_FAILED"] = "RETIRE_KMS_GRANT_FAILED";
    DeliveryStreamFailureType["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
})(DeliveryStreamFailureType = exports.DeliveryStreamFailureType || (exports.DeliveryStreamFailureType = {}));
var DeliveryStreamStatus;
(function (DeliveryStreamStatus) {
    DeliveryStreamStatus["ACTIVE"] = "ACTIVE";
    DeliveryStreamStatus["CREATING"] = "CREATING";
    DeliveryStreamStatus["CREATING_FAILED"] = "CREATING_FAILED";
    DeliveryStreamStatus["DELETING"] = "DELETING";
    DeliveryStreamStatus["DELETING_FAILED"] = "DELETING_FAILED";
})(DeliveryStreamStatus = exports.DeliveryStreamStatus || (exports.DeliveryStreamStatus = {}));
var DescribeDeliveryStreamInput;
(function (DescribeDeliveryStreamInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDeliveryStreamInput");
    }
    DescribeDeliveryStreamInput.isa = isa;
})(DescribeDeliveryStreamInput = exports.DescribeDeliveryStreamInput || (exports.DescribeDeliveryStreamInput = {}));
var DescribeDeliveryStreamOutput;
(function (DescribeDeliveryStreamOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDeliveryStreamOutput");
    }
    DescribeDeliveryStreamOutput.isa = isa;
})(DescribeDeliveryStreamOutput = exports.DescribeDeliveryStreamOutput || (exports.DescribeDeliveryStreamOutput = {}));
var Deserializer;
(function (Deserializer) {
    function isa(o) {
        return smithy_client_1.isa(o, "Deserializer");
    }
    Deserializer.isa = isa;
})(Deserializer = exports.Deserializer || (exports.Deserializer = {}));
var DestinationDescription;
(function (DestinationDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "DestinationDescription");
    }
    DestinationDescription.isa = isa;
})(DestinationDescription = exports.DestinationDescription || (exports.DestinationDescription = {}));
var ElasticsearchBufferingHints;
(function (ElasticsearchBufferingHints) {
    function isa(o) {
        return smithy_client_1.isa(o, "ElasticsearchBufferingHints");
    }
    ElasticsearchBufferingHints.isa = isa;
})(ElasticsearchBufferingHints = exports.ElasticsearchBufferingHints || (exports.ElasticsearchBufferingHints = {}));
var ElasticsearchDestinationConfiguration;
(function (ElasticsearchDestinationConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "ElasticsearchDestinationConfiguration");
    }
    ElasticsearchDestinationConfiguration.isa = isa;
})(ElasticsearchDestinationConfiguration = exports.ElasticsearchDestinationConfiguration || (exports.ElasticsearchDestinationConfiguration = {}));
var ElasticsearchDestinationDescription;
(function (ElasticsearchDestinationDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "ElasticsearchDestinationDescription");
    }
    ElasticsearchDestinationDescription.isa = isa;
})(ElasticsearchDestinationDescription = exports.ElasticsearchDestinationDescription || (exports.ElasticsearchDestinationDescription = {}));
var ElasticsearchDestinationUpdate;
(function (ElasticsearchDestinationUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "ElasticsearchDestinationUpdate");
    }
    ElasticsearchDestinationUpdate.isa = isa;
})(ElasticsearchDestinationUpdate = exports.ElasticsearchDestinationUpdate || (exports.ElasticsearchDestinationUpdate = {}));
var ElasticsearchRetryOptions;
(function (ElasticsearchRetryOptions) {
    function isa(o) {
        return smithy_client_1.isa(o, "ElasticsearchRetryOptions");
    }
    ElasticsearchRetryOptions.isa = isa;
})(ElasticsearchRetryOptions = exports.ElasticsearchRetryOptions || (exports.ElasticsearchRetryOptions = {}));
var EncryptionConfiguration;
(function (EncryptionConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "EncryptionConfiguration");
    }
    EncryptionConfiguration.isa = isa;
})(EncryptionConfiguration = exports.EncryptionConfiguration || (exports.EncryptionConfiguration = {}));
var ExtendedS3DestinationConfiguration;
(function (ExtendedS3DestinationConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExtendedS3DestinationConfiguration");
    }
    ExtendedS3DestinationConfiguration.isa = isa;
})(ExtendedS3DestinationConfiguration = exports.ExtendedS3DestinationConfiguration || (exports.ExtendedS3DestinationConfiguration = {}));
var ExtendedS3DestinationDescription;
(function (ExtendedS3DestinationDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExtendedS3DestinationDescription");
    }
    ExtendedS3DestinationDescription.isa = isa;
})(ExtendedS3DestinationDescription = exports.ExtendedS3DestinationDescription || (exports.ExtendedS3DestinationDescription = {}));
var ExtendedS3DestinationUpdate;
(function (ExtendedS3DestinationUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExtendedS3DestinationUpdate");
    }
    ExtendedS3DestinationUpdate.isa = isa;
})(ExtendedS3DestinationUpdate = exports.ExtendedS3DestinationUpdate || (exports.ExtendedS3DestinationUpdate = {}));
var FailureDescription;
(function (FailureDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "FailureDescription");
    }
    FailureDescription.isa = isa;
})(FailureDescription = exports.FailureDescription || (exports.FailureDescription = {}));
var HiveJsonSerDe;
(function (HiveJsonSerDe) {
    function isa(o) {
        return smithy_client_1.isa(o, "HiveJsonSerDe");
    }
    HiveJsonSerDe.isa = isa;
})(HiveJsonSerDe = exports.HiveJsonSerDe || (exports.HiveJsonSerDe = {}));
var InputFormatConfiguration;
(function (InputFormatConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputFormatConfiguration");
    }
    InputFormatConfiguration.isa = isa;
})(InputFormatConfiguration = exports.InputFormatConfiguration || (exports.InputFormatConfiguration = {}));
var InvalidArgumentException;
(function (InvalidArgumentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidArgumentException");
    }
    InvalidArgumentException.isa = isa;
})(InvalidArgumentException = exports.InvalidArgumentException || (exports.InvalidArgumentException = {}));
var InvalidKMSResourceException;
(function (InvalidKMSResourceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidKMSResourceException");
    }
    InvalidKMSResourceException.isa = isa;
})(InvalidKMSResourceException = exports.InvalidKMSResourceException || (exports.InvalidKMSResourceException = {}));
var KMSEncryptionConfig;
(function (KMSEncryptionConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "KMSEncryptionConfig");
    }
    KMSEncryptionConfig.isa = isa;
})(KMSEncryptionConfig = exports.KMSEncryptionConfig || (exports.KMSEncryptionConfig = {}));
var KeyType;
(function (KeyType) {
    KeyType["AWS_OWNED_CMK"] = "AWS_OWNED_CMK";
    KeyType["CUSTOMER_MANAGED_CMK"] = "CUSTOMER_MANAGED_CMK";
})(KeyType = exports.KeyType || (exports.KeyType = {}));
var KinesisStreamSourceConfiguration;
(function (KinesisStreamSourceConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "KinesisStreamSourceConfiguration");
    }
    KinesisStreamSourceConfiguration.isa = isa;
})(KinesisStreamSourceConfiguration = exports.KinesisStreamSourceConfiguration || (exports.KinesisStreamSourceConfiguration = {}));
var KinesisStreamSourceDescription;
(function (KinesisStreamSourceDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "KinesisStreamSourceDescription");
    }
    KinesisStreamSourceDescription.isa = isa;
})(KinesisStreamSourceDescription = exports.KinesisStreamSourceDescription || (exports.KinesisStreamSourceDescription = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListDeliveryStreamsInput;
(function (ListDeliveryStreamsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeliveryStreamsInput");
    }
    ListDeliveryStreamsInput.isa = isa;
})(ListDeliveryStreamsInput = exports.ListDeliveryStreamsInput || (exports.ListDeliveryStreamsInput = {}));
var ListDeliveryStreamsOutput;
(function (ListDeliveryStreamsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeliveryStreamsOutput");
    }
    ListDeliveryStreamsOutput.isa = isa;
})(ListDeliveryStreamsOutput = exports.ListDeliveryStreamsOutput || (exports.ListDeliveryStreamsOutput = {}));
var ListTagsForDeliveryStreamInput;
(function (ListTagsForDeliveryStreamInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForDeliveryStreamInput");
    }
    ListTagsForDeliveryStreamInput.isa = isa;
})(ListTagsForDeliveryStreamInput = exports.ListTagsForDeliveryStreamInput || (exports.ListTagsForDeliveryStreamInput = {}));
var ListTagsForDeliveryStreamOutput;
(function (ListTagsForDeliveryStreamOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForDeliveryStreamOutput");
    }
    ListTagsForDeliveryStreamOutput.isa = isa;
})(ListTagsForDeliveryStreamOutput = exports.ListTagsForDeliveryStreamOutput || (exports.ListTagsForDeliveryStreamOutput = {}));
var OpenXJsonSerDe;
(function (OpenXJsonSerDe) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpenXJsonSerDe");
    }
    OpenXJsonSerDe.isa = isa;
})(OpenXJsonSerDe = exports.OpenXJsonSerDe || (exports.OpenXJsonSerDe = {}));
var OrcCompression;
(function (OrcCompression) {
    OrcCompression["NONE"] = "NONE";
    OrcCompression["SNAPPY"] = "SNAPPY";
    OrcCompression["ZLIB"] = "ZLIB";
})(OrcCompression = exports.OrcCompression || (exports.OrcCompression = {}));
var OrcFormatVersion;
(function (OrcFormatVersion) {
    OrcFormatVersion["V0_11"] = "V0_11";
    OrcFormatVersion["V0_12"] = "V0_12";
})(OrcFormatVersion = exports.OrcFormatVersion || (exports.OrcFormatVersion = {}));
var OrcSerDe;
(function (OrcSerDe) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrcSerDe");
    }
    OrcSerDe.isa = isa;
})(OrcSerDe = exports.OrcSerDe || (exports.OrcSerDe = {}));
var OutputFormatConfiguration;
(function (OutputFormatConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "OutputFormatConfiguration");
    }
    OutputFormatConfiguration.isa = isa;
})(OutputFormatConfiguration = exports.OutputFormatConfiguration || (exports.OutputFormatConfiguration = {}));
var ParquetCompression;
(function (ParquetCompression) {
    ParquetCompression["GZIP"] = "GZIP";
    ParquetCompression["SNAPPY"] = "SNAPPY";
    ParquetCompression["UNCOMPRESSED"] = "UNCOMPRESSED";
})(ParquetCompression = exports.ParquetCompression || (exports.ParquetCompression = {}));
var ParquetSerDe;
(function (ParquetSerDe) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParquetSerDe");
    }
    ParquetSerDe.isa = isa;
})(ParquetSerDe = exports.ParquetSerDe || (exports.ParquetSerDe = {}));
var ParquetWriterVersion;
(function (ParquetWriterVersion) {
    ParquetWriterVersion["V1"] = "V1";
    ParquetWriterVersion["V2"] = "V2";
})(ParquetWriterVersion = exports.ParquetWriterVersion || (exports.ParquetWriterVersion = {}));
var ProcessingConfiguration;
(function (ProcessingConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProcessingConfiguration");
    }
    ProcessingConfiguration.isa = isa;
})(ProcessingConfiguration = exports.ProcessingConfiguration || (exports.ProcessingConfiguration = {}));
var Processor;
(function (Processor) {
    function isa(o) {
        return smithy_client_1.isa(o, "Processor");
    }
    Processor.isa = isa;
})(Processor = exports.Processor || (exports.Processor = {}));
var ProcessorParameter;
(function (ProcessorParameter) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProcessorParameter");
    }
    ProcessorParameter.isa = isa;
})(ProcessorParameter = exports.ProcessorParameter || (exports.ProcessorParameter = {}));
var ProcessorParameterName;
(function (ProcessorParameterName) {
    ProcessorParameterName["BUFFER_INTERVAL_IN_SECONDS"] = "BufferIntervalInSeconds";
    ProcessorParameterName["BUFFER_SIZE_IN_MB"] = "BufferSizeInMBs";
    ProcessorParameterName["LAMBDA_ARN"] = "LambdaArn";
    ProcessorParameterName["LAMBDA_NUMBER_OF_RETRIES"] = "NumberOfRetries";
    ProcessorParameterName["ROLE_ARN"] = "RoleArn";
})(ProcessorParameterName = exports.ProcessorParameterName || (exports.ProcessorParameterName = {}));
var PutRecordBatchInput;
(function (PutRecordBatchInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRecordBatchInput");
    }
    PutRecordBatchInput.isa = isa;
})(PutRecordBatchInput = exports.PutRecordBatchInput || (exports.PutRecordBatchInput = {}));
var PutRecordBatchOutput;
(function (PutRecordBatchOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRecordBatchOutput");
    }
    PutRecordBatchOutput.isa = isa;
})(PutRecordBatchOutput = exports.PutRecordBatchOutput || (exports.PutRecordBatchOutput = {}));
var PutRecordBatchResponseEntry;
(function (PutRecordBatchResponseEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRecordBatchResponseEntry");
    }
    PutRecordBatchResponseEntry.isa = isa;
})(PutRecordBatchResponseEntry = exports.PutRecordBatchResponseEntry || (exports.PutRecordBatchResponseEntry = {}));
var PutRecordInput;
(function (PutRecordInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRecordInput");
    }
    PutRecordInput.isa = isa;
})(PutRecordInput = exports.PutRecordInput || (exports.PutRecordInput = {}));
var PutRecordOutput;
(function (PutRecordOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRecordOutput");
    }
    PutRecordOutput.isa = isa;
})(PutRecordOutput = exports.PutRecordOutput || (exports.PutRecordOutput = {}));
var _Record;
(function (_Record) {
    function isa(o) {
        return smithy_client_1.isa(o, "Record");
    }
    _Record.isa = isa;
})(_Record = exports._Record || (exports._Record = {}));
var RedshiftDestinationConfiguration;
(function (RedshiftDestinationConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "RedshiftDestinationConfiguration");
    }
    RedshiftDestinationConfiguration.isa = isa;
})(RedshiftDestinationConfiguration = exports.RedshiftDestinationConfiguration || (exports.RedshiftDestinationConfiguration = {}));
var RedshiftDestinationDescription;
(function (RedshiftDestinationDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "RedshiftDestinationDescription");
    }
    RedshiftDestinationDescription.isa = isa;
})(RedshiftDestinationDescription = exports.RedshiftDestinationDescription || (exports.RedshiftDestinationDescription = {}));
var RedshiftDestinationUpdate;
(function (RedshiftDestinationUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "RedshiftDestinationUpdate");
    }
    RedshiftDestinationUpdate.isa = isa;
})(RedshiftDestinationUpdate = exports.RedshiftDestinationUpdate || (exports.RedshiftDestinationUpdate = {}));
var RedshiftRetryOptions;
(function (RedshiftRetryOptions) {
    function isa(o) {
        return smithy_client_1.isa(o, "RedshiftRetryOptions");
    }
    RedshiftRetryOptions.isa = isa;
})(RedshiftRetryOptions = exports.RedshiftRetryOptions || (exports.RedshiftRetryOptions = {}));
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
var S3DestinationConfiguration;
(function (S3DestinationConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3DestinationConfiguration");
    }
    S3DestinationConfiguration.isa = isa;
})(S3DestinationConfiguration = exports.S3DestinationConfiguration || (exports.S3DestinationConfiguration = {}));
var S3DestinationDescription;
(function (S3DestinationDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3DestinationDescription");
    }
    S3DestinationDescription.isa = isa;
})(S3DestinationDescription = exports.S3DestinationDescription || (exports.S3DestinationDescription = {}));
var S3DestinationUpdate;
(function (S3DestinationUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3DestinationUpdate");
    }
    S3DestinationUpdate.isa = isa;
})(S3DestinationUpdate = exports.S3DestinationUpdate || (exports.S3DestinationUpdate = {}));
var SchemaConfiguration;
(function (SchemaConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "SchemaConfiguration");
    }
    SchemaConfiguration.isa = isa;
})(SchemaConfiguration = exports.SchemaConfiguration || (exports.SchemaConfiguration = {}));
var Serializer;
(function (Serializer) {
    function isa(o) {
        return smithy_client_1.isa(o, "Serializer");
    }
    Serializer.isa = isa;
})(Serializer = exports.Serializer || (exports.Serializer = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceUnavailableException");
    }
    ServiceUnavailableException.isa = isa;
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var SourceDescription;
(function (SourceDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "SourceDescription");
    }
    SourceDescription.isa = isa;
})(SourceDescription = exports.SourceDescription || (exports.SourceDescription = {}));
var SplunkDestinationConfiguration;
(function (SplunkDestinationConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "SplunkDestinationConfiguration");
    }
    SplunkDestinationConfiguration.isa = isa;
})(SplunkDestinationConfiguration = exports.SplunkDestinationConfiguration || (exports.SplunkDestinationConfiguration = {}));
var SplunkDestinationDescription;
(function (SplunkDestinationDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "SplunkDestinationDescription");
    }
    SplunkDestinationDescription.isa = isa;
})(SplunkDestinationDescription = exports.SplunkDestinationDescription || (exports.SplunkDestinationDescription = {}));
var SplunkDestinationUpdate;
(function (SplunkDestinationUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "SplunkDestinationUpdate");
    }
    SplunkDestinationUpdate.isa = isa;
})(SplunkDestinationUpdate = exports.SplunkDestinationUpdate || (exports.SplunkDestinationUpdate = {}));
var SplunkRetryOptions;
(function (SplunkRetryOptions) {
    function isa(o) {
        return smithy_client_1.isa(o, "SplunkRetryOptions");
    }
    SplunkRetryOptions.isa = isa;
})(SplunkRetryOptions = exports.SplunkRetryOptions || (exports.SplunkRetryOptions = {}));
var StartDeliveryStreamEncryptionInput;
(function (StartDeliveryStreamEncryptionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartDeliveryStreamEncryptionInput");
    }
    StartDeliveryStreamEncryptionInput.isa = isa;
})(StartDeliveryStreamEncryptionInput = exports.StartDeliveryStreamEncryptionInput || (exports.StartDeliveryStreamEncryptionInput = {}));
var StartDeliveryStreamEncryptionOutput;
(function (StartDeliveryStreamEncryptionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartDeliveryStreamEncryptionOutput");
    }
    StartDeliveryStreamEncryptionOutput.isa = isa;
})(StartDeliveryStreamEncryptionOutput = exports.StartDeliveryStreamEncryptionOutput || (exports.StartDeliveryStreamEncryptionOutput = {}));
var StopDeliveryStreamEncryptionInput;
(function (StopDeliveryStreamEncryptionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopDeliveryStreamEncryptionInput");
    }
    StopDeliveryStreamEncryptionInput.isa = isa;
})(StopDeliveryStreamEncryptionInput = exports.StopDeliveryStreamEncryptionInput || (exports.StopDeliveryStreamEncryptionInput = {}));
var StopDeliveryStreamEncryptionOutput;
(function (StopDeliveryStreamEncryptionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopDeliveryStreamEncryptionOutput");
    }
    StopDeliveryStreamEncryptionOutput.isa = isa;
})(StopDeliveryStreamEncryptionOutput = exports.StopDeliveryStreamEncryptionOutput || (exports.StopDeliveryStreamEncryptionOutput = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagDeliveryStreamInput;
(function (TagDeliveryStreamInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagDeliveryStreamInput");
    }
    TagDeliveryStreamInput.isa = isa;
})(TagDeliveryStreamInput = exports.TagDeliveryStreamInput || (exports.TagDeliveryStreamInput = {}));
var TagDeliveryStreamOutput;
(function (TagDeliveryStreamOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagDeliveryStreamOutput");
    }
    TagDeliveryStreamOutput.isa = isa;
})(TagDeliveryStreamOutput = exports.TagDeliveryStreamOutput || (exports.TagDeliveryStreamOutput = {}));
var UntagDeliveryStreamInput;
(function (UntagDeliveryStreamInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagDeliveryStreamInput");
    }
    UntagDeliveryStreamInput.isa = isa;
})(UntagDeliveryStreamInput = exports.UntagDeliveryStreamInput || (exports.UntagDeliveryStreamInput = {}));
var UntagDeliveryStreamOutput;
(function (UntagDeliveryStreamOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagDeliveryStreamOutput");
    }
    UntagDeliveryStreamOutput.isa = isa;
})(UntagDeliveryStreamOutput = exports.UntagDeliveryStreamOutput || (exports.UntagDeliveryStreamOutput = {}));
var UpdateDestinationInput;
(function (UpdateDestinationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDestinationInput");
    }
    UpdateDestinationInput.isa = isa;
})(UpdateDestinationInput = exports.UpdateDestinationInput || (exports.UpdateDestinationInput = {}));
var UpdateDestinationOutput;
(function (UpdateDestinationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDestinationOutput");
    }
    UpdateDestinationOutput.isa = isa;
})(UpdateDestinationOutput = exports.UpdateDestinationOutput || (exports.UpdateDestinationOutput = {}));
//# sourceMappingURL=index.js.map