import { CancelStepsInput } from "../shapes/CancelStepsInput";
import { CancelStepsOutput } from "../shapes/CancelStepsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelSteps: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelSteps",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelStepsInput
  },
  output: {
    shape: CancelStepsOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidRequestException
    }
  ]
};
