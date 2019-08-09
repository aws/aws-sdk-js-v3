import { SearchProductsInput } from "./SearchProductsInput";
import { SearchProductsOutput } from "./SearchProductsOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
