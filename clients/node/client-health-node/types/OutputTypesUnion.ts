import { DescribeAffectedEntitiesOutput } from "./DescribeAffectedEntitiesOutput";
import { DescribeEntityAggregatesOutput } from "./DescribeEntityAggregatesOutput";
import { DescribeEventAggregatesOutput } from "./DescribeEventAggregatesOutput";
import { DescribeEventDetailsOutput } from "./DescribeEventDetailsOutput";
import { DescribeEventTypesOutput } from "./DescribeEventTypesOutput";
import { DescribeEventsOutput } from "./DescribeEventsOutput";
export type OutputTypesUnion =
  | DescribeAffectedEntitiesOutput
  | DescribeEntityAggregatesOutput
  | DescribeEventAggregatesOutput
  | DescribeEventDetailsOutput
  | DescribeEventTypesOutput
  | DescribeEventsOutput;
