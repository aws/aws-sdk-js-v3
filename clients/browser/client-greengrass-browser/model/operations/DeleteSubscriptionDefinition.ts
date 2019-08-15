import { DeleteSubscriptionDefinitionInput } from "../shapes/DeleteSubscriptionDefinitionInput";
import { DeleteSubscriptionDefinitionOutput } from "../shapes/DeleteSubscriptionDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSubscriptionDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSubscriptionDefinition",
  http: {
    method: "DELETE",
    requestUri:
      "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}"
  },
  input: {
    shape: DeleteSubscriptionDefinitionInput
  },
  output: {
    shape: DeleteSubscriptionDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
