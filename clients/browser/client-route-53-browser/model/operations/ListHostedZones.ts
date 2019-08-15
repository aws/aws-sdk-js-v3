import { ListHostedZonesInput } from "../shapes/ListHostedZonesInput";
import { ListHostedZonesOutput } from "../shapes/ListHostedZonesOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { NoSuchDelegationSet } from "../shapes/NoSuchDelegationSet";
import { DelegationSetNotReusable } from "../shapes/DelegationSetNotReusable";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListHostedZones: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListHostedZones",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/hostedzone"
  },
  input: {
    shape: ListHostedZonesInput
  },
  output: {
    shape: ListHostedZonesOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: NoSuchDelegationSet
    },
    {
      shape: DelegationSetNotReusable
    }
  ]
};
