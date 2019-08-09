import { GetTerminologyInput } from "./GetTerminologyInput";
import { GetTerminologyOutput } from "./GetTerminologyOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
