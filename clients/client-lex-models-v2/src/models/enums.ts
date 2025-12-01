// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AudioRecognitionStrategy = {
  UseSlotValuesAsCustomVocabulary: "UseSlotValuesAsCustomVocabulary",
} as const;
/**
 * @public
 */
export type AudioRecognitionStrategy = (typeof AudioRecognitionStrategy)[keyof typeof AudioRecognitionStrategy];

/**
 * @public
 * @enum
 */
export const AggregatedUtterancesFilterName = {
  Utterance: "Utterance",
} as const;
/**
 * @public
 */
export type AggregatedUtterancesFilterName =
  (typeof AggregatedUtterancesFilterName)[keyof typeof AggregatedUtterancesFilterName];

/**
 * @public
 * @enum
 */
export const AggregatedUtterancesFilterOperator = {
  Contains: "CO",
  Equals: "EQ",
} as const;
/**
 * @public
 */
export type AggregatedUtterancesFilterOperator =
  (typeof AggregatedUtterancesFilterOperator)[keyof typeof AggregatedUtterancesFilterOperator];

/**
 * @public
 * @enum
 */
export const AggregatedUtterancesSortAttribute = {
  HitCount: "HitCount",
  MissedCount: "MissedCount",
} as const;
/**
 * @public
 */
export type AggregatedUtterancesSortAttribute =
  (typeof AggregatedUtterancesSortAttribute)[keyof typeof AggregatedUtterancesSortAttribute];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const AnalyticsInterval = {
  OneDay: "OneDay",
  OneHour: "OneHour",
} as const;
/**
 * @public
 */
export type AnalyticsInterval = (typeof AnalyticsInterval)[keyof typeof AnalyticsInterval];

/**
 * @public
 * @enum
 */
export const AnalyticsBinByName = {
  ConversationStartTime: "ConversationStartTime",
  UtteranceTimestamp: "UtteranceTimestamp",
} as const;
/**
 * @public
 */
export type AnalyticsBinByName = (typeof AnalyticsBinByName)[keyof typeof AnalyticsBinByName];

/**
 * @public
 * @enum
 */
export const AnalyticsSortOrder = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;
/**
 * @public
 */
export type AnalyticsSortOrder = (typeof AnalyticsSortOrder)[keyof typeof AnalyticsSortOrder];

/**
 * @public
 * @enum
 */
export const AnalyticsCommonFilterName = {
  BotAliasId: "BotAliasId",
  BotVersion: "BotVersion",
  Channel: "Channel",
  LocaleId: "LocaleId",
  Modality: "Modality",
} as const;
/**
 * @public
 */
export type AnalyticsCommonFilterName = (typeof AnalyticsCommonFilterName)[keyof typeof AnalyticsCommonFilterName];

/**
 * @public
 * @enum
 */
export const AnalyticsFilterOperator = {
  Equals: "EQ",
  GreaterThan: "GT",
  LessThan: "LT",
} as const;
/**
 * @public
 */
export type AnalyticsFilterOperator = (typeof AnalyticsFilterOperator)[keyof typeof AnalyticsFilterOperator];

/**
 * @public
 * @enum
 */
export const AnalyticsIntentField = {
  IntentEndState: "IntentEndState",
  IntentLevel: "IntentLevel",
  IntentName: "IntentName",
} as const;
/**
 * @public
 */
export type AnalyticsIntentField = (typeof AnalyticsIntentField)[keyof typeof AnalyticsIntentField];

/**
 * @public
 * @enum
 */
export const AnalyticsIntentFilterName = {
  BotAliasId: "BotAliasId",
  BotVersion: "BotVersion",
  Channel: "Channel",
  IntentEndState: "IntentEndState",
  IntentName: "IntentName",
  LocaleId: "LocaleId",
  Modality: "Modality",
  OriginatingRequestId: "OriginatingRequestId",
  SessionId: "SessionId",
} as const;
/**
 * @public
 */
export type AnalyticsIntentFilterName = (typeof AnalyticsIntentFilterName)[keyof typeof AnalyticsIntentFilterName];

/**
 * @public
 * @enum
 */
export const AnalyticsIntentMetricName = {
  Count: "Count",
  Dropped: "Dropped",
  Failure: "Failure",
  Success: "Success",
  Switched: "Switched",
} as const;
/**
 * @public
 */
export type AnalyticsIntentMetricName = (typeof AnalyticsIntentMetricName)[keyof typeof AnalyticsIntentMetricName];

/**
 * @public
 * @enum
 */
