import { UpdateOrganizationalUnitInput } from "../shapes/UpdateOrganizationalUnitInput";
import { UpdateOrganizationalUnitOutput } from "../shapes/UpdateOrganizationalUnitOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { DuplicateOrganizationalUnitException } from "../shapes/DuplicateOrganizationalUnitException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OrganizationalUnitNotFoundException } from "../shapes/OrganizationalUnitNotFoundException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateOrganizationalUnit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateOrganizationalUnit",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateOrganizationalUnitInput
  },
  output: {
    shape: UpdateOrganizationalUnitOutput
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
      shape: DuplicateOrganizationalUnitException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: OrganizationalUnitNotFoundException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
