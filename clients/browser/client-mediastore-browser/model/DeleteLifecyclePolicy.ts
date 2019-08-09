import { DeleteLifecyclePolicyInput } from "./DeleteLifecyclePolicyInput";
import { DeleteLifecyclePolicyOutput } from "./DeleteLifecyclePolicyOutput";
import { ContainerInUseException } from "./ContainerInUseException";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteLifecyclePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLifecyclePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteLifecyclePolicyInput
  },
  output: {
    shape: DeleteLifecyclePolicyOutput
  },
  errors: [
    {
      shape: ContainerInUseException
    },
    {
      shape: ContainerNotFoundException
    },
    {
      shape: PolicyNotFoundException
    },
    {
      shape: InternalServerError
    }
  ]
};
