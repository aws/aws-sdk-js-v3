import { DisassociateProductFromPortfolioInput } from "./DisassociateProductFromPortfolioInput";
import { DisassociateProductFromPortfolioOutput } from "./DisassociateProductFromPortfolioOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
