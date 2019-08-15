import { UpdateTrafficPolicyCommentInput } from "../shapes/UpdateTrafficPolicyCommentInput";
import { UpdateTrafficPolicyCommentOutput } from "../shapes/UpdateTrafficPolicyCommentOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { NoSuchTrafficPolicy } from "../shapes/NoSuchTrafficPolicy";
import { ConcurrentModification } from "../shapes/ConcurrentModification";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateTrafficPolicyComment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateTrafficPolicyComment",
  http: {
    method: "POST",
    requestUri: "/2013-04-01/trafficpolicy/{Id}/{Version}"
  },
  input: {
    shape: UpdateTrafficPolicyCommentInput,
    locationName: "UpdateTrafficPolicyCommentRequest",
    xmlNamespace: {
      uri: "https://route53.amazonaws.com/doc/2013-04-01/"
    }
  },
  output: {
    shape: UpdateTrafficPolicyCommentOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: NoSuchTrafficPolicy
    },
    {
      shape: ConcurrentModification
    }
  ]
};
