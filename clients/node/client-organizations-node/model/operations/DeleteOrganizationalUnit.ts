import { DeleteOrganizationalUnitInput } from "../shapes/DeleteOrganizationalUnitInput";
import { DeleteOrganizationalUnitOutput } from "../shapes/DeleteOrganizationalUnitOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OrganizationalUnitNotEmptyException } from "../shapes/OrganizationalUnitNotEmptyException";
import { OrganizationalUnitNotFoundException } from "../shapes/OrganizationalUnitNotFoundException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteOrganizationalUnit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteOrganizationalUnit",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteOrganizationalUnitInput
  },
  output: {
    shape: DeleteOrganizationalUnitOutput
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
      shape: InvalidInputException
    },
    {
      shape: OrganizationalUnitNotEmptyException
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
