import { AddThingToBillingGroupInput } from "./AddThingToBillingGroupInput";
import { AddThingToBillingGroupOutput } from "./AddThingToBillingGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
