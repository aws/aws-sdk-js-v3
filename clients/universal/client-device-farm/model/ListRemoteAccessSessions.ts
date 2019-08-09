import { ListRemoteAccessSessionsInput } from "./ListRemoteAccessSessionsInput";
import { ListRemoteAccessSessionsOutput } from "./ListRemoteAccessSessionsOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListRemoteAccessSessions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRemoteAccessSessions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRemoteAccessSessionsInput
  },
  output: {
    shape: ListRemoteAccessSessionsOutput
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
