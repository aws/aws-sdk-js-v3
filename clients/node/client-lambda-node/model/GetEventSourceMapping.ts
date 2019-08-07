import { GetEventSourceMappingInput } from "./GetEventSourceMappingInput";
import { GetEventSourceMappingOutput } from "./GetEventSourceMappingOutput";
import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetEventSourceMapping: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetEventSourceMapping",
  http: {
    method: "GET",
    requestUri: "/2015-03-31/event-source-mappings/{UUID}"
  },
  input: {
    shape: GetEventSourceMappingInput
  },
  output: {
    shape: GetEventSourceMappingOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
