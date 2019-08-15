import { PutContainerPolicyInput } from "../shapes/PutContainerPolicyInput";
import { PutContainerPolicyOutput } from "../shapes/PutContainerPolicyOutput";
import { ContainerNotFoundException } from "../shapes/ContainerNotFoundException";
import { ContainerInUseException } from "../shapes/ContainerInUseException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutContainerPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutContainerPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutContainerPolicyInput
  },
  output: {
    shape: PutContainerPolicyOutput
  },
  errors: [
    {
      shape: ContainerNotFoundException
    },
    {
      shape: ContainerInUseException
    },
    {
      shape: InternalServerError
    }
  ]
};
