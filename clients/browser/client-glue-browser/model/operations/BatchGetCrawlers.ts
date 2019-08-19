import { BatchGetCrawlersInput } from "../shapes/BatchGetCrawlersInput";
import { BatchGetCrawlersOutput } from "../shapes/BatchGetCrawlersOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchGetCrawlers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetCrawlers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetCrawlersInput
  },
  output: {
    shape: BatchGetCrawlersOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
