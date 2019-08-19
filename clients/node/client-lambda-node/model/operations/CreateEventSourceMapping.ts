import { CreateEventSourceMappingInput } from "../shapes/CreateEventSourceMappingInput";
import { CreateEventSourceMappingOutput } from "../shapes/CreateEventSourceMappingOutput";
import { ServiceException } from "../shapes/ServiceException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateEventSourceMapping: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateEventSourceMapping",
  http: {
    method: "POST",
    requestUri: "/2015-03-31/event-source-mappings/"
  },
  input: {
    shape: CreateEventSourceMappingInput
  },
  output: {
    shape: CreateEventSourceMappingOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ResourceConflictException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
