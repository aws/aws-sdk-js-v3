import { CreateOrganizationalUnitInput } from "../shapes/CreateOrganizationalUnitInput";
import { CreateOrganizationalUnitOutput } from "../shapes/CreateOrganizationalUnitOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ConstraintViolationException } from "../shapes/ConstraintViolationException";
import { DuplicateOrganizationalUnitException } from "../shapes/DuplicateOrganizationalUnitException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ParentNotFoundException } from "../shapes/ParentNotFoundException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateOrganizationalUnit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateOrganizationalUnit",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateOrganizationalUnitInput
  },
  output: {
    shape: CreateOrganizationalUnitOutput
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
      shape: DuplicateOrganizationalUnitException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ParentNotFoundException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
