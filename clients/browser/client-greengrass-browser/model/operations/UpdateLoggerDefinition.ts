import { UpdateLoggerDefinitionInput } from "../shapes/UpdateLoggerDefinitionInput";
import { UpdateLoggerDefinitionOutput } from "../shapes/UpdateLoggerDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateLoggerDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateLoggerDefinition",
  http: {
    method: "PUT",
    requestUri: "/greengrass/definition/loggers/{LoggerDefinitionId}"
  },
  input: {
    shape: UpdateLoggerDefinitionInput
  },
  output: {
    shape: UpdateLoggerDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
