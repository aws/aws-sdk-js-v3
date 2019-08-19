import { StopRemoteAccessSessionInput } from "../shapes/StopRemoteAccessSessionInput";
import { StopRemoteAccessSessionOutput } from "../shapes/StopRemoteAccessSessionOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
