import { DeleteAuthorizerInput } from "../shapes/DeleteAuthorizerInput";
import { DeleteAuthorizerOutput } from "../shapes/DeleteAuthorizerOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteAuthorizer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAuthorizer",
  http: {
    method: "DELETE",
    requestUri: "/v2/apis/{apiId}/authorizers/{authorizerId}"
  },
  input: {
    shape: DeleteAuthorizerInput
  },
  output: {
    shape: DeleteAuthorizerOutput
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
