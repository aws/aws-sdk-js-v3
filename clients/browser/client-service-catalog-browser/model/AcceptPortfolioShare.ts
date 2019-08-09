import { AcceptPortfolioShareInput } from "./AcceptPortfolioShareInput";
import { AcceptPortfolioShareOutput } from "./AcceptPortfolioShareOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AcceptPortfolioShare: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AcceptPortfolioShare",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AcceptPortfolioShareInput
  },
  output: {
    shape: AcceptPortfolioShareOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
    }
  ]
};
