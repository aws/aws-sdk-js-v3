import { AttachLoadBalancerTargetGroupsInput } from "./AttachLoadBalancerTargetGroupsInput";
import { AttachLoadBalancerTargetGroupsOutput } from "./AttachLoadBalancerTargetGroupsOutput";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "./ServiceLinkedRoleFailure";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AttachLoadBalancerTargetGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachLoadBalancerTargetGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AttachLoadBalancerTargetGroupsInput
  },
  output: {
    shape: AttachLoadBalancerTargetGroupsOutput,
    resultWrapper: "AttachLoadBalancerTargetGroupsResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    },
    {
      shape: ServiceLinkedRoleFailure
    }
  ]
};
