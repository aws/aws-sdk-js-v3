import { CreateProjectOutput } from "./CreateProjectOutput";
import { DeleteProjectOutput } from "./DeleteProjectOutput";
import { DescribeBundleOutput } from "./DescribeBundleOutput";
import { DescribeProjectOutput } from "./DescribeProjectOutput";
import { ExportBundleOutput } from "./ExportBundleOutput";
import { ExportProjectOutput } from "./ExportProjectOutput";
import { ListBundlesOutput } from "./ListBundlesOutput";
import { ListProjectsOutput } from "./ListProjectsOutput";
import { UpdateProjectOutput } from "./UpdateProjectOutput";
export type OutputTypesUnion =
  | CreateProjectOutput
  | DeleteProjectOutput
  | DescribeBundleOutput
  | DescribeProjectOutput
  | ExportBundleOutput
  | ExportProjectOutput
  | ListBundlesOutput
  | ListProjectsOutput
  | UpdateProjectOutput;
