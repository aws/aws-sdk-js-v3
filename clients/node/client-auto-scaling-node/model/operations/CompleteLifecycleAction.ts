import { CompleteLifecycleActionInput } from "../shapes/CompleteLifecycleActionInput";
import { CompleteLifecycleActionOutput } from "../shapes/CompleteLifecycleActionOutput";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CompleteLifecycleAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CompleteLifecycleAction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CompleteLifecycleActionInput
  },
  output: {
    shape: CompleteLifecycleActionOutput,
    resultWrapper: "CompleteLifecycleActionResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
