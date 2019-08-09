import { DeleteReusableDelegationSetInput } from "./DeleteReusableDelegationSetInput";
import { DeleteReusableDelegationSetOutput } from "./DeleteReusableDelegationSetOutput";
import { NoSuchDelegationSet } from "./NoSuchDelegationSet";
import { DelegationSetInUse } from "./DelegationSetInUse";
import { DelegationSetNotReusable } from "./DelegationSetNotReusable";
import { InvalidInput } from "./InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
