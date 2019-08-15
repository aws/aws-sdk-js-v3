import { CreateCrawlerInput } from "../shapes/CreateCrawlerInput";
import { CreateCrawlerOutput } from "../shapes/CreateCrawlerOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "../shapes/ResourceNumberLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCrawler: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCrawler",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateCrawlerInput
  },
  output: {
    shape: CreateCrawlerOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: AlreadyExistsException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: ResourceNumberLimitExceededException
    }
  ]
};
