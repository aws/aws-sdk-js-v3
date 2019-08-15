import { ListDeviceEventsInput } from "../shapes/ListDeviceEventsInput";
import { ListDeviceEventsOutput } from "../shapes/ListDeviceEventsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { RangeNotSatisfiableException } from "../shapes/RangeNotSatisfiableException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDeviceEvents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDeviceEvents",
  http: {
    method: "GET",
    requestUri: "/devices/{deviceId}/events"
  },
  input: {
    shape: ListDeviceEventsInput
  },
  output: {
    shape: ListDeviceEventsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: RangeNotSatisfiableException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalFailureException
    }
  ]
};
