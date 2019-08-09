import { DisablePolicyTypeInput } from "./DisablePolicyTypeInput";
import { DisablePolicyTypeOutput } from "./DisablePolicyTypeOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyTypeNotEnabledException } from "./PolicyTypeNotEnabledException";
import { RootNotFoundException } from "./RootNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisablePolicyType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisablePolicyType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisablePolicyTypeInput
  },
  output: {
    shape: DisablePolicyTypeOutput
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
      shape: PolicyTypeNotEnabledException
    },
    {
      shape: RootNotFoundException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
