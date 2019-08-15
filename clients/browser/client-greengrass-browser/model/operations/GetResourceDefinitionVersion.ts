import { GetResourceDefinitionVersionInput } from "../shapes/GetResourceDefinitionVersionInput";
import { GetResourceDefinitionVersionOutput } from "../shapes/GetResourceDefinitionVersionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetResourceDefinitionVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetResourceDefinitionVersion",
  http: {
    method: "GET",
    requestUri:
      "/greengrass/definition/resources/{ResourceDefinitionId}/versions/{ResourceDefinitionVersionId}"
  },
  input: {
    shape: GetResourceDefinitionVersionInput
  },
  output: {
    shape: GetResourceDefinitionVersionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
