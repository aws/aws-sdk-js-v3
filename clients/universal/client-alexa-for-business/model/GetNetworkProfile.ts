import { GetNetworkProfileInput } from "./GetNetworkProfileInput";
import { GetNetworkProfileOutput } from "./GetNetworkProfileOutput";
import { NotFoundException } from "./NotFoundException";
import { InvalidSecretsManagerResourceException } from "./InvalidSecretsManagerResourceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetNetworkProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetNetworkProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetNetworkProfileInput
  },
  output: {
    shape: GetNetworkProfileOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: InvalidSecretsManagerResourceException
    }
  ]
};
