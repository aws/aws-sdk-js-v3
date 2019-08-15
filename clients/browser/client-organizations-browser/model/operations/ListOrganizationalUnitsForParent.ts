import { ListOrganizationalUnitsForParentInput } from "../shapes/ListOrganizationalUnitsForParentInput";
import { ListOrganizationalUnitsForParentOutput } from "../shapes/ListOrganizationalUnitsForParentOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ParentNotFoundException } from "../shapes/ParentNotFoundException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListOrganizationalUnitsForParent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListOrganizationalUnitsForParent",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListOrganizationalUnitsForParentInput
  },
  output: {
    shape: ListOrganizationalUnitsForParentOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AWSOrganizationsNotInUseException
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
