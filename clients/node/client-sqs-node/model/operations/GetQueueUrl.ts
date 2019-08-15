import { GetQueueUrlInput } from "../shapes/GetQueueUrlInput";
import { GetQueueUrlOutput } from "../shapes/GetQueueUrlOutput";
import { QueueDoesNotExist } from "../shapes/QueueDoesNotExist";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetQueueUrl: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetQueueUrl",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetQueueUrlInput
  },
  output: {
    shape: GetQueueUrlOutput,
    resultWrapper: "GetQueueUrlResult"
  },
  errors: [
    {
      shape: QueueDoesNotExist
    }
  ]
};
