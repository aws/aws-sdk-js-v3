import { AbortEnvironmentUpdateInput } from "./AbortEnvironmentUpdateInput";
import { AbortEnvironmentUpdateOutput } from "./AbortEnvironmentUpdateOutput";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
