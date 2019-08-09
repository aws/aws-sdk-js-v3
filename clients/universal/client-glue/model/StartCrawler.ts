import { StartCrawlerInput } from "./StartCrawlerInput";
import { StartCrawlerOutput } from "./StartCrawlerOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { CrawlerRunningException } from "./CrawlerRunningException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartCrawler: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartCrawler",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartCrawlerInput
  },
  output: {
    shape: StartCrawlerOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: CrawlerRunningException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
