import { ListChildrenInput } from "../shapes/ListChildrenInput";
import { ListChildrenOutput } from "../shapes/ListChildrenOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ParentNotFoundException } from "../shapes/ParentNotFoundException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListChildren: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListChildren",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListChildrenInput
  },
  output: {
    shape: ListChildrenOutput
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
