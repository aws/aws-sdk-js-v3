import { ListAssessmentRunAgentsInput } from "../shapes/ListAssessmentRunAgentsInput";
import { ListAssessmentRunAgentsOutput } from "../shapes/ListAssessmentRunAgentsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAssessmentRunAgents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAssessmentRunAgents",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAssessmentRunAgentsInput
  },
  output: {
    shape: ListAssessmentRunAgentsOutput
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
