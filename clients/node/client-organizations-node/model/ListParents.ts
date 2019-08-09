import { ListParentsInput } from "./ListParentsInput";
import { ListParentsOutput } from "./ListParentsOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ChildNotFoundException } from "./ChildNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
