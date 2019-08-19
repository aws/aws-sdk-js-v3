import { PutRuleInput } from "../shapes/PutRuleInput";
import { PutRuleOutput } from "../shapes/PutRuleOutput";
import { InvalidEventPatternException } from "../shapes/InvalidEventPatternException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ManagedRuleException } from "../shapes/ManagedRuleException";
import { InternalException } from "../shapes/InternalException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutRuleInput
  },
  output: {
    shape: PutRuleOutput
  },
  errors: [
    {
      shape: InvalidEventPatternException
    },
    {
      shape: LimitExceededException
    },
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
