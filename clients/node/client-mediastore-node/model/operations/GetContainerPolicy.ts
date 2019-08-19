import { GetContainerPolicyInput } from "../shapes/GetContainerPolicyInput";
import { GetContainerPolicyOutput } from "../shapes/GetContainerPolicyOutput";
import { ContainerInUseException } from "../shapes/ContainerInUseException";
import { ContainerNotFoundException } from "../shapes/ContainerNotFoundException";
import { PolicyNotFoundException } from "../shapes/PolicyNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
