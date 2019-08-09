import { RemoveThingFromBillingGroupInput } from "./RemoveThingFromBillingGroupInput";
import { RemoveThingFromBillingGroupOutput } from "./RemoveThingFromBillingGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RemoveThingFromBillingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveThingFromBillingGroup",
  http: {
    method: "PUT",
    requestUri: "/billing-groups/removeThingFromBillingGroup"
  },
  input: {
    shape: RemoveThingFromBillingGroupInput
  },
  output: {
    shape: RemoveThingFromBillingGroupOutput
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
