import { UpdatePortfolioInput } from "./UpdatePortfolioInput";
import { UpdatePortfolioOutput } from "./UpdatePortfolioOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdatePortfolio: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdatePortfolio",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdatePortfolioInput
  },
  output: {
    shape: UpdatePortfolioOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: TagOptionNotMigratedException
    }
  ]
};
