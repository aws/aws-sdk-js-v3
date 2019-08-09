import { GetReusableDelegationSetInput } from "./GetReusableDelegationSetInput";
import { GetReusableDelegationSetOutput } from "./GetReusableDelegationSetOutput";
import { NoSuchDelegationSet } from "./NoSuchDelegationSet";
import { DelegationSetNotReusable } from "./DelegationSetNotReusable";
import { InvalidInput } from "./InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
