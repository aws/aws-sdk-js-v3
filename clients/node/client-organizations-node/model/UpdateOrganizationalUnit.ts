import { UpdateOrganizationalUnitInput } from "./UpdateOrganizationalUnitInput";
import { UpdateOrganizationalUnitOutput } from "./UpdateOrganizationalUnitOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { DuplicateOrganizationalUnitException } from "./DuplicateOrganizationalUnitException";
import { InvalidInputException } from "./InvalidInputException";
import { OrganizationalUnitNotFoundException } from "./OrganizationalUnitNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
