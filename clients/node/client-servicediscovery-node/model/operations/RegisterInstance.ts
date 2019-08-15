import { RegisterInstanceInput } from "../shapes/RegisterInstanceInput";
import { RegisterInstanceOutput } from "../shapes/RegisterInstanceOutput";
import { DuplicateRequest } from "../shapes/DuplicateRequest";
import { InvalidInput } from "../shapes/InvalidInput";
import { ResourceInUse } from "../shapes/ResourceInUse";
import { ResourceLimitExceeded } from "../shapes/ResourceLimitExceeded";
import { ServiceNotFound } from "../shapes/ServiceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RegisterInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterInstanceInput
  },
  output: {
    shape: RegisterInstanceOutput
  },
  errors: [
    {
      shape: DuplicateRequest
    },
    {
      shape: InvalidInput
    },
    {
      shape: ResourceInUse
    },
    {
      shape: ResourceLimitExceeded
    },
    {
      shape: ServiceNotFound
    }
  ]
};
