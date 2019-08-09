import { RemoveClientIDFromOpenIDConnectProviderInput } from "./RemoveClientIDFromOpenIDConnectProviderInput";
import { RemoveClientIDFromOpenIDConnectProviderOutput } from "./RemoveClientIDFromOpenIDConnectProviderOutput";
import { InvalidInputException } from "./InvalidInputException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RemoveClientIDFromOpenIDConnectProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveClientIDFromOpenIDConnectProvider",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveClientIDFromOpenIDConnectProviderInput
  },
  output: {
    shape: RemoveClientIDFromOpenIDConnectProviderOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
