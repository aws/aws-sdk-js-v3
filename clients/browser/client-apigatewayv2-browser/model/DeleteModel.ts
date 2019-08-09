import { DeleteModelInput } from "./DeleteModelInput";
import { DeleteModelOutput } from "./DeleteModelOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
