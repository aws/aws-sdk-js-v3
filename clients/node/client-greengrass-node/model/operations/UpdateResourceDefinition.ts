import { UpdateResourceDefinitionInput } from "../shapes/UpdateResourceDefinitionInput";
import { UpdateResourceDefinitionOutput } from "../shapes/UpdateResourceDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateResourceDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateResourceDefinition",
  http: {
    method: "PUT",
    requestUri: "/greengrass/definition/resources/{ResourceDefinitionId}"
  },
  input: {
    shape: UpdateResourceDefinitionInput
  },
  output: {
    shape: UpdateResourceDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
