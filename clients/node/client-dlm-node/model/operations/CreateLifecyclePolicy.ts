import { CreateLifecyclePolicyInput } from "../shapes/CreateLifecyclePolicyInput";
import { CreateLifecyclePolicyOutput } from "../shapes/CreateLifecyclePolicyOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateLifecyclePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLifecyclePolicy",
  http: {
    method: "POST",
    requestUri: "/policies"
  },
  input: {
    shape: CreateLifecyclePolicyInput
  },
  output: {
    shape: CreateLifecyclePolicyOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServerException
    }
  ]
};
