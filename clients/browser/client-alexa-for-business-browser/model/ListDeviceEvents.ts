import { ListDeviceEventsInput } from "./ListDeviceEventsInput";
import { ListDeviceEventsOutput } from "./ListDeviceEventsOutput";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
