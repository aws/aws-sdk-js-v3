import {
  AcknowledgeFlow$,
  Action$,
  AlarmAction$,
  AlarmCapabilities$,
  AlarmEventActions$,
  AlarmModelSummary$,
  AlarmModelVersionStatus,
  AlarmModelVersionSummary$,
  AlarmNotification$,
  AlarmRule$,
  AnalysisResult$,
  AnalysisResultLevel,
  AnalysisResultLocation$,
  AnalysisStatus,
  AssetPropertyTimestamp$,
  AssetPropertyValue$,
  AssetPropertyVariant$,
  Attribute$,
  ClearTimerAction$,
  ComparisonOperator,
  CreateAlarmModel$,
  CreateAlarmModelCommand,
  CreateAlarmModelRequest$,
  CreateAlarmModelResponse$,
  CreateDetectorModel$,
  CreateDetectorModelCommand,
  CreateDetectorModelRequest$,
  CreateDetectorModelResponse$,
  CreateInput$,
  CreateInputCommand,
  CreateInputRequest$,
  CreateInputResponse$,
  DeleteAlarmModel$,
  DeleteAlarmModelCommand,
  DeleteAlarmModelRequest$,
  DeleteAlarmModelResponse$,
  DeleteDetectorModel$,
  DeleteDetectorModelCommand,
  DeleteDetectorModelRequest$,
  DeleteDetectorModelResponse$,
  DeleteInput$,
  DeleteInputCommand,
  DeleteInputRequest$,
  DeleteInputResponse$,
  DescribeAlarmModel$,
  DescribeAlarmModelCommand,
  DescribeAlarmModelRequest$,
  DescribeAlarmModelResponse$,
  DescribeDetectorModel$,
  DescribeDetectorModelAnalysis$,
  DescribeDetectorModelAnalysisCommand,
  DescribeDetectorModelAnalysisRequest$,
  DescribeDetectorModelAnalysisResponse$,
  DescribeDetectorModelCommand,
  DescribeDetectorModelRequest$,
  DescribeDetectorModelResponse$,
  DescribeInput$,
  DescribeInputCommand,
  DescribeInputRequest$,
  DescribeInputResponse$,
  DescribeLoggingOptions$,
  DescribeLoggingOptionsCommand,
  DescribeLoggingOptionsRequest$,
  DescribeLoggingOptionsResponse$,
  DetectorDebugOption$,
  DetectorModel$,
  DetectorModelConfiguration$,
  DetectorModelDefinition$,
  DetectorModelSummary$,
  DetectorModelVersionStatus,
  DetectorModelVersionSummary$,
  DynamoDBAction$,
  DynamoDBv2Action$,
  EmailConfiguration$,
  EmailContent$,
  EmailRecipients$,
  EvaluationMethod,
  Event$,
  FirehoseAction$,
  GetDetectorModelAnalysisResults$,
  GetDetectorModelAnalysisResultsCommand,
  GetDetectorModelAnalysisResultsRequest$,
  GetDetectorModelAnalysisResultsResponse$,
  InitializationConfiguration$,
  Input$,
  InputConfiguration$,
  InputDefinition$,
  InputIdentifier$,
  InputStatus,
  InputSummary$,
  InternalFailureException,
  InternalFailureException$,
  InvalidRequestException,
  InvalidRequestException$,
  IoTEvents,
  IoTEventsClient,
  IoTEventsServiceException,
  IotEventsAction$,
  IotEventsInputIdentifier$,
  IotSiteWiseAction$,
  IotSiteWiseAssetModelPropertyIdentifier$,
  IotSiteWiseInputIdentifier$,
  IotTopicPublishAction$,
  LambdaAction$,
  LimitExceededException,
  LimitExceededException$,
  ListAlarmModelVersions$,
  ListAlarmModelVersionsCommand,
  ListAlarmModelVersionsRequest$,
  ListAlarmModelVersionsResponse$,
  ListAlarmModels$,
  ListAlarmModelsCommand,
  ListAlarmModelsRequest$,
  ListAlarmModelsResponse$,
  ListDetectorModelVersions$,
  ListDetectorModelVersionsCommand,
  ListDetectorModelVersionsRequest$,
  ListDetectorModelVersionsResponse$,
  ListDetectorModels$,
  ListDetectorModelsCommand,
  ListDetectorModelsRequest$,
  ListDetectorModelsResponse$,
  ListInputRoutings$,
  ListInputRoutingsCommand,
  ListInputRoutingsRequest$,
  ListInputRoutingsResponse$,
  ListInputs$,
  ListInputsCommand,
  ListInputsRequest$,
  ListInputsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LoggingLevel,
  LoggingOptions$,
  NotificationAction$,
  NotificationTargetActions$,
  OnEnterLifecycle$,
  OnExitLifecycle$,
  OnInputLifecycle$,
  Payload$,
  PayloadType,
  PutLoggingOptions$,
  PutLoggingOptionsCommand,
  PutLoggingOptionsRequest$,
  RecipientDetail$,
  ResetTimerAction$,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RoutedResource$,
  SMSConfiguration$,
  SNSTopicPublishAction$,
  SSOIdentity$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SetTimerAction$,
  SetVariableAction$,
  SimpleRule$,
  SqsAction$,
  StartDetectorModelAnalysis$,
  StartDetectorModelAnalysisCommand,
  StartDetectorModelAnalysisRequest$,
  StartDetectorModelAnalysisResponse$,
  State$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TransitionEvent$,
  UnsupportedOperationException,
  UnsupportedOperationException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAlarmModel$,
  UpdateAlarmModelCommand,
  UpdateAlarmModelRequest$,
  UpdateAlarmModelResponse$,
  UpdateDetectorModel$,
  UpdateDetectorModelCommand,
  UpdateDetectorModelRequest$,
  UpdateDetectorModelResponse$,
  UpdateInput$,
  UpdateInputCommand,
  UpdateInputRequest$,
  UpdateInputResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTEventsClient === "function");
