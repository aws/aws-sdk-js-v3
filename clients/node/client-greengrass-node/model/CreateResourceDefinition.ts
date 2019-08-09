import { CreateResourceDefinitionInput } from "./CreateResourceDefinitionInput";
import { CreateResourceDefinitionOutput } from "./CreateResourceDefinitionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateResourceDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateResourceDefinition",
  http: {
    method: "POST",
    requestUri: "/greengrass/definition/resources"
  },
  input: {
    shape: CreateResourceDefinitionInput
  },
  output: {
    shape: CreateResourceDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
