import { CreateCoreDefinitionInput } from "./CreateCoreDefinitionInput";
import { CreateCoreDefinitionOutput } from "./CreateCoreDefinitionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateCoreDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCoreDefinition",
  http: {
    method: "POST",
    requestUri: "/greengrass/definition/cores"
  },
  input: {
    shape: CreateCoreDefinitionInput
  },
  output: {
    shape: CreateCoreDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
