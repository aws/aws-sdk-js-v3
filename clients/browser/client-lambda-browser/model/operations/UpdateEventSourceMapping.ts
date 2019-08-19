import { UpdateEventSourceMappingInput } from "../shapes/UpdateEventSourceMappingInput";
import { UpdateEventSourceMappingOutput } from "../shapes/UpdateEventSourceMappingOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateEventSourceMapping: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateEventSourceMapping",
  http: {
    method: "PUT",
    requestUri: "/2015-03-31/event-source-mappings/{UUID}"
  },
  input: {
    shape: UpdateEventSourceMappingInput
  },
  output: {
    shape: UpdateEventSourceMappingOutput
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
    },
    {
      shape: ResourceConflictException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
