import { BeginTransactionInput } from "./BeginTransactionInput";
import { BeginTransactionOutput } from "./BeginTransactionOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ServiceUnavailableError } from "./ServiceUnavailableError";
import { StatementTimeoutException } from "./StatementTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
