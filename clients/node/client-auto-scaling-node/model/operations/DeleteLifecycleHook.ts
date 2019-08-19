import { DeleteLifecycleHookInput } from "../shapes/DeleteLifecycleHookInput";
import { DeleteLifecycleHookOutput } from "../shapes/DeleteLifecycleHookOutput";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteLifecycleHook: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLifecycleHook",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteLifecycleHookInput
  },
  output: {
    shape: DeleteLifecycleHookOutput,
    resultWrapper: "DeleteLifecycleHookResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
