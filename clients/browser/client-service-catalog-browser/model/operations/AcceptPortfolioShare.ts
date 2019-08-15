import { AcceptPortfolioShareInput } from "../shapes/AcceptPortfolioShareInput";
import { AcceptPortfolioShareOutput } from "../shapes/AcceptPortfolioShareOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
