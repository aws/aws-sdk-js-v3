import { UpdateCrawlerInput } from "../shapes/UpdateCrawlerInput";
import { UpdateCrawlerOutput } from "../shapes/UpdateCrawlerOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { VersionMismatchException } from "../shapes/VersionMismatchException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { CrawlerRunningException } from "../shapes/CrawlerRunningException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateCrawler: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateCrawler",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateCrawlerInput
  },
  output: {
    shape: UpdateCrawlerOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: VersionMismatchException
    },
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
