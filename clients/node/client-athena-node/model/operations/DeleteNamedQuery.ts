import { DeleteNamedQueryInput } from "../shapes/DeleteNamedQueryInput";
import { DeleteNamedQueryOutput } from "../shapes/DeleteNamedQueryOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteNamedQuery: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteNamedQuery",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteNamedQueryInput
  },
  output: {
    shape: DeleteNamedQueryOutput
  },
  errors: [
    {
      shape: InternalServerException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
