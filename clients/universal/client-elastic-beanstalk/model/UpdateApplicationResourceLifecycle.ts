import { UpdateApplicationResourceLifecycleInput } from "./UpdateApplicationResourceLifecycleInput";
import { UpdateApplicationResourceLifecycleOutput } from "./UpdateApplicationResourceLifecycleOutput";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateApplicationResourceLifecycle: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateApplicationResourceLifecycle",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateApplicationResourceLifecycleInput
  },
  output: {
    shape: UpdateApplicationResourceLifecycleOutput,
    resultWrapper: "UpdateApplicationResourceLifecycleResult"
  },
  errors: [
    {
      shape: InsufficientPrivilegesException
    }
  ]
};
