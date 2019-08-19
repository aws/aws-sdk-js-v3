import { CreateDeploymentInput } from "../shapes/CreateDeploymentInput";
import { CreateDeploymentOutput } from "../shapes/CreateDeploymentOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDeployment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDeployment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDeploymentInput
  },
  output: {
    shape: CreateDeploymentOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
