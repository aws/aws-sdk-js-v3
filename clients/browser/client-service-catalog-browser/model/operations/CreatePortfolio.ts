import { CreatePortfolioInput } from "../shapes/CreatePortfolioInput";
import { CreatePortfolioOutput } from "../shapes/CreatePortfolioOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { TagOptionNotMigratedException } from "../shapes/TagOptionNotMigratedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePortfolio: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePortfolio",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePortfolioInput
  },
  output: {
    shape: CreatePortfolioOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: TagOptionNotMigratedException
    }
  ]
};
