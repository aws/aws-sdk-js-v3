import { ListDevicesInput } from "./ListDevicesInput";
import { ListDevicesOutput } from "./ListDevicesOutput";
import { RangeNotSatisfiableException } from "./RangeNotSatisfiableException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListDevices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDevices",
  http: {
    method: "GET",
    requestUri: "/devices"
  },
  input: {
    shape: ListDevicesInput
  },
  output: {
    shape: ListDevicesOutput
  },
  errors: [
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
