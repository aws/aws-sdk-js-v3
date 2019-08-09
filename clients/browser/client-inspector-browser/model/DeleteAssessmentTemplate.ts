import { DeleteAssessmentTemplateInput } from "./DeleteAssessmentTemplateInput";
import { DeleteAssessmentTemplateOutput } from "./DeleteAssessmentTemplateOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AssessmentRunInProgressException } from "./AssessmentRunInProgressException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
