import { DisableRuleInput } from "../shapes/DisableRuleInput";
import { DisableRuleOutput } from "../shapes/DisableRuleOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ManagedRuleException } from "../shapes/ManagedRuleException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisableRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableRuleInput
  },
  output: {
    shape: DisableRuleOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ManagedRuleException
    },
    {
      shape: InternalException
    }
  ]
};
