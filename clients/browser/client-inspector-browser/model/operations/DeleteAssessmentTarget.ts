import { DeleteAssessmentTargetInput } from "../shapes/DeleteAssessmentTargetInput";
import { DeleteAssessmentTargetOutput } from "../shapes/DeleteAssessmentTargetOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AssessmentRunInProgressException } from "../shapes/AssessmentRunInProgressException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "../shapes/ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
