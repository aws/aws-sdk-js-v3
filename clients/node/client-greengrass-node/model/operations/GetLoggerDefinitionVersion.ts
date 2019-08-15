import { GetLoggerDefinitionVersionInput } from "../shapes/GetLoggerDefinitionVersionInput";
import { GetLoggerDefinitionVersionOutput } from "../shapes/GetLoggerDefinitionVersionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetLoggerDefinitionVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetLoggerDefinitionVersion",
  http: {
    method: "GET",
    requestUri:
      "/greengrass/definition/loggers/{LoggerDefinitionId}/versions/{LoggerDefinitionVersionId}"
  },
  input: {
    shape: GetLoggerDefinitionVersionInput
  },
  output: {
    shape: GetLoggerDefinitionVersionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
