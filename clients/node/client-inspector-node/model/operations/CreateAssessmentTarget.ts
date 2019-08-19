import { CreateAssessmentTargetInput } from "../shapes/CreateAssessmentTargetInput";
import { CreateAssessmentTargetOutput } from "../shapes/CreateAssessmentTargetOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidCrossAccountRoleException } from "../shapes/InvalidCrossAccountRoleException";
import { ServiceTemporarilyUnavailableException } from "../shapes/ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
