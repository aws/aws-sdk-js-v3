import { GetLifecyclePolicyInput } from "../shapes/GetLifecyclePolicyInput";
import { GetLifecyclePolicyOutput } from "../shapes/GetLifecyclePolicyOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { LifecyclePolicyNotFoundException } from "../shapes/LifecyclePolicyNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetLifecyclePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetLifecyclePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetLifecyclePolicyInput
  },
  output: {
    shape: GetLifecyclePolicyOutput
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
    },
    {
      shape: LifecyclePolicyNotFoundException
    }
  ]
};
