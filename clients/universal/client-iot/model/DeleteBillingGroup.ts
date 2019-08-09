import { DeleteBillingGroupInput } from "./DeleteBillingGroupInput";
import { DeleteBillingGroupOutput } from "./DeleteBillingGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { VersionConflictException } from "./VersionConflictException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
