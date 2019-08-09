import { CreatePortfolioInput } from "./CreatePortfolioInput";
import { CreatePortfolioOutput } from "./CreatePortfolioOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { LimitExceededException } from "./LimitExceededException";
import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
