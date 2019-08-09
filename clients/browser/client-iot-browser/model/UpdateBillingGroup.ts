import { UpdateBillingGroupInput } from "./UpdateBillingGroupInput";
import { UpdateBillingGroupOutput } from "./UpdateBillingGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { VersionConflictException } from "./VersionConflictException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
