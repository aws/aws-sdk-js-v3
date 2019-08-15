import { ExecuteSqlInput } from "../shapes/ExecuteSqlInput";
import { ExecuteSqlOutput } from "../shapes/ExecuteSqlOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ServiceUnavailableError } from "../shapes/ServiceUnavailableError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
