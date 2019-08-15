import { ListTrafficPolicyVersionsInput } from "../shapes/ListTrafficPolicyVersionsInput";
import { ListTrafficPolicyVersionsOutput } from "../shapes/ListTrafficPolicyVersionsOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { NoSuchTrafficPolicy } from "../shapes/NoSuchTrafficPolicy";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTrafficPolicyVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTrafficPolicyVersions",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/trafficpolicies/{Id}/versions"
  },
  input: {
    shape: ListTrafficPolicyVersionsInput
  },
  output: {
    shape: ListTrafficPolicyVersionsOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: NoSuchTrafficPolicy
    }
  ]
};
