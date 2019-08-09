import { GetSubscriptionDefinitionVersionInput } from "./GetSubscriptionDefinitionVersionInput";
import { GetSubscriptionDefinitionVersionOutput } from "./GetSubscriptionDefinitionVersionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSubscriptionDefinitionVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSubscriptionDefinitionVersion",
  http: {
    method: "GET",
    requestUri:
      "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions/{SubscriptionDefinitionVersionId}"
  },
  input: {
    shape: GetSubscriptionDefinitionVersionInput
  },
  output: {
    shape: GetSubscriptionDefinitionVersionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
