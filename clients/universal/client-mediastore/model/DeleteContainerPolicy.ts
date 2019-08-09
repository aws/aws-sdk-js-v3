import { DeleteContainerPolicyInput } from "./DeleteContainerPolicyInput";
import { DeleteContainerPolicyOutput } from "./DeleteContainerPolicyOutput";
import { ContainerInUseException } from "./ContainerInUseException";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteContainerPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteContainerPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteContainerPolicyInput
  },
  output: {
    shape: DeleteContainerPolicyOutput
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
