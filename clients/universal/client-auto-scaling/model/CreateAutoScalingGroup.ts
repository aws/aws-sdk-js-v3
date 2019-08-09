import { CreateAutoScalingGroupInput } from "./CreateAutoScalingGroupInput";
import { CreateAutoScalingGroupOutput } from "./CreateAutoScalingGroupOutput";
import { AlreadyExistsFault } from "./AlreadyExistsFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "./ServiceLinkedRoleFailure";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
