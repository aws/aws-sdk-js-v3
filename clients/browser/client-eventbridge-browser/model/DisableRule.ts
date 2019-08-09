import { DisableRuleInput } from "./DisableRuleInput";
import { DisableRuleOutput } from "./DisableRuleOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ManagedRuleException } from "./ManagedRuleException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
