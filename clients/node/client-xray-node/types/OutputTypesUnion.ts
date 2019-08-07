import { BatchGetTracesOutput } from "./BatchGetTracesOutput";
import { CreateSamplingRuleOutput } from "./CreateSamplingRuleOutput";
import { DeleteSamplingRuleOutput } from "./DeleteSamplingRuleOutput";
import { GetEncryptionConfigOutput } from "./GetEncryptionConfigOutput";
import { GetSamplingRulesOutput } from "./GetSamplingRulesOutput";
import { GetSamplingStatisticSummariesOutput } from "./GetSamplingStatisticSummariesOutput";
import { GetSamplingTargetsOutput } from "./GetSamplingTargetsOutput";
import { GetServiceGraphOutput } from "./GetServiceGraphOutput";
import { GetTraceGraphOutput } from "./GetTraceGraphOutput";
import { GetTraceSummariesOutput } from "./GetTraceSummariesOutput";
import { PutEncryptionConfigOutput } from "./PutEncryptionConfigOutput";
import { PutTelemetryRecordsOutput } from "./PutTelemetryRecordsOutput";
import { PutTraceSegmentsOutput } from "./PutTraceSegmentsOutput";
import { UpdateSamplingRuleOutput } from "./UpdateSamplingRuleOutput";
export type OutputTypesUnion =
  | BatchGetTracesOutput
  | CreateSamplingRuleOutput
  | DeleteSamplingRuleOutput
  | GetEncryptionConfigOutput
  | GetSamplingRulesOutput
  | GetSamplingStatisticSummariesOutput
  | GetSamplingTargetsOutput
  | GetServiceGraphOutput
  | GetTraceGraphOutput
  | GetTraceSummariesOutput
  | PutEncryptionConfigOutput
  | PutTelemetryRecordsOutput
  | PutTraceSegmentsOutput
  | UpdateSamplingRuleOutput;
