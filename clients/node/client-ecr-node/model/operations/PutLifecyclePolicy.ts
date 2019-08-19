import { PutLifecyclePolicyInput } from "../shapes/PutLifecyclePolicyInput";
import { PutLifecyclePolicyOutput } from "../shapes/PutLifecyclePolicyOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutLifecyclePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutLifecyclePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutLifecyclePolicyInput
  },
  output: {
    shape: PutLifecyclePolicyOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: RepositoryNotFoundException
    }
  ]
};
