import { PutCorsPolicyInput } from "./PutCorsPolicyInput";
import { PutCorsPolicyOutput } from "./PutCorsPolicyOutput";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { ContainerInUseException } from "./ContainerInUseException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
