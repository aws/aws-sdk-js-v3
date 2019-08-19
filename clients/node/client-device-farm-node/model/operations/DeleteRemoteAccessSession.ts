import { DeleteRemoteAccessSessionInput } from "../shapes/DeleteRemoteAccessSessionInput";
import { DeleteRemoteAccessSessionOutput } from "../shapes/DeleteRemoteAccessSessionOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRemoteAccessSession: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRemoteAccessSession",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRemoteAccessSessionInput
  },
  output: {
    shape: DeleteRemoteAccessSessionOutput
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
