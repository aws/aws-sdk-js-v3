import { UpdateOpenIDConnectProviderThumbprintInput } from "../shapes/UpdateOpenIDConnectProviderThumbprintInput";
import { UpdateOpenIDConnectProviderThumbprintOutput } from "../shapes/UpdateOpenIDConnectProviderThumbprintOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateOpenIDConnectProviderThumbprint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateOpenIDConnectProviderThumbprint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateOpenIDConnectProviderThumbprintInput
  },
  output: {
    shape: UpdateOpenIDConnectProviderThumbprintOutput
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
