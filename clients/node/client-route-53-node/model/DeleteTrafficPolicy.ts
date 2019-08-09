import { DeleteTrafficPolicyInput } from "./DeleteTrafficPolicyInput";
import { DeleteTrafficPolicyOutput } from "./DeleteTrafficPolicyOutput";
import { NoSuchTrafficPolicy } from "./NoSuchTrafficPolicy";
import { InvalidInput } from "./InvalidInput";
import { TrafficPolicyInUse } from "./TrafficPolicyInUse";
import { ConcurrentModification } from "./ConcurrentModification";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteTrafficPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTrafficPolicy",
  http: {
    method: "DELETE",
    requestUri: "/2013-04-01/trafficpolicy/{Id}/{Version}"
  },
  input: {
    shape: DeleteTrafficPolicyInput
  },
  output: {
    shape: DeleteTrafficPolicyOutput
  },
  errors: [
    {
      shape: NoSuchTrafficPolicy
    },
    {
      shape: InvalidInput
    },
    {
      shape: TrafficPolicyInUse
    },
    {
      shape: ConcurrentModification
    }
  ]
};
