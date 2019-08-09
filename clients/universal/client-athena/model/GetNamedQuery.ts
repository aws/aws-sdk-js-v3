import { GetNamedQueryInput } from "./GetNamedQueryInput";
import { GetNamedQueryOutput } from "./GetNamedQueryOutput";
import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetNamedQuery: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetNamedQuery",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetNamedQueryInput
  },
  output: {
    shape: GetNamedQueryOutput
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