export const AnalyticsMetricStatistic = {
  Avg: "Avg",
  Max: "Max",
  Sum: "Sum",
} as const;
/**
 * @public
 */
export type AnalyticsMetricStatistic = (typeof AnalyticsMetricStatistic)[keyof typeof AnalyticsMetricStatistic];

/**
 * @public
 * @enum
 */
export const AnalyticsNodeType = {
  Exit: "Exit",
  Inner: "Inner",
} as const;
/**
 * @public
 */
export type AnalyticsNodeType = (typeof AnalyticsNodeType)[keyof typeof AnalyticsNodeType];

/**
 * @public
 * @enum
 */
export const AnalyticsIntentStageField = {
  IntentStageName: "IntentStageName",
  SwitchedToIntent: "SwitchedToIntent",
} as const;
/**
 * @public
 */
export type AnalyticsIntentStageField = (typeof AnalyticsIntentStageField)[keyof typeof AnalyticsIntentStageField];

/**
 * @public
 * @enum
 */
export const AnalyticsIntentStageFilterName = {
  BotAliasId: "BotAliasId",
  BotVersion: "BotVersion",
  Channel: "Channel",
  IntentName: "IntentName",
  IntentStageName: "IntentStageName",
  LocaleId: "LocaleId",
  Modality: "Modality",
  OriginatingRequestId: "OriginatingRequestId",
  SessionId: "SessionId",
} as const;
/**
 * @public
 */
export type AnalyticsIntentStageFilterName =
  (typeof AnalyticsIntentStageFilterName)[keyof typeof AnalyticsIntentStageFilterName];

/**
 * @public
 * @enum
 */
export const AnalyticsIntentStageMetricName = {
  Count: "Count",
  Dropped: "Dropped",
  Failed: "Failed",
  Retry: "Retry",
  Success: "Success",
} as const;
/**
 * @public
 */
export type AnalyticsIntentStageMetricName =
  (typeof AnalyticsIntentStageMetricName)[keyof typeof AnalyticsIntentStageMetricName];

/**
 * @public
 * @enum
 */
export const AnalyticsModality = {
  DTMF: "DTMF",
  MultiMode: "MultiMode",
  Speech: "Speech",
  Text: "Text",
} as const;
/**
 * @public
 */
export type AnalyticsModality = (typeof AnalyticsModality)[keyof typeof AnalyticsModality];

/**
 * @public
 * @enum
 */
export const AnalyticsSessionField = {
  ConversationEndState: "ConversationEndState",
  LocaleId: "LocaleId",
} as const;
/**
 * @public
 */
export type AnalyticsSessionField = (typeof AnalyticsSessionField)[keyof typeof AnalyticsSessionField];

/**
 * @public
 * @enum
 */
export const AnalyticsSessionFilterName = {
  BotAliasId: "BotAliasId",
  BotVersion: "BotVersion",
  Channel: "Channel",
  ConversationEndState: "ConversationEndState",
  Duration: "Duration",
  IntentPath: "IntentPath",
  LocaleId: "LocaleId",
  Modality: "Modality",
  OriginatingRequestId: "OriginatingRequestId",
  SessionId: "SessionId",
} as const;
/**
 * @public
 */
export type AnalyticsSessionFilterName = (typeof AnalyticsSessionFilterName)[keyof typeof AnalyticsSessionFilterName];

/**
 * @public
 * @enum
 */
export const AnalyticsSessionMetricName = {
  Concurrency: "Concurrency",
  Count: "Count",
  Dropped: "Dropped",
  Duration: "Duration",
  Failure: "Failure",
  Success: "Success",
  TurnsPerConversation: "TurnsPerConversation",
} as const;
/**
 * @public
 */
export type AnalyticsSessionMetricName = (typeof AnalyticsSessionMetricName)[keyof typeof AnalyticsSessionMetricName];

/**
 * @public
 * @enum
 */
export const AnalyticsSessionSortByName = {
  ConversationStartTime: "ConversationStartTime",
  Duration: "Duration",
  NumberOfTurns: "NumberOfTurns",
} as const;
/**
 * @public
 */
export type AnalyticsSessionSortByName = (typeof AnalyticsSessionSortByName)[keyof typeof AnalyticsSessionSortByName];

/**
 * @public
 * @enum
 */
export const AnalyticsUtteranceAttributeName = {
  LastUsedIntent: "LastUsedIntent",
} as const;
/**
 * @public
 */
