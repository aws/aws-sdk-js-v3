import { DeleteSubscriptionDefinitionInput } from "./DeleteSubscriptionDefinitionInput";
import { DeleteSubscriptionDefinitionOutput } from "./DeleteSubscriptionDefinitionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
