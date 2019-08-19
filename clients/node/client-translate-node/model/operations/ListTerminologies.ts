import { ListTerminologiesInput } from "../shapes/ListTerminologiesInput";
import { ListTerminologiesOutput } from "../shapes/ListTerminologiesOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTerminologies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTerminologies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTerminologiesInput
  },
  output: {
    shape: ListTerminologiesOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalServerException
    }
  ]
};
