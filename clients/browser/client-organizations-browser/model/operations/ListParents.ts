import { ListParentsInput } from "../shapes/ListParentsInput";
import { ListParentsOutput } from "../shapes/ListParentsOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ChildNotFoundException } from "../shapes/ChildNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListParents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListParents",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListParentsInput
  },
  output: {
    shape: ListParentsOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AWSOrganizationsNotInUseException
    },
    {
      shape: ChildNotFoundException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
