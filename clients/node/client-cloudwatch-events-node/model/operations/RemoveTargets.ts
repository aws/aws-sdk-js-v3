import { RemoveTargetsInput } from "../shapes/RemoveTargetsInput";
import { RemoveTargetsOutput } from "../shapes/RemoveTargetsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ManagedRuleException } from "../shapes/ManagedRuleException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
