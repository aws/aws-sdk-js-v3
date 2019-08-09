import { UpdateNetworkProfileInput } from "./UpdateNetworkProfileInput";
import { UpdateNetworkProfileOutput } from "./UpdateNetworkProfileOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
