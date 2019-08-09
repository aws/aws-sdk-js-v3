import { DeletePortfolioInput } from "./DeletePortfolioInput";
import { DeletePortfolioOutput } from "./DeletePortfolioOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceInUseException } from "./ResourceInUseException";
import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeletePortfolio: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePortfolio",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeletePortfolioInput
  },
  output: {
    shape: DeletePortfolioOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParametersException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: TagOptionNotMigratedException
    }
  ]
};
