import { GetNamedQueryInput } from "../shapes/GetNamedQueryInput";
import { GetNamedQueryOutput } from "../shapes/GetNamedQueryOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
