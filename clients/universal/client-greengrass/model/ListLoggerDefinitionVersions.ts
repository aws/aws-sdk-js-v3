import { ListLoggerDefinitionVersionsInput } from "./ListLoggerDefinitionVersionsInput";
import { ListLoggerDefinitionVersionsOutput } from "./ListLoggerDefinitionVersionsOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
