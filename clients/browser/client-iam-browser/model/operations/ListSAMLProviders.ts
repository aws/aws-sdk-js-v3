import { ListSAMLProvidersInput } from "../shapes/ListSAMLProvidersInput";
import { ListSAMLProvidersOutput } from "../shapes/ListSAMLProvidersOutput";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSAMLProviders: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSAMLProviders",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSAMLProvidersInput
  },
  output: {
    shape: ListSAMLProvidersOutput,
    resultWrapper: "ListSAMLProvidersResult"
  },
  errors: [
    {
      shape: ServiceFailureException
    }
  ]
};
