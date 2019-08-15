import { GetNetworkProfileInput } from "../shapes/GetNetworkProfileInput";
import { GetNetworkProfileOutput } from "../shapes/GetNetworkProfileOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
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
