import { DeleteRuleInput } from "./DeleteRuleInput";
import { DeleteRuleOutput } from "./DeleteRuleOutput";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ManagedRuleException } from "./ManagedRuleException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
