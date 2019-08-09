import { DeleteCrawlerInput } from "./DeleteCrawlerInput";
import { DeleteCrawlerOutput } from "./DeleteCrawlerOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { CrawlerRunningException } from "./CrawlerRunningException";
import { SchedulerTransitioningException } from "./SchedulerTransitioningException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
