import { UpdateTrafficPolicyInstanceInput } from "../shapes/UpdateTrafficPolicyInstanceInput";
import { UpdateTrafficPolicyInstanceOutput } from "../shapes/UpdateTrafficPolicyInstanceOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { NoSuchTrafficPolicy } from "../shapes/NoSuchTrafficPolicy";
import { NoSuchTrafficPolicyInstance } from "../shapes/NoSuchTrafficPolicyInstance";
import { PriorRequestNotComplete } from "../shapes/PriorRequestNotComplete";
import { ConflictingTypes } from "../shapes/ConflictingTypes";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateTrafficPolicyInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateTrafficPolicyInstance",
  http: {
    method: "POST",
    requestUri: "/2013-04-01/trafficpolicyinstance/{Id}"
  },
  input: {
    shape: UpdateTrafficPolicyInstanceInput,
    locationName: "UpdateTrafficPolicyInstanceRequest",
    xmlNamespace: {
      uri: "https://route53.amazonaws.com/doc/2013-04-01/"
    }
  },
  output: {
    shape: UpdateTrafficPolicyInstanceOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: NoSuchTrafficPolicy
    },
    {
      shape: NoSuchTrafficPolicyInstance
    },
    {
      shape: PriorRequestNotComplete
    },
    {
      shape: ConflictingTypes
    }
  ]
};
