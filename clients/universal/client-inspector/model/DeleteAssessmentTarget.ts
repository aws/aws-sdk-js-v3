import { DeleteAssessmentTargetInput } from "./DeleteAssessmentTargetInput";
import { DeleteAssessmentTargetOutput } from "./DeleteAssessmentTargetOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AssessmentRunInProgressException } from "./AssessmentRunInProgressException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteAssessmentTarget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAssessmentTarget",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAssessmentTargetInput
  },
  output: {
    shape: DeleteAssessmentTargetOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: AssessmentRunInProgressException
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
