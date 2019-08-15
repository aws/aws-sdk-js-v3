import { CreatePolicyInput } from "../shapes/CreatePolicyInput";
import { CreatePolicyOutput } from "../shapes/CreatePolicyOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ConstraintViolationException } from "../shapes/ConstraintViolationException";
import { DuplicatePolicyException } from "../shapes/DuplicatePolicyException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { MalformedPolicyDocumentException } from "../shapes/MalformedPolicyDocumentException";
import { PolicyTypeNotAvailableForOrganizationException } from "../shapes/PolicyTypeNotAvailableForOrganizationException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
