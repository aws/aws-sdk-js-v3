import { DeleteCorsPolicyInput } from "../shapes/DeleteCorsPolicyInput";
import { DeleteCorsPolicyOutput } from "../shapes/DeleteCorsPolicyOutput";
import { ContainerInUseException } from "../shapes/ContainerInUseException";
import { ContainerNotFoundException } from "../shapes/ContainerNotFoundException";
import { CorsPolicyNotFoundException } from "../shapes/CorsPolicyNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteCorsPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCorsPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteCorsPolicyInput
  },
  output: {
    shape: DeleteCorsPolicyOutput
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