export type AnalyticsUtteranceAttributeName =
  (typeof AnalyticsUtteranceAttributeName)[keyof typeof AnalyticsUtteranceAttributeName];

/**
 * @public
 * @enum
 */
export const AnalyticsUtteranceField = {
  UtteranceState: "UtteranceState",
  UtteranceText: "UtteranceText",
} as const;
/**
 * @public
 */
export type AnalyticsUtteranceField = (typeof AnalyticsUtteranceField)[keyof typeof AnalyticsUtteranceField];

/**
 * @public
 * @enum
 */
export const AnalyticsUtteranceFilterName = {
  BotAliasId: "BotAliasId",
  BotVersion: "BotVersion",
  Channel: "Channel",
  LocaleId: "LocaleId",
  Modality: "Modality",
  OriginatingRequestId: "OriginatingRequestId",
  SessionId: "SessionId",
  UtteranceState: "UtteranceState",
  UtteranceText: "UtteranceText",
} as const;
/**
 * @public
 */
export type AnalyticsUtteranceFilterName =
  (typeof AnalyticsUtteranceFilterName)[keyof typeof AnalyticsUtteranceFilterName];

/**
 * @public
 * @enum
 */
export const AnalyticsUtteranceMetricName = {
  Count: "Count",
  Detected: "Detected",
  Missed: "Missed",
  UtteranceTimestamp: "UtteranceTimestamp",
} as const;
/**
 * @public
 */
export type AnalyticsUtteranceMetricName =
  (typeof AnalyticsUtteranceMetricName)[keyof typeof AnalyticsUtteranceMetricName];

/**
 * @public
 * @enum
 */
export const AnalyticsUtteranceSortByName = {
  UtteranceTimestamp: "UtteranceTimestamp",
} as const;
/**
 * @public
 */
export type AnalyticsUtteranceSortByName =
  (typeof AnalyticsUtteranceSortByName)[keyof typeof AnalyticsUtteranceSortByName];

/**
 * @public
 * @enum
 */
export const AssistedNluMode = {
  Fallback: "Fallback",
  Primary: "Primary",
} as const;
/**
 * @public
 */
export type AssistedNluMode = (typeof AssistedNluMode)[keyof typeof AssistedNluMode];

/**
 * @public
 * @enum
 */
export const AssociatedTranscriptFilterName = {
  IntentId: "IntentId",
  SlotTypeId: "SlotTypeId",
} as const;
/**
 * @public
 */
export type AssociatedTranscriptFilterName =
  (typeof AssociatedTranscriptFilterName)[keyof typeof AssociatedTranscriptFilterName];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  DUPLICATE_INPUT: "DUPLICATE_INPUT",
  INTERNAL_SERVER_FAILURE: "INTERNAL_SERVER_FAILURE",
  RESOURCE_ALREADY_EXISTS: "RESOURCE_ALREADY_EXISTS",
  RESOURCE_DOES_NOT_EXIST: "RESOURCE_DOES_NOT_EXIST",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const BedrockTraceStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type BedrockTraceStatus = (typeof BedrockTraceStatus)[keyof typeof BedrockTraceStatus];

/**
 * @public
 * @enum
 */
export const BotAliasReplicationStatus = {
  Available: "Available",
  Creating: "Creating",
  Deleting: "Deleting",
  Failed: "Failed",
  Updating: "Updating",
} as const;
/**
 * @public
 */
export type BotAliasReplicationStatus = (typeof BotAliasReplicationStatus)[keyof typeof BotAliasReplicationStatus];

/**
 * @public
 * @enum
 */
export const BotAliasStatus = {
  Available: "Available",
  Creating: "Creating",
  Deleting: "Deleting",
  Failed: "Failed",
} as const;
/**
 * @public
 */
export type BotAliasStatus = (typeof BotAliasStatus)[keyof typeof BotAliasStatus];

/**
 * @public
 * @enum
 */
export const BotFilterName = {
  BotName: "BotName",
  BotType: "BotType",
} as const;
/**
 * @public
 */
export type BotFilterName = (typeof BotFilterName)[keyof typeof BotFilterName];

/**
 * @public
 * @enum
 */
export const BotFilterOperator = {
  Contains: "CO",
  Equals: "EQ",
  NotEquals: "NE",
} as const;
/**
 * @public
 */
export type BotFilterOperator = (typeof BotFilterOperator)[keyof typeof BotFilterOperator];

/**
 * @public
 * @enum
 */
export const BotLocaleFilterName = {
  BotLocaleName: "BotLocaleName",
} as const;
/**
 * @public
 */
