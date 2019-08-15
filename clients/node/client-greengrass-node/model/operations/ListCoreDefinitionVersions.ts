import { ListCoreDefinitionVersionsInput } from "../shapes/ListCoreDefinitionVersionsInput";
import { ListCoreDefinitionVersionsOutput } from "../shapes/ListCoreDefinitionVersionsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListCoreDefinitionVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCoreDefinitionVersions",
  http: {
    method: "GET",
    requestUri: "/greengrass/definition/cores/{CoreDefinitionId}/versions"
  },
  input: {
    shape: ListCoreDefinitionVersionsInput
  },
  output: {
    shape: ListCoreDefinitionVersionsOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
