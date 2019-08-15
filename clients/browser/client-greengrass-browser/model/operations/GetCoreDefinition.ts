import { GetCoreDefinitionInput } from "../shapes/GetCoreDefinitionInput";
import { GetCoreDefinitionOutput } from "../shapes/GetCoreDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
