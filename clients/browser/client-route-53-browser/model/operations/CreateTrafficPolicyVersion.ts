import { CreateTrafficPolicyVersionInput } from "../shapes/CreateTrafficPolicyVersionInput";
import { CreateTrafficPolicyVersionOutput } from "../shapes/CreateTrafficPolicyVersionOutput";
import { NoSuchTrafficPolicy } from "../shapes/NoSuchTrafficPolicy";
import { InvalidInput } from "../shapes/InvalidInput";
import { TooManyTrafficPolicyVersionsForCurrentPolicy } from "../shapes/TooManyTrafficPolicyVersionsForCurrentPolicy";
import { ConcurrentModification } from "../shapes/ConcurrentModification";
import { InvalidTrafficPolicyDocument } from "../shapes/InvalidTrafficPolicyDocument";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTrafficPolicyVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTrafficPolicyVersion",
  http: {
    method: "POST",
    requestUri: "/2013-04-01/trafficpolicy/{Id}"
  },
  input: {
    shape: CreateTrafficPolicyVersionInput,
    locationName: "CreateTrafficPolicyVersionRequest",
    xmlNamespace: {
      uri: "https://route53.amazonaws.com/doc/2013-04-01/"
    }
  },
  output: {
    shape: CreateTrafficPolicyVersionOutput
  },
  errors: [
    {
      shape: NoSuchTrafficPolicy
    },
    {
      shape: InvalidInput
    },
    {
      shape: TooManyTrafficPolicyVersionsForCurrentPolicy
    },
    {
      shape: ConcurrentModification
    },
    {
      shape: InvalidTrafficPolicyDocument
    }
  ]
};
