import { CreateRemoteAccessSessionInput } from "../shapes/CreateRemoteAccessSessionInput";
import { CreateRemoteAccessSessionOutput } from "../shapes/CreateRemoteAccessSessionOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateRemoteAccessSession: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRemoteAccessSession",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateRemoteAccessSessionInput
  },
  output: {
    shape: CreateRemoteAccessSessionOutput
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
