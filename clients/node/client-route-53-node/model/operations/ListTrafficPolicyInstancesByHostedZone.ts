import { ListTrafficPolicyInstancesByHostedZoneInput } from "../shapes/ListTrafficPolicyInstancesByHostedZoneInput";
import { ListTrafficPolicyInstancesByHostedZoneOutput } from "../shapes/ListTrafficPolicyInstancesByHostedZoneOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { NoSuchTrafficPolicyInstance } from "../shapes/NoSuchTrafficPolicyInstance";
import { NoSuchHostedZone } from "../shapes/NoSuchHostedZone";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTrafficPolicyInstancesByHostedZone: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTrafficPolicyInstancesByHostedZone",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/trafficpolicyinstances/hostedzone"
  },
  input: {
    shape: ListTrafficPolicyInstancesByHostedZoneInput
  },
  output: {
    shape: ListTrafficPolicyInstancesByHostedZoneOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: NoSuchTrafficPolicyInstance
    },
    {
      shape: NoSuchHostedZone
    }
  ]
};
