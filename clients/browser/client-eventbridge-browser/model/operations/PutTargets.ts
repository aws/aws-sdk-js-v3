import { PutTargetsInput } from "../shapes/PutTargetsInput";
import { PutTargetsOutput } from "../shapes/PutTargetsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ManagedRuleException } from "../shapes/ManagedRuleException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
