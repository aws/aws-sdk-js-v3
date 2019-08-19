import { DeleteCrawlerInput } from "../shapes/DeleteCrawlerInput";
import { DeleteCrawlerOutput } from "../shapes/DeleteCrawlerOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { CrawlerRunningException } from "../shapes/CrawlerRunningException";
import { SchedulerTransitioningException } from "../shapes/SchedulerTransitioningException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteCrawler: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCrawler",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteCrawlerInput
  },
  output: {
    shape: DeleteCrawlerOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: CrawlerRunningException
    },
    {
      shape: SchedulerTransitioningException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
