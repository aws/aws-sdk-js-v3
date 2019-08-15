import { StopCrawlerInput } from "../shapes/StopCrawlerInput";
import { StopCrawlerOutput } from "../shapes/StopCrawlerOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { CrawlerNotRunningException } from "../shapes/CrawlerNotRunningException";
import { CrawlerStoppingException } from "../shapes/CrawlerStoppingException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopCrawler: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopCrawler",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopCrawlerInput
  },
  output: {
    shape: StopCrawlerOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: CrawlerNotRunningException
    },
    {
      shape: CrawlerStoppingException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
