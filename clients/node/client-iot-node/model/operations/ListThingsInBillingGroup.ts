import { ListThingsInBillingGroupInput } from "../shapes/ListThingsInBillingGroupInput";
import { ListThingsInBillingGroupOutput } from "../shapes/ListThingsInBillingGroupOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListThingsInBillingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListThingsInBillingGroup",
  http: {
    method: "GET",
    requestUri: "/billing-groups/{billingGroupName}/things"
  },
  input: {
    shape: ListThingsInBillingGroupInput
  },
  output: {
    shape: ListThingsInBillingGroupOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    }
  ]
};
