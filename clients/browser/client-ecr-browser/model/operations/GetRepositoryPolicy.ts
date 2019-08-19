import { GetRepositoryPolicyInput } from "../shapes/GetRepositoryPolicyInput";
import { GetRepositoryPolicyOutput } from "../shapes/GetRepositoryPolicyOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { RepositoryPolicyNotFoundException } from "../shapes/RepositoryPolicyNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
