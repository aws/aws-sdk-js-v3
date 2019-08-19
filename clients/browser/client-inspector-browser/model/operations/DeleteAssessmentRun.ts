import { DeleteAssessmentRunInput } from "../shapes/DeleteAssessmentRunInput";
import { DeleteAssessmentRunOutput } from "../shapes/DeleteAssessmentRunOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AssessmentRunInProgressException } from "../shapes/AssessmentRunInProgressException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "../shapes/ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
