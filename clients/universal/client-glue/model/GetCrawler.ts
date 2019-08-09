import { GetCrawlerInput } from "./GetCrawlerInput";
import { GetCrawlerOutput } from "./GetCrawlerOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCrawler: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCrawler",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCrawlerInput
  },
  output: {
    shape: GetCrawlerOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
