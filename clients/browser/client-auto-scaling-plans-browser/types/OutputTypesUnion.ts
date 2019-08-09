import { CreateScalingPlanOutput } from "./CreateScalingPlanOutput";
import { DeleteScalingPlanOutput } from "./DeleteScalingPlanOutput";
import { DescribeScalingPlanResourcesOutput } from "./DescribeScalingPlanResourcesOutput";
import { DescribeScalingPlansOutput } from "./DescribeScalingPlansOutput";
import { GetScalingPlanResourceForecastDataOutput } from "./GetScalingPlanResourceForecastDataOutput";
import { UpdateScalingPlanOutput } from "./UpdateScalingPlanOutput";
export type OutputTypesUnion =
  | CreateScalingPlanOutput
  | DeleteScalingPlanOutput
  | DescribeScalingPlanResourcesOutput
  | DescribeScalingPlansOutput
  | GetScalingPlanResourceForecastDataOutput
  | UpdateScalingPlanOutput;
