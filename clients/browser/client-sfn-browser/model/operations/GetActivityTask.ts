import { GetActivityTaskInput } from "../shapes/GetActivityTaskInput";
import { GetActivityTaskOutput } from "../shapes/GetActivityTaskOutput";
import { ActivityDoesNotExist } from "../shapes/ActivityDoesNotExist";
import { ActivityWorkerLimitExceeded } from "../shapes/ActivityWorkerLimitExceeded";
import { InvalidArn } from "../shapes/InvalidArn";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetActivityTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetActivityTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetActivityTaskInput
  },
  output: {
    shape: GetActivityTaskOutput
  },
  errors: [
    {
      shape: ActivityDoesNotExist
    },
    {
      shape: ActivityWorkerLimitExceeded
    },
    {
      shape: InvalidArn
    }
  ]
};
