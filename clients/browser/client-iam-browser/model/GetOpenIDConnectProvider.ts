import { GetOpenIDConnectProviderInput } from "./GetOpenIDConnectProviderInput";
import { GetOpenIDConnectProviderOutput } from "./GetOpenIDConnectProviderOutput";
import { InvalidInputException } from "./InvalidInputException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetOpenIDConnectProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetOpenIDConnectProvider",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetOpenIDConnectProviderInput
  },
  output: {
    shape: GetOpenIDConnectProviderOutput,
    resultWrapper: "GetOpenIDConnectProviderResult"
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
