import { CreateLifecyclePolicyInput } from "./CreateLifecyclePolicyInput";
import { CreateLifecyclePolicyOutput } from "./CreateLifecyclePolicyOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
