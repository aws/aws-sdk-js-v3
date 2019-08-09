import { ListAssessmentRunsInput } from "./ListAssessmentRunsInput";
import { ListAssessmentRunsOutput } from "./ListAssessmentRunsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
