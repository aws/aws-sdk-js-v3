import { ListPortfolioAccessInput } from "../shapes/ListPortfolioAccessInput";
import { ListPortfolioAccessOutput } from "../shapes/ListPortfolioAccessOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPortfolioAccess: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPortfolioAccess",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPortfolioAccessInput
  },
  output: {
    shape: ListPortfolioAccessOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
