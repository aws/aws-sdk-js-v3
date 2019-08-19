import { DeleteAlarmsOutput } from "./DeleteAlarmsOutput";
import { DeleteAnomalyDetectorOutput } from "./DeleteAnomalyDetectorOutput";
import { DeleteDashboardsOutput } from "./DeleteDashboardsOutput";
import { DescribeAlarmHistoryOutput } from "./DescribeAlarmHistoryOutput";
import { DescribeAlarmsOutput } from "./DescribeAlarmsOutput";
import { DescribeAlarmsForMetricOutput } from "./DescribeAlarmsForMetricOutput";
import { DescribeAnomalyDetectorsOutput } from "./DescribeAnomalyDetectorsOutput";
import { DisableAlarmActionsOutput } from "./DisableAlarmActionsOutput";
import { EnableAlarmActionsOutput } from "./EnableAlarmActionsOutput";
import { GetDashboardOutput } from "./GetDashboardOutput";
import { GetMetricDataOutput } from "./GetMetricDataOutput";
import { GetMetricStatisticsOutput } from "./GetMetricStatisticsOutput";
import { GetMetricWidgetImageOutput } from "./GetMetricWidgetImageOutput";
import { ListDashboardsOutput } from "./ListDashboardsOutput";
import { ListMetricsOutput } from "./ListMetricsOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { PutAnomalyDetectorOutput } from "./PutAnomalyDetectorOutput";
import { PutDashboardOutput } from "./PutDashboardOutput";
import { PutMetricAlarmOutput } from "./PutMetricAlarmOutput";
import { PutMetricDataOutput } from "./PutMetricDataOutput";
import { SetAlarmStateOutput } from "./SetAlarmStateOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
export type OutputTypesUnion =
  | DeleteAlarmsOutput
  | DeleteAnomalyDetectorOutput
  | DeleteDashboardsOutput
  | DescribeAlarmHistoryOutput
  | DescribeAlarmsOutput
  | DescribeAlarmsForMetricOutput
  | DescribeAnomalyDetectorsOutput
  | DisableAlarmActionsOutput
  | EnableAlarmActionsOutput
  | GetDashboardOutput
  | GetMetricDataOutput
  | GetMetricStatisticsOutput
  | GetMetricWidgetImageOutput
  | ListDashboardsOutput
  | ListMetricsOutput
  | ListTagsForResourceOutput
  | PutAnomalyDetectorOutput
  | PutDashboardOutput
  | PutMetricAlarmOutput
  | PutMetricDataOutput
  | SetAlarmStateOutput
  | TagResourceOutput
  | UntagResourceOutput;
