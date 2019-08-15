import { ListDevicesInput } from "../shapes/ListDevicesInput";
import { ListDevicesOutput } from "../shapes/ListDevicesOutput";
import { RangeNotSatisfiableException } from "../shapes/RangeNotSatisfiableException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
