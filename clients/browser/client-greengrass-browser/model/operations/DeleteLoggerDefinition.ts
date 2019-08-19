import { DeleteLoggerDefinitionInput } from "../shapes/DeleteLoggerDefinitionInput";
import { DeleteLoggerDefinitionOutput } from "../shapes/DeleteLoggerDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteLoggerDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLoggerDefinition",
  http: {
    method: "DELETE",
    requestUri: "/greengrass/definition/loggers/{LoggerDefinitionId}"
  },
  input: {
    shape: DeleteLoggerDefinitionInput
  },
  output: {
    shape: DeleteLoggerDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
