import { ListBillingGroupsInput } from "../shapes/ListBillingGroupsInput";
import { ListBillingGroupsOutput } from "../shapes/ListBillingGroupsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListBillingGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBillingGroups",
  http: {
    method: "GET",
    requestUri: "/billing-groups"
  },
  input: {
    shape: ListBillingGroupsInput
  },
  output: {
    shape: ListBillingGroupsOutput
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
