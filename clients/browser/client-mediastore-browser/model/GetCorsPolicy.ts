import { GetCorsPolicyInput } from "./GetCorsPolicyInput";
import { GetCorsPolicyOutput } from "./GetCorsPolicyOutput";
import { ContainerInUseException } from "./ContainerInUseException";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { CorsPolicyNotFoundException } from "./CorsPolicyNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
