import { DeleteNetworkProfileInput } from "./DeleteNetworkProfileInput";
import { DeleteNetworkProfileOutput } from "./DeleteNetworkProfileOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
