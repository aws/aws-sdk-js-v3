import { DeleteOpenIDConnectProviderInput } from "./DeleteOpenIDConnectProviderInput";
import { DeleteOpenIDConnectProviderOutput } from "./DeleteOpenIDConnectProviderOutput";
import { InvalidInputException } from "./InvalidInputException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
