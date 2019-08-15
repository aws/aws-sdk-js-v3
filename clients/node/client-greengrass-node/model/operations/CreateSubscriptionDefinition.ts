import { CreateSubscriptionDefinitionInput } from "../shapes/CreateSubscriptionDefinitionInput";
import { CreateSubscriptionDefinitionOutput } from "../shapes/CreateSubscriptionDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSubscriptionDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSubscriptionDefinition",
  http: {
    method: "POST",
    requestUri: "/greengrass/definition/subscriptions"
  },
  input: {
    shape: CreateSubscriptionDefinitionInput
  },
  output: {
    shape: CreateSubscriptionDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
