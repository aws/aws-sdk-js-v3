import { AddThingToBillingGroupInput } from "../shapes/AddThingToBillingGroupInput";
import { AddThingToBillingGroupOutput } from "../shapes/AddThingToBillingGroupOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddThingToBillingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddThingToBillingGroup",
  http: {
    method: "PUT",
    requestUri: "/billing-groups/addThingToBillingGroup"
  },
  input: {
    shape: AddThingToBillingGroupInput
  },
  output: {
    shape: AddThingToBillingGroupOutput
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
