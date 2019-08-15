import { CreateAutoScalingGroupInput } from "../shapes/CreateAutoScalingGroupInput";
import { CreateAutoScalingGroupOutput } from "../shapes/CreateAutoScalingGroupOutput";
import { AlreadyExistsFault } from "../shapes/AlreadyExistsFault";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "../shapes/ServiceLinkedRoleFailure";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateAutoScalingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAutoScalingGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAutoScalingGroupInput
  },
  output: {
    shape: CreateAutoScalingGroupOutput
  },
  errors: [
    {
      shape: AlreadyExistsFault
    },
    {
      shape: LimitExceededFault
    },
    {
      shape: ResourceContentionFault
    },
    {
      shape: ServiceLinkedRoleFailure
    }
  ]
};
