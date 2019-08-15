import { StartCrawlerInput } from "../shapes/StartCrawlerInput";
import { StartCrawlerOutput } from "../shapes/StartCrawlerOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { CrawlerRunningException } from "../shapes/CrawlerRunningException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
