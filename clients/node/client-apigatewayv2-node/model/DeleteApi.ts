import { DeleteApiInput } from "./DeleteApiInput";
import { DeleteApiOutput } from "./DeleteApiOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
