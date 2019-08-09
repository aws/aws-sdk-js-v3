import { CreateTrafficPolicyVersionInput } from "./CreateTrafficPolicyVersionInput";
import { CreateTrafficPolicyVersionOutput } from "./CreateTrafficPolicyVersionOutput";
import { NoSuchTrafficPolicy } from "./NoSuchTrafficPolicy";
import { InvalidInput } from "./InvalidInput";
import { TooManyTrafficPolicyVersionsForCurrentPolicy } from "./TooManyTrafficPolicyVersionsForCurrentPolicy";
import { ConcurrentModification } from "./ConcurrentModification";
import { InvalidTrafficPolicyDocument } from "./InvalidTrafficPolicyDocument";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
