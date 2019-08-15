import { DisassociateProductFromPortfolioInput } from "../shapes/DisassociateProductFromPortfolioInput";
import { DisassociateProductFromPortfolioOutput } from "../shapes/DisassociateProductFromPortfolioOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateProductFromPortfolio: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateProductFromPortfolio",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateProductFromPortfolioInput
  },
  output: {
    shape: DisassociateProductFromPortfolioOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InvalidParametersException
    }
  ]
};
