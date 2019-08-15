import { DeleteReusableDelegationSetInput } from "../shapes/DeleteReusableDelegationSetInput";
import { DeleteReusableDelegationSetOutput } from "../shapes/DeleteReusableDelegationSetOutput";
import { NoSuchDelegationSet } from "../shapes/NoSuchDelegationSet";
import { DelegationSetInUse } from "../shapes/DelegationSetInUse";
import { DelegationSetNotReusable } from "../shapes/DelegationSetNotReusable";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteReusableDelegationSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteReusableDelegationSet",
  http: {
    method: "DELETE",
    requestUri: "/2013-04-01/delegationset/{Id}"
  },
  input: {
    shape: DeleteReusableDelegationSetInput
  },
  output: {
    shape: DeleteReusableDelegationSetOutput
  },
  errors: [
    {
      shape: NoSuchDelegationSet
    },
    {
      shape: DelegationSetInUse
    },
    {
      shape: DelegationSetNotReusable
    },
    {
      shape: InvalidInput
    }
  ]
};
