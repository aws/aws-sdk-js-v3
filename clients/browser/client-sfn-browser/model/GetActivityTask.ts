import { GetActivityTaskInput } from "./GetActivityTaskInput";
import { GetActivityTaskOutput } from "./GetActivityTaskOutput";
import { ActivityDoesNotExist } from "./ActivityDoesNotExist";
import { ActivityWorkerLimitExceeded } from "./ActivityWorkerLimitExceeded";
import { InvalidArn } from "./InvalidArn";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
