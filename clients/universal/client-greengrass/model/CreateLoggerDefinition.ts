import { CreateLoggerDefinitionInput } from "./CreateLoggerDefinitionInput";
import { CreateLoggerDefinitionOutput } from "./CreateLoggerDefinitionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateLoggerDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLoggerDefinition",
  http: {
    method: "POST",
    requestUri: "/greengrass/definition/loggers"
  },
  input: {
    shape: CreateLoggerDefinitionInput
  },
  output: {
    shape: CreateLoggerDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
