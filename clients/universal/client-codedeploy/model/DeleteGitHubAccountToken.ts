import { DeleteGitHubAccountTokenInput } from "./DeleteGitHubAccountTokenInput";
import { DeleteGitHubAccountTokenOutput } from "./DeleteGitHubAccountTokenOutput";
import { GitHubAccountTokenNameRequiredException } from "./GitHubAccountTokenNameRequiredException";
import { GitHubAccountTokenDoesNotExistException } from "./GitHubAccountTokenDoesNotExistException";
import { InvalidGitHubAccountTokenNameException } from "./InvalidGitHubAccountTokenNameException";
import { ResourceValidationException } from "./ResourceValidationException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
