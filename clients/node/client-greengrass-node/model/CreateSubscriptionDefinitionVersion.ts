import { CreateSubscriptionDefinitionVersionInput } from "./CreateSubscriptionDefinitionVersionInput";
import { CreateSubscriptionDefinitionVersionOutput } from "./CreateSubscriptionDefinitionVersionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateSubscriptionDefinitionVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSubscriptionDefinitionVersion",
  http: {
    method: "POST",
    requestUri:
      "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions"
  },
  input: {
    shape: CreateSubscriptionDefinitionVersionInput
  },
  output: {
    shape: CreateSubscriptionDefinitionVersionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
