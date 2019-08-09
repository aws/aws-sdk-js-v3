import { CreateBillingGroupInput } from "./CreateBillingGroupInput";
import { CreateBillingGroupOutput } from "./CreateBillingGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateBillingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateBillingGroup",
  http: {
    method: "POST",
    requestUri: "/billing-groups/{billingGroupName}"
  },
  input: {
    shape: CreateBillingGroupInput
  },
  output: {
    shape: CreateBillingGroupOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
