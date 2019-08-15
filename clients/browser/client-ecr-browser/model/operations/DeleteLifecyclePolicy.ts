import { DeleteLifecyclePolicyInput } from "../shapes/DeleteLifecyclePolicyInput";
import { DeleteLifecyclePolicyOutput } from "../shapes/DeleteLifecyclePolicyOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { LifecyclePolicyNotFoundException } from "../shapes/LifecyclePolicyNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteLifecyclePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLifecyclePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteLifecyclePolicyInput
  },
  output: {
    shape: DeleteLifecyclePolicyOutput
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
