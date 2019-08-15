import { DetachLoadBalancerTargetGroupsInput } from "../shapes/DetachLoadBalancerTargetGroupsInput";
import { DetachLoadBalancerTargetGroupsOutput } from "../shapes/DetachLoadBalancerTargetGroupsOutput";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DetachLoadBalancerTargetGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachLoadBalancerTargetGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetachLoadBalancerTargetGroupsInput
  },
  output: {
    shape: DetachLoadBalancerTargetGroupsOutput,
    resultWrapper: "DetachLoadBalancerTargetGroupsResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
