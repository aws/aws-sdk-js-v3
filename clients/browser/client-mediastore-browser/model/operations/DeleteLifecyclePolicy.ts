import { DeleteLifecyclePolicyInput } from "../shapes/DeleteLifecyclePolicyInput";
import { DeleteLifecyclePolicyOutput } from "../shapes/DeleteLifecyclePolicyOutput";
import { ContainerInUseException } from "../shapes/ContainerInUseException";
import { ContainerNotFoundException } from "../shapes/ContainerNotFoundException";
import { PolicyNotFoundException } from "../shapes/PolicyNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
