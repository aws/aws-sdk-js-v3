import { DeleteOrganizationalUnitInput } from "./DeleteOrganizationalUnitInput";
import { DeleteOrganizationalUnitOutput } from "./DeleteOrganizationalUnitOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidInputException } from "./InvalidInputException";
import { OrganizationalUnitNotEmptyException } from "./OrganizationalUnitNotEmptyException";
import { OrganizationalUnitNotFoundException } from "./OrganizationalUnitNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
