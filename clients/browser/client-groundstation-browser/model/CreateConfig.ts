import { CreateConfigInput } from "./CreateConfigInput";
import { CreateConfigOutput } from "./CreateConfigOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
