import { DeleteModelInput } from "../shapes/DeleteModelInput";
import { DeleteModelOutput } from "../shapes/DeleteModelOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteModel",
  http: {
    method: "DELETE",
    requestUri: "/v2/apis/{apiId}/models/{modelId}"
  },
  input: {
    shape: DeleteModelInput
  },
  output: {
    shape: DeleteModelOutput
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
