import { DisassociatePrincipalFromPortfolioInput } from "./DisassociatePrincipalFromPortfolioInput";
import { DisassociatePrincipalFromPortfolioOutput } from "./DisassociatePrincipalFromPortfolioOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
