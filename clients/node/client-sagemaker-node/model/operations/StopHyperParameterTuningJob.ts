import { StopHyperParameterTuningJobInput } from "../shapes/StopHyperParameterTuningJobInput";
import { StopHyperParameterTuningJobOutput } from "../shapes/StopHyperParameterTuningJobOutput";
import { ResourceNotFound } from "../shapes/ResourceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
