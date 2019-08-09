import { BatchGetTracesInput } from "./BatchGetTracesInput";
import { CreateGroupInput } from "./CreateGroupInput";
import { CreateSamplingRuleInput } from "./CreateSamplingRuleInput";
import { DeleteGroupInput } from "./DeleteGroupInput";
import { DeleteSamplingRuleInput } from "./DeleteSamplingRuleInput";
import { GetEncryptionConfigInput } from "./GetEncryptionConfigInput";
import { GetGroupInput } from "./GetGroupInput";
import { GetGroupsInput } from "./GetGroupsInput";
import { GetSamplingRulesInput } from "./GetSamplingRulesInput";
import { GetSamplingStatisticSummariesInput } from "./GetSamplingStatisticSummariesInput";
import { GetSamplingTargetsInput } from "./GetSamplingTargetsInput";
import { GetServiceGraphInput } from "./GetServiceGraphInput";
import { GetTimeSeriesServiceStatisticsInput } from "./GetTimeSeriesServiceStatisticsInput";
import { GetTraceGraphInput } from "./GetTraceGraphInput";
import { GetTraceSummariesInput } from "./GetTraceSummariesInput";
import { PutEncryptionConfigInput } from "./PutEncryptionConfigInput";
import { PutTelemetryRecordsInput } from "./PutTelemetryRecordsInput";
import { PutTraceSegmentsInput } from "./PutTraceSegmentsInput";
import { UpdateGroupInput } from "./UpdateGroupInput";
import { UpdateSamplingRuleInput } from "./UpdateSamplingRuleInput";
export type InputTypesUnion =
  | BatchGetTracesInput
  | CreateGroupInput
  | CreateSamplingRuleInput
  | DeleteGroupInput
  | DeleteSamplingRuleInput
  | GetEncryptionConfigInput
  | GetGroupInput
  | GetGroupsInput
  | GetSamplingRulesInput
  | GetSamplingStatisticSummariesInput
  | GetSamplingTargetsInput
  | GetServiceGraphInput
  | GetTimeSeriesServiceStatisticsInput
  | GetTraceGraphInput
  | GetTraceSummariesInput
  | PutEncryptionConfigInput
  | PutTelemetryRecordsInput
  | PutTraceSegmentsInput
  | UpdateGroupInput
  | UpdateSamplingRuleInput;
