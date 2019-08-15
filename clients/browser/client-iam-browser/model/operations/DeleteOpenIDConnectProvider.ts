import { DeleteOpenIDConnectProviderInput } from "../shapes/DeleteOpenIDConnectProviderInput";
import { DeleteOpenIDConnectProviderOutput } from "../shapes/DeleteOpenIDConnectProviderOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteOpenIDConnectProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteOpenIDConnectProvider",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteOpenIDConnectProviderInput
  },
  output: {
    shape: DeleteOpenIDConnectProviderOutput
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
