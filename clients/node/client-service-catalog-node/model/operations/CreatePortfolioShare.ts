import { CreatePortfolioShareInput } from "../shapes/CreatePortfolioShareInput";
import { CreatePortfolioShareOutput } from "../shapes/CreatePortfolioShareOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationNotSupportedException } from "../shapes/OperationNotSupportedException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePortfolioShare: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePortfolioShare",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePortfolioShareInput
  },
  output: {
    shape: CreatePortfolioShareOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidParametersException
    },
    {
      shape: OperationNotSupportedException
    },
    {
      shape: InvalidStateException
    }
  ]
};
