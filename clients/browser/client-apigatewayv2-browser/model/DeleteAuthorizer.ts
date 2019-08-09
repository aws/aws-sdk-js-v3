import { DeleteAuthorizerInput } from "./DeleteAuthorizerInput";
import { DeleteAuthorizerOutput } from "./DeleteAuthorizerOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
