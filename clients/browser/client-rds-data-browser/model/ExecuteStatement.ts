import { ExecuteStatementInput } from "./ExecuteStatementInput";
import { ExecuteStatementOutput } from "./ExecuteStatementOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ServiceUnavailableError } from "./ServiceUnavailableError";
import { StatementTimeoutException } from "./StatementTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
