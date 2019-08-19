import { AssociateProductWithPortfolioInput } from "../shapes/AssociateProductWithPortfolioInput";
import { AssociateProductWithPortfolioOutput } from "../shapes/AssociateProductWithPortfolioOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
