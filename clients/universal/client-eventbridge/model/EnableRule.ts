import { EnableRuleInput } from "./EnableRuleInput";
import { EnableRuleOutput } from "./EnableRuleOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ManagedRuleException } from "./ManagedRuleException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const EnableRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableRuleInput
  },
  output: {
    shape: EnableRuleOutput
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
