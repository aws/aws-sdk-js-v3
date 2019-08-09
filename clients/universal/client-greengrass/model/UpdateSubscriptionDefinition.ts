import { UpdateSubscriptionDefinitionInput } from "./UpdateSubscriptionDefinitionInput";
import { UpdateSubscriptionDefinitionOutput } from "./UpdateSubscriptionDefinitionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateSubscriptionDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSubscriptionDefinition",
  http: {
    method: "PUT",
    requestUri:
      "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}"
  },
  input: {
    shape: UpdateSubscriptionDefinitionInput
  },
  output: {
    shape: UpdateSubscriptionDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
