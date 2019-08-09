import { ListPortfoliosForProductInput } from "./ListPortfoliosForProductInput";
import { ListPortfoliosForProductOutput } from "./ListPortfoliosForProductOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
