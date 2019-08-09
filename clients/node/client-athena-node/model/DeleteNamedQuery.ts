import { DeleteNamedQueryInput } from "./DeleteNamedQueryInput";
import { DeleteNamedQueryOutput } from "./DeleteNamedQueryOutput";
import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
