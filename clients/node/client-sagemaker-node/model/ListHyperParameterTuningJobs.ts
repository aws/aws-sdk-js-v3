import { ListHyperParameterTuningJobsInput } from "./ListHyperParameterTuningJobsInput";
import { ListHyperParameterTuningJobsOutput } from "./ListHyperParameterTuningJobsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListHyperParameterTuningJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListHyperParameterTuningJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListHyperParameterTuningJobsInput
  },
  output: {
    shape: ListHyperParameterTuningJobsOutput
  },
  errors: []
};
