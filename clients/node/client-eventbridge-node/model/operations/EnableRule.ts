import { EnableRuleInput } from "../shapes/EnableRuleInput";
import { EnableRuleOutput } from "../shapes/EnableRuleOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ManagedRuleException } from "../shapes/ManagedRuleException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
