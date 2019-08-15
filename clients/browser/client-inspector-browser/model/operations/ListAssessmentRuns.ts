import { ListAssessmentRunsInput } from "../shapes/ListAssessmentRunsInput";
import { ListAssessmentRunsOutput } from "../shapes/ListAssessmentRunsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAssessmentRuns: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAssessmentRuns",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAssessmentRunsInput
  },
  output: {
    shape: ListAssessmentRunsOutput
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
