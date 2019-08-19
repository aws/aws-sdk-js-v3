import { ListSubscriptionDefinitionVersionsInput } from "../shapes/ListSubscriptionDefinitionVersionsInput";
import { ListSubscriptionDefinitionVersionsOutput } from "../shapes/ListSubscriptionDefinitionVersionsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSubscriptionDefinitionVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSubscriptionDefinitionVersions",
  http: {
    method: "GET",
    requestUri:
      "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions"
  },
  input: {
    shape: ListSubscriptionDefinitionVersionsInput
  },
  output: {
    shape: ListSubscriptionDefinitionVersionsOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
