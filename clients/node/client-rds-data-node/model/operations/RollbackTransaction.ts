import { RollbackTransactionInput } from "../shapes/RollbackTransactionInput";
import { RollbackTransactionOutput } from "../shapes/RollbackTransactionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableError } from "../shapes/ServiceUnavailableError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
