import { ListCrawlersInput } from "./ListCrawlersInput";
import { ListCrawlersOutput } from "./ListCrawlersOutput";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListCrawlers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCrawlers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListCrawlersInput
  },
  output: {
    shape: ListCrawlersOutput
  },
  errors: [
    {
      shape: OperationTimeoutException
    }
  ]
};
