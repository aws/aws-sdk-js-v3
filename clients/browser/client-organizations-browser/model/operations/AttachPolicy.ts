import { AttachPolicyInput } from "../shapes/AttachPolicyInput";
import { AttachPolicyOutput } from "../shapes/AttachPolicyOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ConstraintViolationException } from "../shapes/ConstraintViolationException";
import { DuplicatePolicyAttachmentException } from "../shapes/DuplicatePolicyAttachmentException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { PolicyNotFoundException } from "../shapes/PolicyNotFoundException";
import { PolicyTypeNotEnabledException } from "../shapes/PolicyTypeNotEnabledException";
import { ServiceException } from "../shapes/ServiceException";
import { TargetNotFoundException } from "../shapes/TargetNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AttachPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AttachPolicyInput
  },
  output: {
    shape: AttachPolicyOutput
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
      shape: DuplicatePolicyAttachmentException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: PolicyNotFoundException
    },
    {
      shape: PolicyTypeNotEnabledException
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
