import { ListOrganizationalUnitsForParentInput } from "./ListOrganizationalUnitsForParentInput";
import { ListOrganizationalUnitsForParentOutput } from "./ListOrganizationalUnitsForParentOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { InvalidInputException } from "./InvalidInputException";
import { ParentNotFoundException } from "./ParentNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
