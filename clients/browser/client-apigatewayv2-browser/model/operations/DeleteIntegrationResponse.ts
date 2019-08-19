import { DeleteIntegrationResponseInput } from "../shapes/DeleteIntegrationResponseInput";
import { DeleteIntegrationResponseOutput } from "../shapes/DeleteIntegrationResponseOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
