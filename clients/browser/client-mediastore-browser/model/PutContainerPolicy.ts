import { PutContainerPolicyInput } from "./PutContainerPolicyInput";
import { PutContainerPolicyOutput } from "./PutContainerPolicyOutput";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { ContainerInUseException } from "./ContainerInUseException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
