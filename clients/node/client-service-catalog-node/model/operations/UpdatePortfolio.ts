import { UpdatePortfolioInput } from "../shapes/UpdatePortfolioInput";
import { UpdatePortfolioOutput } from "../shapes/UpdatePortfolioOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { TagOptionNotMigratedException } from "../shapes/TagOptionNotMigratedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
