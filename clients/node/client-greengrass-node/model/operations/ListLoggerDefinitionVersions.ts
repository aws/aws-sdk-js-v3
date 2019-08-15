import { ListLoggerDefinitionVersionsInput } from "../shapes/ListLoggerDefinitionVersionsInput";
import { ListLoggerDefinitionVersionsOutput } from "../shapes/ListLoggerDefinitionVersionsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListLoggerDefinitionVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListLoggerDefinitionVersions",
  http: {
    method: "GET",
    requestUri: "/greengrass/definition/loggers/{LoggerDefinitionId}/versions"
  },
  input: {
    shape: ListLoggerDefinitionVersionsInput
  },
  output: {
    shape: ListLoggerDefinitionVersionsOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
