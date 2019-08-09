import { StopHyperParameterTuningJobInput } from "./StopHyperParameterTuningJobInput";
import { StopHyperParameterTuningJobOutput } from "./StopHyperParameterTuningJobOutput";
import { ResourceNotFound } from "./ResourceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopHyperParameterTuningJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopHyperParameterTuningJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopHyperParameterTuningJobInput
  },
  output: {
    shape: StopHyperParameterTuningJobOutput
  },
  errors: [
    {
      shape: ResourceNotFound
    }
  ]
};
