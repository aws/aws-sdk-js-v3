import { PutLifecycleHookInput } from "../shapes/PutLifecycleHookInput";
import { PutLifecycleHookOutput } from "../shapes/PutLifecycleHookOutput";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutLifecycleHook: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutLifecycleHook",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutLifecycleHookInput
  },
  output: {
    shape: PutLifecycleHookOutput,
    resultWrapper: "PutLifecycleHookResult"
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
