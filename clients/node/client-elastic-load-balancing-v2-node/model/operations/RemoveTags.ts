import { RemoveTagsInput } from "../shapes/RemoveTagsInput";
import { RemoveTagsOutput } from "../shapes/RemoveTagsOutput";
import { LoadBalancerNotFoundException } from "../shapes/LoadBalancerNotFoundException";
import { TargetGroupNotFoundException } from "../shapes/TargetGroupNotFoundException";
import { ListenerNotFoundException } from "../shapes/ListenerNotFoundException";
import { RuleNotFoundException } from "../shapes/RuleNotFoundException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemoveTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveTagsInput
  },
  output: {
    shape: RemoveTagsOutput,
    resultWrapper: "RemoveTagsResult"
  },
  errors: [
    {
      shape: LoadBalancerNotFoundException
    },
    {
      shape: TargetGroupNotFoundException
    },
    {
      shape: ListenerNotFoundException
    },
    {
      shape: RuleNotFoundException
    },
    {
      shape: TooManyTagsException
    }
  ]
};
