import { PutLifecycleHookInput } from "./PutLifecycleHookInput";
import { PutLifecycleHookOutput } from "./PutLifecycleHookOutput";
import { LimitExceededFault } from "./LimitExceededFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
