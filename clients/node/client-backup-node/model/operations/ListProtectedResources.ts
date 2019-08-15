import { ListProtectedResourcesInput } from "../shapes/ListProtectedResourcesInput";
import { ListProtectedResourcesOutput } from "../shapes/ListProtectedResourcesOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListProtectedResources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListProtectedResources",
  http: {
    method: "GET",
    requestUri: "/resources/"
  },
  input: {
    shape: ListProtectedResourcesInput
  },
  output: {
    shape: ListProtectedResourcesOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
