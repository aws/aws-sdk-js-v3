import { CreateTrafficPolicyInput } from "./CreateTrafficPolicyInput";
import { CreateTrafficPolicyOutput } from "./CreateTrafficPolicyOutput";
import { InvalidInput } from "./InvalidInput";
import { TooManyTrafficPolicies } from "./TooManyTrafficPolicies";
import { TrafficPolicyAlreadyExists } from "./TrafficPolicyAlreadyExists";
import { InvalidTrafficPolicyDocument } from "./InvalidTrafficPolicyDocument";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateTrafficPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTrafficPolicy",
  http: {
    method: "POST",
    requestUri: "/2013-04-01/trafficpolicy"
  },
  input: {
    shape: CreateTrafficPolicyInput,
    locationName: "CreateTrafficPolicyRequest",
    xmlNamespace: {
      uri: "https://route53.amazonaws.com/doc/2013-04-01/"
    }
  },
  output: {
    shape: CreateTrafficPolicyOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: TooManyTrafficPolicies
    },
    {
      shape: TrafficPolicyAlreadyExists
    },
    {
      shape: InvalidTrafficPolicyDocument
    }
  ]
};
