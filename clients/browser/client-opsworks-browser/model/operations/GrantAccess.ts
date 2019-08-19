import { GrantAccessInput } from "../shapes/GrantAccessInput";
import { GrantAccessOutput } from "../shapes/GrantAccessOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GrantAccess: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GrantAccess",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GrantAccessInput
  },
  output: {
    shape: GrantAccessOutput
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
