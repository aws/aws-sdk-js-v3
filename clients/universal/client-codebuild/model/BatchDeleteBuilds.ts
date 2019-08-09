import { BatchDeleteBuildsInput } from "./BatchDeleteBuildsInput";
import { BatchDeleteBuildsOutput } from "./BatchDeleteBuildsOutput";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
