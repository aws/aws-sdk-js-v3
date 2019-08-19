import { CreateLoggerDefinitionVersionInput } from "../shapes/CreateLoggerDefinitionVersionInput";
import { CreateLoggerDefinitionVersionOutput } from "../shapes/CreateLoggerDefinitionVersionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateLoggerDefinitionVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLoggerDefinitionVersion",
  http: {
    method: "POST",
    requestUri: "/greengrass/definition/loggers/{LoggerDefinitionId}/versions"
  },
  input: {
    shape: CreateLoggerDefinitionVersionInput
  },
  output: {
    shape: CreateLoggerDefinitionVersionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
