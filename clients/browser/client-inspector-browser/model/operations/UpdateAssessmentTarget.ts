import { UpdateAssessmentTargetInput } from "../shapes/UpdateAssessmentTargetInput";
import { UpdateAssessmentTargetOutput } from "../shapes/UpdateAssessmentTargetOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "../shapes/ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateAssessmentTarget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAssessmentTarget",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateAssessmentTargetInput
  },
  output: {
    shape: UpdateAssessmentTargetOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceTemporarilyUnavailableException
    }
  ]
};
