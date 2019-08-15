import { CreateHyperParameterTuningJobInput } from "../shapes/CreateHyperParameterTuningJobInput";
import { CreateHyperParameterTuningJobOutput } from "../shapes/CreateHyperParameterTuningJobOutput";
import { ResourceInUse } from "../shapes/ResourceInUse";
import { ResourceLimitExceeded } from "../shapes/ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateHyperParameterTuningJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateHyperParameterTuningJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateHyperParameterTuningJobInput
  },
  output: {
    shape: CreateHyperParameterTuningJobOutput
  },
  errors: [
    {
      shape: ResourceInUse
    },
    {
      shape: ResourceLimitExceeded
    }
  ]
};
