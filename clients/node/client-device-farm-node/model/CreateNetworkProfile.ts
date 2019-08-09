import { CreateNetworkProfileInput } from "./CreateNetworkProfileInput";
import { CreateNetworkProfileOutput } from "./CreateNetworkProfileOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
