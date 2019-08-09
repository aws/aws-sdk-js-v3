import { ListPrincipalsForPortfolioInput } from "./ListPrincipalsForPortfolioInput";
import { ListPrincipalsForPortfolioOutput } from "./ListPrincipalsForPortfolioOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
