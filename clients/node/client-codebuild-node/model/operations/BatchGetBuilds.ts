import { BatchGetBuildsInput } from "../shapes/BatchGetBuildsInput";
import { BatchGetBuildsOutput } from "../shapes/BatchGetBuildsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchGetBuilds: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetBuilds",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetBuildsInput
  },
  output: {
    shape: BatchGetBuildsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    }
  ]
};
