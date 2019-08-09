import { StopRemoteAccessSessionInput } from "./StopRemoteAccessSessionInput";
import { StopRemoteAccessSessionOutput } from "./StopRemoteAccessSessionOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopRemoteAccessSession: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopRemoteAccessSession",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopRemoteAccessSessionInput
  },
  output: {
    shape: StopRemoteAccessSessionOutput
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
