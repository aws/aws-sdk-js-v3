import { DeleteRepositoryPolicyInput } from "./DeleteRepositoryPolicyInput";
import { DeleteRepositoryPolicyOutput } from "./DeleteRepositoryPolicyOutput";
import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { RepositoryPolicyNotFoundException } from "./RepositoryPolicyNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
