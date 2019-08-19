import { RemoveClientIDFromOpenIDConnectProviderInput } from "../shapes/RemoveClientIDFromOpenIDConnectProviderInput";
import { RemoveClientIDFromOpenIDConnectProviderOutput } from "../shapes/RemoveClientIDFromOpenIDConnectProviderOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
