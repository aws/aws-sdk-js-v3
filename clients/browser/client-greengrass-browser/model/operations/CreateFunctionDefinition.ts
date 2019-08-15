import { CreateFunctionDefinitionInput } from "../shapes/CreateFunctionDefinitionInput";
import { CreateFunctionDefinitionOutput } from "../shapes/CreateFunctionDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
