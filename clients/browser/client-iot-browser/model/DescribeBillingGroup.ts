import { DescribeBillingGroupInput } from "./DescribeBillingGroupInput";
import { DescribeBillingGroupOutput } from "./DescribeBillingGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
