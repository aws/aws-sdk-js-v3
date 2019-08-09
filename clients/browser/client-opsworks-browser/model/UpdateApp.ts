import { UpdateAppInput } from "./UpdateAppInput";
import { UpdateAppOutput } from "./UpdateAppOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
