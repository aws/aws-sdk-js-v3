import { StopCrawlerInput } from "./StopCrawlerInput";
import { StopCrawlerOutput } from "./StopCrawlerOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { CrawlerNotRunningException } from "./CrawlerNotRunningException";
import { CrawlerStoppingException } from "./CrawlerStoppingException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
