import { UpdateFindingsFeedbackInput } from "../shapes/UpdateFindingsFeedbackInput";
import { UpdateFindingsFeedbackOutput } from "../shapes/UpdateFindingsFeedbackOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateFindingsFeedback: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFindingsFeedback",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/findings/feedback"
  },
  input: {
    shape: UpdateFindingsFeedbackInput
  },
  output: {
    shape: UpdateFindingsFeedbackOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    }
  ]
};
