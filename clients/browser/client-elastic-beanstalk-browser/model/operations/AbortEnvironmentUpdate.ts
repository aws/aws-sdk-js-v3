import { AbortEnvironmentUpdateInput } from "../shapes/AbortEnvironmentUpdateInput";
import { AbortEnvironmentUpdateOutput } from "../shapes/AbortEnvironmentUpdateOutput";
import { InsufficientPrivilegesException } from "../shapes/InsufficientPrivilegesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AbortEnvironmentUpdate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AbortEnvironmentUpdate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AbortEnvironmentUpdateInput
  },
  output: {
    shape: AbortEnvironmentUpdateOutput
  },
  errors: [
    {
      shape: InsufficientPrivilegesException
    }
  ]
};
