import { RemoveTagsInput } from "./RemoveTagsInput";
import { RemoveTagsOutput } from "./RemoveTagsOutput";
import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { RuleNotFoundException } from "./RuleNotFoundException";
import { TooManyTagsException } from "./TooManyTagsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
