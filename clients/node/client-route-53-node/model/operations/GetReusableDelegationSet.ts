import { GetReusableDelegationSetInput } from "../shapes/GetReusableDelegationSetInput";
import { GetReusableDelegationSetOutput } from "../shapes/GetReusableDelegationSetOutput";
import { NoSuchDelegationSet } from "../shapes/NoSuchDelegationSet";
import { DelegationSetNotReusable } from "../shapes/DelegationSetNotReusable";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetReusableDelegationSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetReusableDelegationSet",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/delegationset/{Id}"
  },
  input: {
    shape: GetReusableDelegationSetInput
  },
  output: {
    shape: GetReusableDelegationSetOutput
  },
  errors: [
    {
      shape: NoSuchDelegationSet
    },
    {
      shape: DelegationSetNotReusable
    },
    {
      shape: InvalidInput
    }
  ]
};
