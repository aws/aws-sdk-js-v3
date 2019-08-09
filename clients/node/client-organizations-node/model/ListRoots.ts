import { ListRootsInput } from "./ListRootsInput";
import { ListRootsOutput } from "./ListRootsOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListRoots: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRoots",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRootsInput
  },
  output: {
    shape: ListRootsOutput
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
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
