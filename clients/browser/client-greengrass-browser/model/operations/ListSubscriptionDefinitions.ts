import { ListSubscriptionDefinitionsInput } from "../shapes/ListSubscriptionDefinitionsInput";
import { ListSubscriptionDefinitionsOutput } from "../shapes/ListSubscriptionDefinitionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSubscriptionDefinitions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSubscriptionDefinitions",
  http: {
    method: "GET",
    requestUri: "/greengrass/definition/subscriptions"
  },
  input: {
    shape: ListSubscriptionDefinitionsInput
  },
  output: {
    shape: ListSubscriptionDefinitionsOutput
  },
  errors: []
};
