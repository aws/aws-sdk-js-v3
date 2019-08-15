import { CreateCoreDefinitionInput } from "../shapes/CreateCoreDefinitionInput";
import { CreateCoreDefinitionOutput } from "../shapes/CreateCoreDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
