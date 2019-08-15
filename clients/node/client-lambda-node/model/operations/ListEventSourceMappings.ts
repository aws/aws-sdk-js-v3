import { ListEventSourceMappingsInput } from "../shapes/ListEventSourceMappingsInput";
import { ListEventSourceMappingsOutput } from "../shapes/ListEventSourceMappingsOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListEventSourceMappings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListEventSourceMappings",
  http: {
    method: "GET",
    requestUri: "/2015-03-31/event-source-mappings/"
  },
  input: {
    shape: ListEventSourceMappingsInput
  },
  output: {
    shape: ListEventSourceMappingsOutput
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
