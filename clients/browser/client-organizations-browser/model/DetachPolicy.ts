import { DetachPolicyInput } from "./DetachPolicyInput";
import { DetachPolicyOutput } from "./DetachPolicyOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyNotAttachedException } from "./PolicyNotAttachedException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { ServiceException } from "./ServiceException";
import { TargetNotFoundException } from "./TargetNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetachPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetachPolicyInput
  },
  output: {
    shape: DetachPolicyOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AWSOrganizationsNotInUseException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ConstraintViolationException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: PolicyNotAttachedException
    },
    {
      shape: PolicyNotFoundException
    },
    {
      shape: ServiceException
    },
    {
      shape: TargetNotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
