import { DeleteResourceDefinitionInput } from "./DeleteResourceDefinitionInput";
import { DeleteResourceDefinitionOutput } from "./DeleteResourceDefinitionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteResourceDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteResourceDefinition",
  http: {
    method: "DELETE",
    requestUri: "/greengrass/definition/resources/{ResourceDefinitionId}"
  },
  input: {
    shape: DeleteResourceDefinitionInput
  },
  output: {
    shape: DeleteResourceDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
