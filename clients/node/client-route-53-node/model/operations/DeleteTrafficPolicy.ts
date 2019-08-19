import { DeleteTrafficPolicyInput } from "../shapes/DeleteTrafficPolicyInput";
import { DeleteTrafficPolicyOutput } from "../shapes/DeleteTrafficPolicyOutput";
import { NoSuchTrafficPolicy } from "../shapes/NoSuchTrafficPolicy";
import { InvalidInput } from "../shapes/InvalidInput";
import { TrafficPolicyInUse } from "../shapes/TrafficPolicyInUse";
import { ConcurrentModification } from "../shapes/ConcurrentModification";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
