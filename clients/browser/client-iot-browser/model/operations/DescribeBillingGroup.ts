import { DescribeBillingGroupInput } from "../shapes/DescribeBillingGroupInput";
import { DescribeBillingGroupOutput } from "../shapes/DescribeBillingGroupOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeBillingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeBillingGroup",
  http: {
    method: "GET",
    requestUri: "/billing-groups/{billingGroupName}"
  },
  input: {
    shape: DescribeBillingGroupInput
  },
  output: {
    shape: DescribeBillingGroupOutput
  },
  errors: [
    {
      shape: InvalidRequestException
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
