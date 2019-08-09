import { ListAssessmentTargetsInput } from "./ListAssessmentTargetsInput";
import { ListAssessmentTargetsOutput } from "./ListAssessmentTargetsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListAssessmentTargets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAssessmentTargets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAssessmentTargetsInput
  },
  output: {
    shape: ListAssessmentTargetsOutput
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
    }
  ]
};
