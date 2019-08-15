import { UpdateBillingGroupInput } from "../shapes/UpdateBillingGroupInput";
import { UpdateBillingGroupOutput } from "../shapes/UpdateBillingGroupOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { VersionConflictException } from "../shapes/VersionConflictException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateBillingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateBillingGroup",
  http: {
    method: "PATCH",
    requestUri: "/billing-groups/{billingGroupName}"
  },
  input: {
    shape: UpdateBillingGroupInput
  },
  output: {
    shape: UpdateBillingGroupOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: VersionConflictException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
