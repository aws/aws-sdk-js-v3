import { GetCoreDefinitionVersionInput } from "../shapes/GetCoreDefinitionVersionInput";
import { GetCoreDefinitionVersionOutput } from "../shapes/GetCoreDefinitionVersionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCoreDefinitionVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCoreDefinitionVersion",
  http: {
    method: "GET",
    requestUri:
      "/greengrass/definition/cores/{CoreDefinitionId}/versions/{CoreDefinitionVersionId}"
  },
  input: {
    shape: GetCoreDefinitionVersionInput
  },
  output: {
    shape: GetCoreDefinitionVersionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
