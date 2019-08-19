import { FilterLogEventsInput } from "../shapes/FilterLogEventsInput";
import { FilterLogEventsOutput } from "../shapes/FilterLogEventsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const FilterLogEvents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "FilterLogEvents",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: FilterLogEventsInput
  },
  output: {
    shape: FilterLogEventsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
