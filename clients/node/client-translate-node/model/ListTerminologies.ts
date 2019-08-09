import { ListTerminologiesInput } from "./ListTerminologiesInput";
import { ListTerminologiesOutput } from "./ListTerminologiesOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
