import { GetLogEventsInput } from "./GetLogEventsInput";
import { GetLogEventsOutput } from "./GetLogEventsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
