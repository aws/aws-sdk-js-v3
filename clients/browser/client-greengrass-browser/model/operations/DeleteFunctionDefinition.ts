import { DeleteFunctionDefinitionInput } from "../shapes/DeleteFunctionDefinitionInput";
import { DeleteFunctionDefinitionOutput } from "../shapes/DeleteFunctionDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteFunctionDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFunctionDefinition",
  http: {
    method: "DELETE",
    requestUri: "/greengrass/definition/functions/{FunctionDefinitionId}"
  },
  input: {
    shape: DeleteFunctionDefinitionInput
  },
  output: {
    shape: DeleteFunctionDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
