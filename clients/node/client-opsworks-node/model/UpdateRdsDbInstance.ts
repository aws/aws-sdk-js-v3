import { UpdateRdsDbInstanceInput } from "./UpdateRdsDbInstanceInput";
import { UpdateRdsDbInstanceOutput } from "./UpdateRdsDbInstanceOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateRdsDbInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRdsDbInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateRdsDbInstanceInput
  },
  output: {
    shape: UpdateRdsDbInstanceOutput
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
