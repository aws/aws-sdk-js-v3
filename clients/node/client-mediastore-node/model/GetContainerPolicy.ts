import { GetContainerPolicyInput } from "./GetContainerPolicyInput";
import { GetContainerPolicyOutput } from "./GetContainerPolicyOutput";
import { ContainerInUseException } from "./ContainerInUseException";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetContainerPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetContainerPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetContainerPolicyInput
  },
  output: {
    shape: GetContainerPolicyOutput
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
