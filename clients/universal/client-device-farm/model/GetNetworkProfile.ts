import { GetNetworkProfileInput } from "./GetNetworkProfileInput";
import { GetNetworkProfileOutput } from "./GetNetworkProfileOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
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
      shape: ArgumentException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceAccountException
    }
  ]
};
