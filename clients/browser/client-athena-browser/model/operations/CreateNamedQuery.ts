import { CreateNamedQueryInput } from "../shapes/CreateNamedQueryInput";
import { CreateNamedQueryOutput } from "../shapes/CreateNamedQueryOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateNamedQuery: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateNamedQuery",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateNamedQueryInput
  },
  output: {
    shape: CreateNamedQueryOutput
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
