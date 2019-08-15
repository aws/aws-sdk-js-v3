import { SetInstanceProtectionInput } from "../shapes/SetInstanceProtectionInput";
import { SetInstanceProtectionOutput } from "../shapes/SetInstanceProtectionOutput";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetInstanceProtection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetInstanceProtection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetInstanceProtectionInput
  },
  output: {
    shape: SetInstanceProtectionOutput,
    resultWrapper: "SetInstanceProtectionResult"
  },
  errors: [
    {
      shape: LimitExceededFault
    },
    {
      shape: ResourceContentionFault
    }
  ]
};
