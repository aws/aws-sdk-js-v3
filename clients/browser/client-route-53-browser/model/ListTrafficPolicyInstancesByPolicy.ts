import { ListTrafficPolicyInstancesByPolicyInput } from "./ListTrafficPolicyInstancesByPolicyInput";
import { ListTrafficPolicyInstancesByPolicyOutput } from "./ListTrafficPolicyInstancesByPolicyOutput";
import { InvalidInput } from "./InvalidInput";
import { NoSuchTrafficPolicyInstance } from "./NoSuchTrafficPolicyInstance";
import { NoSuchTrafficPolicy } from "./NoSuchTrafficPolicy";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
