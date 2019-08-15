import { StartAssessmentRunInput } from "../shapes/StartAssessmentRunInput";
import { StartAssessmentRunOutput } from "../shapes/StartAssessmentRunOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidCrossAccountRoleException } from "../shapes/InvalidCrossAccountRoleException";
import { AgentsAlreadyRunningAssessmentException } from "../shapes/AgentsAlreadyRunningAssessmentException";
import { ServiceTemporarilyUnavailableException } from "../shapes/ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
