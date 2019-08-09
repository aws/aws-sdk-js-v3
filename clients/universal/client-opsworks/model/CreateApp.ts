import { CreateAppInput } from "./CreateAppInput";
import { CreateAppOutput } from "./CreateAppOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateApp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateApp",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAppInput
  },
  output: {
    shape: CreateAppOutput
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
