import { ListPortfoliosForProductInput } from "../shapes/ListPortfoliosForProductInput";
import { ListPortfoliosForProductOutput } from "../shapes/ListPortfoliosForProductOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPortfoliosForProduct: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPortfoliosForProduct",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPortfoliosForProductInput
  },
  output: {
    shape: ListPortfoliosForProductOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
