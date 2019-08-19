import { ExecuteStatementInput } from "../shapes/ExecuteStatementInput";
import { ExecuteStatementOutput } from "../shapes/ExecuteStatementOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ServiceUnavailableError } from "../shapes/ServiceUnavailableError";
import { StatementTimeoutException } from "../shapes/StatementTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ExecuteStatement: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ExecuteStatement",
  http: {
    method: "POST",
    requestUri: "/Execute"
  },
  input: {
    shape: ExecuteStatementInput
  },
  output: {
    shape: ExecuteStatementOutput
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