export type BotLocaleFilterName = (typeof BotLocaleFilterName)[keyof typeof BotLocaleFilterName];

/**
 * @public
 * @enum
 */
export const BotLocaleFilterOperator = {
  Contains: "CO",
  Equals: "EQ",
} as const;
/**
 * @public
 */
export type BotLocaleFilterOperator = (typeof BotLocaleFilterOperator)[keyof typeof BotLocaleFilterOperator];

/**
 * @public
 * @enum
 */
export const SpeechDetectionSensitivity = {
  Default: "Default",
  HighNoiseTolerance: "HighNoiseTolerance",
  MaximumNoiseTolerance: "MaximumNoiseTolerance",
} as const;
/**
 * @public
 */
export type SpeechDetectionSensitivity = (typeof SpeechDetectionSensitivity)[keyof typeof SpeechDetectionSensitivity];

/**
 * @public
 * @enum
 */
export const SpeechModelPreference = {
  Deepgram: "Deepgram",
  Neural: "Neural",
  Standard: "Standard",
} as const;
/**
 * @public
 */
export type SpeechModelPreference = (typeof SpeechModelPreference)[keyof typeof SpeechModelPreference];

/**
 * @public
 * @enum
 */
export const VoiceEngine = {
  Generative: "generative",
  LongForm: "long-form",
  Neural: "neural",
  Standard: "standard",
} as const;
/**
 * @public
 */
export type VoiceEngine = (typeof VoiceEngine)[keyof typeof VoiceEngine];

/**
 * @public
 * @enum
 */
export const BotLocaleSortAttribute = {
  BotLocaleName: "BotLocaleName",
} as const;
/**
 * @public
 */
export type BotLocaleSortAttribute = (typeof BotLocaleSortAttribute)[keyof typeof BotLocaleSortAttribute];

/**
 * @public
 * @enum
 */
export const BotLocaleStatus = {
  Building: "Building",
  Built: "Built",
  Creating: "Creating",
  Deleting: "Deleting",
  Failed: "Failed",
  Importing: "Importing",
  NotBuilt: "NotBuilt",
  Processing: "Processing",
  ReadyExpressTesting: "ReadyExpressTesting",
} as const;
/**
 * @public
 */
export type BotLocaleStatus = (typeof BotLocaleStatus)[keyof typeof BotLocaleStatus];

/**
 * @public
 * @enum
 */
export const BotRecommendationStatus = {
  Available: "Available",
  Deleted: "Deleted",
  Deleting: "Deleting",
  Downloading: "Downloading",
  Failed: "Failed",
  Processing: "Processing",
  Stopped: "Stopped",
  Stopping: "Stopping",
  Updating: "Updating",
} as const;
/**
 * @public
 */
export type BotRecommendationStatus = (typeof BotRecommendationStatus)[keyof typeof BotRecommendationStatus];

/**
 * @public
 * @enum
 */
export const BotReplicaStatus = {
  Deleting: "Deleting",
  Enabled: "Enabled",
  Enabling: "Enabling",
  Failed: "Failed",
} as const;
/**
 * @public
 */
export type BotReplicaStatus = (typeof BotReplicaStatus)[keyof typeof BotReplicaStatus];

/**
 * @public
 * @enum
 */
export const BotSortAttribute = {
  BotName: "BotName",
} as const;
/**
 * @public
 */
export type BotSortAttribute = (typeof BotSortAttribute)[keyof typeof BotSortAttribute];

/**
 * @public
 * @enum
 */
export const BotStatus = {
  Available: "Available",
  Creating: "Creating",
  Deleting: "Deleting",
  Failed: "Failed",
  Importing: "Importing",
  Inactive: "Inactive",
  Updating: "Updating",
  Versioning: "Versioning",
} as const;
/**
 * @public
 */
export type BotStatus = (typeof BotStatus)[keyof typeof BotStatus];

/**
 * @public
 * @enum
 */
export const BotType = {
  Bot: "Bot",
  BotNetwork: "BotNetwork",
} as const;
/**
 * @public
 */
export type BotType = (typeof BotType)[keyof typeof BotType];

/**
 * @public
 * @enum
 */
export const BotVersionReplicaSortAttribute = {
  BotVersion: "BotVersion",
} as const;
/**
 * @public
 */
export type BotVersionReplicaSortAttribute =
  (typeof BotVersionReplicaSortAttribute)[keyof typeof BotVersionReplicaSortAttribute];

/**
 * @public
 * @enum
 */
