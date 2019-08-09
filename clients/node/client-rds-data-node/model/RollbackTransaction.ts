import { RollbackTransactionInput } from "./RollbackTransactionInput";
import { RollbackTransactionOutput } from "./RollbackTransactionOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableError } from "./ServiceUnavailableError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RollbackTransaction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RollbackTransaction",
  http: {
    method: "POST",
    requestUri: "/RollbackTransaction"
  },
  input: {
    shape: RollbackTransactionInput
  },
  output: {
    shape: RollbackTransactionOutput
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
