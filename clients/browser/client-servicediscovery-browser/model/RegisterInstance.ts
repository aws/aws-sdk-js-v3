import { RegisterInstanceInput } from "./RegisterInstanceInput";
import { RegisterInstanceOutput } from "./RegisterInstanceOutput";
import { DuplicateRequest } from "./DuplicateRequest";
import { InvalidInput } from "./InvalidInput";
import { ResourceInUse } from "./ResourceInUse";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { ServiceNotFound } from "./ServiceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
