import { ListAcceptedPortfolioSharesInput } from "./ListAcceptedPortfolioSharesInput";
import { ListAcceptedPortfolioSharesOutput } from "./ListAcceptedPortfolioSharesOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
