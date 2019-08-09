import { ListFunctionDefinitionsInput } from "./ListFunctionDefinitionsInput";
import { ListFunctionDefinitionsOutput } from "./ListFunctionDefinitionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListFunctionDefinitions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFunctionDefinitions",
  http: {
    method: "GET",
    requestUri: "/greengrass/definition/functions"
  },
  input: {
    shape: ListFunctionDefinitionsInput
  },
  output: {
    shape: ListFunctionDefinitionsOutput
  },
  errors: []
};
