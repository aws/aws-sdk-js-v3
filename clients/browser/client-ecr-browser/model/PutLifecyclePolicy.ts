import { PutLifecyclePolicyInput } from "./PutLifecyclePolicyInput";
import { PutLifecyclePolicyOutput } from "./PutLifecyclePolicyOutput";
import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
