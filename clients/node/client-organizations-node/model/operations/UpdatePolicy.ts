import { UpdatePolicyInput } from "../shapes/UpdatePolicyInput";
import { UpdatePolicyOutput } from "../shapes/UpdatePolicyOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ConstraintViolationException } from "../shapes/ConstraintViolationException";
import { DuplicatePolicyException } from "../shapes/DuplicatePolicyException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { MalformedPolicyDocumentException } from "../shapes/MalformedPolicyDocumentException";
import { PolicyNotFoundException } from "../shapes/PolicyNotFoundException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
