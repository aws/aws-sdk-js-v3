import { ListPipelinesInput } from "../shapes/ListPipelinesInput";
import { ListPipelinesOutput } from "../shapes/ListPipelinesOutput";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPipelines: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPipelines",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPipelinesInput
  },
  output: {
    shape: ListPipelinesOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
