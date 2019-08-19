import { GetCrawlersInput } from "../shapes/GetCrawlersInput";
import { GetCrawlersOutput } from "../shapes/GetCrawlersOutput";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCrawlers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCrawlers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCrawlersInput
  },
  output: {
    shape: GetCrawlersOutput
  },
  errors: [
    {
      shape: OperationTimeoutException
    }
  ]
};
