import { ExecuteSqlInput } from "./ExecuteSqlInput";
import { ExecuteSqlOutput } from "./ExecuteSqlOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ServiceUnavailableError } from "./ServiceUnavailableError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ExecuteSql: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ExecuteSql",
  http: {
    method: "POST",
    requestUri: "/ExecuteSql"
  },
  input: {
    shape: ExecuteSqlInput
  },
  output: {
    shape: ExecuteSqlOutput
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
    }
  ]
};
