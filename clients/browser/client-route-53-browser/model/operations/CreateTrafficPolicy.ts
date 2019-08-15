import { CreateTrafficPolicyInput } from "../shapes/CreateTrafficPolicyInput";
import { CreateTrafficPolicyOutput } from "../shapes/CreateTrafficPolicyOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { TooManyTrafficPolicies } from "../shapes/TooManyTrafficPolicies";
import { TrafficPolicyAlreadyExists } from "../shapes/TrafficPolicyAlreadyExists";
import { InvalidTrafficPolicyDocument } from "../shapes/InvalidTrafficPolicyDocument";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
