import { ListAssessmentTemplatesInput } from "../shapes/ListAssessmentTemplatesInput";
import { ListAssessmentTemplatesOutput } from "../shapes/ListAssessmentTemplatesOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
