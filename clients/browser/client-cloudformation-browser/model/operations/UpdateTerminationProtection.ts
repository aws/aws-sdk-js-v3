import { UpdateTerminationProtectionInput } from "../shapes/UpdateTerminationProtectionInput";
import { UpdateTerminationProtectionOutput } from "../shapes/UpdateTerminationProtectionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateTerminationProtection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateTerminationProtection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateTerminationProtectionInput
  },
  output: {
    shape: UpdateTerminationProtectionOutput,
    resultWrapper: "UpdateTerminationProtectionResult"
  },
  errors: []
};
