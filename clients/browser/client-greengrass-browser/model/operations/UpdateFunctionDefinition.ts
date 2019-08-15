import { UpdateFunctionDefinitionInput } from "../shapes/UpdateFunctionDefinitionInput";
import { UpdateFunctionDefinitionOutput } from "../shapes/UpdateFunctionDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateFunctionDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFunctionDefinition",
  http: {
    method: "PUT",
    requestUri: "/greengrass/definition/functions/{FunctionDefinitionId}"
  },
  input: {
    shape: UpdateFunctionDefinitionInput
  },
  output: {
    shape: UpdateFunctionDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
