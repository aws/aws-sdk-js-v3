import { PutLifecyclePolicyInput } from "../shapes/PutLifecyclePolicyInput";
import { PutLifecyclePolicyOutput } from "../shapes/PutLifecyclePolicyOutput";
import { ContainerInUseException } from "../shapes/ContainerInUseException";
import { ContainerNotFoundException } from "../shapes/ContainerNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutLifecyclePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutLifecyclePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutLifecyclePolicyInput
  },
  output: {
    shape: PutLifecyclePolicyOutput
  },
  errors: [
    {
      shape: ContainerInUseException
    },
    {
      shape: ContainerNotFoundException
    },
    {
      shape: InternalServerError
    }
  ]
};
