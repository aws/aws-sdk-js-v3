import { DeletePortfolioShareInput } from "../shapes/DeletePortfolioShareInput";
import { DeletePortfolioShareOutput } from "../shapes/DeletePortfolioShareOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationNotSupportedException } from "../shapes/OperationNotSupportedException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeletePortfolioShare: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePortfolioShare",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeletePortfolioShareInput
  },
  output: {
    shape: DeletePortfolioShareOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
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