export const BotVersionReplicationStatus = {
  Available: "Available",
  Creating: "Creating",
  Deleting: "Deleting",
  Failed: "Failed",
} as const;
/**
 * @public
 */
export type BotVersionReplicationStatus =
  (typeof BotVersionReplicationStatus)[keyof typeof BotVersionReplicationStatus];

/**
 * @public
 * @enum
 */
export const BotVersionSortAttribute = {
  BotVersion: "BotVersion",
} as const;
/**
 * @public
 */
export type BotVersionSortAttribute = (typeof BotVersionSortAttribute)[keyof typeof BotVersionSortAttribute];

/**
 * @public
 * @enum
 */
export const BuiltInIntentSortAttribute = {
  IntentSignature: "IntentSignature",
} as const;
/**
 * @public
 */
export type BuiltInIntentSortAttribute = (typeof BuiltInIntentSortAttribute)[keyof typeof BuiltInIntentSortAttribute];

/**
 * @public
 * @enum
 */
export const BuiltInSlotTypeSortAttribute = {
  SlotTypeSignature: "SlotTypeSignature",
} as const;
/**
 * @public
 */
export type BuiltInSlotTypeSortAttribute =
  (typeof BuiltInSlotTypeSortAttribute)[keyof typeof BuiltInSlotTypeSortAttribute];

/**
 * @public
 * @enum
 */
export const DialogActionType = {
  CloseIntent: "CloseIntent",
  ConfirmIntent: "ConfirmIntent",
  ElicitIntent: "ElicitIntent",
  ElicitSlot: "ElicitSlot",
  EndConversation: "EndConversation",
  EvaluateConditional: "EvaluateConditional",
  FulfillIntent: "FulfillIntent",
  InvokeDialogCodeHook: "InvokeDialogCodeHook",
  StartIntent: "StartIntent",
} as const;
/**
 * @public
 */
export type DialogActionType = (typeof DialogActionType)[keyof typeof DialogActionType];

/**
 * @public
 * @enum
 */
export const SlotShape = {
  List: "List",
  Scalar: "Scalar",
} as const;
/**
 * @public
 */
export type SlotShape = (typeof SlotShape)[keyof typeof SlotShape];

/**
 * @public
 * @enum
 */
export const ConversationEndState = {
  Dropped: "Dropped",
  Failure: "Failure",
  Success: "Success",
} as const;
/**
 * @public
 */
export type ConversationEndState = (typeof ConversationEndState)[keyof typeof ConversationEndState];

/**
 * @public
 * @enum
 */
export const TestResultMatchStatus = {
  ExecutionError: "ExecutionError",
  Matched: "Matched",
  Mismatched: "Mismatched",
} as const;
/**
 * @public
 */
export type TestResultMatchStatus = (typeof TestResultMatchStatus)[keyof typeof TestResultMatchStatus];

/**
 * @public
 * @enum
 */
export const ConversationLogsInputModeFilter = {
  Speech: "Speech",
  Text: "Text",
} as const;
/**
 * @public
 */
export type ConversationLogsInputModeFilter =
  (typeof ConversationLogsInputModeFilter)[keyof typeof ConversationLogsInputModeFilter];

/**
 * @public
 * @enum
 */
export const ImportExportFileFormat = {
  CSV: "CSV",
  LexJson: "LexJson",
  TSV: "TSV",
} as const;
/**
 * @public
 */
export type ImportExportFileFormat = (typeof ImportExportFileFormat)[keyof typeof ImportExportFileFormat];

/**
 * @public
 * @enum
 */
export const ExportStatus = {
  Completed: "Completed",
  Deleting: "Deleting",
  Failed: "Failed",
  InProgress: "InProgress",
} as const;
/**
 * @public
 */
export type ExportStatus = (typeof ExportStatus)[keyof typeof ExportStatus];

/**
 * @public
 * @enum
 */
export const MessageSelectionStrategy = {
  Ordered: "Ordered",
  Random: "Random",
} as const;
/**
 * @public
 */
export type MessageSelectionStrategy = (typeof MessageSelectionStrategy)[keyof typeof MessageSelectionStrategy];

/**
 * @public
 * @enum
 */
export const PromptAttempt = {
  Initial: "Initial",
  Retry1: "Retry1",
  Retry2: "Retry2",
  Retry3: "Retry3",
  Retry4: "Retry4",
  Retry5: "Retry5",
} as const;
/**
 * @public
 */
export type PromptAttempt = (typeof PromptAttempt)[keyof typeof PromptAttempt];

