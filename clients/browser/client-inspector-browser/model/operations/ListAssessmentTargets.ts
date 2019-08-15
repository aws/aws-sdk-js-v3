import { ListAssessmentTargetsInput } from "../shapes/ListAssessmentTargetsInput";
import { ListAssessmentTargetsOutput } from "../shapes/ListAssessmentTargetsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
