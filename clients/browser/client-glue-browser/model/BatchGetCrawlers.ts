import { BatchGetCrawlersInput } from "./BatchGetCrawlersInput";
import { BatchGetCrawlersOutput } from "./BatchGetCrawlersOutput";
import { InvalidInputException } from "./InvalidInputException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
