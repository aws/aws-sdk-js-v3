import { CommitTransactionInput } from "./CommitTransactionInput";
import { CommitTransactionOutput } from "./CommitTransactionOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableError } from "./ServiceUnavailableError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CommitTransaction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CommitTransaction",
  http: {
    method: "POST",
    requestUri: "/CommitTransaction"
  },
  input: {
    shape: CommitTransactionInput
  },
  output: {
    shape: CommitTransactionOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ServiceUnavailableError
    }
  ]
};
