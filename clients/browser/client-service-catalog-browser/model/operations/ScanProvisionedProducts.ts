import { ScanProvisionedProductsInput } from "../shapes/ScanProvisionedProductsInput";
import { ScanProvisionedProductsOutput } from "../shapes/ScanProvisionedProductsOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ScanProvisionedProducts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ScanProvisionedProducts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ScanProvisionedProductsInput
  },
  output: {
    shape: ScanProvisionedProductsOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    }
  ]
};
