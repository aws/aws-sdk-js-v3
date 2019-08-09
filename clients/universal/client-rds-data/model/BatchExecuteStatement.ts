import { BatchExecuteStatementInput } from "./BatchExecuteStatementInput";
import { BatchExecuteStatementOutput } from "./BatchExecuteStatementOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ServiceUnavailableError } from "./ServiceUnavailableError";
import { StatementTimeoutException } from "./StatementTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
