import { ListAcceptedPortfolioSharesInput } from "../shapes/ListAcceptedPortfolioSharesInput";
import { ListAcceptedPortfolioSharesOutput } from "../shapes/ListAcceptedPortfolioSharesOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationNotSupportedException } from "../shapes/OperationNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAcceptedPortfolioShares: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAcceptedPortfolioShares",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAcceptedPortfolioSharesInput
  },
  output: {
    shape: ListAcceptedPortfolioSharesOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    },
    {
      shape: OperationNotSupportedException
    }
  ]
};
