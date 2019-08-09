import { GetCoreDefinitionInput } from "./GetCoreDefinitionInput";
import { GetCoreDefinitionOutput } from "./GetCoreDefinitionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCoreDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCoreDefinition",
  http: {
    method: "GET",
    requestUri: "/greengrass/definition/cores/{CoreDefinitionId}"
  },
  input: {
    shape: GetCoreDefinitionInput
  },
  output: {
    shape: GetCoreDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