/**
 * @public
 * @enum
 */
export const Effect = {
  Allow: "Allow",
  Deny: "Deny",
} as const;
/**
 * @public
 */
export type Effect = (typeof Effect)[keyof typeof Effect];

/**
 * @public
 * @enum
 */
export const ObfuscationSettingType = {
  DefaultObfuscation: "DefaultObfuscation",
  None: "None",
} as const;
/**
 * @public
 */
export type ObfuscationSettingType = (typeof ObfuscationSettingType)[keyof typeof ObfuscationSettingType];

/**
 * @public
 * @enum
 */
export const SlotConstraint = {
  Optional: "Optional",
  Required: "Required",
} as const;
/**
 * @public
 */
export type SlotConstraint = (typeof SlotConstraint)[keyof typeof SlotConstraint];

/**
 * @public
 * @enum
 */
export const SlotResolutionStrategy = {
  Default: "Default",
  EnhancedFallback: "EnhancedFallback",
} as const;
/**
 * @public
 */
export type SlotResolutionStrategy = (typeof SlotResolutionStrategy)[keyof typeof SlotResolutionStrategy];

/**
 * @public
 * @enum
 */
export const SlotValueResolutionStrategy = {
  Concatenation: "Concatenation",
  OriginalValue: "OriginalValue",
  TopResolution: "TopResolution",
} as const;
/**
 * @public
 */
export type SlotValueResolutionStrategy =
  (typeof SlotValueResolutionStrategy)[keyof typeof SlotValueResolutionStrategy];

/**
 * @public
 * @enum
 */
export const CustomVocabularyStatus = {
  Creating: "Creating",
  Deleting: "Deleting",
  Exporting: "Exporting",
  Importing: "Importing",
  Ready: "Ready",
} as const;
/**
 * @public
 */
export type CustomVocabularyStatus = (typeof CustomVocabularyStatus)[keyof typeof CustomVocabularyStatus];

/**
 * @public
 * @enum
 */
export const ImportStatus = {
  Completed: "Completed",
  Deleting: "Deleting",
  Failed: "Failed",
  InProgress: "InProgress",
} as const;
/**
 * @public
 */
export type ImportStatus = (typeof ImportStatus)[keyof typeof ImportStatus];

/**
 * @public
 * @enum
 */
export const TranscriptFormat = {
  Lex: "Lex",
} as const;
/**
 * @public
 */
export type TranscriptFormat = (typeof TranscriptFormat)[keyof typeof TranscriptFormat];

/**
 * @public
 * @enum
 */
export const GenerationStatus = {
  Complete: "Complete",
  Failed: "Failed",
  InProgress: "InProgress",
} as const;
/**
 * @public
 */
export type GenerationStatus = (typeof GenerationStatus)[keyof typeof GenerationStatus];

/**
 * @public
 * @enum
 */
export const MergeStrategy = {
  Append: "Append",
  FailOnConflict: "FailOnConflict",
  Overwrite: "Overwrite",
} as const;
/**
 * @public
 */
export type MergeStrategy = (typeof MergeStrategy)[keyof typeof MergeStrategy];

/**
 * @public
 * @enum
 */
export const TestSetModality = {
  Audio: "Audio",
  Text: "Text",
} as const;
/**
 * @public
 */
export type TestSetModality = (typeof TestSetModality)[keyof typeof TestSetModality];

/**
 * @public
 * @enum
 */
export const TestExecutionApiMode = {
  NonStreaming: "NonStreaming",
  Streaming: "Streaming",
} as const;
/**
 * @public
 */
export type TestExecutionApiMode = (typeof TestExecutionApiMode)[keyof typeof TestExecutionApiMode];

/**
 * @public
 * @enum
 */
export const TestExecutionModality = {
  Audio: "Audio",
  Text: "Text",
} as const;
/**
 * @public
 */
export type TestExecutionModality = (typeof TestExecutionModality)[keyof typeof TestExecutionModality];

/**
 * @public
 * @enum
 */
export const TestExecutionStatus = {
  Completed: "Completed",
  Failed: "Failed",
  InProgress: "InProgress",
  Pending: "Pending",
  Stopped: "Stopped",
  Stopping: "Stopping",
  Waiting: "Waiting",
} as const;
/**
 * @public
 */
export type TestExecutionStatus = (typeof TestExecutionStatus)[keyof typeof TestExecutionStatus];

/**
 * @public
 * @enum
 */
