import { CreateTrafficPolicyInstanceInput } from "../shapes/CreateTrafficPolicyInstanceInput";
import { CreateTrafficPolicyInstanceOutput } from "../shapes/CreateTrafficPolicyInstanceOutput";
import { NoSuchHostedZone } from "../shapes/NoSuchHostedZone";
import { InvalidInput } from "../shapes/InvalidInput";
import { TooManyTrafficPolicyInstances } from "../shapes/TooManyTrafficPolicyInstances";
import { NoSuchTrafficPolicy } from "../shapes/NoSuchTrafficPolicy";
import { TrafficPolicyInstanceAlreadyExists } from "../shapes/TrafficPolicyInstanceAlreadyExists";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTrafficPolicyInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTrafficPolicyInstance",
  http: {
    method: "POST",
    requestUri: "/2013-04-01/trafficpolicyinstance"
  },
  input: {
    shape: CreateTrafficPolicyInstanceInput,
    locationName: "CreateTrafficPolicyInstanceRequest",
    xmlNamespace: {
      uri: "https://route53.amazonaws.com/doc/2013-04-01/"
    }
  },
  output: {
    shape: CreateTrafficPolicyInstanceOutput
  },
  errors: [
    {
      shape: NoSuchHostedZone
    },
    {
      shape: InvalidInput
    },
    {
      shape: TooManyTrafficPolicyInstances
    },
    {
      shape: NoSuchTrafficPolicy
    },
    {
      shape: TrafficPolicyInstanceAlreadyExists
    }
  ]
};
