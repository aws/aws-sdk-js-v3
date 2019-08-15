import { UpdateNetworkProfileInput } from "../shapes/UpdateNetworkProfileInput";
import { UpdateNetworkProfileOutput } from "../shapes/UpdateNetworkProfileOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateNetworkProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateNetworkProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateNetworkProfileInput
  },
  output: {
    shape: UpdateNetworkProfileOutput
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
