import { DeletePortfolioShareInput } from "./DeletePortfolioShareInput";
import { DeletePortfolioShareOutput } from "./DeletePortfolioShareOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
import { InvalidStateException } from "./InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
