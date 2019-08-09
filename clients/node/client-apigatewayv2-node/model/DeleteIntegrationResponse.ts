import { DeleteIntegrationResponseInput } from "./DeleteIntegrationResponseInput";
import { DeleteIntegrationResponseOutput } from "./DeleteIntegrationResponseOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteIntegrationResponse: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteIntegrationResponse",
  http: {
    method: "DELETE",
    requestUri:
      "/v2/apis/{apiId}/integrations/{integrationId}/integrationresponses/{integrationResponseId}"
  },
  input: {
    shape: DeleteIntegrationResponseInput
  },
  output: {
    shape: DeleteIntegrationResponseOutput
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
