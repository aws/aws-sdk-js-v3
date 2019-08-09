import { PutTargetsInput } from "./PutTargetsInput";
import { PutTargetsOutput } from "./PutTargetsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { LimitExceededException } from "./LimitExceededException";
import { ManagedRuleException } from "./ManagedRuleException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutTargets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutTargets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutTargetsInput
  },
  output: {
    shape: PutTargetsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ManagedRuleException
    },
    {
      shape: InternalException
    }
  ]
};
