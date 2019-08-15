import { CreateBillingGroupInput } from "../shapes/CreateBillingGroupInput";
import { CreateBillingGroupOutput } from "../shapes/CreateBillingGroupOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateBillingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateBillingGroup",
  http: {
    method: "POST",
    requestUri: "/billing-groups/{billingGroupName}"
  },
  input: {
    shape: CreateBillingGroupInput
  },
  output: {
    shape: CreateBillingGroupOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
