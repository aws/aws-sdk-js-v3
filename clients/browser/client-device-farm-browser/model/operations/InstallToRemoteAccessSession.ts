import { InstallToRemoteAccessSessionInput } from "../shapes/InstallToRemoteAccessSessionInput";
import { InstallToRemoteAccessSessionOutput } from "../shapes/InstallToRemoteAccessSessionOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
