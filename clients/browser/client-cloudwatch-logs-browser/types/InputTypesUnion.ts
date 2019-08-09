import { AssociateKmsKeyInput } from "./AssociateKmsKeyInput";
import { CancelExportTaskInput } from "./CancelExportTaskInput";
import { CreateExportTaskInput } from "./CreateExportTaskInput";
import { CreateLogGroupInput } from "./CreateLogGroupInput";
import { CreateLogStreamInput } from "./CreateLogStreamInput";
import { DeleteDestinationInput } from "./DeleteDestinationInput";
import { DeleteLogGroupInput } from "./DeleteLogGroupInput";
import { DeleteLogStreamInput } from "./DeleteLogStreamInput";
import { DeleteMetricFilterInput } from "./DeleteMetricFilterInput";
import { DeleteResourcePolicyInput } from "./DeleteResourcePolicyInput";
import { DeleteRetentionPolicyInput } from "./DeleteRetentionPolicyInput";
import { DeleteSubscriptionFilterInput } from "./DeleteSubscriptionFilterInput";
import { DescribeDestinationsInput } from "./DescribeDestinationsInput";
import { DescribeExportTasksInput } from "./DescribeExportTasksInput";
import { DescribeLogGroupsInput } from "./DescribeLogGroupsInput";
import { DescribeLogStreamsInput } from "./DescribeLogStreamsInput";
import { DescribeMetricFiltersInput } from "./DescribeMetricFiltersInput";
import { DescribeQueriesInput } from "./DescribeQueriesInput";
import { DescribeResourcePoliciesInput } from "./DescribeResourcePoliciesInput";
import { DescribeSubscriptionFiltersInput } from "./DescribeSubscriptionFiltersInput";
import { DisassociateKmsKeyInput } from "./DisassociateKmsKeyInput";
import { FilterLogEventsInput } from "./FilterLogEventsInput";
import { GetLogEventsInput } from "./GetLogEventsInput";
import { GetLogGroupFieldsInput } from "./GetLogGroupFieldsInput";
import { GetLogRecordInput } from "./GetLogRecordInput";
import { GetQueryResultsInput } from "./GetQueryResultsInput";
import { ListTagsLogGroupInput } from "./ListTagsLogGroupInput";
import { PutDestinationInput } from "./PutDestinationInput";
import { PutDestinationPolicyInput } from "./PutDestinationPolicyInput";
import { PutLogEventsInput } from "./PutLogEventsInput";
import { PutMetricFilterInput } from "./PutMetricFilterInput";
import { PutResourcePolicyInput } from "./PutResourcePolicyInput";
import { PutRetentionPolicyInput } from "./PutRetentionPolicyInput";
import { PutSubscriptionFilterInput } from "./PutSubscriptionFilterInput";
import { StartQueryInput } from "./StartQueryInput";
import { StopQueryInput } from "./StopQueryInput";
import { TagLogGroupInput } from "./TagLogGroupInput";
import { TestMetricFilterInput } from "./TestMetricFilterInput";
import { UntagLogGroupInput } from "./UntagLogGroupInput";
export type InputTypesUnion =
  | AssociateKmsKeyInput
  | CancelExportTaskInput
  | CreateExportTaskInput
  | CreateLogGroupInput
  | CreateLogStreamInput
  | DeleteDestinationInput
  | DeleteLogGroupInput
  | DeleteLogStreamInput
  | DeleteMetricFilterInput
  | DeleteResourcePolicyInput
  | DeleteRetentionPolicyInput
  | DeleteSubscriptionFilterInput
  | DescribeDestinationsInput
  | DescribeExportTasksInput
  | DescribeLogGroupsInput
  | DescribeLogStreamsInput
  | DescribeMetricFiltersInput
  | DescribeQueriesInput
  | DescribeResourcePoliciesInput
  | DescribeSubscriptionFiltersInput
  | DisassociateKmsKeyInput
  | FilterLogEventsInput
  | GetLogEventsInput
  | GetLogGroupFieldsInput
  | GetLogRecordInput
  | GetQueryResultsInput
  | ListTagsLogGroupInput
  | PutDestinationInput
  | PutDestinationPolicyInput
  | PutLogEventsInput
  | PutMetricFilterInput
  | PutResourcePolicyInput
  | PutRetentionPolicyInput
  | PutSubscriptionFilterInput
  | StartQueryInput
  | StopQueryInput
  | TagLogGroupInput
  | TestMetricFilterInput
  | UntagLogGroupInput;