export const TestSetStatus = {
  Deleting: "Deleting",
  Importing: "Importing",
  PendingAnnotation: "PendingAnnotation",
  Ready: "Ready",
  ValidationError: "ValidationError",
} as const;
/**
 * @public
 */
export type TestSetStatus = (typeof TestSetStatus)[keyof typeof TestSetStatus];

/**
 * @public
 * @enum
 */
export const TestSetDiscrepancyReportStatus = {
  Completed: "Completed",
  Failed: "Failed",
  InProgress: "InProgress",
} as const;
/**
 * @public
 */
export type TestSetDiscrepancyReportStatus =
  (typeof TestSetDiscrepancyReportStatus)[keyof typeof TestSetDiscrepancyReportStatus];

/**
 * @public
 * @enum
 */
export const TestSetGenerationStatus = {
  Failed: "Failed",
  Generating: "Generating",
  Pending: "Pending",
  Ready: "Ready",
} as const;
/**
 * @public
 */
export type TestSetGenerationStatus = (typeof TestSetGenerationStatus)[keyof typeof TestSetGenerationStatus];

/**
 * @public
 * @enum
 */
export const ExportFilterName = {
  ExportResourceType: "ExportResourceType",
} as const;
/**
 * @public
 */
export type ExportFilterName = (typeof ExportFilterName)[keyof typeof ExportFilterName];

/**
 * @public
 * @enum
 */
export const ExportFilterOperator = {
  Contains: "CO",
  Equals: "EQ",
} as const;
/**
 * @public
 */
export type ExportFilterOperator = (typeof ExportFilterOperator)[keyof typeof ExportFilterOperator];

/**
 * @public
 * @enum
 */
export const ExportSortAttribute = {
  LastUpdatedDateTime: "LastUpdatedDateTime",
} as const;
/**
 * @public
 */
export type ExportSortAttribute = (typeof ExportSortAttribute)[keyof typeof ExportSortAttribute];

/**
 * @public
 * @enum
 */
export const GenerationSortByAttribute = {
  creationStartTime: "creationStartTime",
  lastUpdatedTime: "lastUpdatedTime",
} as const;
/**
 * @public
 */
export type GenerationSortByAttribute = (typeof GenerationSortByAttribute)[keyof typeof GenerationSortByAttribute];

/**
 * @public
 * @enum
 */
export const ImportFilterName = {
  ImportResourceType: "ImportResourceType",
} as const;
/**
 * @public
 */
export type ImportFilterName = (typeof ImportFilterName)[keyof typeof ImportFilterName];

/**
 * @public
 * @enum
 */
export const ImportFilterOperator = {
  Contains: "CO",
  Equals: "EQ",
} as const;
/**
 * @public
 */
export type ImportFilterOperator = (typeof ImportFilterOperator)[keyof typeof ImportFilterOperator];

/**
 * @public
 * @enum
 */
export const ImportResourceType = {
  Bot: "Bot",
  BotLocale: "BotLocale",
  CustomVocabulary: "CustomVocabulary",
  TestSet: "TestSet",
} as const;
/**
 * @public
 */
export type ImportResourceType = (typeof ImportResourceType)[keyof typeof ImportResourceType];

/**
 * @public
 * @enum
 */
export const ImportSortAttribute = {
  LastUpdatedDateTime: "LastUpdatedDateTime",
} as const;
/**
 * @public
 */
export type ImportSortAttribute = (typeof ImportSortAttribute)[keyof typeof ImportSortAttribute];

/**
 * @public
 * @enum
 */
export const IntentFilterName = {
  IntentName: "IntentName",
} as const;
/**
 * @public
 */
export type IntentFilterName = (typeof IntentFilterName)[keyof typeof IntentFilterName];

/**
 * @public
 * @enum
 */
export const IntentFilterOperator = {
  Contains: "CO",
  Equals: "EQ",
} as const;
/**
 * @public
 */
export type IntentFilterOperator = (typeof IntentFilterOperator)[keyof typeof IntentFilterOperator];

/**
 * @public
 * @enum
 */
export const IntentSortAttribute = {
  IntentName: "IntentName",
  LastUpdatedDateTime: "LastUpdatedDateTime",
} as const;
/**
 * @public
 */
export type IntentSortAttribute = (typeof IntentSortAttribute)[keyof typeof IntentSortAttribute];

/**
 * @public
 * @enum
 */
export const IntentState = {
  Failed: "Failed",
  Fulfilled: "Fulfilled",
  FulfillmentInProgress: "FulfillmentInProgress",
  InProgress: "InProgress",
  ReadyForFulfillment: "ReadyForFulfillment",
  Waiting: "Waiting",
} as const;
/**
 * @public
 */
