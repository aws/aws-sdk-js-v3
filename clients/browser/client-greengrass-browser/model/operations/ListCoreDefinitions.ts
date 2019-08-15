import { ListCoreDefinitionsInput } from "../shapes/ListCoreDefinitionsInput";
import { ListCoreDefinitionsOutput } from "../shapes/ListCoreDefinitionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListCoreDefinitions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCoreDefinitions",
  http: {
    method: "GET",
    requestUri: "/greengrass/definition/cores"
  },
  input: {
    shape: ListCoreDefinitionsInput
  },
  output: {
    shape: ListCoreDefinitionsOutput
  },
  errors: []
};
