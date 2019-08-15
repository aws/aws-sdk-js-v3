import { SearchProductsAsAdminInput } from "../shapes/SearchProductsAsAdminInput";
import { SearchProductsAsAdminOutput } from "../shapes/SearchProductsAsAdminOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SearchProductsAsAdmin: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchProductsAsAdmin",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchProductsAsAdminInput
  },
  output: {
    shape: SearchProductsAsAdminOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParametersException
    }
  ]
};
