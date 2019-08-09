import { ListResourceDefinitionsInput } from "./ListResourceDefinitionsInput";
import { ListResourceDefinitionsOutput } from "./ListResourceDefinitionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListResourceDefinitions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResourceDefinitions",
  http: {
    method: "GET",
    requestUri: "/greengrass/definition/resources"
  },
  input: {
    shape: ListResourceDefinitionsInput
  },
  output: {
    shape: ListResourceDefinitionsOutput
  },
  errors: []
};
