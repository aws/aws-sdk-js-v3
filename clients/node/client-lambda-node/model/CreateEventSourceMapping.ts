import { CreateEventSourceMappingInput } from "./CreateEventSourceMappingInput";
import { CreateEventSourceMappingOutput } from "./CreateEventSourceMappingOutput";
import { ServiceException } from "./ServiceException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ResourceConflictException } from "./ResourceConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
