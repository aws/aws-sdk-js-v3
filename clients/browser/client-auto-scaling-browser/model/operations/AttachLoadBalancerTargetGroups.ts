import { AttachLoadBalancerTargetGroupsInput } from "../shapes/AttachLoadBalancerTargetGroupsInput";
import { AttachLoadBalancerTargetGroupsOutput } from "../shapes/AttachLoadBalancerTargetGroupsOutput";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "../shapes/ServiceLinkedRoleFailure";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
