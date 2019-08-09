import { ListDeviceEventsInput } from "./ListDeviceEventsInput";
import { ListDeviceEventsOutput } from "./ListDeviceEventsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { RangeNotSatisfiableException } from "./RangeNotSatisfiableException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
