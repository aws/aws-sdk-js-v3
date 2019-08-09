import { DeleteFunctionDefinitionInput } from "./DeleteFunctionDefinitionInput";
import { DeleteFunctionDefinitionOutput } from "./DeleteFunctionDefinitionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
