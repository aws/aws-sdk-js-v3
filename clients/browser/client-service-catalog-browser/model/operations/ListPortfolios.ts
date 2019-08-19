import { ListPortfoliosInput } from "../shapes/ListPortfoliosInput";
import { ListPortfoliosOutput } from "../shapes/ListPortfoliosOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPortfolios: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPortfolios",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPortfoliosInput
  },
  output: {
    shape: ListPortfoliosOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    }
  ]
};
