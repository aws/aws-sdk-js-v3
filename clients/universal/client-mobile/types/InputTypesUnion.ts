import { CreateProjectInput } from "./CreateProjectInput";
import { DeleteProjectInput } from "./DeleteProjectInput";
import { DescribeBundleInput } from "./DescribeBundleInput";
import { DescribeProjectInput } from "./DescribeProjectInput";
import { ExportBundleInput } from "./ExportBundleInput";
import { ExportProjectInput } from "./ExportProjectInput";
import { ListBundlesInput } from "./ListBundlesInput";
import { ListProjectsInput } from "./ListProjectsInput";
import { UpdateProjectInput } from "./UpdateProjectInput";
export type InputTypesUnion =
  | CreateProjectInput
  | DeleteProjectInput
  | DescribeBundleInput
  | DescribeProjectInput
  | ExportBundleInput
  | ExportProjectInput
  | ListBundlesInput
  | ListProjectsInput
  | UpdateProjectInput;
