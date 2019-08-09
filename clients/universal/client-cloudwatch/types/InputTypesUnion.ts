import { DeleteAlarmsInput } from "./DeleteAlarmsInput";
import { DeleteAnomalyDetectorInput } from "./DeleteAnomalyDetectorInput";
import { DeleteDashboardsInput } from "./DeleteDashboardsInput";
import { DescribeAlarmHistoryInput } from "./DescribeAlarmHistoryInput";
import { DescribeAlarmsInput } from "./DescribeAlarmsInput";
import { DescribeAlarmsForMetricInput } from "./DescribeAlarmsForMetricInput";
import { DescribeAnomalyDetectorsInput } from "./DescribeAnomalyDetectorsInput";
import { DisableAlarmActionsInput } from "./DisableAlarmActionsInput";
import { EnableAlarmActionsInput } from "./EnableAlarmActionsInput";
import { GetDashboardInput } from "./GetDashboardInput";
import { GetMetricDataInput } from "./GetMetricDataInput";
import { GetMetricStatisticsInput } from "./GetMetricStatisticsInput";
import { GetMetricWidgetImageInput } from "./GetMetricWidgetImageInput";
import { ListDashboardsInput } from "./ListDashboardsInput";
import { ListMetricsInput } from "./ListMetricsInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { PutAnomalyDetectorInput } from "./PutAnomalyDetectorInput";
import { PutDashboardInput } from "./PutDashboardInput";
import { PutMetricAlarmInput } from "./PutMetricAlarmInput";
import { PutMetricDataInput } from "./PutMetricDataInput";
import { SetAlarmStateInput } from "./SetAlarmStateInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
export type InputTypesUnion =
  | DeleteAlarmsInput
  | DeleteAnomalyDetectorInput
  | DeleteDashboardsInput
  | DescribeAlarmHistoryInput
  | DescribeAlarmsInput
  | DescribeAlarmsForMetricInput
  | DescribeAnomalyDetectorsInput
  | DisableAlarmActionsInput
  | EnableAlarmActionsInput
  | GetDashboardInput
  | GetMetricDataInput
  | GetMetricStatisticsInput
  | GetMetricWidgetImageInput
  | ListDashboardsInput
  | ListMetricsInput
  | ListTagsForResourceInput
  | PutAnomalyDetectorInput
  | PutDashboardInput
  | PutMetricAlarmInput
  | PutMetricDataInput
  | SetAlarmStateInput
  | TagResourceInput
  | UntagResourceInput;
