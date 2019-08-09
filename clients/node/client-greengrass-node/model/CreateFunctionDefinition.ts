import { CreateFunctionDefinitionInput } from "./CreateFunctionDefinitionInput";
import { CreateFunctionDefinitionOutput } from "./CreateFunctionDefinitionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateFunctionDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFunctionDefinition",
  http: {
    method: "POST",
    requestUri: "/greengrass/definition/functions"
  },
  input: {
    shape: CreateFunctionDefinitionInput
  },
  output: {
    shape: CreateFunctionDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
