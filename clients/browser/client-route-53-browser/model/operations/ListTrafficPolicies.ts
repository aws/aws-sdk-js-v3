import { ListTrafficPoliciesInput } from "../shapes/ListTrafficPoliciesInput";
import { ListTrafficPoliciesOutput } from "../shapes/ListTrafficPoliciesOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTrafficPolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTrafficPolicies",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/trafficpolicies"
  },
  input: {
    shape: ListTrafficPoliciesInput
  },
  output: {
    shape: ListTrafficPoliciesOutput
  },
  errors: [
    {
      shape: InvalidInput
    }
  ]
};
