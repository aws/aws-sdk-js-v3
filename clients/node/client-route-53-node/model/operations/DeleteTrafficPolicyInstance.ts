import { DeleteTrafficPolicyInstanceInput } from "../shapes/DeleteTrafficPolicyInstanceInput";
import { DeleteTrafficPolicyInstanceOutput } from "../shapes/DeleteTrafficPolicyInstanceOutput";
import { NoSuchTrafficPolicyInstance } from "../shapes/NoSuchTrafficPolicyInstance";
import { InvalidInput } from "../shapes/InvalidInput";
import { PriorRequestNotComplete } from "../shapes/PriorRequestNotComplete";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteTrafficPolicyInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTrafficPolicyInstance",
  http: {
    method: "DELETE",
    requestUri: "/2013-04-01/trafficpolicyinstance/{Id}"
  },
  input: {
    shape: DeleteTrafficPolicyInstanceInput
  },
  output: {
    shape: DeleteTrafficPolicyInstanceOutput
  },
  errors: [
    {
      shape: NoSuchTrafficPolicyInstance
    },
    {
      shape: InvalidInput
    },
    {
      shape: PriorRequestNotComplete
    }
  ]
};
