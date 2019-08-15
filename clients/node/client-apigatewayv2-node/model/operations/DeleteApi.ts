import { DeleteApiInput } from "../shapes/DeleteApiInput";
import { DeleteApiOutput } from "../shapes/DeleteApiOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteApi: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApi",
  http: {
    method: "DELETE",
    requestUri: "/v2/apis/{apiId}"
  },
  input: {
    shape: DeleteApiInput
  },
  output: {
    shape: DeleteApiOutput
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
