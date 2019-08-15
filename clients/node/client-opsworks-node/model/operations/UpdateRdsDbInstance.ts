import { UpdateRdsDbInstanceInput } from "../shapes/UpdateRdsDbInstanceInput";
import { UpdateRdsDbInstanceOutput } from "../shapes/UpdateRdsDbInstanceOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
