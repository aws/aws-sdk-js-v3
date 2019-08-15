import { DeleteStageInput } from "../shapes/DeleteStageInput";
import { DeleteStageOutput } from "../shapes/DeleteStageOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteStage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteStage",
  http: {
    method: "DELETE",
    requestUri: "/v2/apis/{apiId}/stages/{stageName}"
  },
  input: {
    shape: DeleteStageInput
  },
  output: {
    shape: DeleteStageOutput
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
