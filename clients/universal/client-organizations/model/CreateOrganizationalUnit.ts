import { CreateOrganizationalUnitInput } from "./CreateOrganizationalUnitInput";
import { CreateOrganizationalUnitOutput } from "./CreateOrganizationalUnitOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { DuplicateOrganizationalUnitException } from "./DuplicateOrganizationalUnitException";
import { InvalidInputException } from "./InvalidInputException";
import { ParentNotFoundException } from "./ParentNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
