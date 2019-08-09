import { CreatePolicyInput } from "./CreatePolicyInput";
import { CreatePolicyOutput } from "./CreatePolicyOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { DuplicatePolicyException } from "./DuplicatePolicyException";
import { InvalidInputException } from "./InvalidInputException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { PolicyTypeNotAvailableForOrganizationException } from "./PolicyTypeNotAvailableForOrganizationException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreatePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePolicyInput
  },
  output: {
    shape: CreatePolicyOutput
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
      shape: PolicyTypeNotAvailableForOrganizationException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
