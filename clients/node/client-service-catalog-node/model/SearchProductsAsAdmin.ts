import { SearchProductsAsAdminInput } from "./SearchProductsAsAdminInput";
import { SearchProductsAsAdminOutput } from "./SearchProductsAsAdminOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
