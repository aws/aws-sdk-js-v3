import { ListThingsInBillingGroupInput } from "./ListThingsInBillingGroupInput";
import { ListThingsInBillingGroupOutput } from "./ListThingsInBillingGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
