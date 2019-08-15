import { GetFunctionDefinitionVersionInput } from "../shapes/GetFunctionDefinitionVersionInput";
import { GetFunctionDefinitionVersionOutput } from "../shapes/GetFunctionDefinitionVersionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetFunctionDefinitionVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFunctionDefinitionVersion",
  http: {
    method: "GET",
    requestUri:
      "/greengrass/definition/functions/{FunctionDefinitionId}/versions/{FunctionDefinitionVersionId}"
  },
  input: {
    shape: GetFunctionDefinitionVersionInput
  },
  output: {
    shape: GetFunctionDefinitionVersionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
