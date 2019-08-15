import { ListQueuesInput } from "../shapes/ListQueuesInput";
import { ListQueuesOutput } from "../shapes/ListQueuesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListQueues: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListQueues",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListQueuesInput
  },
  output: {
    shape: ListQueuesOutput,
    resultWrapper: "ListQueuesResult"
  },
  errors: []
};
