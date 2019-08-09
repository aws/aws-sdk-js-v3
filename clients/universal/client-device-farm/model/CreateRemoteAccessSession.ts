import { CreateRemoteAccessSessionInput } from "./CreateRemoteAccessSessionInput";
import { CreateRemoteAccessSessionOutput } from "./CreateRemoteAccessSessionOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
