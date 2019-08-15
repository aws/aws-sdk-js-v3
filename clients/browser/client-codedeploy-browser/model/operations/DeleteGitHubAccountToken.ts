import { DeleteGitHubAccountTokenInput } from "../shapes/DeleteGitHubAccountTokenInput";
import { DeleteGitHubAccountTokenOutput } from "../shapes/DeleteGitHubAccountTokenOutput";
import { GitHubAccountTokenNameRequiredException } from "../shapes/GitHubAccountTokenNameRequiredException";
import { GitHubAccountTokenDoesNotExistException } from "../shapes/GitHubAccountTokenDoesNotExistException";
import { InvalidGitHubAccountTokenNameException } from "../shapes/InvalidGitHubAccountTokenNameException";
import { ResourceValidationException } from "../shapes/ResourceValidationException";
import { OperationNotSupportedException } from "../shapes/OperationNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteGitHubAccountToken: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteGitHubAccountToken",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteGitHubAccountTokenInput
  },
  output: {
    shape: DeleteGitHubAccountTokenOutput
  },
  errors: [
    {
      shape: GitHubAccountTokenNameRequiredException
    },
    {
      shape: GitHubAccountTokenDoesNotExistException
    },
    {
      shape: InvalidGitHubAccountTokenNameException
    },
    {
      shape: ResourceValidationException
    },
    {
      shape: OperationNotSupportedException
    }
  ]
};
