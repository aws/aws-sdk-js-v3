import { CreateFunctionDefinitionVersionInput } from "../shapes/CreateFunctionDefinitionVersionInput";
import { CreateFunctionDefinitionVersionOutput } from "../shapes/CreateFunctionDefinitionVersionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateFunctionDefinitionVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFunctionDefinitionVersion",
  http: {
    method: "POST",
    requestUri:
      "/greengrass/definition/functions/{FunctionDefinitionId}/versions"
  },
  input: {
    shape: CreateFunctionDefinitionVersionInput
  },
  output: {
    shape: CreateFunctionDefinitionVersionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
