import { ListPrincipalsForPortfolioInput } from "../shapes/ListPrincipalsForPortfolioInput";
import { ListPrincipalsForPortfolioOutput } from "../shapes/ListPrincipalsForPortfolioOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPrincipalsForPortfolio: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPrincipalsForPortfolio",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPrincipalsForPortfolioInput
  },
  output: {
    shape: ListPrincipalsForPortfolioOutput
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
