import { CreateAssessmentTargetInput } from "./CreateAssessmentTargetInput";
import { CreateAssessmentTargetOutput } from "./CreateAssessmentTargetOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidCrossAccountRoleException } from "./InvalidCrossAccountRoleException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateAssessmentTarget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAssessmentTarget",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAssessmentTargetInput
  },
  output: {
    shape: CreateAssessmentTargetOutput
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
      shape: ServiceTemporarilyUnavailableException
    }
  ]
};
