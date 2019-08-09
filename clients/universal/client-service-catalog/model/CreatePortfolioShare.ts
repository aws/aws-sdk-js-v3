import { CreatePortfolioShareInput } from "./CreatePortfolioShareInput";
import { CreatePortfolioShareOutput } from "./CreatePortfolioShareOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
import { InvalidStateException } from "./InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
