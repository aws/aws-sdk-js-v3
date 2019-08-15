import { ListTrafficPolicyInstancesInput } from "../shapes/ListTrafficPolicyInstancesInput";
import { ListTrafficPolicyInstancesOutput } from "../shapes/ListTrafficPolicyInstancesOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { NoSuchTrafficPolicyInstance } from "../shapes/NoSuchTrafficPolicyInstance";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTrafficPolicyInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTrafficPolicyInstances",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/trafficpolicyinstances"
  },
  input: {
    shape: ListTrafficPolicyInstancesInput
  },
  output: {
    shape: ListTrafficPolicyInstancesOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: NoSuchTrafficPolicyInstance
    }
  ]
};
