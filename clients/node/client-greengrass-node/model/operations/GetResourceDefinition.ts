import { GetResourceDefinitionInput } from "../shapes/GetResourceDefinitionInput";
import { GetResourceDefinitionOutput } from "../shapes/GetResourceDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetResourceDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetResourceDefinition",
  http: {
    method: "GET",
    requestUri: "/greengrass/definition/resources/{ResourceDefinitionId}"
  },
  input: {
    shape: GetResourceDefinitionInput
  },
  output: {
    shape: GetResourceDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
