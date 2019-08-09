import { DeleteRemoteAccessSessionInput } from "./DeleteRemoteAccessSessionInput";
import { DeleteRemoteAccessSessionOutput } from "./DeleteRemoteAccessSessionOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
