import { DisassociatePrincipalFromPortfolioInput } from "../shapes/DisassociatePrincipalFromPortfolioInput";
import { DisassociatePrincipalFromPortfolioOutput } from "../shapes/DisassociatePrincipalFromPortfolioOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociatePrincipalFromPortfolio: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociatePrincipalFromPortfolio",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociatePrincipalFromPortfolioInput
  },
  output: {
    shape: DisassociatePrincipalFromPortfolioOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
