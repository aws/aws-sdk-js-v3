import { DeleteAssessmentRunInput } from "./DeleteAssessmentRunInput";
import { DeleteAssessmentRunOutput } from "./DeleteAssessmentRunOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AssessmentRunInProgressException } from "./AssessmentRunInProgressException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteAssessmentRun: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAssessmentRun",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAssessmentRunInput
  },
  output: {
    shape: DeleteAssessmentRunOutput
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
