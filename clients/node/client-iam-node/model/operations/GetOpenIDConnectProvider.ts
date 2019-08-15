import { GetOpenIDConnectProviderInput } from "../shapes/GetOpenIDConnectProviderInput";
import { GetOpenIDConnectProviderOutput } from "../shapes/GetOpenIDConnectProviderOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
