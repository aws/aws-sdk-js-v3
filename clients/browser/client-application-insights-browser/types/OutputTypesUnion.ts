import { CreateApplicationOutput } from "./CreateApplicationOutput";
import { CreateComponentOutput } from "./CreateComponentOutput";
import { DeleteApplicationOutput } from "./DeleteApplicationOutput";
import { DeleteComponentOutput } from "./DeleteComponentOutput";
import { DescribeApplicationOutput } from "./DescribeApplicationOutput";
import { DescribeComponentOutput } from "./DescribeComponentOutput";
import { DescribeComponentConfigurationOutput } from "./DescribeComponentConfigurationOutput";
import { DescribeComponentConfigurationRecommendationOutput } from "./DescribeComponentConfigurationRecommendationOutput";
import { DescribeObservationOutput } from "./DescribeObservationOutput";
import { DescribeProblemOutput } from "./DescribeProblemOutput";
import { DescribeProblemObservationsOutput } from "./DescribeProblemObservationsOutput";
import { ListApplicationsOutput } from "./ListApplicationsOutput";
import { ListComponentsOutput } from "./ListComponentsOutput";
import { ListProblemsOutput } from "./ListProblemsOutput";
import { UpdateComponentOutput } from "./UpdateComponentOutput";
import { UpdateComponentConfigurationOutput } from "./UpdateComponentConfigurationOutput";
export type OutputTypesUnion =
  | CreateApplicationOutput
  | CreateComponentOutput
  | DeleteApplicationOutput
  | DeleteComponentOutput
  | DescribeApplicationOutput
  | DescribeComponentOutput
  | DescribeComponentConfigurationOutput
  | DescribeComponentConfigurationRecommendationOutput
  | DescribeObservationOutput
  | DescribeProblemOutput
  | DescribeProblemObservationsOutput
  | ListApplicationsOutput
  | ListComponentsOutput
  | ListProblemsOutput
  | UpdateComponentOutput
  | UpdateComponentConfigurationOutput;
