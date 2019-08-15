import { SetRepositoryPolicyInput } from "../shapes/SetRepositoryPolicyInput";
import { SetRepositoryPolicyOutput } from "../shapes/SetRepositoryPolicyOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetRepositoryPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetRepositoryPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetRepositoryPolicyInput
  },
  output: {
    shape: SetRepositoryPolicyOutput
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
