import { ListResourceDefinitionVersionsInput } from "../shapes/ListResourceDefinitionVersionsInput";
import { ListResourceDefinitionVersionsOutput } from "../shapes/ListResourceDefinitionVersionsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListResourceDefinitionVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResourceDefinitionVersions",
  http: {
    method: "GET",
    requestUri:
      "/greengrass/definition/resources/{ResourceDefinitionId}/versions"
  },
  input: {
    shape: ListResourceDefinitionVersionsInput
  },
  output: {
    shape: ListResourceDefinitionVersionsOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
