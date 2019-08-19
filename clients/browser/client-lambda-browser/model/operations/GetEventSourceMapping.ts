import { GetEventSourceMappingInput } from "../shapes/GetEventSourceMappingInput";
import { GetEventSourceMappingOutput } from "../shapes/GetEventSourceMappingOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
