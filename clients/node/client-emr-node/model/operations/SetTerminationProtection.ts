import { SetTerminationProtectionInput } from "../shapes/SetTerminationProtectionInput";
import { SetTerminationProtectionOutput } from "../shapes/SetTerminationProtectionOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetTerminationProtection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetTerminationProtection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetTerminationProtectionInput
  },
  output: {
    shape: SetTerminationProtectionOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
