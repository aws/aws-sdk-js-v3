import { GetLifecyclePolicyInput } from "../shapes/GetLifecyclePolicyInput";
import { GetLifecyclePolicyOutput } from "../shapes/GetLifecyclePolicyOutput";
import { ContainerInUseException } from "../shapes/ContainerInUseException";
import { ContainerNotFoundException } from "../shapes/ContainerNotFoundException";
import { PolicyNotFoundException } from "../shapes/PolicyNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
