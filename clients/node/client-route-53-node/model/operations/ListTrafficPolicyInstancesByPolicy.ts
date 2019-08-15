import { ListTrafficPolicyInstancesByPolicyInput } from "../shapes/ListTrafficPolicyInstancesByPolicyInput";
import { ListTrafficPolicyInstancesByPolicyOutput } from "../shapes/ListTrafficPolicyInstancesByPolicyOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { NoSuchTrafficPolicyInstance } from "../shapes/NoSuchTrafficPolicyInstance";
import { NoSuchTrafficPolicy } from "../shapes/NoSuchTrafficPolicy";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTrafficPolicyInstancesByPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTrafficPolicyInstancesByPolicy",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/trafficpolicyinstances/trafficpolicy"
  },
  input: {
    shape: ListTrafficPolicyInstancesByPolicyInput
  },
  output: {
    shape: ListTrafficPolicyInstancesByPolicyOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: NoSuchTrafficPolicyInstance
    },
    {
      shape: NoSuchTrafficPolicy
    }
  ]
};
