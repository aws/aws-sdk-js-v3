import { GetTrafficPolicyInput } from "./GetTrafficPolicyInput";
import { GetTrafficPolicyOutput } from "./GetTrafficPolicyOutput";
import { NoSuchTrafficPolicy } from "./NoSuchTrafficPolicy";
import { InvalidInput } from "./InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetTrafficPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTrafficPolicy",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/trafficpolicy/{Id}/{Version}"
  },
  input: {
    shape: GetTrafficPolicyInput
  },
  output: {
    shape: GetTrafficPolicyOutput
  },
  errors: [
    {
      shape: NoSuchTrafficPolicy
    },
    {
      shape: InvalidInput
    }
  ]
};
