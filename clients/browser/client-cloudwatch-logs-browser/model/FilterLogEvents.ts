import { FilterLogEventsInput } from "./FilterLogEventsInput";
import { FilterLogEventsOutput } from "./FilterLogEventsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
