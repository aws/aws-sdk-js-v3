import { CreateApplicationInput } from "./CreateApplicationInput";
import { CreateComponentInput } from "./CreateComponentInput";
import { DeleteApplicationInput } from "./DeleteApplicationInput";
import { DeleteComponentInput } from "./DeleteComponentInput";
import { DescribeApplicationInput } from "./DescribeApplicationInput";
import { DescribeComponentInput } from "./DescribeComponentInput";
import { DescribeComponentConfigurationInput } from "./DescribeComponentConfigurationInput";
import { DescribeComponentConfigurationRecommendationInput } from "./DescribeComponentConfigurationRecommendationInput";
import { DescribeObservationInput } from "./DescribeObservationInput";
import { DescribeProblemInput } from "./DescribeProblemInput";
import { DescribeProblemObservationsInput } from "./DescribeProblemObservationsInput";
import { ListApplicationsInput } from "./ListApplicationsInput";
import { ListComponentsInput } from "./ListComponentsInput";
import { ListProblemsInput } from "./ListProblemsInput";
import { UpdateComponentInput } from "./UpdateComponentInput";
import { UpdateComponentConfigurationInput } from "./UpdateComponentConfigurationInput";
export type InputTypesUnion =
  | CreateApplicationInput
  | CreateComponentInput
  | DeleteApplicationInput
  | DeleteComponentInput
  | DescribeApplicationInput
  | DescribeComponentInput
  | DescribeComponentConfigurationInput
  | DescribeComponentConfigurationRecommendationInput
  | DescribeObservationInput
  | DescribeProblemInput
  | DescribeProblemObservationsInput
  | ListApplicationsInput
  | ListComponentsInput
  | ListProblemsInput
  | UpdateComponentInput
  | UpdateComponentConfigurationInput;
