import { GetTrafficPolicyInstanceInput } from "../shapes/GetTrafficPolicyInstanceInput";
import { GetTrafficPolicyInstanceOutput } from "../shapes/GetTrafficPolicyInstanceOutput";
import { NoSuchTrafficPolicyInstance } from "../shapes/NoSuchTrafficPolicyInstance";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetTrafficPolicyInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTrafficPolicyInstance",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/trafficpolicyinstance/{Id}"
  },
  input: {
    shape: GetTrafficPolicyInstanceInput
  },
  output: {
    shape: GetTrafficPolicyInstanceOutput
  },
  errors: [
    {
      shape: NoSuchTrafficPolicyInstance
    },
    {
      shape: InvalidInput
    }
  ]
};
