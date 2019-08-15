import { DeletePortfolioInput } from "../shapes/DeletePortfolioInput";
import { DeletePortfolioOutput } from "../shapes/DeletePortfolioOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { TagOptionNotMigratedException } from "../shapes/TagOptionNotMigratedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
