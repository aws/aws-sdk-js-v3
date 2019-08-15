import { CreateConfigInput } from "../shapes/CreateConfigInput";
import { CreateConfigOutput } from "../shapes/CreateConfigOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateConfig",
  http: {
    method: "POST",
    requestUri: "/config"
  },
  input: {
    shape: CreateConfigInput
  },
  output: {
    shape: CreateConfigOutput
  },
  errors: [
    {
      shape: DependencyException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
