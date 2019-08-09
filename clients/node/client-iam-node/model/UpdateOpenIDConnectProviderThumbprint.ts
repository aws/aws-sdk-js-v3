import { UpdateOpenIDConnectProviderThumbprintInput } from "./UpdateOpenIDConnectProviderThumbprintInput";
import { UpdateOpenIDConnectProviderThumbprintOutput } from "./UpdateOpenIDConnectProviderThumbprintOutput";
import { InvalidInputException } from "./InvalidInputException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
