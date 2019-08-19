import { DeleteRuleInput } from "../shapes/DeleteRuleInput";
import { DeleteRuleOutput } from "../shapes/DeleteRuleOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ManagedRuleException } from "../shapes/ManagedRuleException";
import { InternalException } from "../shapes/InternalException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRuleInput
  },
  output: {
    shape: DeleteRuleOutput
  },
  errors: [
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ManagedRuleException
    },
    {
      shape: InternalException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
