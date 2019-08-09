import { GetRemoteAccessSessionInput } from "./GetRemoteAccessSessionInput";
import { GetRemoteAccessSessionOutput } from "./GetRemoteAccessSessionOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetRemoteAccessSession: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRemoteAccessSession",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetRemoteAccessSessionInput
  },
  output: {
    shape: GetRemoteAccessSessionOutput
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
