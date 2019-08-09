import { AssociatePrincipalWithPortfolioInput } from "./AssociatePrincipalWithPortfolioInput";
import { AssociatePrincipalWithPortfolioOutput } from "./AssociatePrincipalWithPortfolioOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssociatePrincipalWithPortfolio: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociatePrincipalWithPortfolio",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociatePrincipalWithPortfolioInput
  },
  output: {
    shape: AssociatePrincipalWithPortfolioOutput
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
    }
  ]
};
