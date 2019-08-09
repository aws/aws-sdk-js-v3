import { CompleteLifecycleActionInput } from "./CompleteLifecycleActionInput";
import { CompleteLifecycleActionOutput } from "./CompleteLifecycleActionOutput";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
