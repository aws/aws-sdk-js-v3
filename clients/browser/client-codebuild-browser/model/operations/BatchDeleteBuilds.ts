import { BatchDeleteBuildsInput } from "../shapes/BatchDeleteBuildsInput";
import { BatchDeleteBuildsOutput } from "../shapes/BatchDeleteBuildsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchDeleteBuilds: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDeleteBuilds",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchDeleteBuildsInput
  },
  output: {
    shape: BatchDeleteBuildsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    }
  ]
};
