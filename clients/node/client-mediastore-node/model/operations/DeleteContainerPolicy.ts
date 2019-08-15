import { DeleteContainerPolicyInput } from "../shapes/DeleteContainerPolicyInput";
import { DeleteContainerPolicyOutput } from "../shapes/DeleteContainerPolicyOutput";
import { ContainerInUseException } from "../shapes/ContainerInUseException";
import { ContainerNotFoundException } from "../shapes/ContainerNotFoundException";
import { PolicyNotFoundException } from "../shapes/PolicyNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
