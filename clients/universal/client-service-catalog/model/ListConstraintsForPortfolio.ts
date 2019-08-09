import { ListConstraintsForPortfolioInput } from "./ListConstraintsForPortfolioInput";
import { ListConstraintsForPortfolioOutput } from "./ListConstraintsForPortfolioOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
