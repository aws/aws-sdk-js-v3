import { ListRemoteAccessSessionsInput } from "../shapes/ListRemoteAccessSessionsInput";
import { ListRemoteAccessSessionsOutput } from "../shapes/ListRemoteAccessSessionsOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
