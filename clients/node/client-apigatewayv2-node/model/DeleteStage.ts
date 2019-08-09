import { DeleteStageInput } from "./DeleteStageInput";
import { DeleteStageOutput } from "./DeleteStageOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
