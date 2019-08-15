import { ListConnectorDefinitionsInput } from "../shapes/ListConnectorDefinitionsInput";
import { ListConnectorDefinitionsOutput } from "../shapes/ListConnectorDefinitionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListConnectorDefinitions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListConnectorDefinitions",
  http: {
    method: "GET",
    requestUri: "/greengrass/definition/connectors"
  },
  input: {
    shape: ListConnectorDefinitionsInput
  },
  output: {
    shape: ListConnectorDefinitionsOutput
  },
  errors: []
};
