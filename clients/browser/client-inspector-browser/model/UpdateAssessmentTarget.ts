import { UpdateAssessmentTargetInput } from "./UpdateAssessmentTargetInput";
import { UpdateAssessmentTargetOutput } from "./UpdateAssessmentTargetOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
