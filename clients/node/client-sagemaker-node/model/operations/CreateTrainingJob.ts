import { CreateTrainingJobInput } from "../shapes/CreateTrainingJobInput";
import { CreateTrainingJobOutput } from "../shapes/CreateTrainingJobOutput";
import { ResourceInUse } from "../shapes/ResourceInUse";
import { ResourceLimitExceeded } from "../shapes/ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTrainingJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTrainingJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTrainingJobInput
  },
  output: {
    shape: CreateTrainingJobOutput
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
