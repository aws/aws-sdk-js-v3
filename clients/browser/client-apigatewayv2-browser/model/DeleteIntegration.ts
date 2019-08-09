import { DeleteIntegrationInput } from "./DeleteIntegrationInput";
import { DeleteIntegrationOutput } from "./DeleteIntegrationOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteIntegration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteIntegration",
  http: {
    method: "DELETE",
    requestUri: "/v2/apis/{apiId}/integrations/{integrationId}"
  },
  input: {
    shape: DeleteIntegrationInput
  },
  output: {
    shape: DeleteIntegrationOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