assert(typeof IoTEvents === "function");
// commands
assert(typeof CreateAlarmModelCommand === "function");
assert(typeof CreateAlarmModel$ === "object");
assert(typeof CreateDetectorModelCommand === "function");
assert(typeof CreateDetectorModel$ === "object");
assert(typeof CreateInputCommand === "function");
assert(typeof CreateInput$ === "object");
assert(typeof DeleteAlarmModelCommand === "function");
assert(typeof DeleteAlarmModel$ === "object");
assert(typeof DeleteDetectorModelCommand === "function");
assert(typeof DeleteDetectorModel$ === "object");
assert(typeof DeleteInputCommand === "function");
assert(typeof DeleteInput$ === "object");
assert(typeof DescribeAlarmModelCommand === "function");
assert(typeof DescribeAlarmModel$ === "object");
assert(typeof DescribeDetectorModelCommand === "function");
assert(typeof DescribeDetectorModel$ === "object");
assert(typeof DescribeDetectorModelAnalysisCommand === "function");
assert(typeof DescribeDetectorModelAnalysis$ === "object");
assert(typeof DescribeInputCommand === "function");
assert(typeof DescribeInput$ === "object");
assert(typeof DescribeLoggingOptionsCommand === "function");
assert(typeof DescribeLoggingOptions$ === "object");
assert(typeof GetDetectorModelAnalysisResultsCommand === "function");
assert(typeof GetDetectorModelAnalysisResults$ === "object");
assert(typeof ListAlarmModelsCommand === "function");
assert(typeof ListAlarmModels$ === "object");
assert(typeof ListAlarmModelVersionsCommand === "function");
assert(typeof ListAlarmModelVersions$ === "object");
assert(typeof ListDetectorModelsCommand === "function");
assert(typeof ListDetectorModels$ === "object");
assert(typeof ListDetectorModelVersionsCommand === "function");
assert(typeof ListDetectorModelVersions$ === "object");
assert(typeof ListInputRoutingsCommand === "function");
assert(typeof ListInputRoutings$ === "object");
assert(typeof ListInputsCommand === "function");
assert(typeof ListInputs$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutLoggingOptionsCommand === "function");
assert(typeof PutLoggingOptions$ === "object");
assert(typeof StartDetectorModelAnalysisCommand === "function");
assert(typeof StartDetectorModelAnalysis$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAlarmModelCommand === "function");
assert(typeof UpdateAlarmModel$ === "object");
assert(typeof UpdateDetectorModelCommand === "function");
assert(typeof UpdateDetectorModel$ === "object");
assert(typeof UpdateInputCommand === "function");
assert(typeof UpdateInput$ === "object");
// structural schemas
assert(typeof AcknowledgeFlow$ === "object");
assert(typeof Action$ === "object");
assert(typeof AlarmAction$ === "object");
assert(typeof AlarmCapabilities$ === "object");
assert(typeof AlarmEventActions$ === "object");
assert(typeof AlarmModelSummary$ === "object");
assert(typeof AlarmModelVersionSummary$ === "object");
assert(typeof AlarmNotification$ === "object");
assert(typeof AlarmRule$ === "object");
assert(typeof AnalysisResult$ === "object");
assert(typeof AnalysisResultLocation$ === "object");
assert(typeof AssetPropertyTimestamp$ === "object");
assert(typeof AssetPropertyValue$ === "object");
assert(typeof AssetPropertyVariant$ === "object");
assert(typeof Attribute$ === "object");
assert(typeof ClearTimerAction$ === "object");
assert(typeof CreateAlarmModelRequest$ === "object");
assert(typeof CreateAlarmModelResponse$ === "object");
assert(typeof CreateDetectorModelRequest$ === "object");
assert(typeof CreateDetectorModelResponse$ === "object");
assert(typeof CreateInputRequest$ === "object");
assert(typeof CreateInputResponse$ === "object");
assert(typeof DeleteAlarmModelRequest$ === "object");
assert(typeof DeleteAlarmModelResponse$ === "object");
assert(typeof DeleteDetectorModelRequest$ === "object");
assert(typeof DeleteDetectorModelResponse$ === "object");
assert(typeof DeleteInputRequest$ === "object");
assert(typeof DeleteInputResponse$ === "object");
assert(typeof DescribeAlarmModelRequest$ === "object");
assert(typeof DescribeAlarmModelResponse$ === "object");
assert(typeof DescribeDetectorModelAnalysisRequest$ === "object");
assert(typeof DescribeDetectorModelAnalysisResponse$ === "object");
assert(typeof DescribeDetectorModelRequest$ === "object");
assert(typeof DescribeDetectorModelResponse$ === "object");
assert(typeof DescribeInputRequest$ === "object");
assert(typeof DescribeInputResponse$ === "object");
assert(typeof DescribeLoggingOptionsRequest$ === "object");
assert(typeof DescribeLoggingOptionsResponse$ === "object");
assert(typeof DetectorDebugOption$ === "object");
assert(typeof DetectorModel$ === "object");
assert(typeof DetectorModelConfiguration$ === "object");
assert(typeof DetectorModelDefinition$ === "object");
assert(typeof DetectorModelSummary$ === "object");
assert(typeof DetectorModelVersionSummary$ === "object");
assert(typeof DynamoDBAction$ === "object");
assert(typeof DynamoDBv2Action$ === "object");
assert(typeof EmailConfiguration$ === "object");
assert(typeof EmailContent$ === "object");
assert(typeof EmailRecipients$ === "object");
assert(typeof Event$ === "object");
assert(typeof FirehoseAction$ === "object");
assert(typeof GetDetectorModelAnalysisResultsRequest$ === "object");
assert(typeof GetDetectorModelAnalysisResultsResponse$ === "object");
assert(typeof InitializationConfiguration$ === "object");
assert(typeof Input$ === "object");
assert(typeof InputConfiguration$ === "object");
assert(typeof InputDefinition$ === "object");
assert(typeof InputIdentifier$ === "object");
assert(typeof InputSummary$ === "object");
assert(typeof IotEventsAction$ === "object");
assert(typeof IotEventsInputIdentifier$ === "object");
assert(typeof IotSiteWiseAction$ === "object");
assert(typeof IotSiteWiseAssetModelPropertyIdentifier$ === "object");
assert(typeof IotSiteWiseInputIdentifier$ === "object");
assert(typeof IotTopicPublishAction$ === "object");
assert(typeof LambdaAction$ === "object");
assert(typeof ListAlarmModelsRequest$ === "object");
assert(typeof ListAlarmModelsResponse$ === "object");
assert(typeof ListAlarmModelVersionsRequest$ === "object");
assert(typeof ListAlarmModelVersionsResponse$ === "object");
assert(typeof ListDetectorModelsRequest$ === "object");
assert(typeof ListDetectorModelsResponse$ === "object");
assert(typeof ListDetectorModelVersionsRequest$ === "object");
assert(typeof ListDetectorModelVersionsResponse$ === "object");
assert(typeof ListInputRoutingsRequest$ === "object");
assert(typeof ListInputRoutingsResponse$ === "object");
assert(typeof ListInputsRequest$ === "object");
assert(typeof ListInputsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LoggingOptions$ === "object");
assert(typeof NotificationAction$ === "object");
assert(typeof NotificationTargetActions$ === "object");
assert(typeof OnEnterLifecycle$ === "object");
assert(typeof OnExitLifecycle$ === "object");
assert(typeof OnInputLifecycle$ === "object");
assert(typeof Payload$ === "object");
assert(typeof PutLoggingOptionsRequest$ === "object");
assert(typeof RecipientDetail$ === "object");
assert(typeof ResetTimerAction$ === "object");
assert(typeof RoutedResource$ === "object");
assert(typeof SetTimerAction$ === "object");
assert(typeof SetVariableAction$ === "object");
assert(typeof SimpleRule$ === "object");
assert(typeof SMSConfiguration$ === "object");
assert(typeof SNSTopicPublishAction$ === "object");
assert(typeof SqsAction$ === "object");
assert(typeof SSOIdentity$ === "object");
assert(typeof StartDetectorModelAnalysisRequest$ === "object");
assert(typeof StartDetectorModelAnalysisResponse$ === "object");
assert(typeof State$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TransitionEvent$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAlarmModelRequest$ === "object");
assert(typeof UpdateAlarmModelResponse$ === "object");
assert(typeof UpdateDetectorModelRequest$ === "object");
assert(typeof UpdateDetectorModelResponse$ === "object");
assert(typeof UpdateInputRequest$ === "object");
assert(typeof UpdateInputResponse$ === "object");
// enums
assert(typeof AlarmModelVersionStatus === "object");
assert(typeof AnalysisResultLevel === "object");
assert(typeof AnalysisStatus === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof DetectorModelVersionStatus === "object");
assert(typeof EvaluationMethod === "object");
assert(typeof InputStatus === "object");
assert(typeof LoggingLevel === "object");
assert(typeof PayloadType === "object");
// errors
assert(InternalFailureException.prototype instanceof IoTEventsServiceException);
assert(typeof InternalFailureException$ === "object");
assert(InvalidRequestException.prototype instanceof IoTEventsServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(LimitExceededException.prototype instanceof IoTEventsServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof IoTEventsServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceInUseException.prototype instanceof IoTEventsServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof IoTEventsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof IoTEventsServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof IoTEventsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnsupportedOperationException.prototype instanceof IoTEventsServiceException);
assert(typeof UnsupportedOperationException$ === "object");
assert(IoTEventsServiceException.prototype instanceof Error);
console.log(`IoTEvents index test passed.`);
