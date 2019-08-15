import { ListGitHubAccountTokenNamesInput } from "../shapes/ListGitHubAccountTokenNamesInput";
import { ListGitHubAccountTokenNamesOutput } from "../shapes/ListGitHubAccountTokenNamesOutput";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ResourceValidationException } from "../shapes/ResourceValidationException";
import { OperationNotSupportedException } from "../shapes/OperationNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
