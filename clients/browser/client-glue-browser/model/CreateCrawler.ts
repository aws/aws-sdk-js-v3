import { CreateCrawlerInput } from "./CreateCrawlerInput";
import { CreateCrawlerOutput } from "./CreateCrawlerOutput";
import { InvalidInputException } from "./InvalidInputException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
