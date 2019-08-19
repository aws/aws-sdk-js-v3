import { GetCrawlerInput } from "../shapes/GetCrawlerInput";
import { GetCrawlerOutput } from "../shapes/GetCrawlerOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
