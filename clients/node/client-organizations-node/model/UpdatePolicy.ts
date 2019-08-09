import { UpdatePolicyInput } from "./UpdatePolicyInput";
import { UpdatePolicyOutput } from "./UpdatePolicyOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { DuplicatePolicyException } from "./DuplicatePolicyException";
import { InvalidInputException } from "./InvalidInputException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdatePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdatePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdatePolicyInput
  },
  output: {
    shape: UpdatePolicyOutput
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
      shape: DuplicatePolicyException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: MalformedPolicyDocumentException
    },
    {
      shape: PolicyNotFoundException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
