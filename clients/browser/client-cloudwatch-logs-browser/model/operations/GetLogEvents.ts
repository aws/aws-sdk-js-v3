import { GetLogEventsInput } from "../shapes/GetLogEventsInput";
import { GetLogEventsOutput } from "../shapes/GetLogEventsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetLogEvents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetLogEvents",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetLogEventsInput
  },
  output: {
    shape: GetLogEventsOutput
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
