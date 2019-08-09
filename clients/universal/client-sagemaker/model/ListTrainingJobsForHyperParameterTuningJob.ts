import { ListTrainingJobsForHyperParameterTuningJobInput } from "./ListTrainingJobsForHyperParameterTuningJobInput";
import { ListTrainingJobsForHyperParameterTuningJobOutput } from "./ListTrainingJobsForHyperParameterTuningJobOutput";
import { ResourceNotFound } from "./ResourceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListTrainingJobsForHyperParameterTuningJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTrainingJobsForHyperParameterTuningJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTrainingJobsForHyperParameterTuningJobInput
  },
  output: {
    shape: ListTrainingJobsForHyperParameterTuningJobOutput
  },
  errors: [
    {
      shape: ResourceNotFound
    }
  ]
};
