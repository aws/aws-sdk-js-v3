import { DetachPolicyInput } from "../shapes/DetachPolicyInput";
import { DetachPolicyOutput } from "../shapes/DetachPolicyOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ConstraintViolationException } from "../shapes/ConstraintViolationException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { PolicyNotAttachedException } from "../shapes/PolicyNotAttachedException";
import { PolicyNotFoundException } from "../shapes/PolicyNotFoundException";
import { ServiceException } from "../shapes/ServiceException";
import { TargetNotFoundException } from "../shapes/TargetNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
