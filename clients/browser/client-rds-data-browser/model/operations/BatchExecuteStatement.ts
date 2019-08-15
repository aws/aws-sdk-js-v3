import { BatchExecuteStatementInput } from "../shapes/BatchExecuteStatementInput";
import { BatchExecuteStatementOutput } from "../shapes/BatchExecuteStatementOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ServiceUnavailableError } from "../shapes/ServiceUnavailableError";
import { StatementTimeoutException } from "../shapes/StatementTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchExecuteStatement: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchExecuteStatement",
  http: {
    method: "POST",
    requestUri: "/BatchExecute"
  },
  input: {
    shape: BatchExecuteStatementInput
  },
  output: {
    shape: BatchExecuteStatementOutput
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
