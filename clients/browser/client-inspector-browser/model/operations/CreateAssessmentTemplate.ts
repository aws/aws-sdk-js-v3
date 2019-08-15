import { CreateAssessmentTemplateInput } from "../shapes/CreateAssessmentTemplateInput";
import { CreateAssessmentTemplateOutput } from "../shapes/CreateAssessmentTemplateOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "../shapes/ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
