import { DeleteBillingGroupInput } from "../shapes/DeleteBillingGroupInput";
import { DeleteBillingGroupOutput } from "../shapes/DeleteBillingGroupOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { VersionConflictException } from "../shapes/VersionConflictException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBillingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBillingGroup",
  http: {
    method: "DELETE",
    requestUri: "/billing-groups/{billingGroupName}"
  },
  input: {
    shape: DeleteBillingGroupInput
  },
  output: {
    shape: DeleteBillingGroupOutput
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
    }
  ]
};
