import { SearchProductsInput } from "../shapes/SearchProductsInput";
import { SearchProductsOutput } from "../shapes/SearchProductsOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SearchProducts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchProducts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchProductsInput
  },
  output: {
    shape: SearchProductsOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    }
  ]
};
