import { CreateResourceDefinitionVersionInput } from "../shapes/CreateResourceDefinitionVersionInput";
import { CreateResourceDefinitionVersionOutput } from "../shapes/CreateResourceDefinitionVersionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateResourceDefinitionVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateResourceDefinitionVersion",
  http: {
    method: "POST",
    requestUri:
      "/greengrass/definition/resources/{ResourceDefinitionId}/versions"
  },
  input: {
    shape: CreateResourceDefinitionVersionInput
  },
  output: {
    shape: CreateResourceDefinitionVersionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
