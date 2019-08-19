import { ListFunctionDefinitionVersionsInput } from "../shapes/ListFunctionDefinitionVersionsInput";
import { ListFunctionDefinitionVersionsOutput } from "../shapes/ListFunctionDefinitionVersionsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListFunctionDefinitionVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFunctionDefinitionVersions",
  http: {
    method: "GET",
    requestUri:
      "/greengrass/definition/functions/{FunctionDefinitionId}/versions"
  },
  input: {
    shape: ListFunctionDefinitionVersionsInput
  },
  output: {
    shape: ListFunctionDefinitionVersionsOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
