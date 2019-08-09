import { InstallToRemoteAccessSessionInput } from "./InstallToRemoteAccessSessionInput";
import { InstallToRemoteAccessSessionOutput } from "./InstallToRemoteAccessSessionOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const InstallToRemoteAccessSession: _Operation_ = {
  metadata: ServiceMetadata,
  name: "InstallToRemoteAccessSession",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: InstallToRemoteAccessSessionInput
  },
  output: {
    shape: InstallToRemoteAccessSessionOutput
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
