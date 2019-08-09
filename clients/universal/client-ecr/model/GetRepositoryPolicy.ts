import { GetRepositoryPolicyInput } from "./GetRepositoryPolicyInput";
import { GetRepositoryPolicyOutput } from "./GetRepositoryPolicyOutput";
import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { RepositoryPolicyNotFoundException } from "./RepositoryPolicyNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetRepositoryPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRepositoryPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetRepositoryPolicyInput
  },
  output: {
    shape: GetRepositoryPolicyOutput
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
