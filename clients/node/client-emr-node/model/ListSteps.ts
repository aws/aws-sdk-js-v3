import { ListStepsInput } from "./ListStepsInput";
import { ListStepsOutput } from "./ListStepsOutput";
import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
