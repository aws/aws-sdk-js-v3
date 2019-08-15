import { ListConstraintsForPortfolioInput } from "../shapes/ListConstraintsForPortfolioInput";
import { ListConstraintsForPortfolioOutput } from "../shapes/ListConstraintsForPortfolioOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListConstraintsForPortfolio: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListConstraintsForPortfolio",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListConstraintsForPortfolioInput
  },
  output: {
    shape: ListConstraintsForPortfolioOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParametersException
    }
  ]
};
