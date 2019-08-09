import { ListDeviceInstancesInput } from "./ListDeviceInstancesInput";
import { ListDeviceInstancesOutput } from "./ListDeviceInstancesOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
