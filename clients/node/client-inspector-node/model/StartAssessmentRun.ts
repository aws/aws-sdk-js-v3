import { StartAssessmentRunInput } from "./StartAssessmentRunInput";
import { StartAssessmentRunOutput } from "./StartAssessmentRunOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidCrossAccountRoleException } from "./InvalidCrossAccountRoleException";
import { AgentsAlreadyRunningAssessmentException } from "./AgentsAlreadyRunningAssessmentException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartAssessmentRun: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartAssessmentRun",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartAssessmentRunInput
  },
  output: {
    shape: StartAssessmentRunOutput
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
      shape: InvalidCrossAccountRoleException
    },
    {
      shape: AgentsAlreadyRunningAssessmentException
    },
    {
      shape: ServiceTemporarilyUnavailableException
    }
  ]
};
