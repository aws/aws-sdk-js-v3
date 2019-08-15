import { GetFunctionDefinitionInput } from "../shapes/GetFunctionDefinitionInput";
import { GetFunctionDefinitionOutput } from "../shapes/GetFunctionDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetFunctionDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFunctionDefinition",
  http: {
    method: "GET",
    requestUri: "/greengrass/definition/functions/{FunctionDefinitionId}"
  },
  input: {
    shape: GetFunctionDefinitionInput
  },
  output: {
    shape: GetFunctionDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
