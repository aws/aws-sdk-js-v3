import { ListTrainingJobsInput } from "../shapes/ListTrainingJobsInput";
import { ListTrainingJobsOutput } from "../shapes/ListTrainingJobsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTrainingJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTrainingJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTrainingJobsInput
  },
  output: {
    shape: ListTrainingJobsOutput
  },
  errors: []
};
