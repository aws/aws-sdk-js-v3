import { ListGitHubAccountTokenNamesInput } from "./ListGitHubAccountTokenNamesInput";
import { ListGitHubAccountTokenNamesOutput } from "./ListGitHubAccountTokenNamesOutput";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ResourceValidationException } from "./ResourceValidationException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListGitHubAccountTokenNames: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGitHubAccountTokenNames",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListGitHubAccountTokenNamesInput
  },
  output: {
    shape: ListGitHubAccountTokenNamesOutput
  },
  errors: [
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ResourceValidationException
    },
    {
      shape: OperationNotSupportedException
    }
  ]
};
