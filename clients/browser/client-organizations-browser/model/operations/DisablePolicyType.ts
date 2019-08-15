import { DisablePolicyTypeInput } from "../shapes/DisablePolicyTypeInput";
import { DisablePolicyTypeOutput } from "../shapes/DisablePolicyTypeOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ConstraintViolationException } from "../shapes/ConstraintViolationException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { PolicyTypeNotEnabledException } from "../shapes/PolicyTypeNotEnabledException";
import { RootNotFoundException } from "../shapes/RootNotFoundException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
