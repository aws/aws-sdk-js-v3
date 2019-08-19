import { DeleteRepositoryPolicyInput } from "../shapes/DeleteRepositoryPolicyInput";
import { DeleteRepositoryPolicyOutput } from "../shapes/DeleteRepositoryPolicyOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { RepositoryPolicyNotFoundException } from "../shapes/RepositoryPolicyNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRepositoryPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRepositoryPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRepositoryPolicyInput
  },
  output: {
    shape: DeleteRepositoryPolicyOutput
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
      shape: RepositoryPolicyNotFoundException
    }
  ]
};
