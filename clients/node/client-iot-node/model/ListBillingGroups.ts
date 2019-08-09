import { ListBillingGroupsInput } from "./ListBillingGroupsInput";
import { ListBillingGroupsOutput } from "./ListBillingGroupsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
