import { ListAssessmentTemplatesInput } from "./ListAssessmentTemplatesInput";
import { ListAssessmentTemplatesOutput } from "./ListAssessmentTemplatesOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListAssessmentTemplates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAssessmentTemplates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAssessmentTemplatesInput
  },
  output: {
    shape: ListAssessmentTemplatesOutput
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
    }
  ]
};
