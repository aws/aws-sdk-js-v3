import { GetLifecyclePolicyInput } from "./GetLifecyclePolicyInput";
import { GetLifecyclePolicyOutput } from "./GetLifecyclePolicyOutput";
import { ContainerInUseException } from "./ContainerInUseException";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetLifecyclePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetLifecyclePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetLifecyclePolicyInput
  },
  output: {
    shape: GetLifecyclePolicyOutput
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
