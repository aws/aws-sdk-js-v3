import { BatchGetTracesInput } from "../shapes/BatchGetTracesInput";
import { BatchGetTracesOutput } from "../shapes/BatchGetTracesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottledException } from "../shapes/ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
