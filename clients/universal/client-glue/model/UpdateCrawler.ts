import { UpdateCrawlerInput } from "./UpdateCrawlerInput";
import { UpdateCrawlerOutput } from "./UpdateCrawlerOutput";
import { InvalidInputException } from "./InvalidInputException";
import { VersionMismatchException } from "./VersionMismatchException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { CrawlerRunningException } from "./CrawlerRunningException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
