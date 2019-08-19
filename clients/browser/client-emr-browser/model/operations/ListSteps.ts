import { ListStepsInput } from "../shapes/ListStepsInput";
import { ListStepsOutput } from "../shapes/ListStepsOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSteps: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSteps",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListStepsInput
  },
  output: {
    shape: ListStepsOutput
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