export type IntentState = (typeof IntentState)[keyof typeof IntentState];

/**
 * @public
 * @enum
 */
export const TimeDimension = {
  Days: "Days",
  Hours: "Hours",
  Weeks: "Weeks",
} as const;
/**
 * @public
 */
export type TimeDimension = (typeof TimeDimension)[keyof typeof TimeDimension];

/**
 * @public
 * @enum
 */
export const SlotFilterName = {
  SlotName: "SlotName",
} as const;
/**
 * @public
 */
export type SlotFilterName = (typeof SlotFilterName)[keyof typeof SlotFilterName];

/**
 * @public
 * @enum
 */
export const SlotFilterOperator = {
  Contains: "CO",
  Equals: "EQ",
} as const;
/**
 * @public
 */
export type SlotFilterOperator = (typeof SlotFilterOperator)[keyof typeof SlotFilterOperator];

/**
 * @public
 * @enum
 */
export const SlotSortAttribute = {
  LastUpdatedDateTime: "LastUpdatedDateTime",
  SlotName: "SlotName",
} as const;
/**
 * @public
 */
export type SlotSortAttribute = (typeof SlotSortAttribute)[keyof typeof SlotSortAttribute];

/**
 * @public
 * @enum
 */
export const SlotTypeFilterName = {
  ExternalSourceType: "ExternalSourceType",
  SlotTypeName: "SlotTypeName",
} as const;
/**
 * @public
 */
export type SlotTypeFilterName = (typeof SlotTypeFilterName)[keyof typeof SlotTypeFilterName];

/**
 * @public
 * @enum
 */
export const SlotTypeFilterOperator = {
  Contains: "CO",
  Equals: "EQ",
} as const;
/**
 * @public
 */
export type SlotTypeFilterOperator = (typeof SlotTypeFilterOperator)[keyof typeof SlotTypeFilterOperator];

/**
 * @public
 * @enum
 */
export const SlotTypeSortAttribute = {
  LastUpdatedDateTime: "LastUpdatedDateTime",
  SlotTypeName: "SlotTypeName",
} as const;
/**
 * @public
 */
export type SlotTypeSortAttribute = (typeof SlotTypeSortAttribute)[keyof typeof SlotTypeSortAttribute];

/**
 * @public
 * @enum
 */
export const SlotTypeCategory = {
  Composite: "Composite",
  Custom: "Custom",
  Extended: "Extended",
  ExternalGrammar: "ExternalGrammar",
} as const;
/**
 * @public
 */
export type SlotTypeCategory = (typeof SlotTypeCategory)[keyof typeof SlotTypeCategory];

/**
 * @public
 * @enum
 */
export const TestResultTypeFilter = {
  ConversationLevelTestResults: "ConversationLevelTestResults",
  IntentClassificationTestResults: "IntentClassificationTestResults",
  OverallTestResults: "OverallTestResults",
  SlotResolutionTestResults: "SlotResolutionTestResults",
  UtteranceLevelResults: "UtteranceLevelResults",
} as const;
/**
 * @public
 */
export type TestResultTypeFilter = (typeof TestResultTypeFilter)[keyof typeof TestResultTypeFilter];

/**
 * @public
 * @enum
 */
export const TestExecutionSortAttribute = {
  CreationDateTime: "CreationDateTime",
  TestSetName: "TestSetName",
} as const;
/**
 * @public
 */
export type TestExecutionSortAttribute = (typeof TestExecutionSortAttribute)[keyof typeof TestExecutionSortAttribute];

/**
 * @public
 * @enum
 */
export const TestSetSortAttribute = {
  LastUpdatedDateTime: "LastUpdatedDateTime",
  TestSetName: "TestSetName",
} as const;
/**
 * @public
 */
export type TestSetSortAttribute = (typeof TestSetSortAttribute)[keyof typeof TestSetSortAttribute];

/**
 * @public
 * @enum
 */
export const UtteranceContentType = {
  CustomPayload: "CustomPayload",
  ImageResponseCard: "ImageResponseCard",
  PlainText: "PlainText",
  SSML: "SSML",
} as const;
/**
 * @public
 */
export type UtteranceContentType = (typeof UtteranceContentType)[keyof typeof UtteranceContentType];

/**
 * @public
 * @enum
 */
export const SearchOrder = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;
/**
 * @public
 */
export type SearchOrder = (typeof SearchOrder)[keyof typeof SearchOrder];
