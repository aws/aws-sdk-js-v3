import { GetCorsPolicyInput } from "../shapes/GetCorsPolicyInput";
import { GetCorsPolicyOutput } from "../shapes/GetCorsPolicyOutput";
import { ContainerInUseException } from "../shapes/ContainerInUseException";
import { ContainerNotFoundException } from "../shapes/ContainerNotFoundException";
import { CorsPolicyNotFoundException } from "../shapes/CorsPolicyNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCorsPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCorsPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCorsPolicyInput
  },
  output: {
    shape: GetCorsPolicyOutput
  },
  errors: [
    {
      shape: ContainerInUseException
    },
    {
      shape: ContainerNotFoundException
    },
    {
      shape: CorsPolicyNotFoundException
    },
    {
      shape: InternalServerError
    }
  ]
};
