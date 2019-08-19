import { PutCorsPolicyInput } from "../shapes/PutCorsPolicyInput";
import { PutCorsPolicyOutput } from "../shapes/PutCorsPolicyOutput";
import { ContainerNotFoundException } from "../shapes/ContainerNotFoundException";
import { ContainerInUseException } from "../shapes/ContainerInUseException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutCorsPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutCorsPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutCorsPolicyInput
  },
  output: {
    shape: PutCorsPolicyOutput
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
