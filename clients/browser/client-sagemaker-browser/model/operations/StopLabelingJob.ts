import { StopLabelingJobInput } from "../shapes/StopLabelingJobInput";
import { StopLabelingJobOutput } from "../shapes/StopLabelingJobOutput";
import { ResourceNotFound } from "../shapes/ResourceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
