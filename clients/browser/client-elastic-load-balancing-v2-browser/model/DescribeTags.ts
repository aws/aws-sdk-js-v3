import { DescribeTagsInput } from "./DescribeTagsInput";
import { DescribeTagsOutput } from "./DescribeTagsOutput";
import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { RuleNotFoundException } from "./RuleNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTagsInput
  },
  output: {
    shape: DescribeTagsOutput,
    resultWrapper: "DescribeTagsResult"
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
    }
  ]
};
