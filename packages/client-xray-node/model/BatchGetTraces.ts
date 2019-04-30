import { BatchGetTracesInput } from "./BatchGetTracesInput";
import { BatchGetTracesOutput } from "./BatchGetTracesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottledException } from "./ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchGetTraces: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetTraces",
  http: {
    method: "POST",
    requestUri: "/Traces"
  },
  input: {
    shape: BatchGetTracesInput
  },
  output: {
    shape: BatchGetTracesOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottledException
    }
  ]
};
