import { ListAssessmentRunAgentsInput } from "./ListAssessmentRunAgentsInput";
import { ListAssessmentRunAgentsOutput } from "./ListAssessmentRunAgentsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
