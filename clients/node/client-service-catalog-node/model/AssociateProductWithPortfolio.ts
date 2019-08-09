import { AssociateProductWithPortfolioInput } from "./AssociateProductWithPortfolioInput";
import { AssociateProductWithPortfolioOutput } from "./AssociateProductWithPortfolioOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssociateProductWithPortfolio: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateProductWithPortfolio",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateProductWithPortfolioInput
  },
  output: {
    shape: AssociateProductWithPortfolioOutput
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
