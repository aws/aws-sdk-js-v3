import { GetLoggerDefinitionInput } from "../shapes/GetLoggerDefinitionInput";
import { GetLoggerDefinitionOutput } from "../shapes/GetLoggerDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetLoggerDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetLoggerDefinition",
  http: {
    method: "GET",
    requestUri: "/greengrass/definition/loggers/{LoggerDefinitionId}"
  },
  input: {
    shape: GetLoggerDefinitionInput
  },
  output: {
    shape: GetLoggerDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
