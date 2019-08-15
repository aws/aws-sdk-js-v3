import { GetSubscriptionDefinitionVersionInput } from "../shapes/GetSubscriptionDefinitionVersionInput";
import { GetSubscriptionDefinitionVersionOutput } from "../shapes/GetSubscriptionDefinitionVersionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
