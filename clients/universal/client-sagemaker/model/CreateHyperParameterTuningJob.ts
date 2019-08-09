import { CreateHyperParameterTuningJobInput } from "./CreateHyperParameterTuningJobInput";
import { CreateHyperParameterTuningJobOutput } from "./CreateHyperParameterTuningJobOutput";
import { ResourceInUse } from "./ResourceInUse";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
