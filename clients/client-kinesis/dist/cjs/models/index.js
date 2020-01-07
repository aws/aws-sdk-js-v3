"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AddTagsToStreamInput;
(function (AddTagsToStreamInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddTagsToStreamInput");
    }
    AddTagsToStreamInput.isa = isa;
})(AddTagsToStreamInput = exports.AddTagsToStreamInput || (exports.AddTagsToStreamInput = {}));
var Consumer;
(function (Consumer) {
    function isa(o) {
        return smithy_client_1.isa(o, "Consumer");
    }
    Consumer.isa = isa;
})(Consumer = exports.Consumer || (exports.Consumer = {}));
var ConsumerDescription;
(function (ConsumerDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConsumerDescription");
    }
    ConsumerDescription.isa = isa;
})(ConsumerDescription = exports.ConsumerDescription || (exports.ConsumerDescription = {}));
var ConsumerStatus;
(function (ConsumerStatus) {
    ConsumerStatus["ACTIVE"] = "ACTIVE";
    ConsumerStatus["CREATING"] = "CREATING";
    ConsumerStatus["DELETING"] = "DELETING";
})(ConsumerStatus = exports.ConsumerStatus || (exports.ConsumerStatus = {}));
var CreateStreamInput;
(function (CreateStreamInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateStreamInput");
    }
    CreateStreamInput.isa = isa;
})(CreateStreamInput = exports.CreateStreamInput || (exports.CreateStreamInput = {}));
var DecreaseStreamRetentionPeriodInput;
(function (DecreaseStreamRetentionPeriodInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DecreaseStreamRetentionPeriodInput");
    }
    DecreaseStreamRetentionPeriodInput.isa = isa;
})(DecreaseStreamRetentionPeriodInput = exports.DecreaseStreamRetentionPeriodInput || (exports.DecreaseStreamRetentionPeriodInput = {}));
var DeleteStreamInput;
(function (DeleteStreamInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteStreamInput");
    }
    DeleteStreamInput.isa = isa;
})(DeleteStreamInput = exports.DeleteStreamInput || (exports.DeleteStreamInput = {}));
var DeregisterStreamConsumerInput;
(function (DeregisterStreamConsumerInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterStreamConsumerInput");
    }
    DeregisterStreamConsumerInput.isa = isa;
})(DeregisterStreamConsumerInput = exports.DeregisterStreamConsumerInput || (exports.DeregisterStreamConsumerInput = {}));
var DescribeLimitsInput;
(function (DescribeLimitsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLimitsInput");
    }
    DescribeLimitsInput.isa = isa;
})(DescribeLimitsInput = exports.DescribeLimitsInput || (exports.DescribeLimitsInput = {}));
var DescribeLimitsOutput;
(function (DescribeLimitsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLimitsOutput");
    }
    DescribeLimitsOutput.isa = isa;
})(DescribeLimitsOutput = exports.DescribeLimitsOutput || (exports.DescribeLimitsOutput = {}));
var DescribeStreamConsumerInput;
(function (DescribeStreamConsumerInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStreamConsumerInput");
    }
    DescribeStreamConsumerInput.isa = isa;
})(DescribeStreamConsumerInput = exports.DescribeStreamConsumerInput || (exports.DescribeStreamConsumerInput = {}));
var DescribeStreamConsumerOutput;
(function (DescribeStreamConsumerOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStreamConsumerOutput");
    }
    DescribeStreamConsumerOutput.isa = isa;
})(DescribeStreamConsumerOutput = exports.DescribeStreamConsumerOutput || (exports.DescribeStreamConsumerOutput = {}));
var DescribeStreamInput;
(function (DescribeStreamInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStreamInput");
    }
    DescribeStreamInput.isa = isa;
})(DescribeStreamInput = exports.DescribeStreamInput || (exports.DescribeStreamInput = {}));
var DescribeStreamOutput;
(function (DescribeStreamOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStreamOutput");
    }
    DescribeStreamOutput.isa = isa;
})(DescribeStreamOutput = exports.DescribeStreamOutput || (exports.DescribeStreamOutput = {}));
var DescribeStreamSummaryInput;
(function (DescribeStreamSummaryInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStreamSummaryInput");
    }
    DescribeStreamSummaryInput.isa = isa;
})(DescribeStreamSummaryInput = exports.DescribeStreamSummaryInput || (exports.DescribeStreamSummaryInput = {}));
var DescribeStreamSummaryOutput;
(function (DescribeStreamSummaryOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStreamSummaryOutput");
    }
    DescribeStreamSummaryOutput.isa = isa;
})(DescribeStreamSummaryOutput = exports.DescribeStreamSummaryOutput || (exports.DescribeStreamSummaryOutput = {}));
var DisableEnhancedMonitoringInput;
(function (DisableEnhancedMonitoringInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisableEnhancedMonitoringInput");
    }
    DisableEnhancedMonitoringInput.isa = isa;
})(DisableEnhancedMonitoringInput = exports.DisableEnhancedMonitoringInput || (exports.DisableEnhancedMonitoringInput = {}));
var EnableEnhancedMonitoringInput;
(function (EnableEnhancedMonitoringInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableEnhancedMonitoringInput");
    }
    EnableEnhancedMonitoringInput.isa = isa;
})(EnableEnhancedMonitoringInput = exports.EnableEnhancedMonitoringInput || (exports.EnableEnhancedMonitoringInput = {}));
var EncryptionType;
(function (EncryptionType) {
    EncryptionType["KMS"] = "KMS";
    EncryptionType["NONE"] = "NONE";
})(EncryptionType = exports.EncryptionType || (exports.EncryptionType = {}));
var EnhancedMetrics;
(function (EnhancedMetrics) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnhancedMetrics");
    }
    EnhancedMetrics.isa = isa;
})(EnhancedMetrics = exports.EnhancedMetrics || (exports.EnhancedMetrics = {}));
var EnhancedMonitoringOutput;
(function (EnhancedMonitoringOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnhancedMonitoringOutput");
    }
    EnhancedMonitoringOutput.isa = isa;
})(EnhancedMonitoringOutput = exports.EnhancedMonitoringOutput || (exports.EnhancedMonitoringOutput = {}));
var ExpiredIteratorException;
(function (ExpiredIteratorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExpiredIteratorException");
    }
    ExpiredIteratorException.isa = isa;
})(ExpiredIteratorException = exports.ExpiredIteratorException || (exports.ExpiredIteratorException = {}));
var ExpiredNextTokenException;
(function (ExpiredNextTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExpiredNextTokenException");
    }
    ExpiredNextTokenException.isa = isa;
})(ExpiredNextTokenException = exports.ExpiredNextTokenException || (exports.ExpiredNextTokenException = {}));
var GetRecordsInput;
(function (GetRecordsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRecordsInput");
    }
    GetRecordsInput.isa = isa;
})(GetRecordsInput = exports.GetRecordsInput || (exports.GetRecordsInput = {}));
var GetRecordsOutput;
(function (GetRecordsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRecordsOutput");
    }
    GetRecordsOutput.isa = isa;
})(GetRecordsOutput = exports.GetRecordsOutput || (exports.GetRecordsOutput = {}));
var GetShardIteratorInput;
(function (GetShardIteratorInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetShardIteratorInput");
    }
    GetShardIteratorInput.isa = isa;
})(GetShardIteratorInput = exports.GetShardIteratorInput || (exports.GetShardIteratorInput = {}));
var GetShardIteratorOutput;
(function (GetShardIteratorOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetShardIteratorOutput");
    }
    GetShardIteratorOutput.isa = isa;
})(GetShardIteratorOutput = exports.GetShardIteratorOutput || (exports.GetShardIteratorOutput = {}));
var HashKeyRange;
(function (HashKeyRange) {
    function isa(o) {
        return smithy_client_1.isa(o, "HashKeyRange");
    }
    HashKeyRange.isa = isa;
})(HashKeyRange = exports.HashKeyRange || (exports.HashKeyRange = {}));
var IncreaseStreamRetentionPeriodInput;
(function (IncreaseStreamRetentionPeriodInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "IncreaseStreamRetentionPeriodInput");
    }
    IncreaseStreamRetentionPeriodInput.isa = isa;
})(IncreaseStreamRetentionPeriodInput = exports.IncreaseStreamRetentionPeriodInput || (exports.IncreaseStreamRetentionPeriodInput = {}));
var InternalFailureException;
(function (InternalFailureException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalFailureException");
    }
    InternalFailureException.isa = isa;
})(InternalFailureException = exports.InternalFailureException || (exports.InternalFailureException = {}));
var InvalidArgumentException;
(function (InvalidArgumentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidArgumentException");
    }
    InvalidArgumentException.isa = isa;
})(InvalidArgumentException = exports.InvalidArgumentException || (exports.InvalidArgumentException = {}));
var KMSAccessDeniedException;
(function (KMSAccessDeniedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "KMSAccessDeniedException");
    }
    KMSAccessDeniedException.isa = isa;
})(KMSAccessDeniedException = exports.KMSAccessDeniedException || (exports.KMSAccessDeniedException = {}));
var KMSDisabledException;
(function (KMSDisabledException) {
    function isa(o) {
        return smithy_client_1.isa(o, "KMSDisabledException");
    }
    KMSDisabledException.isa = isa;
})(KMSDisabledException = exports.KMSDisabledException || (exports.KMSDisabledException = {}));
var KMSInvalidStateException;
(function (KMSInvalidStateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "KMSInvalidStateException");
    }
    KMSInvalidStateException.isa = isa;
})(KMSInvalidStateException = exports.KMSInvalidStateException || (exports.KMSInvalidStateException = {}));
var KMSNotFoundException;
(function (KMSNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "KMSNotFoundException");
    }
    KMSNotFoundException.isa = isa;
})(KMSNotFoundException = exports.KMSNotFoundException || (exports.KMSNotFoundException = {}));
var KMSOptInRequired;
(function (KMSOptInRequired) {
    function isa(o) {
        return smithy_client_1.isa(o, "KMSOptInRequired");
    }
    KMSOptInRequired.isa = isa;
})(KMSOptInRequired = exports.KMSOptInRequired || (exports.KMSOptInRequired = {}));
var KMSThrottlingException;
(function (KMSThrottlingException) {
    function isa(o) {
        return smithy_client_1.isa(o, "KMSThrottlingException");
    }
    KMSThrottlingException.isa = isa;
})(KMSThrottlingException = exports.KMSThrottlingException || (exports.KMSThrottlingException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListShardsInput;
(function (ListShardsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListShardsInput");
    }
    ListShardsInput.isa = isa;
})(ListShardsInput = exports.ListShardsInput || (exports.ListShardsInput = {}));
var ListShardsOutput;
(function (ListShardsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListShardsOutput");
    }
    ListShardsOutput.isa = isa;
})(ListShardsOutput = exports.ListShardsOutput || (exports.ListShardsOutput = {}));
var ListStreamConsumersInput;
(function (ListStreamConsumersInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStreamConsumersInput");
    }
    ListStreamConsumersInput.isa = isa;
})(ListStreamConsumersInput = exports.ListStreamConsumersInput || (exports.ListStreamConsumersInput = {}));
var ListStreamConsumersOutput;
(function (ListStreamConsumersOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStreamConsumersOutput");
    }
    ListStreamConsumersOutput.isa = isa;
})(ListStreamConsumersOutput = exports.ListStreamConsumersOutput || (exports.ListStreamConsumersOutput = {}));
var ListStreamsInput;
(function (ListStreamsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStreamsInput");
    }
    ListStreamsInput.isa = isa;
})(ListStreamsInput = exports.ListStreamsInput || (exports.ListStreamsInput = {}));
var ListStreamsOutput;
(function (ListStreamsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStreamsOutput");
    }
    ListStreamsOutput.isa = isa;
})(ListStreamsOutput = exports.ListStreamsOutput || (exports.ListStreamsOutput = {}));
var ListTagsForStreamInput;
(function (ListTagsForStreamInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForStreamInput");
    }
    ListTagsForStreamInput.isa = isa;
})(ListTagsForStreamInput = exports.ListTagsForStreamInput || (exports.ListTagsForStreamInput = {}));
var ListTagsForStreamOutput;
(function (ListTagsForStreamOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForStreamOutput");
    }
    ListTagsForStreamOutput.isa = isa;
})(ListTagsForStreamOutput = exports.ListTagsForStreamOutput || (exports.ListTagsForStreamOutput = {}));
var MergeShardsInput;
(function (MergeShardsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergeShardsInput");
    }
    MergeShardsInput.isa = isa;
})(MergeShardsInput = exports.MergeShardsInput || (exports.MergeShardsInput = {}));
var MetricsName;
(function (MetricsName) {
    MetricsName["ALL"] = "ALL";
    MetricsName["INCOMING_BYTES"] = "IncomingBytes";
    MetricsName["INCOMING_RECORDS"] = "IncomingRecords";
    MetricsName["ITERATOR_AGE_MILLISECONDS"] = "IteratorAgeMilliseconds";
    MetricsName["OUTGOING_BYTES"] = "OutgoingBytes";
    MetricsName["OUTGOING_RECORDS"] = "OutgoingRecords";
    MetricsName["READ_PROVISIONED_THROUGHPUT_EXCEEDED"] = "ReadProvisionedThroughputExceeded";
    MetricsName["WRITE_PROVISIONED_THROUGHPUT_EXCEEDED"] = "WriteProvisionedThroughputExceeded";
})(MetricsName = exports.MetricsName || (exports.MetricsName = {}));
var ProvisionedThroughputExceededException;
(function (ProvisionedThroughputExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProvisionedThroughputExceededException");
    }
    ProvisionedThroughputExceededException.isa = isa;
})(ProvisionedThroughputExceededException = exports.ProvisionedThroughputExceededException || (exports.ProvisionedThroughputExceededException = {}));
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
var PutRecordsInput;
(function (PutRecordsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRecordsInput");
    }
    PutRecordsInput.isa = isa;
})(PutRecordsInput = exports.PutRecordsInput || (exports.PutRecordsInput = {}));
var PutRecordsOutput;
(function (PutRecordsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRecordsOutput");
    }
    PutRecordsOutput.isa = isa;
})(PutRecordsOutput = exports.PutRecordsOutput || (exports.PutRecordsOutput = {}));
var PutRecordsRequestEntry;
(function (PutRecordsRequestEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRecordsRequestEntry");
    }
    PutRecordsRequestEntry.isa = isa;
})(PutRecordsRequestEntry = exports.PutRecordsRequestEntry || (exports.PutRecordsRequestEntry = {}));
var PutRecordsResultEntry;
(function (PutRecordsResultEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRecordsResultEntry");
    }
    PutRecordsResultEntry.isa = isa;
})(PutRecordsResultEntry = exports.PutRecordsResultEntry || (exports.PutRecordsResultEntry = {}));
var _Record;
(function (_Record) {
    function isa(o) {
        return smithy_client_1.isa(o, "Record");
    }
    _Record.isa = isa;
})(_Record = exports._Record || (exports._Record = {}));
var RegisterStreamConsumerInput;
(function (RegisterStreamConsumerInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterStreamConsumerInput");
    }
    RegisterStreamConsumerInput.isa = isa;
})(RegisterStreamConsumerInput = exports.RegisterStreamConsumerInput || (exports.RegisterStreamConsumerInput = {}));
var RegisterStreamConsumerOutput;
(function (RegisterStreamConsumerOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterStreamConsumerOutput");
    }
    RegisterStreamConsumerOutput.isa = isa;
})(RegisterStreamConsumerOutput = exports.RegisterStreamConsumerOutput || (exports.RegisterStreamConsumerOutput = {}));
var RemoveTagsFromStreamInput;
(function (RemoveTagsFromStreamInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveTagsFromStreamInput");
    }
    RemoveTagsFromStreamInput.isa = isa;
})(RemoveTagsFromStreamInput = exports.RemoveTagsFromStreamInput || (exports.RemoveTagsFromStreamInput = {}));
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
var ScalingType;
(function (ScalingType) {
    ScalingType["UNIFORM_SCALING"] = "UNIFORM_SCALING";
})(ScalingType = exports.ScalingType || (exports.ScalingType = {}));
var SequenceNumberRange;
(function (SequenceNumberRange) {
    function isa(o) {
        return smithy_client_1.isa(o, "SequenceNumberRange");
    }
    SequenceNumberRange.isa = isa;
})(SequenceNumberRange = exports.SequenceNumberRange || (exports.SequenceNumberRange = {}));
var Shard;
(function (Shard) {
    function isa(o) {
        return smithy_client_1.isa(o, "Shard");
    }
    Shard.isa = isa;
})(Shard = exports.Shard || (exports.Shard = {}));
var ShardIteratorType;
(function (ShardIteratorType) {
    ShardIteratorType["AFTER_SEQUENCE_NUMBER"] = "AFTER_SEQUENCE_NUMBER";
    ShardIteratorType["AT_SEQUENCE_NUMBER"] = "AT_SEQUENCE_NUMBER";
    ShardIteratorType["AT_TIMESTAMP"] = "AT_TIMESTAMP";
    ShardIteratorType["LATEST"] = "LATEST";
    ShardIteratorType["TRIM_HORIZON"] = "TRIM_HORIZON";
})(ShardIteratorType = exports.ShardIteratorType || (exports.ShardIteratorType = {}));
var SplitShardInput;
(function (SplitShardInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SplitShardInput");
    }
    SplitShardInput.isa = isa;
})(SplitShardInput = exports.SplitShardInput || (exports.SplitShardInput = {}));
var StartStreamEncryptionInput;
(function (StartStreamEncryptionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartStreamEncryptionInput");
    }
    StartStreamEncryptionInput.isa = isa;
})(StartStreamEncryptionInput = exports.StartStreamEncryptionInput || (exports.StartStreamEncryptionInput = {}));
var StartingPosition;
(function (StartingPosition) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartingPosition");
    }
    StartingPosition.isa = isa;
})(StartingPosition = exports.StartingPosition || (exports.StartingPosition = {}));
var StopStreamEncryptionInput;
(function (StopStreamEncryptionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopStreamEncryptionInput");
    }
    StopStreamEncryptionInput.isa = isa;
})(StopStreamEncryptionInput = exports.StopStreamEncryptionInput || (exports.StopStreamEncryptionInput = {}));
var StreamDescription;
(function (StreamDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "StreamDescription");
    }
    StreamDescription.isa = isa;
})(StreamDescription = exports.StreamDescription || (exports.StreamDescription = {}));
var StreamDescriptionSummary;
(function (StreamDescriptionSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "StreamDescriptionSummary");
    }
    StreamDescriptionSummary.isa = isa;
})(StreamDescriptionSummary = exports.StreamDescriptionSummary || (exports.StreamDescriptionSummary = {}));
var StreamStatus;
(function (StreamStatus) {
    StreamStatus["ACTIVE"] = "ACTIVE";
    StreamStatus["CREATING"] = "CREATING";
    StreamStatus["DELETING"] = "DELETING";
    StreamStatus["UPDATING"] = "UPDATING";
})(StreamStatus = exports.StreamStatus || (exports.StreamStatus = {}));
var SubscribeToShardEvent;
(function (SubscribeToShardEvent) {
    function isa(o) {
        return smithy_client_1.isa(o, "SubscribeToShardEvent");
    }
    SubscribeToShardEvent.isa = isa;
})(SubscribeToShardEvent = exports.SubscribeToShardEvent || (exports.SubscribeToShardEvent = {}));
var SubscribeToShardEventStream;
(function (SubscribeToShardEventStream) {
    function visit(value, visitor) {
        if (value.InternalFailureException !== undefined)
            return visitor.InternalFailureException(value.InternalFailureException);
        if (value.KMSAccessDeniedException !== undefined)
            return visitor.KMSAccessDeniedException(value.KMSAccessDeniedException);
        if (value.KMSDisabledException !== undefined)
            return visitor.KMSDisabledException(value.KMSDisabledException);
        if (value.KMSInvalidStateException !== undefined)
            return visitor.KMSInvalidStateException(value.KMSInvalidStateException);
        if (value.KMSNotFoundException !== undefined)
            return visitor.KMSNotFoundException(value.KMSNotFoundException);
        if (value.KMSOptInRequired !== undefined)
            return visitor.KMSOptInRequired(value.KMSOptInRequired);
        if (value.KMSThrottlingException !== undefined)
            return visitor.KMSThrottlingException(value.KMSThrottlingException);
        if (value.ResourceInUseException !== undefined)
            return visitor.ResourceInUseException(value.ResourceInUseException);
        if (value.ResourceNotFoundException !== undefined)
            return visitor.ResourceNotFoundException(value.ResourceNotFoundException);
        if (value.SubscribeToShardEvent !== undefined)
            return visitor.SubscribeToShardEvent(value.SubscribeToShardEvent);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    }
    SubscribeToShardEventStream.visit = visit;
})(SubscribeToShardEventStream = exports.SubscribeToShardEventStream || (exports.SubscribeToShardEventStream = {}));
var SubscribeToShardInput;
(function (SubscribeToShardInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SubscribeToShardInput");
    }
    SubscribeToShardInput.isa = isa;
})(SubscribeToShardInput = exports.SubscribeToShardInput || (exports.SubscribeToShardInput = {}));
var SubscribeToShardOutput;
(function (SubscribeToShardOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SubscribeToShardOutput");
    }
    SubscribeToShardOutput.isa = isa;
})(SubscribeToShardOutput = exports.SubscribeToShardOutput || (exports.SubscribeToShardOutput = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var UpdateShardCountInput;
(function (UpdateShardCountInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateShardCountInput");
    }
    UpdateShardCountInput.isa = isa;
})(UpdateShardCountInput = exports.UpdateShardCountInput || (exports.UpdateShardCountInput = {}));
var UpdateShardCountOutput;
(function (UpdateShardCountOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateShardCountOutput");
    }
    UpdateShardCountOutput.isa = isa;
})(UpdateShardCountOutput = exports.UpdateShardCountOutput || (exports.UpdateShardCountOutput = {}));
//# sourceMappingURL=index.js.map