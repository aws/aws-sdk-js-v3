import { AssociatePrincipalWithPortfolioInput } from "../shapes/AssociatePrincipalWithPortfolioInput";
import { AssociatePrincipalWithPortfolioOutput } from "../shapes/AssociatePrincipalWithPortfolioOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
