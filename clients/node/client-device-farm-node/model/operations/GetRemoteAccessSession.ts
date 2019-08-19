import { GetRemoteAccessSessionInput } from "../shapes/GetRemoteAccessSessionInput";
import { GetRemoteAccessSessionOutput } from "../shapes/GetRemoteAccessSessionOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
