import { DescribeTagsInput } from "../shapes/DescribeTagsInput";
import { DescribeTagsOutput } from "../shapes/DescribeTagsOutput";
import { LoadBalancerNotFoundException } from "../shapes/LoadBalancerNotFoundException";
import { TargetGroupNotFoundException } from "../shapes/TargetGroupNotFoundException";
import { ListenerNotFoundException } from "../shapes/ListenerNotFoundException";
import { RuleNotFoundException } from "../shapes/RuleNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
