import { PutLifecyclePolicyInput } from "./PutLifecyclePolicyInput";
import { PutLifecyclePolicyOutput } from "./PutLifecyclePolicyOutput";
import { ContainerInUseException } from "./ContainerInUseException";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
