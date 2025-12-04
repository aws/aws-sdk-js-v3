import {
  AlarmModelVersionStatus,
  AnalysisResultLevel,
  AnalysisStatus,
  ComparisonOperator,
  CreateAlarmModelCommand,
  CreateDetectorModelCommand,
  CreateInputCommand,
  DeleteAlarmModelCommand,
  DeleteDetectorModelCommand,
  DeleteInputCommand,
  DescribeAlarmModelCommand,
  DescribeDetectorModelAnalysisCommand,
  DescribeDetectorModelCommand,
  DescribeInputCommand,
  DescribeLoggingOptionsCommand,
  DetectorModelVersionStatus,
  EvaluationMethod,
  GetDetectorModelAnalysisResultsCommand,
  InputStatus,
  IoTEvents,
  IoTEventsClient,
  IoTEventsServiceException,
  ListAlarmModelVersionsCommand,
  ListAlarmModelsCommand,
  ListDetectorModelVersionsCommand,
  ListDetectorModelsCommand,
  ListInputRoutingsCommand,
  ListInputsCommand,
  ListTagsForResourceCommand,
  LoggingLevel,
  PayloadType,
  PutLoggingOptionsCommand,
  StartDetectorModelAnalysisCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAlarmModelCommand,
  UpdateDetectorModelCommand,
  UpdateInputCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTEventsClient === "function");
assert(typeof IoTEvents === "function");
// commands
assert(typeof CreateAlarmModelCommand === "function");
assert(typeof CreateDetectorModelCommand === "function");
assert(typeof CreateInputCommand === "function");
assert(typeof DeleteAlarmModelCommand === "function");
assert(typeof DeleteDetectorModelCommand === "function");
assert(typeof DeleteInputCommand === "function");
assert(typeof DescribeAlarmModelCommand === "function");
assert(typeof DescribeDetectorModelCommand === "function");
assert(typeof DescribeDetectorModelAnalysisCommand === "function");
assert(typeof DescribeInputCommand === "function");
assert(typeof DescribeLoggingOptionsCommand === "function");
assert(typeof GetDetectorModelAnalysisResultsCommand === "function");
assert(typeof ListAlarmModelsCommand === "function");
assert(typeof ListAlarmModelVersionsCommand === "function");
assert(typeof ListDetectorModelsCommand === "function");
assert(typeof ListDetectorModelVersionsCommand === "function");
assert(typeof ListInputRoutingsCommand === "function");
assert(typeof ListInputsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutLoggingOptionsCommand === "function");
assert(typeof StartDetectorModelAnalysisCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAlarmModelCommand === "function");
assert(typeof UpdateDetectorModelCommand === "function");
assert(typeof UpdateInputCommand === "function");
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
assert(IoTEventsServiceException.prototype instanceof Error);
console.log(`IoTEvents index test passed.`);
