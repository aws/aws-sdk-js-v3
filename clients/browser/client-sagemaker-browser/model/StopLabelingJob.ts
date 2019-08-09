import { StopLabelingJobInput } from "./StopLabelingJobInput";
import { StopLabelingJobOutput } from "./StopLabelingJobOutput";
import { ResourceNotFound } from "./ResourceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopLabelingJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopLabelingJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopLabelingJobInput
  },
  output: {
    shape: StopLabelingJobOutput
  },
  errors: [
    {
      shape: ResourceNotFound
    }
  ]
};
