import { DeleteAssessmentTemplateInput } from "../shapes/DeleteAssessmentTemplateInput";
import { DeleteAssessmentTemplateOutput } from "../shapes/DeleteAssessmentTemplateOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AssessmentRunInProgressException } from "../shapes/AssessmentRunInProgressException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "../shapes/ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteAssessmentTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAssessmentTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAssessmentTemplateInput
  },
  output: {
    shape: DeleteAssessmentTemplateOutput
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
