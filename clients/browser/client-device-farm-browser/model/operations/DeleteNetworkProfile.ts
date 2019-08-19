import { DeleteNetworkProfileInput } from "../shapes/DeleteNetworkProfileInput";
import { DeleteNetworkProfileOutput } from "../shapes/DeleteNetworkProfileOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteNetworkProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteNetworkProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteNetworkProfileInput
  },
  output: {
    shape: DeleteNetworkProfileOutput
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
