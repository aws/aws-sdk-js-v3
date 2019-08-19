import { ListAccountsForParentInput } from "../shapes/ListAccountsForParentInput";
import { ListAccountsForParentOutput } from "../shapes/ListAccountsForParentOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ParentNotFoundException } from "../shapes/ParentNotFoundException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAccountsForParent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAccountsForParent",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAccountsForParentInput
  },
  output: {
    shape: ListAccountsForParentOutput
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
