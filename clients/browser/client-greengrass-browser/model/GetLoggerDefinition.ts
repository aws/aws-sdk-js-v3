import { GetLoggerDefinitionInput } from "./GetLoggerDefinitionInput";
import { GetLoggerDefinitionOutput } from "./GetLoggerDefinitionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
