import { SetRepositoryPolicyInput } from "./SetRepositoryPolicyInput";
import { SetRepositoryPolicyOutput } from "./SetRepositoryPolicyOutput";
import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
