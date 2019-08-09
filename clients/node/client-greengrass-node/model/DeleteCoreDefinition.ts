import { DeleteCoreDefinitionInput } from "./DeleteCoreDefinitionInput";
import { DeleteCoreDefinitionOutput } from "./DeleteCoreDefinitionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteCoreDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCoreDefinition",
  http: {
    method: "DELETE",
    requestUri: "/greengrass/definition/cores/{CoreDefinitionId}"
  },
  input: {
    shape: DeleteCoreDefinitionInput
  },
  output: {
    shape: DeleteCoreDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
