import { RemoveThingFromBillingGroupInput } from "../shapes/RemoveThingFromBillingGroupInput";
import { RemoveThingFromBillingGroupOutput } from "../shapes/RemoveThingFromBillingGroupOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
