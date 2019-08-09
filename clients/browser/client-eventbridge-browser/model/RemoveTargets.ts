import { RemoveTargetsInput } from "./RemoveTargetsInput";
import { RemoveTargetsOutput } from "./RemoveTargetsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ManagedRuleException } from "./ManagedRuleException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RemoveTargets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveTargets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveTargetsInput
  },
  output: {
    shape: RemoveTargetsOutput
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
