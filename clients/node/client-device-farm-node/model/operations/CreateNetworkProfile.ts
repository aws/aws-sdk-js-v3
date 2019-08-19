import { CreateNetworkProfileInput } from "../shapes/CreateNetworkProfileInput";
import { CreateNetworkProfileOutput } from "../shapes/CreateNetworkProfileOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateNetworkProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateNetworkProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateNetworkProfileInput
  },
  output: {
    shape: CreateNetworkProfileOutput
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
