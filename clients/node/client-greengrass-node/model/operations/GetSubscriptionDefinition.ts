import { GetSubscriptionDefinitionInput } from "../shapes/GetSubscriptionDefinitionInput";
import { GetSubscriptionDefinitionOutput } from "../shapes/GetSubscriptionDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSubscriptionDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSubscriptionDefinition",
  http: {
    method: "GET",
    requestUri:
      "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}"
  },
  input: {
    shape: GetSubscriptionDefinitionInput
  },
  output: {
    shape: GetSubscriptionDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
