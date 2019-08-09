import { DeleteCorsPolicyInput } from "./DeleteCorsPolicyInput";
import { DeleteCorsPolicyOutput } from "./DeleteCorsPolicyOutput";
import { ContainerInUseException } from "./ContainerInUseException";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { CorsPolicyNotFoundException } from "./CorsPolicyNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
