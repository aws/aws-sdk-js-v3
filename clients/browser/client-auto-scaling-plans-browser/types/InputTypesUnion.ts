import { CreateScalingPlanInput } from "./CreateScalingPlanInput";
import { DeleteScalingPlanInput } from "./DeleteScalingPlanInput";
import { DescribeScalingPlanResourcesInput } from "./DescribeScalingPlanResourcesInput";
import { DescribeScalingPlansInput } from "./DescribeScalingPlansInput";
import { GetScalingPlanResourceForecastDataInput } from "./GetScalingPlanResourceForecastDataInput";
import { UpdateScalingPlanInput } from "./UpdateScalingPlanInput";
export type InputTypesUnion =
  | CreateScalingPlanInput
  | DeleteScalingPlanInput
  | DescribeScalingPlanResourcesInput
  | DescribeScalingPlansInput
  | GetScalingPlanResourceForecastDataInput
  | UpdateScalingPlanInput;
