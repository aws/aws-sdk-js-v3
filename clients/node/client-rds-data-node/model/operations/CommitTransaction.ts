import { CommitTransactionInput } from "../shapes/CommitTransactionInput";
import { CommitTransactionOutput } from "../shapes/CommitTransactionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableError } from "../shapes/ServiceUnavailableError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
