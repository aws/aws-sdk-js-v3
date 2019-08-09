import { ListDevicesInput } from "./ListDevicesInput";
import { ListDevicesOutput } from "./ListDevicesOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListDevices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDevices",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDevicesInput
  },
  output: {
    shape: ListDevicesOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceAccountException
    }
  ]
};
