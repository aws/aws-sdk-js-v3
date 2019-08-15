import { GetNetworkProfileInput } from "../shapes/GetNetworkProfileInput";
import { GetNetworkProfileOutput } from "../shapes/GetNetworkProfileOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidSecretsManagerResourceException } from "../shapes/InvalidSecretsManagerResourceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
