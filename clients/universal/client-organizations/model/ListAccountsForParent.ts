import { ListAccountsForParentInput } from "./ListAccountsForParentInput";
import { ListAccountsForParentOutput } from "./ListAccountsForParentOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { InvalidInputException } from "./InvalidInputException";
import { ParentNotFoundException } from "./ParentNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
