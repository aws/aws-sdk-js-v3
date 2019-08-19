import { GetTerminologyInput } from "../shapes/GetTerminologyInput";
import { GetTerminologyOutput } from "../shapes/GetTerminologyOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetTerminology: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTerminology",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTerminologyInput
  },
  output: {
    shape: GetTerminologyOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
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
