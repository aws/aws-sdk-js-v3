import { DeleteOrganizationInput } from "../shapes/DeleteOrganizationInput";
import { DeleteOrganizationOutput } from "../shapes/DeleteOrganizationOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OrganizationNotEmptyException } from "../shapes/OrganizationNotEmptyException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
