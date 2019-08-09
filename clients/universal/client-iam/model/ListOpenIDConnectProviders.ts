import { ListOpenIDConnectProvidersInput } from "./ListOpenIDConnectProvidersInput";
import { ListOpenIDConnectProvidersOutput } from "./ListOpenIDConnectProvidersOutput";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListOpenIDConnectProviders: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListOpenIDConnectProviders",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListOpenIDConnectProvidersInput
  },
  output: {
    shape: ListOpenIDConnectProvidersOutput,
    resultWrapper: "ListOpenIDConnectProvidersResult"
  },
  errors: [
    {
      shape: ServiceFailureException
    }
  ]
};
