import { BatchGetNamedQueryInput } from "../shapes/BatchGetNamedQueryInput";
import { BatchGetNamedQueryOutput } from "../shapes/BatchGetNamedQueryOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchGetNamedQuery: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetNamedQuery",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetNamedQueryInput
  },
  output: {
    shape: BatchGetNamedQueryOutput
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
