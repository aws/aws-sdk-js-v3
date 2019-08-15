import { ListLabelingJobsInput } from "../shapes/ListLabelingJobsInput";
import { ListLabelingJobsOutput } from "../shapes/ListLabelingJobsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListLabelingJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListLabelingJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListLabelingJobsInput
  },
  output: {
    shape: ListLabelingJobsOutput
  },
  errors: []
};
