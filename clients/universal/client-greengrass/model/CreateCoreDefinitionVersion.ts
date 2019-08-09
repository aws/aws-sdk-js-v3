import { CreateCoreDefinitionVersionInput } from "./CreateCoreDefinitionVersionInput";
import { CreateCoreDefinitionVersionOutput } from "./CreateCoreDefinitionVersionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateCoreDefinitionVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCoreDefinitionVersion",
  http: {
    method: "POST",
    requestUri: "/greengrass/definition/cores/{CoreDefinitionId}/versions"
  },
  input: {
    shape: CreateCoreDefinitionVersionInput
  },
  output: {
    shape: CreateCoreDefinitionVersionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
