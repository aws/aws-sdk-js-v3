import { ListDeviceEventsInput } from "../shapes/ListDeviceEventsInput";
import { ListDeviceEventsOutput } from "../shapes/ListDeviceEventsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDeviceEvents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDeviceEvents",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDeviceEventsInput
  },
  output: {
    shape: ListDeviceEventsOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
