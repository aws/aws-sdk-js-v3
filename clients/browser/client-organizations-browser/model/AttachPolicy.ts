import { AttachPolicyInput } from "./AttachPolicyInput";
import { AttachPolicyOutput } from "./AttachPolicyOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { DuplicatePolicyAttachmentException } from "./DuplicatePolicyAttachmentException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { PolicyTypeNotEnabledException } from "./PolicyTypeNotEnabledException";
import { ServiceException } from "./ServiceException";
import { TargetNotFoundException } from "./TargetNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
