import { CreateAssessmentTemplateInput } from "./CreateAssessmentTemplateInput";
import { CreateAssessmentTemplateOutput } from "./CreateAssessmentTemplateOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateAssessmentTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAssessmentTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAssessmentTemplateInput
  },
  output: {
    shape: CreateAssessmentTemplateOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: LimitExceededException
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
