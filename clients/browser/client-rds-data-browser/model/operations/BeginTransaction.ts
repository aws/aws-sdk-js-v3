import { BeginTransactionInput } from "../shapes/BeginTransactionInput";
import { BeginTransactionOutput } from "../shapes/BeginTransactionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ServiceUnavailableError } from "../shapes/ServiceUnavailableError";
import { StatementTimeoutException } from "../shapes/StatementTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BeginTransaction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BeginTransaction",
  http: {
    method: "POST",
    requestUri: "/BeginTransaction"
  },
  input: {
    shape: BeginTransactionInput
  },
  output: {
    shape: BeginTransactionOutput
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
      shape: ServiceUnavailableError
    },
    {
      shape: StatementTimeoutException
    }
  ]
};
