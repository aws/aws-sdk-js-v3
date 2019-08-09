import { SearchProvisionedProductsInput } from "./SearchProvisionedProductsInput";
import { SearchProvisionedProductsOutput } from "./SearchProvisionedProductsOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SearchProvisionedProducts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchProvisionedProducts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchProvisionedProductsInput
  },
  output: {
    shape: SearchProvisionedProductsOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    }
  ]
};
