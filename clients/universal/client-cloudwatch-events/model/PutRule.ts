import { PutRuleInput } from "./PutRuleInput";
import { PutRuleOutput } from "./PutRuleOutput";
import { InvalidEventPatternException } from "./InvalidEventPatternException";
import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ManagedRuleException } from "./ManagedRuleException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
