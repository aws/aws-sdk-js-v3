import { ListDeviceInstancesInput } from "../shapes/ListDeviceInstancesInput";
import { ListDeviceInstancesOutput } from "../shapes/ListDeviceInstancesOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDeviceInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDeviceInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDeviceInstancesInput
  },
  output: {
    shape: ListDeviceInstancesOutput
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
