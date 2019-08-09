import { BatchGetNamedQueryInput } from "./BatchGetNamedQueryInput";
import { BatchGetNamedQueryOutput } from "./BatchGetNamedQueryOutput";
import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
