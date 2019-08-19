import { ListLoggerDefinitionsInput } from "../shapes/ListLoggerDefinitionsInput";
import { ListLoggerDefinitionsOutput } from "../shapes/ListLoggerDefinitionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListLoggerDefinitions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListLoggerDefinitions",
  http: {
    method: "GET",
    requestUri: "/greengrass/definition/loggers"
  },
  input: {
    shape: ListLoggerDefinitionsInput
  },
  output: {
    shape: ListLoggerDefinitionsOutput
  },
  errors: []
};
