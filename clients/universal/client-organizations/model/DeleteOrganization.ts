import { DeleteOrganizationInput } from "./DeleteOrganizationInput";
import { DeleteOrganizationOutput } from "./DeleteOrganizationOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidInputException } from "./InvalidInputException";
import { OrganizationNotEmptyException } from "./OrganizationNotEmptyException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteOrganization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteOrganization",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteOrganizationInput
  },
  output: {
    shape: DeleteOrganizationOutput
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
      shape: OrganizationNotEmptyException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
