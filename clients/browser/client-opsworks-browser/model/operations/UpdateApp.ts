import { UpdateAppInput } from "../shapes/UpdateAppInput";
import { UpdateAppOutput } from "../shapes/UpdateAppOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateApp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateApp",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateAppInput
  },
  output: {
    shape: UpdateAppOutput
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
